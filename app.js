/* =========================================================
   Caderno de Questões — lógica do sistema
   Sem frameworks. Tudo é salvo no navegador (localStorage).
   ========================================================= */

const CHAVE = "caderno_fatec_v1";
const CHAVE_TEMA = "caderno_fatec_tema";

const CATEGORIAS = [
  "Língua Portuguesa", "Língua Inglesa", "Literatura", "Matemática",
  "Lógica", "Física", "Química", "Biologia", "História", "Geografia",
  "Atualidades"
];

let estado = carregar();
let sessaoAtualId = null;
let jsonAtual = "";

/* ---------- armazenamento ---------- */

function carregar() {
  let dados = null;
  try { dados = JSON.parse(localStorage.getItem(CHAVE)); } catch (e) { dados = null; }
  const removidos = (dados && dados.removidos) ? dados.removidos : [];
  return {
    sessoes: (dados && dados.sessoes) ? dados.sessoes : [],
    removidos: removidos,
    banco: mesclarBanco((dados && dados.banco) ? dados.banco : [], removidos)
  };
}

function mesclarBanco(bancoSalvo, removidos) {
  const mapa = new Map();
  for (const q of bancoSalvo) if (!removidos.includes(q.id)) mapa.set(q.id, q);
  const padrao = (typeof BANCO_PADRAO !== "undefined") ? BANCO_PADRAO : [];
  for (const q of padrao) if (!removidos.includes(q.id)) mapa.set(q.id, q); // o arquivo vence
  return Array.from(mapa.values());
}

function salvar() {
  localStorage.setItem(CHAVE, JSON.stringify(estado));
  mostrarSalvo();
}

function mostrarSalvo(msg) {
  const el = document.getElementById("salvo");
  if (!el) return;
  el.textContent = msg || "progresso salvo ✓";
  el.classList.add("visivel");
  clearTimeout(mostrarSalvo._t);
  mostrarSalvo._t = setTimeout(function () { el.classList.remove("visivel"); }, 1600);
}

/* ---------- tema (claro / escuro) ---------- */

function aplicarTema(tema) {
  document.documentElement.dataset.tema = tema;
  const btn = document.getElementById("btn-tema");
  if (btn) btn.textContent = tema === "escuro" ? "Modo claro" : "Modo escuro";
  localStorage.setItem(CHAVE_TEMA, tema);
}

function alternarTema() {
  const atual = document.documentElement.dataset.tema;
  aplicarTema(atual === "escuro" ? "claro" : "escuro");
}

function temaInicial() {
  const salvo = localStorage.getItem(CHAVE_TEMA);
  if (salvo) return salvo;
  const prefereEscuro = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefereEscuro ? "escuro" : "claro";
}

/* ---------- utilidades ---------- */

function esc(txt) {
  return String(txt === undefined || txt === null ? "" : txt).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function acharQuestao(id) { return estado.banco.find(function (q) { return q.id === id; }); }
function acharSessao(id) { return estado.sessoes.find(function (s) { return s.id === id; }); }
function sessao() { return acharSessao(sessaoAtualId); }

function sortear(lista, n) {
  const copia = lista.slice();
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = copia[i]; copia[i] = copia[j]; copia[j] = t;
  }
  return copia.slice(0, n);
}

function dataCurta(iso) {
  try {
    return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
  } catch (e) { return ""; }
}

function nomeSessao(s) {
  return s.modo === "geral" ? "Prova geral" : "Só " + s.materia;
}

/* ---------- JSON de uma questão (copiar para questoes.js) ---------- */

function gerarJsonQuestao(q) {
  return "  " + JSON.stringify(q, null, 2).split("\n").join("\n  ") + ",";
}

function abrirJson(id) {
  const q = acharQuestao(id);
  if (!q) return;
  jsonAtual = gerarJsonQuestao(q);
  document.getElementById("json-conteudo").textContent = jsonAtual;
  document.getElementById("modal-json").hidden = false;
  selecionarTexto(document.getElementById("json-conteudo"));
}

function fecharJson() {
  document.getElementById("modal-json").hidden = true;
}

function selecionarTexto(el) {
  const range = document.createRange();
  range.selectNodeContents(el);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

function copiarJson() {
  const texto = jsonAtual;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(texto)
      .then(function () { mostrarSalvo("json copiado ✓"); })
      .catch(function () { copiarFallback(texto); });
  } else {
    copiarFallback(texto);
  }
}

function copiarFallback(texto) {
  const area = document.createElement("textarea");
  area.value = texto;
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  try {
    document.execCommand("copy");
    mostrarSalvo("json copiado ✓");
  } catch (e) {
    mostrarSalvo("não consegui copiar — o texto está selecionado, use Ctrl+C");
  }
  document.body.removeChild(area);
}

