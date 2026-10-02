import { Language, UIContent } from '../types';

export const TRANSLATIONS: Record<Language, UIContent> = {
  pt: {
    header: {
      subtitle: "Customer Success & Operações → Dados e Produtos Digitais",
      aboutNav: "Sobre Mim",
      projectsNav: "Projetos",
      btnResume: "Currículo"
    },
    about: {
      topBadge: "Customer Success & Operações • 18 Anos em Negócio e Crédito",
      location: "João Pessoa - PB, Brasil",
      profileEyebrow: "Posicionamento Profissional",
      roles: [
        "Customer Success e Operações em Tecnologia",
        "18 anos em negócios, crédito e relacionamento com clientes",
        "Estudante de ADS • Pós-graduação em Engenharia de Dados"
      ],
      btnProjects: "Ver Projetos",
      btnResume: "Baixar Currículo (CV)",
      btnWhatsapp: "WhatsApp",
      btnLinkedin: "LinkedIn",
      presentationEyebrow: "Tese & Posicionamento",
      presentationHeadline: "Profissional de negócios e crédito com 18 anos de bagagem, em transição para tecnologia com foco em Customer Success, Operações, Dados e Produtos Digitais.",
      presentationP1: "Minha trajetória consolida mais de 18 anos de vivência prática nos setores bancário e imobiliário, gerenciando esteiras de concessão de crédito, atendimento consultivo, conformidade documental e resolução ágil de atritos operacionais complexos.",
      presentationP2: "Curso ADS e desenvolvo conhecimentos em SQL, Python, Power BI e Figma por meio de projetos acadêmicos. Busco oportunidades em que possa aprender, aplicar esses conhecimentos e contribuir com minha experiência em atendimento, crédito e processos.",
      copyEmail: "Copiar E-mail",
      copied: "Copiado!",
      pillarsEyebrow: "Pilares Estratégicos & Competências",
      pillarsBadge: "04 Pilares Integrados",
      pillars: [
        {
          title: "Core: Customer Success & Operações",
          description: "18+ anos de sólida trajetória nos setores bancário e imobiliário em análise e esteiras de crédito, atendimento consultivo, relacionamento e resolução ágil de demandas complexas."
        },
        {
          title: "Diferencial: Análise de Dados & Métricas",
          description: "Dados aplicados à jornada do cliente: modelagem relacional, consultas SQL, especificação de dashboards no Power BI e exploração para apoio à tomada de decisão."
        },
        {
          title: "Diferencial: UX/UI & Jornada do Cliente",
          description: "Visão centrada no usuário: mapeamento de fluxos, arquitetura de informação, wireframes e prototipação interativa no Figma para produtos digitais intuitivos e acessíveis."
        },
        {
          title: "Alavanca: Inteligência Artificial & Eficiência",
          description: "Uso estratégico de IA generativa no apoio à ideação, estruturação de fluxos, síntese de documentações e aceleração do ciclo de desenvolvimento."
        }
      ],
      storyEyebrow: "Trajetória & Contexto Profissional",
      storyTitle: "Sobre mim",
      storyBadge: "Priscilla Cahino • CS/CX & Tecnologia",
      storyHighlight: "Sou uma profissional com mais de dezoito anos de experiência consolidada nos segmentos bancário e imobiliário. Foi nesse ambiente de alta exigência que desenvolvi domínio em atendimento, relacionamento com clientes, esteiras financeiras, crédito e resolução de demandas críticas.",
      storyP1: "Ao longo dessa vivência, percebi que a tecnologia e a análise de dados oferecem ferramentas poderosas para potencializar aquilo que sempre fiz: aproximar o cliente da solução ideal, simplificar processos burocráticos e eliminar gargalos operacionais.",
      storyP2: "Por isso, iniciei minha formação em Análise e Desenvolvimento de Sistemas (ADS) no UNIPÊ e participei de projetos na Fábrica de Software. Estou conectando minha experiência em negócios e relacionamento com clientes aos conhecimentos que venho desenvolvendo em tecnologia e análise de dados.",
      storyP3: "Nos projetos acadêmicos, venho praticando SQL, Python e Power BI para organizar e explorar informações, além de Figma e mapeamento de jornadas para estudar a experiência do usuário. Quero ampliar essa prática e contribuir com a visão de processos e de atendimento que construí ao longo da minha trajetória.",
      storyQuoteBox: "“Minha missão é aplicar inteligência de processos, visão de dados e empatia na experiência do usuário para transformar operações complexas em jornadas simples, humanas e orientadas a resultados.”",
      personalTitle: "Além do trabalho e da tecnologia",
      personalText: "Nos momentos de descanso, gosto de aproveitar o mar e a praia em João Pessoa, assistir a um bom filme com pipoca e manter um olhar atento ao comportamento humano. Observar o cotidiano é uma das melhores formas de exercitar a empatia: primeiro ouvir com atenção, compreender as reais necessidades das pessoas e, só então, desenhar soluções funcionais.",
      aiTitle: "Inteligência Artificial como acelerador estratégico",
      aiText: "Utilizo ativamente a Inteligência Artificial no meu cotidiano profissional e acadêmico — para sintetizar requisitos, explorar hipóteses analíticas, documentar sistemas e ampliar a produtividade. Vejo a IA não como um atalho, mas como uma alavanca poderosa quando guiada por senso crítico e sólido conhecimento de negócio.",
      storyClosing: "Este espaço compartilha meu posicionamento profissional autêntico, minha visão de atuação e os projetos práticos que desenvolvo e publico no GitHub.",
      featuredEyebrow: "Projetos & Prática",
      featuredTitle: "Projetos em Destaque",
      featuredSubtitle: "Aplicações práticas desenvolvidas na Fábrica de Software e workshops de tecnologia.",
      viewAllProjects: "Ver todos os projetos detalhados",
      quoteEyebrow: "Princípio de Ação",
      quoteText: "“Oportunidades multiplicam-se à medida que são agarradas.”",
      quoteAuthor: "Sun Tzu — A Arte da Guerra",
      quoteNote: "Texto estruturado por Priscilla Cahino.",
      ctaEyebrow: "Contato & Conexão",
      ctaTitle: "Aberta a novas oportunidades e conexões estratégicas",
      ctaDescription: "Estou em busca de oportunidades que me permitam aplicar minha experiência profissional, continuar aprendendo e desenvolver minha trajetória em tecnologia, dados, Customer Experience e áreas relacionadas."
    },
    projects: {
      eyebrow: "Portfólio Técnico & GitHub",
      title: "Projetos & GitHub",
      subtitle: "Projetos acadêmicos e práticos em diferentes contextos, nos quais aplico tecnologia, experiência do usuário, dados e visão de processos para compreender problemas e desenvolver soluções.",
      filterLabel: "Filtrar por área:",
      filters: {
        all: "Todos",
        data: "Dados & BI",
        ux: "UX/UI Design",
        dev: "Desenvolvimento & Sistemas"
      },
      highlightsLabel: "Entregas & Destaques:",
      techLabel: "Tecnologias & Ferramentas:",
      btnLive: "Acessar Plataforma Web",
      btnFigma: "Protótipo no Figma",
      btnResume: "Ver Currículo Completo",
      btnReturnAbout: "Voltar para Sobre Mim & Perfil",
      returnBoxTitle: "Quer saber mais sobre minha trajetória profissional?",
      returnBoxDesc: "Confira os 18+ anos de experiência consolidada em operações, crédito e relacionamento com clientes na página Sobre Mim.",
      ctaEyebrow: "Contato & Conexão",
      ctaTitle: "Vamos conversar sobre oportunidades e desafios?",
      ctaDescription: "Estou à disposição para entrevistas e alinhamentos sobre oportunidades em Customer Experience, Análise de Dados, Operações e Tecnologia.",
      modalClose: "Fechar",
      modalOpenGithub: "Abrir repositório no GitHub"
    },
    footer: {
      roleLine: "CX, Dados e Tecnologia • 18 anos de bagagem sólida em crédito, atendimento e processos",
      aboutLink: "01. Sobre Mim & Trajetória",
      projectsLink: "02. Projetos",
      resumeLink: "03. Currículo (CV)",
      rights: "Todos os direitos reservados.",
      portfolioLabel: "Portfólio Profissional"
    },
    projectsData: [
      {
        id: "jornada360",
        title: "Jornada360",
        subtitle: "Customer Experience e Customer Success aplicados à jornada habitacional",
        category: "dev",
        categoryLabel: "CX/CS, Operações & Produto",
        summary: "MVP funcional criado a partir de uma jornada operacional real, reunindo Cliente 360º, Journey Health Score, Central de Prioridades, NPS, CSAT e Voz do Cliente para organizar informações, reduzir pontos de atrito e apoiar o acompanhamento.",
        description: "Projeto independente de portfólio inspirado em experiência profissional real no acompanhamento da jornada habitacional e reinterpretado sob a perspectiva de CX, CS, operações, processos e tecnologia. O MVP utiliza dados fictícios e reúne visão do profissional e do cliente, histórico de interações, checklist documental, timeline, prioridades e satisfação.",
        objective: "Transformar uma jornada operacional complexa em uma experiência mais clara, acompanhável e orientada ao próximo passo, sem interferir em decisões de crédito.",
        tools: ["HTML", "CSS", "JavaScript", "LocalStorage", "Node.js", "GitHub Actions", "CX/CS"],
        results: [
          "MVP funcional com 24 clientes fictícios, busca, filtros, Cliente 360º e timeline",
          "Journey Health Score automático e explicável, sem relação com score de crédito",
          "Central de Prioridades dinâmica para organizar jornadas que precisam de acompanhamento",
          "CSAT, NPS e Voz do Cliente integrados ao acompanhamento da experiência",
          "Testes automatizados e workflow de validação no GitHub Actions"
        ],
        image: "https://raw.githubusercontent.com/Priscillacahino/Jornada360/main/demonstracoes/produto_frames/01_dashboard.png",
        technologies: ["Customer Experience", "Customer Success", "JavaScript", "LocalStorage", "Node.js", "GitHub Actions", "Processos"],
        highlights: [
          "Experiência profissional transformada em case independente de produto e tecnologia",
          "Cliente 360º com checklist, timeline, histórico e próxima ação",
          "Health Score transparente voltado à saúde da jornada de acompanhamento",
          "Central de Prioridades baseada em sinais objetivos da própria jornada",
          "Dados fictícios e limites de privacidade claramente documentados"
        ],
        githubUrl: "https://github.com/Priscillacahino/Jornada360",
        featured: true
      },
      {
        id: "aldrin-torneios",
        title: "Aldrin Torneios",
        subtitle: "Automação de uma rotina real de organização de campeonatos",
        category: "dev",
        categoryLabel: "Processos, Automação & Produto Digital",
        summary: "Aplicação criada a partir de uma necessidade real na organização de torneios de futebol. O projeto busca reduzir tarefas manuais e retrabalho na montagem de jogos, horários e campos, além de centralizar informações para facilitar o acompanhamento por pais e responsáveis.",
        description: "Projeto pessoal desenvolvido a partir da observação da rotina de um professor de futebol na preparação de torneios. A solução organiza partidas, horários, campos e classificações, reduz a dependência de controles manuais e facilita o acesso às informações do campeonato.",
        objective: "Entender um processo real, identificar pontos de retrabalho e usar tecnologia para tornar a organização dos torneios mais simples, centralizada e eficiente.",
        tools: ["React", "TypeScript", "Vite", "Processos", "Automação", "Git/GitHub"],
        results: [
          "Centralização de jogos, horários, campos e classificações em uma única aplicação",
          "Redução de tarefas repetitivas na preparação e atualização dos torneios",
          "Acompanhamento das informações por pais e responsáveis sem depender de atualizações individuais",
          "Aplicação prática de análise de processo, organização de informações e desenvolvimento de produto digital"
        ],
        image: null,
        technologies: ["Processos", "Automação", "Produto Digital", "React", "TypeScript", "Experiência do Usuário"],
        highlights: [
          "Projeto criado a partir de uma necessidade real observada na rotina de organização de torneios",
          "Estruturação do fluxo de partidas, horários, campos e classificação",
          "Redução de retrabalho e centralização das informações do campeonato",
          "Solução pensada tanto para quem organiza quanto para quem acompanha o torneio"
        ],
        githubUrl: "https://github.com/Priscillacahino/Aldrin_soccer",
        featured: true
      },
      {
        id: "adm4all",
        title: "Adm4All — Administração para Todos",
        subtitle: "Plataforma de Capacitação & Interface UX/UI (Fábrica de Software UNIPÊ)",
        category: "ux-ui",
        categoryLabel: "UX/UI Design & Produto",
        summary: "Projeto de extensão da Fábrica de Software do UNIPÊ em que atuei na concepção de interfaces, fluxos e prototipação no Figma, organizando a jornada de diferentes perfis para apoiar a digitalização de processos antes manuais.",
        description: "Desenvolvido na Fábrica de Software do UNIPÊ para apoiar o projeto de extensão Administração para Todos, que oferece cursos gratuitos de capacitação comunitária em gestão. Atuei na concepção de UX/UI, sendo responsável pela prototipação das telas, organização dos fluxos e arquitetura da informação para três perfis de usuários: Coordenação, Instrutores e Alunos.",
        objective: "Desenvolver interface centrada no humano para digitalizar a gestão de cursos comunitários, organizando os fluxos de 3 perfis de usuários.",
        tools: ["Figma", "UX Research", "Prototipação Interativa", "Design Centrado no Humano", "Metodologias Ágeis"],
        results: [
          "Prototipação de telas e organização dos fluxos de navegação no Figma",
          "Arquitetura de informação e fluxos desenhados para 3 perfis: Coordenação, Instrutores e Alunos",
          "Centralização de processos manuais: turmas, presença digital, notas e emissão de certificados",
          "Colaboração com a equipe de desenvolvimento na apresentação das interfaces e dos fluxos propostos",
          "Plataforma web publicada para visualização do projeto"
        ],
        image: "/projects/adm4all.webp",
        technologies: ["UX/UI Design", "Figma", "Prototipação", "Mapeamento de Fluxos", "Arquitetura de Informação", "Usabilidade"],
        highlights: [
          "Responsável pela concepção e prototipação completa das telas e interfaces no Figma",
          "Centralização de processos antes manuais: turmas, presença digital, notas e certificados",
          "Estruturação de fluxos para três perfis distintos: Coordenação, Instrutores e Alunos",
          "Foco em usabilidade, clareza e Customer Experience (CX)",
          "Projeto com plataforma web implementada e publicada para visualização"
        ],
        githubUrl: "https://github.com/Priscillacahino/Fabrica_de_Software_2026.1_Adm4All",
        liveUrl: "https://adm4all.extensao-fs.com.br/",
        figmaUrl: "https://www.figma.com/design/J4jTCbznAsTgAty3vPFsJ1/Adm4All?node-id=0-1&m=dev&t=P1kGYH9zdTgibscf-1",
        featured: true
      },
      {
        id: "petzona",
        title: "PetZona",
        subtitle: "UX/UI com visão de Customer Experience — projeto acadêmico em evolução",
        category: "ux-ui",
        categoryLabel: "UX/UI & Customer Experience",
        summary: "Projeto acadêmico de UX/UI que parte do entendimento da jornada do tutor para identificar necessidades, pontos de atrito e oportunidades, traduzindo essas informações em wireframes, protótipos e uma experiência digital mais clara.",
        description: "Proposta de solução digital mobile para o segmento pet, criada inicialmente como avaliação final do Workshop da Fábrica de Software 2026.1 e posteriormente ampliada como estudo de evolução da experiência. Além da interface, o projeto considera a jornada do tutor, pontos de atrito, confiança na contratação e acompanhamento dos serviços. A nova prototipação de alta fidelidade está em desenvolvimento.",
        objective: "Mapear a jornada do tutor e evoluir uma solução mobile-first para produtos e serviços pet, considerando usabilidade, pontos de atrito, confiança e acompanhamento da experiência.",
        tools: ["Figma", "Miro", "Proto-persona", "Jornada do Usuário", "Customer Experience (CX)", "Prototipação Mobile"],
        results: [
          "Projeto avaliativo que viabilizou o ingresso na equipe de UX/UI da Fábrica de Software",
          "Mapeamento da jornada da proto-persona 'Tamiris' com identificação de necessidades, pontos de atrito e oportunidades",
          "Evolução de esboços e wireframes para uma nova prototipação de alta fidelidade atualmente em desenvolvimento",
          "Ampliação da proposta para produtos e serviços como Spa Pet e Táxi Pet, considerando confiança, acompanhamento e experiência do tutor"
        ],
        image: "/projects/petzone.webp",
        technologies: ["Proto-persona", "Jornada do Usuário", "Miro", "Figma", "Wireframes", "UX/UI", "Customer Experience (CX)", "Mobile First"],
        highlights: [
          "Projeto avaliativo que viabilizou o ingresso na equipe de UX/UI da Fábrica de Software",
          "Construção de proto-persona e mapeamento da jornada do usuário no Miro",
          "Evolução visual desde esboços e wireframes até uma nova alta fidelidade em desenvolvimento",
          "Visão de Customer Experience aplicada a pontos de atrito, confiança e acompanhamento dos serviços"
        ],
        githubUrl: "https://github.com/Priscillacahino/PetZona",
        featured: true
      }
    ]
  },
  es: {
    header: {
      subtitle: "Customer Success y Operaciones → Datos y Productos Digitales",
      aboutNav: "Sobre Mí",
      projectsNav: "Proyectos",
      btnResume: "Currículum"
    },
    about: {
      topBadge: "Customer Success y Operaciones • 18 Años en Negocios y Crédito",
      location: "João Pessoa - PB, Brasil",
      profileEyebrow: "Posicionamiento Profesional",
      roles: [
        "Customer Success y Operaciones en Tecnología",
        "18 años en negocios, crédito y relación con clientes",
        "Estudiante de ADS • Posgrado en Ingeniería de Datos"
      ],
      btnProjects: "Ver Proyectos",
      btnResume: "Descargar CV",
      btnWhatsapp: "WhatsApp",
      btnLinkedin: "LinkedIn",
      presentationEyebrow: "Tesis y Posicionamiento",
      presentationHeadline: "Profesional de negocios y crédito con 18 años de experiencia, en transición a tecnología con foco en Customer Success, Operaciones, Datos y Productos Digitales.",
      presentationP1: "Mi trayectoria consolida más de 18 años de experiencia en los sectores bancario e inmobiliario, gestionando flujos de crédito, relaciones consultivas de alta exigencia, cumplimiento normativo y resolución ágil de fricciones operativas complejas.",
      presentationP2: "Curso ADS y desarrollo conocimientos de SQL, Python, Power BI y Figma mediante proyectos académicos. Busco oportunidades para aprender, aplicar estos conocimientos y aportar mi experiencia en atención al cliente, crédito y procesos.",
      copyEmail: "Copiar Correo",
      copied: "¡Copiado!",
      pillarsEyebrow: "Pilares Estratégicos y Competencias",
      pillarsBadge: "04 Pilares Integrados",
      pillars: [
        {
          title: "Core: Customer Success y Operaciones",
          description: "18+ años de sólida trayectoria en los sectores bancario e inmobiliario en análisis y flujo de crédito, atención consultiva y resolución ágil de demandas operativas complejas."
        },
        {
          title: "Diferencial: Análisis de Datos y Métricas",
          description: "Datos aplicados directamente a la experiencia del cliente: modelado relacional, consultas SQL, especificación de dashboards en Power BI y análisis exploratorio."
        },
        {
          title: "Diferencial: UX/UI y Experiencia de Usuario",
          description: "Enfoque centrado en el usuario: mapeo de flujos, arquitectura de información, wireframes y prototipos interactivos en Figma para productos digitales intuitivos."
        },
        {
          title: "Palanca: Inteligencia Artificial y Eficiencia",
          description: "Uso estratégico de IA generativa para estructuración de requerimientos, síntesis de documentación y optimización del flujo de trabajo."
        }
      ],
      storyEyebrow: "Trayectoria y Contexto Profesional",
      storyTitle: "Sobre mí",
      storyBadge: "Priscilla Cahino • CS/CX y Tecnología",
      storyHighlight: "Cuento con más de dieciocho años de experiencia en los sectores bancario e inmobiliario, donde consolidé dominio en atención al cliente, esteiras de crédito, relación de cuentas y resolución de situaciones operativas críticas.",
      storyP1: "A lo largo de esa trayectoria comprendí que la tecnología y el análisis de datos son herramientas ideales para potenciar mi vocación: conectar al cliente con la mejor solución, simplificar procesos burocráticos y eliminar cuellos de botella.",
      storyP2: "Por ello curso Análisis y Desarrollo de Sistemas en UNIPÊ y participé en proyectos de la Fábrica de Software. Estoy conectando mi experiencia en negocios y atención al cliente con los conocimientos que desarrollo en tecnología y análisis de datos.",
      storyP3: "En proyectos académicos practico SQL, Python y Power BI para organizar y explorar información, además de Figma y mapeo de jornadas para estudiar la experiencia del usuario. Busco ampliar esa práctica y aportar mi experiencia en procesos y atención al cliente.",
      storyQuoteBox: "“Mi misión es aplicar inteligencia de procesos, visión analítica y empatía en la experiencia del usuario para transformar operaciones complejas en jornadas simples, humanas e orientadas a resultados.”",
      personalTitle: "Más allá de la tecnología",
      personalText: "En mis momentos libres disfruto de la costa y el mar en João Pessoa, de una buena película con palomitas y de observar la interacción humana. Observar es la mejor manera de cultivar la empatía: primero escuchar activamente, comprender las necesidades reales y, solo entonces, diseñar soluciones efectivas.",
      aiTitle: "Inteligencia Artificial como acelerador estratégico",
      aiText: "Utilizo activamente la Inteligencia Artificial en mi rutina profesional y académica para sintetizar requerimientos, explorar hipótesis analíticas y optimizar la productividad diaria con criterio.",
      storyClosing: "Este espacio comparte mi perfil profesional auténtico, mi visión de impacto y los proyectos prácticos que desarrollo y publico en GitHub.",
      featuredEyebrow: "Proyectos y Práctica",
      featuredTitle: "Proyectos Destacados",
      featuredSubtitle: "Soluciones prácticas desarrolladas en la Fábrica de Software y talleres técnicos.",
      viewAllProjects: "Ver todos los proyectos detallados",
      quoteEyebrow: "Principio de Acción",
      quoteText: "“Las oportunidades se multiplican a medida que se aprovechan.”",
      quoteAuthor: "Sun Tzu — El Arte de la Guerra",
      quoteNote: "Texto estructurado por Priscilla Cahino.",
      ctaEyebrow: "Contacto y Conexión",
      ctaTitle: "Abierta a nuevas oportunidades y colaboraciones estratégicas",
      ctaDescription: "Busco oportunidades para aplicar mi experiencia profesional, seguir aprendiendo y desarrollar mi trayectoria en tecnología, datos, Customer Experience y áreas relacionadas."
    },
    projects: {
      eyebrow: "Portafolio Técnico y GitHub",
      title: "Proyectos & GitHub",
      subtitle: "Proyectos académicos y prácticos en distintos contextos, en los que aplico tecnología, experiencia de usuario, datos y visión de procesos para comprender problemas y desarrollar soluciones.",
      filterLabel: "Filtrar por área:",
      filters: {
        all: "Todos",
        data: "Datos & BI",
        ux: "Diseño UX/UI",
        dev: "Desarrollo y Sistemas"
      },
      highlightsLabel: "Entregables y Puntos Destacados:",
      techLabel: "Tecnologías y Herramientas:",
      btnLive: "Acceder a Plataforma Web",
      btnFigma: "Prototipo en Figma",
      btnResume: "Ver Currículum Completo",
      btnReturnAbout: "Volver a Sobre Mí y Perfil",
      returnBoxTitle: "¿Desea conocer más sobre mi trayectoria profesional?",
      returnBoxDesc: "Consulte los 18+ años de experiencia consolidada en operaciones, crédito y relación con clientes en la página Sobre Mí.",
      ctaEyebrow: "Contacto y Conexión",
      ctaTitle: "¿Conversamos sobre nuevas oportunidades?",
      ctaDescription: "Estoy a disposición para entrevistas y conversaciones sobre oportunidades en Customer Experience, Análisis de Datos, Operaciones y Tecnología.",
      modalClose: "Cerrar",
      modalOpenGithub: "Abrir repositorio en GitHub"
    },
    footer: {
      roleLine: "CX, Datos y Tecnología • 18 años de experiencia en crédito, atención y procesos",
      aboutLink: "01. Sobre Mí y Trayectoria",
      projectsLink: "02. Proyectos",
      resumeLink: "03. Currículum (CV)",
      rights: "Todos los derechos reservados.",
      portfolioLabel: "Portafolio Profesional"
    },
    projectsData: [
      {
        id: "jornada360",
        title: "Jornada360",
        subtitle: "Customer Experience y Customer Success aplicados a la jornada de financiación de vivienda",
        category: "dev",
        categoryLabel: "CX/CS, Operaciones & Producto",
        summary: "MVP funcional creado a partir de una jornada operativa real, reuniendo Cliente 360º, Journey Health Score, Central de Prioridades, NPS, CSAT y Voz del Cliente para organizar información, reducir puntos de fricción y apoyar el seguimiento.",
        description: "Proyecto independiente de portafolio inspirado en experiencia profesional real en el acompañamiento de la jornada de financiación de vivienda y reinterpretado desde la perspectiva de CX, CS, operaciones, procesos y tecnología. El MVP utiliza datos ficticios e integra la visión del profesional y del cliente, historial de interacciones, checklist documental, timeline, prioridades y satisfacción.",
        objective: "Transformar una jornada operativa compleja en una experiencia más clara, trazable y orientada al siguiente paso, sin intervenir en decisiones de crédito.",
        tools: ["HTML", "CSS", "JavaScript", "LocalStorage", "Node.js", "GitHub Actions", "CX/CS"],
        results: [
          "MVP funcional con 24 clientes ficticios, búsqueda, filtros, Cliente 360º y timeline",
          "Journey Health Score automático y explicable, sin relación con score de crédito",
          "Central de Prioridades dinámica para organizar jornadas que requieren seguimiento",
          "CSAT, NPS y Voz del Cliente integrados al seguimiento de la experiencia",
          "Pruebas automatizadas y workflow de validación en GitHub Actions"
        ],
        image: "https://raw.githubusercontent.com/Priscillacahino/Jornada360/main/demonstracoes/produto_frames/01_dashboard.png",
        technologies: ["Customer Experience", "Customer Success", "JavaScript", "LocalStorage", "Node.js", "GitHub Actions", "Procesos"],
        highlights: [
          "Experiencia profesional transformada en un case independiente de producto y tecnología",
          "Cliente 360º con checklist, timeline, historial y próxima acción",
          "Health Score transparente orientado a la salud de la jornada de seguimiento",
          "Central de Prioridades basada en señales objetivas de la propia jornada",
          "Datos ficticios y límites de privacidad claramente documentados"
        ],
        githubUrl: "https://github.com/Priscillacahino/Jornada360",
        featured: true
      },
      {
        id: "aldrin-torneios",
        title: "Aldrin Torneios",
        subtitle: "Automatización de una rutina real de organización de campeonatos",
        category: "dev",
        categoryLabel: "Procesos, Automatización & Producto Digital",
        summary: "Aplicación creada a partir de una necesidad real en la organización de torneos de fútbol. El proyecto busca reducir tareas manuales y retrabajo en la preparación de partidos, horarios y campos, además de centralizar información para facilitar el seguimiento de padres y responsables.",
        description: "Proyecto personal desarrollado a partir de observar la rutina de un profesor de fútbol al preparar torneos. La solución organiza partidos, horarios, campos y clasificaciones, reduce la dependencia de controles manuales y facilita el acceso a la información del campeonato.",
        objective: "Comprender un proceso real, identificar puntos de retrabajo y usar tecnología para hacer la organización de los torneos más simple, centralizada y eficiente.",
        tools: ["React", "TypeScript", "Vite", "Procesos", "Automatización", "Git/GitHub"],
        results: [
          "Centralización de partidos, horarios, campos y clasificaciones en una sola aplicación",
          "Reducción de tareas repetitivas en la preparación y actualización de los torneos",
          "Seguimiento de la información por padres y responsables sin depender de actualizaciones individuales",
          "Aplicación práctica de análisis de procesos, organización de información y desarrollo de producto digital"
        ],
        image: null,
        technologies: ["Procesos", "Automatización", "Producto Digital", "React", "TypeScript", "Experiencia de Usuario"],
        highlights: [
          "Proyecto creado a partir de una necesidad real observada en la rutina de organización de torneos",
          "Estructuración del flujo de partidos, horarios, campos y clasificación",
          "Reducción de retrabajo y centralización de la información del campeonato",
          "Solución pensada tanto para quien organiza como para quien acompaña el torneo"
        ],
        githubUrl: "https://github.com/Priscillacahino/Aldrin_soccer",
        featured: true
      },
      {
        id: "adm4all",
        title: "Adm4All — Administración para Todos",
        subtitle: "Plataforma de Capacitación e Interfaz UX/UI (Fábrica de Software UNIPÊ)",
        category: "ux-ui",
        categoryLabel: "Diseño UX/UI & Producto",
        summary: "Proyecto de extensión de la Fábrica de Software de UNIPÊ en el que trabajé en la concepción de interfaces, flujos y prototipos en Figma, organizando la jornada de distintos perfiles para apoyar la digitalización de procesos antes manuales.",
        description: "Desarrollado en la Fábrica de Software de UNIPÊ para apoyar el proyecto de extensión comunitaria que ofrece cursos gratuitos de gestión. Participé en el diseño UX/UI en Figma, organizando los flujos y la arquitectura de información para tres perfiles de usuario: Coordinación, Instructores y Alumnos.",
        objective: "Diseñar interfaces centradas en las personas para digitalizar la gestión de cursos comunitarios, optimizando la experiencia de 3 perfiles de usuario y reduciendo la fricción.",
        tools: ["Figma", "UX Research", "Prototipado Interactivo", "Diseño Centrado en el Humano", "Metodologías Ágiles"],
        results: [
          "Prototipado de pantallas y organización de los flujos de navegación en Figma",
          "Arquitectura de información y flujos para Coordinación, Docentes y Alumnos",
          "Centralización de procesos manuales: clases, asistencia digital, calificaciones y certificados",
          "Colaboración con el equipo de desarrollo en la presentación de interfaces y flujos propuestos",
          "Plataforma web publicada para visualizar el proyecto"
        ],
        image: "/projects/adm4all.webp",
        technologies: ["Diseño UX/UI", "Figma", "Prototipado", "Mapeo de Flujos", "Arquitectura de Información", "Usabilidade"],
        highlights: [
          "Responsable del diseño y prototipado integral de interfaces y pantallas en Figma",
          "Centralización digital de procesos antes manuales: asistencia, notas y certificados",
          "Estructuración de flujos para tres perfiles: Coordinación, Docentes y Alumnos",
          "Enfoque en usabilidad, claridad visual y Customer Experience (CX)",
          "Proyecto con plataforma web operativa y publicada para acceso público"
        ],
        githubUrl: "https://github.com/Priscillacahino/Fabrica_de_Software_2026.1_Adm4All",
        liveUrl: "https://adm4all.extensao-fs.com.br/",
        figmaUrl: "https://www.figma.com/design/J4jTCbznAsTgAty3vPFsJ1/Adm4All?node-id=0-1&m=dev&t=P1kGYH9zdTgibscf-1",
        featured: true
      },
      {
        id: "petzona",
        title: "PetZona",
        subtitle: "UX/UI con visión de Customer Experience — proyecto académico en evolución",
        category: "ux-ui",
        categoryLabel: "UX/UI & Customer Experience",
        summary: "Proyecto académico de UX/UI que parte de comprender la jornada del tutor para identificar necesidades, fricciones y oportunidades, traduciendo esa información en wireframes, prototipos y una experiencia digital más clara.",
        description: "Propuesta de solución digital móvil para el segmento pet, creada inicialmente como evaluación final del Workshop de la Fábrica de Software 2026.1 y posteriormente ampliada como estudio de evolución de la experiencia. Además de la interfaz, el proyecto considera la jornada del tutor, puntos de fricción, confianza en la contratación y seguimiento de los servicios. La nueva prototipación de alta fidelidad está en desarrollo.",
        objective: "Mapear la jornada del tutor y evolucionar una solución mobile-first para productos y servicios pet, considerando usabilidad, puntos de fricción, confianza y seguimiento de la experiencia.",
        tools: ["Figma", "Miro", "Proto-persona", "Jornada del Usuario", "Customer Experience (CX)", "Prototipado Mobile"],
        results: [
          "Proyecto evaluativo que facilitó el ingreso al equipo de UX/UI de la Fábrica de Software",
          "Mapeo de la jornada de la proto-persona 'Tamiris' con identificación de necesidades, fricciones y oportunidades",
          "Evolución de bocetos y wireframes hacia una nueva prototipación de alta fidelidad actualmente en desarrollo",
          "Ampliación de la propuesta con productos y servicios como Spa Pet y Táxi Pet, considerando confianza, seguimiento y experiencia del tutor"
        ],
        image: "/projects/petzone.webp",
        technologies: ["Proto-persona", "Jornada del Usuario", "Miro", "Figma", "Wireframes", "UX/UI", "Customer Experience (CX)", "Mobile First"],
        highlights: [
          "Proyecto evaluativo que posibilitó el ingreso al equipo de UX/UI de la Fábrica de Software",
          "Construcción de proto-persona y mapeo de la jornada del usuario en Miro",
          "Evolución visual desde bocetos y wireframes hacia una nueva alta fidelidad en desarrollo",
          "Visión de Customer Experience aplicada a puntos de fricción, confianza y seguimiento de los servicios"
        ],
        githubUrl: "https://github.com/Priscillacahino/PetZona",
        featured: true
      }
    ]
  }
};
