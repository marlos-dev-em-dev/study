const BANCO_PADRAO = [
  {
    id: "q001",
    enunciado: "Uma cooperativa agrícola substituiu parte dos fertilizantes nitrogenados por uma técnica que utiliza leguminosas associadas a bactérias do gênero Rhizobium. Qual é o principal benefício biológico dessa associação?",
    alternativas: [
      "Realizar a desnitrificação, convertendo compostos nitrogenados do solo em gás nitrogênio liberado à atmosfera.",
      "Converter o nitrogênio atmosférico em compostos nitrogenados assimiláveis pelas plantas.",
      "Acelerar a decomposição da matéria orgânica, liberando nitrogênio diretamente para as raízes.",
      "Oxidar amônia do solo em nitratos, que são absorvidos ativamente pelas raízes da leguminosa.",
      "Sintetizar carboidratos a partir do nitrogênio molecular, transferindo-os às células da planta hospedeira."
    ],
    correta: 1,
    materia: "Biologia",
    explicacao: "As bactérias do gênero Rhizobium realizam a fixação biológica do nitrogênio, convertendo N₂ atmosférico em amônia e outros compostos assimiláveis pela planta. A desnitrificação e a nitrificação são processos distintos, realizados por outros grupos de microrganismos."
  },
  {
    id: "q002",
    enunciado: "Uma empresa de entregas cobra uma taxa fixa de R$ 8,00 mais R$ 2,50 por quilômetro percorrido. Se o cliente pagou R$ 33,00, qual foi a distância percorrida?",
    alternativas: [
      "8 km",
      "9 km",
      "10 km",
      "11 km",
      "13 km"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "O valor variável foi 33 − 8 = 25 reais. Dividindo 25 por 2,50, obtém-se 10 km. Quem esquece de subtrair a taxa fixa chega a 13,2 km; quem usa a taxa errada pode chegar a outros valores."
  },
  {
    id: "q003",
    enunciado: "Leia o trecho: \"A prefeitura anunciou a ampliação das ciclovias. A medida, segundo o relatório, pretende reduzir o número de automóveis nas vias centrais. Essa iniciativa também poderá diminuir a poluição atmosférica.\" A expressão \"Essa iniciativa\" estabelece um mecanismo de coesão textual porque",
    alternativas: [
      "introduz um novo tópico sem relação com as frases anteriores.",
      "retoma a ampliação das ciclovias, evitando a repetição integral da informação.",
      "indica que o relatório foi a única fonte consultada pela prefeitura.",
      "estabelece uma relação de causa entre a poluição e a ampliação das vias para automóveis.",
      "marca uma oposição entre a medida anunciada e os dados apresentados no relatório."
    ],
    correta: 1,
    materia: "Língua Portuguesa",
    explicacao: "A expressão demonstrativa \"Essa iniciativa\" retoma a ampliação das ciclovias, estabelecendo uma retomada referencial (coesão nominal) que conecta as frases e evita repetição desnecessária."
  },
  {
    id: "q004",
    enunciado: "A mixture contains sand, salt and water. A student wants to recover the dry sand and the salt separately. Which procedure is appropriate?",
    alternativas: [
      "Filter the mixture, then evaporate the water from the filtrate.",
      "Evaporate the entire mixture first, then use a sieve to separate the remaining solids.",
      "Add a solvent that dissolves the sand, then filter to recover the salt crystals.",
      "Heat the mixture to boiling and use decantation to separate the sand from the salt solution.",
      "Pass the mixture through a chromatography column to collect sand and salt in separate fractions."
    ],
    correta: 0,
    materia: "Língua Inglesa",
    explicacao: "The sand is insoluble in water, so filtration separates it from the salt solution. Evaporation then removes the water from the filtrate, leaving the salt behind. Decantation alone would not fully separate sand from the solution, and the other methods are inappropriate for this mixture."
  },
  {
    id: "q005",
    enunciado: "Em uma narrativa, o narrador descreve um personagem que afirma defender a honestidade, mas que, ao encontrar uma carteira, fica com o dinheiro e inventa uma justificativa para si mesmo. O contraste entre o discurso e a ação do personagem contribui principalmente para",
    alternativas: [
      "reforçar a coerência entre os valores declarados e o comportamento do personagem.",
      "caracterizar uma oposição entre os valores declarados e o comportamento efetivo.",
      "identificar o narrador como onisciente, pois conhece os pensamentos do personagem.",
      "classificar a narrativa como texto de opinião, dada a presença de juízo de valor.",
      "demonstrar que o desfecho da história depende exclusivamente do diálogo entre personagens."
    ],
    correta: 1,
    materia: "Literatura",
    explicacao: "O contraste entre aquilo que o personagem afirma e aquilo que faz evidencia uma contradição de caráter, podendo produzir ironia e crítica social. Esse recurso é independente da classificação do narrador ou do gênero textual."
  },
  {
    id: "q006",
    enunciado: "Em uma fábrica, uma máquina realiza um trabalho de 6 000 J em 20 segundos, mantendo potência média constante. Qual é sua potência média?",
    alternativas: [
      "120 W",
      "200 W",
      "300 W",
      "450 W",
      "600 W"
    ],
    correta: 2,
    materia: "Física",
    explicacao: "A potência média é a razão entre o trabalho e o tempo: P = 6 000/20 = 300 W. Quem multiplica em vez de dividir obtém 120 000 W; quem usa 6 000/450 confunde grandezas."
  },
  {
    id: "q007",
    enunciado: "Uma senha é formada por três algarismos distintos, escolhidos entre 1, 2, 3, 4 e 5. Quantas senhas diferentes podem ser formadas, considerando que a ordem dos algarismos importa?",
    alternativas: [
      "15",
      "30",
      "45",
      "60",
      "125"
    ],
    correta: 3,
    materia: "Lógica",
    explicacao: "Há 5 opções para a primeira posição, 4 para a segunda e 3 para a terceira. Pelo princípio multiplicativo, 5 × 4 × 3 = 60. Quem não considera a ordem calcula 5C3 = 10; quem permite repetição obtém 125."
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
    explicacao: "Pela lei de conservação da massa, a massa inicial é igual à soma das massas dos produtos. Logo, a massa do gás é 100 − 56 = 44 g. Quem confunde a massa do gás com a do resíduo obtém 56 g; quem soma obtém 156 g."
  },
  {
    id: "q009",
    enunciado: "Durante a Revolução Industrial inglesa, a mecanização da produção ampliou a capacidade das fábricas e transformou as relações de trabalho. Uma consequência social importante desse processo foi",
    alternativas: [
      "a estabilização imediata da renda entre trabalhadores rurais e urbanos.",
      "a redução da população urbana em razão da mecanização do campo.",
      "a expansão do trabalho assalariado e o crescimento das cidades industriais.",
      "a substituição do comércio internacional pela produção artesanal doméstica.",
      "o desaparecimento dos conflitos entre trabalhadores e proprietários de fábricas."
    ],
    correta: 2,
    materia: "História",
    explicacao: "A industrialização ampliou o trabalho assalariado e atraiu população para os centros urbanos. As novas relações de produção também intensificaram conflitos trabalhistas e desigualdades sociais, em vez de eliminá-los."
  },
  {
    id: "q010",
    enunciado: "Uma cidade impermeabilizou extensas áreas para construir estacionamentos e avenidas. Após chuvas intensas, passou a registrar alagamentos mais frequentes. Qual medida atua diretamente sobre uma das causas desse problema?",
    alternativas: [
      "Ampliar a cobertura asfáltica dos terrenos ainda permeáveis.",
      "Canalizar todo o escoamento para um único ponto de drenagem.",
      "Substituir as áreas verdes por novas vias de tráfego rápido.",
      "Implantar superfícies permeáveis e ampliar áreas de infiltração da água.",
      "Aumentar a quantidade de concreto nos leitos dos rios sem avaliar a vazão."
    ],
    correta: 3,
    materia: "Geografia",
    explicacao: "A impermeabilização reduz a infiltração e aumenta o escoamento superficial, elevando o risco de alagamentos. Superfícies permeáveis, áreas verdes e estruturas de retenção ajudam a infiltrar ou armazenar parte da água da chuva."
  },
  {
    id: "q011",
    enunciado: "Uma pesquisa sobre mobilidade urbana identificou que moradores de bairros periféricos gastam, em média, mais tempo no transporte público do que moradores de regiões centrais. Qual interpretação relaciona adequadamente esse resultado à organização do espaço urbano?",
    alternativas: [
      "A distribuição dos serviços e dos empregos pode produzir desigualdades no acesso à cidade.",
      "A distância percorrida é determinada exclusivamente pelas preferências individuais de cada morador.",
      "O tempo de deslocamento é resultado apenas da frota disponível, independentemente da localização.",
      "A existência de transporte público em todas as zonas elimina a segregação socioespacial.",
      "As diferenças de deslocamento comprovam que a população periférica tem jornadas de trabalho menores."
    ],
    correta: 0,
    materia: "Atualidades",
    explicacao: "A distribuição desigual de empregos, serviços e infraestrutura influencia os deslocamentos cotidianos. O tempo de viagem pode refletir desigualdades socioespaciais e diferenças na oferta de transporte entre regiões."
  },
  {
    id: "q012",
    enunciado: "Uma cultura de bactérias dobra sua população a cada 3 horas. Inicialmente, há 200 bactérias. Mantidas as condições de crescimento, quantas haverá após 9 horas?",
    alternativas: [
      "400",
      "800",
      "1 200",
      "1 400",
      "1 600"
    ],
    correta: 4,
    materia: "Matemática",
    explicacao: "Em 9 horas ocorrem três períodos de duplicação. A população será 200 × 2³ = 200 × 8 = 1 600 bactérias. Quem conta apenas uma duplicação obtém 400; quem conta duas obtém 800."
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
    explicacao: "\"Embora\" introduz uma ideia concessiva: o alto custo inicial é reconhecido, mas não impede a possibilidade de economia futura. Não se trata de causa (pois a segunda oração não explica a primeira) nem de conclusão."
  },
  {
    id: "q014",
    enunciado: "Read the text: \"The city introduced a repair program for old bicycles. Residents can bring damaged bikes to community workshops, where volunteers help fix them. The program aims to reduce waste and make transportation more affordable.\" What is the main purpose of the program?",
    alternativas: [
      "To encourage residents to replace old bicycles with new models.",
      "To create paid jobs for professional mechanics in the city.",
      "To reduce waste and make bicycle use more accessible.",
      "To limit the number of bicycles circulating in the city centre.",
      "To collect bicycles for export to other countries."
    ],
    correta: 2,
    materia: "Língua Inglesa",
    explicacao: "The text explicitly states two goals: reducing waste and making transportation more affordable. Repairing existing bicycles supports both objectives. The text does not mention creating jobs or exporting bicycles."
  },
  {
    id: "q015",
    enunciado: "Em uma pilha eletroquímica em funcionamento espontâneo, ocorre uma reação de oxirredução que transforma energia química em energia elétrica. Nesse dispositivo, a oxidação ocorre",
    alternativas: [
      "no cátodo, onde os elétrons são consumidos pela redução.",
      "no ânodo, onde há perda de elétrons pela espécie oxidada.",
      "no eletrólito, que funciona como doador de elétrons aos eletrodos.",
      "no cátodo, pois todos os processos de transferência de elétrons ocorrem nesse eletrodo.",
      "no circuito externo, onde os elétrons se oxidam ao atravessar o fio condutor."
    ],
    correta: 1,
    materia: "Química",
    explicacao: "Oxidação é a perda de elétrons e ocorre no ânodo da pilha. Os elétrons liberados percorrem o circuito externo em direção ao cátodo, onde ocorre a redução. O eletrólito permite a migração iônica, mas não é o sítio da oxidação."
  },
  {
    id: "q016",
    enunciado: "Uma pessoa lê um romance no qual os acontecimentos são apresentados por meio de cartas escritas pelos próprios personagens. Esse recurso narrativo tende a permitir que o leitor",
    alternativas: [
      "identifique um narrador impessoal que apresenta os fatos de forma neutra e verificada.",
      "conheça os acontecimentos por perspectivas pessoais e limitadas dos remetentes.",
      "elimine qualquer ambiguidade sobre os eventos narrados, pois todos confirmam a mesma versão.",
      "perceba que a história foi necessariamente escrita por um historiador profissional.",
      "classifique o romance como texto dramático, já que há vozes de múltiplos personagens."
    ],
    correta: 1,
    materia: "Literatura",
    explicacao: "A narrativa epistolar organiza os acontecimentos por meio de cartas. Como cada remetente apresenta sua perspectiva pessoal, as informações podem ser parciais, subjetivas e até contraditórias entre si."
  },
  {
    id: "q017",
    enunciado: "Um automóvel percorre 150 km em 2 horas e 30 minutos, mantendo velocidade escalar média constante durante todo o percurso. Qual é a velocidade escalar média em km/h?",
    alternativas: [
      "50",
      "55",
      "60",
      "65",
      "75"
    ],
    correta: 2,
    materia: "Física",
    explicacao: "Duas horas e 30 minutos equivalem a 2,5 horas. A velocidade média é 150/2,5 = 60 km/h. Quem usa 2,30 h (em vez de 2,5) obtém cerca de 65 km/h; quem divide por 3 h obtém 50 km/h."
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
    explicacao: "Há 10 cartões no total e 7 não são vermelhos: quatro azuis e três verdes. A probabilidade é 7/10. Quem calcula a probabilidade de ser vermelho obtém 3/10; quem conta apenas os azuis obtém 4/10."
  },
  {
    id: "q019",
    enunciado: "Uma solução contém 20 g de sal dissolvidos em água suficiente para completar 500 mL de solução. Qual é a concentração comum dessa solução em g/L?",
    alternativas: [
      "20",
      "30",
      "40",
      "50",
      "60"
    ],
    correta: 2,
    materia: "Química",
    explicacao: "O volume é 0,5 L. A concentração comum é a massa do soluto dividida pelo volume da solução: 20/0,5 = 40 g/L. Quem usa 500 mL como 500 L obtém 0,04; quem multiplica obtém 10 000."
  },
  {
    id: "q020",
    enunciado: "Em uma região, a expansão de uma monocultura voltada à exportação substituiu parte da vegetação nativa. Além da alteração da paisagem, qual consequência ambiental pode decorrer desse processo?",
    alternativas: [
      "Aumento da diversidade genética das espécies nativas remanescentes.",
      "Redução do risco de erosão pelo aumento da cobertura vegetal uniforme.",
      "Fragmentação de habitats e perda de biodiversidade.",
      "Estabilização dos ciclos hidrológicos independentemente da escala do desmatamento.",
      "Aumento da capacidade de absorção de água pelo solo em qualquer condição."
    ],
    correta: 2,
    materia: "Geografia",
    explicacao: "A substituição da vegetação nativa por monoculturas pode reduzir a variedade de habitats, fragmentar ecossistemas e favorecer a perda de espécies. O tipo de cultivo também influencia a erosão e o ciclo hidrológico."
  },
  {
    id: "q021",
    enunciado: "Uma campanha de vacinação apresenta dados que indicam redução da incidência de uma doença após a ampliação da cobertura vacinal. Para avaliar adequadamente a relação entre vacinação e redução da doença, é importante",
    alternativas: [
      "considerar apenas o número de pessoas vacinadas, sem observar a ocorrência da doença.",
      "comparar os dados ao longo do tempo e considerar outros fatores que possam influenciar a incidência.",
      "concluir que a vacina causou a redução apenas porque os dois eventos ocorreram na mesma época.",
      "desconsiderar a população total, pois o número absoluto de casos é suficiente para a análise.",
      "substituir dados epidemiológicos por relatos individuais de profissionais de saúde."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "A associação temporal é uma evidência relevante, mas não basta, isoladamente, para demonstrar causalidade. Comparações temporais, taxas populacionais e possíveis fatores de confusão fortalecem a análise epidemiológica."
  },
  {
    id: "q022",
    enunciado: "Um terreno retangular tem perímetro de 50 m. Seu comprimento mede 5 m a mais que sua largura. Qual é sua área?",
    alternativas: [
      "125 m²",
      "140 m²",
      "150 m²",
      "160 m²",
      "175 m²"
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
    explicacao: "Na construção \"devem existir alternativas\", o verbo existir concorda com o sujeito plural \"alternativas\", e o verbo auxiliar também fica no plural. Em sentido de tempo decorrido, fazer é impessoal; haver com sentido de existir também é impessoal; existir pode ser impessoal em certos contextos; acontecer exige concordância com o sujeito."
  },
  {
    id: "q024",
    enunciado: "Read the sentence: \"Although the device is small, it can process large amounts of data.\" The word \"Although\" indicates",
    alternativas: [
      "a cause-and-effect relationship.",
      "a contrast or concession.",
      "a sequence of events.",
      "a condition that must be fulfilled.",
      "a purpose or intention."
    ],
    correta: 1,
    materia: "Língua Inglesa",
    explicacao: "\"Although\" introduces a concession: the device is small, but its processing capacity is large. The two ideas contrast with an expected limitation. It does not express cause, sequence, condition or purpose."
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
    explicacao: "Pela lei de Avogadro, para gases nas mesmas condições de pressão e temperatura, o volume é diretamente proporcional à quantidade de matéria. A razão é 10/4 = 2,5."
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
    explicacao: "Como os quatro módulos precisam funcionar e seus resultados são independentes, multiplicam-se as probabilidades: 0,9⁴ = 0,6561. Quem calcula 0,9² obtém 0,81; quem soma obtém valores fora do intervalo [0, 1]."
  },
  {
    id: "q027",
    enunciado: "Na formação de uma ligação iônica entre um metal e um ametal, a estabilidade do composto está associada principalmente",
    alternativas: [
      "ao compartilhamento simétrico de pares de elétrons entre os átomos envolvidos.",
      "à formação de íons de cargas opostas que se atraem eletrostaticamente.",
      "à deslocalização de elétrons livres em uma rede metálica contínua.",
      "à formação de ligações de hidrogênio entre moléculas do composto.",
      "à igualdade de eletronegatividade entre os átomos que compõem a substância."
    ],
    correta: 1,
    materia: "Química",
    explicacao: "Na ligação iônica ocorre transferência de elétrons, formando cátions e ânions. A atração eletrostática entre esses íons mantém o composto unido. O compartilhamento de elétrons caracteriza a ligação covalente; a deslocalização é típica da metálica."
  },
  {
    id: "q028",
    enunciado: "Um historiador compara documentos produzidos por grupos políticos rivais durante o mesmo conflito. Qual procedimento é mais adequado para analisar essas fontes?",
    alternativas: [
      "Adotar o documento mais antigo como referência única e descartar os demais.",
      "Considerar que todos os documentos possuem necessariamente a mesma intenção.",
      "Ignorar o contexto de produção e analisar apenas o conteúdo literal do texto.",
      "Examinar autoria, finalidade, contexto e possíveis interesses presentes em cada documento.",
      "Escolher apenas os documentos que confirmam a interpretação inicial do pesquisador."
    ],
    correta: 3,
    materia: "História",
    explicacao: "A análise histórica crítica considera autoria, contexto, finalidade e interesses. Fontes diferentes podem registrar experiências e interpretações distintas do mesmo acontecimento, e a data sozinha não determina a confiabilidade."
  },
  {
    id: "q029",
    enunciado: "Em um ecossistema, a população de predadores diminui intensamente. Se esses predadores controlavam a população de herbívoros, qual consequência pode ocorrer inicialmente, supondo que os demais fatores permaneçam semelhantes?",
    alternativas: [
      "Redução imediata da população de herbívoros por falta de alimento.",
      "Aumento da população de herbívoros e maior pressão sobre os produtores.",
      "Desaparecimento de todos os produtores em questão de dias.",
      "Interrupção completa da fotossíntese no ecossistema.",
      "Transformação dos herbívoros em predadores de outros níveis tróficos."
    ],
    correta: 1,
    materia: "Biologia",
    explicacao: "A redução da predação pode permitir o aumento dos herbívoros, elevando o consumo de plantas. A intensidade e a duração dessa resposta dependem dos recursos disponíveis e de outras interações ecológicas."
  },
  {
    id: "q030",
    enunciado: "Uma cidade registra aumento da temperatura média em bairros com pouca arborização e grande concentração de concreto e asfalto. Esse fenômeno é compatível com",
    alternativas: [
      "a formação de ilhas de calor urbanas.",
      "o aumento uniforme da umidade relativa do ar em toda a região.",
      "a redução da absorção de radiação solar pelas superfícies urbanas.",
      "a interrupção da circulação atmosférica regional.",
      "o desaparecimento das diferenças térmicas entre áreas urbanas e rurais."
    ],
    correta: 0,
    materia: "Geografia",
    explicacao: "Superfícies urbanas impermeáveis podem absorver e reter calor, enquanto a escassez de vegetação reduz o sombreamento e o resfriamento por evapotranspiração. Isso favorece a formação de ilhas de calor urbanas."
  },
  {
    id: "q031",
    enunciado: "Um aplicativo informa que a inflação anual de um país foi de 6%. Um produto que custava R$ 200,00 no início do período teve seu preço reajustado exatamente por essa taxa. Qual é o novo preço?",
    alternativas: [
      "R$ 206,00",
      "R$ 210,00",
      "R$ 212,00",
      "R$ 216,00",
      "R$ 220,00"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "Seis por cento de 200 é 12 reais. Somando o reajuste ao preço inicial, obtém-se R$ 212,00. Quem aplica 6% como 0,60 obtém R$ 200,60; quem confunde percentual com fator erra o resultado."
  },
  {
    id: "q032",
    enunciado: "Em \"O relatório, que foi publicado ontem, apresenta os resultados do experimento\", a oração \"que foi publicado ontem\" é classificada como",
    alternativas: [
      "oração subordinada adverbial causal.",
      "oração coordenada sindética conclusiva.",
      "oração subordinada substantiva objetiva direta.",
      "oração subordinada adjetiva explicativa.",
      "oração subordinada adverbial concessiva."
    ],
    correta: 3,
    materia: "Língua Portuguesa",
    explicacao: "A oração introduzida por \"que\" caracteriza o substantivo \"relatório\" e aparece isolada por vírgulas, o que marca seu caráter explicativo (não restritivo). Trata-se de uma oração subordinada adjetiva explicativa."
  },
  {
    id: "q033",
    enunciado: "Read the text: \"Maya used to take the bus to work. Since the new bike lanes opened, she has cycled three days a week. She says the trip is now cheaper and more predictable.\" What can be inferred from the text?",
    alternativas: [
      "Maya has completely stopped using any form of public transportation.",
      "The new bike lanes have eliminated all traffic problems in the city.",
      "Maya now cycles regularly and perceives practical benefits.",
      "Maya's employer requires all employees to cycle to work.",
      "Cycling is always faster than the bus for every commuter."
    ],
    correta: 2,
    materia: "Língua Inglesa",
    explicacao: "O texto informa que Maya pedala três dias por semana e considera a viagem mais barata e previsível. Não há evidência de que ela tenha abandonado completamente o ônibus nem de que isso valha para todos os trajetos."
  },
  {
    id: "q034",
    enunciado: "Uma amostra de 80 g de material radioativo tem meia-vida de 6 horas. Desconsiderando a entrada de novo material, qual massa restará após 18 horas?",
    alternativas: [
      "10 g",
      "15 g",
      "20 g",
      "26,7 g",
      "40 g"
    ],
    correta: 0,
    materia: "Física",
    explicacao: "Em 18 horas transcorreram três meias-vidas. A massa restante é 80 × (1/2)³ = 80 × 1/8 = 10 g. Quem considera apenas uma meia-vida obtém 40 g; quem subtrai linearmente 40 g obtém 20 g."
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
    explicacao: "Dois por cento de 500 é 0,02 × 500 = 10 peças. Quem calcula 2% de 500 como 2 × 500 obtém 1 000; quem usa 5% obtém 25."
  },
  {
    id: "q036",
    enunciado: "Uma solução aquosa apresenta pH igual a 3, enquanto outra apresenta pH igual a 5. Considerando a definição de pH, a concentração de íons H⁺ da primeira solução é",
    alternativas: [
      "duas vezes a da segunda.",
      "dez vezes a da segunda.",
      "cem vezes a da segunda.",
      "mil vezes a da segunda.",
      "cinquenta vezes maior que a da segunda."
    ],
    correta: 2,
    materia: "Química",
    explicacao: "Cada unidade de pH corresponde a um fator dez na concentração de H⁺. A diferença de duas unidades (5 − 3 = 2) implica 10² = 100 vezes maior concentração na solução de pH 3."
  },
  {
    id: "q037",
    enunciado: "Na análise de um poema, a repetição de sons consonantais semelhantes em palavras próximas pode produzir um efeito expressivo de sonoridade. Esse recurso é denominado",
    alternativas: [
      "metonímia.",
      "hipérbole.",
      "aliteração.",
      "assonância.",
      "onomatopeia."
    ],
    correta: 2,
    materia: "Literatura",
    explicacao: "A aliteração consiste na repetição expressiva de sons consonantais. A assonância é a repetição de vogais; a onomatopeia reproduz sons da natureza; metonímia e hipérbole são figuras de pensamento."
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
    explicacao: "No cruzamento Aa × Aa, os genótipos possíveis são AA, Aa, Aa e aa. Apenas aa apresenta o fenótipo recessivo, correspondendo a 1/4 = 25%. Quem confunde genótipo com fenótipo pode pensar em 50% (proporção de heterozigotos)."
  },
  {
    id: "q039",
    enunciado: "Um ônibus parte de uma cidade às 8h e chega ao destino às 11h30, após percorrer 210 km. Qual foi a velocidade escalar média no percurso?",
    alternativas: [
      "55 km/h",
      "60 km/h",
      "65 km/h",
      "70 km/h",
      "75 km/h"
    ],
    correta: 1,
    materia: "Física",
    explicacao: "O intervalo de tempo foi de 3,5 horas. Dividindo 210 km por 3,5 h, obtém-se 60 km/h. Quem usa 3 h obtém 70 km/h; quem usa 4 h obtém 52,5 km/h."
  },
  {
    id: "q040",
    enunciado: "Considere a sequência 4, 9, 14, 19, ... . Mantido o padrão, qual é o décimo termo?",
    alternativas: [
      "44",
      "47",
      "49",
      "51",
      "54"
    ],
    correta: 2,
    materia: "Lógica",
    explicacao: "A sequência é uma progressão aritmética de razão 5 e primeiro termo 4. O décimo termo é 4 + 9 × 5 = 49. Quem conta 10 saltos em vez de 9 obtém 54; quem erra a razão obtém outros valores."
  },
  {
    id: "q041",
    enunciado: "Uma empresa utiliza 3 kg de matéria-prima para fabricar 12 unidades de um produto. Mantida a mesma proporção, quantos quilogramas serão necessários para fabricar 50 unidades?",
    alternativas: [
      "10 kg",
      "12 kg",
      "12,5 kg",
      "13 kg",
      "15 kg"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "Cada unidade utiliza 3/12 = 0,25 kg. Para 50 unidades, são necessários 50 × 0,25 = 12,5 kg. Quem calcula 3/12 × 50 erra a operação; quem usa 3 × 50/12 também chega a 12,5, mas pode errar a conta."
  },
  {
    id: "q042",
    enunciado: "Uma notícia afirma: \"O novo sistema poderá reduzir o consumo de energia, segundo estimativas preliminares.\" A escolha do verbo \"poderá\" indica que a redução",
    alternativas: [
      "é apresentada como possibilidade, não como resultado definitivamente comprovado.",
      "já ocorreu necessariamente em todas as instalações do país.",
      "é negada explicitamente pelo autor da notícia.",
      "foi estabelecida como uma obrigação legal para as empresas.",
      "é uma informação que não tem relação com eventos futuros."
    ],
    correta: 0,
    materia: "Língua Portuguesa",
    explicacao: "O verbo no futuro do presente, combinado ao sentido modal de possibilidade e à expressão \"estimativas preliminares\", expressa uma previsão condicionada. A frase não afirma que a redução já foi comprovada."
  },
  {
    id: "q043",
    enunciado: "Read the message: \"Please submit your report by Friday. If you need more time, contact your supervisor before the deadline.\" What should an employee do if the report will be late?",
    alternativas: [
      "Submit the report after Friday without any prior notice.",
      "Contact the supervisor before Friday.",
      "Wait until the following week to explain the delay.",
      "Ask a colleague to submit a different report instead.",
      "Assume the deadline is flexible and take no action."
    ],
    correta: 1,
    materia: "Língua Inglesa",
    explicacao: "A mensagem orienta explicitamente que quem precisar de mais tempo entre em contato com o supervisor antes do prazo final (Friday). Não menciona flexibilidade automática do prazo."
  },
  {
    id: "q044",
    enunciado: "Um bloco de 4 kg recebe uma força resultante horizontal de 12 N em uma superfície sem atrito. Qual é o módulo de sua aceleração?",
    alternativas: [
      "3 m/s²",
      "4 m/s²",
      "8 m/s²",
      "12 m/s²",
      "48 m/s²"
    ],
    correta: 0,
    materia: "Física",
    explicacao: "Pela segunda lei de Newton, F = ma. Logo, a = 12/4 = 3 m/s². Quem multiplica em vez de dividir obtém 48 m/s²; quem confunde as grandezas obtém outros valores."
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
    explicacao: "A massa de soluto permanece igual a 10 × 2 = 20 g. Com volume final de 5 L, a concentração será 20/5 = 4 g/L. Quem divide 10 por 5 obtém 2 g/L; quem confunde volume inicial com final pode manter 10 g/L."
  },
  {
    id: "q046",
    enunciado: "Uma comunidade ribeirinha depende da pesca para alimentação e renda. A construção de uma barragem altera o fluxo do rio e os locais de reprodução de algumas espécies. Qual análise é mais adequada?",
    alternativas: [
      "A barragem garante aumento da pesca em todas as regiões do rio.",
      "A alteração do regime fluvial pode afetar ecossistemas e atividades econômicas locais.",
      "O regime de vazão do rio não é afetado por barramentos.",
      "A geração de energia compensa automaticamente qualquer impacto socioambiental.",
      "A pesca fluvial depende exclusivamente da temperatura da água."
    ],
    correta: 1,
    materia: "Geografia",
    explicacao: "Barragens podem modificar vazão, transporte de sedimentos e habitats aquáticos, afetando espécies e atividades humanas. A magnitude dos impactos depende do projeto, do local e das medidas de mitigação adotadas."
  },
  {
    id: "q047",
    enunciado: "Um programa público oferece acesso gratuito à internet em bibliotecas e centros comunitários. Além de disponibilizar conexão, uma política eficaz de inclusão digital deve considerar",
    alternativas: [
      "apenas o número de equipamentos adquiridos para cada unidade.",
      "a restrição de acesso a conteúdos educacionais em plataformas digitais.",
      "a capacitação dos usuários e as condições de acessibilidade.",
      "a substituição de todos os serviços presenciais por atendimento automatizado.",
      "a exclusão de pessoas com baixa familiaridade tecnológica dos programas."
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
      "8",
      "12",
      "16",
      "24",
      "32"
    ],
    correta: 2,
    materia: "Lógica",
    explicacao: "Cada uma das quatro posições tem duas opções independentes. Pelo princípio multiplicativo, há 2⁴ = 16 senhas. Quem proíbe o zero inicial obtém 2³ = 8; quem usa 4! obtém 24."
  },
  {
    id: "q050",
    enunciado: "Uma solução tampão ajuda a reduzir variações de pH quando pequenas quantidades de ácido ou base são adicionadas. Essa propriedade é importante em sistemas biológicos porque",
    alternativas: [
      "mantém o pH exatamente igual a 7 em qualquer condição fisiológica.",
      "impede completamente que reações ácido-base ocorram no organismo.",
      "mantém o pH relativamente estável dentro de determinadas condições.",
      "transforma qualquer ácido forte em um composto neutro instantaneamente.",
      "elimina a necessidade de mecanismos de regulação metabólica."
    ],
    correta: 2,
    materia: "Química",
    explicacao: "Soluções tampão contêm espécies capazes de reagir com parte do ácido ou da base adicionados, reduzindo a variação do pH. Sua capacidade é limitada e não mantém obrigatoriamente pH 7, que varia conforme o tecido."
  },
  {
    id: "q051",
    enunciado: "Uma empresa de entregas compara dois planos. No plano A, o custo mensal é de R$ 40,00 mais R$ 3,00 por entrega. No plano B, o custo é de R$ 70,00 mais R$ 2,00 por entrega. A partir de quantas entregas mensais o plano B passa a ser mais barato que o plano A?",
    alternativas: [
      "25",
      "28",
      "30",
      "31",
      "35"
    ],
    correta: 3,
    materia: "Matemática",
    explicacao: "O plano B é mais barato quando 70 + 2x < 40 + 3x, isto é, x > 30. Portanto, a partir de 31 entregas. Em 30 entregas, ambos custam R$ 130,00."
  },
  {
    id: "q052",
    enunciado: "Leia: \"O relatório foi concluído pelos pesquisadores após seis meses de testes.\" A construção verbal dessa frase está na voz",
    alternativas: [
      "ativa, pois os pesquisadores praticam a ação.",
      "passiva analítica, pois o sujeito recebe a ação verbal.",
      "reflexiva, pois o sujeito pratica e recebe a ação ao mesmo tempo.",
      "passiva sintética, marcada pela partícula se.",
      "impessoal, pois o verbo não tem sujeito."
    ],
    correta: 1,
    materia: "Língua Portuguesa",
    explicacao: "O sujeito \"O relatório\" recebe a ação de concluir. A locução \"foi concluído\" (verbo ser + participio) forma a voz passiva analítica. O agente \"pelos pesquisadores\" é expresso pelo complemento agentivo."
  },
  {
    id: "q053",
    enunciado: "Read the text: \"Many cities are planting trees along streets. Trees provide shade, absorb some pollutants and can lower surface temperatures. However, planting programs require maintenance and careful species selection.\" Which limitation does the text mention?",
    alternativas: [
      "Trees do not provide shade in most urban areas.",
      "Urban trees tend to increase air pollution significantly.",
      "Planting programs require maintenance and appropriate species.",
      "Trees have no measurable effect on surface temperatures.",
      "Cities should replace all vegetation with paved surfaces."
    ],
    correta: 2,
    materia: "Língua Inglesa",
    explicacao: "A última frase do texto afirma explicitamente que programas de plantio exigem manutenção e seleção cuidadosa de espécies. As demais alternativas contradizem ou extrapolam o conteúdo do texto."
  },
  {
    id: "q054",
    enunciado: "Uma onda sonora propaga-se no ar com velocidade de 340 m/s e frequência de 170 Hz. Qual é seu comprimento de onda?",
    alternativas: [
      "1 m",
      "2 m",
      "3,4 m",
      "170 m",
      "510 m"
    ],
    correta: 1,
    materia: "Física",
    explicacao: "Pela relação v = λf, temos λ = v/f = 340/170 = 2 m. Quem multiplica obtém 57 800; quem confunde a fórmula pode chegar a outros valores."
  },
  {
    id: "q055",
    enunciado: "Um código é composto por duas letras diferentes, escolhidas entre A, B, C e D, seguidas de um algarismo entre 0 e 9. Quantos códigos podem ser formados?",
    alternativas: [
      "80",
      "100",
      "120",
      "140",
      "160"
    ],
    correta: 2,
    materia: "Lógica",
    explicacao: "Há 4 opções para a primeira letra, 3 para a segunda (letras diferentes) e 10 para o algarismo. O total é 4 × 3 × 10 = 120. Quem permite repetição de letras obtém 4 × 4 × 10 = 160."
  },
  {
    id: "q056",
    enunciado: "Na reação balanceada N₂ + 3 H₂ → 2 NH₃, quantos mols de amônia são produzidos teoricamente a partir de 6 mol de H₂, com nitrogênio em excesso?",
    alternativas: [
      "2 mol",
      "3 mol",
      "4 mol",
      "5 mol",
      "6 mol"
    ],
    correta: 2,
    materia: "Química",
    explicacao: "A proporção estequiométrica é de 3 mol de H₂ para 2 mol de NH₃. Com 6 mol de H₂, formam-se 4 mol de NH₃ (6 × 2/3). Quem inverte a proporção obtém 3 mol."
  },
  {
    id: "q057",
    enunciado: "A abolição da escravidão no Brasil, em 1888, encerrou legalmente o regime escravista, mas não garantiu por si só igualdade econômica e social à população liberta. Essa diferença evidencia que",
    alternativas: [
      "mudanças legais eliminam automaticamente todas as desigualdades sociais.",
      "a liberdade jurídica não assegurou automaticamente acesso à terra, à renda e à educação.",
      "a escravidão permaneceu legalmente válida após a Lei Áurea.",
      "a população liberta recebeu universalmente terras e indenizações pelo Estado.",
      "a abolição eliminou qualquer forma posterior de discriminação racial no Brasil."
    ],
    correta: 1,
    materia: "História",
    explicacao: "A abolição extinguiu juridicamente a escravidão, mas não foi acompanhada de políticas suficientes para garantir igualdade material à população liberta. Desigualdades estruturais de terra, renda e educação persistiram."
  },
  {
    id: "q058",
    enunciado: "Uma região apresenta chuvas concentradas em poucos meses, seguidas por uma estação seca prolongada. Para planejar o uso agrícola da água, uma medida adequada é",
    alternativas: [
      "desviar toda a água da estação chuvosa diretamente para os rios.",
      "aumentar o consumo durante a seca sem monitorar a disponibilidade hídrica.",
      "captar e armazenar parte da água da estação chuvosa para uso posterior.",
      "impermeabilizar todas as áreas de recarga dos aquíferos da região.",
      "eliminar a vegetação ripária para ampliar a área cultivável."
    ],
    correta: 2,
    materia: "Geografia",
    explicacao: "A captação e o armazenamento da água durante períodos chuvosos podem aumentar sua disponibilidade na estação seca. A estratégia precisa considerar qualidade, capacidade de armazenamento e impactos ambientais."
  },
  {
    id: "q059",
    enunciado: "Uma notícia relata que um sistema de inteligência artificial identificou padrões em milhares de exames médicos. Para avaliar criticamente a utilidade desse sistema, é importante considerar",
    alternativas: [
      "apenas a velocidade de processamento dos dados.",
      "se o sistema foi treinado e avaliado com dados representativos e se seus erros foram medidos.",
      "que toda decisão automatizada é necessariamente mais precisa que a humana.",
      "que resultados de IA dispensam qualquer validação por profissionais de saúde.",
      "que o volume de dados utilizados elimina qualquer risco de viés."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "A confiabilidade de um sistema depende da qualidade e representatividade dos dados, de testes adequados e da análise de erros. Automação não elimina vieses nem substitui a validação científica e clínica."
  },
  {
    id: "q060",
    enunciado: "Uma fábrica produz caixas retangulares de dimensões 20 cm, 10 cm e 5 cm. Qual é o volume de cada caixa?",
    alternativas: [
      "700 cm³",
      "900 cm³",
      "1 000 cm³",
      "1 100 cm³",
      "1 250 cm³"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "O volume de um paralelepípedo é o produto de suas três dimensões: 20 × 10 × 5 = 1 000 cm³. Quem soma as dimensões obtém 35; quem usa apenas duas obtém 200 ou 50."
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
    explicacao: "O verbo entregar, nesse contexto, exige a preposição a, e \"diretoria\" admite o artigo feminino a. A fusão das duas formas resulta em \"à diretoria\". \"À pé\" é expressão fixa sem crase; antes de verbo no infinitivo não há crase."
  },
  {
    id: "q062",
    enunciado: "Read the text: \"The library extended its opening hours during exam week. Students can now study until 10 p.m., but they must register at the front desk after 6 p.m.\" What must students do after 6 p.m.?",
    alternativas: [
      "Leave the building immediately.",
      "Register at the front desk.",
      "Pay an additional fee for each hour.",
      "Avoid using the library during exam week.",
      "Return all borrowed books before entering."
    ],
    correta: 1,
    materia: "Língua Inglesa",
    explicacao: "O texto afirma diretamente que os estudantes devem se registrar na recepção (front desk) depois das 18h. Não menciona taxas adicionais nem devolução obrigatória de livros."
  },
  {
    id: "q063",
    enunciado: "Um objeto de massa 2 kg está inicialmente em repouso. Uma força resultante constante de 8 N atua sobre ele durante 3 segundos, em uma superfície sem atrito. Qual será sua velocidade ao final desse intervalo?",
    alternativas: [
      "8 m/s",
      "10 m/s",
      "12 m/s",
      "16 m/s",
      "24 m/s"
    ],
    correta: 2,
    materia: "Física",
    explicacao: "A aceleração é a = F/m = 8/2 = 4 m/s². Partindo do repouso, v = at = 4 × 3 = 12 m/s. Quem esquece de calcular a aceleração e usa v = Ft/m de forma errada pode chegar a outros valores."
  },
  {
    id: "q064",
    enunciado: "Uma urna contém 5 bolas brancas e 3 pretas. Duas bolas são retiradas sucessivamente, sem reposição. Qual é a probabilidade de ambas serem brancas?",
    alternativas: [
      "5/14",
      "25/64",
      "10/21",
      "5/12",
      "25/56"
    ],
    correta: 0,
    materia: "Lógica",
    explicacao: "A probabilidade é (5/8) × (4/7) = 20/56 = 5/14, pois a primeira bola não é devolvida à urna. Quem considera reposição obtém (5/8)² = 25/64."
  },
  {
    id: "q065",
    enunciado: "Um estudante mistura água e óleo em um recipiente e observa duas fases líquidas distintas. A separação ocorre principalmente porque as substâncias",
    alternativas: [
      "possuem a mesma densidade e se organizam por diferença de temperatura.",
      "apresentam diferenças de polaridade que dificultam a miscibilidade.",
      "reagem quimicamente formando dois compostos líquidos imiscíveis.",
      "possuem a mesma estrutura molecular mas massas moleculares diferentes.",
      "não sofrem qualquer tipo de interação intermolecular."
    ],
    correta: 1,
    materia: "Química",
    explicacao: "Água é polar e os óleos são predominantemente apolares. Essa diferença de polaridade dificulta a mistura homogênea e favorece a formação de fases separadas. Densidades diferentes explicam a posição das fases, não a imiscibilidade."
  },
  {
    id: "q066",
    enunciado: "Durante a Guerra Fria, Estados Unidos e União Soviética disputaram influência política, militar, econômica e tecnológica. A corrida espacial integrou essa disputa porque",
    alternativas: [
      "buscava unificar os dois blocos em torno de objetivos científicos comuns.",
      "era destinada exclusivamente à exploração comercial de recursos extraterrestres.",
      "serviu como demonstração de capacidade tecnológica e prestígio político.",
      "resultou na dissolução imediata das alianças militares existentes.",
      "teve como objetivo principal substituir a corrida armamentista convencional."
    ],
    correta: 2,
    materia: "História",
    explicacao: "A corrida espacial foi um componente da competição estratégica da Guerra Fria, permitindo demonstrar capacidade científica, tecnológica e organizacional. Não havia cooperação entre os blocos nesse domínio."
  },
  {
    id: "q067",
    enunciado: "O aumento da concentração de gases de efeito estufa na atmosfera intensifica a retenção de energia térmica no sistema climático. Uma consequência possível do aquecimento global é",
    alternativas: [
      "a interrupção completa do ciclo hidrológico em escala planetária.",
      "a redução universal da temperatura média dos oceanos.",
      "a elevação do nível médio do mar por expansão térmica e perda de gelo continental.",
      "o desaparecimento instantâneo de todas as calotas polares.",
      "a estabilização dos padrões de precipitação em todas as regiões."
    ],
    correta: 2,
    materia: "Biologia",
    explicacao: "O aquecimento pode elevar o nível do mar pela expansão térmica da água e pelo derretimento de geleiras e mantos de gelo continentais. A intensidade varia conforme a evolução das emissões e do clima."
  },
  {
    id: "q068",
    enunciado: "Uma empresa investiu R$ 8 000,00 em um equipamento que perde 10% de seu valor a cada ano, sempre calculados sobre o valor do ano anterior. Qual será seu valor após dois anos?",
    alternativas: [
      "R$ 6 200,00",
      "R$ 6 400,00",
      "R$ 6 480,00",
      "R$ 6 800,00",
      "R$ 7 200,00"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "A cada ano, o valor é multiplicado por 0,9. Após dois anos: 8 000 × 0,9² = 8 000 × 0,81 = R$ 6 480,00. Quem subtrai 10% linearmente (20% de 8 000 = 1 600) obtém R$ 6 400,00."
  },
  {
    id: "q069",
    enunciado: "Em um artigo de opinião, o autor apresenta dados sobre desperdício de alimentos e conclui que supermercados e consumidores devem adotar medidas preventivas. A função principal dos dados, nesse contexto, é",
    alternativas: [
      "substituir a conclusão do texto por uma descrição neutra dos fatos.",
      "construir uma base argumentativa para sustentar a posição defendida.",
      "demonstrar que o tema não admite interpretações divergentes.",
      "transformar o artigo em um relatório científico experimental.",
      "eliminar a necessidade de estabelecer relações lógicas entre as ideias."
    ],
    correta: 1,
    materia: "Língua Portuguesa",
    explicacao: "Dados pertinentes funcionam como evidências que sustentam a tese e fortalecem a argumentação. Sua força depende da relevância, da confiabilidade e da interpretação adequada, sem eliminar a necessidade de conclusão do autor."
  },
  {
    id: "q070",
    enunciado: "Read the text: \"Reusable containers can reduce single-use packaging. Their environmental benefit, however, depends on how often they are reused, how they are cleaned and what materials they are made from.\" What is the author's main point?",
    alternativas: [
      "Reusable containers always have a negligible environmental impact.",
      "Single-use packaging is more efficient in every situation.",
      "The environmental benefit of reusable containers depends on several factors.",
      "Cleaning reusable containers makes them impractical for daily use.",
      "The material composition of containers is irrelevant to their impact."
    ],
    correta: 2,
    materia: "Língua Inglesa",
    explicacao: "O texto ressalta que o benefício ambiental depende da frequência de reutilização, da limpeza e do material empregado. O autor não afirma que o impacto é sempre nulo nem que a composição é irrelevante."
  },
  {
    id: "q071",
    enunciado: "Um resistor de 12 Ω é ligado a uma fonte ideal de 24 V. Qual é a corrente elétrica que atravessa o resistor?",
    alternativas: [
      "0,5 A",
      "1 A",
      "2 A",
      "4 A",
      "288 A"
    ],
    correta: 2,
    materia: "Física",
    explicacao: "Pela primeira lei de Ohm, I = U/R = 24/12 = 2 A. Quem inverte (R/U) obtém 0,5 A; quem multiplica obtém 288 A."
  },
  {
    id: "q072",
    enunciado: "Em um sistema lógico, a saída é verdadeira somente quando as duas entradas são verdadeiras. Essa operação corresponde à conjunção lógica, representada pelo conectivo",
    alternativas: [
      "OU.",
      "NÃO.",
      "SE...ENTÃO.",
      "E.",
      "OU EXCLUSIVO."
    ],
    correta: 3,
    materia: "Lógica",
    explicacao: "A conjunção lógica, representada por E, é verdadeira apenas quando ambas as proposições de entrada são verdadeiras. O conectivo OU é verdadeiro quando pelo menos uma entrada é verdadeira; o OU EXCLUSIVO exige entradas diferentes."
  },
  {
    id: "q073",
    enunciado: "Na reação 2 H₂ + O₂ → 2 H₂O, 4 mol de hidrogênio reagem completamente com oxigênio em excesso. Quantos mols de água são formados?",
    alternativas: [
      "2 mol",
      "3 mol",
      "4 mol",
      "6 mol",
      "8 mol"
    ],
    correta: 2,
    materia: "Química",
    explicacao: "A proporção entre H₂ e H₂O é de 2:2, ou seja, 1:1. Assim, 4 mol de H₂ produzem 4 mol de água. Quem considera a proporção com O₂ pode confundir os coeficientes."
  },
  {
    id: "q074",
    enunciado: "O movimento modernista brasileiro de 1922 valorizou a experimentação estética e a revisão crítica de modelos culturais importados. Uma característica associada a esse movimento foi",
    alternativas: [
      "a defesa das regras clássicas como únicas formas legítimas de expressão artística.",
      "a recusa absoluta de qualquer referência à cultura brasileira nas obras.",
      "a busca de novas linguagens e a valorização crítica de elementos da cultura nacional.",
      "a eliminação da linguagem coloquial de todas as produções literárias.",
      "a substituição da poesia por textos exclusivamente acadêmicos e científicos."
    ],
    correta: 2,
    materia: "Literatura",
    explicacao: "O Modernismo brasileiro buscou renovar a linguagem artística, questionar convenções e reinterpretar elementos culturais nacionais. Isso não significou uma única estética uniforme, mas sim diversidade de propostas."
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
    explicacao: "Dez por cento de 20 000 kJ corresponde a 2 000 kJ. A transferência de energia entre níveis tróficos é limitada, pois parte é dissipada como calor ou utilizada no metabolismo dos organismos."
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
    explicacao: "A mediana é o valor central dos dados ordenados, neste caso 25 minutos. Diferentemente da média (que é elevada pelo valor extremo), a mediana é pouco sensível a outliers. A amplitude e o máximo são medidas de dispersão, não de tendência central."
  },
  {
    id: "q077",
    enunciado: "Assinale a alternativa em que a regência verbal está adequada à norma-padrão.",
    alternativas: [
      "Os estudantes assistiram o debate sobre tecnologia.",
      "A pesquisadora prefere mais química do que física.",
      "O funcionário obedeceu às instruções de segurança.",
      "O relatório implica em mudanças obrigatórias.",
      "O candidato chegou no laboratório antes do horário."
    ],
    correta: 2,
    materia: "Língua Portuguesa",
    explicacao: "No sentido de cumprir uma orientação, obedecer exige a preposição a: \"obedeceu às instruções\". Na norma-padrão, assistir no sentido de ver também exige preposição; chegar exige a (chegou ao); implicar não leva preposição."
  },
  {
    id: "q078",
    enunciado: "Read the text: \"The experiment was repeated three times because the first results differed considerably. After checking the equipment, the researchers obtained similar measurements.\" Why did the researchers repeat the experiment?",
    alternativas: [
      "The equipment had been replaced with new instruments.",
      "The first results differed considerably.",
      "The final measurements were never properly recorded.",
      "The researchers wanted to avoid checking the equipment.",
      "The experiment had been prohibited by a review board."
    ],
    correta: 1,
    materia: "Língua Inglesa",
    explicacao: "O texto afirma diretamente que o experimento foi repetido porque os primeiros resultados apresentaram diferenças consideráveis. A verificação do equipamento ocorreu depois, como parte do processo de repetição."
  },
  {
    id: "q079",
    enunciado: "Um objeto é colocado a 2 m de um espelho plano. Qual é a distância entre o objeto e sua imagem virtual?",
    alternativas: [
      "1 m",
      "2 m",
      "3 m",
      "4 m",
      "8 m"
    ],
    correta: 3,
    materia: "Física",
    explicacao: "A imagem forma-se à mesma distância atrás do espelho que o objeto está à frente. Portanto, a separação entre objeto e imagem é 2 + 2 = 4 m. Quem responde 2 m está dando a distância entre o objeto e o espelho."
  },
  {
    id: "q080",
    enunciado: "Uma equipe de cinco pessoas precisa escolher um coordenador e um secretário entre seus integrantes, sem que a mesma pessoa ocupe os dois cargos. De quantas maneiras isso pode ser feito?",
    alternativas: [
      "10",
      "15",
      "20",
      "25",
      "30"
    ],
    correta: 2,
    materia: "Lógica",
    explicacao: "Há cinco escolhas para coordenador e quatro para secretário. Como os cargos são diferentes, a ordem importa: 5 × 4 = 20 maneiras. Quem usa combinação (5C2 = 10) ignora a distinção entre os cargos."
  },
  {
    id: "q081",
    enunciado: "Em um laboratório, um ácido reage com uma base e produz sal e água. Essa transformação é classificada, de modo geral, como",
    alternativas: [
      "neutralização ácido-base.",
      "combustão completa.",
      "polimerização por adição.",
      "decomposição térmica.",
      "sublimação reversa."
    ],
    correta: 0,
    materia: "Química",
    explicacao: "Uma reação entre ácido e base que forma sal e água é classificada como neutralização ácido-base. A combustão envolve oxigênio; a polimerização forma cadeias; a decomposição quebra moléculas; a sublimação é mudança de estado."
  },
  {
    id: "q082",
    enunciado: "O crescimento das cidades brasileiras no século XX esteve relacionado à industrialização e às migrações internas. Em muitas regiões, a expansão urbana ocorreu mais rapidamente que a implantação de infraestrutura. Uma consequência possível foi",
    alternativas: [
      "a distribuição homogênea de serviços públicos em todos os bairros.",
      "o desaparecimento das periferias urbanas com a valorização imobiliária.",
      "a ampliação de problemas habitacionais e de acesso ao saneamento.",
      "a eliminação dos deslocamentos pendulares entre região central e periferia.",
      "a redução automática das desigualdades territoriais entre as regiões."
    ],
    correta: 2,
    materia: "Geografia",
    explicacao: "Quando a urbanização ocorre sem infraestrutura suficiente, podem surgir déficits de moradia, saneamento e transporte, frequentemente distribuídos de maneira desigual entre as regiões da cidade."
  },
  {
    id: "q083",
    enunciado: "A divulgação de um estudo científico nas redes sociais apresenta apenas um resultado isolado e o descreve como prova definitiva de uma hipótese. Uma leitura crítica deve considerar que",
    alternativas: [
      "um único estudo sempre encerra qualquer debate científico.",
      "a repetição independente dos resultados e a avaliação metodológica ajudam a fortalecer conclusões.",
      "a popularidade de uma publicação substitui a revisão por pares.",
      "resultados contrários devem ser descartados por não confirmarem a hipótese.",
      "a ciência não utiliza evidências empíricas para formular teorias."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "Conclusões científicas ganham robustez com métodos adequados, revisão crítica e reprodução independente. Um estudo isolado pode ser relevante, mas raramente resolve sozinho toda uma questão científica."
  },
  {
    id: "q084",
    enunciado: "Uma sequência numérica começa em 3 e cada termo seguinte é obtido multiplicando o anterior por 2 e somando 1. Qual é o quarto termo?",
    alternativas: [
      "23",
      "27",
      "29",
      "31",
      "35"
    ],
    correta: 3,
    materia: "Matemática",
    explicacao: "Partindo de 3: 2 × 3 + 1 = 7; 2 × 7 + 1 = 15; 2 × 15 + 1 = 31. O quarto termo é 31. Quem erra a ordem das operações obtém outros valores."
  },
  {
    id: "q085",
    enunciado: "Em uma frase publicitária, lê-se: \"Nosso novo filtro transforma sua água em pura tranquilidade.\" O uso de \"tranquilidade\" para representar uma sensação de segurança, em vez de uma propriedade física da água, constitui principalmente",
    alternativas: [
      "linguagem denotativa, pois descreve uma propriedade objetiva do produto.",
      "uma enumeração técnica de dados quantitativos sobre a qualidade da água.",
      "uso conotativo da linguagem, com sentido figurado e associativo.",
      "um erro de concordância nominal entre o substantivo e o adjetivo.",
      "uma oração subordinada causal que explica o funcionamento do filtro."
    ],
    correta: 2,
    materia: "Língua Portuguesa",
    explicacao: "A palavra \"tranquilidade\" é usada em sentido figurado para associar o produto a uma sensação positiva. Esse emprego caracteriza conotação, diferentemente do sentido denotativo (literal)."
  },
  {
    id: "q086",
    enunciado: "Read the sentence: \"The device is inexpensive; nevertheless, its maintenance costs are high.\" The word \"nevertheless\" expresses",
    alternativas: [
      "addition or reinforcement.",
      "contrast or concession.",
      "purpose or intention.",
      "time sequence or chronology.",
      "a direct comparison of quantities."
    ],
    correta: 1,
    materia: "Língua Inglesa",
    explicacao: "\"Nevertheless\" significa \"ainda assim\" ou \"apesar disso\" e introduz uma ideia contrastante em relação à afirmação anterior. Não expressa adição, propósito, sequência temporal ou comparação."
  },
  {
    id: "q087",
    enunciado: "Um corpo de 3 kg é elevado verticalmente a uma altura de 4 m. Considere g = 10 m/s² e despreze a resistência do ar. Qual é o aumento de sua energia potencial gravitacional?",
    alternativas: [
      "30 J",
      "60 J",
      "90 J",
      "120 J",
      "150 J"
    ],
    correta: 3,
    materia: "Física",
    explicacao: "A variação da energia potencial gravitacional é ΔEp = mgh = 3 × 10 × 4 = 120 J. Quem usa h = 2 obtém 60 J; quem confunde a fórmula pode chegar a outros valores."
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
    explicacao: "Os números primos entre 1 e 6 são 2, 3 e 5. Há três resultados favoráveis em seis possíveis, logo a probabilidade é 3/6 = 1/2. Quem inclui 1 (que não é primo) obtém 4/6 = 2/3."
  },
  {
    id: "q089",
    enunciado: "Uma amostra de 200 g de solução contém 30 g de soluto. Qual é a porcentagem em massa do soluto?",
    alternativas: [
      "12%",
      "15%",
      "18%",
      "20%",
      "30%"
    ],
    correta: 1,
    materia: "Química",
    explicacao: "A porcentagem em massa é (massa do soluto / massa da solução) × 100. Portanto, (30/200) × 100 = 15%. Quem calcula sobre a massa do solvente (170 g) obtém cerca de 17,6%."
  },
  {
    id: "q090",
    enunciado: "Na sociedade feudal europeia, as relações de poder e produção estavam fortemente associadas à posse da terra. Uma característica importante desse sistema foi",
    alternativas: [
      "a predominância de uma economia industrial baseada no trabalho assalariado.",
      "a ausência de qualquer relação de dependência entre os grupos sociais.",
      "a importância da produção agrária e das obrigações entre grupos sociais.",
      "a universalização do trabalho livre e da mobilidade social ascendente.",
      "a separação completa entre poder político e propriedade fundiária."
    ],
    correta: 2,
    materia: "História",
    explicacao: "A sociedade feudal era predominantemente agrária, com relações de dependência e obrigações associadas à terra. A organização variava entre regiões e períodos, mas a terra era o centro do sistema."
  },
  {
    id: "q091",
    enunciado: "Uma população de insetos apresenta resistência a determinado pesticida após várias gerações de aplicação do produto. Qual explicação é compatível com a seleção natural?",
    alternativas: [
      "O pesticida induz mutações direcionadas em todos os indivíduos da população.",
      "Insetos resistentes podem sobreviver e deixar mais descendentes, aumentando a frequência da resistência.",
      "Todos os insetos se tornam geneticamente idênticos após a exposição ao pesticida.",
      "A resistência é adquirida por aprendizado individual e transmitida culturalmente.",
      "A seleção natural impede qualquer alteração nas frequências alélicas ao longo do tempo."
    ],
    correta: 1,
    materia: "Biologia",
    explicacao: "Se houver variação hereditária na resistência, os indivíduos resistentes tendem a sobreviver e reproduzir-se mais sob a aplicação do pesticida. Com as gerações, a resistência pode tornar-se mais frequente na população."
  },
  {
    id: "q092",
    enunciado: "Um retângulo tem área de 96 cm² e largura de 8 cm. Qual é seu perímetro?",
    alternativas: [
      "28 cm",
      "32 cm",
      "36 cm",
      "40 cm",
      "44 cm"
    ],
    correta: 3,
    materia: "Matemática",
    explicacao: "O comprimento é 96/8 = 12 cm. O perímetro é 2 × (8 + 12) = 40 cm. Quem confunde comprimento com perímetro obtém 20 cm; quem calcula 2 × 8 + 12 obtém 28 cm."
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
    explicacao: "\"Portanto\" é uma conjunção conclusiva: a realização do teste com maior segurança é apresentada como consequência lógica da revisão do procedimento. Não expressa oposição, condição ou alternância."
  },
  {
    id: "q094",
    enunciado: "Read the text: \"Although the train was delayed, most passengers reached the conference before it began because the organizers postponed the opening session.\" Why did most passengers arrive before the conference began?",
    alternativas: [
      "The train arrived earlier than expected.",
      "The organizers postponed the opening session.",
      "The passengers travelled by airplane instead.",
      "The conference was cancelled and rescheduled.",
      "The train delay was shorter than anticipated."
    ],
    correta: 1,
    materia: "Língua Inglesa",
    explicacao: "O texto informa que os organizadores adiaram a sessão de abertura, permitindo que a maioria dos passageiros chegasse antes do início. O trem, na verdade, atrasou — o oposto da alternativa A."
  },
  {
    id: "q095",
    enunciado: "Em uma associação de resistores em série, três resistores de 2 Ω, 3 Ω e 5 Ω são conectados a uma fonte ideal de 20 V. Qual é a corrente elétrica no circuito?",
    alternativas: [
      "1 A",
      "2 A",
      "3 A",
      "4 A",
      "10 A"
    ],
    correta: 1,
    materia: "Física",
    explicacao: "Em série, a resistência equivalente é 2 + 3 + 5 = 10 Ω. Pela lei de Ohm, a corrente é 20/10 = 2 A. Quem considera associação paralela obtém outro valor de resistência equivalente."
  },
  {
    id: "q096",
    enunciado: "Uma senha numérica de três algarismos deve utilizar apenas algarismos pares, sem repetição. O primeiro algarismo não pode ser zero. Quantas senhas podem ser formadas com os algarismos 0, 2, 4, 6 e 8?",
    alternativas: [
      "36",
      "42",
      "48",
      "60",
      "64"
    ],
    correta: 2,
    materia: "Lógica",
    explicacao: "Há quatro opções para a primeira posição: 2, 4, 6 ou 8. Depois, restam quatro opções para a segunda posição (incluindo 0) e três para a terceira. O total é 4 × 4 × 3 = 48. Quem proíbe 0 em qualquer posição obtém 4 × 3 × 2 = 24."
  },
  {
    id: "q097",
    enunciado: "Uma substância apresenta moléculas formadas exclusivamente por carbono e hidrogênio. Ela pertence à classe dos",
    alternativas: [
      "hidrocarbonetos.",
      "álcoois.",
      "ácidos carboxílicos.",
      "aminas.",
      "ésteres."
    ],
    correta: 0,
    materia: "Química",
    explicacao: "Hidrocarbonetos são compostos orgânicos constituídos exclusivamente por carbono e hidrogênio. A presença de oxigênio caracteriza álcoois, ácidos e ésteres; a presença de nitrogênio caracteriza aminas."
  },
  {
    id: "q098",
    enunciado: "A expansão da energia solar e eólica modifica a composição das fontes usadas para produzir eletricidade. Para comparar seus impactos ambientais de maneira consistente, é importante",
    alternativas: [
      "avaliar somente a aparência visual dos equipamentos instalados.",
      "considerar apenas o custo financeiro de instalação das usinas.",
      "examinar o ciclo de vida, incluindo fabricação, operação e descarte dos equipamentos.",
      "presumir que toda fonte renovável é completamente isenta de impactos.",
      "desconsiderar o local de instalação e as condições ambientais da região."
    ],
    correta: 2,
    materia: "Atualidades",
    explicacao: "A análise do ciclo de vida considera impactos da extração de materiais, fabricação, operação e descarte. Fontes renováveis podem reduzir determinadas emissões, mas não são isentas de impactos ambientais."
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
    explicacao: "Representando os alelos por V e B, as plantas rosas são VB. No cruzamento VB × VB, a proporção genotípica é 1 VV : 2 VB : 1 BB, resultando em 25% vermelhas, 50% rosas e 25% brancas por dominância incompleta."
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
    explicacao: "Após o aumento, o preço passa a R$ 300,00 (250 × 1,2). O desconto de 20% incide sobre esse novo valor: 300 × 0,8 = R$ 240,00. Percentuais sucessivos são calculados sobre bases diferentes, por isso não voltam ao valor original."
  },
  {
    id: "q101",
    enunciado: "Uma fábrica monitora a temperatura de um forno. A temperatura aumenta de 80 °C para 200 °C em 4 minutos, de maneira uniforme. Qual é a taxa média de aumento da temperatura?",
    alternativas: [
      "20 °C/min",
      "25 °C/min",
      "30 °C/min",
      "50 °C/min",
      "70 °C/min"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "A variação de temperatura é 200 − 80 = 120 °C. Dividindo por 4 minutos, obtém-se 30 °C/min. Quem divide 80 por 4 obtém 20; quem divide 200 por 4 obtém 50."
  },
  {
    id: "q102",
    enunciado: "Leia: \"Os equipamentos que apresentaram falhas foram retirados de operação.\" Nesse contexto, a oração introduzida por \"que\"",
    alternativas: [
      "explica a causa pela qual todos os equipamentos foram retirados.",
      "restringe o grupo de equipamentos mencionado, identificando quais apresentaram falhas.",
      "estabelece uma relação de coordenação entre duas orações independentes.",
      "introduz uma oração subordinada substantiva predicativa do sujeito.",
      "indica uma condição necessária para a retirada de qualquer equipamento."
    ],
    correta: 1,
    materia: "Língua Portuguesa",
    explicacao: "A oração adjetiva restritiva delimita o substantivo \"equipamentos\": foram retirados de operação apenas aqueles que apresentaram falhas. Não se trata de explicação (que diria o motivo da retirada) nem de oração substantiva."
  },
  {
    id: "q103",
    enunciado: "Read the text: \"The company introduced a four-day workweek for a six-month trial. Productivity remained stable, while employee satisfaction increased. Managers will review the results before deciding whether to make the change permanent.\" What can be concluded?",
    alternativas: [
      "The policy has already been made permanent after the trial.",
      "Productivity decreased during the trial, but satisfaction improved.",
      "The trial produced encouraging results, but a final decision has not been made.",
      "Employee satisfaction remained unchanged throughout the trial.",
      "The company decided to extend the trial for another six months."
    ],
    correta: 2,
    materia: "Língua Inglesa",
    explicacao: "O texto relata produtividade estável e maior satisfação, mas informa que os gestores ainda revisarão os resultados antes de decidir. A alternativa sobre produtividade decrescente contradiz \"remained stable\"; a decisão já tomada contradiz \"before deciding\"."
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
    explicacao: "A energia cinética é Ec = mv²/2. Substituindo, Ec = 2 × 36 / 2 = 36 J. Quem calcula mv (2 × 6) obtém 12 J; quem esquece o 1/2 e calcula mv² obtém 72 J."
  },
  {
    id: "q105",
    enunciado: "Considere as proposições: P = \"o servidor está ligado\" e Q = \"a conexão está ativa\". A proposição \"o servidor está ligado e a conexão está ativa\" é verdadeira apenas quando",
    alternativas: [
      "P é verdadeira e Q é falsa.",
      "P é falsa e Q é verdadeira.",
      "P e Q são ambas falsas.",
      "P e Q são ambas verdadeiras.",
      "P é verdadeira, independentemente do valor de Q."
    ],
    correta: 3,
    materia: "Lógica",
    explicacao: "A conjunção P ∧ Q é verdadeira somente quando ambas as proposições componentes são verdadeiras. Se qualquer uma for falsa, o resultado é falso."
  },
  {
    id: "q106",
    enunciado: "Na tabela periódica, elementos localizados no mesmo grupo frequentemente apresentam propriedades químicas semelhantes porque possuem",
    alternativas: [
      "o mesmo número de camadas eletrônicas em todos os átomos.",
      "configurações eletrônicas de valência semelhantes.",
      "a mesma energia de ionização exata em qualquer estado.",
      "massas atômicas idênticas entre os elementos do grupo.",
      "o mesmo número de nêutrons em todos os isótopos naturais."
    ],
    correta: 1,
    materia: "Química",
    explicacao: "Elementos de um mesmo grupo apresentam configurações eletrônicas de valência semelhantes, o que contribui para propriedades químicas parecidas. O número de camadas define o período, não o grupo; massas atômicas e nêutrons variam."
  },
  {
    id: "q107",
    enunciado: "A expansão marítima europeia dos séculos XV e XVI esteve associada a interesses comerciais, políticos e religiosos. Uma consequência histórica desse processo foi",
    alternativas: [
      "o isolamento completo dos continentes americanos em relação à Eurásia.",
      "a intensificação das conexões intercontinentais e da colonização europeia.",
      "a eliminação das rivalidades entre as potências ibéricas.",
      "o desaparecimento das rotas comerciais terrestres do Mediterrâneo.",
      "a consolidação de sistemas democráticos nas regiões colonizadas."
    ],
    correta: 1,
    materia: "História",
    explicacao: "As navegações ampliaram as conexões entre continentes e favoreceram a expansão colonial europeia, transformando circuitos comerciais e relações de poder. As rivalidades entre potências persistiram e até se intensificaram."
  },
  {
    id: "q108",
    enunciado: "A retirada da mata ciliar de um rio pode aumentar o transporte de sedimentos para seu leito. Qual consequência está diretamente associada a esse processo?",
    alternativas: [
      "Diminuição da turbidez da água por maior filtração natural.",
      "Aumento da estabilidade das margens pela maior velocidade da água.",
      "Assoreamento e possível alteração da capacidade de escoamento.",
      "Redução da carga de sedimentos transportados pelo curso d'água.",
      "Aumento da biodiversidade aquática pela entrada de nutrientes."
    ],
    correta: 2,
    materia: "Geografia",
    explicacao: "A vegetação ciliar protege o solo e retém sedimentos. Sua remoção favorece erosão, assoreamento e mudanças nas condições de escoamento. O aumento de sedimentos eleva a turbidez, em vez de reduzi-la."
  },
  {
    id: "q109",
    enunciado: "Uma plataforma digital recomenda conteúdos semelhantes aos que o usuário já consumiu. Qual risco informacional pode surgir quando esse mecanismo reduz excessivamente o contato com perspectivas diferentes?",
    alternativas: [
      "A eliminação automática de informações falsas da plataforma.",
      "A formação de ambientes informacionais que reforçam crenças existentes.",
      "A garantia de que todos os conteúdos recomendados são imparciais.",
      "O aumento obrigatório da diversidade de fontes consultadas pelo usuário.",
      "A impossibilidade técnica de personalizar qualquer serviço digital."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "Sistemas de recomendação podem reforçar preferências anteriores e limitar a exposição a pontos de vista diferentes, criando ambientes informacionais fechados. O efeito depende do funcionamento do sistema e dos hábitos de consumo."
  },
  {
    id: "q110",
    enunciado: "Uma escada de 5 m está apoiada em uma parede vertical. A base encontra-se a 3 m da parede. Considerando o triângulo retângulo formado, qual é a altura alcançada pela escada?",
    alternativas: [
      "2 m",
      "3 m",
      "4 m",
      "5,8 m",
      "8 m"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "Pelo teorema de Pitágoras, h² + 3² = 5². Assim, h² = 25 − 9 = 16 e h = 4 m. Quem soma os catetos (3 + 5) obtém 8; quem calcula √(25 + 9) obtém cerca de 5,8."
  },
  {
    id: "q111",
    enunciado: "Em uma notícia, o autor escreve: \"O projeto consumiu apenas três meses de trabalho, embora tenha exigido anos de planejamento.\" O conectivo \"embora\" expressa",
    alternativas: [
      "uma concessão entre duas informações contrastantes.",
      "uma conclusão derivada dos dados apresentados.",
      "uma condição necessária para a existência do projeto.",
      "uma relação de alternância entre duas possibilidades.",
      "a finalidade pela qual o projeto foi planejado."
    ],
    correta: 0,
    materia: "Língua Portuguesa",
    explicacao: "\"Embora\" introduz uma oração concessiva: apesar do longo planejamento (fato reconhecido), a execução durou apenas três meses. A relação não é de causa, conclusão, condição ou alternância."
  },
  {
    id: "q112",
    enunciado: "Read the text: \"A local farm sells vegetables directly to nearby restaurants. By reducing the distance between producers and buyers, the farm hopes to lower transport costs and deliver fresher food.\" What is the main expected advantage?",
    alternativas: [
      "Longer transportation routes for better product variety.",
      "Higher dependence on suppliers from distant regions.",
      "Lower transport costs and fresher deliveries.",
      "A complete replacement of restaurant menus.",
      "The elimination of all refrigeration requirements."
    ],
    correta: 2,
    materia: "Língua Inglesa",
    explicacao: "O texto apresenta a redução dos custos de transporte e a entrega de alimentos mais frescos como vantagens esperadas da venda local. Não menciona variedade de produtos, substituição de cardápios ou eliminação de refrigeração."
  },
  {
    id: "q113",
    enunciado: "Uma amostra de água recebe calor e sua temperatura aumenta de 20 °C para 35 °C. Considerando 200 g de água e calor específico de 4,2 J/(g·°C), qual é a quantidade de calor absorvida?",
    alternativas: [
      "840 J",
      "4 200 J",
      "8 400 J",
      "12 600 J",
      "29 400 J"
    ],
    correta: 3,
    materia: "Física",
    explicacao: "Pela expressão Q = mcΔT, temos Q = 200 × 4,2 × 15 = 12 600 J. Quem usa ΔT = 35 (em vez de 35 − 20 = 15) obtém 29 400 J; quem esquece o ΔT obtém 840 J."
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
    explicacao: "Cada uma das cinco posições possui duas possibilidades independentes. Pelo princípio multiplicativo, o total é 2⁵ = 32. Quem multiplica 2 × 5 obtém 10; quem calcula 5² obtém 25; quem usa 2⁶ obtém 64."
  },
  {
    id: "q115",
    enunciado: "A fórmula molecular C₂H₆O pode representar substâncias com funções orgânicas diferentes. Dois exemplos possíveis são etanol e metoximetano. Esse fato ilustra a existência de",
    alternativas: [
      "isótopos.",
      "isomeria constitucional.",
      "isomeria óptica.",
      "ressonância química.",
      "polimerização por adição."
    ],
    correta: 1,
    materia: "Química",
    explicacao: "Etanol e metoximetano têm a mesma fórmula molecular, mas diferentes conectividades entre os átomos e funções orgânicas distintas. São isômeros constitucionais (ou estruturais). Isomeria óptica envolve estereoquímica, não conectividade."
  },
  {
    id: "q116",
    enunciado: "A Constituição brasileira de 1988 ampliou o reconhecimento de direitos sociais e políticos após o período da ditadura militar. Esse processo está relacionado à",
    alternativas: [
      "consolidação de uma nova ordem constitucional democrática.",
      "implantação de um governo provisório sem marco constitucional.",
      "restauração dos privilégios da monarquia brasileira.",
      "redução dos direitos sociais para estimular o mercado.",
      "extinção de qualquer forma de participação política popular."
    ],
    correta: 0,
    materia: "História",
    explicacao: "A Constituição de 1988 foi elaborada durante a redemocratização e ampliou garantias de direitos e mecanismos de participação política. O texto constitucional estabeleceu direitos sociais, em vez de reduzi-los."
  },
  {
    id: "q117",
    enunciado: "O crescimento de uma cidade sobre áreas de mananciais pode aumentar a contaminação da água utilizada no abastecimento. Uma política preventiva coerente é",
    alternativas: [
      "ampliar a rede de esgoto para aumentar a velocidade de escoamento.",
      "substituir todas as fontes de água por poços artesianos individuais.",
      "controlar a ocupação do solo e proteger áreas de recarga e margens de cursos d'água.",
      "eliminar a vegetação das margens dos reservatórios para facilitar o acesso.",
      "impermeabilizar completamente as zonas de infiltração do aquífero."
    ],
    correta: 2,
    materia: "Geografia",
    explicacao: "O ordenamento territorial e a proteção de áreas de mananciais reduzem fontes de contaminação e ajudam a preservar a qualidade e a disponibilidade hídrica. Apenas ampliar esgoto ou substituir fontes não ataca a causa do problema."
  },
  {
    id: "q118",
    enunciado: "Uma discussão sobre o uso de reconhecimento facial em espaços públicos envolve benefícios de segurança e riscos à privacidade. Qual abordagem contribui para uma avaliação responsável dessa tecnologia?",
    alternativas: [
      "Priorizar exclusivamente a eficácia operacional do sistema de vigilância.",
      "Avaliar finalidade, precisão, possíveis vieses, proteção de dados e mecanismos de responsabilização.",
      "Adotar a tecnologia apenas quando houver garantia absoluta de erro zero.",
      "Permitir o uso livre dos dados coletados para qualquer finalidade futura.",
      "Limitar o debate a especialistas em segurança pública, excluindo a sociedade civil."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "Uma avaliação responsável considera eficácia, erros, discriminação, necessidade e proporcionalidade da coleta, além de privacidade e responsabilização. A garantia de erro zero é tecnicamente impossível e não substitui a avaliação de riscos."
  },
  {
    id: "q119",
    enunciado: "Uma loja vende um produto por R$ 180,00 após conceder um desconto de 10% sobre o preço original. Qual era o preço antes do desconto?",
    alternativas: [
      "R$ 190,00",
      "R$ 198,00",
      "R$ 200,00",
      "R$ 210,00",
      "R$ 225,00"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "O preço final corresponde a 90% do original. Logo, o preço original é 180/0,9 = R$ 200,00. Quem soma 10% de 180 (18) obtém R$ 198,00; quem divide por 0,8 obtém R$ 225,00."
  },
  {
    id: "q120",
    enunciado: "Uma reportagem informa que determinada pesquisa encontrou associação entre falta de sono e queda de desempenho escolar. Qual conclusão é cientificamente mais cuidadosa?",
    alternativas: [
      "A falta de sono é comprovadamente a única causa da queda de desempenho.",
      "O estudo é inválido por não estabelecer uma relação causal definitiva.",
      "A associação merece investigação, mas é necessário avaliar o desenho do estudo e possíveis fatores de confusão.",
      "O resultado é irrelevante para políticas educacionais e de saúde.",
      "A associação observada é suficiente para implementar intervenções imediatas."
    ],
    correta: 2,
    materia: "Atualidades",
    explicacao: "Uma associação estatística não demonstra necessariamente causalidade exclusiva. O desenho da pesquisa e fatores como saúde, contexto familiar e condições de estudo precisam ser considerados antes de conclusões definitivas."
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
    explicacao: "O máximo ocorre no vértice da parábola, com x = -b/(2a). Assim, x = -80/[2(-2)] = -80/(-4) = 20. Quem usa x = -b/a obtém 40; quem erra o sinal obtém valores negativos ou outros resultados."
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
    explicacao: "\"Mas\" é uma conjunção coordenativa adversativa, usada para introduzir uma informação que contrasta com a expectativa criada pela primeira oração. Não expressa causa, explicação, conclusão ou finalidade."
  },
  {
    id: "q123",
    enunciado: "Read the text: \"The museum offers free admission on Sundays. Visitors can reserve tickets online, but a limited number of walk-in tickets are also available.\" Which statement is supported by the text?",
    alternativas: [
      "Visitors must purchase all tickets at the entrance.",
      "Free admission is available only on weekdays.",
      "Visitors may reserve tickets online or obtain some tickets without a reservation.",
      "The museum has unlimited capacity for walk-in visitors.",
      "Online reservations are the only way to visit the museum."
    ],
    correta: 2,
    materia: "Língua Inglesa",
    explicacao: "O texto informa que é possível reservar ingressos on-line e que também há uma quantidade limitada disponível para visitantes sem reserva. A entrada gratuita é aos domingos, e a capacidade é limitada."
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
    explicacao: "A velocidade de uma onda é v = λf. Portanto, v = 4 × 50 = 200 m/s. Quem divide (50/4) obtém 12,5 m/s; quem subtrai ou soma obtém 46 ou 54 m/s."
  },
  {
    id: "q125",
    enunciado: "Um sistema de alarme dispara se o sensor A ou o sensor B detectar movimento. Qual condição faz com que o alarme não dispare, considerando uma porta lógica OU inclusiva?",
    alternativas: [
      "A e B detectam movimento simultaneamente.",
      "A detecta movimento e B não detecta.",
      "A não detecta movimento e B detecta.",
      "Nenhum dos dois sensores detecta movimento.",
      "Pelo menos um sensor detecta movimento."
    ],
    correta: 3,
    materia: "Lógica",
    explicacao: "A operação OU inclusiva é falsa apenas quando ambas as entradas são falsas. Logo, o alarme não dispara somente quando nenhum sensor detecta movimento."
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
    explicacao: "Na diluição, C₁V₁ = C₂V₂. Assim, C₂ = 2 × 100/500 = 0,4 mol/L. Quem inverte a razão (500/100) obtém 10 mol/L; quem divide 2 por 5 diretamente obtém 0,4, mas quem usa outro cálculo pode errar."
  },
  {
    id: "q127",
    enunciado: "A expansão do trabalho industrial no século XIX contribuiu para a formação de movimentos operários. Entre suas reivindicações históricas, destacou-se",
    alternativas: [
      "a ampliação da jornada de trabalho para reduzir o desemprego.",
      "a proibição de qualquer associação entre trabalhadores.",
      "a redução da jornada e a melhoria das condições de trabalho.",
      "a manutenção integral das condições do período anterior.",
      "a substituição dos salários por benefícios não monetários."
    ],
    correta: 2,
    materia: "História",
    explicacao: "Movimentos operários reivindicaram, em diferentes contextos, redução da jornada, melhores salários, segurança e direitos de organização. A ampliação da jornada e a proibição de associações eram posições opostas às dos trabalhadores."
  },
  {
    id: "q128",
    enunciado: "O desmatamento de uma encosta pode elevar o risco de deslizamentos em períodos de chuva intensa. Isso ocorre, entre outros fatores, porque a retirada da vegetação",
    alternativas: [
      "aumenta obrigatoriamente a compactação do solo pela exposição ao sol.",
      "pode diminuir a proteção superficial e alterar a estabilidade do terreno.",
      "reduz permanentemente a capacidade do solo de absorver qualquer água.",
      "elimina a influência da declividade no risco de deslizamento.",
      "impede a formação de qualquer tipo de vegetação secundária na área."
    ],
    correta: 1,
    materia: "Geografia",
    explicacao: "A vegetação protege o solo e suas raízes contribuem para a estabilidade. Sua remoção, combinada com chuvas intensas e características do terreno, pode aumentar a suscetibilidade a deslizamentos."
  },
  {
    id: "q129",
    enunciado: "Uma instituição divulga dados pessoais de usuários sem informar a finalidade da coleta ou oferecer mecanismos adequados de controle. Qual princípio deve orientar uma avaliação ética dessa prática?",
    alternativas: [
      "O consentimento tácito é suficiente para qualquer tratamento de dados pessoais.",
      "A transparência sobre finalidade e o respeito aos direitos dos titulares são relevantes para o tratamento de dados.",
      "A segurança técnica é suficiente mesmo sem informações sobre a finalidade da coleta.",
      "A coleta em larga escala legitima automaticamente o uso posterior dos dados.",
      "A anonimização parcial elimina qualquer dever de transparência com os usuários."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "A proteção de dados exige atenção à finalidade, transparência, segurança e direitos dos titulares. Segurança técnica sem transparência, ou consentimento tácito genérico, não atende integralmente a esses princípios."
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
    explicacao: "O comprimento da circunferência é C = 2πr. Assim, C = 2 × 22/7 × 7 = 44 cm. Quem calcula apenas πr obtém 22 cm; quem calcula πr² obtém 154 cm; quem dobra erradamente obtém 88 cm."
  },
  {
    id: "q131",
    enunciado: "Assinale a alternativa em que a palavra destacada exerce função de advérbio.",
    alternativas: [
      "A equipe apresentou um relatório REVISADO.",
      "A máquina funciona REGULARMENTE.",
      "O estudo revelou dados SIGNIFICATIVOS.",
      "A pesquisadora analisou DUAS amostras.",
      "A solução parece ADEQUADA."
    ],
    correta: 1,
    materia: "Língua Portuguesa",
    explicacao: "\"Regularmente\" modifica o verbo \"funciona\", indicando modo ou frequência, caracterizando um advérbio. \"Revisado\" e \"adequada\" são adjetivos; \"significativos\" é adjetivo; \"duas\" é numeral."
  },
  {
    id: "q132",
    enunciado: "Read the text: \"Because the road was flooded, the delivery truck took a longer route. The packages arrived safely, but two hours later than expected.\" What caused the delay?",
    alternativas: [
      "A mechanical problem with the delivery truck.",
      "A flooded road that forced a longer route.",
      "A misunderstanding about the delivery address.",
      "A sudden increase in the number of packages.",
      "A decision to take a more scenic route voluntarily."
    ],
    correta: 1,
    materia: "Língua Inglesa",
    explicacao: "O texto relaciona diretamente o atraso à inundação da estrada, que obrigou o caminhão a seguir um percurso mais longo. As demais alternativas apresentam causas plausíveis, mas não mencionadas no texto."
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
    explicacao: "Dois resistores iguais de 6 Ω em paralelo têm resistência equivalente de 3 Ω. Logo, a corrente total é 12/3 = 4 A. Quem trata a associação como série (Req = 12 Ω) obtém 1 A; quem usa 6 Ω obtém 2 A."
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
    explicacao: "A primeira posição já está fixada em A. Cada uma das outras três posições tem três opções independentes, totalizando 3³ = 27 sequências. Quem considera as quatro posições livres obtém 3⁴ = 81."
  },
  {
    id: "q135",
    enunciado: "Uma reação química apresenta liberação de calor para o ambiente. Essa transformação é classificada como",
    alternativas: [
      "endotérmica, com variação de entalpia positiva.",
      "exotérmica, com variação de entalpia negativa.",
      "exotérmica, com variação de entalpia positiva.",
      "endotérmica, com variação de entalpia negativa.",
      "isotérmica, com variação de entalpia nula."
    ],
    correta: 1,
    materia: "Química",
    explicacao: "Em uma reação exotérmica, o sistema libera calor para o ambiente. Sob pressão constante, a variação de entalpia (ΔH) é negativa. As alternativas que combinam exotérmica com ΔH positiva, ou endotérmica com ΔH negativa, misturam conceitos corretos e incorretos."
  },
  {
    id: "q136",
    enunciado: "A política de substituição de importações adotada em diferentes momentos da industrialização brasileira buscou, entre outros objetivos,",
    alternativas: [
      "ampliar as importações de bens industriais para reduzir custos.",
      "reduzir a dependência de produtos importados por meio do desenvolvimento da produção interna.",
      "eliminar completamente o comércio exterior brasileiro.",
      "priorizar exclusivamente a agricultura de exportação.",
      "transferir toda a produção industrial para empresas estrangeiras."
    ],
    correta: 1,
    materia: "História",
    explicacao: "A substituição de importações procurou ampliar a produção nacional de bens antes adquiridos do exterior, embora os resultados e as estratégias variassem entre períodos. O objetivo não era eliminar o comércio exterior."
  },
  {
    id: "q137",
    enunciado: "Uma área agrícola utiliza irrigação intensiva em clima seco, e a água evapora deixando sais acumulados na superfície do solo. Esse processo pode causar",
    alternativas: [
      "aumento da fertilidade pela concentração de nutrientes minerais.",
      "salinização do solo, prejudicando o crescimento de plantas.",
      "formação de uma camada impermeável de argila no subsolo.",
      "eliminação dos organismos decompositores da camada superficial.",
      "aumento da capacidade de retenção de água pelo solo."
    ],
    correta: 1,
    materia: "Geografia",
    explicacao: "Em condições de elevada evaporação e drenagem inadequada, sais podem acumular-se no solo. A salinização dificulta a absorção de água pelas plantas e reduz a produtividade. A concentração de sais não equivale a aumento de fertilidade."
  },
  {
    id: "q138",
    enunciado: "Um sistema de transporte passa a utilizar dados de localização dos passageiros para otimizar rotas. Uma medida importante para reduzir riscos à privacidade é",
    alternativas: [
      "manter todos os dados identificáveis por tempo indeterminado.",
      "publicar os históricos individuais de deslocamento em relatórios abertos.",
      "limitar a coleta ao necessário, proteger os registros e estabelecer regras de acesso.",
      "criptografar os dados, mas permitir acesso irrestrito a todos os funcionários.",
      "eliminar qualquer informação sobre a finalidade do tratamento dos dados."
    ],
    correta: 2,
    materia: "Atualidades",
    explicacao: "Minimização da coleta, proteção dos registros, controle de acesso e regras de retenção reduzem riscos de exposição indevida. Criptografia sem controle de acesso ou retenção indefinida mantêm riscos significativos."
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
    explicacao: "A média é 120/4 = 30 unidades por dia. Em 15 dias, a projeção é 30 × 15 = 450 unidades. Quem multiplica 120 × 15/4 erra a conta; quem projeta para 12 dias obtém 360."
  },
  {
    id: "q140",
    enunciado: "Em um texto narrativo, a descrição detalhada de sons, cheiros e sensações de um ambiente contribui principalmente para",
    alternativas: [
      "acelerar o ritmo narrativo pela supressão de descrições.",
      "substituir os diálogos das personagens por informações objetivas.",
      "criar ambientação e aproximar o leitor da experiência das personagens.",
      "converter a narrativa em um relatório científico experimental.",
      "eliminar qualquer possibilidade de interpretação subjetiva."
    ],
    correta: 2,
    materia: "Literatura",
    explicacao: "Detalhes sensoriais constroem a ambientação e podem aproximar o leitor das experiências das personagens, influenciando a atmosfera e o ritmo narrativo. Esse recurso enriquece a narrativa, em vez de acelerá-la ou torná-la objetiva."
  },
  {
    id: "q141",
    enunciado: "Read the text: \"The report distinguishes between correlation and causation. Two variables may change together, but that does not necessarily mean that one causes the other.\" What distinction does the text emphasize?",
    alternativas: [
      "A correlation always proves a causal relationship.",
      "Causation is identical to a mere coincidence.",
      "Variables cannot be measured through scientific methods.",
      "An association between variables does not automatically establish a causal relationship.",
      "Scientific reports should avoid discussing relationships between variables."
    ],
    correta: 3,
    materia: "Língua Inglesa",
    explicacao: "O texto explica que duas variáveis podem estar associadas sem que uma seja necessariamente a causa da outra. A alternativa que diz que correlação sempre prova causalidade contradiz diretamente o texto."
  },
  {
    id: "q142",
    enunciado: "Um aparelho transforma energia elétrica em calor com potência de 1 500 W e permanece ligado por 2 horas. Qual é o consumo de energia elétrica nesse intervalo, em kWh?",
    alternativas: [
      "0,75 kWh",
      "1,5 kWh",
      "3 kWh",
      "30 kWh",
      "3 000 kWh"
    ],
    correta: 2,
    materia: "Física",
    explicacao: "A potência é 1,5 kW. O consumo é E = Pt = 1,5 × 2 = 3 kWh. Quem não converte watts para quilowatts obtém 3 000 kWh; quem esquece de multiplicar pelo tempo obtém 1,5 kWh."
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
    explicacao: "Os resultados equiprováveis são cara-cara, cara-coroa, coroa-cara e coroa-coroa. Dois dos quatro têm exatamente uma cara: cara-coroa e coroa-cara. A probabilidade é 2/4 = 1/2. Quem conta apenas um dos dois casos obtém 1/4."
  },
  {
    id: "q144",
    enunciado: "Em uma reação de combustão completa de um hidrocarboneto, os produtos formados são, em condições usuais,",
    alternativas: [
      "carbono metálico e hidrogênio gasoso.",
      "monóxido de carbono e água, em qualquer quantidade de oxigênio.",
      "dióxido de carbono e água.",
      "dióxido de carbono e hidrogênio molecular.",
      "monóxido de carbono e oxigênio residual."
    ],
    correta: 2,
    materia: "Química",
    explicacao: "Na combustão completa de hidrocarbonetos, com oxigênio suficiente, o carbono é convertido principalmente em CO₂ e o hidrogênio em H₂O. A formação de CO indica combustão incompleta."
  },
  {
    id: "q145",
    enunciado: "A independência do Brasil, em 1822, resultou de um processo que envolveu interesses das elites locais, disputas políticas e transformações nas relações com Portugal. Uma característica do período posterior foi",
    alternativas: [
      "a implantação imediata de um regime republicano federalista.",
      "a manutenção da monarquia sob o governo de Dom Pedro I.",
      "a abolição da escravidão no mesmo ano da independência.",
      "a fragmentação do território em repúblicas independentes.",
      "a ausência de conflitos políticos durante o Primeiro Reinado."
    ],
    correta: 1,
    materia: "História",
    explicacao: "Após a independência, o Brasil manteve a monarquia e Dom Pedro I tornou-se imperador. A escravidão continuou até 1888, e o Primeiro Reinado foi marcado por conflitos políticos, como as rebeliões regionais."
  },
  {
    id: "q146",
    enunciado: "Uma bacia hidrográfica apresenta áreas urbanas, agrícolas e florestais. Para avaliar a qualidade da água de um rio, é mais adequado",
    alternativas: [
      "coletar amostras apenas durante a estação chuvosa.",
      "analisar exclusivamente os pontos de maior fluxo do rio.",
      "medir parâmetros físicos, químicos e biológicos em diferentes pontos e períodos.",
      "comparar apenas os valores de pH em uma única campanha.",
      "considerar somente as fontes industriais de poluição."
    ],
    correta: 2,
    materia: "Geografia",
    explicacao: "A qualidade da água envolve diversos parâmetros e varia espacial e temporalmente. Medições em diferentes locais e períodos ajudam a identificar fontes e padrões de contaminação, incluindo fontes urbanas e agrícolas."
  },
  {
    id: "q147",
    enunciado: "Uma organização utiliza um sistema automatizado para selecionar candidatos a vagas de emprego. Qual medida pode ajudar a identificar possíveis discriminações algorítmicas?",
    alternativas: [
      "Aumentar o volume de dados de treinamento sem verificar sua representatividade.",
      "Avaliar o desempenho do sistema em diferentes grupos e examinar critérios e dados utilizados.",
      "Substituir completamente o algoritmo por avaliação manual de todos os candidatos.",
      "Manter os critérios de seleção em sigilo para evitar manipulação externa.",
      "Utilizar apenas variáveis econômicas na análise dos currículos."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "Testes por grupos, auditoria de dados e análise dos critérios podem revelar diferenças injustificadas nos resultados e apoiar medidas de mitigação. Aumentar dados sem verificar representatividade pode ampliar vieses existentes."
  },
  {
    id: "q148",
    enunciado: "Uma função linear relaciona a distância d, em quilômetros, ao tempo t, em horas, por d(t) = 72t. Qual interpretação corresponde ao coeficiente 72?",
    alternativas: [
      "A distância inicial percorrida é de 72 km.",
      "O veículo percorre 72 km a cada hora, com velocidade constante de 72 km/h.",
      "O tempo necessário para percorrer 1 km é de 72 horas.",
      "A distância diminui 72 km a cada hora decorrida.",
      "O veículo acelera 72 km/h a cada segundo de percurso."
    ],
    correta: 1,
    materia: "Matemática",
    explicacao: "Na função d(t) = 72t, a distância é proporcional ao tempo. O coeficiente 72 representa a velocidade constante de 72 km/h. Não há distância inicial (d(0) = 0) nem aceleração envolvida."
  },
  {
    id: "q149",
    enunciado: "Leia o trecho: \"A cidade acordou apressada, engolindo passos e ruídos antes mesmo do amanhecer.\" O recurso expressivo predominante em \"A cidade acordou apressada\" é",
    alternativas: [
      "hipérbole numérica.",
      "personificação.",
      "eufemismo.",
      "comparação.",
      "pleonasmo vicioso."
    ],
    correta: 1,
    materia: "Literatura",
    explicacao: "A cidade recebe uma característica própria de seres vivos, como acordar e estar apressada. Esse recurso é personificação, também chamada prosopopeia. Não há exagero numérico (hipérbole) nem atenuação (eufemismo)."
  },
  {
    id: "q150",
    enunciado: "Uma população de plantas apresenta menor crescimento quando a disponibilidade de água diminui. Qual processo fisiológico é diretamente prejudicado pela falta de água, podendo reduzir a produção de matéria orgânica?",
    alternativas: [
      "A fotossíntese, em razão de limitações fisiológicas associadas ao estresse hídrico.",
      "A respiração celular aeróbica, pela ausência total de oxigênio nos tecidos.",
      "A mitose, pela destruição imediata de todas as células meristemáticas.",
      "A translocação de seiva pelo floema, pela inversão do fluxo de água.",
      "A fixação de nitrogênio, pela eliminação de todas as bactérias do solo."
    ],
    correta: 0,
    materia: "Biologia",
    explicacao: "A falta de água pode provocar fechamento dos estômatos e limitar a entrada de CO₂, além de afetar outros processos celulares. Isso pode reduzir a taxa fotossintética e o crescimento. As demais alternativas descrevem mecanismos inadequados."
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
    explicacao: "O total parcelado é 3 × 440 = R$ 1.320,00. A diferença é R$ 120,00, que corresponde a 120/1.200 × 100 = 10%. Quem calcula sobre o valor parcelado obtém cerca de 9,1%."
  },
  {
    id: "q152",
    enunciado: "Em um texto argumentativo, o autor apresenta uma opinião contrária à sua e, em seguida, explica por que considera seus argumentos insuficientes. Essa estratégia contribui para",
    alternativas: [
      "enfraquecer a tese principal defendida no texto.",
      "substituir a defesa da tese por uma exposição neutra de fatos.",
      "construir uma argumentação que considera objeções e procura respondê-las.",
      "demonstrar que todas as opiniões sobre o tema são igualmente válidas.",
      "converter o texto em uma narrativa sem posicionamento do autor."
    ],
    correta: 2,
    materia: "Língua Portuguesa",
    explicacao: "A apresentação e a refutação de uma objeção permitem enfrentar argumentos alternativos e fortalecer a defesa da tese, desde que a resposta seja fundamentada. Trata-se de uma estratégia retórica que antecipa críticas."
  },
  {
    id: "q153",
    enunciado: "Read the text: \"The new bus route connects three neighborhoods to the industrial district. During the first month, passenger numbers increased, but the city will continue monitoring travel times and operating costs.\" What will the city do next?",
    alternativas: [
      "Close the route due to unexpected operating costs.",
      "Stop collecting passenger data immediately.",
      "Continue evaluating travel times and operating costs.",
      "Replace all buses with alternative transportation.",
      "Publish a final report and discontinue monitoring."
    ],
    correta: 2,
    materia: "Língua Inglesa",
    explicacao: "O texto informa explicitamente que a cidade continuará monitorando os tempos de viagem e os custos operacionais. Não menciona fechamento da rota, interrupção da coleta de dados nem substituição dos ônibus."
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
    explicacao: "Na queda livre, h = gt²/2. Portanto, 20 = 5t², logo t² = 4 e t = 2 s. Quem usa h = gt (sem o 1/2) obtém t = 2 s por coincidência numérica; quem usa h = gt²/4 erra a fórmula."
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
    explicacao: "Pelo princípio da inclusão-exclusão, 18 + 14 − 6 = 26 estudantes estudam pelo menos um idioma. Assim, 30 − 26 = 4 não estudam nenhum. Quem não subtrai a interseção obtém 30 − 32, resultado inválido; quem esquece a interseção erra a conta."
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
    explicacao: "Em 12 dias ocorrem três meias-vidas (12/4 = 3). A massa restante é 10 × (1/2)³ = 10 × 1/8 = 1,25 g. Quem considera apenas uma meia-vida obtém 5 g; quem considera duas obtém 2,5 g."
  },
  {
    id: "q157",
    enunciado: "A Revolução Francesa de 1789 questionou privilégios do Antigo Regime e difundiu ideias de cidadania e igualdade jurídica. Uma contradição histórica desse processo foi",
    alternativas: [
      "a extensão plena e imediata dos direitos políticos a todos os segmentos sociais.",
      "a defesa de princípios universais de direitos coexistir com exclusões sociais e políticas.",
      "o estabelecimento de uma economia planificada sem propriedade privada.",
      "a manutenção inalterada dos privilégios feudais durante todo o período.",
      "a recusa de qualquer princípio de soberania popular."
    ],
    correta: 1,
    materia: "História",
    explicacao: "A Revolução difundiu princípios de liberdade e igualdade jurídica, mas sua aplicação foi limitada por exclusões políticas e sociais, inclusive relacionadas a gênero, propriedade e escravidão. A extensão plena e imediata não ocorreu."
  },
  {
    id: "q158",
    enunciado: "Em regiões semiáridas, a vegetação apresenta adaptações à disponibilidade limitada de água. Uma característica que pode reduzir a perda hídrica em algumas espécies é",
    alternativas: [
      "aumentar a abertura dos estômatos durante os períodos de seca.",
      "desenvolver folhas reduzidas ou estruturas que diminuam a transpiração.",
      "eliminar completamente a cutícula para aumentar as trocas gasosas.",
      "converter dióxido de carbono em água por quimiossíntese.",
      "substituir raízes profundas por raízes exclusivamente superficiais."
    ],
    correta: 1,
    materia: "Biologia",
    explicacao: "Folhas reduzidas, cutículas espessas e mecanismos de controle estomático podem diminuir a perda de água. Espécies de regiões semiáridas frequentemente apresentam raízes profundas, e não superficiais, para acessar lençóis freáticos."
  },
  {
    id: "q159",
    enunciado: "Uma pesquisa compara a distribuição de renda em duas regiões. Na região A, a renda média é elevada, mas grande parte da população recebe valores baixos. Qual indicador pode ajudar a investigar a desigualdade na distribuição da renda?",
    alternativas: [
      "O produto interno bruto total da região.",
      "O índice de Gini.",
      "A renda per capita média da população.",
      "A taxa de emprego formal registrada.",
      "A densidade demográfica do território."
    ],
    correta: 1,
    materia: "Geografia",
    explicacao: "O índice de Gini é utilizado para analisar a desigualdade de uma distribuição, incluindo a renda. A renda média ou per capita, isoladamente, não revela como os recursos estão distribuídos entre a população."
  },
  {
    id: "q160",
    enunciado: "Uma notícia informa que uma nova tecnologia de armazenamento de energia foi anunciada por uma empresa, mas ainda não passou por testes independentes em larga escala. Qual interpretação é mais adequada?",
    alternativas: [
      "Os dados internos da empresa são suficientes para validar a tecnologia.",
      "A ausência de testes em larga escala torna o produto completamente inútil.",
      "O desempenho deve ser avaliado com evidências experimentais e comparações adequadas antes de conclusões definitivas.",
      "A tecnologia é superior às alternativas existentes apenas por ser mais recente.",
      "O anúncio inicial já demonstra que a inovação é viável em qualquer cenário."
    ],
    correta: 2,
    materia: "Atualidades",
    explicacao: "Anúncios comerciais não substituem validação independente. Ensaios comparáveis, segurança, durabilidade e condições reais de operação são importantes para avaliar o desempenho antes de conclusões definitivas."
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
    explicacao: "O décimo termo é a₁₀ = 7 + 9 × 4 = 43. A soma é S₁₀ = 10 × (7 + 43)/2 = 10 × 50/2 = 250. Quem calcula a₁₀ como 7 + 10 × 4 = 47 obtém S = 270."
  },
  {
    id: "q162",
    enunciado: "Em \"A pesquisadora cujo artigo recebeu um prêmio trabalha no instituto\", o pronome \"cujo\" indica",
    alternativas: [
      "uma relação de posse ou pertencimento entre a pesquisadora e o artigo.",
      "uma indicação de tempo em que o trabalho foi realizado.",
      "uma relação de causa entre o prêmio e o emprego.",
      "uma indicação de finalidade do trabalho no instituto.",
      "uma comparação de intensidade entre dois artigos."
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
      "To prove that reusable containers are always superior to disposable ones.",
      "To measure the amount of water consumed by each student.",
      "To compare the purchase cost of different types of bottles.",
      "To evaluate the quality of the water provided by the fountains."
    ],
    correta: 0,
    materia: "Língua Inglesa",
    explicacao: "A comparação entre os níveis de resíduos antes e depois do programa ajuda a avaliar se houve mudança associada à iniciativa. O texto não menciona custo de garrafas ou qualidade da água."
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
    explicacao: "Pela lei de Ohm, I = U/R. Com tensão de 20 V e resistência de 4 Ω, a corrente é 20/4 = 5 A. Quem usa a tensão inicial (8 V) obtém 2 A; quem confunde os valores obtém outros resultados."
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
    explicacao: "A primeira e a última posições estão fixadas (7 e 3). As três posições intermediárias têm dez possibilidades cada, totalizando 10³ = 1 000 senhas. Quem não fixa as posições extremas obtém 10⁵ = 100 000."
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
    explicacao: "A destilação fracionada permite separar líquidos miscíveis com temperaturas de ebulição diferentes, aproveitando suas distintas volatilidades. Filtração e peneiração separam fases sólidas; decantação é para líquidos imiscíveis."
  },
  {
    id: "q167",
    enunciado: "A política de segregação racial institucionalizada na África do Sul durante o apartheid restringia direitos da população negra. A luta contra esse regime esteve associada",
    alternativas: [
      "à defesa da manutenção do regime segregacionista com reformas graduais.",
      "à mobilização política por igualdade de direitos e pelo fim da segregação.",
      "ao isolamento permanente da África do Sul sem qualquer negociação.",
      "à adoção de um sistema de separação voluntária entre os grupos raciais.",
      "à rejeição de qualquer forma de participação eleitoral da população."
    ],
    correta: 1,
    materia: "História",
    explicacao: "A oposição ao apartheid reuniu movimentos internos e apoio internacional em defesa da igualdade de direitos e do fim da segregação legal. Reformas graduais que mantivessem o regime não eram o objetivo dos movimentos de libertação."
  },
  {
    id: "q168",
    enunciado: "Em uma cadeia alimentar, os decompositores atuam sobre restos orgânicos e organismos mortos. Sua função ecológica mais importante é",
    alternativas: [
      "converter matéria orgânica diretamente em energia térmica utilizável.",
      "armazenar carbono em biomassa permanente sem devolvê-lo ao ambiente.",
      "reciclar nutrientes, devolvendo substâncias ao ambiente para reutilização pelos organismos.",
      "produzir energia solar por quimiossíntese em ambientes escuros.",
      "eliminar todos os patógenos e pragas do ecossistema."
    ],
    correta: 2,
    materia: "Biologia",
    explicacao: "Decompositores degradam matéria orgânica e liberam nutrientes no ambiente. Esses nutrientes podem ser reutilizados pelos produtores, mantendo os ciclos da matéria. Eles não armazenam carbono permanentemente nem produzem energia solar."
  },
  {
    id: "q169",
    enunciado: "Uma cidade pretende reduzir a dependência do automóvel em deslocamentos curtos. Qual conjunto de medidas favorece diretamente esse objetivo?",
    alternativas: [
      "Construir mais estacionamentos no centro para reduzir a congestão.",
      "Ampliar calçadas acessíveis, ciclovias conectadas e transporte público eficiente.",
      "Aumentar o limite de velocidade nas vias urbanas para melhorar o fluxo.",
      "Reduzir a frequência do transporte público para diminuir custos.",
      "Concentrar empregos em áreas distantes das zonas residenciais."
    ],
    correta: 1,
    materia: "Geografia",
    explicacao: "Infraestrutura segura para caminhar e pedalar, combinada a transporte público eficiente, pode tornar alternativas ao automóvel mais acessíveis. Estacionamentos e maiores limites de velocidade tendem a estimular o uso do carro."
  },
  {
    id: "q170",
    enunciado: "Uma plataforma de comércio eletrônico altera frequentemente a ordem dos produtos apresentados a cada consumidor. Para investigar se uma mudança de algoritmo aumentou as vendas, uma abordagem adequada seria",
    alternativas: [
      "comparar apenas o maior valor de vendas já registrado pela plataforma.",
      "atribuir qualquer aumento exclusivamente ao algoritmo, sem controlar outros fatores.",
      "realizar uma comparação controlada entre grupos ou períodos comparáveis, considerando possíveis fatores de confusão.",
      "eliminar todos os registros de compras anteriores à mudança.",
      "considerar somente os comentários positivos dos consumidores sobre a plataforma."
    ],
    correta: 2,
    materia: "Atualidades",
    explicacao: "Comparações controladas ajudam a distinguir o efeito provável do algoritmo de outros fatores, como sazonalidade, preços, publicidade e mudanças na demanda. Atribuir causalidade sem controle é um erro metodológico comum."
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
    explicacao: "A área de um triângulo é base × altura / 2. Logo, A = 18 × 10 / 2 = 90 cm². Quem esquece de dividir por 2 obtém 180 cm²; quem confunde fórmulas obtém outros valores."
  },
  {
    id: "q172",
    enunciado: "Em um relatório, o autor utiliza a expressão \"o custo ambiental da produção\" para reunir diversos impactos, como poluição, consumo de água e perda de habitats. O uso de \"custo\" nesse contexto",
    alternativas: [
      "é necessariamente literal e se limita a pagamentos monetários.",
      "pode ampliar o sentido da palavra, aplicando-a figurativamente aos impactos ambientais.",
      "indica exclusivamente uma operação matemática de cálculo financeiro.",
      "elimina qualquer relação entre produção industrial e meio ambiente.",
      "constitui sempre um erro de regência verbal do verbo associado."
    ],
    correta: 1,
    materia: "Língua Portuguesa",
    explicacao: "A palavra \"custo\" é ampliada para incluir consequências ambientais, não apenas despesas financeiras. Esse uso figurado (conotativo) contribui para expressar os impactos da produção de forma mais abrangente."
  },
  {
    id: "q173",
    enunciado: "Read the text: \"The software is open source, so users can inspect its code under the applicable license. However, installing it still requires checking compatibility and security updates.\" What does the text imply?",
    alternativas: [
      "Open-source software never requires maintenance or updates.",
      "The source code of open-source programs cannot be examined by users.",
      "An open-source license eliminates every security risk automatically.",
      "Code accessibility does not eliminate the need to assess compatibility and updates.",
      "All open-source programs are incompatible with standard operating systems."
    ],
    correta: 3,
    materia: "Língua Inglesa",
    explicacao: "O texto reconhece a possibilidade de examinar o código, mas ressalta que compatibilidade e atualizações de segurança continuam importantes. O \"however\" marca essa ressalva central."
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
    explicacao: "Temos 1/20 = 1/60 + 1/p'. Assim, 1/p' = 1/20 − 1/60 = 3/60 − 1/60 = 2/60 = 1/30, portanto p' = 30 cm. Quem inverte os sinais obtém 15 cm; quem confunde com a distância focal obtém 20 cm."
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
    explicacao: "Os múltiplos de 2 são 2, 4, 6, 8 e 10; os de 3 são 3, 6 e 9. A união contém {2, 3, 4, 6, 8, 9, 10} = 7 números distintos (o 6 aparece nas duas listas, mas conta uma vez). A probabilidade é 7/10. Quem soma sem descontar a interseção obtém 8/10 = 4/5."
  },
  {
    id: "q176",
    enunciado: "Em uma transformação química, um catalisador aumenta a rapidez da reação sem ser consumido globalmente no processo. Isso ocorre principalmente porque ele",
    alternativas: [
      "aumenta a energia total liberada pela reação química.",
      "fornece um caminho reacional alternativo com menor energia de ativação.",
      "desloca o equilíbrio químico no sentido da formação de produtos.",
      "aumenta a temperatura do sistema por fricção molecular.",
      "é incorporado permanentemente à estrutura dos produtos."
    ],
    correta: 1,
    materia: "Química",
    explicacao: "O catalisador oferece um mecanismo alternativo com menor energia de ativação, aumentando a velocidade da reação. Ele não altera a constante de equilíbrio a temperatura fixa nem modifica a variação de entalpia da reação."
  },
  {
    id: "q177",
    enunciado: "A crise econômica de 1929 teve repercussões internacionais e afetou profundamente a economia brasileira, fortemente ligada à exportação de café. Uma consequência foi",
    alternativas: [
      "o aumento da demanda internacional por produtos agrícolas brasileiros.",
      "a consolidação definitiva do modelo exclusivamente agrário-exportador.",
      "a pressão sobre o setor cafeeiro e o estímulo a mudanças na orientação econômica.",
      "a retirada completa do Estado de qualquer atuação no domínio econômico.",
      "a estagnação definitiva da industrialização brasileira."
    ],
    correta: 2,
    materia: "História",
    explicacao: "A crise reduziu a demanda e os preços internacionais, afetando a economia cafeeira. O período contribuiu para mudanças nas políticas econômicas e para transformações na industrialização brasileira, em vez de estagná-la."
  },
  {
    id: "q178",
    enunciado: "O lançamento de esgoto rico em nutrientes em um lago pode estimular a proliferação de algas. A decomposição da matéria orgânica produzida pode reduzir o oxigênio dissolvido e prejudicar peixes. Esse fenômeno está relacionado à",
    alternativas: [
      "eutrofização.",
      "bioacumulação.",
      "desertificação.",
      "fossilização.",
      "neutralização ácido-base."
    ],
    correta: 0,
    materia: "Biologia",
    explicacao: "O enriquecimento excessivo de nutrientes (eutrofização) favorece florações de algas. A decomposição da matéria orgânica consome oxigênio e pode provocar hipóxia e mortalidade de organismos aquáticos. Bioacumulação refere-se à concentração de poluentes na cadeia alimentar."
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
    explicacao: "A densidade demográfica é a população dividida pela área: 240 000/800 = 300 habitantes por quilômetro quadrado. Quem usa 240/8 obtém 30; quem confunde população com densidade obtém 240."
  },
  {
    id: "q180",
    enunciado: "Um município publica um conjunto de dados sobre gastos públicos em formato que permite download, processamento e reutilização. Para que a iniciativa fortaleça a transparência, é importante que os dados",
    alternativas: [
      "sejam divulgados sem qualquer documentação ou definição de variáveis.",
      "permaneçam disponíveis apenas em formato proprietário e de difícil acesso.",
      "sejam acessíveis, atualizados e acompanhados de informações que permitam interpretá-los.",
      "sejam alterados sem registro público das mudanças realizadas.",
      "excluam metodologia e fontes para simplificar a apresentação."
    ],
    correta: 2,
    materia: "Atualidades",
    explicacao: "Dados abertos são mais úteis quando acessíveis, reutilizáveis, atualizados e acompanhados de documentação. A contextualização permite interpretar corretamente os valores divulgados e comparar com outros períodos."
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
    explicacao: "O sexto termo é a₆ = a₁ × q⁵ = 3 × 2⁵ = 3 × 32 = 96. Quem usa q⁶ obtém 192; quem usa q⁴ obtém 48; quem calcula apenas 2⁵ obtém 32."
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
    explicacao: "A estrutura \"tão ... quanto\" estabelece uma comparação de intensidade ou modo entre o trabalho da equipe e o padrão exigido pelo protocolo. Não expressa causa, oposição, conclusão ou finalidade."
  },
  {
    id: "q183",
    enunciado: "Read the text: \"After the city replaced several streetlights with efficient models, electricity use in those locations fell by 35%. The report notes that the comparison covers only the selected streets.\" What limitation should readers recognize?",
    alternativas: [
      "The reported reduction cannot apply automatically to every street in the city.",
      "Electricity use increased by 35% in the rest of the city.",
      "The report does not contain any numerical information.",
      "Efficient lighting technology never reduces energy consumption.",
      "The selected streets were excluded from the city's power grid."
    ],
    correta: 0,
    materia: "Língua Inglesa",
    explicacao: "O relatório limita a comparação às ruas selecionadas. Generalizar o resultado para toda a cidade exigiria dados adicionais. A alternativa sobre aumento de 35% nas demais ruas não é sustentada pelo texto."
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
    explicacao: "Pela relação Q = mcΔT, temos ΔT = Q/(mc) = 42/(2 × 4,2) = 42/8,4 = 5 °C. Quem divide 42 por 4,2 obtém 10; quem usa o valor numérico do calor obtém 42."
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
    explicacao: "Basta escolher qual das seis posições conterá o único algarismo 1. Há C(6,1) = 6 escolhas possíveis. Quem considera dois algarismos 1 obtém C(6,2) = 15; quem conta todos os códigos possíveis obtém 2⁶ = 64."
  },
  {
    id: "q186",
    enunciado: "Uma amostra de gás ideal sofre uma transformação isotérmica, mantendo constante a temperatura. Se o volume diminui à metade, a pressão final, em relação à inicial, será",
    alternativas: [
      "metade da pressão inicial.",
      "igual à pressão inicial.",
      "o dobro da pressão inicial.",
      "quatro vezes a pressão inicial.",
      "nula, pois o gás foi totalmente comprimido."
    ],
    correta: 2,
    materia: "Física",
    explicacao: "Em uma transformação isotérmica de uma quantidade fixa de gás ideal (lei de Boyle), pressão e volume são inversamente proporcionais: PV = constante. Reduzir o volume à metade duplica a pressão."
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
    explicacao: "A massa é a concentração multiplicada pelo volume: 25 mg/L × 4 L = 100 mg. Quem divide em vez de multiplicar obtém 6,25 mg; quem esquece o volume obtém 25 mg."
  },
  {
    id: "q188",
    enunciado: "A urbanização brasileira esteve associada a processos de industrialização, migração e concentração de atividades econômicas. O crescimento de cidades médias em determinadas regiões pode ser explicado, entre outros fatores,",
    alternativas: [
      "pelo crescimento exclusivo da agricultura de subsistência na região.",
      "pela desconcentração de algumas atividades e pela ampliação de serviços regionais.",
      "pela transferência de todas as funções administrativas para as capitais.",
      "pela redução da importância do setor terciário nas economias locais.",
      "pelo isolamento completo em relação aos circuitos econômicos regionais."
    ],
    correta: 1,
    materia: "Geografia",
    explicacao: "Cidades médias podem crescer quando atividades econômicas e serviços se distribuem para além das grandes metrópoles, fortalecendo sua função como centros regionais de comércio, saúde, educação e administração."
  },
  {
    id: "q189",
    enunciado: "Uma campanha de saúde divulga uma taxa de ocorrência de doença sem informar o tamanho da população observada nem o período analisado. Qual é a principal limitação dessa informação?",
    alternativas: [
      "A taxa é válida mesmo sem contexto, pois números sempre falam por si.",
      "Não é possível interpretar adequadamente a medida sem conhecer sua base populacional e seu intervalo temporal.",
      "O número absoluto de casos é suficiente para comparar regiões de tamanhos diferentes.",
      "O período de coleta não interfere na interpretação de dados epidemiológicos.",
      "A ausência de dados complementares torna a taxa completamente inútil em qualquer cenário."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "Taxas dependem de uma população de referência e de um período definidos. Sem esses dados, comparações e interpretações podem ser enganosas. A alternativa que diz que a taxa é \"completamente inútil\" é demasiadamente categórica."
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
    explicacao: "A área do círculo é A = πr². Assim, A = 3,14 × 6² = 3,14 × 36 = 113,04 cm². Quem calcula 2πr (comprimento) obtém 37,68; quem calcula πr²/2 obtém 56,52; quem dobra a área obtém 226,08."
  },
  {
    id: "q191",
    enunciado: "Assinale a alternativa em que a pontuação contribui corretamente para isolar uma explicação intercalada.",
    alternativas: [
      "O laboratório, que foi reformado recentemente, recebeu novos equipamentos.",
      "O laboratório que foi reformado recentemente, recebeu novos equipamentos.",
      "O laboratório, que foi reformado recentemente recebeu novos equipamentos.",
      "O laboratório que, foi reformado recentemente, recebeu novos equipamentos.",
      "O laboratório que foi reformado, recentemente, recebeu novos equipamentos."
    ],
    correta: 0,
    materia: "Língua Portuguesa",
    explicacao: "A oração explicativa \"que foi reformado recentemente\" deve ser isolada por vírgulas (uma antes e uma depois). A alternativa A delimita corretamente essa intercalação. As demais apresentam vírgulas em posições que fragmentam indevidamente a oração."
  },
  {
    id: "q192",
    enunciado: "Read the text: \"The research team published its data and methods so that other scientists could examine the results. Several groups later repeated the experiment and reported similar findings.\" What does this example illustrate?",
    alternativas: [
      "Scientific findings should be kept confidential until fully proven.",
      "Sharing methods and data can support independent verification.",
      "Repeated experiments always produce contradictory results.",
      "Only the original research team can evaluate its own findings.",
      "Publication alone guarantees that every result is correct."
    ],
    correta: 1,
    materia: "Língua Inglesa",
    explicacao: "A divulgação de métodos e dados permite que outros pesquisadores avaliem e reproduzam procedimentos, fortalecendo a verificação independente dos resultados. O texto relata que outros grupos obtiveram resultados semelhantes após repetir o experimento."
  },
  {
    id: "q193",
    enunciado: "Uma onda sonora passa de um meio para outro no qual sua velocidade de propagação é diferente. Ao atravessar a interface, a frequência permanece determinada pela fonte e, portanto, mantém-se constante. Se a velocidade aumenta, o comprimento de onda",
    alternativas: [
      "diminui na mesma proporção.",
      "permanece necessariamente constante.",
      "aumenta na mesma proporção.",
      "torna-se igual a zero.",
      "passa a depender exclusivamente da amplitude."
    ],
    correta: 2,
    materia: "Física",
    explicacao: "Como v = λf e a frequência não muda na passagem entre meios, o comprimento de onda é diretamente proporcional à velocidade: λ = v/f. Se v aumenta, λ aumenta proporcionalmente."
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
    explicacao: "Os múltiplos de 4 são 4, 8, 12, 16 e 20 (5 números); os de 5 são 5, 10, 15 e 20 (4 números). O 20 aparece nas duas listas. A união contém 5 + 4 − 1 = 8 números distintos. A probabilidade é 8/20 = 2/5. Quem não desconta a interseção obtém 9/20."
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
    explicacao: "O número atômico indica 17 prótons. Como o átomo é neutro, há 17 elétrons. O número de nêutrons é o número de massa menos o atômico: 35 − 17 = 18. As alternativas que trocam elétrons por nêutrons confundem as partículas subatômicas."
  },
  {
    id: "q196",
    enunciado: "O movimento abolicionista brasileiro contou com a atuação de pessoas negras, associações, jornais, fugas e outras formas de resistência. Essa perspectiva histórica destaca que",
    alternativas: [
      "o fim da escravidão resultou exclusivamente de decisões individuais da monarquia.",
      "a população escravizada permaneceu passiva durante todo o processo.",
      "diferentes atores sociais e formas de mobilização contribuíram para o processo abolicionista.",
      "as campanhas abolicionistas começaram somente após a Lei Áurea.",
      "a abolição ocorreu sem resistência das elites econômicas."
    ],
    correta: 2,
    materia: "História",
    explicacao: "O abolicionismo envolveu mobilizações diversas, incluindo resistência de pessoas escravizadas, atuação de abolicionistas e pressões políticas e econômicas. A ideia de que a população escravizada foi apenas passiva desconsidera fugas, rebeliões e organizações."
  },
  {
    id: "q197",
    enunciado: "Em um ecossistema, o desaparecimento de uma espécie polinizadora pode reduzir a reprodução de plantas que dependem dela. Uma consequência possível é",
    alternativas: [
      "aumento da produtividade das plantas dependentes de polinização.",
      "alteração das interações ecológicas e redução da produção de sementes de certas espécies vegetais.",
      "estabilização das cadeias alimentares independentemente da espécie perdida.",
      "substituição automática por polinizadores nativos não afetados.",
      "aumento da taxa de fotossíntese em todas as plantas do ecossistema."
    ],
    correta: 1,
    materia: "Biologia",
    explicacao: "A perda de polinizadores pode reduzir a transferência de pólen e a reprodução de plantas dependentes, afetando também organismos que utilizam seus frutos e sementes. A substituição por outros polinizadores não é automática nem garantida."
  },
  {
    id: "q198",
    enunciado: "Uma indústria pretende reduzir a geração de resíduos e o consumo de matéria-prima. Qual estratégia está mais alinhada aos princípios da economia circular?",
    alternativas: [
      "Aumentar a obsolescência dos produtos para acelerar o ciclo de vendas.",
      "Projetar produtos para maior durabilidade, reparo e reutilização de materiais.",
      "Misturar todos os resíduos para simplificar a logística de descarte.",
      "Priorizar o descarte imediato de produtos ainda funcionais.",
      "Concentrar esforços exclusivamente na reciclagem final dos materiais."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "A economia circular procura manter produtos e materiais em uso pelo maior tempo possível, favorecendo durabilidade, reparo, reutilização e recuperação de recursos. A obsolescência e o descarte rápido são características do modelo linear."
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
    explicacao: "Substituindo x = 4, obtém-se f(4) = 3 × 2⁴ = 3 × 16 = 48. Quem calcula 3 × 2 × 4 obtém 24; quem calcula apenas 2⁴ obtém 16 (não listado); quem calcula 4³ obtém 64."
  },
  {
    id: "q200",
    enunciado: "Um texto de revista descreve uma fila de atendimento e utiliza humor para revelar a burocracia cotidiana. A combinação entre uma situação comum e uma observação crítica, com linguagem próxima da experiência do leitor, é característica que pode aproximar o texto do gênero",
    alternativas: [
      "editorial jornalístico.",
      "crônica.",
      "ensaio acadêmico.",
      "reportagem investigativa.",
      "verbete enciclopédico."
    ],
    correta: 1,
    materia: "Literatura",
    explicacao: "A crônica frequentemente parte de situações cotidianas para construir reflexão, humor ou crítica social, utilizando linguagem próxima da experiência comum. O editorial tem tom mais formal e institucional; o ensaio é mais analítico e abstrato."
  },
  {
    id: "q201",
    enunciado: "Uma fábrica produz 480 peças em 6 horas, mantendo ritmo constante. Após uma melhoria, sua produtividade aumenta em 25%. Quantas peças serão produzidas em 8 horas no novo ritmo?",
    alternativas: [
      "640",
      "720",
      "800",
      "880",
      "960"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "O ritmo inicial é 480/6 = 80 peças por hora. Com aumento de 25%, passa a 80 × 1,25 = 100 peças por hora. Em 8 horas, serão produzidas 800 peças. Quem mantém o ritmo inicial obtém 640; quem aplica 25% sobre 8 horas obtém 960."
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
    explicacao: "\"Entretanto\" é uma conjunção adversativa que apresenta uma ressalva: anunciar medidas não garante, por si só, os resultados esperados. A segunda oração limita a expectativa criada pela primeira."
  },
  {
    id: "q203",
    enunciado: "Read the text: \"The city tested electric buses on two routes. The vehicles produced no exhaust emissions during operation, although the overall environmental impact also depends on electricity generation and battery production.\" Which statement best reflects the text?",
    alternativas: [
      "Electric buses have no environmental impact at any stage.",
      "The trial demonstrated that electric buses are always cleaner than diesel buses.",
      "The environmental impact of electric buses must be assessed beyond their operation.",
      "The city has already replaced its entire bus fleet with electric vehicles.",
      "Battery production is the only factor relevant to the environmental assessment."
    ],
    correta: 2,
    materia: "Língua Inglesa",
    explicacao: "O texto distingue emissões durante a operação dos impactos associados à geração de eletricidade e à fabricação das baterias. A avaliação ambiental precisa considerar essas etapas além do uso direto dos veículos."
  },
  {
    id: "q204",
    enunciado: "Uma máquina realiza 18 000 J de trabalho em 60 segundos. Se a potência média permanecer constante, quanto trabalho ela realizará em 2 minutos?",
    alternativas: [
      "9 000 J",
      "18 000 J",
      "27 000 J",
      "36 000 J",
      "45 000 J"
    ],
    correta: 3,
    materia: "Física",
    explicacao: "A potência média é 18 000/60 = 300 W. Em 120 segundos (2 minutos), o trabalho será 300 × 120 = 36 000 J. Quem usa apenas 60 s obtém 18 000; quem dobra o tempo mas não o trabalho obtém outros valores."
  },
  {
    id: "q205",
    enunciado: "Uma pessoa escolhe aleatoriamente um número inteiro de 1 a 30. Qual é a probabilidade de o número ser múltiplo de 3, mas não ser múltiplo de 2?",
    alternativas: [
      "1/6",
      "1/5",
      "1/3",
      "2/5",
      "7/30"
    ],
    correta: 0,
    materia: "Lógica",
    explicacao: "Os múltiplos de 3 entre 1 e 30 são 3, 6, 9, 12, 15, 18, 21, 24, 27 e 30. Destes, os ímpares (não múltiplos de 2) são 3, 9, 15, 21 e 27 — cinco resultados favoráveis. A probabilidade é 5/30 = 1/6. Quem não exclui os múltiplos de 2 obtém 10/30 = 1/3."
  },
  {
    id: "q206",
    enunciado: "Em uma reação de neutralização completa entre ácido clorídrico e hidróxido de sódio, os produtos formados são",
    alternativas: [
      "cloreto de sódio e hidrogênio gasoso.",
      "cloreto de sódio e água.",
      "hidróxido de sódio e ácido hipocloroso.",
      "hipoclorito de sódio e gás hidrogênio.",
      "sódio metálico e ácido clorídrico diluído."
    ],
    correta: 1,
    materia: "Química",
    explicacao: "A reação HCl + NaOH → NaCl + H₂O produz cloreto de sódio e água. A alternativa com hidrogênio gasoso confunde neutralização com reação de metal com ácido; hipoclorito é produto de outras reações."
  },
  {
    id: "q207",
    enunciado: "O processo de descolonização afro-asiática intensificou-se após a Segunda Guerra Mundial. Entre os fatores que contribuíram para esse processo, destaca-se",
    alternativas: [
      "o fortalecimento dos impérios coloniais pela reconstrução europeia.",
      "a expansão de movimentos nacionalistas e a contestação do domínio colonial.",
      "o apoio das potências coloniais à autodeterminação imediata das colônias.",
      "a estagnação econômica global que reduziu o valor das colônias.",
      "o desaparecimento das rivalidades entre as potências europeias."
    ],
    correta: 1,
    materia: "História",
    explicacao: "Movimentos nacionalistas, transformações na ordem internacional e o enfraquecimento de potências coloniais contribuíram para processos de independência na Ásia e na África. As potências coloniais não apoiaram voluntariamente a autodeterminação."
  },
  {
    id: "q208",
    enunciado: "Em uma área urbana, a instalação de corredores exclusivos para ônibus reduz o tempo de viagem e aumenta a regularidade do transporte coletivo. Qual efeito social pode decorrer dessa medida?",
    alternativas: [
      "Aumento da dependência do transporte individual para trajetos curtos.",
      "Redução da demanda por transporte público pela maior concorrência.",
      "Melhoria potencial do acesso a empregos e serviços para pessoas que dependem do transporte coletivo.",
      "Transferência automática de usuários do transporte coletivo para o automóvel.",
      "Concentração dos investimentos públicos exclusivamente no transporte rodoviário."
    ],
    correta: 2,
    materia: "Geografia",
    explicacao: "Um transporte coletivo mais rápido e previsível pode melhorar o acesso a oportunidades urbanas, especialmente para quem depende dele. Os resultados também dependem da cobertura e da integração da rede de transporte."
  },
  {
    id: "q209",
    enunciado: "Uma instituição passa a disponibilizar seus serviços exclusivamente por aplicativo. Qual medida pode reduzir o risco de exclusão de pessoas com acesso limitado à internet ou pouca familiaridade digital?",
    alternativas: [
      "Aumentar a velocidade mínima exigida de conexão para melhorar a experiência.",
      "Oferecer acessibilidade, orientação aos usuários e canais de atendimento complementares.",
      "Concentrar recursos no desenvolvimento de novas funcionalidades do aplicativo.",
      "Reduzir a equipe de suporte para incentivar a autossuficiência dos usuários.",
      "Padronizar o atendimento exclusivamente pelo aplicativo para garantir uniformidade."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "A inclusão digital exige considerar acesso, acessibilidade e competências de uso. Canais alternativos e suporte podem reduzir barreiras para pessoas com diferentes condições tecnológicas e de conectividade."
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
    explicacao: "O volume é V = πr²h = 3,14 × 4 × 3 = 37,68 m³. Como 1 m³ equivale a 1 000 L, a capacidade é 37 680 L. Quem usa 2r em vez de r² obtém outros valores; quem esquece a conversão para litros obtém 37,68."
  },
  {
    id: "q211",
    enunciado: "Em \"Se os resultados forem confirmados, a equipe publicará o relatório\", a oração iniciada por \"Se\" expressa",
    alternativas: [
      "uma condição.",
      "uma conclusão já comprovada.",
      "uma oposição entre duas ideias.",
      "uma comparação de igualdade.",
      "uma explicação de causa já ocorrida."
    ],
    correta: 0,
    materia: "Língua Portuguesa",
    explicacao: "\"Se os resultados forem confirmados\" apresenta a condição para a publicação do relatório. Trata-se de uma oração subordinada adverbial condicional, e não de oposição, comparação ou explicação."
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
    explicacao: "O texto apresenta o ensino de técnicas de reparo e de procedimentos básicos de segurança como objetivos da oficina. A prática supervisionada com equipamentos próprios refuta a ideia de impedir o manuseio."
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
    explicacao: "A força resultante tem módulo 30 − 10 = 20 N. Pela segunda lei de Newton, a = 20/5 = 4 m/s². Quem soma as forças (40 N) obtém 8 m/s²; quem divide 30 por 5 obtém 6 m/s²."
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
    explicacao: "Como a ordem não importa, utiliza-se a combinação C(8,3) = 8!/(3!×5!) = 56. Quem usa permutação obtém 336; quem calcula 2×C(8,3) obtém 112; quem usa 8×3 obtém 24."
  },
  {
    id: "q215",
    enunciado: "A velocidade de uma reação química pode aumentar quando a temperatura é elevada. Segundo a teoria das colisões, isso ocorre principalmente porque",
    alternativas: [
      "a energia de ativação da reação diminui com o aumento da temperatura.",
      "o número total de moléculas do reagente aumenta no sistema.",
      "uma fração maior das partículas pode realizar colisões com energia suficiente para superar a barreira de ativação.",
      "todas as colisões entre partículas passam a ser efetivas acima de certa temperatura.",
      "a constante de equilíbrio da reação é necessariamente alterada pela temperatura."
    ],
    correta: 2,
    materia: "Química",
    explicacao: "O aumento da temperatura eleva a energia cinética média e a fração de partículas com energia suficiente para superar a energia de ativação, aumentando a frequência de colisões efetivas. A energia de ativação não diminui — apenas mais partículas a superam."
  },
  {
    id: "q216",
    enunciado: "A crise do sistema colonial português no Brasil, no final do século XVIII, esteve relacionada a movimentos que questionavam aspectos da dominação metropolitana. A Inconfidência Mineira, por exemplo, foi influenciada",
    alternativas: [
      "por ideias iluministas e pela insatisfação com a política fiscal portuguesa.",
      "pela defesa de ampliar a cobrança de impostos sobre a extração aurífera.",
      "pela intenção de restaurar o domínio holandês sobre a Capitania de Minas.",
      "pela aliança entre a Coroa portuguesa e os mineradores locais.",
      "pela proposta de transferir a capital colonial para Vila Rica."
    ],
    correta: 0,
    materia: "História",
    explicacao: "A Inconfidência Mineira foi influenciada por ideias iluministas e pelo descontentamento de setores locais com a tributação e a administração colonial portuguesa. Não havia proposta de restaurar domínios estrangeiros nem de ampliar impostos."
  },
  {
    id: "q217",
    enunciado: "Em áreas costeiras, a construção de edificações sobre dunas pode alterar o transporte natural de areia e aumentar a vulnerabilidade da faixa litorânea. Uma medida de planejamento adequada é",
    alternativas: [
      "permitir construções sem avaliar a dinâmica costeira, desde que haja licenciamento.",
      "substituir as dunas por muros de contenção em toda a extensão do litoral.",
      "considerar a dinâmica sedimentar e estabelecer restrições de ocupação em áreas vulneráveis.",
      "impermeabilizar a superfície das dunas para evitar a erosão pelo vento.",
      "realocar toda a população para o interior, independentemente do risco."
    ],
    correta: 2,
    materia: "Geografia",
    explicacao: "Dunas e praias participam de sistemas dinâmicos de transporte de sedimentos. O planejamento deve considerar essa dinâmica e limitar ocupações em áreas sujeitas a erosão e instabilidade, em vez de apenas construir barreiras artificiais."
  },
  {
    id: "q218",
    enunciado: "Um sistema de inteligência artificial gera um texto convincente, mas apresenta referências que não correspondem a publicações reais. Qual prática é mais adequada antes de utilizar o material em um trabalho acadêmico?",
    alternativas: [
      "Aceitar as referências porque o texto apresenta linguagem técnica adequada.",
      "Verificar a existência e a pertinência das fontes e conferir as afirmações relevantes.",
      "Substituir as referências por fontes encontradas rapidamente em buscas automáticas.",
      "Publicar o texto com uma nota explicando que foi gerado por inteligência artificial.",
      "Remover apenas as referências bibliográficas, mantendo todas as afirmações."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "Textos gerados automaticamente podem conter referências incorretas ou afirmações não verificadas. Conferir fontes e evidências é essencial antes de utilizar o conteúdo academicamente. Remover referências não resolve afirmações incorretas."
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
    explicacao: "Resolvendo 2x − 7 = 15, obtemos 2x = 22 e x = 11. Quem esquece de subtrair 7 obtém x = 7,5 (não listado); quem soma 7 em vez de subtrair obtém outros valores."
  },
  {
    id: "q220",
    enunciado: "Em um conto, um narrador relata os pensamentos de apenas uma personagem e desconhece informações que ela própria não conhece. Essa perspectiva narrativa é compatível com",
    alternativas: [
      "um narrador com focalização limitada à experiência da personagem.",
      "um narrador onisciente que conhece todos os acontecimentos simultaneamente.",
      "uma narrativa em primeira pessoa obrigatoriamente autobiográfica.",
      "um texto descritivo sem qualquer ponto de vista definido.",
      "um narrador impessoal que não apresenta percepções subjetivas."
    ],
    correta: 0,
    materia: "Literatura",
    explicacao: "A focalização limitada restringe o acesso do leitor às informações e percepções disponíveis à personagem focalizada, diferentemente de uma perspectiva onisciente ampla. A narrativa não precisa ser em primeira pessoa nem autobiográfica."
  },
  {
    id: "q221",
    enunciado: "Read the text: \"The survey found that 60% of respondents preferred online appointments. However, the sample included only people who had already used the digital service.\" What is a limitation of the survey?",
    alternativas: [
      "The result cannot be expressed as a percentage.",
      "The sample may not represent people who have never used the digital service.",
      "The survey proves that every resident prefers online appointments.",
      "The respondents were necessarily all experienced internet users.",
      "The survey contains no information about scheduling preferences."
    ],
    correta: 1,
    materia: "Língua Inglesa",
    explicacao: "Como a amostra inclui apenas usuários anteriores do serviço digital, pode não representar adequadamente pessoas que nunca utilizaram essa modalidade, introduzindo um viés de seleção."
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
    explicacao: "O período é o inverso da frequência: T = 1/f = 1/25 = 0,04 s. Quem calcula 1/100 obtém 0,01 s; quem confunde com o comprimento de onda (100/25 = 4) obtém 4 s."
  },
  {
    id: "q223",
    enunciado: "Em uma caixa há 6 peças vermelhas e 4 azuis. Duas peças são retiradas sem reposição. Qual é a probabilidade de a primeira ser vermelha e a segunda ser azul?",
    alternativas: [
      "2/15",
      "4/15",
      "1/3",
      "8/25",
      "3/5"
    ],
    correta: 1,
    materia: "Lógica",
    explicacao: "A probabilidade é (6/10) × (4/9) = 24/90 = 4/15. Quem considera reposição obtém (6/10) × (4/10) = 24/100 = 8/25; quem erra a ordem ou as quantidades obtém outros resultados."
  },
  {
    id: "q224",
    enunciado: "Uma amostra de 50 g de uma solução contém 5 g de soluto. Adicionam-se 50 g de água, sem perda de matéria. Qual passa a ser a porcentagem em massa do soluto?",
    alternativas: [
      "2,5%",
      "5%",
      "7,5%",
      "10%",
      "20%"
    ],
    correta: 1,
    materia: "Química",
    explicacao: "A massa de soluto permanece em 5 g e a massa total passa a 100 g. A porcentagem em massa é 5/100 × 100 = 5%. Quem calcula sobre a massa de água adicionada obtém 10%; quem não atualiza o total obtém 10% (5/50)."
  },
  {
    id: "q225",
    enunciado: "A Guerra Fria influenciou conflitos regionais em diferentes partes do mundo. Uma característica dessa influência foi",
    alternativas: [
      "a redução das disputas ideológicas entre as superpotências.",
      "o apoio político, econômico ou militar a grupos e governos alinhados a diferentes blocos.",
      "a proibição de alianças internacionais durante todo o período.",
      "a eliminação de qualquer competição tecnológica entre os blocos.",
      "a concentração dos conflitos exclusivamente no território europeu."
    ],
    correta: 1,
    materia: "História",
    explicacao: "Estados Unidos e União Soviética buscaram ampliar sua influência por meio de alianças, apoio a governos e movimentos e intervenções em conflitos regionais em diversos continentes, não apenas na Europa."
  },
  {
    id: "q226",
    enunciado: "A expansão de espécies exóticas invasoras pode comprometer a biodiversidade local. Uma razão para isso é que algumas dessas espécies",
    alternativas: [
      "não conseguem se adaptar a ambientes naturais fora de seu habitat de origem.",
      "podem competir por recursos e alterar interações ecológicas.",
      "eliminam obrigatoriamente todas as espécies nativas em poucos anos.",
      "não estabelecem qualquer relação com organismos nativos.",
      "reduzem sempre a população de predadores locais."
    ],
    correta: 1,
    materia: "Biologia",
    explicacao: "Espécies invasoras podem competir por alimento e espaço, predar espécies nativas ou modificar habitats. Os efeitos dependem das características da espécie e do ecossistema; a eliminação total de todas as espécies não é obrigatória."
  },
  {
    id: "q227",
    enunciado: "Uma região industrial apresenta aumento da população e expansão de bairros residenciais próximos às fábricas. Qual questão deve ser considerada no planejamento territorial?",
    alternativas: [
      "A localização de moradias, fontes de poluição, serviços públicos e redes de transporte.",
      "A eliminação de qualquer regra de uso do solo para acelerar o crescimento.",
      "A impossibilidade de ocorrer conflito entre atividades industriais e residenciais.",
      "A irrelevância da qualidade do ar para a saúde pública.",
      "A proibição de qualquer monitoramento ambiental na região."
    ],
    correta: 0,
    materia: "Geografia",
    explicacao: "O planejamento territorial deve compatibilizar usos do solo e considerar exposição à poluição, acesso a serviços, transporte e qualidade de vida. Ignorar esses fatores pode agravar conflitos entre usos do solo."
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
    explicacao: "Afirmações ambientais vagas e sem evidências verificáveis podem caracterizar comunicação enganosa ou greenwashing. Critérios claros e dados confiáveis permitem avaliar a alegação de forma independente."
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
    explicacao: "A sequência é uma progressão aritmética de razão 3. O oitavo termo é 5 + 7 × 3 = 26. Quem usa 8 saltos em vez de 7 obtém 29; quem conta 6 saltos obtém 23."
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
    explicacao: "O contexto histórico e cultural ajuda a compreender temas e escolhas estéticas, mas deve ser articulado à análise da linguagem e da organização interna da obra. Não determina interpretações únicas nem substitui a análise textual."
  },
  {
    id: "q231",
    enunciado: "Uma empresa compra matéria-prima por R$ 24,00 a unidade e vende o produto por R$ 40,00. Se os demais custos fixos do período totalizam R$ 3.200,00, quantas unidades precisam ser vendidas para atingir o ponto de equilíbrio?",
    alternativas: [
      "100",
      "150",
      "200",
      "250",
      "320"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "A margem de contribuição por unidade é 40 − 24 = R$ 16,00. O ponto de equilíbrio é 3.200/16 = 200 unidades. Quem usa o preço de venda como divisor obtém 80; quem usa o custo da matéria-prima obtém 3.200/24 ≈ 133."
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
    explicacao: "A expressão concessiva reconhece a existência de restrições orçamentárias, mas indica que elas não impediram a aprovação do projeto. Não expressa finalidade, comparação ou condição."
  },
  {
    id: "q233",
    enunciado: "Read the text: \"The research team compared three water filters. All reduced visible particles, but only two met the stated standard for removing the tested microorganisms.\" What is the most accurate conclusion?",
    alternativas: [
      "All three filters were equally effective against microorganisms.",
      "None of the filters reduced visible particles.",
      "The filter that failed the microorganism test also failed to reduce visible particles.",
      "Reducing visible particles does not necessarily mean meeting the tested microorganism-removal standard.",
      "The study did not compare any filters."
    ],
    correta: 3,
    materia: "Língua Inglesa",
    explicacao: "O texto distingue a remoção de partículas visíveis do atendimento ao padrão de remoção dos microrganismos testados. Todos reduziram partículas visíveis, mas apenas dois atenderam ao padrão microbiológico."
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
    explicacao: "Em uma superfície horizontal, a normal é N = mg = 10 × 10 = 100 N. A força de atrito cinético é Fat = μN = 0,2 × 100 = 20 N. Quem usa μ × m obtém 2 N; quem usa N diretamente obtém 100 N."
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
    explicacao: "Há quatro opções para a primeira posição, pois o zero é proibido. Restam quatro opções para a segunda (incluindo o zero) e três para a terceira: 4 × 4 × 3 = 48. Quem proíbe zero em qualquer posição obtém 4 × 3 × 2 = 24; quem permite repetição obtém 4 × 5 × 5 = 100."
  },
  {
    id: "q236",
    enunciado: "A água apresenta temperatura de ebulição relativamente elevada para uma molécula de sua massa devido, em parte, às interações intermoleculares entre suas moléculas. A interação predominante nesse caso é",
    alternativas: [
      "força de van der Waals.",
      "ligação de hidrogênio.",
      "ligação iônica entre moléculas neutras.",
      "força de dispersão de London.",
      "ligação covalente entre moléculas distintas."
    ],
    correta: 1,
    materia: "Química",
    explicacao: "As ligações de hidrogênio entre moléculas de água (O–H···O) exigem energia para serem vencidas, contribuindo para a temperatura de ebulição relativamente elevada. Forças de van der Waals e dispersão são mais fracas."
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
    explicacao: "Diferentes mecanismos de participação permitem que cidadãos expressem demandas, acompanhem políticas públicas e influenciem decisões coletivas. A participação não elimina conflitos, mas oferece canais para expressá-los e negociá-los."
  },
  {
    id: "q238",
    enunciado: "Em uma população, o uso indiscriminado de antibióticos pode favorecer o aumento de bactérias resistentes. Qual medida contribui para reduzir esse processo?",
    alternativas: [
      "Utilizar antibióticos para tratar infecções virais em todos os casos.",
      "Interromper tratamentos prescritos assim que os sintomas melhorarem.",
      "Utilizar antibióticos de amplo espectro como primeira opção em qualquer infecção.",
      "Utilizar antibióticos adequadamente, com indicação profissional e medidas de prevenção de infecções.",
      "Aumentar a dose de antibióticos para eliminar bactérias mais resistentes."
    ],
    correta: 3,
    materia: "Biologia",
    explicacao: "O uso inadequado de antibióticos favorece a seleção de bactérias resistentes. Prescrição apropriada, adesão às orientações e prevenção de infecções ajudam a reduzir essa pressão seletiva. Interromper tratamentos e usar sem indicação agravam o problema."
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
    explicacao: "O aumento é de 30 mil habitantes. Em relação aos 150 mil iniciais, a variação percentual é 30.000/150.000 × 100 = 20%. Quem calcula sobre a população final obtém cerca de 16,7%."
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
    explicacao: "Unidades e fontes permitem compreender o que está sendo medido e avaliar a confiabilidade dos dados. Sem essas informações, interpretações podem ser inadequadas, embora isso não signifique que os valores sejam necessariamente falsos."
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
    explicacao: "Pelo teorema de Pitágoras, h² = 9² + 12² = 81 + 144 = 225. Portanto, h = 15 cm. Quem soma os catetos obtém 21; quem confunde com outro triângulo pitagórico (5, 12, 13) obtém 13."
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
    explicacao: "Em \"O relatório que recebi\", o pronome relativo \"que\" retoma \"relatório\" e introduz uma oração subordinada adjetiva. \"Cedo\" e \"muito\" são advérbios; \"três\" é numeral; \"adequada\" é adjetivo."
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
    explicacao: "Os sensores permitem emitir alertas antecipados, oferecendo mais tempo para que moradores se preparem. Eles monitoram e alertam, mas não impedem a ocorrência de tempestades ou enchentes nem reduzem o nível da água."
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
    explicacao: "A resistência equivalente é 2 + 4 + 3 = 9 Ω. A corrente é 18/9 = 2 A. A potência total é P = UI = 18 × 2 = 36 W. Quem usa P = U²/R diretamente: 324/9 = 36 W (mesmo resultado). Quem erra a Req obtém outros valores."
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
    explicacao: "Há quatro opções para o primeiro cartão e três para o segundo. Como a ordem é registrada, existem 4 × 3 = 12 resultados. Quem ignora a ordem e usa combinação obtém 6; quem permite repetição obtém 16."
  },
  {
    id: "q246",
    enunciado: "Um átomo perde dois elétrons durante uma transformação química. Em relação ao átomo neutro original, a espécie formada é",
    alternativas: [
      "um ânion de carga 2−.",
      "um cátion de carga 2+.",
      "um isótopo com dois prótons a menos.",
      "um átomo com número de massa reduzido em dois.",
      "uma molécula com massa molecular menor em 2 unidades."
    ],
    correta: 1,
    materia: "Química",
    explicacao: "A perda de dois elétrons deixa duas cargas positivas líquidas, formando um cátion de carga 2+. O número de prótons e o número de massa não se alteram nesse processo, pois não há mudança no núcleo."
  },
  {
    id: "q247",
    enunciado: "O movimento dos direitos civis nos Estados Unidos, especialmente nas décadas de 1950 e 1960, combateu práticas de segregação racial. Uma de suas principais reivindicações foi",
    alternativas: [
      "ampliar a segregação em espaços públicos para evitar conflitos.",
      "restringir o direito ao voto de grupos discriminados.",
      "garantir igualdade de direitos e combater a discriminação racial.",
      "manter a separação racial com melhorias nas condições materiais.",
      "transferir a decisão sobre direitos civis para cada estado individualmente."
    ],
    correta: 2,
    materia: "História",
    explicacao: "O movimento dos direitos civis lutou contra a segregação e a discriminação, reivindicando igualdade jurídica, acesso a serviços e proteção dos direitos políticos. A manutenção da separação racial, mesmo com melhorias, era uma posição oposta aos objetivos do movimento."
  },
  {
    id: "q248",
    enunciado: "Uma floresta é fragmentada por estradas e áreas agrícolas. Uma consequência ecológica possível é",
    alternativas: [
      "a eliminação imediata de todas as espécies invasoras.",
      "o aumento obrigatório da conectividade entre habitats.",
      "a ausência de efeitos sobre o deslocamento dos organismos.",
      "a redução da possibilidade de troca genética entre populações isoladas.",
      "a interrupção de todos os ciclos biogeoquímicos em escala planetária."
    ],
    correta: 3,
    materia: "Biologia",
    explicacao: "A fragmentação pode isolar populações, dificultar o deslocamento e reduzir o fluxo gênico. Os efeitos dependem das espécies, do tamanho dos fragmentos e da conectividade restante entre as áreas de floresta."
  },
  {
    id: "q249",
    enunciado: "Uma cidade pretende ampliar a arborização de ruas para reduzir o calor. Para que o programa seja eficaz e duradouro, é importante",
    alternativas: [
      "escolher espécies adequadas ao clima, ao espaço disponível e à infraestrutura urbana.",
      "plantar qualquer espécie que propicie sombra no curto prazo.",
      "eliminar o acompanhamento das mudas após o plantio inicial.",
      "priorizar espécies de crescimento rápido mesmo que sejam frágeis.",
      "concentrar o plantio em uma única espécie para padronizar a manutenção."
    ],
    correta: 0,
    materia: "Geografia",
    explicacao: "A escolha adequada das espécies, o espaço para raízes e copas e a manutenção são essenciais para a sobrevivência das árvores e a redução dos conflitos com a infraestrutura urbana. A monocultura de árvores também pode aumentar vulnerabilidades."
  },
  {
    id: "q250",
    enunciado: "Um relatório sobre desinformação compara publicações virais com informações verificadas por instituições científicas. Qual procedimento ajuda a avaliar a confiabilidade de uma afirmação compartilhada nas redes?",
    alternativas: [
      "Considerar verdadeiro o conteúdo com maior número de compartilhamentos.",
      "Verificar a fonte original, a data, as evidências apresentadas e a confirmação independente.",
      "Aceitar a afirmação se ela estiver acompanhada de gráficos ou números.",
      "Compartilhar o conteúdo e aguardar correções de outros usuários.",
      "Presumir que publicações de contas verificadas são sempre confiáveis."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "A checagem de fonte, data, evidências e confirmação independente ajuda a distinguir informações sustentadas por dados de conteúdos enganosos. Números e gráficos, isoladamente, não garantem confiabilidade."
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
    explicacao: "Os custos variáveis são 0,4 × 18.000 = R$ 7.200,00. O lucro é 18.000 − 7.200 − 6.000 = R$ 4.800,00. Quem esquece os custos fixos obtém R$ 10.800; quem desconta apenas os custos fixos obtém R$ 12.000."
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
    explicacao: "O pronome relativo \"os quais\" retoma o termo masculino plural \"os dados\", estabelecendo coesão referencial entre as orações. A concordância de gênero e número ajuda a identificar o referente."
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
    explicacao: "O texto afirma que reparos e reutilização já reduziram o consumo, mas novas reduções podem exigir mudanças no próprio processo produtivo. A palavra \"further\" indica que mais reduções são possíveis, embora com mudanças adicionais."
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
    explicacao: "O trabalho de uma força constante é W = Fd cos θ. Como a força e o deslocamento têm a mesma direção, θ = 0° e W = 50 × 4 = 200 J. Quem divide em vez de multiplicar obtém 12,5 J; quem usa θ = 60° obtém 100 J."
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
    explicacao: "Como a ordem não importa e as vagas são idênticas, o número de pares é C(12,2) = 12 × 11/2 = 66. Quem considera a ordem relevante obtém 12 × 11 = 132; quem usa C(12,3) obtém 220."
  },
  {
    id: "q256",
    enunciado: "Em uma célula eletrolítica, uma fonte externa fornece energia elétrica para provocar uma reação química não espontânea. Esse processo é denominado",
    alternativas: [
      "eletrólise.",
      "pilha galvânica.",
      "célula de combustível.",
      "eletroforese.",
      "potenciometria."
    ],
    correta: 0,
    materia: "Química",
    explicacao: "Na eletrólise, a energia elétrica fornecida por uma fonte externa impulsiona uma reação de oxirredução não espontânea. A pilha galvânica opera de forma espontânea; eletroforese e potenciometria são técnicas analíticas."
  },
  {
    id: "q257",
    enunciado: "O movimento operário brasileiro do início do século XX foi influenciado por diferentes correntes políticas e pela experiência de trabalhadores imigrantes. Entre suas reivindicações estavam",
    alternativas: [
      "a ampliação da jornada para aumentar a produção nacional.",
      "a negociação exclusivamente individual entre patrões e empregados.",
      "a manutenção das condições de trabalho existentes sem alterações.",
      "a substituição do trabalho industrial pelo trabalho artesanal.",
      "melhores condições de trabalho, redução da jornada e organização coletiva."
    ],
    correta: 4,
    materia: "História",
    explicacao: "Movimentos operários reivindicaram melhores salários, redução da jornada, condições de trabalho mais seguras e liberdade de organização coletiva. A negociação individual e a manutenção do status quo eram posições opostas às dos trabalhadores."
  },
  {
    id: "q258",
    enunciado: "A vacinação pode reduzir a circulação de um agente infeccioso em uma população. Quando a cobertura é elevada, a transmissão pode diminuir também entre algumas pessoas que não desenvolveram imunidade própria. Esse efeito está associado à",
    alternativas: [
      "seleção artificial de todos os agentes infecciosos.",
      "imunidade coletiva, cuja intensidade depende de fatores como transmissibilidade e cobertura vacinal.",
      "resistência genética adquirida por exposição natural ao agente.",
      "eliminação universal de qualquer doença infecciosa pela vacinação.",
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
    explicacao: "A concentração de empregos e a distribuição desigual de moradias favorecem deslocamentos pendulares entre municípios, criando demanda por transporte metropolitano integrado e pressionando o tempo de deslocamento dos trabalhadores."
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
    explicacao: "As emissões totais e a intensidade de emissões por unidade produzida respondem a perguntas diferentes. A intensidade ajuda a comparar a eficiência ambiental quando o volume de produção varia entre períodos."
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
    explicacao: "Fatorando, f(x) = (x − 1)(x − 5). Portanto, as raízes são x = 1 e x = 5. Quem erra os sinais na fatoração obtém −1 e −5; quem confunde com outra função obtém 2 e 3."
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
    explicacao: "A oração introduzida por \"porque\" apresenta a razão pela qual a proposta foi aceita: seus resultados eram verificáveis. Não expressa oposição, concessão, finalidade ou alternância."
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
    explicacao: "O texto destaca a organização conjunta dos voluntários, o compartilhamento de ferramentas e a decisão coletiva sobre a distribuição da colheita — elementos de gestão compartilhada."
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
    explicacao: "A potência elétrica é P = UI. Assim, P = 120 × 5 = 600 W. Quem divide obtém 24 W; quem usa U²/R sem saber R obtém outros valores."
  },
  {
    id: "q265",
    enunciado: "Em uma caixa existem 3 cartões com a letra A, 2 com a letra B e 5 com a letra C. Um cartão é retirado ao acaso. Qual é a probabilidade de ele apresentar a letra A ou B?",
    alternativas: [
      "1/5",
      "1/2",
      "3/5",
      "7/10",
      "9/10"
    ],
    correta: 1,
    materia: "Lógica",
    explicacao: "Há 3 + 2 = 5 cartões favoráveis em um total de 3 + 2 + 5 = 10. A probabilidade é 5/10 = 1/2. Quem conta apenas os cartões A obtém 3/10; quem conta A e C obtém 8/10."
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
    explicacao: "Pela relação pH + pOH = 14, temos pOH = 14 − 11 = 3. Quem confunde pH com pOH obtém 11; quem não conhece a relação obtém 14."
  },
  {
    id: "q267",
    enunciado: "O Iluminismo valorizou a razão e questionou aspectos do absolutismo e de estruturas tradicionais de poder. Uma consequência de suas ideias foi",
    alternativas: [
      "a defesa universal do direito divino dos reis como fundamento político.",
      "a rejeição de qualquer investigação racional sobre a sociedade.",
      "a proibição de debates sobre liberdade e organização política.",
      "a valorização de princípios como direitos, liberdade e crítica à autoridade tradicional.",
      "a eliminação imediata de todos os conflitos sociais europeus."
    ],
    correta: 3,
    materia: "História",
    explicacao: "Pensadores iluministas defenderam, em diferentes formulações, o uso da razão e questionaram formas tradicionais de autoridade, influenciando debates sobre direitos e organização política. O direito divino dos reis era justamente o que muitos questionavam."
  },
  {
    id: "q268",
    enunciado: "Uma população de peixes vive em um lago cuja temperatura aumenta persistentemente. Algumas espécies não toleram bem temperaturas elevadas e apresentam redução na reprodução. Esse exemplo mostra que",
    alternativas: [
      "as condições ambientais podem influenciar a sobrevivência e o sucesso reprodutivo dos organismos.",
      "a temperatura não interfere em processos fisiológicos dos peixes.",
      "todas as espécies de peixes apresentam a mesma tolerância térmica.",
      "a evolução adaptativa ocorre necessariamente em uma única geração.",
      "as populações aquáticas são independentes das condições do ambiente."
    ],
    correta: 0,
    materia: "Biologia",
    explicacao: "Temperatura e outros fatores ambientais influenciam o metabolismo, a reprodução e a sobrevivência. Espécies distintas apresentam diferentes faixas de tolerância, e a adaptação evolutiva ocorre ao longo de múltiplas gerações."
  },
  {
    id: "q269",
    enunciado: "Uma área rural próxima a uma cidade passa a receber condomínios, galpões e novas rodovias. Esse processo pode ser interpretado como",
    alternativas: [
      "isolamento completo entre campo e cidade.",
      "eliminação de toda atividade agrícola no território.",
      "transformação de toda área rural em floresta preservada.",
      "desaparecimento da circulação de mercadorias.",
      "expansão da influência urbana sobre o uso e a valorização do solo rural."
    ],
    correta: 4,
    materia: "Geografia",
    explicacao: "A expansão urbana pode modificar usos do solo rural, valorizar terrenos e introduzir atividades residenciais, logísticas e industriais em áreas antes predominantemente agrícolas. Esse processo é dinâmico e nem sempre elimina completamente a agricultura."
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
    explicacao: "Rankings dependem de indicadores e escolhas metodológicas. Para comparar instituições, é necessário examinar os critérios, a comparabilidade e fatores contextuais que influenciam os resultados."
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
    explicacao: "Para t = 12, o expoente é 12/4 = 3. Logo, f(12) = 800 × (1/2)³ = 800 × 1/8 = 100. Quem considera duas meias-vidas obtém 200; quem erra o expoente obtém outros valores."
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
    explicacao: "\"Contudo\" e \"entretanto\" são conjunções adversativas, utilizadas para estabelecer uma relação de contraste entre as informações. \"Portanto\", \"logo\" e \"assim\" são conclusivos; \"porque\" é causal."
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
    explicacao: "O programa oferece equipamentos (acesso) e formação digital (habilidades), enfrentando tanto a falta de dispositivos quanto dificuldades de utilização. Não garante eliminação de diferenças de desempenho."
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
    explicacao: "No ponto mais alto, a velocidade final é zero. Pela equação v² = v₀² − 2gh, temos 0 = 400 − 20h, portanto h = 20 m. Quem usa h = v₀²/g obtém 40 m; quem usa h = v₀t/2 com t = v₀/g obtém 20 m por outra via."
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
    explicacao: "Há C(4,2) = 6 maneiras de escolher dois projetos aprovados. Cada configuração específica tem probabilidade (0,5)⁴ = 1/16. Logo, a probabilidade total é 6/16 = 3/8. Quem conta apenas uma configuração obtém 1/16."
  },
  {
    id: "q276",
    enunciado: "A fórmula molecular C₃H₈O pode corresponder a diferentes compostos orgânicos. Qual das alternativas apresenta um composto que pertence à função álcool?",
    alternativas: [
      "Propanal.",
      "Propanona.",
      "Ácido propanoico.",
      "Metoxietano.",
      "Propan-1-ol."
    ],
    correta: 4,
    materia: "Química",
    explicacao: "O propan-1-ol apresenta o grupo funcional hidroxila (–OH) ligado a carbono saturado, caracterizando a função álcool. O metoxietano (C₃H₈O) é um éter; propanal e propanona contêm oxigênio em carbonila."
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
    explicacao: "O reconhecimento constitucional estabelece garantias jurídicas, mas a efetivação dos direitos também depende de instituições, políticas públicas e mecanismos de proteção. Previsão legal, isoladamente, não garante realização automática."
  },
  {
    id: "q278",
    enunciado: "Uma espécie vegetal possui flores que são polinizadas principalmente por uma espécie específica de inseto. Se o inseto desaparecer localmente, qual consequência pode ocorrer?",
    alternativas: [
      "A reprodução da planta pode diminuir, caso não existam polinizadores alternativos eficazes.",
      "A planta passará necessariamente a reproduzir-se por sementes sem fecundação.",
      "Todas as plantas da região desaparecerão em poucas estações.",
      "A fotossíntese será interrompida em todos os organismos do ecossistema.",
      "A espécie vegetal adaptará suas flores em uma única geração."
    ],
    correta: 0,
    materia: "Biologia",
    explicacao: "A perda de um polinizador importante pode reduzir o sucesso reprodutivo de plantas dependentes dele. O efeito depende da existência de outros polinizadores e da biologia reprodutiva da espécie vegetal."
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
    explicacao: "A diversificação econômica pode reduzir a dependência de um único setor, enquanto a qualificação profissional amplia as possibilidades de emprego e adaptação a mudanças no mercado."
  },
  {
    id: "q280",
    enunciado: "Um estudo sobre a qualidade do ar apresenta médias anuais de poluentes, mas não informa os picos horários registrados. Por que os picos também podem ser importantes?",
    alternativas: [
      "As médias anuais não possuem qualquer utilidade para análise.",
      "Exposições elevadas em curtos períodos podem representar riscos que uma média anual não revela.",
      "Picos de poluição nunca afetam a saúde da população.",
      "A concentração de poluentes não varia ao longo do dia.",
      "Os picos demonstram necessariamente que os dados foram inconsistente."
    ],
    correta: 1,
    materia: "Atualidades",
    explicacao: "Médias resumem o comportamento geral, mas podem ocultar episódios de concentração elevada. Dependendo do poluente e da exposição, esses picos podem ser relevantes para a saúde, especialmente para grupos vulneráveis."
  },
  {
    id: "q281",
    enunciado: "Uma fábrica precisa de 15 minutos para produzir 20 unidades de um item. Mantido o ritmo constante, quanto tempo será necessário para produzir 180 unidades?",
    alternativas: [
      "90 minutos",
      "120 minutos",
      "135 minutos",
      "150 minutos",
      "180 minutos"
    ],
    correta: 2,
    materia: "Matemática",
    explicacao: "O tempo por unidade é 15/20 = 0,75 minuto. Para 180 unidades, são necessários 180 × 0,75 = 135 minutos. Quem calcula 15 × 180/20 de outra forma obtém o mesmo; quem arredonda o tempo por unidade obtém outros valores."
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
    explicacao: "A oração adjetiva restritiva identifica quais candidatos puderam prosseguir: apenas aqueles que apresentaram a documentação completa. Ela restringe o alcance do substantivo, em vez de acrescentar uma explicação opcional."
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
    explicacao: "A redução de plástico é uma informação útil, mas não permite concluir, sozinha, qual é o impacto ambiental total do produto ao longo de seu ciclo de vida. A ausência de dados adicionais limita a avaliação, mas não invalida a informação apresentada."
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
    explicacao: "Usando P = U²/R, temos R = U²/P = 20²/100 = 400/100 = 4 Ω. Quem usa P = UI e depois R = U/I obtém o mesmo resultado; quem confunde as fórmulas obtém 2 Ω ou 5 Ω."
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
    explicacao: "Existem 2³ = 8 sequências equiprováveis de três lançamentos. Apenas cara-cara-cara e coroa-coroa-coroa têm todos os resultados iguais. A probabilidade é 2/8 = 1/4. Quem conta apenas uma das sequências obtém 1/8."
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
    explicacao: "A concentração molar é a quantidade de matéria dividida pelo volume em litros: 0,5/2 = 0,25 mol/L. Quem multiplica obtém 1 mol/L; quem usa o volume como divisor da outra forma obtém outros valores."
  },
  {
    id: "q287",
    enunciado: "O desenvolvimento da imprensa de tipos móveis na Europa do século XV contribuiu para mudanças na circulação de conhecimentos. Uma consequência histórica foi",
    alternativas: [
      "a padronização imediata da língua escrita em toda a Europa.",
      "a eliminação das disputas religiosas e políticas do período.",
      "a concentração exclusiva da produção de livros nas universidades.",
      "a substituição completa dos manuscritos em poucos anos.",
      "a ampliação potencial da reprodução e circulação de textos."
    ],
    correta: 4,
    materia: "História",
    explicacao: "A imprensa permitiu reproduzir textos em maior escala e contribuiu para ampliar sua circulação, embora o acesso continuasse condicionado por fatores econômicos, políticos e educacionais. A padronização linguística e a eliminação de disputas não ocorreram imediatamente."
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
    explicacao: "A dispersão por animais transporta sementes para locais diferentes da planta-mãe. A redução dos dispersores pode dificultar a regeneração e alterar a distribuição de certas espécies vegetais no ecossistema."
  },
  {
    id: "q289",
    enunciado: "Uma rede de cidades compartilha serviços de saúde, universidades, comércio e transporte. Essa integração regional pode favorecer",
    alternativas: [
      "a eliminação automática das diferenças econômicas entre todos os municípios.",
      "o isolamento das cidades e a interrupção de fluxos populacionais.",
      "a circulação de pessoas, bens e serviços e a especialização de funções urbanas.",
      "a ausência de dependência entre os centros urbanos.",
      "a impossibilidade de cooperação administrativa entre os municípios."
    ],
    correta: 2,
    materia: "Geografia",
    explicacao: "A integração regional conecta cidades por fluxos de pessoas, mercadorias e serviços. Isso pode ampliar oportunidades e favorecer a especialização de funções, embora os benefícios dependam da infraestrutura e das desigualdades existentes."
  },
  {
    id: "q290",
    enunciado: "Uma pesquisa de opinião entrevista apenas usuários de uma plataforma digital para estimar a preferência de toda a população por determinado serviço. Qual problema metodológico pode ocorrer?",
    alternativas: [
      "A amostra é necessariamente grande demais para ser representativa.",
      "A pesquisa não pode registrar nenhuma resposta válida.",
      "O uso de questionários elimina qualquer possibilidade de viés.",
      "A amostra pode não representar pessoas que não utilizam a plataforma.",
      "O resultado será obrigatoriamente idêntico ao de um censo."
    ],
    correta: 3,
    materia: "Atualidades",
    explicacao: "Entrevistar apenas usuários da plataforma pode produzir viés de seleção, pois pessoas que não a utilizam podem ter características e preferências diferentes. Isso limita a generalização dos resultados para toda a população."
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
    explicacao: "Na função afim f(x) = ax + b, o coeficiente a representa a taxa de variação constante. Neste caso, a = 5. O valor 12 é o termo independente (valor de f(0)), não a taxa de variação."
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
    explicacao: "O trecho completa o sentido do verbo \"afirmou\", funcionando como objeto direto em forma de oração subordinada substantiva. A oração temporal é \"depois que a análise terminasse\"."
  },
  {
    id: "q293",
    enunciado: "Read the text: \"The hospital introduced an appointment reminder service. Missed appointments declined during the following months, although administrators note that other changes were implemented at the same time.\" Which conclusion is most cautious?",
    alternativas: [
      "The reminder service was certainly the only cause of the decline.",
      "The reminders had no possible relationship with attendance.",
      "The hospital's data cannot be analyzed at all.",
      "All other changes must have been irrelevant to the outcome.",
      "The decline occurred after the introduction, but additional factors may also have contributed."
    ],
    correta: 4,
    materia: "Língua Inglesa",
    explicacao: "A redução ocorreu após a introdução do serviço, mas outras mudanças simultâneas impedem atribuir o resultado exclusivamente aos lembretes sem análise adicional. A palavra \"although\" marca justamente essa ressalva."
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
    explicacao: "A variação é ΔEc = m(v₂² − v₁²)/2 = 1.000 × (400 − 100)/2 = 1.000 × 300/2 = 150.000 J. Quem calcula apenas a energia final obtém 200.000 J; quem usa v₂ − v₁ no lugar de v₂² − v₁² obtém 10.000 J."
  },
  {
    id: "q295",
    enunciado: "Em uma turma, 40% dos estudantes participam de um clube de ciências. Se 12 estudantes participam desse clube, quantos estudantes há na turma, supondo que a porcentagem seja exata?",
    alternativas: [
      "24",
      "30",
      "35",
      "40",
      "48"
    ],
    correta: 1,
    materia: "Lógica",
    explicacao: "Se 12 corresponde a 40% do total N, então 0,4 × N = 12. Logo, N = 12/0,4 = 30 estudantes. Quem multiplica 12 × 0,4 obtém 4,8; quem usa 12 × 40 obtém 480."
  },
  {
    id: "q296",
    enunciado: "Uma amostra de água apresenta sais de cálcio e magnésio dissolvidos, dificultando a formação de espuma com sabão. Essa característica está associada à",
    alternativas: [
      "água destilada.",
      "água dura.",
      "água completamente isenta de íons.",
      "água deionizada.",
      "água com pH neutro."
    ],
    correta: 1,
    materia: "Química",
    explicacao: "A dureza da água está relacionada principalmente à presença de íons cálcio e magnésio, que podem reagir com componentes do sabão e dificultar a formação de espuma. Água destilada e deionizada são justamente isentas desses íons."
  },
  {
    id: "q297",
    enunciado: "A urbanização acelerada e a expansão de atividades econômicas podem intensificar conflitos pelo uso da água. Uma estratégia de gestão sustentável deve",
    alternativas: [
      "considerar disponibilidade, qualidade, demanda e participação dos diferentes usuários.",
      "priorizar o consumo ilimitado de um único setor.",
      "desconsiderar os períodos de estiagem na gestão.",
      "impedir o monitoramento dos mananciais.",
      "substituir qualquer planejamento por decisões emergenciais permanentes."
    ],
    correta: 0,
    materia: "Geografia",
    explicacao: "A gestão sustentável considera a disponibilidade e a qualidade da água, as necessidades dos diferentes setores e os mecanismos de participação e planejamento, incluindo períodos de escassez hídrica."
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
    explicacao: "O instante do vértice é t = -b/(2a). Logo, t = -20/[2(-5)] = -20/(-10) = 2 s. Quem usa t = -b/a obtém 4 s; quem confunde com a altura máxima obtém outros valores."
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
    explicacao: "A memória subjetiva pode selecionar, reinterpretar ou omitir acontecimentos. Esse recurso permite explorar a perspectiva da personagem e torna relevante distinguir lembrança, percepção e fato narrado na análise literária."
  },
  {
    id: "q301",
    enunciado: "Uma loja vende um produto por R$ 200,00 e oferece um desconto de 15%. Qual será o preço final do produto?",
    alternativas: [
      "R$ 160,00",
      "R$ 170,00",
      "R$ 175,00",
      "R$ 180,00",
      "R$ 185,00"
    ],
    correta: 1,
    materia: "Matemática — Porcentagem",
    explicacao: "15% de 200 = 30. Subtraindo o desconto: 200 - 30 = R$ 170,00."
  },
  {
    id: "q302",
    enunciado: "Uma empresa possui 200 funcionários. Sabendo que 3/4 deles trabalham no período diurno, quantos funcionários trabalham nesse período?",
    alternativas: [
      "100",
      "125",
      "140",
      "150",
      "175"
    ],
    correta: 3,
    materia: "Matemática — Frações",
    explicacao: "Para calcular 3/4 de 200, dividimos 200 por 4 e multiplicamos por 3: 50 × 3 = 150 funcionários."
  },
  {
    id: "q303",
    enunciado: "Uma receita utiliza farinha e açúcar na proporção de 2 para 3. Se forem utilizados 40 kg dessa mistura, quantos quilos serão de farinha e quantos serão de açúcar, respectivamente?",
    alternativas: [
      "10 kg e 30 kg",
      "12 kg e 28 kg",
      "16 kg e 24 kg",
      "20 kg e 20 kg",
      "24 kg e 16 kg"
    ],
    correta: 2,
    materia: "Matemática — Razão e Proporção",
    explicacao: "A proporção possui 2 + 3 = 5 partes. Cada parte corresponde a 40/5 = 8 kg. Portanto, farinha: 2 × 8 = 16 kg; açúcar: 3 × 8 = 24 kg."
  },
  {
    id: "q304",
    enunciado: "Se 6 funcionários conseguem realizar determinado serviço em 8 dias, em quantos dias 12 funcionários, trabalhando no mesmo ritmo, realizarão o mesmo serviço?",
    alternativas: [
      "2 dias",
      "3 dias",
      "4 dias",
      "6 dias",
      "16 dias"
    ],
    correta: 2,
    materia: "Matemática — Regra de Três",
    explicacao: "A quantidade de funcionários e o tempo são inversamente proporcionais. Dobrar os funcionários reduz o tempo pela metade: 8/2 = 4 dias."
  },
  {
    id: "q305",
    enunciado: "Um aluno obteve as seguintes notas: Matemática 12, Português 15 e História 18. Sabendo que a média das quatro notas foi 17, qual foi sua nota em Geografia?",
    alternativas: [
      "20",
      "21",
      "22",
      "23",
      "24"
    ],
    correta: 3,
    materia: "Matemática — Média Aritmética",
    explicacao: "A soma das quatro notas deve ser 17 × 4 = 68. As três primeiras somam 12 + 15 + 18 = 45. Portanto, a nota de Geografia foi 68 - 45 = 23."
  },
  {
    id: "q306",
    enunciado: "Resolva a equação do primeiro grau: 3x - 7 = 2x + 9.",
    alternativas: [
      "x = 14",
      "x = 15",
      "x = 16",
      "x = 17",
      "x = 18"
    ],
    correta: 2,
    materia: "Matemática — Equação do Primeiro Grau",
    explicacao: "Subtraindo 2x dos dois lados, temos x - 7 = 9. Somando 7 aos dois lados, obtemos x = 16."
  },
  {
    id: "q307",
    enunciado: "A soma de dois números é 30 e a diferença entre eles é 6. Quais são esses dois números, considerando o maior primeiro?",
    alternativas: [
      "16 e 14",
      "18 e 12",
      "20 e 10",
      "21 e 9",
      "24 e 6"
    ],
    correta: 1,
    materia: "Matemática — Sistema de Equações",
    explicacao: "Chamando os números de x e y, temos x + y = 30 e x - y = 6. Somando as equações, 2x = 36, então x = 18. Consequentemente, y = 12."
  },
  {
    id: "q308",
    enunciado: "Observe a sequência numérica: 3, 7, 15, 31, 63, ?. Qual é o próximo número?",
    alternativas: [
      "95",
      "111",
      "119",
      "125",
      "127"
    ],
    correta: 4,
    materia: "Matemática — Sequências Numéricas",
    explicacao: "Cada número é obtido multiplicando o anterior por 2 e somando 1. Assim: 63 × 2 + 1 = 127."
  },
  {
    id: "q309",
    enunciado: "Um terreno retangular possui 12 metros de comprimento e 7 metros de largura. Qual é sua área total?",
    alternativas: [
      "38 m²",
      "72 m²",
      "84 m²",
      "96 m²",
      "168 m²"
    ],
    correta: 2,
    materia: "Matemática — Geometria Plana",
    explicacao: "A área de um retângulo é calculada multiplicando comprimento pela largura: 12 × 7 = 84 m²."
  },
  {
    id: "q310",
    enunciado: "Uma escada está apoiada em uma parede. Sua base está a 6 metros da parede e seu topo alcança 8 metros de altura. Qual é o comprimento da escada?",
    alternativas: [
      "8 metros",
      "9 metros",
      "10 metros",
      "12 metros",
      "14 metros"
    ],
    correta: 2,
    materia: "Matemática — Teorema de Pitágoras",
    explicacao: "A escada representa a hipotenusa de um triângulo retângulo. Aplicando Pitágoras: h² = 6² + 8² = 36 + 64 = 100. Portanto, h = 10 metros."
  },
  {
    id: "q311",
    enunciado: "Um veículo percorre 180 km em 2 horas e 30 minutos, mantendo velocidade média constante. Qual foi sua velocidade média em km/h?",
    alternativas: [
      "60 km/h",
      "65 km/h",
      "70 km/h",
      "72 km/h",
      "75 km/h"
    ],
    correta: 3,
    materia: "Matemática — Velocidade Média",
    explicacao: "2 horas e 30 minutos correspondem a 2,5 horas. A velocidade média é distância dividida pelo tempo: 180/2,5 = 72 km/h."
  },
  {
    id: "q312",
    enunciado: "Um funcionário recebe R$ 2.000,00 de salário. Primeiro, recebe um aumento de 10%. Depois, sofre uma redução de 10% sobre o novo salário. Qual será seu salário final?",
    alternativas: [
      "R$ 1.800,00",
      "R$ 1.900,00",
      "R$ 1.980,00",
      "R$ 2.000,00",
      "R$ 2.020,00"
    ],
    correta: 2,
    materia: "Matemática — Porcentagem Sucessiva",
    explicacao: "O aumento de 10% transforma R$ 2.000,00 em R$ 2.200,00. A redução de 10% sobre R$ 2.200,00 corresponde a R$ 220,00. Portanto, 2.200 - 220 = R$ 1.980,00. Os percentuais não se anulam porque são aplicados sobre valores diferentes."
  },
  {
    id: "q313",
    enunciado: "Uma torneira consegue encher um reservatório em 6 horas. Outra torneira consegue encher o mesmo reservatório em 3 horas. Se ambas forem abertas simultaneamente, quanto tempo levarão para encher o reservatório?",
    alternativas: [
      "1 hora",
      "1 hora e 30 minutos",
      "2 horas",
      "3 horas",
      "4 horas"
    ],
    correta: 2,
    materia: "Matemática — Trabalho Conjunto",
    explicacao: "A primeira torneira enche 1/6 do reservatório por hora e a segunda enche 1/3. Juntas, enchem 1/6 + 1/3 = 1/2 do reservatório por hora. Portanto, levam 2 horas."
  },
  {
    id: "q314",
    enunciado: "Dois dados comuns de seis faces são lançados simultaneamente. Qual é a probabilidade de a soma dos resultados ser igual a 8?",
    alternativas: [
      "1/6",
      "5/36",
      "1/4",
      "7/36",
      "1/3"
    ],
    correta: 1,
    materia: "Matemática — Probabilidade",
    explicacao: "Existem 6 × 6 = 36 resultados possíveis. As combinações que resultam em 8 são: (2,6), (3,5), (4,4), (5,3) e (6,2). São 5 casos favoráveis em 36 possíveis. Portanto, a probabilidade é 5/36."
  },
  {
    id: "q315",
    enunciado: "Uma equipe possui 8 funcionários e precisa escolher 3 deles para formar uma comissão. Quantas comissões diferentes podem ser formadas, considerando que a ordem de escolha não importa?",
    alternativas: [
      "24",
      "48",
      "56",
      "64",
      "336"
    ],
    correta: 2,
    materia: "Matemática — Análise Combinatória",
    explicacao: "Como a ordem não importa, utilizamos combinação: C(8,3) = 8!/(3! × 5!) = (8 × 7 × 6)/(3 × 2 × 1) = 56 comissões."
  },
  {
    id: "q316",
    enunciado: "Uma pessoa investiu R$ 1.500,00 a uma taxa de juros simples de 2% ao mês durante 5 meses. Qual será o valor dos juros recebidos?",
    alternativas: [
      "R$ 100,00",
      "R$ 120,00",
      "R$ 150,00",
      "R$ 180,00",
      "R$ 200,00"
    ],
    correta: 2,
    materia: "Matemática — Juros Simples",
    explicacao: "Nos juros simples, utilizamos J = C × i × t. Substituindo: J = 1.500 × 0,02 × 5 = R$ 150,00."
  },
  {
    id: "q317",
    enunciado: "Um capital de R$ 1.000,00 foi aplicado a uma taxa de juros compostos de 10% por período. Qual será o montante após 2 períodos?",
    alternativas: [
      "R$ 1.100,00",
      "R$ 1.200,00",
      "R$ 1.210,00",
      "R$ 1.220,00",
      "R$ 1.250,00"
    ],
    correta: 2,
    materia: "Matemática — Juros Compostos",
    explicacao: "Nos juros compostos, os juros são incorporados ao capital a cada período. No primeiro período: 1.000 × 1,10 = 1.100. No segundo: 1.100 × 1,10 = R$ 1.210,00."
  },
  {
    id: "q318",
    enunciado: "Um recipiente contém 20 litros de uma solução com concentração de 30% de determinada substância. São adicionados 10 litros de água pura. Qual será a nova concentração percentual da substância?",
    alternativas: [
      "10%",
      "15%",
      "20%",
      "25%",
      "30%"
    ],
    correta: 2,
    materia: "Matemática — Razão e Porcentagem",
    explicacao: "A quantidade da substância inicialmente é 20 × 0,30 = 6 litros. Com a adição de 10 litros de água, o volume total passa a ser 30 litros. A nova concentração é 6/30 × 100 = 20%."
  },
  {
    id: "q319",
    enunciado: "Em uma pesquisa com 120 motoristas, 70 utilizam o aplicativo A, 55 utilizam o aplicativo B e 20 utilizam ambos os aplicativos. Quantos motoristas não utilizam nenhum dos dois aplicativos?",
    alternativas: [
      "5",
      "10",
      "15",
      "20",
      "25"
    ],
    correta: 2,
    materia: "Matemática — Teoria dos Conjuntos",
    explicacao: "Pelo princípio da inclusão e exclusão, o total que utiliza pelo menos um aplicativo é 70 + 55 - 20 = 105. Portanto, 120 - 105 = 15 motoristas não utilizam nenhum dos dois."
  },
  {
    id: "q320",
    enunciado: "Um motorista percorre um trajeto de 120 km. Nos primeiros 60 km, mantém velocidade média de 60 km/h. Nos últimos 60 km, mantém velocidade média de 90 km/h. Qual é a velocidade média de todo o percurso?",
    alternativas: [
      "60 km/h",
      "65 km/h",
      "70 km/h",
      "72 km/h",
      "75 km/h"
    ],
    correta: 3,
    materia: "Matemática — Velocidade Média",
    explicacao: "Nos primeiros 60 km, o motorista gasta 1 hora. Nos últimos 60 km, gasta 60/90 = 2/3 de hora. O tempo total é 5/3 de hora. A velocidade média é 120 ÷ (5/3) = 72 km/h. Não se deve calcular a média aritmética das duas velocidades, pois os tempos de percurso são diferentes."
  }

];