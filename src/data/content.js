// Conteúdo central do site — edite aqui para atualizar textos, contatos, áreas, equipe e blog.

export const firm = {
  name: 'Godinho Advocacia',
  fullName: 'Godinho Advocacia e Assessoria Jurídica',
  slogan: 'Escritório de advocacia, com equipe de profissionais especializados e prontos para atender você.',
  yearsActive: 15,
  city: 'Governador Valadares',
  state: 'MG',
  region: 'Vale do Rio Doce',

  siteUrl: 'https://marlondcury.github.io/godinho-landing',

  geo: { lat: -18.8549, lng: -41.9559 },
  instagram: '@godinhoadvocacia',
  instagramUrl: 'https://www.instagram.com/godinhoadvocacia/',
  facebookUrl: 'https://www.facebook.com/celtongodinho/',
  jusbrasilUrl: 'https://godinhoadvocacia2018.jusbrasil.com.br/',
  phoneDisplay: '(33) 3271-9745',
  phoneHref: 'tel:+553332719745',
  whatsappDisplay: '(33) 9 9921-9808',
  whatsappHref: 'https://wa.me/5533999219808',
  email: 'contato@godinhoadvocacia.adv.br',
  address: {
    line1: 'Edifício Wilson Vaz — Rua Peçanha, 662',
    line2: 'Salas 704 / 705 / 706, 7º andar — Centro',
    line3: 'Governador Valadares - MG, 35010-160',
  },
  addressSchema: {
    streetAddress: 'Rua Peçanha, 662, Salas 704/705/706, 7º andar',
    addressLocality: 'Governador Valadares',
    addressRegion: 'MG',
    postalCode: '35010-160',
    addressCountry: 'BR',
  },
  mapsQuery: 'Rua Peçanha, 662, Centro, Governador Valadares - MG, 35010-160',
  // Título e descrição padrão (fallback) usados em páginas sem SEO específico.
  defaultSeoTitle: 'Advogado em Governador Valadares | Godinho Advocacia e Assessoria Jurídica',
  defaultSeoDescription:
    'Escritório de advocacia em Governador Valadares (MG) com mais de 15 anos de tradição. Atuação em Direito de Família, Penal, Previdenciário, do Consumidor e mais. Atendimento personalizado — agende sua consulta.',
}

export const socialLinks = [
  { name: 'Instagram', href: firm.instagramUrl, icon: 'instagram' },
  { name: 'Facebook', href: firm.facebookUrl, icon: 'facebook' },
  { name: 'Jusbrasil', href: firm.jusbrasilUrl, icon: 'jusbrasil' },
]

export const about = {
  eyebrow: firm.instagram,
  title: 'Sobre',
  titleHighlight: 'nós',
  paragraphs: [
    'Somos uma família de advogados, e o nosso escritório está há mais de 15 anos em Governador Valadares, sendo referência em diversas áreas do direito.',
    'Somos um escritório que oferece um atendimento personalizado, comunicativo e compromissado em buscar as melhores soluções para as demandas de nossos clientes.',
    'Para isso, contamos com advogados especializados, que recebem treinamentos voltados para a melhor atuação nos processos e atendimento ao cliente, o que garante a qualidade e agilidade dos serviços prestados.',
  ],
}

export const stats = [
  { value: '15+', label: 'Anos de tradição em Governador Valadares' },
  { value: 'UMA EQUIPE', label: ' de Advogados especialistas em diferentes áreas do direito' },
  { value: '100%', label: 'Atendimento personalizado e próximo do cliente' },
]