/* ---------- sessões de prova ---------- */

function criarSessao(config) {
  const pool = config.modo === "geral"
    ? estado.banco.slice()
    : estado.banco.filter(function (q) { return q.materia === config.materia; });

  if (pool.length === 0) return null;

  const n = config.quantidade === "todas" ? pool.length : Math.min(config.quantidade, pool.length);
  const escolhidas = config.embaralhar ? sortear(pool, n) : pool.slice(0, n);

  const agora = new Date().toISOString();
  const s = {
    id: "s" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    criadaEm: agora,
    atualizadoEm: agora,
    modo: config.modo,
    materia: config.materia || null,
    ordem: escolhidas.map(function (q) { return q.id; }),
    respostas: {},
    atual: 0,
    status: "em_andamento"
  };
  estado.sessoes.push(s);
  salvar();
  return s;
}

function responder(indice) {
  const s = sessao();
  const qid = s.ordem[s.atual];
  s.respostas[qid] = indice;
  s.atualizadoEm = new Date().toISOString();
  salvar();
  renderizarProva();
}

function mover(delta) {
  const s = sessao();
  s.atual = Math.min(Math.max(s.atual + delta, 0), s.ordem.length - 1);
  s.atualizadoEm = new Date().toISOString();
  salvar();
  renderizarProva();
}

function finalizarProva() {
  const s = sessao();
  const emBranco = s.ordem.length - Object.keys(s.respostas).length;
  if (emBranco > 0 && !confirm("Faltam " + emBranco + " questão(ões) em branco. Finalizar mesmo assim?")) return;
  s.status = "concluida";
  s.finalizadaEm = new Date().toISOString();
  salvar();
  mostrar("resultado");
  renderizarResultado(s);
}

function contarAcertos(s) {
  return s.ordem.reduce(function (n, id) {
    const q = acharQuestao(id);
    return n + (q && s.respostas[id] === q.correta ? 1 : 0);
  }, 0);
}

/* ---------- telas ---------- */

function mostrar(nome) {
  document.querySelectorAll(".tela").forEach(function (sec) { sec.classList.remove("ativa"); });
  const alvo = document.getElementById("tela-" + nome);
  if (alvo) alvo.classList.add("ativa");
  window.scrollTo(0, 0);
  if (nome === "home") renderizarHome();
  if (nome === "historico") renderizarHistorico();
  if (nome === "banco") renderizarBanco();
}

function abrirFormNova(modo) {
  const radio = document.querySelector('input[name="modo"][value="' + modo + '"]');
  if (radio) radio.checked = true;
  alternarModo();
  mostrar("nova");
}

function alternarModo() {
  const modo = document.querySelector('input[name="modo"]:checked').value;
  document.getElementById("campos-materia").hidden = modo !== "materia";
}

function renderizarHome() {
  const andamento = estado.sessoes
    .filter(function (s) { return s.status === "em_andamento"; })
    .sort(function (a, b) { return new Date(b.atualizadoEm) - new Date(a.atualizadoEm); });

  const el = document.getElementById("lista-andamento");
  if (andamento.length === 0) {
    el.innerHTML = '<p class="texto-medio">Nenhuma prova em andamento. Comece uma — ela é salva automaticamente.</p>';
    return;
  }
  el.innerHTML = andamento.map(function (s) {
    const respondidas = Object.keys(s.respostas).length;
    return '<div class="linha-resumo"><div><strong>' + esc(nomeSessao(s)) + "</strong>" +
      '<p class="texto-medio">' + dataCurta(s.criadaEm) + " · " + respondidas + " de " + s.ordem.length + " respondidas</p></div>" +
      '<div class="acoes"><button class="btn btn-pequeno" data-continuar="' + esc(s.id) + '">Continuar</button>' +
      '<button class="link" data-descartar="' + esc(s.id) + '">descartar</button></div></div>';
  }).join("");
}

