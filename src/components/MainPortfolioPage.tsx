import React, { useState } from 'react';
import { PageType, Language, AcademicProject } from '../types';
import { CONTACT_DATA, ACADEMIC_PROJECTS } from '../data/portfolioData';
import { TRANSLATIONS } from '../data/translations';
import { SUSTAINABILITY_ARTICLE } from '../data/articleData';
import { OriginalResearchModal } from './OriginalResearchModal';
import { PetzoneWireframeViewer } from './PetzoneWireframeViewer';
import { 
  ArrowRight, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Layers, 
  Database, 
  ExternalLink,
  Bot, 
  Coffee,
  Copy, 
  Check,
  FileText,
  Download,
  Building2,
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  Sparkles,
  Smartphone,
  ShieldCheck,
  Code2,
  Briefcase,
  ChevronRight,
  X
} from 'lucide-react';

interface MainPortfolioPageProps {
  onSelectPage: (page: PageType) => void;
  currentLanguage: Language;
  onOpenResume?: () => void;
  onOpenArticle: () => void;
  onSelectProject?: (projectId: string) => void;
}

export const MainPortfolioPage: React.FC<MainPortfolioPageProps> = ({
  onSelectPage,
  currentLanguage,
  onOpenResume,
  onOpenArticle,
  onSelectProject
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeProjectModal, setActiveProjectModal] = useState<AcademicProject | null>(null);
  const [showWireframeStandalone, setShowWireframeStandalone] = useState(false);
  const [isResearchModalOpen, setIsResearchModalOpen] = useState(false);

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isPt = currentLanguage === 'pt';
  const localizedProjects = isPt ? ACADEMIC_PROJECTS : TRANSLATIONS.es.projectsData;
  const dataProjects = localizedProjects.filter(p => p.category === 'data');
  const uxProjects = localizedProjects.filter(p => p.category === 'ux-ui');

  const t = isPt ? {
    location: '{t.location}',
    identityRole: '{t.identityRole}',
    educationLine: '{t.educationLine}',
    knowJourney: 'Conheça minha trajetória',
    viewProjects: 'Ver projetos',
    downloadResume: 'Baixar currículo',
    positioning: '{t.positioning}',
    heroQuote: '{t.heroQuote}',
    heroP1: '{t.heroP1}',
    heroP2: 'Essa vivência me ensinou que processos eficientes nascem da escuta ativa e da precisão das informações. Hoje, conecto essa bagagem de negócios aos conhecimentos que venho desenvolvendo em tecnologia, UX/UI e análise de informações, buscando compreender como essas ferramentas podem apoiar processos e decisões.',
    copyEmail: 'Copiar E-mail',
    copied: 'Copiado!',
    storyEyebrow: '{t.storyEyebrow}',
    aboutMe: '{t.aboutMe}',
    storyBadge: '{t.storyBadge}',
    storyHighlight: '{t.storyHighlight}',
    storyP1: '{t.storyP1}',
    storyP2: '{t.storyP2}',
    storyP3: '{t.storyP3}',
    principle: '{t.principle}',
    quote: '{t.quote}',
    quoteAuthor: '{t.quoteAuthor}',
    personalTitle: '{t.personalTitle}',
    personalText: '{t.personalText}',
    aiTitle: '{t.aiTitle}',
    aiText: '{t.aiText}',
    closing: '{t.closing}',
    fullHistory: '{t.fullHistory}',
    viewFullHistory: 'Ver histórico profissional completo em PDF →',
    knowledgeEyebrow: '{t.knowledgeEyebrow}',
    knowledgeTitle: '{t.knowledgeTitle}',
    knowledgeSubtitle: '{t.knowledgeSubtitle}',
    expKnowledge: '{t.expKnowledge}',
    consolidated: '{t.consolidated}',
    cxTitle: '{t.cxTitle}',
    cxDesc: '{t.cxDesc}',
    financeTitle: '{t.financeTitle}',
    financeDesc: '{t.financeDesc}',
    processTitle: '{t.processTitle}',
    processDesc: '{t.processDesc}',
    devKnowledge: '{t.devKnowledge}',
    learning: '{t.learning}',
    data: 'Dados',
    development: 'Desenvolvimento',
    projectsEyebrow: '{t.projectsEyebrow}',
    projectsTitle: 'Projetos',
    projectsSubtitle: '{t.projectsSubtitle}',
    viewGithub: 'Ver repositórios no GitHub →',
    dataBI: '{t.dataBI}',
    academicData: '{t.academicData}',
    knowProject: 'Conhecer projeto',
    uxArea: '{t.uxArea}',
    extensionProject: '{t.extensionProject}',
    admSummary: '{t.admSummary}',
    viewProject: 'Ver projeto',
    testWireframe: 'Testar Wireframe',
    articlesEyebrow: '{t.articlesEyebrow}',
    articlesTitle: '{t.articlesTitle}',
    articlesSubtitle: '{t.articlesSubtitle}',
    readArticle: 'Ler artigo completo',
    originalResearch: 'Sobre a pesquisa original',
    certEyebrow: '{t.certEyebrow}',
    certTitle: '{t.certTitle}',
    certSubtitle: '{t.certSubtitle}',
    toolsEyebrow: '{t.toolsEyebrow}',
    toolsTitle: '{t.toolsTitle}',
    toolsSubtitle: '{t.toolsSubtitle}',
    resumeEyebrow: '{t.resumeEyebrow}',
    resumeTitle: 'Currículo',
    resumeDesc: '{t.resumeDesc}',
    viewBrowser: 'Visualizar no Navegador',
    downloadPdf: 'Baixar currículo em PDF',
    contactEyebrow: '{t.contactEyebrow}',
    contactQuote: '{t.contactQuote}',
    email: 'E-mail',
    close: 'Fechar'
  } : {
    location: '{t.location}',
    identityRole: 'Customer Experience (CX/CS) • Análisis de Datos • Tecnología',
    educationLine: 'Ciencias Contables | Estudiante de Análisis y Desarrollo de Sistemas',
    knowJourney: 'Conoce mi trayectoria',
    viewProjects: 'Ver proyectos',
    downloadResume: 'Descargar currículum',
    positioning: 'Posicionamiento & Conexión',
    heroQuote: '“Conectando experiencia en relación con clientes, operaciones financieras y procesos con nuevos conocimientos en tecnología y análisis de datos.”',
    heroP1: 'Cuento con más de dieciocho años de experiencia práctica en los sectores bancario e inmobiliario, con actuación directa en procesos de crédito, análisis documental, cumplimiento normativo y resolución de situaciones operativas complejas con fuerte enfoque en el cliente.',
    heroP2: 'Esta experiencia me enseñó que los procesos eficientes nacen de la escucha activa y de la precisión de la información. Hoy conecto esta trayectoria de negocios con los conocimientos que vengo desarrollando en tecnología, UX/UI y análisis de información, buscando comprender cómo estas herramientas pueden apoyar procesos y decisiones.',
    copyEmail: 'Copiar correo',
    copied: '¡Copiado!',
    storyEyebrow: 'Trayectoria & Contexto Profesional',
    aboutMe: 'Sobre mí',
    storyBadge: 'Priscilla Cahino • Experiencia, Negocios & Tecnología',
    storyHighlight: '“Soy una profesional con más de dieciocho años de experiencia en los sectores bancario e inmobiliario. Fue en este entorno de alta exigencia donde desarrollé experiencia en atención, relación con clientes, operaciones financieras, crédito, análisis documental y resolución de demandas complejas.”',
    storyP1: 'A lo largo de esta trayectoria, comprendí cómo los procesos bien estructurados, la información clara y una buena comprensión de las necesidades de las personas pueden hacer que las experiencias sean más simples y eficientes. Con el tiempo, empecé a ver la tecnología como una forma de ampliar esta visión y buscar nuevas maneras de organizar procesos, reducir fricciones y apoyar mejores decisiones.',
    storyP2: 'Por eso inicié mi formación en Análisis y Desarrollo de Sistemas (ADS) en UNIPÊ y comencé a participar en proyectos académicos y de la Fábrica de Software. Hoy conecto mi experiencia profesional con los conocimientos que vengo desarrollando en tecnología, UX/UI, análisis de información y soluciones digitales.',
    storyP3: 'En los proyectos tengo contacto con herramientas como SQL, Power BI, Figma, Git/GitHub y lenguajes de programación, siempre dentro de un proceso continuo de aprendizaje y aplicación práctica. Más que dominar una herramienta específica, busco comprender cómo diferentes recursos pueden contribuir a resolver problemas y mejorar la experiencia de quienes utilizan una solución.',
    principle: 'Principio de Acción',
    quote: '“Las oportunidades se multiplican a medida que se aprovechan.”',
    quoteAuthor: 'Sun Tzu — El Arte de la Guerra',
    personalTitle: 'Más allá del trabajo y la tecnología',
    personalText: 'En mis momentos de descanso disfruto del mar y de la playa en João Pessoa, ver películas y series, leer y compartir con amigos y familia. También me gusta observar el comportamiento de las personas y la vida cotidiana, porque creo que escuchar con atención y comprender diferentes perspectivas ayuda a desarrollar empatía y pensar soluciones más útiles.',
    aiTitle: 'Inteligencia Artificial como apoyo a la evolución y la productividad',
    aiText: 'La Inteligencia Artificial pasó a formar parte de mi proceso de aprendizaje y también de la forma en que estructuro y desarrollo proyectos. Utilizo estas herramientas para organizar ideas, apoyar investigaciones, estructurar requisitos, documentar soluciones, explorar posibilidades, revisar contenidos y mejorar la productividad. También busco comprender cómo la IA puede aplicarse a automatizaciones y a diferentes etapas de la construcción de soluciones digitales, combinando siempre sus recursos con análisis crítico, validación de la información y comprensión del contexto.',
    closing: 'Este espacio reúne parte de mi trayectoria, de los conocimientos que vengo desarrollando y de los proyectos que forman parte de mi transición hacia la tecnología. Mi objetivo es seguir aprendiendo y evolucionando, conectando mi experiencia en clientes, operaciones y procesos con las nuevas posibilidades que ofrece la tecnología.',
    fullHistory: 'Historial profesional detallado (+18 años), empresas y funciones disponibles en el documento oficial.',
    viewFullHistory: 'Ver historial profesional completo en PDF →',
    knowledgeEyebrow: 'Estructura de Competencias',
    knowledgeTitle: 'Áreas de conocimiento',
    knowledgeSubtitle: 'Diferenciación clara entre experiencia profesional consolidada y conocimientos en desarrollo.',
    expKnowledge: 'Experiencia y conocimientos profesionales',
    consolidated: '18+ años de experiencia consolidada',
    cxTitle: 'Customer Experience y Customer Success',
    cxDesc: 'Relación con clientes, atención, jornada, resolución de demandas y mejora de procesos.',
    financeTitle: 'Operaciones Financieras y Crédito',
    financeDesc: 'Análisis de crédito y riesgo, financiación, operaciones bancarias, procesos inmobiliarios y cumplimiento.',
    processTitle: 'Procesos y Negocios',
    processDesc: 'Organización de procesos, análisis de requisitos, relación entre áreas e identificación de oportunidades de mejora.',
    devKnowledge: 'Conocimientos en desarrollo',
    learning: 'En formación práctica y aprendizaje continuo',
    data: 'Datos',
    development: 'Desarrollo',
    projectsEyebrow: 'Portafolio Técnico & Aplicación',
    projectsTitle: 'Proyectos',
    projectsSubtitle: 'Proyectos académicos, de práctica y extensión comunitaria con enfoque en Datos, BI y UX/UI.',
    viewGithub: 'Ver repositorios en GitHub →',
    dataBI: 'Datos & Business Intelligence',
    academicData: 'Proyecto Académico de Análisis de Datos',
    knowProject: 'Conocer proyecto',
    uxArea: 'Diseño UX/UI & Experiencia de Usuario',
    extensionProject: 'Proyecto de Extensión Comunitaria',
    admSummary: 'Proyecto de extensión relacionado con la gestión y el seguimiento de la jornada de los alumnos en la Fábrica de Software de UNIPÊ.',
    viewProject: 'Ver proyecto',
    testWireframe: 'Probar Wireframe',
    articlesEyebrow: 'Producción & Análisis',
    articlesTitle: 'Artículos y Estudios',
    articlesSubtitle: '“Producciones académicas y reflexiones que conectan mi formación en Ciencias Contables, experiencia profesional y los conocimientos que vengo desarrollando en tecnología, datos y experiencia del cliente.”',
    readArticle: 'Leer artículo completo',
    originalResearch: 'Sobre la investigación original',
    certEyebrow: 'Cualificaciones Estratégicas',
    certTitle: 'Cursos y certificaciones',
    certSubtitle: 'Prioridad para certificaciones y formaciones que acompañan la transición hacia la tecnología.',
    toolsEyebrow: 'Práctica & Herramientas',
    toolsTitle: 'Herramientas que utilizo en estudios y proyectos',
    toolsSubtitle: 'Recursos aplicados en proyectos académicos, análisis de datos e interfaces digitales.',
    resumeEyebrow: '{t.resumeEyebrow}',
    resumeTitle: 'Currículum',
    resumeDesc: 'Toda mi trayectoria profesional detallada (+18 años en negocios, crédito y relación bancaria e inmobiliaria), formación académica completa (Ciencias Contables, ADS y Posgrado en Ingeniería de Datos) y certificaciones están reunidas en el documento oficial en PDF.',
    viewBrowser: 'Visualizar en el navegador',
    downloadPdf: 'Descargar currículum en PDF',
    contactEyebrow: 'Contacto & Conexiones',
    contactQuote: '“Busco oportunidades que me permitan aplicar mi experiencia profesional, seguir aprendiendo y desarrollar mi trayectoria en tecnología, datos, Customer Experience y áreas relacionadas.”',
    email: 'Correo',
    close: 'Cerrar'
  };

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">

      {/* =========================================================================
          1. INÍCIO — HERO (#inicio)
          ========================================================================= */}
      <section id="inicio" className="pt-4 sm:pt-8 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-[#333] bg-[#181818] overflow-hidden shadow-2xl">
            
            {/* Top Bar with Badge */}
            <div className="bg-[#141414] border-b border-[#333] px-6 sm:px-10 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-[#FF6B35]"></span>
                <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#FF6B35] font-semibold">
                  {currentLanguage === 'pt' 
                    ? '{t.identityRole}'
                    : 'Customer Experience (CX/CS) • Análisis de Datos • Tecnología'}
                </span>
              </div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#9ca3af] hidden sm:block">
                {t.location}
              </span>
            </div>

            {/* Narrative Split: Portrait (Left) & Value Proposition (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#333]">
              
              {/* Left Column: Portrait Photo & Identity */}
              <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 bg-[#161616] flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="relative overflow-hidden border border-[#333] bg-[#121212] group aspect-[3/4] max-h-[460px] sm:max-h-[500px]">
                    <picture>
                      <source type="image/webp" srcSet="/priscilla-cahino-perfil.webp" />
                      <source type="image/jpeg" srcSet="/priscilla-cahino-perfil.jpg" />
                      <img
                        src="/priscilla-cahino-perfil.jpg"
                        alt="Priscilla Cahino - Retrato Profissional"
                        width={864}
                        height={1152}
                        decoding="async"
                        fetchPriority="high"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                        referrerPolicy="no-referrer"
                        loading="eager"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/priscilla-cahino-perfil.png";
                        }}
                      />
                    </picture>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-30 pointer-events-none"></div>
                  </div>

                  <div>
                    <h1 className="text-4xl sm:text-5xl font-serif-artistic italic mb-1 leading-none text-[#f5f5f5]">
                      Priscilla
                    </h1>
                    <h1 className="text-4xl sm:text-5xl font-serif-artistic italic mb-4 leading-none text-[#f5f5f5]">
                      Cahino
                    </h1>
                    
                    <div className="h-[2px] w-20 bg-[#FF6B35] mb-4"></div>
                    
                    <div className="space-y-1.5 text-xs font-mono uppercase tracking-wider text-[#d1d5db]">
                      <p className="text-white font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF6B35] shrink-0"></span>
                        {t.identityRole}
                      </p>
                      <p className="text-[#9ca3af]">
                        {t.educationLine}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-6 border-t border-[#2a2a2a] space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                      id="hero-btn-about"
                      onClick={() => scrollToSection('sobre')}
                      className="flex items-center justify-center gap-2 px-4 py-3.5 bg-[#FF6B35] hover:bg-[#ff7f4d] text-[#121212] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
                    >
                      <span>{t.knowJourney}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      id="hero-btn-projects"
                      onClick={() => scrollToSection('projetos')}
                      className="flex items-center justify-center gap-2 px-4 py-3.5 border border-[#333] hover:border-[#FF6B35] bg-[#1f1f1f] text-white hover:text-[#FF6B35] font-semibold text-xs uppercase tracking-wider transition-all cursor-pointer"
                    >
                      <span>{t.viewProjects}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {onOpenResume ? (
                      <button
                        id="hero-btn-resume"
                        onClick={onOpenResume}
                        className="flex items-center justify-center gap-2 px-4 py-3 border border-[#FF6B35]/70 text-[#FF6B35] bg-[#1e1e1e] hover:bg-[#FF6B35] hover:text-[#121212] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        <Download className="w-4 h-4" />
                        <span>{t.downloadResume}</span>
                      </button>
                    ) : (
                      <a
                        id="hero-btn-resume-pdf"
                        href="/Curriculo_Priscilla_Cahino.pdf"
                        download
                        className="flex items-center justify-center gap-2 px-4 py-3 border border-[#FF6B35]/70 text-[#FF6B35] bg-[#1e1e1e] hover:bg-[#FF6B35] hover:text-[#121212] font-semibold text-xs uppercase tracking-wider transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span>{t.downloadResume}</span>
                      </a>
                    )}

                    <a
                      id="hero-btn-linkedin"
                      href={CONTACT_DATA.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 border border-[#333] hover:border-[#FF6B35] text-[#f5f5f5] hover:text-white bg-[#1f1f1f] font-semibold text-xs uppercase tracking-wider transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-[#0077B5]" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Statement & Value Proposition */}
              <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-[#181818] flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#FF6B35] font-bold font-mono">
                      {t.positioning}
                    </span>
                  </div>

                  <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-serif-artistic italic text-white leading-snug">
                    {t.heroQuote}
                  </blockquote>

                  <div className="space-y-4 text-[#d1d5db] text-base sm:text-lg leading-relaxed font-light">
                    <p>
                      {t.heroP1}
                    </p>
                    <p>
                      {t.heroP2}
                    </p>
                  </div>
                </div>

                {/* Direct Contact / Quick Connect Bar */}
                <div className="p-4 sm:p-5 border border-[#333] bg-[#141414] flex flex-wrap items-center justify-between gap-3 text-xs text-[#9ca3af]">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#FF6B35] shrink-0" />
                    <span className="font-mono text-[#f5f5f5] text-xs sm:text-sm">{CONTACT_DATA.email}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => copyEmail(CONTACT_DATA.email)}
                      className="text-[#d1d5db] hover:text-[#FF6B35] transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      {copiedEmail ? (
                        <span className="text-[#FF6B35] flex items-center gap-1 font-semibold">
                          <Check className="w-3.5 h-3.5" /> {t.copied}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider">
                          <Copy className="w-3.5 h-3.5" /> {t.copyEmail}
                        </span>
                      )}
                    </button>
                    <span className="text-[#444]">|</span>
                    <a
                      href={CONTACT_DATA.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#d1d5db] hover:text-[#FF6B35] flex items-center gap-1 font-mono text-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#FF6B35]" />
                      <span>{CONTACT_DATA.phoneFormatted}</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          2. SOBRE MIM (#sobre)
          ========================================================================= */}
      <section id="sobre" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="border border-[#333] bg-[#181818] p-6 sm:p-12 lg:p-14 shadow-xl relative overflow-hidden space-y-8">
          
          <div className="text-center max-w-2xl mx-auto border-b border-[#2e2e2e] pb-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6B35] mb-2 font-bold block font-mono">
              {t.storyEyebrow}
            </span>
            <h2 className="font-serif-artistic italic text-3xl sm:text-4xl text-white font-normal mb-3">
              {t.aboutMe}
            </h2>
            <div className="inline-block h-[1px] w-16 bg-[#FF6B35] mb-3"></div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#9ca3af] font-mono font-medium">
                {t.storyBadge}
              </span>
            </div>
          </div>

          {/* Core Story Content */}
          <div className="max-w-3xl mx-auto space-y-6 text-[#d1d5db] text-base sm:text-[17px] leading-relaxed font-light">
            
            <div className="p-6 border border-[#333] bg-[#141414] text-[#f5f5f5]">
              <p className="leading-relaxed italic font-serif-artistic text-lg text-center sm:text-left">
                {t.storyHighlight}
              </p>
            </div>

            <p>
              {t.storyP1}
            </p>

            <p>
              {t.storyP2}
            </p>

            <p>
              {t.storyP3}
            </p>

            {/* Sun Tzu Quote Box */}
            <div className="p-5 border border-[#333] hover:border-[#FF6B35] bg-[#141414] transition-colors space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF6B35]">{t.principle}</span>
              <p className="text-white font-serif-artistic italic text-lg">
                {t.quote}
              </p>
              <p className="text-xs text-[#999] font-mono">{t.quoteAuthor}</p>
            </div>

            {/* O lado pessoal / humano */}
            <div className="flex items-start gap-4 p-5 border border-[#333] bg-[#141414]">
              <div className="p-2.5 bg-[#222] text-[#FF6B35] shrink-0 border border-[#333]">
                <Coffee className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-serif-artistic italic text-white mb-1">
                  {t.personalTitle}
                </h3>
                <p className="text-sm text-[#d1d5db] leading-relaxed font-light">
                  {t.personalText}
                </p>
              </div>
            </div>

            {/* A IA no dia a dia */}
            <div className="flex items-start gap-4 p-5 border border-[#333] bg-[#141414]">
              <div className="p-2.5 bg-[#222] text-[#FF6B35] shrink-0 border border-[#333]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-serif-artistic italic text-white mb-1">
                  {t.aiTitle}
                </h3>
                <p className="text-sm text-[#d1d5db] leading-relaxed font-light">
                  {t.aiText}
                </p>
              </div>
            </div>

            {/* Fechamento Conector Solicitado */}
            <div className="p-6 border-l-4 border-l-[#FF6B35] border border-[#2e2e2e] bg-[#161616] space-y-4">
              <p className="text-white font-medium text-base leading-relaxed">
                {t.closing}
              </p>
              {onOpenResume && (
                <div className="pt-2 flex items-center justify-between flex-wrap gap-3 border-t border-[#2a2a2a]">
                  <span className="text-xs text-[#888] font-mono">
                    {t.fullHistory}
                  </span>
                  <button
                    onClick={onOpenResume}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-mono text-[#FF6B35] hover:underline cursor-pointer font-semibold"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>{t.viewFullHistory}</span>
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          3. ÁREAS DE CONHECIMENTO (#conhecimentos)
          (Separando experiência consolidada de conhecimentos em desenvolvimento)
          ========================================================================= */}
      <section id="conhecimentos" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="space-y-8">
          
          <div className="border-b border-[#2e2e2e] pb-4">
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6B35] mb-2 font-bold block font-mono">
              {t.knowledgeEyebrow}
            </span>
            <h2 className="font-serif-artistic italic text-3xl sm:text-4xl text-white font-normal">
              {t.knowledgeTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#9ca3af] font-light mt-1">
              {t.knowledgeSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Bloco 1: {t.expKnowledge} */}
            <div className="border border-[#333] bg-[#181818] p-6 sm:p-7 space-y-6">
              <div className="border-b border-[#2a2a2a] pb-3">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase className="w-4 h-4 text-[#FF6B35]" />
                  <h3 className="text-base font-serif-artistic italic text-white">
                    {t.expKnowledge}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#FF6B35] uppercase tracking-wider">
                  {t.consolidated}
                </span>
              </div>

              <div className="space-y-5 text-xs sm:text-sm">
                
                <div className="space-y-1">
                  <h4 className="font-semibold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B35]" />
                    {t.cxTitle}
                  </h4>
                  <p className="text-[#bbb] font-light leading-relaxed pl-5">
                    {t.cxDesc}
                  </p>
                </div>

                <div className="space-y-1">
                  <h4 className="font-semibold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B35]" />
                    {t.financeTitle}
                  </h4>
                  <p className="text-[#bbb] font-light leading-relaxed pl-5">
                    {t.financeDesc}
                  </p>
                </div>

                <div className="space-y-1">
                  <h4 className="font-semibold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B35]" />
                    {t.processTitle}
                  </h4>
                  <p className="text-[#bbb] font-light leading-relaxed pl-5">
                    {t.processDesc}
                  </p>
                </div>

              </div>
            </div>

            {/* Bloco 2: {t.devKnowledge} */}
            <div className="border border-[#333] bg-[#181818] p-6 sm:p-7 space-y-6">
              <div className="border-b border-[#2a2a2a] pb-3">
                <div className="flex items-center gap-2 mb-1">
                  <Code2 className="w-4 h-4 text-[#FF6B35]" />
                  <h3 className="text-base font-serif-artistic italic text-white">
                    {t.devKnowledge}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#FF6B35] uppercase tracking-wider">
                  {t.learning}
                </span>
              </div>

              <div className="space-y-5 text-xs sm:text-sm">
                
                <div className="space-y-1.5">
                  <h4 className="font-semibold text-white flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-[#FF6B35]" />
                    {t.data}
                  </h4>
                  <div className="flex flex-wrap gap-1.5 pl-5">
                    {['SQL', 'Power BI', 'Banco de Dados', 'Python aplicado a estudos'].map((item, idx) => (
                      <span key={idx} className="text-[11px] font-mono bg-[#141414] border border-[#2e2e2e] px-2 py-0.5 text-[#ccc]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-semibold text-white flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-[#FF6B35]" />
                    {t.development}
                  </h4>
                  <div className="flex flex-wrap gap-1.5 pl-5">
                    {['HTML', 'CSS', 'Kotlin', 'Git/GitHub'].map((item, idx) => (
                      <span key={idx} className="text-[11px] font-mono bg-[#141414] border border-[#2e2e2e] px-2 py-0.5 text-[#ccc]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-semibold text-white flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#FF6B35]" />
                    UX/UI
                  </h4>
                  <div className="flex flex-wrap gap-1.5 pl-5">
                    {['Figma', 'Fluxos de usuário', 'Prototipação', 'Heurísticas de Nielsen'].map((item, idx) => (
                      <span key={idx} className="text-[11px] font-mono bg-[#141414] border border-[#2e2e2e] px-2 py-0.5 text-[#ccc]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          4. PROJETOS (#projetos)
          (Dados & BI + UX/UI Design)
          ========================================================================= */}
      <section id="projetos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="space-y-10">
          
          <div className="border-b border-[#2e2e2e] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#FF6B35] mb-2 font-bold block font-mono">
                {t.projectsEyebrow}
              </span>
              <h2 className="font-serif-artistic italic text-3xl sm:text-4xl text-white font-normal">
                {t.projectsTitle}
              </h2>
              <p className="text-xs sm:text-sm text-[#9ca3af] font-light mt-1">
                {t.projectsSubtitle}
              </p>
            </div>

            <a
              href={CONTACT_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#FF6B35] hover:underline"
            >
              <Github className="w-4 h-4" />
              <span>{t.viewGithub}</span>
            </a>
          </div>

          {/* Subcategoria 1: DADOS — ClínicaCare */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] font-semibold">
                {t.dataBI}
              </span>
              <span className="h-[1px] flex-1 bg-[#2a2a2a]"></span>
            </div>

            {dataProjects.map((project) => (
              <div 
                key={project.id}
                className="border border-[#333] hover:border-[#FF6B35] bg-[#181818] p-6 sm:p-7 space-y-4 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#999] block mb-1">
                      {t.academicData}
                    </span>
                    <div className="flex items-center gap-3">
                      <img
                        src={project.image}
                        alt={`${project.title} — prévia do projeto`}
                        className="w-12 h-12 sm:w-14 sm:h-14 object-cover border border-[#333] bg-[#111] shrink-0"
                        loading="lazy"
                      />
                      <h3 className="text-2xl font-serif-artistic italic text-white">
                        📊 {project.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs font-mono px-2.5 py-1 bg-[#141414] text-[#ccc] border border-[#2a2a2a]">
                    SQL • Python • Power BI
                  </span>
                </div>

                <p className="text-sm text-[#ccc] font-light leading-relaxed">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2">
                  {['SQL', 'Python', 'Power BI', 'Análise de Dados', 'MySQL', 'Pandas'].map((tag, idx) => (
                    <span key={idx} className="text-xs font-mono bg-[#141414] text-[#aaa] px-2.5 py-0.5 border border-[#2a2a2a]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#FF6B35] hover:bg-[#ff7f4d] text-black font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <span>{t.knowProject}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-[#333] hover:border-[#FF6B35] bg-[#1c1c1c] text-white text-xs font-mono uppercase tracking-wider transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Subcategoria 3: UX/UI — Adm4All & PetZona */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] font-semibold">
                {t.uxArea}
              </span>
              <span className="h-[1px] flex-1 bg-[#2a2a2a]"></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Adm4All */}
              {uxProjects.filter(p => p.id === 'adm4all').map((project) => (
                <div 
                  key={project.id}
                  className="border border-[#333] hover:border-[#FF6B35] bg-[#181818] p-6 space-y-4 transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#999] block">
                      {t.extensionProject}
                    </span>
                    <div className="flex items-center gap-3">
                      <img
                        src={project.image}
                        alt={`${project.title} — prévia do projeto`}
                        className="w-12 h-12 object-cover border border-[#333] bg-[#111] shrink-0"
                        loading="lazy"
                      />
                      <h3 className="text-xl font-serif-artistic italic text-white">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#ccc] font-light leading-relaxed">
                      {t.admSummary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['Figma', 'UX/UI', 'Fluxos', 'Prototipação'].map((tag, idx) => (
                        <span key={idx} className="text-[11px] font-mono bg-[#141414] text-[#aaa] px-2 py-0.5 border border-[#2a2a2a]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-[#2a2a2a]">
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FF6B35] hover:bg-[#ff7f4d] text-black font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <span>{t.viewProject}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.figmaUrl && (
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#333] hover:border-[#FF6B35] bg-[#1c1c1c] text-white text-xs font-mono uppercase tracking-wider transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Figma</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* PetZona */}
              {uxProjects.filter(p => p.id === 'petzona').map((project) => (
                <div 
                  key={project.id}
                  className="border border-[#333] hover:border-[#FF6B35] bg-[#181818] p-6 space-y-4 transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF6B35] block">
                      {project.subtitle || "UX/UI com visão de Customer Experience — projeto acadêmico em evolução"}
                    </span>
                    <div className="flex items-center gap-3">
                      <img
                        src={project.image}
                        alt={`${project.title} — prévia do projeto`}
                        className="w-12 h-12 object-cover border border-[#333] bg-[#111] shrink-0"
                        loading="lazy"
                      />
                      <h3 className="text-xl font-serif-artistic italic text-white">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#ccc] font-light leading-relaxed">
                      {project.summary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['Persona', 'Jornada', 'Wireframe', 'Figma'].map((tag, idx) => (
                        <span key={idx} className="text-[11px] font-mono bg-[#141414] text-[#aaa] px-2 py-0.5 border border-[#2a2a2a]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#2a2a2a]">
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FF6B35] hover:bg-[#ff7f4d] text-black font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <span>{t.viewProject}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setShowWireframeStandalone(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-black font-semibold text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>{t.testWireframe}</span>
                    </button>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          6. NOVA SEÇÃO — ARTIGOS E ESTUDOS (#artigos)
          ========================================================================= */}
      <section id="artigos" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="border border-[#333] bg-[#181818] p-6 sm:p-10 lg:p-12 space-y-8">
          
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6B35] font-bold block font-mono">
              {t.articlesEyebrow}
            </span>
            <h2 className="font-serif-artistic italic text-3xl sm:text-4xl text-white font-normal">
              {t.articlesTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#d1d5db] font-light leading-relaxed max-w-3xl">
              {t.articlesSubtitle}
            </p>
          </div>

          {/* Featured Article Card */}
          <div className="border border-[#3a3a3a] hover:border-[#FF6B35] bg-[#151515] p-6 sm:p-8 space-y-5 transition-colors">
            
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#252525] pb-4">
              <div className="flex items-center gap-2">
                <span className="p-2 bg-[#222] border border-[#333] text-[#FF6B35]">
                  <FileText className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B35] font-semibold">
                    Releitura Profissional • 2013 → Revisitado em 2026
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif-artistic italic text-white">
                    📄 Instituições financeiras e sustentabilidade
                  </h3>
                </div>
              </div>

              <span className="text-xs font-mono px-2.5 py-1 bg-[#1e1e1e] text-[#ccc] border border-[#333]">
                Monografia UNIESP
              </span>
            </div>

            <p className="text-sm sm:text-base text-white font-serif-artistic italic">
              Uma reflexão sobre dados, clientes e decisões responsáveis
            </p>

            <p className="text-xs sm:text-sm text-[#ccc] font-light leading-relaxed">
              Releitura profissional de uma pesquisa desenvolvida durante minha graduação em Ciências Contábeis, analisando sustentabilidade no setor financeiro e sua relação com clientes, financiamento e tomada de decisão. A pesquisa original utilizou pesquisa documental, questionário e entrevista como instrumentos de investigação.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {['Finanças', 'Sustentabilidade', 'Clientes', 'Dados', 'Tomada de decisão'].map((tag, idx) => (
                <span key={idx} className="text-xs font-mono bg-[#1a1a1a] text-[#aaa] px-2.5 py-0.5 border border-[#2a2a2a]">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="btn-ler-artigo"
                onClick={onOpenArticle}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FF6B35] hover:bg-[#ff7f4d] text-black font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>{t.readArticle}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="btn-pesquisa-original"
                onClick={() => setIsResearchModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#333] hover:border-[#FF6B35] bg-[#1e1e1e] text-[#ccc] hover:text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span>{t.originalResearch}</span>
              </button>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          6. CURSOS E CERTIFICAÇÕES (#certificacoes)
          ========================================================================= */}
      <section id="certificacoes" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="space-y-8">
          
          <div className="border-b border-[#2e2e2e] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#FF6B35] mb-2 font-bold block font-mono">
                {t.certEyebrow}
              </span>
              <h2 className="font-serif-artistic italic text-3xl sm:text-4xl text-white font-normal">
                {t.certTitle}
              </h2>
              <p className="text-xs sm:text-sm text-[#9ca3af] font-light mt-1">
                {t.certSubtitle}
              </p>
            </div>

            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-mono text-[#FF6B35] hover:underline cursor-pointer"
              >
                <span>Ver mais certificações no currículo →</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            
            <div className="p-4 border border-[#333] hover:border-[#FF6B35] bg-[#181818] transition-colors space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Award className="w-4 h-4 text-[#FF6B35]" />
                <span>Microsoft AI-900</span>
              </div>
              <p className="text-[#999] font-mono text-[11px]">IA / Microsoft Learn</p>
              <p className="text-[#bbb] font-light">Fundamentos e aplicações de Inteligência Artificial na nuvem.</p>
            </div>

            <div className="p-4 border border-[#333] hover:border-[#FF6B35] bg-[#181818] transition-colors space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Database className="w-4 h-4 text-[#FF6B35]" />
                <span>Dados / SQL / Power BI</span>
              </div>
              <p className="text-[#999] font-mono text-[11px]">Workshop & Projetos Práticos</p>
              <p className="text-[#bbb] font-light">Modelagem relacional, consultas estruturadas e dashboards executivos.</p>
            </div>

            <div className="p-4 border border-[#333] hover:border-[#FF6B35] bg-[#181818] transition-colors space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Layers className="w-4 h-4 text-[#FF6B35]" />
                <span>UX/UI Design</span>
              </div>
              <p className="text-[#999] font-mono text-[11px]">Fábrica de Software UBTech Office</p>
              <p className="text-[#bbb] font-light">Pesquisa com usuários, personas, mapeamento de jornada e prototipação.</p>
            </div>

            <div className="p-4 border border-[#333] hover:border-[#FF6B35] bg-[#181818] transition-colors space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B35]" />
                <span>Agilidade (Scrum Fundamentals)</span>
              </div>
              <p className="text-[#999] font-mono text-[11px]">SFPC / Metodologias Ágeis</p>
              <p className="text-[#bbb] font-light">Sprints, rituais ágeis e colaboração contínua em equipes de produto.</p>
            </div>

            <div className="p-4 border border-[#333] hover:border-[#FF6B35] bg-[#181818] transition-colors space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Code2 className="w-4 h-4 text-[#FF6B35]" />
                <span>Tecnologia e Desenvolvimento</span>
              </div>
              <p className="text-[#999] font-mono text-[11px]">Alura & UNIPÊ</p>
              <p className="text-[#bbb] font-light">Lógica de programação, Git/GitHub, introdução a Kotlin e interfaces web.</p>
            </div>

            <div className="p-4 border border-[#333] hover:border-[#FF6B35] bg-[#181818] transition-colors space-y-1.5">
              <div className="flex items-center gap-2 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#FF6B35]" />
                <span>Ouvidoria e Conflitos</span>
              </div>
              <p className="text-[#999] font-mono text-[11px]">ENAP — Escola Nacional de Adm. Pública</p>
              <p className="text-[#bbb] font-light">Mediação de atritos críticos, escuta qualificada e conformidade com o cliente.</p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          9. FERRAMENTAS E TECNOLOGIAS (#ferramentas)
          ========================================================================= */}
      <section id="ferramentas" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="p-6 sm:p-8 border border-[#333] bg-[#181818] space-y-5">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6B35] mb-1 font-bold block font-mono">
              {t.toolsEyebrow}
            </span>
            <h2 className="font-serif-artistic italic text-2xl sm:text-3xl text-white font-normal">
              {t.toolsTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#9ca3af] font-light mt-1">
              {t.toolsSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {[
              'SQL',
              'Power BI',
              'Figma',
              'Git',
              'GitHub',
              'HTML',
              'CSS',
              'Kotlin',
              'Python'
            ].map((tool, idx) => (
              <span 
                key={idx}
                className="px-3.5 py-1.5 bg-[#141414] hover:bg-[#222] border border-[#333] hover:border-[#FF6B35] text-[#f0f0f0] font-mono text-xs uppercase tracking-wider transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          8. CURRÍCULO (#curriculo)
          ========================================================================= */}
      <section id="curriculo" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="p-8 sm:p-10 border border-[#333] bg-[#161616] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6B35] font-bold block font-mono">
              {t.resumeEyebrow}
            </span>
            <h2 className="font-serif-artistic italic text-2xl sm:text-3xl text-white font-normal">
              {t.resumeTitle}
            </h2>
            <p className="text-sm text-[#d1d5db] font-light max-w-xl leading-relaxed">
              {t.resumeDesc}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#333] hover:border-[#FF6B35] bg-[#1f1f1f] text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#FF6B35]" />
                <span>{t.viewBrowser}</span>
              </button>
            )}

            <a
              href="/Curriculo_Priscilla_Cahino.pdf"
              download="Curriculo_Priscilla_Cahino.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#FF6B35] hover:bg-[#ff7f4d] text-black font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>{t.downloadPdf}</span>
            </a>
          </div>
        </div>
      </section>


      {/* =========================================================================
          9. ONDE ME ENCONTRAR / CONTATO (#contato)
          ========================================================================= */}
      <section id="contato" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="border border-[#333] bg-[#181818] p-8 sm:p-12 space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6B35] font-bold block font-mono">
              {t.contactEyebrow}
            </span>
            <h2 className="font-serif-artistic italic text-3xl text-white font-normal">
              Priscilla Cahino
            </h2>
            <blockquote className="text-[#d1d5db] text-base leading-relaxed font-light max-w-3xl pt-1">
              {t.contactQuote}
            </blockquote>
          </div>

          {/* Social Links & Contact Channels */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#282828]">
            <a
              href={CONTACT_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#141414] border border-[#2e2e2e] hover:border-[#FF6B35] flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-white transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[#0077B5]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={CONTACT_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#141414] border border-[#2e2e2e] hover:border-[#FF6B35] flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-white transition-colors"
            >
              <Github className="w-4 h-4 text-white" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${CONTACT_DATA.email}`}
              className="p-3 bg-[#141414] border border-[#2e2e2e] hover:border-[#FF6B35] flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-[#FF6B35]" />
              <span>{t.email}</span>
            </a>

            <a
              href={CONTACT_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#141414] border border-[#2e2e2e] hover:border-[#FF6B35] flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>


      {/* Modal de Detalhes do Projeto */}
      {activeProjectModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-fadeIn overflow-y-auto"
          onClick={() => setActiveProjectModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative w-full max-w-3xl bg-[#161616] border border-[#333] shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-[#2a2a2a] pb-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[#FF6B35]">
                  {activeProjectModal.categoryLabel}
                </span>
                <h3 className="text-2xl font-serif-artistic italic text-white">
                  {activeProjectModal.title}
                </h3>
                <p className="text-xs text-[#aaa] font-light">
                  {activeProjectModal.subtitle}
                </p>
              </div>

              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-1 text-[#aaa] hover:text-white border border-[#333] transition-colors cursor-pointer"
                aria-label="Fechar modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#ddd] font-light leading-relaxed">
              <div className="space-y-1">
                <h4 className="font-semibold text-white font-mono uppercase text-xs text-[#FF6B35]">
                  Descrição do Projeto:
                </h4>
                <p>{activeProjectModal.description}</p>
              </div>

              {activeProjectModal.objective && (
                <div className="space-y-1">
                  <h4 className="font-semibold text-white font-mono uppercase text-xs text-[#FF6B35]">
                    Objetivo Principal:
                  </h4>
                  <p>{activeProjectModal.objective}</p>
                </div>
              )}

              {activeProjectModal.highlights && activeProjectModal.highlights.length > 0 && (
                <div className="space-y-1">
                  <h4 className="font-semibold text-white font-mono uppercase text-xs text-[#FF6B35]">
                    Destaques & Entregas:
                  </h4>
                  <ul className="space-y-1 list-disc list-inside text-[#bbb]">
                    {activeProjectModal.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activeProjectModal.id === 'petzona' && (
                <div className="pt-4 border-t border-[#2a2a2a] space-y-3">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#FF6B35]" />
                    <h4 className="text-xs uppercase tracking-wider font-bold text-white">
                      Simulador de Wireframe & Diretrizes Figma
                    </h4>
                  </div>
                  <PetzoneWireframeViewer />
                </div>
              )}
            </div>

            <div className="border-t border-[#2a2a2a] pt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {activeProjectModal.technologies.map((t, idx) => (
                  <span key={idx} className="text-[11px] font-mono bg-[#141414] border border-[#2e2e2e] px-2 py-0.5 text-[#aaa]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeProjectModal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#FF6B35] text-black font-semibold text-xs uppercase tracking-wider"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="px-3 py-1.5 border border-[#333] text-xs uppercase tracking-wider text-[#ccc] hover:text-white"
                >
                  {t.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Standalone Wireframe Simulator Modal */}
      {showWireframeStandalone && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-fadeIn overflow-y-auto"
          onClick={() => setShowWireframeStandalone(false)}
        >
          <div 
            className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#141414] border border-[#3a3a3a] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <PetzoneWireframeViewer 
              onClose={() => setShowWireframeStandalone(false)}
              isModal={true}
            />
          </div>
        </div>
      )}

      {/* Modal da Pesquisa Original */}
      <OriginalResearchModal
        isOpen={isResearchModalOpen}
        onClose={() => setIsResearchModalOpen(false)}
        onReadArticle={onOpenArticle}
      />

    </div>
  );
};
