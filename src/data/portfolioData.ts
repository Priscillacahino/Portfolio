import { AcademicProject, ContactInfo } from '../types';

export const CONTACT_DATA: ContactInfo = {
  name: "Priscilla Cahino",
  tagline: "CX, Dados e Tecnologia — experiência em negócios e crédito, estudante de ADS",
  phone: "+5583999553329",
  phoneFormatted: "(83) 99955-3329",
  email: "priscilla_cahino@hotmail.com",
  secondaryEmail: "priscillacahinoo@gmail.com",
  linkedin: "https://www.linkedin.com/in/priscilla-cahino",
  github: "https://github.com/Priscillacahino",
  whatsappUrl: "https://wa.me/5583999553329?text=Ol%C3%A1%20Priscilla!%20Vi%20seu%20portf%C3%B3lio%20profissional.",
  location: "João Pessoa - PB, Brasil",
  resumePdfUrl: "/Curriculo_Priscilla_Cahino.pdf?v=20260928-4"
};

export const ACADEMIC_PROJECTS: AcademicProject[] = [
  {
    id: "jornada360",
    title: "Jornada360",
    subtitle: "Customer Experience e Customer Success aplicados à jornada de financiamento habitacional",
    category: "dev",
    categoryLabel: "CX/CS, Operações & Produto",
    summary: "MVP funcional que transforma uma jornada operacional complexa em uma experiência mais clara e acompanhável, reunindo Cliente 360º, Journey Health Score, Central de Prioridades, NPS, CSAT e Voz do Cliente.",
    description: "Projeto independente de portfólio inspirado em experiência profissional real no acompanhamento da jornada habitacional e reinterpretado sob a perspectiva de CX, CS, operações, processos e tecnologia. O MVP utiliza dados fictícios e organiza a visão do profissional e do cliente, com indicadores, histórico de interações, checklist documental, timeline, prioridades e satisfação.",
    objective: "Demonstrar como conhecimento de negócio e atendimento pode ser transformado em uma solução digital para organizar jornadas, antecipar pontos de atrito e orientar o próximo passo sem interferir em decisões de crédito.",
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
      "Transformação de experiência profissional em um case independente de produto e tecnologia",
      "Visão integrada da jornada com Cliente 360º, checklist, timeline e próxima ação",
      "Health Score transparente voltado à saúde do acompanhamento, não à concessão de crédito",
      "Priorização operacional baseada em sinais objetivos da própria jornada",
      "Dados integralmente fictícios e limites de privacidade claramente documentados"
    ],
    githubUrl: "https://github.com/Priscillacahino/Jornada360",
    featured: true
  },
  {
    id: "adm4all",
    title: "Adm4All — Administração para Todos",
    subtitle: "Projeto de extensão relacionado à gestão e acompanhamento da jornada dos alunos",
    category: "ux-ui",
    categoryLabel: "Projeto de Extensão Comunitária",
    summary: "Projeto de extensão relacionado à gestão e acompanhamento da jornada dos alunos na Fábrica de Software do UNIPÊ, atuando na concepção de interfaces, fluxos e prototipação no Figma.",
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
    technologies: ["Figma", "UX/UI", "Fluxos", "Prototipação", "Arquitetura de Informação"],
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
    summary: "Projeto acadêmico de UX/UI que reúne proto-persona, jornada do usuário, wireframes e prototipação no Figma, evoluindo também para uma visão de Customer Experience.",
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
];