function renderizarProva() {
  const s = sessao();
  if (!s || s.status !== "em_andamento") { mostrar("home"); return; }

  const qid = s.ordem[s.atual];
  const q = acharQuestao(qid) || {
    enunciado: "Esta questão foi removida do banco.",
    alternativas: [], correta: -1, materia: ""
  };

  document.getElementById("prova-modo").textContent = nomeSessao(s);
  document.getElementById("prova-contador").textContent =
    "Questão " + (s.atual + 1) + " de " + s.ordem.length + " · " +
    Object.keys(s.respostas).length + " respondida(s)";
  document.getElementById("questao-numero").textContent = String(s.atual + 1).padStart(2, "0");
  document.getElementById("questao-materia").innerHTML =
    q.materia ? '<span class="tag">' + esc(q.materia) + "</span>" : "";
  document.getElementById("questao-enunciado").textContent = q.enunciado;

  const letras = ["A", "B", "C", "D", "E"];
  document.getElementById("questao-alternativas").innerHTML = q.alternativas.map(function (texto, i) {
    const marcada = s.respostas[qid] === i ? " marcada" : "";
    return '<button type="button" class="alternativa' + marcada + '" data-idx="' + i + '">' +
      '<span class="bolha">' + letras[i] + "</span>" +
      '<span class="alt-texto">' + esc(texto) + "</span></button>";
  }).join("");

  document.getElementById("prova-quadro").innerHTML = s.ordem.map(function (id, i) {
    const cls = (i === s.atual ? "atual " : "") + (s.respostas[id] !== undefined ? "respondida" : "");
    return '<button type="button" class="' + cls + '" data-indice="' + i + '">' + (i + 1) + "</button>";
  }).join("");

  document.getElementById("btn-anterior").disabled = s.atual === 0;
  document.getElementById("btn-proxima").disabled = s.atual >= s.ordem.length - 1;
}

function renderizarResultado(s) {
  const total = s.ordem.length;
  const porMateria = {};
  let acertos = 0;

  const itens = s.ordem.map(function (qid) {
    const q = acharQuestao(qid);
    const resposta = s.respostas[qid];
    const certa = !!(q && resposta === q.correta);
    if (certa) acertos++;
    const chave = q ? q.materia : "Removida";
    if (!porMateria[chave]) porMateria[chave] = { acertos: 0, total: 0 };
    porMateria[chave].total++;
    if (certa) porMateria[chave].acertos++;
    return { q: q, resposta: resposta, certa: certa };
  });

  document.getElementById("resultado-titulo").textContent = nomeSessao(s);
  document.getElementById("resultado-meta").textContent =
    dataCurta(s.criadaEm) + " · " + total + " questões · " +
    Math.round((acertos / (total || 1)) * 100) + "% de acerto";
  document.getElementById("resultado-nota").textContent = acertos + "/" + total;

  document.getElementById("resultado-por-materia").innerHTML =
    Object.keys(porMateria).sort().map(function (nome) {
      const d = porMateria[nome];
      return '<div class="linha-resumo"><span>' + esc(nome) + "</span><strong>" +
        d.acertos + "/" + d.total + "</strong></div>";
    }).join("");

  const letras = ["A", "B", "C", "D", "E"];
  document.getElementById("resultado-correcao").innerHTML = itens.map(function (item, i) {
    if (!item.q) return "";
    const sua = item.resposta === undefined
      ? "em branco"
      : letras[item.resposta] + " — " + esc(item.q.alternativas[item.resposta]);
    const correta = letras[item.q.correta] + " — " + esc(item.q.alternativas[item.q.correta]);
    return '<div class="correcao-item ' + (item.certa ? "certa" : "errada") + '">' +
      '<p class="correcao-enunciado"><strong>' + (i + 1) + ".</strong> " + esc(item.q.enunciado) + "</p>" +
      '<p class="linha-resposta errada-txt">Sua resposta: ' + sua + "</p>" +
      '<p class="linha-resposta certa-txt">Resposta correta: ' + correta + "</p>" +
      (item.q.explicacao ? '<p class="texto-medio">' + esc(item.q.explicacao) + "</p>" : "") +
      "</div>";
  }).join("");
}

function renderizarHistorico() {
  const feitas = estado.sessoes
    .filter(function (s) { return s.status === "concluida"; })
    .sort(function (a, b) { return new Date(b.finalizadaEm) - new Date(a.finalizadaEm); });

  const el = document.getElementById("lista-historico");
  if (feitas.length === 0) {
    el.innerHTML = '<p class="texto-medio">Nenhuma prova concluída ainda.</p>';
    return;
  }
  el.innerHTML = feitas.map(function (s) {
    return '<div class="linha-resumo"><div><strong>' + esc(nomeSessao(s)) + "</strong>" +
      '<p class="texto-medio">' + dataCurta(s.criadaEm) + " · " +
      contarAcertos(s) + "/" + s.ordem.length + " acertos</p></div>" +
      '<button class="btn-secundario btn-pequeno" data-ver="' + esc(s.id) + '">Ver correção</button></div>';
  }).join("");
}