export const practiceAreas = [
  {
    slug: 'direito-de-familia',
    title: 'Direito de Família',
    description: 'Divórcio, guarda, pensão alimentícia, partilha de bens e inventários conduzidos com sensibilidade e técnica.',
    seoTitle: 'Advogado de Família em Governador Valadares | Godinho Advocacia',
    seoDescription: 'Advogados especializados em Direito de Família em Governador Valadares (MG): divórcio, guarda, pensão alimentícia, partilha de bens e inventário. Atendimento humanizado.',
    intro: 'Questões de família envolvem, além de aspectos jurídicos, momentos delicados da vida dos nossos clientes. Por isso, conduzimos cada caso com atenção, sigilo e clareza sobre cada etapa do processo.',
    highlights: [
      'Divórcio consensual e litigioso',
      'Guarda, convivência familiar e pensão alimentícia',
      'Partilha de bens, união estável e inventários',
      'Reconhecimento e dissolução de relações familiares',
    ],
    relatedLawyers: ['caroline'],
  },
  {
    slug: 'direito-medico',
    title: 'Direito Médico',
    description: 'Assessoria a profissionais e pacientes em questões de responsabilidade médica, ética e regulação da saúde.',
    seoTitle: 'Advogado de Direito Médico em Governador Valadares | Godinho Advocacia',
    seoDescription: 'Advogado especializado em Direito Médico em Governador Valadares (MG): negativa de plano de saúde, responsabilidade médica e defesa de profissionais da saúde.',
    intro: 'Atuamos tanto na defesa de profissionais e instituições de saúde quanto na orientação a pacientes que tiveram tratamentos negados ou sofreram falhas na prestação de serviços médicos.',
    highlights: [
      'Negativa de cobertura e tratamentos por planos de saúde',
      'Responsabilidade civil médica e hospitalar',
      'Defesa administrativa e ética de profissionais da saúde',
      'Orientação regulatória para clínicas e consultórios',
    ],
    relatedLawyers: ['caroline'],
  },
  {
    slug: 'direitos-garantias-fundamentais',
    title: 'Direitos e Garantias Fundamentais',
    description: 'Defesa de direitos constitucionais com base em sólida pesquisa acadêmica e atuação estratégica.',
    seoTitle: 'Advogado Constitucionalista em Governador Valadares | Godinho Advocacia',
    seoDescription: 'Advogado especializado em Direitos e Garantias Fundamentais em Governador Valadares (MG): mandados de segurança, ações constitucionais e pareceres jurídicos.',
    intro: 'Com base em pesquisa acadêmica aprofundada, atuamos na defesa de direitos e garantias previstos na Constituição Federal, em casos que exigem fundamentação técnica sólida e visão estratégica.',
    highlights: [
      'Defesa de direitos fundamentais em juízo',
      'Mandados de segurança e ações constitucionais',
      'Pareceres jurídicos especializados',
      'Atuação em casos de repercussão e relevância social',
    ],
    relatedLawyers: ['cesar'],
  },
  {
    slug: 'direito-previdenciario',
    title: 'Direito Previdenciário',
    description: 'Aposentadorias, benefícios por incapacidade, BPC/LOAS e revisões junto ao INSS.',
    seoTitle: 'Advogado Previdenciário em Governador Valadares | INSS | Godinho Advocacia',
    seoDescription: 'Advogado previdenciário em Governador Valadares (MG): aposentadorias, BPC/LOAS, auxílio-doença e revisões junto ao INSS. Atendimento especializado.',
    intro: 'Acompanhamos segurados em todas as etapas junto ao INSS, do requerimento administrativo ao recurso judicial, buscando o reconhecimento integral dos direitos previdenciários.',
    highlights: [
      'Aposentadorias por idade, tempo de contribuição e invalidez',
      'BPC/LOAS — Benefício de Prestação Continuada',
      'Reconhecimento de tempo de trabalho sem registro em carteira',
      'Auxílio-doença e benefícios por incapacidade, incluindo transtornos psiquiátricos',
    ],
    relatedLawyers: ['celton'],
  },
  {
    slug: 'direito-do-consumidor',
    title: 'Direito do Consumidor',
    description: 'Negativação indevida, cobranças abusivas e defesa dos direitos do consumidor perante empresas e bancos.',
    seoTitle: 'Advogado do Consumidor em Governador Valadares | Godinho Advocacia',
    seoDescription: 'Advogado especializado em Direito do Consumidor em Governador Valadares (MG): nome negativado indevidamente, cobranças abusivas e indenizações.',
    intro: 'Defendemos consumidores em situações de abuso, cobrança indevida ou negativação irregular do nome, buscando reparação justa e a correção do problema.',
    highlights: [
      'Nome negativado mesmo após o pagamento da dívida',
      'Cobranças e descontos indevidos',
      'Extravio e avarias em bagagem de viagem',
      'Indenizações por danos morais e materiais',
    ],
    relatedLawyers: ['celton'],
  },
  {
    slug: 'direito-administrativo',
    title: 'Direito Administrativo',
    description: 'Assessoria a servidores públicos em enquadramento, retroativos e demais questões estatutárias.',
    seoTitle: 'Advogado para Servidores Públicos em Governador Valadares | Godinho Advocacia',
    seoDescription: 'Advogado de Direito Administrativo em Governador Valadares (MG): enquadramento funcional, verbas retroativas e assessoria a servidores públicos.',
    intro: 'Assessoramos servidores públicos municipais, estaduais e federais em questões relacionadas a enquadramento funcional, verbas retroativas e demais direitos estatutários.',
    highlights: [
      'Enquadramento funcional e progressão de carreira',
      'Cobrança de verbas retroativas',
      'Revisão de atos administrativos',
      'Orientação a servidores públicos em geral',
    ],
    relatedLawyers: ['cesar'],
  },
  {
    slug: 'acao-rio-doce',
    title: 'Ação Rio Doce — Caso Samarco/Mariana',
    description: 'Orientação a atingidos pelo rompimento da barragem de Fundão sobre elegibilidade e acompanhamento do processo de indenização.',
    seoTitle: 'Advogado Ação Rio Doce (Samarco) em Governador Valadares | Godinho Advocacia',
    seoDescription: 'Advogado orienta atingidos pelo rompimento da barragem de Fundão na região do Rio Doce e Governador Valadares sobre elegibilidade e indenização no caso Samarco/BHP.',
    intro: 'Acompanhamos a evolução do processo movido no exterior contra a mineradora BHP, em razão do rompimento da barragem de Fundão, em Mariana (MG), e orientamos moradores da região do Rio Doce sobre elegibilidade, documentação e próximos passos para pleitear indenização.',
    highlights: [
      'Análise de elegibilidade para participação na ação',
      'Orientação sobre documentação e comprovação de danos',
      'Acompanhamento das fases do processo movido na Inglaterra',
      'Esclarecimentos sobre prazos e etapas até a fixação dos valores de indenização',
    ],
    featured: true,
    relatedLawyers: ['cesar', 'celton', 'caroline'],
  },
  {
    slug: 'direito-civil-empresarial',
    title: 'Direito Civil e Empresarial',
    description: 'Contratos, responsabilidade civil e consultoria preventiva para pessoas físicas e empresas.',
    seoTitle: 'Advogado Cível e Empresarial em Governador Valadares | Godinho Advocacia',
    seoDescription: 'Advogado especializado em Direito Civil e Empresarial em Governador Valadares (MG): contratos, responsabilidade civil e consultoria jurídica preventiva.',
    intro: 'Prestamos assessoria jurídica contínua e preventiva, além de atuação contenciosa em contratos, responsabilidade civil e demais questões cíveis e empresariais.',
    highlights: [
      'Elaboração e revisão de contratos',
      'Responsabilidade civil e indenizações',
      'Consultoria jurídica preventiva para empresas',
      'Assessoria jurídica geral e acompanhamento de processos',
    ],
    relatedLawyers: ['cesar', 'celton', 'caroline'],
  },
  {
    slug: 'direito-penal',
    title: 'Direito Penal',
    description: 'Defesa criminal técnica e estratégica, da fase de investigação ao julgamento, com experiência também em Direito Penal Militar.',
    seoTitle: 'Advogado Criminalista em Governador Valadares | Godinho Advocacia',
    seoDescription: 'Advogado criminalista em Governador Valadares (MG): defesa em inquéritos, processos criminais, Direito Penal Militar e habeas corpus.',
    intro: 'Contamos com um advogado que também é Coronel da reserva da Polícia Militar e já atuou como professor de Direito Penal e Direito Penal Militar, o que une ao escritório uma compreensão prática da atividade policial e da persecução penal, além da fundamentação jurídica necessária para uma defesa firme e estratégica.',
    highlights: [
      'Defesa em inquéritos policiais e processos criminais',
      'Direito Penal Militar e procedimentos disciplinares',
      'Acompanhamento em audiências e júri',
      'Habeas corpus e medidas de urgência',
    ],
    relatedLawyers: ['celton'],
  },
]

