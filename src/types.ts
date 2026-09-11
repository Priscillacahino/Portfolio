export type PageType = 'home' | 'about' | 'projects' | 'article';

export type Language = 'pt' | 'es';

export type ProjectCategory = 'all' | 'data' | 'ux-ui' | 'dev';

export interface ArticleSection {
  id: string;
  title: string;
  paragraphs: string[];
  highlight?: string;
}

export interface ArticleData {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  undergraduate: string;
  originalYear: number;
  revisitYear: number;
  tags: string[];
  disclaimer: string;
  summary: string;
  sections: ArticleSection[];
  conclusion: {
    title: string;
    paragraphs: string[];
    closingQuote: string;
  };
  originalResearch: {
    title: string;
    institution: string;
    course: string;
    area: string;
    pages: number;
    year: number;
    methodology: string;
    instruments: string[];
    objective: string;
    context: string;
    keyFindings: string[];
  };
}

export interface AcademicProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'data' | 'ux-ui' | 'dev';
  categoryLabel: string;
  summary: string;
  description: string;
  image?: string | null;
  technologies: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  figmaUrl?: string;
  featured?: boolean;
  objective?: string;
  tools?: string[];
  results?: string[];
}

export interface ContactInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  secondaryEmail?: string;
  linkedin: string;
  github: string;
  whatsappUrl: string;
  location: string;
  resumePdfUrl?: string;
}

export interface UIContent {
  header: {
    subtitle: string;
    aboutNav: string;
    projectsNav: string;
    btnResume: string;
  };
  about: {
    topBadge: string;
    location: string;
    profileEyebrow: string;
    roles: string[];
    btnProjects: string;
    btnResume: string;
    btnWhatsapp: string;
    btnLinkedin: string;
    presentationEyebrow: string;
    presentationHeadline: string;
    presentationP1: string;
    presentationP2: string;
    copyEmail: string;
    copied: string;
    pillarsEyebrow: string;
    pillarsBadge: string;
    pillars: Array<{
      title: string;
      description: string;
    }>;
    storyEyebrow: string;
    storyTitle: string;
    storyBadge: string;
    storyHighlight: string;
    storyP1: string;
    storyP2: string;
    storyP3: string;
    storyQuoteBox: string;
    personalTitle: string;
    personalText: string;
    aiTitle: string;
    aiText: string;
    storyClosing: string;
    featuredEyebrow: string;
    featuredTitle: string;
    featuredSubtitle: string;
    viewAllProjects: string;
    quoteEyebrow: string;
    quoteText: string;
    quoteAuthor: string;
    quoteNote: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaDescription: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    filterLabel: string;
    filters: {
      all: string;
      data: string;
      ux: string;
      dev: string;
    };
    highlightsLabel: string;
    techLabel: string;
    btnLive: string;
    btnFigma: string;
    btnResume: string;
    btnReturnAbout: string;
    returnBoxTitle: string;
    returnBoxDesc: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaDescription: string;
    modalClose: string;
    modalOpenGithub: string;
  };
  footer: {
    roleLine: string;
    aboutLink: string;
    projectsLink: string;
    resumeLink: string;
    rights: string;
    portfolioLabel: string;
  };
  projectsData: AcademicProject[];
}