function renderizarBanco() {
  const contagens = {};
  for (const q of estado.banco) {
    contagens[q.materia] = (contagens[q.materia] || 0) + 1;
  }
  document.getElementById("banco-resumo").innerHTML =
    Object.keys(contagens).sort().map(function (nome) {
      return '<span class="tag">' + esc(nome) + ": " + contagens[nome] + "</span>";
    }).join(" ");

  document.getElementById("lista-questoes").innerHTML = estado.banco.map(function (q) {
    return '<div class="correcao-item"><p class="correcao-enunciado">' + esc(q.enunciado) + "</p>" +
      '<p class="texto-medio">' + esc(q.materia) + " · correta: " + "ABCDE"[q.correta] + "</p>" +
      '<div class="acoes">' +
      '<button class="btn-secundario btn-pequeno" data-json="' + esc(q.id) + '">ver json</button>' +
      '<button class="link" data-excluir="' + esc(q.id) + '">excluir</button>' +
      "</div></div>";
  }).join("");
}

/* ---------- ações de interface ---------- */

function submeterNovaProva(e) {
  e.preventDefault();
  const modo = document.querySelector('input[name="modo"]:checked').value;
  const qtdSelecionada = document.getElementById("quantidade").value;

  const config = {
    modo: modo,
    materia: modo === "materia" ? document.getElementById("materia-selecionada").value : null,
    quantidade: qtdSelecionada === "todas" ? "todas" : parseInt(qtdSelecionada, 10),
    embaralhar: document.getElementById("embaralhar").checked
  };

  const s = criarSessao(config);
  if (!s) {
    alert("Não há questões no banco para essa configuração.");
    return;
  }
  const pedidas = config.quantidade === "todas" ? s.ordem.length : config.quantidade;
  if (s.ordem.length < pedidas) {
    alert("O banco só tem " + s.ordem.length + " questão(ões) para essa configuração. A prova foi criada com essa quantidade.");
  }
  sessaoAtualId = s.id;
  mostrar("prova");
  renderizarProva();
}

function submeterQuestao(e) {
  e.preventDefault();
  const enunciado = document.getElementById("nova-enunciado").value.trim();
  const alternativas = Array.prototype.map.call(
    document.querySelectorAll(".alt-input"), function (i) { return i.value.trim(); }
  );
  const materia = document.getElementById("nova-materia").value;

  if (!enunciado) { alert("Escreva o enunciado."); return; }
  if (alternativas.some(function (a) { return !a; })) { alert("Preencha as cinco alternativas."); return; }

  estado.banco.push({
    id: "u" + Date.now().toString(36),
    enunciado: enunciado,
    alternativas: alternativas,
    correta: parseInt(document.getElementById("nova-correta").value, 10),
    materia: materia,
    explicacao: document.getElementById("nova-explicacao").value.trim()
  });
  salvar();
  e.target.reset();
  renderizarBanco();
}

function clicarAlternativa(e) {
  const botao = e.target.closest(".alternativa");
  if (!botao) return;
  responder(parseInt(botao.dataset.idx, 10));
}

function clicarQuadro(e) {
  const botao = e.target.closest("button[data-indice]");
  if (!botao) return;
  const s = sessao();
  s.atual = parseInt(botao.dataset.indice, 10);
  s.atualizadoEm = new Date().toISOString();
  salvar();
  renderizarProva();
}

function clicarAndamento(e) {
  const cont = e.target.closest("[data-continuar]");
  if (cont) {
    const s = acharSessao(cont.dataset.continuar);
    if (!s) return;
    sessaoAtualId = s.id;
    mostrar("prova");
    renderizarProva();
    return;
  }
  const desc = e.target.closest("[data-descartar]");
  if (desc) {
    if (!confirm("Descartar esta prova em andamento?")) return;
    estado.sessoes = estado.sessoes.filter(function (s) { return s.id !== desc.dataset.descartar; });
    salvar();
    renderizarHome();
  }
}

function clicarHistorico(e) {
  const b = e.target.closest("[data-ver]");
  if (!b) return;
  const s = acharSessao(b.dataset.ver);
  if (!s) return;
  mostrar("resultado");
  renderizarResultado(s);
}

function clicarListaQuestoes(e) {
  const j = e.target.closest("[data-json]");
  if (j) {
    abrirJson(j.dataset.json);
    return;
  }
  const b = e.target.closest("[data-excluir]");
  if (!b) return;
  if (!confirm("Excluir esta questão do banco?")) return;
  estado.banco = estado.banco.filter(function (q) { return q.id !== b.dataset.excluir; });
  estado.removidos.push(b.dataset.excluir);
  salvar();
  renderizarBanco();
}