export const team = [
  {
    slug: 'cesar-godinho',
    photoKey: 'cesar',
    name: 'César Godinho',
    fullName: 'César Augusto Godinho da Silva e Assis',
    role: 'Advogado',
    seoTitle: 'César Godinho — Advogado em Governador Valadares | Godinho Advocacia',
    seoDescription: 'César Godinho, advogado em Governador Valadares (MG), mestre e doutorando em Direito, atua em Direitos e Garantias Fundamentais, Direito Administrativo e Civil.',
    areas: ['direitos-garantias-fundamentais', 'direito-administrativo', 'direito-civil-empresarial'],
    bio: 'Mesmo sendo jovem, destaca-se como advogado renomado e experiente, com notável bagagem acadêmica. Doutorando e mestre em Direito pela Faculdade de Direito de Vitória (FDV), com área de concentração em Direitos e Garantias Fundamentais. É reconhecido pela dedicação incansável aos estudos jurídicos e pela atuação exemplar no meio jurídico, oferecendo soluções excepcionais aos clientes.',
    details: [
      'Doutorando e Mestre em Direito pela Faculdade de Direito de Vitória (FDV), com concentração em Direitos e Garantias Fundamentais.',
      'Atua com foco em pesquisa acadêmica aplicada à prática jurídica, unindo fundamentação técnica sólida à atuação estratégica em juízo.',
      'Desenvolve trabalhos publicados sobre temas de direito constitucional, eleitoral e ambiental.',
    ],
  },
  {
    slug: 'celton-godinho',
    photoKey: 'celton',
    name: 'Celton Godinho',
    fullName: 'Celton Godinho de Assis',
    role: 'Sócio-fundador',
    seoTitle: 'Celton Godinho — Advogado Criminalista e Previdenciário em Governador Valadares',
    seoDescription: 'Celton Godinho, advogado e Coronel da reserva da PM-MG, atua em Governador Valadares nas áreas de Direito Penal, Previdenciário e do Consumidor.',
    areas: ['direito-previdenciario', 'direito-do-consumidor', 'direito-penal', 'direito-civil-empresarial'],
    bio: 'Coronel da reserva da Polícia Militar de Minas Gerais, uniu décadas de disciplina, liderança e experiência em segurança pública a uma sólida formação jurídica. Fundador do escritório, é advogado formado pela FADIVA — Faculdade de Direito de Varginha/MG, e atua com ética, conhecimento técnico e visão estratégica, oferecendo aos clientes uma advocacia firme, responsável e altamente qualificada.',
    details: [
      'Ingressou na Academia de Polícia Militar de Belo Horizonte em 01/02/1983, aos 17 anos, como cadete do Curso de Formação de Oficiais (CFO), graduando-se em Ciências Militares e sendo declarado Aspirante a Oficial em outubro de 1987.',
      'Ao longo da carreira na Polícia Militar, foi Comandante do Pelotão de Choque do 8º BPM em Lavras e Secretário do 8º BPM.',
      'Integrou a primeira turma de professores de Direitos Humanos da PM e ministrou aulas de Direito Penal, Direito Penal Militar e outras disciplinas relacionadas à atividade policial.',
      'Formado em Direito pela FADIVA — Faculdade de Direito de Varginha/MG, turma de 1992.',
      'Possui curso em Direitos Humanos e Direito Internacional Humanitário para Forças Policiais e de Segurança, realizado pelo Comitê Internacional da Cruz Vermelha (CICV).',
      'Fundador da Godinho Advocacia, une a sólida formação jurídica à vasta experiência prática adquirida ao longo de décadas na segurança pública, conduzindo também a orientação estratégica de casos de maior complexidade, como a Ação Rio Doce.',
    ],
  },
  {
    slug: 'caroline-godinho',
    photoKey: 'caroline',
    name: 'Caroline Godinho',
    fullName: 'Caroline Araujo Godinho de Assis',
    role: 'Advogada',
    seoTitle: 'Caroline Godinho — Advogada de Família em Governador Valadares',
    seoDescription: 'Caroline Godinho, advogada em Governador Valadares (MG) especializada em Direito de Família e Direito Médico, com atendimento humanizado e próximo.',
    areas: ['direito-de-familia', 'direito-medico'],
    bio: 'Advogada extraordinária que se destaca em sua jornada jurídica, com vasta experiência nas áreas de Direito de Família e Direito Médico. Traz consigo não apenas conhecimento jurídico, mas paixão incansável pela advocacia. Para Dra. Caroline, cada cliente é mais do que um processo: são histórias que merecem a melhor representação e dedicação.',
    details: [
      'Ampla atuação em Direito de Família, com foco em atendimento humanizado em momentos delicados.',
      'Especialista em Direito Médico, representando pacientes e profissionais de saúde.',
      'Reconhecida pelo compromisso com a escuta atenta e o cuidado em cada caso conduzido.',
    ],
  },
]

