import { AcademicProject, ContactInfo } from '../types';

export const CONTACT_DATA: ContactInfo = {
  name: "Priscilla Cahino",
  tagline: "Customer Success e Operações em Tecnologia — 18 anos em negócios e crédito, em transição para Tech (cursando ADS)",
  phone: "+5583999553329",
  phoneFormatted: "(83) 99955-3329",
  email: "priscilla_cahino@hotmail.com",
  secondaryEmail: "priscillacahinoo@gmail.com",
  linkedin: "https://www.linkedin.com/in/priscilla-cahino",
  github: "https://github.com/Priscillacahino",
  whatsappUrl: "https://wa.me/5583999553329?text=Ol%C3%A1%20Priscilla!%20Vi%20seu%20portf%C3%B3lio%20profissional.",
  location: "João Pessoa - PB, Brasil",
  resumePdfUrl: "/Curriculo_Priscilla_Cahino.pdf"
};

export const ACADEMIC_PROJECTS: AcademicProject[] = [
  {
    id: "clinicacare",
    title: "ClínicaCare — Análise de Dados",
    subtitle: "Projeto acadêmico envolvendo banco de dados e análise de informações",
    category: "data",
    categoryLabel: "Projeto Acadêmico de Análise de Dados",
    summary: "Projeto acadêmico envolvendo banco de dados relacional, manipulação com SQL, análise exploratória em Python e dashboard executivo no Power BI para suporte a decisões de uma clínica de saúde.",
    description: "Projeto acadêmico desenvolvido como desafio técnico final de workshop, simulando o cenário de uma clínica de saúde que precisa organizar e analisar seus dados operacionais. O trabalho reúne etapas de modelagem de banco de dados no MySQL, criação e manipulação com SQL, análise exploratória e introdução a Machine Learning em Python, e construção de dashboard de indicadores no Power BI.",
    objective: "Identificar gargalos na jornada operacional de consultas e pagamentos de uma clínica de saúde, estruturando banco relacional e propondo melhorias preventivas para redução de inadimplência com dados.",
    tools: ["SQL (MySQL)", "Python (Pandas)", "Power BI", "Modelagem Relacional", "Machine Learning (Scikit-Learn)"],
    results: [
      "Estruturação e modelagem relacional completa em MySQL com scripts padronizados de DDL e DML",
      "Análise exploratória com Python/Pandas identificando correlações de faltas e histórico financeiro",
      "Dashboard executivo no Power BI com acompanhamento dinâmico de faturamento, especialidades e inadimplência",
      "Geração de insights para tomada de decisão preventiva sobre agendamentos e cobrança"
    ],
    image: "/projects/clinicacare.webp",
    technologies: ["SQL", "Python", "Power BI", "Análise de Dados", "MySQL", "Pandas"],
    highlights: [
      "Modelagem lógica e scripts estruturados de criação e manipulação em banco MySQL",
      "Análise de volume de consultas por especialidade, faltas e status de pagamento",
      "Análise exploratória em Python (Pandas) para identificação de padrões associados à inadimplência",
      "Dashboard executivo no Power BI para acompanhamento de métricas operacionais da clínica",
      "Base de dados desenvolvida para fins de estudo acadêmico e tomada de decisão"
    ],
    githubUrl: "https://github.com/Priscillacahino/Desafio_Final_Workshop_26.2_ClinicaCare",
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
    objective: "Desenvolver interface centrada no humano para digitalizar a gestão de cursos comunitários, otimizando o fluxo de 3 perfis de usuários e eliminando fricções operacionais.",
    tools: ["Figma", "UX Research", "Prototipação Interativa", "Design Centrado no Humano", "Metodologias Ágeis"],
    results: [
      "Redução de 30% nos pontos de atrito identificados em testes de usabilidade com usuários reais",
      "Arquitetura de informação e fluxos desenhados para 3 perfis: Coordenação, Instrutores e Alunos",
      "Centralização de processos manuais: turmas, presença digital, notas e emissão de certificados",
      "Colaboração ágil com a equipe de engenharia garantindo 100% de fidelidade entre design e implementação",
      "Plataforma web publicada e em produção no ambiente de extensão"
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
    subtitle: "Projeto desenvolvido como avaliação final de workshop de UX/UI para participação na Fábrica de Software",
    category: "ux-ui",
    categoryLabel: "Projeto de Estudo & Avaliação Prática",
    summary: "Projeto desenvolvido como avaliação final de workshop de UX/UI para participação na Fábrica de Software, englobando persona, jornada no Miro e protótipo interativo no Figma.",
    description: "Proposta de solução digital mobile para o segmento pet, criada como avaliação final do Workshop da Fábrica de Software 2026.1. O processo compreendeu a criação da persona 'Tamiris', mapeamento completo da jornada do cliente no Miro, esboços iniciais manuais, wireframes e protótipos de baixa e alta fidelidade navegáveis no Figma.",
    objective: "Mapear a jornada do tutor de pets e prototipar uma solução mobile-first para agendamento ágil de consultas e serviços veterinários com alta usabilidade.",
    tools: ["Figma", "Miro", "Pesquisa com Usuários", "Mapeamento de Jornada (CX)", "Prototipação Mobile"],
    results: [
      "Projeto avaliativo com nota de destaque que viabilizou o ingresso na equipe de UX/UI da Fábrica de Software",
      "Mapeamento completo da jornada da persona 'Tamiris' no Miro com identificação de dores e oportunidades",
      "Evolução visual desde esboços manuais até protótipo interativo em alta fidelidade navegável",
      "Fluxo de agendamento mobile simplificado com feedback imediato ao usuário"
    ],
    image: "/projects/petzone.webp",
    technologies: ["Persona", "Jornada", "Wireframe", "Figma", "UX/UI"],
    highlights: [
      "Projeto avaliativo que viabilizou o ingresso na equipe de UX/UI da Fábrica de Software",
      "Construção da persona e Mapeamento da Jornada do Cliente no Miro",
      "Evolução visual desde esboços à mão até protótipos de baixa e alta fidelidade",
      "Protótipo navegável interativo no Figma com fluxos de agendamento de cuidados e serviços veterinários"
    ],
    githubUrl: "https://github.com/Priscillacahino/Workshop_Desafio-Final_PetZona",
    figmaUrl: "https://www.figma.com/proto/O5rsOpFFIhtEOQWkDdcwW7/Sem-t%C3%ADtulo?node-id=94-537&p=f&t=iJxgDcyvzsfzQQxZ-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
    featured: true
  }
];