/* ---------- exportar e restaurar ---------- */

function exportarProgresso() {
  const dados = {
    versao: 1,
    exportadoEm: new Date().toISOString(),
    sessoes: estado.sessoes,
    banco: estado.banco,
    removidos: estado.removidos
  };
  const blob = new Blob([JSON.stringify(dados, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "progresso-" + new Date().toISOString().slice(0, 10) + ".json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(function () { URL.revokeObjectURL(link.href); }, 1000);
}

function importarArquivo(ev) {
  const arquivo = ev.target.files[0];
  ev.target.value = "";
  if (!arquivo) return;
  const leitor = new FileReader();
  leitor.onload = function () {
    try {
      mesclarDados(JSON.parse(leitor.result));
      alert("Progresso importado com sucesso.");
      mostrar("home");
    } catch (e) {
      alert("Não consegui ler esse arquivo. Ele precisa ser um .json exportado por este sistema.");
    }
  };
  leitor.readAsText(arquivo);
}

function mesclarDados(dados) {
  const mapaS = new Map(estado.sessoes.map(function (s) { return [s.id, s]; }));
  for (const s of (dados.sessoes || [])) {
    const atual = mapaS.get(s.id);
    const tNovo = new Date(s.atualizadoEm || s.criadaEm || 0).getTime();
    const tVelho = atual ? new Date(atual.atualizadoEm || atual.criadaEm || 0).getTime() : -1;
    if (!atual || tNovo > tVelho) mapaS.set(s.id, s);
  }

  const mapaB = new Map(estado.banco.map(function (q) { return [q.id, q]; }));
  for (const q of (dados.banco || [])) mapaB.set(q.id, q);

  const removidos = {};
  for (const id of estado.removidos) removidos[id] = true;
  for (const id of (dados.removidos || [])) removidos[id] = true;

  estado.sessoes = Array.from(mapaS.values());
  estado.removidos = Object.keys(removidos);
  estado.banco = Array.from(mapaB.values()).filter(function (q) { return !removidos[q.id]; });
  salvar();
}

/* ---------- preparação ---------- */

function prepararSelects() {
  const opcoes = CATEGORIAS.map(function (c) {
    return '<option value="' + esc(c) + '">' + esc(c) + "</option>";
  }).join("");
  document.getElementById("materia-selecionada").innerHTML = opcoes;
  document.getElementById("nova-materia").innerHTML = opcoes;
}

document.addEventListener("DOMContentLoaded", function () {
  prepararSelects();
  aplicarTema(temaInicial());

  document.querySelectorAll("[data-tela]").forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.preventDefault();
      mostrar(b.dataset.tela);
    });
  });

  document.getElementById("btn-tema").addEventListener("click", alternarTema);

  document.getElementById("btn-geral").addEventListener("click", function () { abrirFormNova("geral"); });
  document.getElementById("btn-materia").addEventListener("click", function () { abrirFormNova("materia"); });
  document.getElementById("btn-nova-depois").addEventListener("click", function () { abrirFormNova("geral"); });

  document.querySelectorAll('input[name="modo"]').forEach(function (r) {
    r.addEventListener("change", alternarModo);
  });
  document.getElementById("form-nova").addEventListener("submit", submeterNovaProva);

  document.getElementById("questao-alternativas").addEventListener("click", clicarAlternativa);
  document.getElementById("prova-quadro").addEventListener("click", clicarQuadro);
  document.getElementById("btn-anterior").addEventListener("click", function () { mover(-1); });
  document.getElementById("btn-proxima").addEventListener("click", function () { mover(1); });
  document.getElementById("btn-finalizar").addEventListener("click", finalizarProva);

  document.getElementById("lista-andamento").addEventListener("click", clicarAndamento);
  document.getElementById("lista-historico").addEventListener("click", clicarHistorico);
  document.getElementById("lista-questoes").addEventListener("click", clicarListaQuestoes);
  document.getElementById("form-questao").addEventListener("submit", submeterQuestao);

  document.getElementById("btn-exportar").addEventListener("click", exportarProgresso);
  document.getElementById("btn-importar").addEventListener("click", function () {
    document.getElementById("arquivo-importar").click();
  });
  document.getElementById("arquivo-importar").addEventListener("change", importarArquivo);

  document.getElementById("btn-copiar-json").addEventListener("click", copiarJson);
  document.getElementById("btn-fechar-json").addEventListener("click", fecharJson);
  document.getElementById("modal-json").addEventListener("click", function (e) {
    if (e.target.id === "modal-json") fecharJson();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") fecharJson();
  });

  mostrar("home");
});