export const differentiators = [
  {
    title: 'Atendimento personalizado',
    description: 'Cada cliente é acompanhado de perto, com comunicação clara em todas as etapas do processo.',
  },
  {
    title: 'Tradição de família',
    description: 'Mais de 12 anos de história em Governador Valadares, construída por três gerações de advogados.',
  },
  {
    title: 'Equipe especializada',
    description: 'Advogados com formação de excelência e treinamento contínuo em suas áreas de atuação.',
  },
]

export const navLinks = [
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Áreas de atuação', href: '/#areas' },
  { label: 'Equipe', href: '/#equipe' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/#contato' },
]

export const blogPosts = [
  {
    slug: 'acao-rio-doce-bhp-esgota-recursos-inglaterra',
    title: 'Ação Rio Doce: BHP esgota recursos na Inglaterra — o que muda para os atingidos',
    category: 'Ação Rio Doce',
    date: '2026-08-10',
    author: 'cesar',
    excerpt: 'A Justiça inglesa negou o último recurso da mineradora BHP, mantendo sua responsabilidade pelo rompimento da barragem de Fundão. Entenda os próximos passos do processo.',
    content: [
      'Em maio de 2026, o Tribunal de Apelação da Inglaterra negou o último recurso disponível da mineradora BHP contra a condenação proferida em novembro de 2025 pelo Tribunal Superior de Londres, que reconheceu a responsabilidade da empresa pelo rompimento da barragem de Fundão, em Mariana (MG).',
      'Com o esgotamento dos recursos ordinários no sistema inglês, o processo avança para a fase de quantificação dos danos, na qual a Corte analisará as categorias de perdas e as provas apresentadas para fixar os valores de indenização devidos aos atingidos. A audiência de julgamento dessa etapa está prevista para abril de 2027.',
      'A ação tramita na Inglaterra porque a BHP é sediada no Reino Unido e representa cerca de 620 mil pessoas atingidas e 31 municípios da bacia do Rio Doce, segundo os escritórios que conduzem o caso.',
      'Para moradores da região que ainda têm dúvidas sobre elegibilidade, documentação necessária ou próximos passos, nosso escritório oferece orientação especializada para acompanhar o andamento do processo e esclarecer o que é possível fazer neste momento.',
      'Se você foi atingido pelo rompimento da barragem e quer entender melhor sua situação, entre em contato conosco.',
    ],
  },
  {
    slug: 'plano-de-saude-negou-tratamento-filho',
    title: 'Plano de saúde negou tratamento ao seu filho? Saiba como agir',
    category: 'Direito Médico',
    date: '2026-07-28',
    author: 'caroline',
    excerpt: 'Negativas de cobertura para terapias e tratamentos infantis são mais comuns do que deveriam — e nem sempre são legais. Veja o que fazer diante de uma recusa.',
    content: [
      'É frequente que planos de saúde neguem a cobertura de terapias importantes para o desenvolvimento de crianças, como sessões de fonoaudiologia, terapia ocupacional ou tratamento para transtorno do espectro autista, alegando limitação de sessões ou exclusão contratual.',
      'Em muitos casos, essas negativas contrariam a legislação em vigor e entendimentos consolidados da Justiça, que reconhecem o direito à cobertura integral de tratamentos prescritos por médico, especialmente quando envolvem crianças em fase de desenvolvimento.',
      'Diante de uma negativa, o primeiro passo é reunir a documentação: prescrição médica, relatórios, e a negativa por escrito da operadora. Esses documentos são essenciais para embasar um pedido administrativo ou, se necessário, uma ação judicial.',
      'Cada caso tem particularidades que merecem análise individual. Se seu filho teve um tratamento negado, converse com a nossa equipe para entender as possibilidades no seu caso.',
    ],
  },
  {
    slug: 'bpc-loas-negado-como-recorrer',
    title: 'BPC/LOAS negado pelo INSS? Veja como recorrer',
    category: 'Direito Previdenciário',
    date: '2026-07-15',
    author: 'celton',
    excerpt: 'O Benefício de Prestação Continuada é direito de idosos e pessoas com deficiência em situação de vulnerabilidade — mas o INSS nega grande parte dos pedidos. Entenda como recorrer.',
    content: [
      'O Benefício de Prestação Continuada (BPC/LOAS) garante um salário mínimo mensal a idosos a partir de 65 anos e a pessoas com deficiência, desde que comprovada a condição de baixa renda familiar.',
      'Mesmo quando o requerente preenche os requisitos legais, é comum que o INSS indefira o pedido administrativo, seja por avaliação social ou médica considerada insuficiente pelo próprio requerente, seja por interpretação restritiva da renda familiar.',
      'Diante de um indeferimento, é possível apresentar recurso administrativo ou buscar a via judicial, reunindo documentos, laudos médicos e provas da situação de vulnerabilidade social e econômica da família.',
      'Se o seu pedido de BPC foi negado, ou se você tem dúvidas se tem direito ao benefício, nossa equipe pode analisar o seu caso e indicar o melhor caminho.',
    ],
  },
  {
    slug: 'trabalhou-sem-registro-inss-reconhece-tempo',
    title: 'Trabalhou sem registro na carteira? O INSS pode reconhecer esse tempo',
    category: 'Direito Previdenciário',
    date: '2026-07-02',
    author: 'celton',
    excerpt: 'Períodos trabalhados sem anotação em carteira nem sempre estão perdidos para fins de aposentadoria. Veja como comprovar esse tempo junto ao INSS.',
    content: [
      'Muitos trabalhadores passam parte da vida profissional em vínculos sem registro formal, o que pode gerar a falsa impressão de que esse tempo está definitivamente perdido para fins previdenciários.',
      'A legislação permite o reconhecimento desses períodos por meio de provas complementares, como testemunhas, documentos contemporâneos ao período trabalhado, recibos, extratos e outros indícios que demonstrem a relação de trabalho.',
      'Esse reconhecimento pode ser decisivo para completar tempo de contribuição necessário à aposentadoria, ou para aumentar o valor do benefício.',
      'Se você trabalhou sem carteira assinada em algum período da vida e tem dúvidas sobre como isso pode impactar sua aposentadoria, procure orientação especializada antes de dar entrada no benefício.',
    ],
  },
  {
    slug: 'nome-sujo-mesmo-apos-pagar-divida',
    title: 'Nome sujo mesmo depois de pagar a dívida: o que fazer',
    category: 'Direito do Consumidor',
    date: '2026-06-20',
    author: 'celton',
    excerpt: 'A manutenção indevida do nome em cadastros de restrição após a quitação de uma dívida pode gerar direito a indenização. Entenda seus direitos.',
    content: [
      'Após o pagamento de uma dívida, a empresa credora tem prazo para providenciar a baixa da negativação nos órgãos de proteção ao crédito. Quando isso não acontece, o consumidor pode continuar enfrentando restrições indevidas, como recusa de crédito e dificuldade para abrir contas.',
      'Essa manutenção indevida do nome em cadastros como SPC e Serasa, mesmo após a quitação, é considerada falha na prestação do serviço e pode gerar direito à exclusão imediata do registro, além de eventual indenização por danos morais.',
      'O primeiro passo é reunir o comprovante de pagamento e formalizar a solicitação de baixa junto à empresa. Persistindo o problema, é possível buscar a via judicial para garantir a retirada do nome e a reparação cabível.',
      'Se seu nome continua negativado mesmo após pagar a dívida, fale com a nossa equipe para avaliarmos o seu caso.',
    ],
  },
  {
    slug: 'servidores-publicos-stj-enquadramento-retroativos',
    title: 'Servidores públicos: decisão do STJ garante enquadramento e retroativos',
    category: 'Direito Administrativo',
    date: '2026-06-05',
    author: 'cesar',
    excerpt: 'Entenda a decisão do Superior Tribunal de Justiça que reconhece o direito de servidores municipais ao enquadramento correto e ao pagamento de valores retroativos.',
    content: [
      'Servidores públicos municipais frequentemente enfrentam situações de enquadramento funcional incorreto, o que impacta diretamente sua remuneração e progressão de carreira ao longo dos anos.',
      'Decisões recentes do Superior Tribunal de Justiça têm reconhecido o direito de servidores ao enquadramento correto conforme a legislação municipal aplicável, bem como ao pagamento de valores retroativos referentes ao período em que o enquadramento esteve incorreto.',
      'Cada caso depende da análise da legislação específica do município e da situação funcional do servidor, sendo recomendável reunir contracheques, portarias e demais documentos funcionais para avaliação.',
      'Servidores públicos de Governador Valadares e região que tenham dúvidas sobre seu enquadramento podem buscar nossa orientação para verificar se possuem direito a retroativos.',
    ],
  },
  {
    slug: 'transtorno-bipolar-aposentadoria-por-invalidez',
    title: 'Transtorno bipolar pode dar direito à aposentadoria por invalidez',
    category: 'Direito Previdenciário',
    date: '2026-05-22',
    author: 'celton',
    excerpt: 'Quando o transtorno bipolar compromete de forma definitiva a capacidade de trabalho, o segurado pode ter direito à aposentadoria por invalidez junto ao INSS.',
    content: [
      'O transtorno bipolar é reconhecido como condição que pode incapacitar total e permanentemente o segurado para o trabalho, a depender da gravidade dos episódios e da resposta ao tratamento.',
      'Para o INSS reconhecer o direito à aposentadoria por invalidez, é necessário comprovar, por meio de perícia médica e laudos, que a incapacidade é total e não há previsão de recuperação que permita o retorno à atividade laboral.',
      'Muitos pedidos são negados administrativamente por avaliação pericial que não reflete adequadamente a gravidade do quadro, sendo possível reverter esse indeferimento pela via judicial, com apoio de laudos médicos detalhados.',
      'Se você ou um familiar convive com transtorno bipolar e não consegue mais trabalhar por conta da condição, nossa equipe pode orientar sobre os passos para requerer o benefício.',
    ],
  },
]
