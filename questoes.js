const BANCO_PADRAO = [
  {
    id: "q001",
    enunciado: "Uma cooperativa agrícola substituiu parte dos fertilizantes nitrogenados por uma técnica que utiliza leguminosas associadas a bactérias do gênero Rhizobium. Qual é o principal benefício biológico dessa associação?",
    alternativas: [
      "Transformar diretamente o nitrogênio atmosférico em oxigênio para as raízes.",
      "Converter o nitrogênio atmosférico em compostos nitrogenados assimiláveis pelas plantas.",
      "Impedir a decomposição da matéria orgânica no solo.",
      "Eliminar a necessidade de água durante a fotossíntese.",
      "Transformar glicose em sais minerais por meio da respiração celular."
    ],
    correta: 1,
    materia: "Biologia",
    explicacao: "As bactérias associadas às raízes das leguminosas realizam a fixação biológica do nitrogênio, convertendo N₂ atmosférico em compostos que podem ser aproveitados pelas plantas. A associação também favorece as bactérias, que recebem matéria orgânica produzida pela planta."
  },
  {
    id: "q002",
    enunciado: "Uma empresa de entregas cobra uma taxa fixa de R$ 8,00 mais R$ 2,50 por quilômetro percorrido. Se o cliente pagou R$ 33,00, qual foi a distância percorrida?",
    alternativas: [
      "8 km",
      "9 km",
      "10 km",
      "12 km",
      "13 km"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "O valor variável foi 33 − 8 = 25 reais. Dividindo 25 por 2,50, obtém-se 10 km. A situação é representada pela função C(d) = 8 + 2,50d."
  },
  {
    id: "q003",
    enunciado: "Leia o trecho: \"A prefeitura anunciou a ampliação das ciclovias. A medida, segundo o relatório, pretende reduzir o número de automóveis nas vias centrais. Essa iniciativa também poderá diminuir a poluição atmosférica.\" A expressão \"Essa iniciativa\" estabelece um mecanismo de coesão textual porque",
    alternativas: [
      "introduz um assunto sem relação com as informações anteriores.",
      "retoma a ampliação das ciclovias, evitando a repetição integral da informação.",
      "contradiz a informação apresentada no relatório.",
      "indica que a redução da poluição já ocorreu necessariamente.",
      "substitui uma conjunção conclusiva por uma conjunção adversativa."
    ],
    correta: 1,
    materia: "Língua Portuguesa",
    explicacao: "A expressão demonstrativa retoma uma informação anterior, especificamente a ampliação das ciclovias. Essa retomada referencial conecta as frases e evita repetição desnecessária."
  },
  {
    id: "q004",
    enunciado: "A mixture contains sand, salt and water. A student wants to recover the dry sand and the salt separately. Which procedure is appropriate?",
    alternativas: [
      "Filter the mixture, then evaporate the water from the filtrate.",
      "Freeze the mixture and separate the ice with a magnet.",
      "Use a magnet to remove both the sand and the salt.",
      "Distill the mixture without separating the sand first, then discard the residue.",
      "Add more water until both solids disappear permanently."
    ],
    correta: 0,
    materia: "Língua Inglesa",
    explicacao: "The sand is insoluble in water, so filtration separates it from the salt solution. Evaporation then removes the water, leaving the salt behind. The procedure uses the physical properties of the substances."
  },
  {
    id: "q005",
    enunciado: "Em uma narrativa, o narrador descreve um personagem que afirma defender a honestidade, mas que, ao encontrar uma carteira, fica com o dinheiro e inventa uma justificativa para si mesmo. O contraste entre o discurso e a ação do personagem contribui principalmente para",
    alternativas: [
      "eliminar qualquer possibilidade de crítica social no texto.",
      "caracterizar uma oposição entre os valores declarados e o comportamento efetivo.",
      "comprovar que o personagem é narrador onisciente.",
      "transformar automaticamente a narrativa em um texto científico.",
      "demonstrar que toda narrativa precisa terminar com uma moral explícita."
    ],
    correta: 1,
    materia: "Literatura",
    explicacao: "O contraste entre aquilo que o personagem afirma e aquilo que faz evidencia uma contradição de caráter. Esse recurso pode produzir ironia e crítica, sem exigir uma moral explícita."
  },
  {
    id: "q006",
    enunciado: "Em uma fábrica, uma máquina realiza um trabalho de 6 000 J em 20 segundos, mantendo potência média constante. Qual é sua potência média?",
    alternativas: [
      "120 W",
      "200 W",
      "300 W",
      "600 W",
      "1 200 W"
    ],
    correta: 2,
    materia: "Física",
    explicacao: "A potência média é a razão entre o trabalho e o tempo: P = 6 000/20 = 300 W."
  },
  {
    id: "q007",
    enunciado: "Uma senha é formada por três algarismos distintos, escolhidos entre 1, 2, 3, 4 e 5. Quantas senhas diferentes podem ser formadas, considerando que a ordem dos algarismos importa?",
    alternativas: [
      "10",
      "15",
      "30",
      "60",
      "125"
    ],
    correta: 3,
    materia: "Lógica",
    explicacao: "Há cinco opções para a primeira posição, quatro para a segunda e três para a terceira. Pelo princípio multiplicativo, são 5 × 4 × 3 = 60 senhas."
  },
  {
    id: "q008",
    enunciado: "Uma amostra de 100 g de carbonato de cálcio puro sofre decomposição completa, produzindo 56 g de óxido de cálcio e um gás. Considerando a conservação da massa e supondo que não haja perdas, qual é a massa do gás produzido?",
    alternativas: [
      "22 g",
      "36 g",
      "44 g",
      "56 g",
      "156 g"
    ],
    correta: 2,
    materia: "Química",
    explicacao: "Pela lei de conservação da massa, a massa inicial é igual à soma das massas dos produtos. Logo, a massa do gás é 100 − 56 = 44 g."
  },
  {
    id: "q009",
    enunciado: "Durante a Revolução Industrial inglesa, a mecanização da produção ampliou a capacidade das fábricas e transformou as relações de trabalho. Uma consequência social importante desse processo foi",
    alternativas: [
      "o desaparecimento imediato das desigualdades econômicas.",
      "a redução da população urbana em razão do fechamento das fábricas.",
      "a expansão do trabalho assalariado e o crescimento das cidades industriais.",
      "a substituição completa do comércio internacional pela agricultura familiar.",
      "o fim dos conflitos entre trabalhadores e proprietários."
    ],
    correta: 2,
    materia: "História",
    explicacao: "A industrialização ampliou o trabalho assalariado e atraiu população para os centros urbanos. As novas relações de produção também contribuíram para conflitos trabalhistas e desigualdades sociais."
  },
  {
    id: "q010",
    enunciado: "Uma cidade impermeabilizou extensas áreas para construir estacionamentos e avenidas. Após chuvas intensas, passou a registrar alagamentos mais frequentes. Qual medida atua diretamente sobre uma das causas desse problema?",
    alternativas: [
      "Ampliar a impermeabilização dos terrenos restantes.",
      "Canalizar todo o escoamento para o ponto mais baixo da cidade.",
      "Eliminar as áreas verdes para facilitar a circulação de veículos.",
      "Implantar superfícies permeáveis e ampliar áreas de infiltração da água.",
      "Aumentar a quantidade de concreto nos leitos dos rios sem avaliar a vazão."
    ],
    correta: 3,
    materia: "Geografia",
    explicacao: "A impermeabilização reduz a infiltração e aumenta o escoamento superficial. Superfícies permeáveis, áreas verdes e estruturas de retenção ajudam a infiltrar ou armazenar parte da água da chuva."
  },
  {
    id: "q011",
    enunciado: "Uma pesquisa sobre mobilidade urbana identificou que moradores de bairros periféricos gastam, em média, mais tempo no transporte público do que moradores de regiões centrais. Qual interpretação relaciona adequadamente esse resultado à organização do espaço urbano?",
    alternativas: [
      "A distribuição dos serviços e dos empregos pode produzir desigualdades no acesso à cidade.",
      "A distância percorrida é determinada exclusivamente pelas preferências individuais.",
      "O tempo de deslocamento não tem relação com a localização das oportunidades de trabalho.",
      "A existência de transporte público elimina automaticamente a segregação socioespacial.",
      "As diferenças de deslocamento comprovam que a população periférica trabalha menos."
    ],
    correta: 0,
    materia: "Atualidades",
    explicacao: "A distribuição desigual de empregos, serviços e infraestrutura influencia os deslocamentos cotidianos. O tempo de viagem pode refletir desigualdades socioespaciais e diferenças na oferta de transporte."
  },
  {
    id: "q012",
    enunciado: "Uma cultura de bactérias dobra sua população a cada 3 horas. Inicialmente, há 200 bactérias. Mantidas as condições de crescimento, quantas haverá após 9 horas?",
    alternativas: [
      "400",
      "600",
      "800",
      "1 200",
      "1 600"
    ],
    correta: 4,
    materia: "Matemática",
    explicacao: "Em 9 horas ocorrem três períodos de duplicação. A população será 200 × 2³ = 200 × 8 = 1 600 bactérias."
  },
  {
    id: "q013",
    enunciado: "Leia: \"Embora o equipamento seja caro, sua utilização pode reduzir o consumo de energia ao longo dos anos.\" A conjunção \"Embora\" estabelece uma relação de",
    alternativas: [
      "causa.",
      "concessão.",
      "conclusão.",
      "explicação.",
      "alternância."
    ],
    correta: 1,
    materia: "Língua Portuguesa",
    explicacao: "\"Embora\" introduz uma ideia concessiva: o alto custo inicial é reconhecido, mas não impede a possibilidade de economia futura."
  },
  {
    id: "q014",
    enunciado: "Read the text: \"The city introduced a repair program for old bicycles. Residents can bring damaged bikes to community workshops, where volunteers help fix them. The program aims to reduce waste and make transportation more affordable.\" What is the main purpose of the program?",
    alternativas: [
      "To encourage residents to buy new bicycles every year.",
      "To replace all forms of public transportation.",
      "To reduce waste and make bicycle use more accessible.",
      "To prevent volunteers from repairing damaged equipment.",
      "To increase the price of transportation in the city."
    ],
    correta: 2,
    materia: "Língua Inglesa",
    explicacao: "The text explicitly states two goals: reducing waste and making transportation more affordable. Repairing existing bicycles supports both objectives."
  },
  {
    id: "q015",
    enunciado: "Em uma pilha eletroquímica em funcionamento espontâneo, ocorre uma reação de oxirredução que transforma energia química em energia elétrica. Nesse dispositivo, a oxidação ocorre",
    alternativas: [
      "no cátodo, onde os elétrons são consumidos.",
      "no ânodo, onde há perda de elétrons.",
      "simultaneamente apenas no eletrólito, sem participação dos eletrodos.",
      "no cátodo, onde há perda de elétrons em qualquer tipo de pilha.",
      "fora do circuito, pois não há transferência de elétrons."
    ],
    correta: 1,
    materia: "Química",
    explicacao: "Oxidação é a perda de elétrons e ocorre no ânodo. Na pilha, os elétrons percorrem o circuito externo em direção ao cátodo, onde ocorre a redução."
  },
  {
    id: "q016",
    enunciado: "Uma pessoa lê um romance no qual os acontecimentos são apresentados por meio de cartas escritas pelos próprios personagens. Esse recurso narrativo tende a permitir que o leitor",
    alternativas: [
      "tenha acesso exclusivamente a informações científicas verificadas.",
      "conheça os acontecimentos por perspectivas pessoais e limitadas dos remetentes.",
      "elimine a influência do ponto de vista na interpretação da história.",
      "identifique obrigatoriamente um narrador externo onisciente.",
      "conclua que o texto pertence necessariamente ao gênero dramático."
    ],
    correta: 1,
    materia: "Literatura",
    explicacao: "A narrativa epistolar organiza os acontecimentos por meio de cartas. Como cada remetente apresenta sua perspectiva, as informações podem ser parciais e subjetivas."
  },
  {
    id: "q017",
    enunciado: "Um automóvel percorre 150 km em 2 horas e 30 minutos, mantendo velocidade escalar média constante durante todo o percurso. Qual é a velocidade escalar média em km/h?",
    alternativas: [
      "45",
      "50",
      "55",
      "60",
      "75"
    ],
    correta: 3,
    materia: "Física",
    explicacao: "Duas horas e 30 minutos equivalem a 2,5 horas. A velocidade média é 150/2,5 = 60 km/h."
  },
  {
    id: "q018",
    enunciado: "Em uma caixa há 4 cartões azuis, 3 vermelhos e 3 verdes, todos do mesmo tamanho. Um cartão é retirado ao acaso. Qual é a probabilidade de ele não ser vermelho?",
    alternativas: [
      "3/10",
      "4/10",
      "5/10",
      "7/10",
      "8/10"
    ],
    correta: 3,
    materia: "Lógica",
    explicacao: "Há 10 cartões no total e 7 não são vermelhos: quatro azuis e três verdes. A probabilidade é 7/10."
  },
  {
    id: "q019",
    enunciado: "Uma solução contém 20 g de sal dissolvidos em água suficiente para completar 500 mL de solução. Qual é a concentração comum dessa solução em g/L?",
    alternativas: [
      "10",
      "20",
      "25",
      "40",
      "50"
    ],
    correta: 3,
    materia: "Química",
    explicacao: "O volume é 0,5 L. A concentração comum é a massa do soluto dividida pelo volume da solução: 20/0,5 = 40 g/L."
  },
  {
    id: "q020",
    enunciado: "Em uma região, a expansão de uma monocultura voltada à exportação substituiu parte da vegetação nativa. Além da alteração da paisagem, qual consequência ambiental pode decorrer desse processo?",
    alternativas: [
      "Aumento inevitável da diversidade biológica local.",
      "Redução de qualquer risco de erosão do solo.",
      "Fragmentação de habitats e perda de biodiversidade.",
      "Eliminação permanente da necessidade de irrigação.",
      "Interrupção de todos os ciclos de nutrientes."
    ],
    correta: 2,
    materia: "Geografia",
    explicacao: "A substituição da vegetação nativa por monoculturas pode reduzir a variedade de habitats, fragmentar ecossistemas e favorecer a perda de espécies. A intensidade dos impactos depende do manejo e das características da região."
  },
  {
    id: "q021",
    enunciado: "Uma campanha de vacinação apresenta dados que indicam redução da incidência de uma doença após a ampliação da cobertura vacinal. Para avaliar adequadamente a relação entre vacinação e redução da doença, é importante",
    alternativas: [
      "considerar apenas o número de pessoas vacinadas, sem observar a ocorrência da doença.",
      "comparar os dados ao longo do tempo e considerar outros fatores que possam influenciar a incidência.",
      "concluir que a vacina causou a redução apenas porque os dois eventos ocorreram na mesma época.",
      "desconsiderar a população total da região analisada.",
      "substituir dados epidemiológicos por opiniões individuais."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "A associação temporal é uma evidência relevante, mas não basta, isoladamente, para demonstrar causalidade. Comparações temporais, taxas populacionais e possíveis fatores de confusão fortalecem a análise."
  },
  {
    id: "q022",
    enunciado: "Um terreno retangular tem perímetro de 50 m. Seu comprimento mede 5 m a mais que sua largura. Qual é sua área?",
    alternativas: [
      "100 m²",
      "125 m²",
      "150 m²",
      "175 m²",
      "200 m²"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "Se a largura é x, o comprimento é x + 5. Como 2(x + x + 5) = 50, temos 4x + 10 = 50 e x = 10. O comprimento é 15 m, e a área é 10 × 15 = 150 m²."
  },
  {
    id: "q023",
    enunciado: "Assinale a alternativa em que a concordância verbal está de acordo com a norma-padrão.",
    alternativas: [
      "Fazem três anos que o laboratório foi inaugurado.",
      "Houveram mudanças importantes no regulamento.",
      "Existe muitas possibilidades de solução.",
      "Devem existir alternativas para reduzir o desperdício.",
      "Aconteceu diversas falhas durante o teste."
    ],
    correta: 3,
    materia: "Língua Portuguesa",
    explicacao: "Na construção \"devem existir alternativas\", o verbo existir concorda com o sujeito plural \"alternativas\", e o verbo auxiliar também fica no plural. Em sentido de tempo decorrido, fazer é impessoal; haver com sentido de existir também é impessoal."
  },
  {
    id: "q024",
    enunciado: "Read the sentence: \"Although the device is small, it can process large amounts of data.\" The word \"Although\" indicates",
    alternativas: [
      "a cause-and-effect relationship.",
      "a contrast or concession.",
      "a sequence of events.",
      "a condition that must be fulfilled.",
      "a conclusion based on numerical evidence."
    ],
    correta: 1,
    materia: "Língua Inglesa",
    explicacao: "\"Although\" introduces a concession: the device is small, but its processing capacity is large. The two ideas contrast with an expected limitation."
  },
  {
    id: "q025",
    enunciado: "Uma amostra de gás ocupa 4 L sob pressão constante e temperatura constante. Em uma comparação com outra amostra do mesmo gás, nas mesmas condições de pressão e temperatura, o volume passa a 10 L. Qual relação entre as quantidades de matéria é compatível com o modelo de gás ideal?",
    alternativas: [
      "A segunda amostra possui 2,5 vezes a quantidade de matéria da primeira.",
      "A segunda amostra possui metade da quantidade de matéria da primeira.",
      "As duas amostras possuem necessariamente a mesma quantidade de matéria.",
      "A primeira amostra possui 2,5 vezes a quantidade de matéria da segunda.",
      "A quantidade de matéria é independente do volume em quaisquer condições."
    ],
    correta: 0,
    materia: "Física",
    explicacao: "Pela lei de Avogadro, para gases nas mesmas condições de pressão e temperatura, o volume é proporcional à quantidade de matéria. A razão é 10/4 = 2,5."
  },
  {
    id: "q026",
    enunciado: "Uma equipe de desenvolvimento testa um sistema com quatro módulos independentes. Cada módulo pode funcionar ou falhar, e o sistema só é aprovado se todos funcionarem. Se cada módulo tem probabilidade de 0,9 de funcionar, qual é a probabilidade de aprovação, supondo independência?",
    alternativas: [
      "0,36",
      "0,6561",
      "0,729",
      "0,81",
      "0,90"
    ],
    correta: 1,
    materia: "Lógica",
    explicacao: "Como os quatro módulos precisam funcionar e seus resultados são independentes, multiplicam-se as probabilidades: 0,9⁴ = 0,6561."
  },
  {
    id: "q027",
    enunciado: "Na formação de uma ligação iônica entre um metal e um ametal, a estabilidade do composto está associada principalmente",
    alternativas: [
      "ao compartilhamento obrigatório de pares de elétrons entre todos os átomos.",
      "à formação de íons de cargas opostas que se atraem eletrostaticamente.",
      "à transformação dos núcleos em partículas sem carga.",
      "à eliminação de todos os elétrons da eletrosfera.",
      "à ausência de forças de atração entre os constituintes."
    ],
    correta: 1,
    materia: "Química",
    explicacao: "Na ligação iônica ocorre transferência de elétrons, formando cátions e ânions. A atração eletrostática entre esses íons mantém o composto unido."
  },
  {
    id: "q028",
    enunciado: "Um historiador compara documentos produzidos por grupos políticos rivais durante o mesmo conflito. Qual procedimento é mais adequado para analisar essas fontes?",
    alternativas: [
      "Aceitar como verdadeiro o documento mais longo.",
      "Considerar que todos os documentos possuem necessariamente a mesma intenção.",
      "Ignorar o contexto em que os documentos foram produzidos.",
      "Examinar autoria, finalidade, contexto e possíveis interesses presentes em cada documento.",
      "Escolher apenas o documento que confirma a interpretação inicial."
    ],
    correta: 3,
    materia: "História",
    explicacao: "A análise histórica crítica considera autoria, contexto, finalidade e interesses. Fontes diferentes podem registrar experiências e interpretações distintas do mesmo acontecimento."
  },
  {
    id: "q029",
    enunciado: "Em um ecossistema, a população de predadores diminui intensamente. Se esses predadores controlavam a população de herbívoros, qual consequência pode ocorrer inicialmente, supondo que os demais fatores permaneçam semelhantes?",
    alternativas: [
      "Redução obrigatória da população de herbívoros.",
      "Aumento da população de herbívoros e maior pressão sobre os produtores.",
      "Desaparecimento imediato de todos os produtores.",
      "Interrupção da transferência de energia solar para o ecossistema.",
      "Transformação dos herbívoros em decompositores."
    ],
    correta: 1,
    materia: "Biologia",
    explicacao: "A redução da predação pode permitir o aumento dos herbívoros, elevando o consumo de plantas. A intensidade e a duração dessa resposta dependem dos recursos e de outras interações ecológicas."
  },
  {
    id: "q030",
    enunciado: "Uma cidade registra aumento da temperatura média em bairros com pouca arborização e grande concentração de concreto e asfalto. Esse fenômeno é compatível com",
    alternativas: [
      "a formação de ilhas de calor urbanas.",
      "o aumento uniforme da umidade em toda a região.",
      "a redução completa da absorção de radiação solar pelas superfícies urbanas.",
      "a interrupção da circulação atmosférica em escala planetária.",
      "o desaparecimento de diferenças térmicas entre áreas urbanas e rurais."
    ],
    correta: 0,
    materia: "Geografia",
    explicacao: "Superfícies urbanas impermeáveis podem absorver e reter calor, enquanto a escassez de vegetação reduz o sombreamento e o resfriamento por evapotranspiração. Isso favorece ilhas de calor."
  },
  {
    id: "q031",
    enunciado: "Um aplicativo informa que a inflação anual de um país foi de 6%. Um produto que custava R$ 200,00 no início do período teve seu preço reajustado exatamente por essa taxa. Qual é o novo preço?",
    alternativas: [
      "R$ 206,00",
      "R$ 210,00",
      "R$ 212,00",
      "R$ 218,00",
      "R$ 220,00"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "Seis por cento de 200 é 12 reais. Somando o reajuste ao preço inicial, obtém-se R$ 212,00."
  },
  {
    id: "q032",
    enunciado: "Em \"O relatório, que foi publicado ontem, apresenta os resultados do experimento\", a oração \"que foi publicado ontem\" é classificada como",
    alternativas: [
      "oração subordinada adverbial causal.",
      "oração coordenada sindética conclusiva.",
      "oração subordinada substantiva objetiva direta.",
      "oração subordinada adjetiva explicativa.",
      "oração principal de um período composto por coordenação."
    ],
    correta: 3,
    materia: "Língua Portuguesa",
    explicacao: "A oração introduzida por \"que\" caracteriza o substantivo \"relatório\" e aparece isolada por vírgulas. Por isso, é uma oração subordinada adjetiva explicativa."
  },
  {
    id: "q033",
    enunciado: "Read the text: \"Maya used to take the bus to work. Since the new bike lanes opened, she has cycled three days a week. She says the trip is now cheaper and more predictable.\" What can be inferred from the text?",
    alternativas: [
      "Maya never used public transportation.",
      "The bike lanes made every trip impossible.",
      "Maya now cycles regularly and perceives practical benefits.",
      "Maya's employer forced her to buy a bicycle.",
      "The text proves that cycling is always faster than taking a bus."
    ],
    correta: 2,
    materia: "Língua Inglesa",
    explicacao: "O texto informa que Maya pedala três dias por semana e considera a viagem mais barata e previsível. Não há evidência de que isso seja válido para todas as pessoas ou trajetos."
  },
  {
    id: "q034",
    enunciado: "Uma amostra de 80 g de material radioativo tem meia-vida de 6 horas. Desconsiderando a entrada de novo material, qual massa restará após 18 horas?",
    alternativas: [
      "5 g",
      "10 g",
      "20 g",
      "30 g",
      "40 g"
    ],
    correta: 1,
    materia: "Física",
    explicacao: "Em 18 horas transcorreram três meias-vidas. A massa restante é 80 × (1/2)³ = 10 g."
  },
  {
    id: "q035",
    enunciado: "Em um processo de produção, a taxa de defeitos de uma máquina é de 2%. Uma peça é selecionada ao acaso entre 500 peças produzidas, supondo-se que a taxa observada represente o conjunto. Quantas peças defeituosas são esperadas?",
    alternativas: [
      "2",
      "5",
      "10",
      "20",
      "25"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "Dois por cento de 500 é 0,02 × 500 = 10 peças. Trata-se de uma quantidade esperada com base na taxa informada."
  },
  {
    id: "q036",
    enunciado: "Uma solução aquosa apresenta pH igual a 3, enquanto outra apresenta pH igual a 5. Considerando a definição de pH, a concentração de íons H⁺ da primeira solução é",
    alternativas: [
      "duas vezes a da segunda.",
      "dez vezes a da segunda.",
      "cem vezes a da segunda.",
      "mil vezes a da segunda.",
      "cem vezes menor que a da segunda."
    ],
    correta: 2,
    materia: "Química",
    explicacao: "Cada unidade de pH corresponde a um fator dez na concentração de H⁺. A diferença de duas unidades implica uma concentração cem vezes maior na solução de pH 3."
  },
  {
    id: "q037",
    enunciado: "Na análise de um poema, a repetição de sons consonantais semelhantes em palavras próximas pode produzir um efeito expressivo de sonoridade. Esse recurso é denominado",
    alternativas: [
      "metonímia.",
      "hipérbole.",
      "aliteração.",
      "antítese.",
      "eufemismo."
    ],
    correta: 2,
    materia: "Literatura",
    explicacao: "A aliteração consiste na repetição expressiva de sons consonantais. Ela pode criar ritmo, enfatizar palavras ou reforçar a atmosfera do poema."
  },
  {
    id: "q038",
    enunciado: "Em uma experiência de genética, dois indivíduos heterozigotos para uma característica recessiva são cruzados. Considerando dominância completa e segregação mendeliana, qual é a probabilidade de um descendente apresentar o fenótipo recessivo?",
    alternativas: [
      "0%",
      "25%",
      "50%",
      "75%",
      "100%"
    ],
    correta: 1,
    materia: "Biologia",
    explicacao: "No cruzamento Aa × Aa, os genótipos possíveis são AA, Aa, Aa e aa. Apenas aa apresenta o fenótipo recessivo, correspondendo a 1/4, ou 25%."
  },
  {
    id: "q039",
    enunciado: "Um ônibus parte de uma cidade às 8h e chega ao destino às 11h30, após percorrer 210 km. Qual foi a velocidade escalar média no percurso?",
    alternativas: [
      "50 km/h",
      "55 km/h",
      "60 km/h",
      "65 km/h",
      "70 km/h"
    ],
    correta: 2,
    materia: "Física",
    explicacao: "O intervalo de tempo foi de 3,5 horas. Dividindo 210 km por 3,5 h, obtém-se 60 km/h."
  },
  {
    id: "q040",
    enunciado: "Considere a sequência 4, 9, 14, 19, ... . Mantido o padrão, qual é o décimo termo?",
    alternativas: [
      "39",
      "44",
      "45",
      "49",
      "54"
    ],
    correta: 3,
    materia: "Lógica",
    explicacao: "A sequência é uma progressão aritmética de razão 5. O décimo termo é 4 + 9 × 5 = 49. Portanto, a alternativa correta deve corresponder a 49."
  },
  {
    id: "q041",
    enunciado: "Uma empresa utiliza 3 kg de matéria-prima para fabricar 12 unidades de um produto. Mantida a mesma proporção, quantos quilogramas serão necessários para fabricar 50 unidades?",
    alternativas: [
      "10 kg",
      "12,5 kg",
      "13 kg",
      "14,5 kg",
      "15 kg"
    ],
    correta: 1,
    materia: "Matemática",
    explicacao: "Cada unidade utiliza 3/12 = 0,25 kg. Para 50 unidades, são necessários 50 × 0,25 = 12,5 kg."
  },
  {
    id: "q042",
    enunciado: "Uma notícia afirma: \"O novo sistema poderá reduzir o consumo de energia, segundo estimativas preliminares.\" A escolha do verbo \"poderá\" indica que a redução",
    alternativas: [
      "é apresentada como possibilidade, não como resultado definitivamente comprovado.",
      "já ocorreu necessariamente em todas as instalações.",
      "é negada explicitamente pelo autor.",
      "foi estabelecida como uma obrigação legal.",
      "é uma informação sem qualquer relação com o futuro."
    ],
    correta: 0,
    materia: "Língua Portuguesa",
    explicacao: "O verbo no futuro do presente, combinado ao sentido modal de possibilidade, expressa uma previsão condicionada. A frase não afirma que a redução já foi comprovada."
  },
  {
    id: "q043",
    enunciado: "Read the message: \"Please submit your report by Friday. If you need more time, contact your supervisor before the deadline.\" What should an employee do if the report will be late?",
    alternativas: [
      "Ignore the deadline and submit nothing.",
      "Contact the supervisor before Friday.",
      "Wait until next month to explain the delay.",
      "Send the report to a random colleague.",
      "Assume that the deadline has been cancelled."
    ],
    correta: 1,
    materia: "Língua Inglesa",
    explicacao: "A mensagem orienta explicitamente que quem precisar de mais tempo entre em contato com o supervisor antes do prazo final."
  },
  {
    id: "q044",
    enunciado: "Um bloco de 4 kg recebe uma força resultante horizontal de 12 N em uma superfície sem atrito. Qual é o módulo de sua aceleração?",
    alternativas: [
      "0,3 m/s²",
      "2 m/s²",
      "3 m/s²",
      "4 m/s²",
      "48 m/s²"
    ],
    correta: 2,
    materia: "Física",
    explicacao: "Pela segunda lei de Newton, F = ma. Logo, a = 12/4 = 3 m/s²."
  },
  {
    id: "q045",
    enunciado: "Um recipiente contém 2 L de uma solução com concentração de 10 g/L. Adiciona-se água até que o volume total alcance 5 L, sem perda de soluto. Qual será a nova concentração?",
    alternativas: [
      "2 g/L",
      "4 g/L",
      "5 g/L",
      "10 g/L",
      "25 g/L"
    ],
    correta: 1,
    materia: "Química",
    explicacao: "A massa de soluto permanece igual a 10 × 2 = 20 g. Com volume final de 5 L, a concentração será 20/5 = 4 g/L."
  },
  {
    id: "q046",
    enunciado: "Uma comunidade ribeirinha depende da pesca para alimentação e renda. A construção de uma barragem altera o fluxo do rio e os locais de reprodução de algumas espécies. Qual análise é mais adequada?",
    alternativas: [
      "Toda barragem elimina necessariamente qualquer possibilidade de geração de energia.",
      "A alteração do regime fluvial pode afetar ecossistemas e atividades econômicas locais.",
      "A construção de barragens não interfere nos ciclos de vida de organismos aquáticos.",
      "A produção de eletricidade garante automaticamente compensação integral às comunidades.",
      "A pesca depende exclusivamente da temperatura do ar."
    ],
    correta: 1,
    materia: "Geografia",
    explicacao: "Barragens podem modificar vazão, transporte de sedimentos e habitats aquáticos, afetando espécies e atividades humanas. A magnitude dos impactos depende do projeto, do local e das medidas de mitigação."
  },
  {
    id: "q047",
    enunciado: "Um programa público oferece acesso gratuito à internet em bibliotecas e centros comunitários. Além de disponibilizar conexão, uma política eficaz de inclusão digital deve considerar",
    alternativas: [
      "apenas o número de aparelhos adquiridos.",
      "a proibição de conteúdos educacionais em plataformas digitais.",
      "a capacitação dos usuários e as condições de acessibilidade.",
      "a substituição de todos os serviços presenciais por sistemas automáticos.",
      "a exclusão de pessoas com baixa familiaridade tecnológica."
    ],
    correta: 2,
    materia: "Atualidades",
    explicacao: "Inclusão digital envolve acesso, competências para utilizar tecnologias e acessibilidade. Disponibilizar equipamentos sem capacitação ou condições adequadas pode manter barreiras de participação."
  },
  {
    id: "q048",
    enunciado: "Em uma população, uma característica hereditária é determinada por um alelo dominante A e um alelo recessivo a. Um indivíduo com genótipo Aa tem filhos com outro indivíduo aa. Qual é a probabilidade de cada filho apresentar o genótipo Aa?",
    alternativas: [
      "0%",
      "25%",
      "50%",
      "75%",
      "100%"
    ],
    correta: 2,
    materia: "Biologia",
    explicacao: "O indivíduo Aa produz gametas A e a em proporções iguais, enquanto o indivíduo aa produz apenas gametas a. Os descendentes possíveis são Aa e aa, cada um com probabilidade de 50%."
  },
  {
    id: "q049",
    enunciado: "Uma equipe precisa escolher uma senha de quatro algarismos, permitindo repetição, usando apenas os algarismos 0 e 1. Quantas senhas diferentes podem ser formadas se a senha puder começar com zero?",
    alternativas: [
      "4",
      "8",
      "12",
      "16",
      "24"
    ],
    correta: 3,
    materia: "Lógica",
    explicacao: "Cada uma das quatro posições tem duas opções independentes. Pelo princípio multiplicativo, há 2⁴ = 16 senhas."
  },
  {
    id: "q050",
    enunciado: "Uma solução tampão ajuda a reduzir variações de pH quando pequenas quantidades de ácido ou base são adicionadas. Essa propriedade é importante em sistemas biológicos porque",
    alternativas: [
      "faz com que qualquer solução permaneça sempre com pH 7.",
      "impede todas as reações químicas de ocorrerem.",
      "mantém o pH relativamente estável dentro de determinadas condições.",
      "transforma automaticamente ácidos fortes em metais.",
      "elimina a necessidade de água nas células."
    ],
    correta: 2,
    materia: "Química",
    explicacao: "Soluções tampão contêm espécies capazes de reagir com parte do ácido ou da base adicionados, reduzindo a variação do pH. Sua capacidade é limitada e não mantém obrigatoriamente pH 7."
  },
  {
    id: "q051",
    enunciado: "Uma empresa de entregas compara dois planos. No plano A, o custo mensal é de R$ 40,00 mais R$ 3,00 por entrega. No plano B, o custo é de R$ 70,00 mais R$ 2,00 por entrega. A partir de quantas entregas mensais o plano B passa a ser mais barato que o plano A?",
    alternativas: [
      "20",
      "25",
      "30",
      "31",
      "35"
    ],
    correta: 3,
    materia: "Matemática",
    explicacao: "O plano B é mais barato quando 70 + 2x < 40 + 3x, isto é, x > 30. Portanto, a partir de 31 entregas."
  },
  {
    id: "q052",
    enunciado: "Leia: \"O relatório foi concluído pelos pesquisadores após seis meses de testes.\" A construção verbal dessa frase está na voz",
    alternativas: [
      "ativa, pois os pesquisadores praticam a ação.",
      "passiva analítica, pois o sujeito recebe a ação verbal.",
      "reflexiva, pois o sujeito pratica e recebe a ação.",
      "passiva sintética, marcada pela partícula se.",
      "impessoal, pois não existe sujeito."
    ],
    correta: 1,
    materia: "Língua Portuguesa",
    explicacao: "O sujeito \"O relatório\" recebe a ação de concluir. A locução \"foi concluído\" forma a voz passiva analítica."
  },
  {
    id: "q053",
    enunciado: "Read the text: \"Many cities are planting trees along streets. Trees provide shade, absorb some pollutants and can lower surface temperatures. However, planting programs require maintenance and careful species selection.\" Which limitation does the text mention?",
    alternativas: [
      "Trees cannot provide shade.",
      "Urban trees always increase pollution.",
      "Planting programs require maintenance and appropriate species.",
      "Trees have no effect on surface temperatures.",
      "Cities must remove all existing vegetation."
    ],
    correta: 2,
    materia: "Língua Inglesa",
    explicacao: "The final sentence explicitly states that planting programs require maintenance and careful species selection."
  },
  {
    id: "q054",
    enunciado: "Uma onda sonora propaga-se no ar com velocidade de 340 m/s e frequência de 170 Hz. Qual é seu comprimento de onda?",
    alternativas: [
      "0,5 m",
      "1 m",
      "2 m",
      "170 m",
      "510 m"
    ],
    correta: 2,
    materia: "Física",
    explicacao: "Pela relação v = λf, temos λ = 340/170 = 2 m."
  },
  {
    id: "q055",
    enunciado: "Um código é composto por duas letras diferentes, escolhidas entre A, B, C e D, seguidas de um algarismo entre 0 e 9. Quantos códigos podem ser formados?",
    alternativas: [
      "60",
      "80",
      "100",
      "120",
      "160"
    ],
    correta: 3,
    materia: "Lógica",
    explicacao: "Há 4 opções para a primeira letra, 3 para a segunda e 10 para o algarismo. O total é 4 × 3 × 10 = 120."
  },
  {
    id: "q056",
    enunciado: "Na reação balanceada N₂ + 3 H₂ → 2 NH₃, quantos mols de amônia são produzidos teoricamente a partir de 6 mol de H₂, com nitrogênio em excesso?",
    alternativas: [
      "1 mol",
      "2 mol",
      "3 mol",
      "4 mol",
      "6 mol"
    ],
    correta: 3,
    materia: "Química",
    explicacao: "A proporção estequiométrica é de 3 mol de H₂ para 2 mol de NH₃. Com 6 mol de H₂, formam-se 4 mol de NH₃."
  },
  {
    id: "q057",
    enunciado: "A abolição da escravidão no Brasil, em 1888, encerrou legalmente o regime escravista, mas não garantiu por si só igualdade econômica e social à população liberta. Essa diferença evidencia que",
    alternativas: [
      "mudanças legais eliminam necessariamente todas as desigualdades sociais.",
      "a liberdade jurídica não assegurou automaticamente acesso à terra, à renda e à educação.",
      "a escravidão continuou legalmente inalterada após 1888.",
      "a população liberta recebeu universalmente terras e indenizações.",
      "a abolição impediu qualquer forma posterior de discriminação."
    ],
    correta: 1,
    materia: "História",
    explicacao: "A abolição extinguiu juridicamente a escravidão, mas não foi acompanhada de políticas suficientes para garantir igualdade material à população liberta. Desigualdades estruturais persistiram."
  },
  {
    id: "q058",
    enunciado: "Uma região apresenta chuvas concentradas em poucos meses, seguidas por uma estação seca prolongada. Para planejar o uso agrícola da água, uma medida adequada é",
    alternativas: [
      "descartar toda a água da estação chuvosa.",
      "aumentar o consumo durante a seca sem avaliar a disponibilidade.",
      "captar e armazenar parte da água da estação chuvosa para uso posterior.",
      "impermeabilizar todas as áreas de recarga dos aquíferos.",
      "eliminar a vegetação das margens dos cursos d'água."
    ],
    correta: 2,
    materia: "Geografia",
    explicacao: "A captação e o armazenamento da água durante períodos chuvosos podem aumentar sua disponibilidade na estação seca. A estratégia precisa considerar qualidade, capacidade de armazenamento e impactos ambientais."
  },
  {
    id: "q059",
    enunciado: "Uma notícia relata que um sistema de inteligência artificial identificou padrões em milhares de exames médicos. Para avaliar criticamente a utilidade desse sistema, é importante considerar",
    alternativas: [
      "apenas a velocidade de processamento, independentemente dos resultados.",
      "se o sistema foi treinado e avaliado com dados representativos e se seus erros foram medidos.",
      "que toda decisão automatizada é necessariamente imparcial.",
      "que os resultados dispensam qualquer validação científica.",
      "que a quantidade de dados elimina todos os riscos de erro."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "A confiabilidade de um sistema depende da qualidade e representatividade dos dados, de testes adequados e da análise de erros. Automação não elimina vieses nem substitui a validação."
  },
  {
    id: "q060",
    enunciado: "Uma fábrica produz caixas retangulares de dimensões 20 cm, 10 cm e 5 cm. Qual é o volume de cada caixa?",
    alternativas: [
      "100 cm³",
      "500 cm³",
      "1 000 cm³",
      "1 500 cm³",
      "2 000 cm³"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "O volume de um paralelepípedo é o produto de suas três dimensões: 20 × 10 × 5 = 1 000 cm³."
  },
  {
    id: "q061",
    enunciado: "Assinale a alternativa em que o uso da crase está correto segundo a norma-padrão.",
    alternativas: [
      "O técnico entregou o relatório à diretoria.",
      "O técnico começou à revisar o relatório.",
      "A equipe chegou à pé ao laboratório.",
      "O pesquisador se referiu à pessoas ausentes.",
      "A reunião ocorrerá daqui à dois dias."
    ],
    correta: 0,
    materia: "Língua Portuguesa",
    explicacao: "O verbo entregar, nesse contexto, exige a preposição a, e \"diretoria\" admite o artigo feminino a. A fusão das duas formas resulta em \"à diretoria\"."
  },
  {
    id: "q062",
    enunciado: "Read the text: \"The library extended its opening hours during exam week. Students can now study until 10 p.m., but they must register at the front desk after 6 p.m.\" What must students do after 6 p.m.?",
    alternativas: [
      "Leave the building immediately.",
      "Register at the front desk.",
      "Pay for every hour of study.",
      "Avoid using the library.",
      "Return all books before entering."
    ],
    correta: 1,
    materia: "Língua Inglesa",
    explicacao: "The text states that students must register at the front desk after 6 p.m."
  },
  {
    id: "q063",
    enunciado: "Um objeto de massa 2 kg está inicialmente em repouso. Uma força resultante constante de 8 N atua sobre ele durante 3 segundos, em uma superfície sem atrito. Qual será sua velocidade ao final desse intervalo?",
    alternativas: [
      "4 m/s",
      "8 m/s",
      "12 m/s",
      "16 m/s",
      "24 m/s"
    ],
    correta: 2,
    materia: "Física",
    explicacao: "A aceleração é a = F/m = 8/2 = 4 m/s². Partindo do repouso, v = at = 4 × 3 = 12 m/s."
  },
  {
    id: "q064",
    enunciado: "Uma urna contém 5 bolas brancas e 3 pretas. Duas bolas são retiradas sucessivamente, sem reposição. Qual é a probabilidade de ambas serem brancas?",
    alternativas: [
      "5/14",
      "5/16",
      "1/2",
      "25/64",
      "10/21"
    ],
    correta: 0,
    materia: "Lógica",
    explicacao: "A probabilidade é (5/8) × (4/7) = 20/56 = 5/14, pois a primeira bola não é devolvida à urna."
  },
  {
    id: "q065",
    enunciado: "Um estudante mistura água e óleo em um recipiente e observa duas fases líquidas distintas. A separação ocorre principalmente porque as substâncias",
    alternativas: [
      "possuem necessariamente a mesma densidade e se dissolvem completamente.",
      "apresentam diferenças de polaridade que dificultam a miscibilidade.",
      "reagem sempre formando um único composto sólido.",
      "possuem a mesma estrutura molecular.",
      "não sofrem qualquer interação intermolecular."
    ],
    correta: 1,
    materia: "Química",
    explicacao: "Água é polar e os óleos são predominantemente apolares. Essa diferença de polaridade dificulta a mistura homogênea e favorece a formação de fases separadas."
  },
  {
    id: "q066",
    enunciado: "Durante a Guerra Fria, Estados Unidos e União Soviética disputaram influência política, militar, econômica e tecnológica. A corrida espacial integrou essa disputa porque",
    alternativas: [
      "eliminou as rivalidades entre os dois países.",
      "impediu qualquer desenvolvimento científico fora da Europa.",
      "serviu como demonstração de capacidade tecnológica e prestígio político.",
      "resultou na dissolução imediata das duas superpotências.",
      "teve como único objetivo ampliar a produção agrícola."
    ],
    correta: 2,
    materia: "História",
    explicacao: "A corrida espacial foi um componente da competição estratégica da Guerra Fria, permitindo demonstrar capacidade científica, tecnológica e organizacional."
  },
  {
    id: "q067",
    enunciado: "O aumento da concentração de gases de efeito estufa na atmosfera intensifica a retenção de energia térmica no sistema climático. Uma consequência possível do aquecimento global é",
    alternativas: [
      "a interrupção completa do ciclo da água.",
      "a redução universal da temperatura média dos oceanos.",
      "a elevação do nível médio do mar por expansão térmica e perda de gelo continental.",
      "o desaparecimento instantâneo de todas as massas de gelo.",
      "a ausência de alterações nos padrões de precipitação."
    ],
    correta: 2,
    materia: "Biologia",
    explicacao: "O aquecimento pode elevar o nível do mar pela expansão térmica da água e pelo derretimento de geleiras e mantos de gelo continentais. A intensidade varia conforme a evolução do clima."
  },
  {
    id: "q068",
    enunciado: "Uma empresa investiu R$ 8 000,00 em um equipamento que perde 10% de seu valor a cada ano, sempre calculados sobre o valor do ano anterior. Qual será seu valor após dois anos?",
    alternativas: [
      "R$ 6 400,00",
      "R$ 6 480,00",
      "R$ 6 800,00",
      "R$ 7 200,00",
      "R$ 7 600,00"
    ],
    correta: 1,
    materia: "Matemática",
    explicacao: "A cada ano, o valor é multiplicado por 0,9. Após dois anos: 8 000 × 0,9² = R$ 6 480,00."
  },
  {
    id: "q069",
    enunciado: "Em um artigo de opinião, o autor apresenta dados sobre desperdício de alimentos e conclui que supermercados e consumidores devem adotar medidas preventivas. A função principal dos dados, nesse contexto, é",
    alternativas: [
      "substituir integralmente a conclusão do texto.",
      "construir uma base argumentativa para sustentar a posição defendida.",
      "demonstrar que o tema não admite interpretações diferentes.",
      "transformar o artigo em uma narrativa ficcional.",
      "eliminar a necessidade de estabelecer relações lógicas."
    ],
    correta: 1,
    materia: "Língua Portuguesa",
    explicacao: "Dados pertinentes funcionam como evidências que sustentam a tese e fortalecem a argumentação. Sua força depende da relevância, da confiabilidade e da interpretação adequada."
  },
  {
    id: "q070",
    enunciado: "Read the text: \"Reusable containers can reduce single-use packaging. Their environmental benefit, however, depends on how often they are reused, how they are cleaned and what materials they are made from.\" What is the author's main point?",
    alternativas: [
      "Reusable containers always have zero environmental impact.",
      "Single-use packaging is required in every situation.",
      "The environmental benefit of reusable containers depends on several factors.",
      "Cleaning containers makes reuse impossible.",
      "The material used to make a container never matters."
    ],
    correta: 2,
    materia: "Língua Inglesa",
    explicacao: "O texto ressalta que o benefício ambiental depende da frequência de reutilização, da limpeza e do material empregado."
  },
  {
    id: "q071",
    enunciado: "Um resistor de 12 Ω é ligado a uma fonte ideal de 24 V. Qual é a corrente elétrica que atravessa o resistor?",
    alternativas: [
      "0,5 A",
      "1 A",
      "2 A",
      "12 A",
      "288 A"
    ],
    correta: 2,
    materia: "Física",
    explicacao: "Pela primeira lei de Ohm, I = U/R = 24/12 = 2 A."
  },
  {
    id: "q072",
    enunciado: "Em um sistema lógico, a saída é verdadeira somente quando as duas entradas são verdadeiras. Essa operação corresponde à conjunção lógica, representada pelo conectivo",
    alternativas: [
      "OU.",
      "NÃO.",
      "SE E SOMENTE SE.",
      "E.",
      "OU EXCLUSIVO."
    ],
    correta: 3,
    materia: "Lógica",
    explicacao: "A conjunção lógica, representada por E, é verdadeira apenas quando ambas as proposições de entrada são verdadeiras."
  },
  {
    id: "q073",
    enunciado: "Na reação 2 H₂ + O₂ → 2 H₂O, 4 mol de hidrogênio reagem completamente com oxigênio em excesso. Quantos mols de água são formados?",
    alternativas: [
      "1 mol",
      "2 mol",
      "3 mol",
      "4 mol",
      "8 mol"
    ],
    correta: 3,
    materia: "Química",
    explicacao: "A proporção entre H₂ e H₂O é de 2:2, ou seja, 1:1. Assim, 4 mol de H₂ produzem 4 mol de água."
  },
  {
    id: "q074",
    enunciado: "O movimento modernista brasileiro de 1922 valorizou a experimentação estética e a revisão crítica de modelos culturais importados. Uma característica associada a esse movimento foi",
    alternativas: [
      "a defesa obrigatória das regras clássicas como únicas formas legítimas de arte.",
      "a recusa absoluta de qualquer tema relacionado à realidade brasileira.",
      "a busca de novas linguagens e a valorização crítica de elementos da cultura nacional.",
      "a eliminação da linguagem coloquial de todas as obras literárias.",
      "a substituição da literatura por textos exclusivamente científicos."
    ],
    correta: 2,
    materia: "Literatura",
    explicacao: "O Modernismo brasileiro buscou renovar a linguagem artística, questionar convenções e reinterpretar elementos culturais nacionais. Isso não significou uma única estética uniforme."
  },
  {
    id: "q075",
    enunciado: "Em um ecossistema, os produtores armazenam 20 000 kJ de energia química em determinado período. Se apenas cerca de 10% dessa energia for transferida ao nível trófico seguinte, qual quantidade será transferida aproximadamente?",
    alternativas: [
      "200 kJ",
      "1 000 kJ",
      "2 000 kJ",
      "10 000 kJ",
      "18 000 kJ"
    ],
    correta: 2,
    materia: "Biologia",
    explicacao: "Dez por cento de 20 000 kJ corresponde a 2 000 kJ. A transferência de energia entre níveis tróficos é limitada, pois parte é dissipada ou utilizada no metabolismo."
  },
  {
    id: "q076",
    enunciado: "Uma pesquisa registra os seguintes tempos de deslocamento, em minutos: 20, 25, 25, 30 e 100. Qual medida de tendência central é menos afetada pelo valor extremo de 100 minutos?",
    alternativas: [
      "Média aritmética.",
      "Mediana.",
      "Soma dos valores.",
      "Amplitude total.",
      "Máximo observado."
    ],
    correta: 1,
    materia: "Matemática",
    explicacao: "A mediana é o valor central dos dados ordenados, neste caso 25 minutos. Diferentemente da média, ela é pouco sensível à presença de valores extremos."
  },
  {
    id: "q077",
    enunciado: "Assinale a alternativa em que a regência verbal está adequada à norma-padrão.",
    alternativas: [
      "Os estudantes assistiram o debate sobre tecnologia.",
      "A pesquisadora prefere mais química do que física.",
      "O funcionário obedeceu às instruções de segurança.",
      "O relatório implica em mudanças obrigatórias em qualquer contexto.",
      "O candidato chegou no laboratório antes do horário."
    ],
    correta: 2,
    materia: "Língua Portuguesa",
    explicacao: "No sentido de cumprir uma orientação, obedecer exige a preposição a: \"obedeceu às instruções\". Na norma-padrão, assistir no sentido de ver também exige preposição."
  },
  {
    id: "q078",
    enunciado: "Read the text: \"The experiment was repeated three times because the first results differed considerably. After checking the equipment, the researchers obtained similar measurements.\" Why did the researchers repeat the experiment?",
    alternativas: [
      "The equipment had already been discarded.",
      "The first results differed considerably.",
      "The final measurements were never recorded.",
      "The researchers wanted to avoid checking the equipment.",
      "The experiment was prohibited by the laboratory."
    ],
    correta: 1,
    materia: "Língua Inglesa",
    explicacao: "O texto afirma diretamente que o experimento foi repetido porque os primeiros resultados apresentaram diferenças consideráveis."
  },
  {
    id: "q079",
    enunciado: "Um objeto é colocado a 2 m de um espelho plano. Qual é a distância entre o objeto e sua imagem virtual?",
    alternativas: [
      "0,5 m",
      "1 m",
      "2 m",
      "4 m",
      "8 m"
    ],
    correta: 3,
    materia: "Física",
    explicacao: "A imagem forma-se à mesma distância atrás do espelho que o objeto está à frente. Portanto, a separação entre objeto e imagem é 2 + 2 = 4 m."
  },
  {
    id: "q080",
    enunciado: "Uma equipe de cinco pessoas precisa escolher um coordenador e um secretário entre seus integrantes, sem que a mesma pessoa ocupe os dois cargos. De quantas maneiras isso pode ser feito?",
    alternativas: [
      "5",
      "10",
      "15",
      "20",
      "25"
    ],
    correta: 3,
    materia: "Lógica",
    explicacao: "Há cinco escolhas para coordenador e quatro para secretário. Como os cargos são diferentes, a ordem importa: 5 × 4 = 20 maneiras."
  },
  {
    id: "q081",
    enunciado: "Em um laboratório, um ácido reage com uma base e produz sal e água. Essa transformação é classificada, de modo geral, como",
    alternativas: [
      "neutralização ácido-base.",
      "combustão completa.",
      "polimerização radicalar.",
      "decomposição nuclear.",
      "sublimação."
    ],
    correta: 0,
    materia: "Química",
    explicacao: "Uma reação entre ácido e base pode formar sal e água, sendo classificada como neutralização. A composição específica dos produtos depende das substâncias reagentes."
  },
  {
    id: "q082",
    enunciado: "O crescimento das cidades brasileiras no século XX esteve relacionado à industrialização e às migrações internas. Em muitas regiões, a expansão urbana ocorreu mais rapidamente que a implantação de infraestrutura. Uma consequência possível foi",
    alternativas: [
      "a distribuição homogênea de serviços em todos os bairros.",
      "o desaparecimento das periferias urbanas.",
      "a ampliação de problemas habitacionais e de acesso ao saneamento.",
      "a eliminação dos deslocamentos pendulares.",
      "a redução automática das desigualdades territoriais."
    ],
    correta: 2,
    materia: "Geografia",
    explicacao: "Quando a urbanização ocorre sem infraestrutura suficiente, podem surgir déficits de moradia, saneamento e transporte, frequentemente distribuídos de maneira desigual."
  },
  {
    id: "q083",
    enunciado: "A divulgação de um estudo científico nas redes sociais apresenta apenas um resultado isolado e o descreve como prova definitiva de uma hipótese. Uma leitura crítica deve considerar que",
    alternativas: [
      "um único estudo sempre encerra qualquer debate científico.",
      "a repetição independente dos resultados e a avaliação metodológica ajudam a fortalecer conclusões.",
      "a popularidade de uma publicação substitui a revisão científica.",
      "resultados contrários devem ser excluídos da análise.",
      "a ciência não utiliza evidências empíricas."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "Conclusões científicas ganham robustez com métodos adequados, revisão crítica e reprodução independente. Um estudo isolado pode ser relevante, mas raramente resolve sozinho toda uma questão."
  },
  {
    id: "q084",
    enunciado: "Uma sequência numérica começa em 3 e cada termo seguinte é obtido multiplicando o anterior por 2 e somando 1. Qual é o quarto termo?",
    alternativas: [
      "15",
      "23",
      "27",
      "31",
      "35"
    ],
    correta: 3,
    materia: "Matemática",
    explicacao: "Partindo de 3, obtêm-se 7, depois 15 e finalmente 31. Cada etapa aplica a regra termo seguinte = 2 × termo anterior + 1."
  },
  {
    id: "q085",
    enunciado: "Em uma frase publicitária, lê-se: \"Nosso novo filtro transforma sua água em pura tranquilidade.\" O uso de \"tranquilidade\" para representar uma sensação de segurança, em vez de uma propriedade física da água, constitui principalmente",
    alternativas: [
      "linguagem exclusivamente denotativa.",
      "uma enumeração de dados quantitativos.",
      "uso conotativo da linguagem.",
      "um erro obrigatório de concordância.",
      "uma oração subordinada causal."
    ],
    correta: 2,
    materia: "Língua Portuguesa",
    explicacao: "A palavra \"tranquilidade\" é usada em sentido figurado para associar o produto a uma sensação positiva. Esse emprego caracteriza conotação."
  },
  {
    id: "q086",
    enunciado: "Read the sentence: \"The device is inexpensive; nevertheless, its maintenance costs are high.\" The word \"nevertheless\" expresses",
    alternativas: [
      "addition.",
      "contrast or concession.",
      "purpose.",
      "time sequence.",
      "a direct comparison of quantities."
    ],
    correta: 1,
    materia: "Língua Inglesa",
    explicacao: "\"Nevertheless\" significa \"ainda assim\" ou \"apesar disso\" e introduz uma ideia contrastante em relação à afirmação anterior."
  },
  {
    id: "q087",
    enunciado: "Um corpo de 3 kg é elevado verticalmente a uma altura de 4 m. Considere g = 10 m/s² e despreze a resistência do ar. Qual é o aumento de sua energia potencial gravitacional?",
    alternativas: [
      "12 J",
      "30 J",
      "60 J",
      "120 J",
      "300 J"
    ],
    correta: 3,
    materia: "Física",
    explicacao: "A variação da energia potencial gravitacional é ΔEp = mgh = 3 × 10 × 4 = 120 J."
  },
  {
    id: "q088",
    enunciado: "Um dado honesto de seis faces é lançado uma vez. Qual é a probabilidade de obter um número primo?",
    alternativas: [
      "1/6",
      "1/3",
      "1/2",
      "2/3",
      "5/6"
    ],
    correta: 2,
    materia: "Lógica",
    explicacao: "Os números primos entre 1 e 6 são 2, 3 e 5. Há três resultados favoráveis em seis possíveis, logo a probabilidade é 3/6 = 1/2."
  },
  {
    id: "q089",
    enunciado: "Uma amostra de 200 g de solução contém 30 g de soluto. Qual é a porcentagem em massa do soluto?",
    alternativas: [
      "10%",
      "12%",
      "15%",
      "20%",
      "30%"
    ],
    correta: 2,
    materia: "Química",
    explicacao: "A porcentagem em massa é (massa do soluto/massa da solução) × 100. Portanto, (30/200) × 100 = 15%."
  },
  {
    id: "q090",
    enunciado: "Na sociedade feudal europeia, as relações de poder e produção estavam fortemente associadas à posse da terra. Uma característica importante desse sistema foi",
    alternativas: [
      "a predominância de uma economia exclusivamente industrial.",
      "a ausência de qualquer relação de dependência pessoal.",
      "a importância da produção agrária e das obrigações entre grupos sociais.",
      "a universalização do trabalho assalariado fabril.",
      "a separação completa entre poder político e propriedade fundiária."
    ],
    correta: 2,
    materia: "História",
    explicacao: "A sociedade feudal era predominantemente agrária, com relações de dependência e obrigações associadas à terra. A organização variava entre regiões e períodos."
  },
  {
    id: "q091",
    enunciado: "Uma população de insetos apresenta resistência a determinado pesticida após várias gerações de aplicação do produto. Qual explicação é compatível com a seleção natural?",
    alternativas: [
      "O pesticida produz intencionalmente a mutação necessária em todos os insetos.",
      "Insetos resistentes podem sobreviver e deixar mais descendentes, aumentando a frequência da resistência.",
      "Todos os insetos se tornam geneticamente idênticos após uma aplicação.",
      "A resistência é sempre adquirida por treinamento individual e transmitida sem base hereditária.",
      "A seleção natural impede qualquer alteração nas frequências genéticas."
    ],
    correta: 1,
    materia: "Biologia",
    explicacao: "Se houver variação hereditária na resistência, os indivíduos resistentes tendem a sobreviver e reproduzir-se mais sob a aplicação do pesticida. Com as gerações, a resistência pode tornar-se mais frequente."
  },
  {
    id: "q092",
    enunciado: "Um retângulo tem área de 96 cm² e largura de 8 cm. Qual é seu perímetro?",
    alternativas: [
      "20 cm",
      "28 cm",
      "32 cm",
      "40 cm",
      "48 cm"
    ],
    correta: 3,
    materia: "Matemática",
    explicacao: "O comprimento é 96/8 = 12 cm. O perímetro é 2 × (8 + 12) = 40 cm."
  },
  {
    id: "q093",
    enunciado: "Leia: \"A equipe revisou o procedimento; portanto, o teste pôde ser realizado com maior segurança.\" O conectivo \"portanto\" introduz uma relação de",
    alternativas: [
      "oposição.",
      "condição.",
      "conclusão.",
      "alternância.",
      "comparação."
    ],
    correta: 2,
    materia: "Língua Portuguesa",
    explicacao: "\"Portanto\" é uma conjunção conclusiva: a realização do teste com maior segurança é apresentada como consequência da revisão do procedimento."
  },
  {
    id: "q094",
    enunciado: "Read the text: \"Although the train was delayed, most passengers reached the conference before it began because the organizers postponed the opening session.\" Why did most passengers arrive before the conference began?",
    alternativas: [
      "The train arrived earlier than scheduled.",
      "The organizers postponed the opening session.",
      "The passengers travelled by airplane.",
      "The conference was cancelled permanently.",
      "The train delay was never reported."
    ],
    correta: 1,
    materia: "Língua Inglesa",
    explicacao: "O texto informa que os organizadores adiaram a sessão de abertura, permitindo que a maioria dos passageiros chegasse antes do início."
  },
  {
    id: "q095",
    enunciado: "Em uma associação de resistores em série, três resistores de 2 Ω, 3 Ω e 5 Ω são conectados a uma fonte ideal de 20 V. Qual é a corrente elétrica no circuito?",
    alternativas: [
      "1 A",
      "2 A",
      "4 A",
      "5 A",
      "10 A"
    ],
    correta: 1,
    materia: "Física",
    explicacao: "Em série, a resistência equivalente é 2 + 3 + 5 = 10 Ω. Pela lei de Ohm, a corrente é 20/10 = 2 A."
  },
  {
    id: "q096",
    enunciado: "Uma senha numérica de três algarismos deve utilizar apenas algarismos pares, sem repetição. O primeiro algarismo não pode ser zero. Quantas senhas podem ser formadas com os algarismos 0, 2, 4, 6 e 8?",
    alternativas: [
      "24",
      "36",
      "48",
      "60",
      "64"
    ],
    correta: 2,
    materia: "Lógica",
    explicacao: "Há quatro opções para a primeira posição: 2, 4, 6 ou 8. Depois, restam quatro opções para a segunda posição e três para a terceira. O total é 4 × 4 × 3 = 48."
  },
  {
    id: "q097",
    enunciado: "Uma substância apresenta moléculas formadas exclusivamente por carbono e hidrogênio. Ela pertence à classe dos",
    alternativas: [
      "hidrocarbonetos.",
      "álcoois.",
      "ácidos carboxílicos.",
      "aminas.",
      "sais inorgânicos."
    ],
    correta: 0,
    materia: "Química",
    explicacao: "Hidrocarbonetos são compostos orgânicos constituídos exclusivamente por carbono e hidrogênio. A presença de outros elementos pode caracterizar outras funções orgânicas."
  },
  {
    id: "q098",
    enunciado: "A expansão da energia solar e eólica modifica a composição das fontes usadas para produzir eletricidade. Para comparar seus impactos ambientais de maneira consistente, é importante",
    alternativas: [
      "avaliar somente a aparência dos equipamentos.",
      "considerar apenas o custo de instalação e ignorar as etapas seguintes.",
      "examinar o ciclo de vida, incluindo fabricação, operação e descarte dos equipamentos.",
      "presumir que toda fonte renovável não produz nenhum impacto.",
      "desconsiderar o local de instalação e as condições ambientais."
    ],
    correta: 2,
    materia: "Atualidades",
    explicacao: "A análise do ciclo de vida considera impactos da extração de materiais, fabricação, operação e descarte. Fontes renováveis podem reduzir determinadas emissões, mas não são isentas de impactos."
  },
  {
    id: "q099",
    enunciado: "Em um cruzamento entre plantas, flores vermelhas e brancas produzem descendentes com flores rosas. Esse padrão é compatível com dominância incompleta. Se duas plantas rosas forem cruzadas, qual proporção fenotípica é esperada?",
    alternativas: [
      "100% vermelhas.",
      "100% rosas.",
      "50% vermelhas e 50% brancas.",
      "25% vermelhas, 50% rosas e 25% brancas.",
      "75% rosas e 25% brancas."
    ],
    correta: 3,
    materia: "Biologia",
    explicacao: "Representando os alelos por V e B, as plantas rosas são VB. No cruzamento VB × VB, a proporção esperada é 1 VV : 2 VB : 1 BB, ou 25% vermelhas, 50% rosas e 25% brancas."
  },
  {
    id: "q100",
    enunciado: "Um produto custava R$ 250,00. Primeiro, seu preço aumentou 20%; depois, o novo preço recebeu um desconto de 20%. Qual foi o preço final?",
    alternativas: [
      "R$ 200,00",
      "R$ 240,00",
      "R$ 250,00",
      "R$ 260,00",
      "R$ 300,00"
    ],
    correta: 1,
    materia: "Matemática",
    explicacao: "Após o aumento, o preço passa a R$ 300,00. O desconto de 20% incide sobre esse novo valor: 300 × 0,8 = R$ 240,00. Percentuais sucessivos são calculados sobre bases diferentes."
  },

  {
    id: "q101",
    enunciado: "Uma fábrica monitora a temperatura de um forno. A temperatura aumenta de 80 °C para 200 °C em 4 minutos, de maneira uniforme. Qual é a taxa média de aumento da temperatura?",
    alternativas: [
      "20 °C/min",
      "25 °C/min",
      "30 °C/min",
      "40 °C/min",
      "45 °C/min"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "A variação de temperatura é 200 − 80 = 120 °C. Dividindo por 4 minutos, obtém-se uma taxa média de 30 °C/min."
  },
  {
    id: "q102",
    enunciado: "Leia: \"Os equipamentos que apresentaram falhas foram retirados de operação.\" Nesse contexto, a oração introduzida por \"que\"",
    alternativas: [
      "explica uma causa relacionada à retirada dos equipamentos.",
      "restringe o grupo de equipamentos mencionado, identificando quais apresentaram falhas.",
      "expressa uma consequência futura sem antecedente.",
      "introduz uma pergunta indireta.",
      "funciona como uma oração principal independente."
    ],
    correta: 1,
    materia: "Língua Portuguesa",
    explicacao: "A oração adjetiva restritiva delimita o substantivo \"equipamentos\": foram retirados de operação aqueles que apresentaram falhas."
  },
  {
    id: "q103",
    enunciado: "Read the text: \"The company introduced a four-day workweek for a six-month trial. Productivity remained stable, while employee satisfaction increased. Managers will review the results before deciding whether to make the change permanent.\" What can be concluded?",
    alternativas: [
      "The policy has already been adopted permanently.",
      "Productivity fell sharply during the trial.",
      "The trial produced encouraging results, but a final decision has not been made.",
      "The company will close after six months.",
      "All employees opposed the change."
    ],
    correta: 2,
    materia: "Língua Inglesa",
    explicacao: "O texto relata produtividade estável e maior satisfação, mas informa que os gestores ainda revisarão os resultados antes de decidir pela permanência."
  },
  {
    id: "q104",
    enunciado: "Um objeto de 2 kg desloca-se a 6 m/s. Qual é sua energia cinética?",
    alternativas: [
      "6 J",
      "12 J",
      "18 J",
      "36 J",
      "72 J"
    ],
    correta: 3,
    materia: "Física",
    explicacao: "A energia cinética é Ec = mv²/2. Substituindo, Ec = 2 × 6²/2 = 36 J."
  },
  {
    id: "q105",
    enunciado: "Considere as proposições: P = \"o servidor está ligado\" e Q = \"a conexão está ativa\". A proposição \"o servidor está ligado e a conexão está ativa\" é falsa quando",
    alternativas: [
      "P e Q são verdadeiras.",
      "P é verdadeira e Q é falsa.",
      "P é falsa e Q é verdadeira.",
      "P e Q são falsas.",
      "em qualquer situação, independentemente dos valores de P e Q."
    ],
    correta: 1,
    materia: "Lógica",
    explicacao: "A conjunção P e Q só é verdadeira quando ambas as proposições são verdadeiras. Portanto, é falsa se pelo menos uma delas for falsa."
  },
  {
    id: "q106",
    enunciado: "Na tabela periódica, elementos localizados no mesmo grupo frequentemente apresentam propriedades químicas semelhantes porque possuem",
    alternativas: [
      "o mesmo número de nêutrons em todos os isótopos.",
      "o mesmo número atômico.",
      "configurações eletrônicas de valência semelhantes.",
      "massas atômicas sempre idênticas.",
      "núcleos com a mesma quantidade de prótons."
    ],
    correta: 2,
    materia: "Química",
    explicacao: "Elementos de um mesmo grupo apresentam configurações eletrônicas de valência semelhantes, o que contribui para propriedades químicas parecidas."
  },
  {
    id: "q107",
    enunciado: "A expansão marítima europeia dos séculos XV e XVI esteve associada a interesses comerciais, políticos e religiosos. Uma consequência histórica desse processo foi",
    alternativas: [
      "o isolamento completo dos continentes americanos.",
      "a intensificação das conexões intercontinentais e da colonização europeia.",
      "o desaparecimento imediato de todas as rotas comerciais terrestres.",
      "a interrupção do comércio de produtos agrícolas.",
      "a formação de sociedades sem conflitos culturais."
    ],
    correta: 1,
    materia: "História",
    explicacao: "As navegações ampliaram as conexões entre continentes e favoreceram a expansão colonial europeia, transformando circuitos comerciais e relações de poder."
  },
  {
    id: "q108",
    enunciado: "A retirada da mata ciliar de um rio pode aumentar o transporte de sedimentos para seu leito. Qual consequência está diretamente associada a esse processo?",
    alternativas: [
      "Diminuição obrigatória da turbidez da água.",
      "Aumento da estabilidade das margens em qualquer circunstância.",
      "Assoreamento e possível alteração da capacidade de escoamento.",
      "Eliminação da erosão em áreas agrícolas próximas.",
      "Redução universal da temperatura da água."
    ],
    correta: 2,
    materia: "Geografia",
    explicacao: "A vegetação ciliar protege o solo e ajuda a reter sedimentos. Sua remoção pode favorecer erosão, assoreamento e mudanças nas condições de escoamento do rio."
  },
  {
    id: "q109",
    enunciado: "Uma plataforma digital recomenda conteúdos semelhantes aos que o usuário já consumiu. Qual risco informacional pode surgir quando esse mecanismo reduz excessivamente o contato com perspectivas diferentes?",
    alternativas: [
      "A eliminação automática de toda informação falsa.",
      "A formação de ambientes informacionais que reforçam crenças existentes.",
      "A garantia de neutralidade de todos os conteúdos recomendados.",
      "O desaparecimento de interesses comerciais nas plataformas.",
      "A impossibilidade de personalizar qualquer serviço."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "Sistemas de recomendação podem reforçar preferências anteriores e limitar a exposição a pontos de vista diferentes. O efeito depende do funcionamento do sistema e dos hábitos de consumo."
  },
  {
    id: "q110",
    enunciado: "Uma escada de 5 m está apoiada em uma parede vertical. A base encontra-se a 3 m da parede. Considerando o triângulo retângulo formado, qual é a altura alcançada pela escada?",
    alternativas: [
      "2 m",
      "3 m",
      "4 m",
      "5 m",
      "8 m"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "Pelo teorema de Pitágoras, h² + 3² = 5². Assim, h² = 25 − 9 = 16 e h = 4 m."
  },
  {
    id: "q111",
    enunciado: "Em uma notícia, o autor escreve: \"O projeto consumiu apenas três meses de trabalho, embora tenha exigido anos de planejamento.\" O conectivo \"embora\" expressa",
    alternativas: [
      "uma concessão entre duas informações contrastantes.",
      "uma conclusão matemática.",
      "uma condição necessária para a existência do projeto.",
      "uma relação de alternância.",
      "uma finalidade futura."
    ],
    correta: 0,
    materia: "Língua Portuguesa",
    explicacao: "\"Embora\" introduz uma oração concessiva: apesar do longo planejamento, o trabalho de execução durou apenas três meses."
  },
  {
    id: "q112",
    enunciado: "Read the text: \"A local farm sells vegetables directly to nearby restaurants. By reducing the distance between producers and buyers, the farm hopes to lower transport costs and deliver fresher food.\" What is the main expected advantage?",
    alternativas: [
      "Longer transportation routes.",
      "Higher dependence on distant suppliers.",
      "Lower transport costs and fresher deliveries.",
      "The end of agricultural production.",
      "The elimination of all food storage."
    ],
    correta: 2,
    materia: "Língua Inglesa",
    explicacao: "O texto apresenta a redução dos custos de transporte e a entrega de alimentos mais frescos como vantagens esperadas da venda local."
  },
  {
    id: "q113",
    enunciado: "Uma amostra de água recebe calor e sua temperatura aumenta de 20 °C para 35 °C. Considerando 200 g de água e calor específico de 4,2 J/(g·°C), qual é a quantidade de calor absorvida?",
    alternativas: [
      "1 260 J",
      "4 200 J",
      "8 400 J",
      "12 600 J",
      "25 200 J"
    ],
    correta: 3,
    materia: "Física",
    explicacao: "Pela expressão Q = mcΔT, temos Q = 200 × 4,2 × 15 = 12 600 J."
  },
  {
    id: "q114",
    enunciado: "Uma sequência de caracteres utiliza apenas A e B. Cada posição pode ser preenchida independentemente por qualquer uma dessas letras. Quantas sequências de comprimento 5 podem ser formadas?",
    alternativas: [
      "10",
      "16",
      "25",
      "32",
      "64"
    ],
    correta: 3,
    materia: "Lógica",
    explicacao: "Cada uma das cinco posições possui duas possibilidades. Pelo princípio multiplicativo, o total é 2⁵ = 32."
  },
  {
    id: "q115",
    enunciado: "A fórmula molecular C₂H₆O pode representar substâncias com funções orgânicas diferentes. Dois exemplos possíveis são etanol e metoximetano. Esse fato ilustra a existência de",
    alternativas: [
      "isótopos.",
      "isomeria constitucional.",
      "radioatividade espontânea.",
      "neutralização ácido-base.",
      "ligação iônica obrigatória."
    ],
    correta: 1,
    materia: "Química",
    explicacao: "Etanol e metoximetano têm a mesma fórmula molecular, mas diferentes conectividades entre os átomos e funções orgânicas. São isômeros constitucionais."
  },
  {
    id: "q116",
    enunciado: "A Constituição brasileira de 1988 ampliou o reconhecimento de direitos sociais e políticos após o período da ditadura militar. Esse processo está relacionado à",
    alternativas: [
      "consolidação de uma nova ordem constitucional democrática.",
      "restauração do poder absoluto do imperador.",
      "extinção das eleições para cargos representativos.",
      "proibição de qualquer organização da sociedade civil.",
      "eliminação do princípio de igualdade perante a lei."
    ],
    correta: 0,
    materia: "História",
    explicacao: "A Constituição de 1988 foi elaborada durante a redemocratização e ampliou garantias de direitos e mecanismos de participação política."
  },
  {
    id: "q117",
    enunciado: "O crescimento de uma cidade sobre áreas de mananciais pode aumentar a contaminação da água utilizada no abastecimento. Uma política preventiva coerente é",
    alternativas: [
      "retirar toda a vegetação das margens dos reservatórios.",
      "ampliar o lançamento de esgoto sem tratamento.",
      "controlar a ocupação do solo e proteger áreas de recarga e margens de cursos d'água.",
      "impermeabilizar completamente as zonas de infiltração.",
      "substituir o monitoramento da água por inspeções ocasionais."
    ],
    correta: 2,
    materia: "Geografia",
    explicacao: "O ordenamento territorial e a proteção de áreas de mananciais reduzem fontes de contaminação e ajudam a preservar a qualidade e a disponibilidade hídrica."
  },
  {
    id: "q118",
    enunciado: "Uma discussão sobre o uso de reconhecimento facial em espaços públicos envolve benefícios de segurança e riscos à privacidade. Qual abordagem contribui para uma avaliação responsável dessa tecnologia?",
    alternativas: [
      "Presumir que toda coleta de dados é legítima quando automatizada.",
      "Avaliar finalidade, precisão, possíveis vieses, proteção de dados e mecanismos de responsabilização.",
      "Desconsiderar a possibilidade de identificação equivocada.",
      "Proibir qualquer análise de consequências sociais.",
      "Considerar que a tecnologia não produz efeitos sobre direitos individuais."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "Uma avaliação responsável considera eficácia, erros, discriminação, necessidade e proporcionalidade da coleta, além de privacidade e responsabilização."
  },
  {
    id: "q119",
    enunciado: "Uma loja vende um produto por R$ 180,00 após conceder um desconto de 10% sobre o preço original. Qual era o preço antes do desconto?",
    alternativas: [
      "R$ 190,00",
      "R$ 198,00",
      "R$ 200,00",
      "R$ 210,00",
      "R$ 220,00"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "O preço final corresponde a 90% do original. Logo, o preço original é 180/0,9 = R$ 200,00."
  },
  {
    id: "q120",
    enunciado: "Uma reportagem informa que determinada pesquisa encontrou associação entre falta de sono e queda de desempenho escolar. Qual conclusão é cientificamente mais cuidadosa?",
    alternativas: [
      "A associação prova, por si só, que a falta de sono é a única causa da queda.",
      "A pesquisa não possui valor porque não estabelece uma lei universal.",
      "A associação merece investigação, mas é necessário avaliar o desenho do estudo e possíveis fatores de confusão.",
      "O desempenho escolar é independente de qualquer condição de saúde.",
      "A existência de uma associação elimina a necessidade de novas pesquisas."
    ],
    correta: 2,
    materia: "Atualidades",
    explicacao: "Uma associação estatística não demonstra necessariamente causalidade exclusiva. O desenho da pesquisa e fatores como saúde, contexto familiar e condições de estudo precisam ser considerados."
  },
  {
    id: "q121",
    enunciado: "Uma função quadrática descreve o lucro diário de uma empresa por L(x) = -2x² + 80x - 300, em que x representa a quantidade produzida em centenas de unidades. Em qual valor de x o lucro é máximo?",
    alternativas: [
      "10",
      "15",
      "20",
      "25",
      "40"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "O máximo ocorre no vértice da parábola, com x = -b/(2a). Assim, x = -80/[2(-2)] = 20."
  },
  {
    id: "q122",
    enunciado: "Na frase \"Os técnicos chegaram cedo, mas o laboratório ainda estava fechado\", o conectivo \"mas\" estabelece uma relação de",
    alternativas: [
      "conclusão.",
      "explicação.",
      "oposição.",
      "causa.",
      "finalidade."
    ],
    correta: 2,
    materia: "Língua Portuguesa",
    explicacao: "\"Mas\" é uma conjunção coordenativa adversativa, usada para introduzir uma informação que contrasta com a expectativa criada pela primeira oração."
  },
  {
    id: "q123",
    enunciado: "Read the text: \"The museum offers free admission on Sundays. Visitors can reserve tickets online, but a limited number of walk-in tickets are also available.\" Which statement is supported by the text?",
    alternativas: [
      "All tickets must be purchased at the entrance.",
      "Admission is free only on weekdays.",
      "Visitors may reserve tickets online or obtain some tickets without a reservation.",
      "The museum has unlimited capacity.",
      "Online reservations are prohibited."
    ],
    correta: 2,
    materia: "Língua Inglesa",
    explicacao: "O texto informa que é possível reservar ingressos on-line e que também há uma quantidade limitada disponível para visitantes sem reserva."
  },
  {
    id: "q124",
    enunciado: "Uma onda tem frequência de 50 Hz e comprimento de onda de 4 m. Qual é sua velocidade de propagação?",
    alternativas: [
      "12,5 m/s",
      "46 m/s",
      "54 m/s",
      "100 m/s",
      "200 m/s"
    ],
    correta: 4,
    materia: "Física",
    explicacao: "A velocidade de uma onda é v = λf. Portanto, v = 4 × 50 = 200 m/s."
  },
  {
    id: "q125",
    enunciado: "Um sistema de alarme dispara se o sensor A ou o sensor B detectar movimento. Qual condição faz com que o alarme não dispare, considerando uma porta lógica OU inclusiva?",
    alternativas: [
      "A e B detectam movimento.",
      "A detecta movimento e B não detecta.",
      "A não detecta movimento e B detecta.",
      "Nenhum dos dois sensores detecta movimento.",
      "Pelo menos um sensor detecta movimento."
    ],
    correta: 3,
    materia: "Lógica",
    explicacao: "A operação OU inclusiva é falsa apenas quando ambas as entradas são falsas. Logo, o alarme não dispara quando nenhum sensor detecta movimento."
  },
  {
    id: "q126",
    enunciado: "Uma solução de ácido clorídrico é diluída de 100 mL para 500 mL, sem adição ou perda de soluto. Se a concentração inicial era 2 mol/L, qual será a concentração final?",
    alternativas: [
      "0,2 mol/L",
      "0,4 mol/L",
      "0,5 mol/L",
      "1 mol/L",
      "10 mol/L"
    ],
    correta: 1,
    materia: "Química",
    explicacao: "Na diluição, C₁V₁ = C₂V₂. Assim, C₂ = 2 × 100/500 = 0,4 mol/L."
  },
  {
    id: "q127",
    enunciado: "A expansão do trabalho industrial no século XIX contribuiu para a formação de movimentos operários. Entre suas reivindicações históricas, destacou-se",
    alternativas: [
      "a ampliação da jornada de trabalho para eliminar o desemprego.",
      "a proibição de qualquer associação entre trabalhadores.",
      "a redução da jornada e a melhoria das condições de trabalho.",
      "a substituição universal dos salários por trabalho compulsório.",
      "o fim de toda legislação trabalhista."
    ],
    correta: 2,
    materia: "História",
    explicacao: "Movimentos operários reivindicaram, em diferentes contextos, redução da jornada, melhores salários, segurança e direitos de organização."
  },
  {
    id: "q128",
    enunciado: "O desmatamento de uma encosta pode elevar o risco de deslizamentos em períodos de chuva intensa. Isso ocorre, entre outros fatores, porque a retirada da vegetação",
    alternativas: [
      "sempre reduz a quantidade de água que alcança o solo.",
      "pode diminuir a proteção superficial e alterar a estabilidade do terreno.",
      "impede completamente a infiltração de água.",
      "elimina a ação da gravidade sobre os sedimentos.",
      "transforma automaticamente o solo em rocha impermeável."
    ],
    correta: 1,
    materia: "Geografia",
    explicacao: "A vegetação protege o solo e suas raízes podem contribuir para a estabilidade. Sua remoção, combinada com chuvas e características do terreno, pode aumentar a suscetibilidade a deslizamentos."
  },
  {
    id: "q129",
    enunciado: "Uma instituição divulga dados pessoais de usuários sem informar a finalidade da coleta ou oferecer mecanismos adequados de controle. Qual princípio deve orientar uma avaliação ética dessa prática?",
    alternativas: [
      "Dados pessoais podem ser utilizados livremente após sua coleta.",
      "A transparência sobre finalidade e o respeito aos direitos dos titulares são relevantes para o tratamento de dados.",
      "O consentimento nunca tem relação com privacidade.",
      "A divulgação pública elimina qualquer dever de proteção.",
      "A segurança da informação é incompatível com serviços digitais."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "A proteção de dados exige atenção à finalidade, transparência, segurança e direitos dos titulares, conforme o contexto e a legislação aplicável."
  },
  {
    id: "q130",
    enunciado: "Uma circunferência tem raio de 7 cm. Adotando π = 22/7, qual é seu comprimento?",
    alternativas: [
      "22 cm",
      "44 cm",
      "49 cm",
      "88 cm",
      "154 cm"
    ],
    correta: 1,
    materia: "Matemática",
    explicacao: "O comprimento da circunferência é C = 2πr. Assim, C = 2 × 22/7 × 7 = 44 cm."
  },
  {
    id: "q131",
    enunciado: "Assinale a alternativa em que a palavra destacada exerce função de advérbio.",
    alternativas: [
      "A equipe apresentou um relatório DETALHADO.",
      "A máquina funciona REGULARMENTE.",
      "O relatório contém INFORMAÇÕES úteis.",
      "A pesquisadora analisou DOIS resultados.",
      "A solução parece ADEQUADA."
    ],
    correta: 1,
    materia: "Língua Portuguesa",
    explicacao: "\"Regularmente\" modifica o verbo \"funciona\", indicando modo ou frequência. É um advérbio; as demais palavras destacadas exercem outras funções."
  },
  {
    id: "q132",
    enunciado: "Read the text: \"Because the road was flooded, the delivery truck took a longer route. The packages arrived safely, but two hours later than expected.\" What caused the delay?",
    alternativas: [
      "A shortage of packages.",
      "A flooded road that forced a longer route.",
      "An early delivery schedule.",
      "A decision to cancel the shipment.",
      "A problem with the packages' labels."
    ],
    correta: 1,
    materia: "Língua Inglesa",
    explicacao: "O texto relaciona diretamente o atraso à inundação da estrada, que obrigou o caminhão a seguir um percurso mais longo."
  },
  {
    id: "q133",
    enunciado: "Um circuito contém dois resistores de 6 Ω ligados em paralelo a uma fonte ideal de 12 V. Qual é a corrente total fornecida pela fonte?",
    alternativas: [
      "1 A",
      "2 A",
      "3 A",
      "4 A",
      "6 A"
    ],
    correta: 3,
    materia: "Física",
    explicacao: "Dois resistores iguais de 6 Ω em paralelo têm resistência equivalente de 3 Ω. Logo, a corrente total é 12/3 = 4 A."
  },
  {
    id: "q134",
    enunciado: "Uma sequência de quatro símbolos é formada a partir das letras A, B e C, permitindo repetição. Quantas sequências começam com A?",
    alternativas: [
      "9",
      "18",
      "27",
      "54",
      "81"
    ],
    correta: 2,
    materia: "Lógica",
    explicacao: "A primeira posição já está fixada em A. Cada uma das outras três posições tem três opções, totalizando 3³ = 27 sequências."
  },
  {
    id: "q135",
    enunciado: "Uma reação química apresenta liberação de calor para o ambiente. Essa transformação é classificada como",
    alternativas: [
      "endotérmica, com variação de entalpia positiva.",
      "exotérmica, com variação de entalpia negativa.",
      "isotérmica, sem qualquer troca de energia.",
      "radioativa, necessariamente com emissão de partículas alfa.",
      "adiabática, obrigatoriamente sem mudança química."
    ],
    correta: 1,
    materia: "Química",
    explicacao: "Em uma reação exotérmica, o sistema libera calor para o ambiente. Sob pressão constante, a variação de entalpia da reação é negativa."
  },
  {
    id: "q136",
    enunciado: "A política de substituição de importações adotada em diferentes momentos da industrialização brasileira buscou, entre outros objetivos,",
    alternativas: [
      "eliminar toda a produção industrial nacional.",
      "reduzir a dependência de produtos importados por meio do desenvolvimento da produção interna.",
      "impedir a formação de um mercado consumidor urbano.",
      "substituir todas as atividades industriais por agricultura de subsistência.",
      "encerrar as relações comerciais com todos os países."
    ],
    correta: 1,
    materia: "História",
    explicacao: "A substituição de importações procurou ampliar a produção nacional de bens antes adquiridos do exterior, embora os resultados e as estratégias variassem entre períodos."
  },
  {
    id: "q137",
    enunciado: "Uma área agrícola utiliza irrigação intensiva em clima seco, e a água evapora deixando sais acumulados na superfície do solo. Esse processo pode causar",
    alternativas: [
      "salinização do solo, prejudicando o crescimento de plantas.",
      "transformação de todos os sais em oxigênio.",
      "eliminação definitiva de qualquer necessidade de drenagem.",
      "aumento obrigatório da fertilidade em qualquer concentração salina.",
      "conversão imediata do solo em água potável."
    ],
    correta: 0,
    materia: "Geografia",
    explicacao: "Em condições de elevada evaporação e drenagem inadequada, sais podem acumular-se no solo. A salinização dificulta a absorção de água pelas plantas e reduz a produtividade."
  },
  {
    id: "q138",
    enunciado: "Um sistema de transporte passa a utilizar dados de localização dos passageiros para otimizar rotas. Uma medida importante para reduzir riscos à privacidade é",
    alternativas: [
      "manter todos os dados identificáveis indefinidamente.",
      "publicar os históricos individuais de deslocamento sem restrições.",
      "limitar a coleta ao necessário, proteger os registros e estabelecer regras de acesso.",
      "eliminar qualquer informação sobre a finalidade do tratamento.",
      "permitir que qualquer funcionário copie os dados livremente."
    ],
    correta: 2,
    materia: "Atualidades",
    explicacao: "Minimização da coleta, proteção dos registros, controle de acesso e regras de retenção reduzem riscos de exposição indevida dos dados pessoais."
  },
  {
    id: "q139",
    enunciado: "Uma loja vende 120 unidades de um produto em quatro dias, mantendo a mesma média diária. Quantas unidades venderá, nessa mesma média, em 15 dias?",
    alternativas: [
      "300",
      "360",
      "400",
      "450",
      "480"
    ],
    correta: 3,
    materia: "Matemática",
    explicacao: "A média é 120/4 = 30 unidades por dia. Em 15 dias, a projeção é 30 × 15 = 450 unidades."
  },
  {
    id: "q140",
    enunciado: "Em um texto narrativo, a descrição detalhada de sons, cheiros e sensações de um ambiente contribui principalmente para",
    alternativas: [
      "eliminar a construção de atmosfera narrativa.",
      "substituir necessariamente todos os acontecimentos por argumentos científicos.",
      "criar ambientação e aproximar o leitor da experiência das personagens.",
      "transformar automaticamente a obra em uma notícia jornalística.",
      "impedir que o leitor formule interpretações."
    ],
    correta: 2,
    materia: "Literatura",
    explicacao: "Detalhes sensoriais constroem a ambientação e podem aproximar o leitor das experiências das personagens, influenciando a atmosfera e o ritmo narrativo."
  },
  {
    id: "q141",
    enunciado: "Read the text: \"The report distinguishes between correlation and causation. Two variables may change together, but that does not necessarily mean that one causes the other.\" What distinction does the text emphasize?",
    alternativas: [
      "A correlation always proves causation.",
      "Causation is identical to coincidence.",
      "Variables cannot be measured scientifically.",
      "An association between variables does not automatically establish a causal relationship.",
      "Scientific reports should avoid comparing variables."
    ],
    correta: 3,
    materia: "Língua Inglesa",
    explicacao: "O texto explica que duas variáveis podem estar associadas sem que uma seja necessariamente a causa da outra."
  },
  {
    id: "q142",
    enunciado: "Um aparelho transforma energia elétrica em calor com potência de 1 500 W e permanece ligado por 2 horas. Qual é o consumo de energia elétrica nesse intervalo, em kWh?",
    alternativas: [
      "0,75 kWh",
      "1,5 kWh",
      "2 kWh",
      "3 kWh",
      "30 kWh"
    ],
    correta: 3,
    materia: "Física",
    explicacao: "A potência é 1,5 kW. O consumo é E = Pt = 1,5 × 2 = 3 kWh."
  },
  {
    id: "q143",
    enunciado: "Uma moeda honesta é lançada duas vezes. Qual é a probabilidade de obter exatamente uma cara?",
    alternativas: [
      "1/4",
      "1/3",
      "1/2",
      "2/3",
      "3/4"
    ],
    correta: 2,
    materia: "Lógica",
    explicacao: "Os resultados equiprováveis são cara-cara, cara-coroa, coroa-cara e coroa-coroa. Dois dos quatro resultados têm exatamente uma cara, portanto a probabilidade é 1/2."
  },
  {
    id: "q144",
    enunciado: "Em uma reação de combustão completa de um hidrocarboneto, os produtos formados são, em condições usuais,",
    alternativas: [
      "carbono metálico e hidrogênio gasoso.",
      "monóxido de carbono e água exclusivamente em qualquer quantidade de oxigênio.",
      "dióxido de carbono e água.",
      "nitrogênio e sais minerais.",
      "ácido clorídrico e oxigênio."
    ],
    correta: 2,
    materia: "Química",
    explicacao: "Na combustão completa de hidrocarbonetos, com oxigênio suficiente, o carbono é convertido principalmente em CO₂ e o hidrogênio em H₂O."
  },
  {
    id: "q145",
    enunciado: "A independência do Brasil, em 1822, resultou de um processo que envolveu interesses das elites locais, disputas políticas e transformações nas relações com Portugal. Uma característica do período posterior foi",
    alternativas: [
      "a implantação imediata de uma república federal.",
      "a manutenção da monarquia sob o governo de Dom Pedro I.",
      "a abolição imediata da escravidão.",
      "a ausência de conflitos políticos durante todo o Primeiro Reinado.",
      "a dissolução de qualquer estrutura estatal centralizada."
    ],
    correta: 1,
    materia: "História",
    explicacao: "Após a independência, o Brasil manteve a monarquia e Dom Pedro I tornou-se imperador. A escravidão continuou e ocorreram conflitos políticos durante o Primeiro Reinado."
  },
  {
    id: "q146",
    enunciado: "Uma bacia hidrográfica apresenta áreas urbanas, agrícolas e florestais. Para avaliar a qualidade da água de um rio, é mais adequado",
    alternativas: [
      "analisar somente a cor da água em um único ponto.",
      "considerar exclusivamente a quantidade de chuva anual.",
      "medir parâmetros físicos, químicos e biológicos em diferentes pontos e períodos.",
      "presumir que a ausência de odor comprova potabilidade.",
      "descartar qualquer influência do uso do solo."
    ],
    correta: 2,
    materia: "Geografia",
    explicacao: "A qualidade da água envolve diversos parâmetros e varia espacial e temporalmente. Medições em diferentes locais e períodos ajudam a identificar fontes e padrões de contaminação."
  },
  {
    id: "q147",
    enunciado: "Uma organização utiliza um sistema automatizado para selecionar candidatos a vagas de emprego. Qual medida pode ajudar a identificar possíveis discriminações algorítmicas?",
    alternativas: [
      "Impedir qualquer auditoria dos resultados.",
      "Avaliar o desempenho do sistema em diferentes grupos e examinar critérios e dados utilizados.",
      "Presumir que a automação elimina qualquer viés humano.",
      "Ocultar os critérios de avaliação de todos os responsáveis.",
      "Avaliar apenas a velocidade de processamento."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "Testes por grupos, auditoria de dados e análise dos critérios podem revelar diferenças injustificadas nos resultados e apoiar medidas de mitigação."
  },
  {
    id: "q148",
    enunciado: "Uma função linear relaciona a distância d, em quilômetros, ao tempo t, em horas, por d(t) = 72t. Qual interpretação corresponde ao coeficiente 72?",
    alternativas: [
      "A distância inicial é de 72 km.",
      "O veículo percorre 72 km a cada hora, com velocidade constante de 72 km/h.",
      "O tempo inicial é de 72 horas.",
      "A distância diminui 72 km a cada hora.",
      "O veículo acelera obrigatoriamente 72 m/s²."
    ],
    correta: 1,
    materia: "Matemática",
    explicacao: "Na função d(t) = 72t, a distância é proporcional ao tempo. O coeficiente 72 representa a velocidade constante de 72 km/h."
  },
  {
    id: "q149",
    enunciado: "Leia o trecho: \"A cidade acordou apressada, engolindo passos e ruídos antes mesmo do amanhecer.\" O recurso expressivo predominante em \"A cidade acordou apressada\" é",
    alternativas: [
      "hipérbole numérica.",
      "personificação.",
      "eufemismo.",
      "onomatopeia.",
      "pleonasmo vicioso."
    ],
    correta: 1,
    materia: "Literatura",
    explicacao: "A cidade recebe uma característica própria de seres vivos, como acordar e estar apressada. Esse recurso é personificação, também chamada prosopopeia."
  },
  {
    id: "q150",
    enunciado: "Uma população de plantas apresenta menor crescimento quando a disponibilidade de água diminui. Qual processo fisiológico é diretamente prejudicado pela falta de água, podendo reduzir a produção de matéria orgânica?",
    alternativas: [
      "A fotossíntese, em razão de limitações fisiológicas associadas ao estresse hídrico.",
      "A formação de prótons no núcleo atômico.",
      "A transformação de clorofila em tecido ósseo.",
      "A digestão extracelular realizada por animais carnívoros.",
      "A produção de gametas por meiose em todos os organismos."
    ],
    correta: 0,
    materia: "Biologia",
    explicacao: "A falta de água pode provocar fechamento dos estômatos e limitar a entrada de CO₂, além de afetar outros processos celulares. Isso pode reduzir a taxa fotossintética e o crescimento."
  },

  {
    id: "q151",
    enunciado: "Uma empresa vende um equipamento por R$ 1.200,00 à vista ou em três parcelas iguais de R$ 440,00. Qual é a diferença entre o total parcelado e o preço à vista, em porcentagem do preço à vista?",
    alternativas: [
      "5%",
      "8%",
      "10%",
      "12%",
      "15%"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "O total parcelado é 3 × 440 = R$ 1.320,00. A diferença é R$ 120,00, que corresponde a 120/1.200 × 100 = 10%."
  },
  {
    id: "q152",
    enunciado: "Em um texto argumentativo, o autor apresenta uma opinião contrária à sua e, em seguida, explica por que considera seus argumentos insuficientes. Essa estratégia contribui para",
    alternativas: [
      "eliminar a necessidade de defender uma tese.",
      "demonstrar que qualquer opinião contrária é necessariamente falsa.",
      "construir uma argumentação que considera objeções e procura respondê-las.",
      "transformar o texto em uma narrativa sem posicionamento.",
      "impedir o uso de evidências."
    ],
    correta: 2,
    materia: "Língua Portuguesa",
    explicacao: "A apresentação e a refutação de uma objeção permitem enfrentar argumentos alternativos e fortalecer a defesa da tese, desde que a resposta seja fundamentada."
  },
  {
    id: "q153",
    enunciado: "Read the text: \"The new bus route connects three neighborhoods to the industrial district. During the first month, passenger numbers increased, but the city will continue monitoring travel times and operating costs.\" What will the city do next?",
    alternativas: [
      "Close the route immediately.",
      "Stop collecting passenger data.",
      "Continue evaluating travel times and operating costs.",
      "Replace all buses with private cars.",
      "Assume that the route has no costs."
    ],
    correta: 2,
    materia: "Língua Inglesa",
    explicacao: "O texto informa que a cidade continuará monitorando os tempos de viagem e os custos operacionais."
  },
  {
    id: "q154",
    enunciado: "Um corpo é abandonado do repouso de uma altura de 20 m. Desprezando a resistência do ar e adotando g = 10 m/s², qual é aproximadamente o tempo de queda?",
    alternativas: [
      "1 s",
      "2 s",
      "3 s",
      "4 s",
      "5 s"
    ],
    correta: 1,
    materia: "Física",
    explicacao: "Na queda livre, h = gt²/2. Portanto, 20 = 5t², logo t² = 4 e t = 2 s."
  },
  {
    id: "q155",
    enunciado: "Em uma turma de 30 estudantes, 18 estudam inglês, 14 estudam espanhol e 6 estudam os dois idiomas. Quantos estudantes não estudam nenhum desses idiomas?",
    alternativas: [
      "2",
      "4",
      "6",
      "8",
      "10"
    ],
    correta: 1,
    materia: "Lógica",
    explicacao: "Pelo princípio da inclusão-exclusão, 18 + 14 − 6 = 26 estudantes estudam pelo menos um idioma. Assim, 30 − 26 = 4 não estudam nenhum."
  },
  {
    id: "q156",
    enunciado: "Uma amostra de 10 g de uma substância radioativa possui meia-vida de 4 dias. Qual massa permanecerá após 12 dias, supondo decaimento radioativo sem reposição?",
    alternativas: [
      "0,625 g",
      "1,25 g",
      "2,5 g",
      "5 g",
      "7,5 g"
    ],
    correta: 1,
    materia: "Química",
    explicacao: "Em 12 dias ocorrem três meias-vidas. A massa restante é 10 × (1/2)³ = 1,25 g."
  },
  {
    id: "q157",
    enunciado: "A Revolução Francesa de 1789 questionou privilégios do Antigo Regime e difundiu ideias de cidadania e igualdade jurídica. Uma contradição histórica desse processo foi",
    alternativas: [
      "a defesa de princípios universais de direitos coexistir com exclusões sociais e políticas.",
      "a manutenção integral e permanente de todos os privilégios feudais sem contestação.",
      "a ausência de qualquer participação popular nos acontecimentos.",
      "a eliminação imediata de todas as desigualdades econômicas.",
      "a proibição de qualquer debate sobre soberania."
    ],
    correta: 0,
    materia: "História",
    explicacao: "A Revolução difundiu princípios de liberdade e igualdade jurídica, mas sua aplicação foi limitada por exclusões políticas e sociais, inclusive relacionadas a gênero, propriedade e escravidão."
  },
  {
    id: "q158",
    enunciado: "Em regiões semiáridas, a vegetação apresenta adaptações à disponibilidade limitada de água. Uma característica que pode reduzir a perda hídrica em algumas espécies é",
    alternativas: [
      "aumentar indefinidamente a abertura dos estômatos durante a seca.",
      "desenvolver folhas reduzidas ou estruturas que diminuam a transpiração.",
      "eliminar a necessidade de realizar fotossíntese.",
      "impedir completamente a absorção de sais minerais.",
      "substituir a água por dióxido de carbono nos tecidos."
    ],
    correta: 1,
    materia: "Biologia",
    explicacao: "Folhas reduzidas, cutículas espessas e mecanismos de controle estomático podem diminuir a perda de água. As adaptações variam entre espécies e ambientes."
  },
  {
    id: "q159",
    enunciado: "Uma pesquisa compara a distribuição de renda em duas regiões. Na região A, a renda média é elevada, mas grande parte da população recebe valores baixos. Qual indicador pode ajudar a investigar a desigualdade na distribuição da renda?",
    alternativas: [
      "Apenas a temperatura média anual.",
      "O índice de Gini.",
      "A altitude média do território.",
      "O número de dias do calendário.",
      "A extensão total das rodovias."
    ],
    correta: 1,
    materia: "Geografia",
    explicacao: "O índice de Gini é utilizado para analisar a desigualdade de uma distribuição, incluindo a renda. A renda média, isoladamente, não revela como os recursos estão distribuídos."
  },
  {
    id: "q160",
    enunciado: "Uma notícia informa que uma nova tecnologia de armazenamento de energia foi anunciada por uma empresa, mas ainda não passou por testes independentes em larga escala. Qual interpretação é mais adequada?",
    alternativas: [
      "O anúncio comprova que a tecnologia já funciona melhor em todas as situações.",
      "A ausência de testes independentes torna impossível qualquer pesquisa futura.",
      "O desempenho deve ser avaliado com evidências experimentais e comparações adequadas antes de conclusões definitivas.",
      "O investimento financeiro garante a superioridade técnica do produto.",
      "A tecnologia deve ser considerada inútil apenas por ser recente."
    ],
    correta: 2,
    materia: "Atualidades",
    explicacao: "Anúncios comerciais não substituem validação independente. Ensaios comparáveis, segurança, durabilidade e condições reais de operação são importantes para avaliar o desempenho."
  },
  {
    id: "q161",
    enunciado: "Uma sequência aritmética possui primeiro termo igual a 7 e razão igual a 4. Qual é a soma dos dez primeiros termos?",
    alternativas: [
      "180",
      "210",
      "230",
      "250",
      "270"
    ],
    correta: 3,
    materia: "Matemática",
    explicacao: "O décimo termo é 7 + 9 × 4 = 43. A soma é S₁₀ = 10(7 + 43)/2 = 250."
  },
  {
    id: "q162",
    enunciado: "Em uma frase, o pronome \"cujo\" estabelece uma relação entre dois substantivos. Em \"A pesquisadora cujo artigo recebeu um prêmio trabalha no instituto\", o pronome indica",
    alternativas: [
      "uma relação de posse entre a pesquisadora e o artigo.",
      "uma oposição entre o artigo e o instituto.",
      "uma conclusão sobre o trabalho realizado.",
      "uma indicação de tempo passado.",
      "uma comparação de intensidade."
    ],
    correta: 0,
    materia: "Língua Portuguesa",
    explicacao: "\"Cujo\" expressa relação de posse ou pertencimento entre termos: o artigo é associado à pesquisadora. O pronome concorda com o elemento possuído e não admite artigo depois dele."
  },
  {
    id: "q163",
    enunciado: "Read the text: \"The school installed water fountains to reduce the use of disposable bottles. Students are encouraged to bring reusable containers, and the school will compare waste levels before and after the program.\" What is the purpose of comparing waste levels?",
    alternativas: [
      "To determine whether the program is associated with a reduction in waste.",
      "To prove that disposable bottles cannot be recycled.",
      "To stop students from drinking water.",
      "To increase the number of disposable containers.",
      "To eliminate the need for any environmental assessment."
    ],
    correta: 0,
    materia: "Língua Inglesa",
    explicacao: "A comparação entre os níveis de resíduos antes e depois do programa ajuda a avaliar se houve mudança associada à iniciativa."
  },
  {
    id: "q164",
    enunciado: "Um fio metálico tem resistência de 4 Ω. Se sua resistência permanecer constante e a tensão aplicada aumentar de 8 V para 20 V, qual será a nova corrente elétrica?",
    alternativas: [
      "2 A",
      "3 A",
      "4 A",
      "5 A",
      "8 A"
    ],
    correta: 3,
    materia: "Física",
    explicacao: "Pela lei de Ohm, I = U/R. Com tensão de 20 V e resistência de 4 Ω, a corrente é 20/4 = 5 A."
  },
  {
    id: "q165",
    enunciado: "Uma senha tem cinco algarismos, escolhidos de 0 a 9, com repetição permitida. Quantas senhas começam com 7 e terminam com 3?",
    alternativas: [
      "100",
      "1 000",
      "10 000",
      "50 000",
      "100 000"
    ],
    correta: 1,
    materia: "Lógica",
    explicacao: "A primeira posição e a última estão fixadas. As três posições intermediárias têm dez possibilidades cada, totalizando 10³ = 1 000 senhas."
  },
  {
    id: "q166",
    enunciado: "Uma indústria deseja separar uma mistura de água e etanol, líquidos miscíveis com diferentes temperaturas de ebulição. O método mais apropriado é",
    alternativas: [
      "filtração simples.",
      "separação magnética.",
      "decantação em funil de separação.",
      "destilação fracionada.",
      "peneiração."
    ],
    correta: 3,
    materia: "Química",
    explicacao: "A destilação fracionada permite separar líquidos miscíveis com temperaturas de ebulição diferentes, aproveitando suas distintas volatilidades."
  },
  {
    id: "q167",
    enunciado: "A política de segregação racial institucionalizada na África do Sul durante o apartheid restringia direitos da população negra. A luta contra esse regime esteve associada",
    alternativas: [
      "à defesa da manutenção permanente das leis segregacionistas.",
      "à mobilização política por igualdade de direitos e pelo fim da segregação.",
      "à rejeição de qualquer participação da população na vida política.",
      "à expansão de um sistema universal de privilégios raciais.",
      "à proibição de movimentos sociais contrários ao regime em todo o mundo."
    ],
    correta: 1,
    materia: "História",
    explicacao: "A oposição ao apartheid reuniu movimentos internos e apoio internacional em defesa da igualdade de direitos e do fim da segregação legal."
  },
  {
    id: "q168",
    enunciado: "Em uma cadeia alimentar, os decompositores atuam sobre restos orgânicos e organismos mortos. Sua função ecológica mais importante é",
    alternativas: [
      "impedir definitivamente a circulação de matéria.",
      "converter energia solar diretamente em combustíveis fósseis em poucos minutos.",
      "reciclar nutrientes, devolvendo substâncias ao ambiente para reutilização pelos organismos.",
      "produzir exclusivamente consumidores secundários.",
      "eliminar todos os elementos químicos do ecossistema."
    ],
    correta: 2,
    materia: "Biologia",
    explicacao: "Decompositores degradam matéria orgânica e liberam nutrientes no ambiente. Esses nutrientes podem ser reutilizados pelos produtores, mantendo os ciclos da matéria."
  },
  {
    id: "q169",
    enunciado: "Uma cidade pretende reduzir a dependência do automóvel em deslocamentos curtos. Qual conjunto de medidas favorece diretamente esse objetivo?",
    alternativas: [
      "Ampliar calçadas acessíveis, ciclovias conectadas e transporte público eficiente.",
      "Reduzir a segurança de pedestres e ciclistas.",
      "Concentrar todos os serviços em áreas sem transporte coletivo.",
      "Eliminar os espaços públicos destinados à circulação a pé.",
      "Aumentar a distância entre moradias e serviços sem planejamento."
    ],
    correta: 0,
    materia: "Geografia",
    explicacao: "Infraestrutura segura para caminhar e pedalar, combinada a transporte público eficiente, pode tornar alternativas ao automóvel mais acessíveis."
  },
  {
    id: "q170",
    enunciado: "Uma plataforma de comércio eletrônico altera frequentemente a ordem dos produtos apresentados a cada consumidor. Para investigar se uma mudança de algoritmo aumentou as vendas, uma abordagem adequada seria",
    alternativas: [
      "comparar apenas o maior valor de vendas já registrado.",
      "atribuir qualquer aumento exclusivamente ao algoritmo, sem controlar outros fatores.",
      "realizar uma comparação controlada entre grupos ou períodos comparáveis, considerando possíveis fatores de confusão.",
      "eliminar todos os registros de compras anteriores.",
      "usar somente comentários de um único consumidor."
    ],
    correta: 2,
    materia: "Atualidades",
    explicacao: "Comparações controladas ajudam a distinguir o efeito provável do algoritmo de outros fatores, como sazonalidade, preços, publicidade e mudanças na demanda."
  },
  {
    id: "q171",
    enunciado: "Um triângulo tem base de 18 cm e altura de 10 cm. Qual é sua área?",
    alternativas: [
      "45 cm²",
      "60 cm²",
      "90 cm²",
      "180 cm²",
      "360 cm²"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "A área de um triângulo é base × altura / 2. Logo, A = 18 × 10 / 2 = 90 cm²."
  },
  {
    id: "q172",
    enunciado: "Em um relatório, o autor utiliza a expressão \"o custo ambiental da produção\" para reunir diversos impactos, como poluição, consumo de água e perda de habitats. O uso de \"custo\" nesse contexto",
    alternativas: [
      "é necessariamente literal e se limita a pagamentos monetários.",
      "pode ampliar o sentido da palavra, aplicando-a figurativamente aos impactos ambientais.",
      "indica exclusivamente uma operação matemática.",
      "elimina a relação entre produção e meio ambiente.",
      "constitui sempre um erro de concordância."
    ],
    correta: 1,
    materia: "Língua Portuguesa",
    explicacao: "A palavra \"custo\" é ampliada para incluir consequências ambientais, não apenas despesas financeiras. Esse uso figurado contribui para expressar os impactos da produção."
  },
  {
    id: "q173",
    enunciado: "Read the text: \"The software is open source, so users can inspect its code under the applicable license. However, installing it still requires checking compatibility and security updates.\" What does the text imply?",
    alternativas: [
      "Open-source software never requires maintenance.",
      "The source code cannot be inspected by users.",
      "An open-source license removes every security risk.",
      "Code accessibility does not eliminate the need to assess compatibility and updates.",
      "All open-source programs are incompatible with every operating system."
    ],
    correta: 3,
    materia: "Língua Inglesa",
    explicacao: "O texto reconhece a possibilidade de examinar o código, mas ressalta que compatibilidade e atualizações de segurança continuam importantes."
  },
  {
    id: "q174",
    enunciado: "Uma lente convergente possui distância focal de 20 cm. Um objeto é colocado a 60 cm da lente. Usando a equação 1/f = 1/p + 1/p', qual é a distância da imagem à lente?",
    alternativas: [
      "10 cm",
      "15 cm",
      "20 cm",
      "30 cm",
      "60 cm"
    ],
    correta: 3,
    materia: "Física",
    explicacao: "Temos 1/20 = 1/60 + 1/p'. Assim, 1/p' = 1/20 − 1/60 = 2/60 = 1/30, portanto p' = 30 cm."
  },
  {
    id: "q175",
    enunciado: "Uma urna contém cartões numerados de 1 a 10. Um cartão é escolhido ao acaso. Qual é a probabilidade de o número ser múltiplo de 2 ou de 3?",
    alternativas: [
      "1/5",
      "2/5",
      "3/5",
      "7/10",
      "4/5"
    ],
    correta: 3,
    materia: "Lógica",
    explicacao: "Os múltiplos de 2 são 2, 4, 6, 8 e 10; os de 3 são 3, 6 e 9. A união contém sete números distintos, então a probabilidade é 7/10."
  },
  {
    id: "q176",
    enunciado: "Em uma transformação química, um catalisador aumenta a rapidez da reação sem ser consumido globalmente no processo. Isso ocorre principalmente porque ele",
    alternativas: [
      "aumenta a massa total dos produtos.",
      "fornece um caminho reacional alternativo com menor energia de ativação.",
      "impede todas as colisões entre partículas.",
      "altera necessariamente os valores das constantes de equilíbrio a uma temperatura fixa.",
      "transforma reagentes em elementos químicos diferentes sem reação."
    ],
    correta: 1,
    materia: "Química",
    explicacao: "O catalisador oferece um mecanismo alternativo com menor energia de ativação, aumentando a velocidade da reação. Ele não altera a constante de equilíbrio a temperatura fixa."
  },
  {
    id: "q177",
    enunciado: "A crise econômica de 1929 teve repercussões internacionais e afetou profundamente a economia brasileira, fortemente ligada à exportação de café. Uma consequência foi",
    alternativas: [
      "o aumento ilimitado da demanda externa por café.",
      "a redução da relevância de qualquer política econômica estatal.",
      "a pressão sobre o setor cafeeiro e o estímulo a mudanças na orientação econômica.",
      "a extinção imediata de todas as atividades agrícolas brasileiras.",
      "o fim definitivo da industrialização no país."
    ],
    correta: 2,
    materia: "História",
    explicacao: "A crise reduziu a demanda e os preços internacionais, afetando a economia cafeeira. O período contribuiu para mudanças nas políticas econômicas e para transformações na industrialização brasileira."
  },
  {
    id: "q178",
    enunciado: "O lançamento de esgoto rico em nutrientes em um lago pode estimular a proliferação de algas. A decomposição da matéria orgânica produzida pode reduzir o oxigênio dissolvido e prejudicar peixes. Esse fenômeno está relacionado à",
    alternativas: [
      "eutrofização.",
      "sublimação.",
      "refração.",
      "fossilização instantânea.",
      "neutralização magnética."
    ],
    correta: 0,
    materia: "Biologia",
    explicacao: "O enriquecimento excessivo de nutrientes pode favorecer florações de algas. A decomposição da matéria orgânica consome oxigênio e pode provocar hipóxia e mortalidade de organismos aquáticos."
  },
  {
    id: "q179",
    enunciado: "Um município tem 240 mil habitantes distribuídos por uma área de 800 km². Qual é sua densidade demográfica média?",
    alternativas: [
      "30 habitantes/km²",
      "100 habitantes/km²",
      "240 habitantes/km²",
      "300 habitantes/km²",
      "800 habitantes/km²"
    ],
    correta: 3,
    materia: "Geografia",
    explicacao: "A densidade demográfica é a população dividida pela área: 240 000/800 = 300 habitantes por quilômetro quadrado."
  },
  {
    id: "q180",
    enunciado: "Um município publica um conjunto de dados sobre gastos públicos em formato que permite download, processamento e reutilização. Para que a iniciativa fortaleça a transparência, é importante que os dados",
    alternativas: [
      "sejam divulgados sem contexto ou definição das variáveis.",
      "permaneçam disponíveis apenas em arquivos ilegíveis por sistemas digitais.",
      "sejam acessíveis, atualizados e acompanhados de informações que permitam interpretá-los.",
      "sejam alterados sem registro das mudanças.",
      "excluam qualquer informação sobre a metodologia de produção."
    ],
    correta: 2,
    materia: "Atualidades",
    explicacao: "Dados abertos são mais úteis quando acessíveis, reutilizáveis, atualizados e acompanhados de documentação. A contextualização permite interpretar corretamente os valores divulgados."
  },
  {
    id: "q181",
    enunciado: "Uma progressão geométrica tem primeiro termo 3 e razão 2. Qual é o sexto termo?",
    alternativas: [
      "24",
      "32",
      "48",
      "64",
      "96"
    ],
    correta: 4,
    materia: "Matemática",
    explicacao: "O sexto termo é a₆ = 3 × 2⁵ = 96. Portanto, a alternativa correta é E."
  },
  {
    id: "q182",
    enunciado: "Na frase \"A equipe trabalhou tão cuidadosamente quanto o protocolo exigia\", a expressão \"tão cuidadosamente quanto\" estabelece uma relação de",
    alternativas: [
      "causa.",
      "comparação.",
      "conclusão.",
      "oposição.",
      "finalidade."
    ],
    correta: 1,
    materia: "Língua Portuguesa",
    explicacao: "A estrutura \"tão ... quanto\" estabelece uma comparação de intensidade ou modo entre o trabalho da equipe e o padrão exigido pelo protocolo."
  },
  {
    id: "q183",
    enunciado: "Read the text: \"After the city replaced several streetlights with efficient models, electricity use in those locations fell by 35%. The report notes that the comparison covers only the selected streets.\" What limitation should readers recognize?",
    alternativas: [
      "The reported reduction cannot apply automatically to every street in the city.",
      "Electricity use increased by 35% everywhere.",
      "The report contains no numerical information.",
      "Efficient lighting never reduces energy consumption.",
      "The selected streets were not part of the city."
    ],
    correta: 0,
    materia: "Língua Inglesa",
    explicacao: "O relatório limita a comparação às ruas selecionadas. Generalizar o resultado para toda a cidade exigiria dados adicionais."
  },
  {
    id: "q184",
    enunciado: "Uma amostra de 2 kg de água recebe 42 kJ de calor, sem mudança de estado. Considerando calor específico igual a 4,2 kJ/(kg·°C), qual é a variação de temperatura?",
    alternativas: [
      "2 °C",
      "5 °C",
      "10 °C",
      "20 °C",
      "42 °C"
    ],
    correta: 1,
    materia: "Física",
    explicacao: "Pela relação Q = mcΔT, temos ΔT = 42/(2 × 4,2) = 5 °C."
  },
  {
    id: "q185",
    enunciado: "Um código binário de seis posições utiliza apenas os símbolos 0 e 1. Quantos códigos possuem exatamente um único algarismo 1?",
    alternativas: [
      "6",
      "12",
      "15",
      "32",
      "64"
    ],
    correta: 0,
    materia: "Lógica",
    explicacao: "Basta escolher qual das seis posições conterá o único algarismo 1. Há seis escolhas possíveis."
  },
  {
    id: "q186",
    enunciado: "Uma amostra de gás ideal sofre uma transformação isotérmica, mantendo constante a temperatura. Se o volume diminui à metade, a pressão final, em relação à inicial, será",
    alternativas: [
      "metade da pressão inicial.",
      "igual à pressão inicial.",
      "o dobro da pressão inicial.",
      "quatro vezes a pressão inicial.",
      "nula."
    ],
    correta: 2,
    materia: "Física",
    explicacao: "Em uma transformação isotérmica de uma quantidade fixa de gás ideal, pressão e volume são inversamente proporcionais. Reduzir o volume à metade duplica a pressão."
  },
  {
    id: "q187",
    enunciado: "Uma solução apresenta concentração de 25 mg/L de determinada substância. Qual massa dessa substância estará presente em 4 L da solução, supondo concentração uniforme?",
    alternativas: [
      "6,25 mg",
      "25 mg",
      "50 mg",
      "100 mg",
      "400 mg"
    ],
    correta: 3,
    materia: "Química",
    explicacao: "A massa é a concentração multiplicada pelo volume: 25 mg/L × 4 L = 100 mg."
  },
  {
    id: "q188",
    enunciado: "A urbanização brasileira esteve associada a processos de industrialização, migração e concentração de atividades econômicas. O crescimento de cidades médias em determinadas regiões pode ser explicado, entre outros fatores,",
    alternativas: [
      "pela ausência total de redes de transporte.",
      "pela desconcentração de algumas atividades e pela ampliação de serviços regionais.",
      "pelo desaparecimento de qualquer diferença entre cidades.",
      "pela proibição da instalação de universidades e hospitais.",
      "pela eliminação das relações entre áreas rurais e urbanas."
    ],
    correta: 1,
    materia: "Geografia",
    explicacao: "Cidades médias podem crescer quando atividades econômicas e serviços se distribuem para além das grandes metrópoles, fortalecendo sua função como centros regionais."
  },
  {
    id: "q189",
    enunciado: "Uma campanha de saúde divulga uma taxa de ocorrência de doença sem informar o tamanho da população observada nem o período analisado. Qual é a principal limitação dessa informação?",
    alternativas: [
      "Toda taxa é inválida independentemente de seu contexto.",
      "Não é possível interpretar adequadamente a medida sem conhecer sua base populacional e seu intervalo temporal.",
      "O número de casos é sempre suficiente para comparar regiões de tamanhos diferentes.",
      "O período de observação não influencia dados epidemiológicos.",
      "A ausência dessas informações comprova que não houve casos."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "Taxas dependem de uma população de referência e de um período definidos. Sem esses dados, comparações e interpretações podem ser enganosas."
  },
  {
    id: "q190",
    enunciado: "Uma circunferência de raio 6 cm delimita um círculo. Adotando π = 3,14, qual é aproximadamente a área desse círculo?",
    alternativas: [
      "18,84 cm²",
      "36 cm²",
      "56,52 cm²",
      "113,04 cm²",
      "226,08 cm²"
    ],
    correta: 3,
    materia: "Matemática",
    explicacao: "A área do círculo é A = πr². Assim, A = 3,14 × 6² = 3,14 × 36 = 113,04 cm²."
  },
  {
    id: "q191",
    enunciado: "Assinale a alternativa em que a pontuação contribui corretamente para isolar uma explicação intercalada.",
    alternativas: [
      "O laboratório, que foi reformado recentemente, recebeu novos equipamentos.",
      "O laboratório que, foi reformado recentemente recebeu novos equipamentos.",
      "O laboratório que foi, reformado recentemente recebeu novos equipamentos.",
      "O laboratório que foi reformado, recentemente recebeu novos equipamentos.",
      "O laboratório que foi reformado recentemente recebeu, novos equipamentos."
    ],
    correta: 0,
    materia: "Língua Portuguesa",
    explicacao: "A oração explicativa \"que foi reformado recentemente\" deve ser isolada por vírgulas. A pontuação da alternativa A delimita corretamente essa intercalação."
  },
  {
    id: "q192",
    enunciado: "Read the text: \"The research team published its data and methods so that other scientists could examine the results. Several groups later repeated the experiment and reported similar findings.\" What does this example illustrate?",
    alternativas: [
      "Scientific findings should never be checked by others.",
      "Sharing methods and data can support independent verification.",
      "Repeated experiments always produce contradictory results.",
      "Scientific research cannot involve public communication.",
      "Publication alone guarantees that every result is correct."
    ],
    correta: 1,
    materia: "Língua Inglesa",
    explicacao: "A divulgação de métodos e dados permite que outros pesquisadores avaliem e reproduzam procedimentos, fortalecendo a verificação independente dos resultados."
  },
  {
    id: "q193",
    enunciado: "Uma onda sonora passa de um meio para outro no qual sua velocidade de propagação é diferente. Ao atravessar a interface, a frequência permanece determinada pela fonte e, portanto, mantém-se constante. Se a velocidade aumenta, o comprimento de onda",
    alternativas: [
      "diminui na mesma proporção.",
      "permanece necessariamente constante.",
      "aumenta na mesma proporção.",
      "torna-se igual a zero.",
      "deixa de depender da velocidade."
    ],
    correta: 2,
    materia: "Física",
    explicacao: "Como v = λf e a frequência não muda na passagem entre meios, o comprimento de onda aumenta quando a velocidade de propagação aumenta."
  },
  {
    id: "q194",
    enunciado: "Em uma caixa há cartões numerados de 1 a 20. Um cartão é sorteado ao acaso. Qual é a probabilidade de o número sorteado ser divisível por 4 ou por 5?",
    alternativas: [
      "1/5",
      "2/5",
      "9/20",
      "1/2",
      "3/5"
    ],
    correta: 1,
    materia: "Lógica",
    explicacao: "Os múltiplos de 4 são 4, 8, 12, 16 e 20; os de 5 são 5, 10, 15 e 20. Há oito números distintos na união, logo a probabilidade é 8/20 = 2/5."
  },
  {
    id: "q195",
    enunciado: "Um átomo neutro possui número atômico 17 e número de massa 35. Quantos prótons, elétrons e nêutrons ele apresenta, respectivamente?",
    alternativas: [
      "17, 17 e 18.",
      "17, 18 e 17.",
      "18, 17 e 17.",
      "35, 17 e 18.",
      "17, 35 e 18."
    ],
    correta: 0,
    materia: "Química",
    explicacao: "O número atômico indica 17 prótons. Como o átomo é neutro, há 17 elétrons. O número de nêutrons é 35 − 17 = 18."
  },
  {
    id: "q196",
    enunciado: "O movimento abolicionista brasileiro contou com a atuação de pessoas negras, associações, jornais, fugas e outras formas de resistência. Essa perspectiva histórica destaca que",
    alternativas: [
      "o fim da escravidão resultou exclusivamente de uma decisão individual da monarquia.",
      "a população escravizada permaneceu passiva durante todo o processo.",
      "diferentes atores sociais e formas de mobilização contribuíram para o processo abolicionista.",
      "as campanhas abolicionistas começaram somente após 1888.",
      "a escravidão foi abolida sem conflitos ou pressões sociais."
    ],
    correta: 2,
    materia: "História",
    explicacao: "O abolicionismo envolveu mobilizações diversas, incluindo resistência de pessoas escravizadas, atuação de abolicionistas e pressões políticas e econômicas."
  },
  {
    id: "q197",
    enunciado: "Em um ecossistema, o desaparecimento de uma espécie polinizadora pode reduzir a reprodução de plantas que dependem dela. Uma consequência possível é",
    alternativas: [
      "aumento obrigatório da reprodução de todas as plantas.",
      "alteração das interações ecológicas e redução da produção de sementes de certas espécies vegetais.",
      "eliminação da necessidade de dispersão de sementes.",
      "interrupção da fotossíntese em todos os organismos.",
      "transformação dos polinizadores em produtores primários."
    ],
    correta: 1,
    materia: "Biologia",
    explicacao: "A perda de polinizadores pode reduzir a transferência de pólen e a reprodução de plantas dependentes dessas interações, afetando também organismos que utilizam seus frutos e sementes."
  },
  {
    id: "q198",
    enunciado: "Uma indústria pretende reduzir a geração de resíduos e o consumo de matéria-prima. Qual estratégia está mais alinhada aos princípios da economia circular?",
    alternativas: [
      "Projetar produtos para maior durabilidade, reparo e reutilização de materiais.",
      "Aumentar a obsolescência dos produtos para acelerar as substituições.",
      "Misturar todos os resíduos para dificultar a recuperação de materiais.",
      "Priorizar o descarte imediato de produtos ainda funcionais.",
      "Ignorar a etapa de concepção dos produtos."
    ],
    correta: 0,
    materia: "Atualidades",
    explicacao: "A economia circular procura manter produtos e materiais em uso pelo maior tempo possível, favorecendo durabilidade, reparo, reutilização e recuperação de recursos."
  },
  {
    id: "q199",
    enunciado: "Uma função exponencial é dada por f(x) = 3 × 2^x. Qual é o valor de f(4)?",
    alternativas: [
      "12",
      "24",
      "32",
      "48",
      "64"
    ],
    correta: 3,
    materia: "Matemática",
    explicacao: "Substituindo x = 4, obtém-se f(4) = 3 × 2⁴ = 3 × 16 = 48."
  },
  {
    id: "q200",
    enunciado: "Em uma crônica, o narrador descreve uma fila de atendimento e utiliza humor para revelar a burocracia cotidiana. A combinação entre uma situação comum e uma observação crítica é característica que pode aproximar o texto do gênero",
    alternativas: [
      "manual técnico.",
      "crônica.",
      "relatório laboratorial.",
      "verbete enciclopédico.",
      "contrato jurídico."
    ],
    correta: 1,
    materia: "Literatura",
    explicacao: "A crônica frequentemente parte de situações cotidianas para construir reflexão, humor ou crítica social, utilizando linguagem próxima da experiência comum."
  },

  {
    id: "q201",
    enunciado: "Uma fábrica produz 480 peças em 6 horas, mantendo ritmo constante. Após uma melhoria, sua produtividade aumenta em 25%. Quantas peças serão produzidas em 8 horas no novo ritmo?",
    alternativas: [
      "640",
      "720",
      "760",
      "800",
      "960"
    ],
    correta: 3,
    materia: "Matemática",
    explicacao: "O ritmo inicial é 480/6 = 80 peças por hora. Com aumento de 25%, passa a 100 peças por hora. Em 8 horas, serão produzidas 800 peças."
  },
  {
    id: "q202",
    enunciado: "Leia: \"A empresa anunciou novas medidas de economia de água. Entretanto, os resultados dependerão da adesão dos funcionários.\" A palavra \"Entretanto\" introduz uma relação de",
    alternativas: [
      "conclusão.",
      "oposição ou ressalva.",
      "causa.",
      "explicação.",
      "finalidade."
    ],
    correta: 1,
    materia: "Língua Portuguesa",
    explicacao: "\"Entretanto\" é uma conjunção adversativa que apresenta uma ressalva: anunciar medidas não garante, por si só, os resultados esperados."
  },
  {
    id: "q203",
    enunciado: "Read the text: \"The city tested electric buses on two routes. The vehicles produced no exhaust emissions during operation, although the overall environmental impact also depends on electricity generation and battery production.\" Which statement best reflects the text?",
    alternativas: [
      "Electric buses have no environmental impact at any stage.",
      "Electric buses always use electricity generated from coal.",
      "The environmental impact of electric buses must be assessed beyond their operation.",
      "The trial proved that every diesel bus should be removed immediately.",
      "Battery production has no relation to environmental assessment."
    ],
    correta: 2,
    materia: "Língua Inglesa",
    explicacao: "O texto distingue emissões durante a operação dos impactos associados à geração de eletricidade e à fabricação das baterias."
  },
  {
    id: "q204",
    enunciado: "Uma máquina realiza 18 000 J de trabalho em 60 segundos. Se a potência média permanecer constante, quanto trabalho ela realizará em 2 minutos?",
    alternativas: [
      "9 000 J",
      "18 000 J",
      "24 000 J",
      "36 000 J",
      "72 000 J"
    ],
    correta: 3,
    materia: "Física",
    explicacao: "A potência média é 18 000/60 = 300 W. Em 120 segundos, o trabalho será 300 × 120 = 36 000 J."
  },
  {
    id: "q205",
    enunciado: "Uma pessoa escolhe aleatoriamente um número inteiro de 1 a 30. Qual é a probabilidade de o número ser múltiplo de 3, mas não ser múltiplo de 2?",
    alternativas: [
      "1/6",
      "1/5",
      "1/3",
      "2/5",
      "1/2"
    ],
    correta: 0,
    materia: "Lógica",
    explicacao: "Os múltiplos ímpares de 3 entre 1 e 30 são 3, 9, 15, 21 e 27. São cinco resultados favoráveis entre 30, portanto 5/30 = 1/6. A alternativa correta deve ser A."
  },
  {
    id: "q206",
    enunciado: "Em uma reação de neutralização completa entre ácido clorídrico e hidróxido de sódio, os produtos formados são",
    alternativas: [
      "cloro gasoso e hidrogênio.",
      "sódio metálico e água.",
      "cloreto de sódio e água.",
      "carbonato de sódio e oxigênio.",
      "ácido sulfúrico e cloreto de hidrogênio."
    ],
    correta: 2,
    materia: "Química",
    explicacao: "A reação HCl + NaOH → NaCl + H₂O produz cloreto de sódio e água. Trata-se de uma neutralização ácido-base."
  },
  {
    id: "q207",
    enunciado: "O processo de descolonização afro-asiática intensificou-se após a Segunda Guerra Mundial. Entre os fatores que contribuíram para esse processo, destaca-se",
    alternativas: [
      "o fortalecimento universal dos impérios coloniais europeus sem oposição.",
      "a expansão de movimentos nacionalistas e a contestação do domínio colonial.",
      "o desaparecimento de todas as fronteiras políticas.",
      "a proibição de movimentos de independência pela população local.",
      "a ausência de mudanças nas relações internacionais."
    ],
    correta: 1,
    materia: "História",
    explicacao: "Movimentos nacionalistas, transformações na ordem internacional e o enfraquecimento de potências coloniais contribuíram para processos de independência na Ásia e na África."
  },
  {
    id: "q208",
    enunciado: "Em uma área urbana, a instalação de corredores exclusivos para ônibus reduz o tempo de viagem e aumenta a regularidade do transporte coletivo. Qual efeito social pode decorrer dessa medida?",
    alternativas: [
      "Aumento obrigatório do uso de automóveis em todos os bairros.",
      "Redução da acessibilidade dos usuários do transporte público em qualquer situação.",
      "Melhoria potencial do acesso a empregos e serviços para pessoas que dependem do transporte coletivo.",
      "Eliminação de todas as desigualdades urbanas.",
      "Desaparecimento da necessidade de planejamento de mobilidade."
    ],
    correta: 2,
    materia: "Geografia",
    explicacao: "Um transporte coletivo mais rápido e previsível pode melhorar o acesso a oportunidades urbanas, especialmente para quem depende dele. Os resultados também dependem da cobertura e da integração da rede."
  },
  {
    id: "q209",
    enunciado: "Uma instituição passa a disponibilizar seus serviços exclusivamente por aplicativo. Qual medida pode reduzir o risco de exclusão de pessoas com acesso limitado à internet ou pouca familiaridade digital?",
    alternativas: [
      "Encerrar todos os canais de atendimento alternativos.",
      "Oferecer acessibilidade, orientação aos usuários e canais de atendimento complementares.",
      "Exigir aparelhos de alto custo sem oferecer suporte.",
      "Impedir que usuários solicitem ajuda.",
      "Desconsiderar as diferenças de conectividade entre regiões."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "A inclusão digital exige considerar acesso, acessibilidade e competências de uso. Canais alternativos e suporte podem reduzir barreiras para pessoas com diferentes condições tecnológicas."
  },
  {
    id: "q210",
    enunciado: "Um reservatório cilíndrico tem raio interno de 2 m e altura de 3 m. Adotando π = 3,14, qual é aproximadamente sua capacidade em litros?",
    alternativas: [
      "3 768 L",
      "9 420 L",
      "18 840 L",
      "37 680 L",
      "75 360 L"
    ],
    correta: 3,
    materia: "Matemática",
    explicacao: "O volume é V = πr²h = 3,14 × 4 × 3 = 37,68 m³. Como 1 m³ equivale a 1 000 L, a capacidade é 37 680 L."
  },
  {
    id: "q211",
    enunciado: "Em \"Se os resultados forem confirmados, a equipe publicará o relatório\", a oração iniciada por \"Se\" expressa",
    alternativas: [
      "uma condição.",
      "uma conclusão já comprovada.",
      "uma oposição sem relação com a oração principal.",
      "uma comparação de igualdade.",
      "uma explicação de causa já ocorrida."
    ],
    correta: 0,
    materia: "Língua Portuguesa",
    explicacao: "\"Se os resultados forem confirmados\" apresenta a condição para a publicação do relatório. Trata-se de uma oração subordinada adverbial condicional."
  },
  {
    id: "q212",
    enunciado: "Read the text: \"The workshop teaches residents how to repair small household appliances. Participants learn basic safety procedures and may bring their own devices for supervised practice.\" What is the workshop designed to do?",
    alternativas: [
      "Encourage residents to discard all broken appliances.",
      "Teach repair skills and basic safety practices.",
      "Replace every electrical safety regulation.",
      "Guarantee that every appliance can be repaired.",
      "Prevent participants from practising with equipment."
    ],
    correta: 1,
    materia: "Língua Inglesa",
    explicacao: "O texto apresenta o ensino de técnicas de reparo e de procedimentos básicos de segurança como objetivos da oficina."
  },
  {
    id: "q213",
    enunciado: "Um corpo de massa 5 kg está sujeito a duas forças horizontais de sentidos opostos, de 30 N e 10 N. Desprezando o atrito, qual é o módulo da aceleração?",
    alternativas: [
      "2 m/s²",
      "4 m/s²",
      "6 m/s²",
      "8 m/s²",
      "10 m/s²"
    ],
    correta: 1,
    materia: "Física",
    explicacao: "A força resultante tem módulo 30 − 10 = 20 N. Pela segunda lei de Newton, a = 20/5 = 4 m/s²."
  },
  {
    id: "q214",
    enunciado: "Uma equipe deve escolher três representantes entre oito pessoas, sem atribuir cargos diferentes a elas. Quantos grupos distintos podem ser formados?",
    alternativas: [
      "24",
      "56",
      "112",
      "336",
      "512"
    ],
    correta: 1,
    materia: "Lógica",
    explicacao: "Como a ordem não importa, utiliza-se a combinação C(8,3) = 8!/(3!5!) = 56."
  },
  {
    id: "q215",
    enunciado: "A velocidade de uma reação química pode aumentar quando a temperatura é elevada. Segundo a teoria das colisões, isso ocorre principalmente porque",
    alternativas: [
      "todas as moléculas deixam de se movimentar.",
      "a energia de todas as partículas se torna exatamente igual.",
      "uma fração maior das partículas pode realizar colisões com energia suficiente para superar a barreira de ativação.",
      "a quantidade total de matéria desaparece.",
      "a energia de ativação aumenta necessariamente em todas as reações."
    ],
    correta: 2,
    materia: "Química",
    explicacao: "O aumento da temperatura eleva a energia cinética média e a fração de partículas com energia suficiente para superar a energia de ativação, aumentando a frequência de colisões efetivas."
  },
  {
    id: "q216",
    enunciado: "A crise do sistema colonial português no Brasil, no final do século XVIII, esteve relacionada a movimentos que questionavam aspectos da dominação metropolitana. A Inconfidência Mineira, por exemplo, foi influenciada",
    alternativas: [
      "por ideias iluministas e pela insatisfação com a política fiscal portuguesa.",
      "pela defesa de ampliar indefinidamente a cobrança de impostos coloniais.",
      "pela intenção de restaurar o domínio holandês sobre Minas Gerais.",
      "pela ausência de tensões entre a Coroa e grupos locais.",
      "pela defesa de extinguir qualquer atividade mineradora."
    ],
    correta: 0,
    materia: "História",
    explicacao: "A Inconfidência Mineira foi influenciada por ideias iluministas e pelo descontentamento de setores locais com a tributação e a administração colonial portuguesa."
  },
  {
    id: "q217",
    enunciado: "Em áreas costeiras, a construção de edificações sobre dunas pode alterar o transporte natural de areia e aumentar a vulnerabilidade da faixa litorânea. Uma medida de planejamento adequada é",
    alternativas: [
      "permitir construções sem avaliar a dinâmica costeira.",
      "remover toda a vegetação nativa das dunas.",
      "considerar a dinâmica sedimentar e estabelecer restrições de ocupação em áreas vulneráveis.",
      "impedir qualquer estudo de erosão costeira.",
      "substituir o monitoramento ambiental por decisões sem dados."
    ],
    correta: 2,
    materia: "Geografia",
    explicacao: "Dunas e praias participam de sistemas dinâmicos de transporte de sedimentos. O planejamento deve considerar essa dinâmica e limitar ocupações em áreas sujeitas a erosão e instabilidade."
  },
  {
    id: "q218",
    enunciado: "Um sistema de inteligência artificial gera um texto convincente, mas apresenta referências que não correspondem a publicações reais. Qual prática é mais adequada antes de utilizar o material em um trabalho acadêmico?",
    alternativas: [
      "Aceitar as referências porque o texto parece bem escrito.",
      "Verificar a existência e a pertinência das fontes e conferir as afirmações relevantes.",
      "Substituir todas as fontes por opiniões pessoais.",
      "Presumir que a automação impede a produção de informações falsas.",
      "Excluir a necessidade de revisão humana em qualquer contexto."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "Textos gerados automaticamente podem conter referências incorretas ou afirmações não verificadas. Conferir fontes e evidências é essencial antes de utilizar o conteúdo academicamente."
  },
  {
    id: "q219",
    enunciado: "Uma função é definida por f(x) = 2x - 7. Qual é o valor de x para o qual f(x) = 15?",
    alternativas: [
      "4",
      "7",
      "9",
      "11",
      "15"
    ],
    correta: 3,
    materia: "Matemática",
    explicacao: "Resolvendo 2x − 7 = 15, obtemos 2x = 22 e x = 11."
  },
  {
    id: "q220",
    enunciado: "Em um conto, um narrador relata os pensamentos de apenas uma personagem e desconhece informações que ela própria não conhece. Essa perspectiva narrativa é compatível com",
    alternativas: [
      "um narrador com focalização limitada à experiência da personagem.",
      "um narrador que conhece obrigatoriamente todos os acontecimentos e pensamentos.",
      "um texto sem qualquer ponto de vista.",
      "uma descrição exclusivamente técnica.",
      "um narrador que não pode apresentar percepções subjetivas."
    ],
    correta: 0,
    materia: "Literatura",
    explicacao: "A focalização limitada restringe o acesso do leitor às informações e percepções disponíveis à personagem focalizada, diferentemente de uma perspectiva onisciente ampla."
  },
  {
    id: "q221",
    enunciado: "Read the text: \"The survey found that 60% of respondents preferred online appointments. However, the sample included only people who had already used the digital service.\" What is a limitation of the survey?",
    alternativas: [
      "The result has no percentage.",
      "The sample may not represent people who have never used the digital service.",
      "The survey proves that every resident prefers online appointments.",
      "The respondents were necessarily all under 18.",
      "The survey contains no information about preferences."
    ],
    correta: 1,
    materia: "Língua Inglesa",
    explicacao: "Como a amostra inclui apenas usuários anteriores do serviço digital, pode não representar adequadamente pessoas que nunca utilizaram essa modalidade."
  },
  {
    id: "q222",
    enunciado: "Uma onda apresenta frequência de 25 Hz e velocidade de propagação de 100 m/s. Qual é seu período?",
    alternativas: [
      "0,004 s",
      "0,01 s",
      "0,025 s",
      "0,04 s",
      "4 s"
    ],
    correta: 3,
    materia: "Física",
    explicacao: "O período é o inverso da frequência: T = 1/25 = 0,04 s."
  },
  {
    id: "q223",
    enunciado: "Em uma caixa há 6 peças vermelhas e 4 azuis. Duas peças são retiradas sem reposição. Qual é a probabilidade de a primeira ser vermelha e a segunda ser azul?",
    alternativas: [
      "2/15",
      "4/15",
      "1/3",
      "2/5",
      "3/5"
    ],
    correta: 1,
    materia: "Lógica",
    explicacao: "A probabilidade é (6/10) × (4/9) = 24/90 = 4/15."
  },
  {
    id: "q224",
    enunciado: "Uma amostra de 50 g de uma solução contém 5 g de soluto. Adicionam-se 50 g de água, sem perda de matéria. Qual passa a ser a porcentagem em massa do soluto?",
    alternativas: [
      "2,5%",
      "5%",
      "10%",
      "15%",
      "20%"
    ],
    correta: 1,
    materia: "Química",
    explicacao: "A massa de soluto permanece em 5 g e a massa total passa a 100 g. A porcentagem em massa é 5/100 × 100 = 5%."
  },
  {
    id: "q225",
    enunciado: "A Guerra Fria influenciou conflitos regionais em diferentes partes do mundo. Uma característica dessa influência foi",
    alternativas: [
      "a inexistência de disputas ideológicas entre as superpotências.",
      "o apoio político, econômico ou militar a grupos e governos alinhados a diferentes blocos.",
      "a proibição de alianças internacionais.",
      "a eliminação de toda competição tecnológica.",
      "a ausência de interesses estratégicos fora da Europa."
    ],
    correta: 1,
    materia: "História",
    explicacao: "Estados Unidos e União Soviética buscaram ampliar sua influência por meio de alianças, apoio a governos e movimentos e intervenções em conflitos regionais."
  },
  {
    id: "q226",
    enunciado: "A expansão de espécies exóticas invasoras pode comprometer a biodiversidade local. Uma razão para isso é que algumas dessas espécies",
    alternativas: [
      "não conseguem se reproduzir em ambientes naturais.",
      "podem competir por recursos e alterar interações ecológicas.",
      "eliminam obrigatoriamente todas as espécies nativas em poucos dias.",
      "não interagem com organismos de outras espécies.",
      "reduzem sempre a população de todas as pragas agrícolas."
    ],
    correta: 1,
    materia: "Biologia",
    explicacao: "Espécies invasoras podem competir por alimento e espaço, predar espécies nativas ou modificar habitats. Os efeitos dependem das características da espécie e do ecossistema."
  },
  {
    id: "q227",
    enunciado: "Uma região industrial apresenta aumento da população e expansão de bairros residenciais próximos às fábricas. Qual questão deve ser considerada no planejamento territorial?",
    alternativas: [
      "A localização de moradias, fontes de poluição, serviços públicos e redes de transporte.",
      "A eliminação de qualquer regra de uso do solo.",
      "A impossibilidade de ocorrer conflito entre atividades industriais e residenciais.",
      "A irrelevância da qualidade do ar para a saúde pública.",
      "A proibição de qualquer monitoramento ambiental."
    ],
    correta: 0,
    materia: "Geografia",
    explicacao: "O planejamento territorial deve compatibilizar usos do solo e considerar exposição à poluição, acesso a serviços, transporte e qualidade de vida."
  },
  {
    id: "q228",
    enunciado: "Uma empresa afirma que seu produto é \"100% sustentável\", mas não divulga critérios, dados de impacto ou metodologia de avaliação. Essa comunicação pode ser criticada porque",
    alternativas: [
      "toda afirmação ambiental é necessariamente falsa.",
      "afirmações amplas sem evidências podem induzir consumidores a uma percepção ambiental não demonstrada.",
      "a sustentabilidade não pode ser avaliada por nenhum indicador.",
      "a ausência de dados comprova impacto ambiental nulo.",
      "a publicidade nunca influencia decisões de consumo."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "Afirmações ambientais vagas e sem evidências verificáveis podem caracterizar comunicação enganosa ou greenwashing. Critérios claros e dados confiáveis permitem avaliar a alegação."
  },
  {
    id: "q229",
    enunciado: "Uma sequência é definida por a₁ = 5 e aₙ = aₙ₋₁ + 3 para n maior que 1. Qual é o oitavo termo?",
    alternativas: [
      "20",
      "23",
      "24",
      "26",
      "29"
    ],
    correta: 3,
    materia: "Matemática",
    explicacao: "A sequência é uma progressão aritmética de razão 3. O oitavo termo é 5 + 7 × 3 = 26."
  },
  {
    id: "q230",
    enunciado: "Na análise de uma obra literária, o estudo do contexto histórico e cultural é relevante porque",
    alternativas: [
      "determina de forma única todos os significados possíveis do texto.",
      "substitui a leitura e a análise da linguagem da obra.",
      "pode esclarecer temas, escolhas estéticas e relações da obra com sua época.",
      "torna desnecessário examinar narrador, personagens ou recursos estilísticos.",
      "garante que todos os leitores terão exatamente a mesma interpretação."
    ],
    correta: 2,
    materia: "Literatura",
    explicacao: "O contexto histórico e cultural ajuda a compreender temas e escolhas estéticas, mas deve ser articulado à análise da linguagem e da organização interna da obra."
  },
  {
    id: "q231",
    enunciado: "Uma empresa compra matéria-prima por R$ 24,00 a unidade e vende o produto por R$ 40,00. Se os demais custos fixos do período totalizam R$ 3.200,00, quantas unidades precisam ser vendidas para atingir o ponto de equilíbrio?",
    alternativas: [
      "100",
      "150",
      "200",
      "250",
      "300"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "A margem de contribuição por unidade é 40 − 24 = R$ 16,00. O ponto de equilíbrio é 3.200/16 = 200 unidades."
  },
  {
    id: "q232",
    enunciado: "Na frase \"O projeto foi aprovado, apesar das restrições orçamentárias\", a expressão \"apesar das restrições orçamentárias\" indica",
    alternativas: [
      "uma concessão.",
      "uma finalidade.",
      "uma comparação de igualdade.",
      "uma consequência inevitável.",
      "uma condição suficiente."
    ],
    correta: 0,
    materia: "Língua Portuguesa",
    explicacao: "A expressão concessiva reconhece a existência de restrições orçamentárias, mas indica que elas não impediram a aprovação do projeto."
  },
  {
    id: "q233",
    enunciado: "Read the text: \"The research team compared three water filters. All reduced visible particles, but only two met the stated standard for removing the tested microorganisms.\" What is the most accurate conclusion?",
    alternativas: [
      "All three filters removed every microorganism.",
      "None of the filters reduced visible particles.",
      "All filters performed identically in every test.",
      "Reducing visible particles does not necessarily mean meeting the tested microorganism-removal standard.",
      "The study did not compare any filters."
    ],
    correta: 3,
    materia: "Língua Inglesa",
    explicacao: "O texto distingue a remoção de partículas visíveis do atendimento ao padrão de remoção dos microrganismos testados. Um resultado não garante automaticamente o outro."
  },
  {
    id: "q234",
    enunciado: "Um bloco desliza por uma superfície horizontal com coeficiente de atrito cinético 0,2. A massa é 10 kg e adote g = 10 m/s². Qual é o módulo da força de atrito cinético?",
    alternativas: [
      "2 N",
      "10 N",
      "20 N",
      "50 N",
      "100 N"
    ],
    correta: 2,
    materia: "Física",
    explicacao: "Em uma superfície horizontal, a normal é N = mg = 100 N. A força de atrito cinético é Fat = μN = 0,2 × 100 = 20 N."
  },
  {
    id: "q235",
    enunciado: "Uma senha contém três algarismos distintos escolhidos entre 0, 1, 2, 3 e 4. O primeiro algarismo não pode ser zero. Quantas senhas podem ser formadas?",
    alternativas: [
      "24",
      "36",
      "48",
      "60",
      "64"
    ],
    correta: 2,
    materia: "Lógica",
    explicacao: "Há quatro opções para a primeira posição, pois o zero é proibido. Restam quatro opções para a segunda e três para a terceira: 4 × 4 × 3 = 48."
  },
  {
    id: "q236",
    enunciado: "A água apresenta temperatura de ebulição relativamente elevada para uma molécula de sua massa devido, em parte, às interações intermoleculares entre suas moléculas. A interação predominante nesse caso é",
    alternativas: [
      "ligação metálica.",
      "ligação de hidrogênio.",
      "ligação iônica entre moléculas neutras.",
      "força nuclear forte.",
      "ligação covalente entre moléculas distintas."
    ],
    correta: 1,
    materia: "Química",
    explicacao: "As ligações de hidrogênio entre moléculas de água exigem energia para serem vencidas, contribuindo para a temperatura de ebulição relativamente elevada."
  },
  {
    id: "q237",
    enunciado: "A participação política pode ocorrer por meio do voto, de conselhos públicos, de associações e de manifestações. Em uma democracia, esses mecanismos contribuem para",
    alternativas: [
      "eliminar automaticamente todos os conflitos sociais.",
      "impedir que cidadãos expressem demandas coletivas.",
      "ampliar canais de participação e de controle das decisões públicas.",
      "substituir todas as instituições representativas por decisões individuais.",
      "tornar desnecessária a transparência administrativa."
    ],
    correta: 2,
    materia: "História",
    explicacao: "Diferentes mecanismos de participação permitem que cidadãos expressem demandas, acompanhem políticas públicas e influenciem decisões coletivas."
  },
  {
    id: "q238",
    enunciado: "Em uma população, o uso indiscriminado de antibióticos pode favorecer o aumento de bactérias resistentes. Qual medida contribui para reduzir esse processo?",
    alternativas: [
      "Utilizar antibióticos para tratar infecções virais em todos os casos.",
      "Interromper tratamentos prescritos sem orientação profissional.",
      "Usar antibióticos sem avaliar a necessidade clínica.",
      "Utilizar antibióticos adequadamente, com indicação profissional e medidas de prevenção de infecções.",
      "Aumentar indiscriminadamente a dose de qualquer antibiótico."
    ],
    correta: 3,
    materia: "Biologia",
    explicacao: "O uso inadequado de antibióticos favorece a seleção de bactérias resistentes. Prescrição apropriada, adesão às orientações e prevenção de infecções ajudam a reduzir essa pressão seletiva."
  },
  {
    id: "q239",
    enunciado: "Uma cidade possui uma população de 150 mil habitantes e recebe 30 mil novos moradores ao longo de dez anos, sem considerar saídas ou mortes. Qual é o aumento percentual em relação à população inicial?",
    alternativas: [
      "10%",
      "15%",
      "20%",
      "25%",
      "30%"
    ],
    correta: 2,
    materia: "Geografia",
    explicacao: "O aumento é de 30 mil habitantes. Em relação aos 150 mil iniciais, a variação percentual é 30.000/150.000 × 100 = 20%."
  },
  {
    id: "q240",
    enunciado: "Uma reportagem apresenta um gráfico sem indicar a unidade do eixo vertical nem a origem dos dados. Qual é uma limitação importante para a interpretação desse gráfico?",
    alternativas: [
      "Gráficos não podem apresentar dados quantitativos.",
      "A falta de unidade e de fonte dificulta avaliar a escala, o significado e a confiabilidade dos valores.",
      "A ausência de fonte comprova que todos os valores são falsos.",
      "A origem dos dados é irrelevante para qualquer análise.",
      "A unidade do eixo vertical não interfere na interpretação."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "Unidades e fontes permitem compreender o que está sendo medido e avaliar a confiabilidade dos dados. Sem essas informações, interpretações podem ser inadequadas."
  },
  {
    id: "q241",
    enunciado: "Um triângulo retângulo possui catetos de 9 cm e 12 cm. Qual é o comprimento da hipotenusa?",
    alternativas: [
      "13 cm",
      "15 cm",
      "18 cm",
      "21 cm",
      "25 cm"
    ],
    correta: 1,
    materia: "Matemática",
    explicacao: "Pelo teorema de Pitágoras, h² = 9² + 12² = 81 + 144 = 225. Portanto, h = 15 cm."
  },
  {
    id: "q242",
    enunciado: "Assinale a alternativa em que a palavra destacada exerce função de pronome relativo.",
    alternativas: [
      "O técnico chegou CEDO.",
      "A equipe concluiu TRÊS etapas.",
      "O relatório QUE recebi estava completo.",
      "O teste foi MUITO demorado.",
      "A solução parece ADEQUADA."
    ],
    correta: 2,
    materia: "Língua Portuguesa",
    explicacao: "Em \"O relatório que recebi\", o pronome relativo \"que\" retoma \"relatório\" e introduz uma oração subordinada adjetiva."
  },
  {
    id: "q243",
    enunciado: "Read the text: \"A coastal town installed sensors to measure water levels. The information is used to issue alerts when flooding becomes more likely, giving residents additional time to prepare.\" What is the main benefit described?",
    alternativas: [
      "Preventing all coastal storms from occurring.",
      "Guaranteeing that flooding will never happen.",
      "Eliminating the need for emergency planning.",
      "Providing earlier warnings that allow residents to prepare.",
      "Reducing water levels immediately through sensors."
    ],
    correta: 3,
    materia: "Língua Inglesa",
    explicacao: "Os sensores permitem emitir alertas antecipados, oferecendo mais tempo para que moradores se preparem. Eles não impedem a ocorrência de tempestades ou enchentes."
  },
  {
    id: "q244",
    enunciado: "Uma fonte ideal de 18 V alimenta três resistores ligados em série, de resistências 2 Ω, 4 Ω e 3 Ω. Qual é a potência total dissipada pelos resistores?",
    alternativas: [
      "18 W",
      "24 W",
      "36 W",
      "54 W",
      "81 W"
    ],
    correta: 2,
    materia: "Física",
    explicacao: "A resistência equivalente é 2 + 4 + 3 = 9 Ω. A corrente é 18/9 = 2 A. A potência total é P = UI = 18 × 2 = 36 W."
  },
  {
    id: "q245",
    enunciado: "Uma urna contém 4 cartões numerados de 1 a 4. Dois cartões são retirados sem reposição, e a ordem é registrada. Quantos resultados ordenados diferentes são possíveis?",
    alternativas: [
      "4",
      "6",
      "8",
      "12",
      "16"
    ],
    correta: 3,
    materia: "Lógica",
    explicacao: "Há quatro opções para o primeiro cartão e três para o segundo. Como a ordem é registrada, existem 4 × 3 = 12 resultados."
  },
  {
    id: "q246",
    enunciado: "Um átomo perde dois elétrons durante uma transformação química. Em relação ao átomo neutro original, a espécie formada é",
    alternativas: [
      "um ânion de carga 2−.",
      "um cátion de carga 2+.",
      "um isótopo com dois prótons a menos.",
      "um átomo com número de massa reduzido em dois.",
      "uma molécula obrigatoriamente neutra."
    ],
    correta: 1,
    materia: "Química",
    explicacao: "A perda de dois elétrons deixa duas cargas positivas líquidas, formando um cátion de carga 2+. O número de prótons não se altera nessa transformação química."
  },
  {
    id: "q247",
    enunciado: "O movimento dos direitos civis nos Estados Unidos, especialmente nas décadas de 1950 e 1960, combateu práticas de segregação racial. Uma de suas principais reivindicações foi",
    alternativas: [
      "ampliar a segregação em espaços públicos.",
      "restringir o direito ao voto de grupos discriminados.",
      "garantir igualdade de direitos e combater a discriminação racial.",
      "restaurar legalmente a escravidão.",
      "proibir a participação política de minorias."
    ],
    correta: 2,
    materia: "História",
    explicacao: "O movimento dos direitos civis lutou contra a segregação e a discriminação, reivindicando igualdade jurídica, acesso a serviços e proteção dos direitos políticos."
  },
  {
    id: "q248",
    enunciado: "Uma floresta é fragmentada por estradas e áreas agrícolas. Uma consequência ecológica possível é",
    alternativas: [
      "a eliminação imediata de todas as espécies invasoras.",
      "o aumento obrigatório da conectividade entre habitats.",
      "a ausência de efeitos sobre o deslocamento dos organismos.",
      "a redução da possibilidade de troca entre populações isoladas.",
      "a interrupção de todos os ciclos biogeoquímicos em escala planetária."
    ],
    correta: 3,
    materia: "Biologia",
    explicacao: "A fragmentação pode isolar populações, dificultar o deslocamento e reduzir o fluxo gênico. Os efeitos dependem das espécies, do tamanho dos fragmentos e da conectividade restante."
  },
  {
    id: "q249",
    enunciado: "Uma cidade pretende ampliar a arborização de ruas para reduzir o calor. Para que o programa seja eficaz e duradouro, é importante",
    alternativas: [
      "escolher espécies adequadas ao clima, ao espaço disponível e à infraestrutura urbana.",
      "plantar qualquer espécie sem considerar suas dimensões adultas.",
      "eliminar o acompanhamento das mudas após o plantio.",
      "priorizar árvores que não tolerem as condições locais.",
      "impedir a avaliação dos efeitos sobre calçadas e redes de serviços."
    ],
    correta: 0,
    materia: "Geografia",
    explicacao: "A escolha adequada das espécies, o espaço para raízes e copas e a manutenção são essenciais para a sobrevivência das árvores e a redução dos conflitos com a infraestrutura."
  },
  {
    id: "q250",
    enunciado: "Um relatório sobre desinformação compara publicações virais com informações verificadas por instituições científicas. Qual procedimento ajuda a avaliar a confiabilidade de uma afirmação compartilhada nas redes?",
    alternativas: [
      "Considerar verdadeiro o conteúdo com mais curtidas.",
      "Verificar a fonte original, a data, as evidências apresentadas e a confirmação independente.",
      "Ignorar o contexto em que a afirmação foi produzida.",
      "Compartilhar o conteúdo antes de conferir sua origem.",
      "Presumir que toda publicação acompanhada de números é confiável."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "A checagem de fonte, data, evidências e confirmação independente ajuda a distinguir informações sustentadas por dados de conteúdos enganosos."
  },

  {
    id: "q251",
    enunciado: "Uma empresa registra receitas mensais de R$ 18.000,00 e custos variáveis equivalentes a 40% da receita. Se os custos fixos mensais são R$ 6.000,00, qual é o lucro mensal?",
    alternativas: [
      "R$ 1.200,00",
      "R$ 4.800,00",
      "R$ 5.400,00",
      "R$ 7.200,00",
      "R$ 10.800,00"
    ],
    correta: 1,
    materia: "Matemática",
    explicacao: "Os custos variáveis são 0,4 × 18.000 = R$ 7.200,00. O lucro é 18.000 − 7.200 − 6.000 = R$ 4.800,00."
  },
  {
    id: "q252",
    enunciado: "Leia: \"Os pesquisadores divulgaram os dados, os quais poderão ser utilizados por outras equipes.\" A expressão \"os quais\" retoma",
    alternativas: [
      "os pesquisadores.",
      "outras equipes.",
      "os dados.",
      "a divulgação.",
      "a possibilidade de utilização."
    ],
    correta: 2,
    materia: "Língua Portuguesa",
    explicacao: "O pronome relativo \"os quais\" retoma o termo masculino plural \"os dados\", estabelecendo coesão referencial entre as orações."
  },
  {
    id: "q253",
    enunciado: "Read the text: \"The factory reduced its water consumption by repairing leaks and reusing water in selected stages. Managers caution that further reductions may require changes to the production process.\" What does the text suggest?",
    alternativas: [
      "Water reuse has already eliminated every environmental impact.",
      "The factory cannot reduce water consumption any further.",
      "Repairing leaks increased water consumption.",
      "Further improvements may require changes beyond the measures already adopted.",
      "The production process is unrelated to water consumption."
    ],
    correta: 3,
    materia: "Língua Inglesa",
    explicacao: "O texto afirma que reparos e reutilização já reduziram o consumo, mas novas reduções podem exigir mudanças no próprio processo produtivo."
  },
  {
    id: "q254",
    enunciado: "Uma força constante de 50 N desloca um objeto por 4 m na mesma direção e no mesmo sentido da força. Qual é o trabalho realizado por essa força?",
    alternativas: [
      "12,5 J",
      "46 J",
      "54 J",
      "100 J",
      "200 J"
    ],
    correta: 4,
    materia: "Física",
    explicacao: "O trabalho de uma força constante é W = Fd cos θ. Como a força e o deslocamento têm a mesma direção, θ = 0° e W = 50 × 4 = 200 J."
  },
  {
    id: "q255",
    enunciado: "Uma equipe escolhe aleatoriamente uma pessoa entre 12 candidatos para ocupar uma vaga e outra pessoa diferente para uma segunda vaga idêntica. Considerando que a ordem de escolha não altera a composição do grupo selecionado, quantos pares diferentes podem ser formados?",
    alternativas: [
      "24",
      "36",
      "55",
      "66",
      "132"
    ],
    correta: 3,
    materia: "Lógica",
    explicacao: "Como a ordem não importa, o número de pares é C(12,2) = 12 × 11/2 = 66."
  },
  {
    id: "q256",
    enunciado: "Em uma célula eletrolítica, uma fonte externa fornece energia elétrica para provocar uma reação química não espontânea. Esse processo é denominado",
    alternativas: [
      "eletrólise.",
      "neutralização.",
      "combustão espontânea.",
      "destilação.",
      "fermentação."
    ],
    correta: 0,
    materia: "Química",
    explicacao: "Na eletrólise, a energia elétrica fornecida por uma fonte externa impulsiona uma reação de oxirredução não espontânea."
  },
  {
    id: "q257",
    enunciado: "O movimento operário brasileiro do início do século XX foi influenciado por diferentes correntes políticas e pela experiência de trabalhadores imigrantes. Entre suas reivindicações estavam",
    alternativas: [
      "a ampliação irrestrita das jornadas e a eliminação dos descansos.",
      "a proibição de associações profissionais.",
      "a redução de salários e a retirada de direitos.",
      "a manutenção obrigatória do trabalho infantil em condições perigosas.",
      "melhores condições de trabalho, redução da jornada e organização coletiva."
    ],
    correta: 4,
    materia: "História",
    explicacao: "Movimentos operários reivindicaram melhores salários, redução da jornada, condições de trabalho mais seguras e liberdade de organização."
  },
  {
    id: "q258",
    enunciado: "A vacinação pode reduzir a circulação de um agente infeccioso em uma população. Quando a cobertura é elevada, a transmissão pode diminuir também entre algumas pessoas que não desenvolveram imunidade própria. Esse efeito está associado à",
    alternativas: [
      "seleção artificial de todos os agentes infecciosos.",
      "imunidade coletiva, cuja intensidade depende de fatores como transmissibilidade e cobertura vacinal.",
      "transformação de vírus em bactérias.",
      "eliminação universal de qualquer doença infecciosa.",
      "ausência de interação entre indivíduos suscetíveis e infectados."
    ],
    correta: 1,
    materia: "Biologia",
    explicacao: "A imunidade coletiva ocorre quando a proporção de pessoas imunes reduz a circulação do agente, diminuindo oportunidades de transmissão. O nível necessário varia conforme a doença e a efetividade da imunização."
  },
  {
    id: "q259",
    enunciado: "Uma região metropolitana concentra empregos em um município e moradias mais acessíveis em municípios vizinhos. Essa organização pode intensificar",
    alternativas: [
      "o desaparecimento das viagens pendulares.",
      "a independência completa entre moradia e emprego.",
      "os deslocamentos diários entre municípios.",
      "a eliminação da demanda por transporte coletivo.",
      "a ausência de relações econômicas entre as cidades."
    ],
    correta: 2,
    materia: "Geografia",
    explicacao: "A concentração de empregos e a distribuição desigual de moradias favorecem deslocamentos pendulares entre municípios, criando demanda por transporte metropolitano integrado."
  },
  {
    id: "q260",
    enunciado: "Um relatório de sustentabilidade apresenta uma redução nas emissões de uma empresa, mas não informa se a produção aumentou ou diminuiu. Para avaliar a eficiência ambiental da operação, uma informação complementar relevante seria",
    alternativas: [
      "a cor do logotipo da empresa.",
      "a quantidade de funcionários que utilizam redes sociais.",
      "o número de páginas do relatório.",
      "as emissões por unidade produzida, além das emissões totais.",
      "a quantidade de anúncios publicitários publicados."
    ],
    correta: 3,
    materia: "Atualidades",
    explicacao: "As emissões totais e a intensidade de emissões por unidade produzida respondem a perguntas diferentes. A intensidade ajuda a comparar a eficiência ambiental quando o volume de produção varia."
  },
  {
    id: "q261",
    enunciado: "Uma função quadrática é dada por f(x) = x² − 6x + 5. Quais são suas raízes reais?",
    alternativas: [
      "x = −1 e x = −5",
      "x = 1 e x = 5",
      "x = 2 e x = 3",
      "x = −2 e x = 3",
      "x = 0 e x = 5"
    ],
    correta: 1,
    materia: "Matemática",
    explicacao: "Fatorando, f(x) = (x − 1)(x − 5). Portanto, as raízes são x = 1 e x = 5."
  },
  {
    id: "q262",
    enunciado: "Na frase \"A proposta foi aceita porque apresentava resultados verificáveis\", a oração introduzida por \"porque\" expressa",
    alternativas: [
      "causa ou justificativa.",
      "oposição.",
      "concessão.",
      "finalidade.",
      "alternância."
    ],
    correta: 0,
    materia: "Língua Portuguesa",
    explicacao: "A oração introduzida por \"porque\" apresenta a razão pela qual a proposta foi aceita: seus resultados eram verificáveis."
  },
  {
    id: "q263",
    enunciado: "Read the text: \"A community garden grows vegetables for local families. Volunteers organize planting schedules, share tools and decide collectively how to distribute the harvest.\" Which feature is emphasized?",
    alternativas: [
      "Exclusive ownership by a single commercial company.",
      "Dependence on imported vegetables only.",
      "Absence of cooperation among participants.",
      "Collective organization and shared decisions.",
      "A prohibition on growing food locally."
    ],
    correta: 3,
    materia: "Língua Inglesa",
    explicacao: "O texto destaca a organização conjunta dos voluntários, o compartilhamento de ferramentas e a decisão coletiva sobre a distribuição da colheita."
  },
  {
    id: "q264",
    enunciado: "Um aparelho é ligado a uma fonte de 120 V e consome uma corrente de 5 A. Considerando o aparelho resistivo e a tensão constante, qual é sua potência elétrica?",
    alternativas: [
      "24 W",
      "125 W",
      "240 W",
      "500 W",
      "600 W"
    ],
    correta: 4,
    materia: "Física",
    explicacao: "A potência elétrica é P = UI. Assim, P = 120 × 5 = 600 W."
  },
  {
    id: "q265",
    enunciado: "Em uma caixa existem 3 cartões com a letra A, 2 com a letra B e 5 com a letra C. Um cartão é retirado ao acaso. Qual é a probabilidade de ele apresentar a letra A ou B?",
    alternativas: [
      "1/5",
      "1/2",
      "3/5",
      "4/5",
      "9/10"
    ],
    correta: 1,
    materia: "Lógica",
    explicacao: "Há 3 + 2 = 5 cartões favoráveis em um total de 10. A probabilidade é 5/10 = 1/2."
  },
  {
    id: "q266",
    enunciado: "Uma solução aquosa apresenta pH 11 a 25 °C. Considerando pH + pOH = 14, qual é seu pOH?",
    alternativas: [
      "1",
      "2",
      "3",
      "11",
      "14"
    ],
    correta: 2,
    materia: "Química",
    explicacao: "Pela relação pH + pOH = 14, temos pOH = 14 − 11 = 3."
  },
  {
    id: "q267",
    enunciado: "O Iluminismo valorizou a razão e questionou aspectos do absolutismo e de estruturas tradicionais de poder. Uma consequência de suas ideias foi",
    alternativas: [
      "a defesa universal do direito divino dos reis como único fundamento político.",
      "a rejeição de qualquer investigação racional sobre a sociedade.",
      "a proibição de debates sobre liberdade e organização política.",
      "a valorização de princípios como direitos, liberdade e crítica à autoridade tradicional.",
      "a eliminação imediata de todos os conflitos sociais europeus."
    ],
    correta: 3,
    materia: "História",
    explicacao: "Pensadores iluministas defenderam, em diferentes formulações, o uso da razão e questionaram formas tradicionais de autoridade, influenciando debates sobre direitos e organização política."
  },
  {
    id: "q268",
    enunciado: "Uma população de peixes vive em um lago cuja temperatura aumenta persistentemente. Algumas espécies não toleram bem temperaturas elevadas e apresentam redução na reprodução. Esse exemplo mostra que",
    alternativas: [
      "as condições ambientais podem influenciar a sobrevivência e o sucesso reprodutivo dos organismos.",
      "a temperatura não interfere em processos fisiológicos.",
      "todas as espécies apresentam a mesma tolerância térmica.",
      "a evolução ocorre necessariamente em uma única geração.",
      "as populações não dependem das condições do ambiente."
    ],
    correta: 0,
    materia: "Biologia",
    explicacao: "Temperatura e outros fatores ambientais influenciam o metabolismo, a reprodução e a sobrevivência. Espécies distintas apresentam diferentes faixas de tolerância."
  },
  {
    id: "q269",
    enunciado: "Uma área rural próxima a uma cidade passa a receber condomínios, galpões e novas rodovias. Esse processo pode ser interpretado como",
    alternativas: [
      "isolamento completo entre campo e cidade.",
      "eliminação de toda atividade agrícola no território nacional.",
      "transformação de toda área rural em floresta preservada.",
      "desaparecimento da circulação de mercadorias.",
      "expansão da influência urbana sobre o uso e a valorização do solo rural."
    ],
    correta: 4,
    materia: "Geografia",
    explicacao: "A expansão urbana pode modificar usos do solo rural, valorizar terrenos e introduzir atividades residenciais, logísticas e industriais em áreas antes predominantemente agrícolas."
  },
  {
    id: "q270",
    enunciado: "Uma plataforma divulga um ranking de escolas sem explicar os critérios utilizados nem considerar diferenças entre os perfis dos estudantes. Uma avaliação crítica desse ranking deve",
    alternativas: [
      "aceitar a classificação como medida completa da qualidade educacional.",
      "verificar os indicadores utilizados, sua metodologia e as condições de comparação entre as escolas.",
      "considerar irrelevantes as condições socioeconômicas dos estudantes.",
      "presumir que qualquer ranking possui critérios neutros e universais.",
      "concluir que uma única métrica explica todos os resultados escolares."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "Rankings dependem de indicadores e escolhas metodológicas. Para comparar instituições, é necessário examinar os critérios, a comparabilidade e fatores que influenciam os resultados."
  },
  {
    id: "q271",
    enunciado: "Uma função exponencial de decrescimento é dada por f(t) = 800 × (1/2)^(t/4), em que t é medido em horas. Qual é o valor de f(12)?",
    alternativas: [
      "50",
      "100",
      "200",
      "400",
      "600"
    ],
    correta: 1,
    materia: "Matemática",
    explicacao: "Para t = 12, o expoente é 12/4 = 3. Logo, f(12) = 800 × (1/2)³ = 100."
  },
  {
    id: "q272",
    enunciado: "Em \"Os dados foram revisados; contudo, algumas incertezas permaneceram\", a palavra \"contudo\" pode ser substituída, sem alterar a relação principal entre as orações, por",
    alternativas: [
      "portanto.",
      "porque.",
      "entretanto.",
      "logo.",
      "assim."
    ],
    correta: 2,
    materia: "Língua Portuguesa",
    explicacao: "\"Contudo\" e \"entretanto\" são conjunções adversativas, utilizadas para estabelecer uma relação de contraste entre as informações."
  },
  {
    id: "q273",
    enunciado: "Read the text: \"The school introduced a program to lend laptops to students who do not have suitable devices at home. The program also includes technical support and basic digital skills workshops.\" Which barrier does the program address most directly?",
    alternativas: [
      "Only the cost of school uniforms.",
      "The absence of all classroom teaching.",
      "The need to prohibit computer use.",
      "Access to devices and the skills required to use them.",
      "The elimination of every difference in academic performance."
    ],
    correta: 3,
    materia: "Língua Inglesa",
    explicacao: "O programa oferece equipamentos e formação digital, enfrentando tanto a falta de dispositivos quanto dificuldades de utilização."
  },
  {
    id: "q274",
    enunciado: "Um objeto é lançado verticalmente para cima com velocidade inicial de 20 m/s. Desprezando a resistência do ar e adotando g = 10 m/s², qual é a altura máxima atingida em relação ao ponto de lançamento?",
    alternativas: [
      "10 m",
      "20 m",
      "30 m",
      "40 m",
      "50 m"
    ],
    correta: 1,
    materia: "Física",
    explicacao: "No ponto mais alto, a velocidade final é zero. Pela equação v² = v₀² − 2gh, temos 0 = 400 − 20h, portanto h = 20 m."
  },
  {
    id: "q275",
    enunciado: "Uma empresa tem quatro projetos independentes, e cada um tem probabilidade de 0,5 de ser aprovado. Qual é a probabilidade de exatamente dois projetos serem aprovados?",
    alternativas: [
      "1/16",
      "1/8",
      "1/4",
      "3/8",
      "1/2"
    ],
    correta: 3,
    materia: "Lógica",
    explicacao: "Há C(4,2) = 6 maneiras de escolher dois projetos aprovados. Cada configuração tem probabilidade (0,5)⁴ = 1/16. Logo, a probabilidade é 6/16 = 3/8."
  },
  {
    id: "q276",
    enunciado: "A fórmula molecular C₃H₈O pode corresponder a diferentes compostos orgânicos. Qual das alternativas apresenta um composto que pertence à função álcool?",
    alternativas: [
      "Propanal.",
      "Propanona.",
      "Ácido propanoico.",
      "Propano.",
      "Propan-1-ol."
    ],
    correta: 4,
    materia: "Química",
    explicacao: "O propan-1-ol apresenta o grupo funcional hidroxila ligado a carbono saturado, caracterizando a função álcool. Sua fórmula molecular é C₃H₈O."
  },
  {
    id: "q277",
    enunciado: "A Constituição de 1988 reconhece direitos fundamentais e estabelece princípios para a organização do Estado brasileiro. A existência desses direitos significa que",
    alternativas: [
      "todas as políticas públicas produzem resultados iguais em todas as regiões.",
      "a efetivação dos direitos independe de instituições e políticas públicas.",
      "a previsão jurídica dos direitos é importante, mas sua realização também depende de mecanismos de implementação e proteção.",
      "os direitos fundamentais se aplicam apenas aos agentes públicos.",
      "a participação social é incompatível com a ordem constitucional."
    ],
    correta: 2,
    materia: "História",
    explicacao: "O reconhecimento constitucional estabelece garantias jurídicas, mas a efetivação dos direitos também depende de instituições, políticas públicas e mecanismos de proteção."
  },
  {
    id: "q278",
    enunciado: "Uma espécie vegetal possui flores que são polinizadas principalmente por uma espécie específica de inseto. Se o inseto desaparecer localmente, qual consequência pode ocorrer?",
    alternativas: [
      "A reprodução da planta pode diminuir, caso não existam polinizadores alternativos eficazes.",
      "A planta passará necessariamente a reproduzir-se por sementes sem fecundação.",
      "Todas as plantas da região desaparecerão imediatamente.",
      "A fotossíntese será interrompida em todos os organismos.",
      "A espécie vegetal deixará de precisar de água."
    ],
    correta: 0,
    materia: "Biologia",
    explicacao: "A perda de um polinizador importante pode reduzir o sucesso reprodutivo de plantas dependentes dele. O efeito depende da existência de outros polinizadores e da biologia reprodutiva da espécie."
  },
  {
    id: "q279",
    enunciado: "Uma região depende de um único setor econômico e sofre forte queda de renda quando esse setor entra em crise. Qual estratégia pode reduzir essa vulnerabilidade?",
    alternativas: [
      "Concentrar ainda mais os investimentos no mesmo setor.",
      "Eliminar a formação profissional em outras áreas.",
      "Impedir o desenvolvimento de novos empreendimentos.",
      "Diversificar as atividades econômicas e ampliar a qualificação da população.",
      "Reduzir todos os investimentos em infraestrutura."
    ],
    correta: 3,
    materia: "Geografia",
    explicacao: "A diversificação econômica pode reduzir a dependência de um único setor, enquanto a qualificação profissional amplia as possibilidades de emprego e adaptação a mudanças."
  },
  {
    id: "q280",
    enunciado: "Um estudo sobre a qualidade do ar apresenta médias anuais de poluentes, mas não informa os picos horários registrados. Por que os picos também podem ser importantes?",
    alternativas: [
      "As médias anuais não possuem qualquer utilidade.",
      "Exposições elevadas em curtos períodos podem representar riscos que uma média anual não revela.",
      "Picos de poluição nunca afetam a saúde.",
      "A concentração de poluentes não varia ao longo do dia.",
      "Os picos demonstram necessariamente que os dados foram inventados."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "Médias resumem o comportamento geral, mas podem ocultar episódios de concentração elevada. Dependendo do poluente e da exposição, esses picos podem ser relevantes para a saúde."
  },
  {
    id: "q281",
    enunciado: "Uma fábrica precisa de 15 minutos para produzir 20 unidades de um item. Mantido o ritmo constante, quanto tempo será necessário para produzir 180 unidades?",
    alternativas: [
      "90 minutos.",
      "120 minutos.",
      "135 minutos.",
      "150 minutos.",
      "180 minutos."
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "O tempo por unidade é 15/20 = 0,75 minuto. Para 180 unidades, são necessários 180 × 0,75 = 135 minutos."
  },
  {
    id: "q282",
    enunciado: "Na frase \"Apenas os candidatos que apresentaram a documentação completa puderam prosseguir\", a oração introduzida por \"que\" é restritiva porque",
    alternativas: [
      "apresenta uma explicação adicional sobre todos os candidatos.",
      "delimita o grupo de candidatos autorizado a prosseguir.",
      "indica uma causa sem relação com o substantivo.",
      "substitui o verbo principal da oração.",
      "expressa uma condição impossível de ocorrer."
    ],
    correta: 1,
    materia: "Língua Portuguesa",
    explicacao: "A oração adjetiva restritiva identifica quais candidatos puderam prosseguir: aqueles que apresentaram a documentação completa."
  },
  {
    id: "q283",
    enunciado: "Read the text: \"A company reports that its new packaging uses 30% less plastic than the previous version. It does not provide information about transport, production energy or disposal.\" What is the most appropriate interpretation?",
    alternativas: [
      "The packaging is guaranteed to have the lowest environmental impact in every category.",
      "The report proves that plastic has no environmental impact.",
      "The new package is necessarily cheaper to produce.",
      "The reduction in plastic is relevant, but a broader environmental assessment would require additional information.",
      "The reported reduction must be false because other data are missing."
    ],
    correta: 3,
    materia: "Língua Inglesa",
    explicacao: "A redução de plástico é uma informação útil, mas não permite concluir, sozinha, qual é o impacto ambiental total do produto ao longo de seu ciclo de vida."
  },
  {
    id: "q284",
    enunciado: "Um resistor dissipa 100 W quando ligado a uma tensão constante de 20 V. Qual é sua resistência elétrica, supondo comportamento ôhmico?",
    alternativas: [
      "2 Ω",
      "4 Ω",
      "5 Ω",
      "10 Ω",
      "20 Ω"
    ],
    correta: 1,
    materia: "Física",
    explicacao: "Usando P = U²/R, temos R = 20²/100 = 400/100 = 4 Ω."
  },
  {
    id: "q285",
    enunciado: "Uma moeda honesta é lançada três vezes. Qual é a probabilidade de obter três resultados iguais, isto é, três caras ou três coroas?",
    alternativas: [
      "1/8",
      "1/4",
      "3/8",
      "1/2",
      "3/4"
    ],
    correta: 1,
    materia: "Lógica",
    explicacao: "Existem oito sequências equiprováveis de três lançamentos. Apenas cara-cara-cara e coroa-coroa-coroa têm todos os resultados iguais. A probabilidade é 2/8 = 1/4."
  },
  {
    id: "q286",
    enunciado: "Uma solução contém 0,5 mol de soluto em volume final de 2 L. Qual é sua concentração em quantidade de matéria?",
    alternativas: [
      "0,1 mol/L",
      "0,25 mol/L",
      "0,5 mol/L",
      "1 mol/L",
      "4 mol/L"
    ],
    correta: 1,
    materia: "Química",
    explicacao: "A concentração molar é a quantidade de matéria dividida pelo volume em litros: 0,5/2 = 0,25 mol/L."
  },
  {
    id: "q287",
    enunciado: "O desenvolvimento da imprensa de tipos móveis na Europa do século XV contribuiu para mudanças na circulação de conhecimentos. Uma consequência histórica foi",
    alternativas: [
      "a eliminação imediata do analfabetismo.",
      "a interrupção da produção de livros.",
      "a proibição da circulação de ideias religiosas e científicas.",
      "a concentração de toda a produção escrita em manuscritos exclusivos.",
      "a ampliação potencial da reprodução e circulação de textos."
    ],
    correta: 4,
    materia: "História",
    explicacao: "A imprensa permitiu reproduzir textos em maior escala e contribuiu para ampliar sua circulação, embora o acesso continuasse condicionado por fatores econômicos, políticos e educacionais."
  },
  {
    id: "q288",
    enunciado: "Uma espécie de ave se alimenta de frutos e dispersa sementes a longas distâncias. A redução dessa população pode afetar a vegetação local porque",
    alternativas: [
      "a dispersão de sementes pode diminuir, dificultando a regeneração de algumas plantas.",
      "todas as sementes deixam de germinar imediatamente.",
      "a fotossíntese passa a ocorrer exclusivamente em animais.",
      "os frutos deixam de conter qualquer nutriente.",
      "a reprodução das plantas passa a depender exclusivamente de fungos."
    ],
    correta: 0,
    materia: "Biologia",
    explicacao: "A dispersão por animais transporta sementes para locais diferentes da planta-mãe. A redução dos dispersores pode dificultar a regeneração e alterar a distribuição de certas espécies vegetais."
  },
  {
    id: "q289",
    enunciado: "Uma rede de cidades compartilha serviços de saúde, universidades, comércio e transporte. Essa integração regional pode favorecer",
    alternativas: [
      "a eliminação automática das diferenças econômicas entre todos os municípios.",
      "o isolamento das cidades e a interrupção de fluxos populacionais.",
      "a circulação de pessoas, bens e serviços e a especialização de funções urbanas.",
      "a ausência de dependência entre os centros urbanos.",
      "a impossibilidade de cooperação administrativa."
    ],
    correta: 2,
    materia: "Geografia",
    explicacao: "A integração regional conecta cidades por fluxos de pessoas, mercadorias e serviços. Isso pode ampliar oportunidades, embora os benefícios dependam da infraestrutura e das desigualdades existentes."
  },
  {
    id: "q290",
    enunciado: "Uma pesquisa de opinião entrevista apenas usuários de uma plataforma digital para estimar a preferência de toda a população por determinado serviço. Qual problema metodológico pode ocorrer?",
    alternativas: [
      "A amostra é necessariamente grande demais.",
      "A pesquisa não pode registrar nenhuma resposta válida.",
      "O uso de questionários elimina qualquer possibilidade de viés.",
      "A amostra pode não representar pessoas que não utilizam a plataforma.",
      "O resultado será obrigatoriamente idêntico ao de um censo."
    ],
    correta: 3,
    materia: "Atualidades",
    explicacao: "Entrevistar apenas usuários da plataforma pode produzir viés de seleção, pois pessoas que não a utilizam podem ter características e preferências diferentes."
  },
  {
    id: "q291",
    enunciado: "Uma função afim é definida por f(x) = 5x + 12. Qual é a taxa de variação da função?",
    alternativas: [
      "5",
      "12",
      "17",
      "5x",
      "12x"
    ],
    correta: 0,
    materia: "Matemática",
    explicacao: "Na função afim f(x) = ax + b, o coeficiente a representa a taxa de variação constante. Neste caso, a = 5."
  },
  {
    id: "q292",
    enunciado: "Em \"A pesquisadora afirmou que os dados seriam publicados depois que a análise terminasse\", o trecho \"que os dados seriam publicados\" exerce função de",
    alternativas: [
      "oração subordinada substantiva objetiva direta.",
      "oração subordinada adverbial temporal.",
      "oração coordenada adversativa.",
      "oração subordinada adjetiva restritiva.",
      "oração principal de um período simples."
    ],
    correta: 0,
    materia: "Língua Portuguesa",
    explicacao: "O trecho completa o sentido do verbo \"afirmou\", funcionando como objeto direto em forma de oração subordinada substantiva."
  },
  {
    id: "q293",
    enunciado: "Read the text: \"The hospital introduced an appointment reminder service. Missed appointments declined during the following months, although administrators note that other changes were implemented at the same time.\" Which conclusion is most cautious?",
    alternativas: [
      "The reminder service was certainly the only cause of the decline.",
      "The reminders had no possible relationship with attendance.",
      "The hospital's data cannot be analyzed.",
      "All other changes must have been irrelevant.",
      "The decline occurred after the introduction, but additional factors may also have contributed."
    ],
    correta: 4,
    materia: "Língua Inglesa",
    explicacao: "A redução ocorreu após a introdução do serviço, mas outras mudanças simultâneas impedem atribuir o resultado exclusivamente aos lembretes sem análise adicional."
  },
  {
    id: "q294",
    enunciado: "Um carro de massa 1.000 kg aumenta sua velocidade de 10 m/s para 20 m/s. Qual é a variação de sua energia cinética?",
    alternativas: [
      "50 000 J",
      "100 000 J",
      "150 000 J",
      "200 000 J",
      "300 000 J"
    ],
    correta: 2,
    materia: "Física",
    explicacao: "A variação é ΔEc = m(v₂² − v₁²)/2 = 1.000(400 − 100)/2 = 150.000 J."
  },
  {
    id: "q295",
    enunciado: "Em uma turma, 40% dos estudantes participam de um clube de ciências. Se 15 estudantes participam desse clube, quantos estudantes há na turma, supondo que a porcentagem seja exata?",
    alternativas: [
      "24",
      "30",
      "35",
      "37,5",
      "40"
    ],
    correta: 1,
    materia: "Lógica",
    explicacao: "Se 15 corresponde a 40% do total N, então 0,4N = 15. Logo, N = 15/0,4 = 37,5. Como a quantidade de estudantes deve ser inteira, os dados não são compatíveis com uma porcentagem exata."
  },
  {
    id: "q296",
    enunciado: "Uma amostra de água apresenta sais de cálcio e magnésio dissolvidos, dificultando a formação de espuma com sabão. Essa característica está associada à",
    alternativas: [
      "água destilada.",
      "água dura.",
      "água completamente isenta de íons.",
      "água formada exclusivamente por moléculas de óleo.",
      "água com ausência total de minerais."
    ],
    correta: 1,
    materia: "Química",
    explicacao: "A dureza da água está relacionada principalmente à presença de íons cálcio e magnésio, que podem reagir com componentes do sabão e dificultar a formação de espuma."
  },
  {
    id: "q297",
    enunciado: "A urbanização acelerada e a expansão de atividades econômicas podem intensificar conflitos pelo uso da água. Uma estratégia de gestão sustentável deve",
    alternativas: [
      "considerar disponibilidade, qualidade, demanda e participação dos diferentes usuários.",
      "priorizar o consumo ilimitado de um único setor.",
      "desconsiderar os períodos de estiagem.",
      "impedir o monitoramento dos mananciais.",
      "substituir qualquer planejamento por decisões emergenciais permanentes."
    ],
    correta: 0,
    materia: "Geografia",
    explicacao: "A gestão sustentável considera a disponibilidade e a qualidade da água, as necessidades dos diferentes setores e os mecanismos de participação e planejamento."
  },
  {
    id: "q298",
    enunciado: "Uma empresa anuncia que compensará parte de suas emissões de carbono por meio de créditos ambientais. Para avaliar a efetividade da iniciativa, é importante verificar",
    alternativas: [
      "somente a quantidade de anúncios publicitários sobre o projeto.",
      "se a compensação foi anunciada por uma celebridade.",
      "se as reduções são mensuráveis, verificáveis e adicionais, além de considerar a permanência e os riscos de dupla contagem.",
      "se o projeto evita divulgar qualquer documentação.",
      "se a empresa deixou de medir suas próprias emissões."
    ],
    correta: 2,
    materia: "Atualidades",
    explicacao: "A qualidade de créditos de carbono depende de critérios como adicionalidade, mensuração, verificação, permanência e prevenção de dupla contagem. A compensação também não substitui a importância de reduzir emissões próprias."
  },
  {
    id: "q299",
    enunciado: "Uma função quadrática descreve a altura de um objeto lançado verticalmente, em metros, por h(t) = -5t² + 20t + 1, em que t é o tempo em segundos. Em qual instante o objeto atinge a altura máxima?",
    alternativas: [
      "1 s",
      "2 s",
      "3 s",
      "4 s",
      "5 s"
    ],
    correta: 1,
    materia: "Matemática",
    explicacao: "O instante do vértice é t = -b/(2a). Logo, t = -20/[2(-5)] = 2 s."
  },
  {
    id: "q300",
    enunciado: "Um conto apresenta uma personagem que, ao recordar a infância, mistura lembranças reais, impressões subjetivas e lacunas de memória. Qual interpretação literária é mais adequada?",
    alternativas: [
      "A memória da personagem deve ser considerada um registro histórico infalível.",
      "A narrativa não pode explorar diferentes percepções do passado.",
      "As lacunas de memória impedem qualquer construção de sentido.",
      "A representação subjetiva da memória pode influenciar a confiabilidade do relato e a interpretação dos acontecimentos.",
      "O texto necessariamente pertence ao gênero científico."
    ],
    correta: 3,
    materia: "Literatura",
    explicacao: "A memória subjetiva pode selecionar, reinterpretar ou omitir acontecimentos. Esse recurso permite explorar a perspectiva da personagem e torna relevante distinguir lembrança, percepção e fato narrado."
  },
]