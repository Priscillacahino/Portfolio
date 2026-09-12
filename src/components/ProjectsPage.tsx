import React, { useState, useEffect, useRef } from 'react';
import { PageType, ProjectCategory, AcademicProject, Language } from '../types';
import { CONTACT_DATA } from '../data/portfolioData';
import { TRANSLATIONS } from '../data/translations';
import { 
  Github, 
  ExternalLink, 
  Maximize2, 
  X, 
  Layers, 
  Database, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowUpRight,
  Figma,
  Globe,
  Terminal,
  FileCode,
  Filter,
  MessageCircle,
  Linkedin,
  Mail,
  FileText,
  Download,
  Smartphone
} from 'lucide-react';
import { PetzoneWireframeViewer } from './PetzoneWireframeViewer';

interface ProjectsPageProps {
  onSelectPage: (page: PageType) => void;
  currentLanguage: Language;
  onOpenResume?: () => void;
  activeProjectId?: string | null;
  onSelectProject?: (projectId: string | null) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ 
  onSelectPage, 
  currentLanguage,
  onOpenResume,
  activeProjectId,
  onSelectProject
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<AcademicProject | null>(null);
  const [showWireframeStandalone, setShowWireframeStandalone] = useState<boolean>(false);
  
  const modalCloseBtnRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const t = TRANSLATIONS[currentLanguage].projects;
  const projectsList = TRANSLATIONS[currentLanguage].projectsData;

  // Sync activeProjectId from URL route
  useEffect(() => {
    if (activeProjectId) {
      const match = projectsList.find(p => p.id === activeProjectId);
      if (match) {
        previousActiveElement.current = document.activeElement as HTMLElement;
        setActiveModalProject(match);
      }
    } else {
      setActiveModalProject(null);
    }
  }, [activeProjectId, projectsList]);

  // Modal accessibility: Escape key listener and body lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeModalProject) {
        handleCloseModal();
      }
    };

    if (activeModalProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        modalCloseBtnRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalProject]);

  const handleOpenModal = (project: AcademicProject) => {
    previousActiveElement.current = document.activeElement as HTMLElement;
    setActiveModalProject(project);
    if (onSelectProject) {
      onSelectProject(project.id);
    }
  };

  const handleCloseModal = () => {
    setActiveModalProject(null);
    if (onSelectProject) {
      onSelectProject(null);
    }
    previousActiveElement.current?.focus();
  };

  const filteredProjects = selectedCategory === 'all'
    ? projectsList
    : projectsList.filter(p => p.category === selectedCategory);

  const categoryCounts = {
    all: projectsList.length,
    data: projectsList.filter(p => p.category === 'data').length,
    'ux-ui': projectsList.filter(p => p.category === 'ux-ui').length,
    dev: projectsList.filter(p => p.category === 'dev').length
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 pt-4">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#2e2e2e]">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6B35] mb-2 font-bold block font-mono">
              {t.eyebrow}
            </span>
            <h1 className="font-serif-artistic italic text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              {t.title}
            </h1>
            <p className="text-[#d1d5db] text-base sm:text-lg max-w-3xl mt-3 leading-relaxed font-light">
              {t.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {onOpenResume && (
              <button
                id="btn-projects-resume-top"
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 bg-[#FF6B35] hover:bg-[#ff7f4d] text-[#121212] text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>{t.btnResume}</span>
              </button>
            )}

            <a
              id="btn-projects-github-profile"
              href={CONTACT_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 border border-[#333] hover:border-[#FF6B35] bg-[#181818] text-white text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              <Github className="w-4 h-4 text-[#FF6B35]" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#9ca3af]" />
            </a>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="mt-8 flex flex-wrap items-center gap-2.5">
          <div className="flex items-center gap-2 mr-2 text-xs uppercase tracking-wider font-mono text-[#9ca3af]">
            <Filter className="w-3.5 h-3.5 text-[#FF6B35]" />
            <span>{t.filterLabel}</span>
          </div>

          <button
            id="filter-all"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#FF6B35] text-[#121212]'
                : 'border border-[#333] hover:border-[#666] bg-[#181818] text-[#d1d5db]'
            }`}
          >
            {t.filters.all} ({categoryCounts.all})
          </button>

          <button
            id="filter-data"
            onClick={() => setSelectedCategory('data')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
              selectedCategory === 'data'
                ? 'bg-[#FF6B35] text-[#121212]'
                : 'border border-[#333] hover:border-[#666] bg-[#181818] text-[#d1d5db]'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>{t.filters.data} ({categoryCounts.data})</span>
          </button>

          <button
            id="filter-ux"
            onClick={() => setSelectedCategory('ux-ui')}
            className={`flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
              selectedCategory === 'ux-ui'
                ? 'bg-[#FF6B35] text-[#121212]'
                : 'border border-[#333] hover:border-[#666] bg-[#181818] text-[#d1d5db]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{t.filters.ux} ({categoryCounts['ux-ui']})</span>
          </button>

          {categoryCounts.dev > 0 && (
            <button
              id="filter-dev"
              onClick={() => setSelectedCategory('dev')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                selectedCategory === 'dev'
                  ? 'bg-[#FF6B35] text-[#121212]'
                  : 'border border-[#333] hover:border-[#666] bg-[#181818] text-[#d1d5db]'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>{t.filters.dev} ({categoryCounts.dev})</span>
            </button>
          )}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className="border border-[#333] hover:border-[#FF6B35] bg-[#181818] overflow-hidden flex flex-col justify-between transition-all group shadow-md"
            >
              <div>
                {/* Visual Header / Image */}
                {project.image ? (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#141414] border-b border-[#2e2e2e]">
                    <img
                      src={project.image}
                      alt={`Imagem do projeto ${project.title}`}
                      loading="lazy"
                      decoding="async"
                      width={640}
                      height={360}
                      className="w-full h-full object-cover object-top grayscale contrast-105 group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30 pointer-events-none" />

                    {/* Category pill */}
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-[#121212]/90 text-xs font-mono text-[#FF6B35] uppercase tracking-wider border border-[#333]">
                        {project.categoryLabel}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-mono text-[#d1d5db] bg-[#121212]/90 px-2 py-0.5 border border-[#333]">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Zoom button */}
                    <button
                      onClick={() => handleOpenModal(project)}
                      className="absolute bottom-4 right-4 p-2 bg-[#121212]/90 text-[#d1d5db] hover:text-[#121212] hover:bg-[#FF6B35] transition-all border border-[#333] cursor-pointer"
                      title="Visualizar detalhes do projeto"
                      aria-label={`Visualizar detalhes do projeto ${project.title}`}
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  /* Visual Banner for code-based project without screenshot */
                  <div className="p-6 bg-[#141414] border-b border-[#2e2e2e] flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 border border-[#333] bg-[#222] flex items-center justify-center text-[#FF6B35]">
                        {project.category === 'data' ? (
                          <Database className="w-6 h-6" />
                        ) : (
                          <FileCode className="w-6 h-6" />
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-[#FF6B35] uppercase tracking-wider">
                          {project.categoryLabel}
                        </span>
                        <h3 className="font-serif-artistic italic text-white text-xl mt-0.5">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-[#d1d5db] bg-[#1a1a1a] px-2 py-1 border border-[#333]">
                      0{idx + 1}
                    </span>
                  </div>
                )}

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-5">
                  <div className="space-y-1.5">
                    <h3 className="font-serif-artistic italic text-2xl sm:text-3xl text-white group-hover:text-[#FF6B35] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#FF6B35]">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* 🎯 Objetivo (seção estruturada) */}
                  {project.objective && (
                    <div className="p-3.5 bg-[#141414] border-l-2 border-[#FF6B35] border-y border-r border-[#262626]">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-[#FF6B35] block mb-1">
                        🎯 {currentLanguage === 'pt' ? 'Objetivo:' : 'Objetivo:'}
                      </span>
                      <p className="text-xs sm:text-[13px] text-[#e0e0e0] leading-relaxed">
                        {project.objective}
                      </p>
                    </div>
                  )}

                  {/* 🛠️ Ferramentas */}
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#9ca3af] block">
                      🛠️ {currentLanguage === 'pt' ? 'Ferramentas & Tecnologias:' : 'Herramientas & Tecnologías:'}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {(project.tools || project.technologies).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-[#141414] border border-[#2e2e2e] text-xs font-mono text-[#d1d5db]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 📊 Resultados com números & impacto */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#FF6B35] block">
                      📊 {currentLanguage === 'pt' ? 'Entregas e aprendizados:' : 'Entregas y aprendizajes:'}
                    </span>
                    <ul className="space-y-2">
                      {(project.results || project.highlights).map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#ccc] font-light leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B35] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 sm:px-8 sm:py-4 bg-[#141414] border-t border-[#2e2e2e] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FF6B35] hover:bg-[#ff7f4d] text-[#121212] text-xs uppercase tracking-wider font-bold transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>{t.btnLive}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}

                  {project.figmaUrl && (
                    <a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#333] hover:border-[#FF6B35] bg-[#222] text-[#eee] text-xs uppercase tracking-wider font-semibold transition-colors"
                    >
                      <Figma className="w-3.5 h-3.5 text-[#FF6B35]" />
                      <span>{t.btnFigma}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}

                  {project.id === 'petzona' && (
                    <button
                      onClick={() => setShowWireframeStandalone(true)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#FF6B35] hover:bg-[#FF6B35]/15 bg-[#1c1c1c] text-[#FF6B35] text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>{currentLanguage === 'pt' ? 'Testar Wireframe Interativo (Figma)' : 'Probar Wireframe Interactivo (Figma)'}</span>
                    </button>
                  )}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#333] hover:border-[#FF6B35] bg-[#1a1a1a] text-[#eee] text-xs uppercase tracking-wider font-semibold transition-colors ml-auto"
                >
                  <Github className="w-3.5 h-3.5 text-[#FF6B35]" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-[#9ca3af]" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GitHub Learning Note & Back to Profile Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-[#333] bg-[#141414] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-serif-artistic italic text-2xl text-white">
              {t.returnBoxTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#d1d5db] max-w-xl font-light">
              {t.returnBoxDesc}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            {onOpenResume && (
              <button
                id="btn-projects-resume-bottom"
                type="button"
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 border border-[#444] hover:border-[#FF6B35] bg-[#222] text-white hover:text-[#FF6B35] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#FF6B35]" />
                <span>{t.btnResume}</span>
              </button>
            )}

            <button
              id="btn-return-about"
              onClick={() => onSelectPage('about')}
              className="flex items-center gap-2 px-6 py-3.5 bg-[#FF6B35] hover:bg-[#ff7f4d] text-[#121212] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.btnReturnAbout}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contato & Conexão no final da segunda página */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-[#333] bg-[#161616] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#FF6B35] block">
                {t.ctaEyebrow}
              </span>
              <h2 className="font-serif-artistic italic text-2xl sm:text-3xl text-white font-normal">
                {t.ctaTitle}
              </h2>
              <p className="text-[#d1d5db] text-sm leading-relaxed max-w-2xl font-light">
                {t.ctaDescription}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  id="btn-projects-cta-whatsapp"
                  href={CONTACT_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-[#FF6B35] hover:bg-[#ff7f4d] text-[#121212] font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  id="btn-projects-cta-linkedin"
                  href={CONTACT_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 border border-[#333] hover:border-[#FF6B35] bg-[#1f1f1f] text-[#eee] font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#0077B5]" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  id="btn-projects-cta-github"
                  href={CONTACT_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 border border-[#333] hover:border-[#FF6B35] bg-[#1f1f1f] text-[#eee] font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                </a>

                <a
                  href={`mailto:${CONTACT_DATA.email}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 border border-[#333] hover:border-[#FF6B35] bg-[#1f1f1f] text-[#eee] font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#FF6B35]" />
                  <span>E-mail</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessible Full Project Preview Modal with Focus & Esc Management */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121212]/90 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          aria-describedby="modal-project-desc"
          onClick={handleCloseModal}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#181818] border border-[#444] overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-[#141414] flex items-center justify-between border-b border-[#333]">
              <div>
                <h3 id="modal-project-title" className="font-serif-artistic italic text-white text-xl sm:text-2xl">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#FF6B35] font-semibold mt-0.5">
                  {activeModalProject.subtitle}
                </p>
              </div>
              <button
                ref={modalCloseBtnRef}
                onClick={handleCloseModal}
                className="p-2 text-[#d1d5db] hover:text-white hover:bg-[#252525] border border-[#333] transition-colors cursor-pointer"
                title={t.modalClose}
                aria-label={t.modalClose}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto p-4 sm:p-6 space-y-5 bg-[#121212]">
              {activeModalProject.image && (
                <div className="flex items-center justify-center bg-[#101010] border border-[#2a2a2a] p-2">
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    className="max-w-full max-h-[50vh] object-contain"
                  />
                </div>
              )}

              {/* 🎯 Objetivo */}
              {activeModalProject.objective && (
                <div className="p-4 bg-[#161616] border-l-3 border-[#FF6B35] border-y border-r border-[#2a2a2a]">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#FF6B35] block mb-1">
                    🎯 {currentLanguage === 'pt' ? 'Objetivo do Projeto:' : 'Objetivo del Proyecto:'}
                  </span>
                  <p className="text-sm text-[#e5e5e5] leading-relaxed">
                    {activeModalProject.objective}
                  </p>
                </div>
              )}

              <p id="modal-project-desc" className="text-sm sm:text-base text-[#d1d5db] leading-relaxed font-light">
                {activeModalProject.description}
              </p>

              {/* 🛠️ Ferramentas */}
              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#9ca3af] mb-2">
                  🛠️ {currentLanguage === 'pt' ? 'Ferramentas Utilizadas:' : 'Herramientas Utilizadas:'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(activeModalProject.tools || activeModalProject.technologies).map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-[#1c1c1c] border border-[#333] text-xs font-mono text-[#d1d5db]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 📊 Resultados */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#FF6B35]">
                  📊 {currentLanguage === 'pt' ? 'Entregas e aprendizados:' : 'Entregas y aprendizajes:'}
                </h4>
                <ul className="space-y-2">
                  {(activeModalProject.results || activeModalProject.highlights).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#ccc] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Wireframe Interativo integrado para PetZona */}
              {activeModalProject.id === 'petzona' && (
                <div className="pt-4 border-t border-[#2a2a2a] space-y-3">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#FF6B35]" />
                    <h4 className="text-xs uppercase tracking-wider font-bold text-white">
                      {currentLanguage === 'pt' ? 'Simulador de Wireframe & Diretrizes Figma' : 'Simulador de Wireframe y Directrices Figma'}
                    </h4>
                  </div>
                  <PetzoneWireframeViewer />
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#141414] border-t border-[#333] flex items-center justify-between flex-wrap gap-3 text-xs">
              <span className="text-[#9ca3af] font-mono text-xs uppercase">
                {activeModalProject.categoryLabel}
              </span>

              <div className="flex items-center gap-3">
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FF6B35] text-[#121212] font-bold uppercase tracking-wider text-xs"
                  >
                    <span>{t.btnLive}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                {activeModalProject.figmaUrl && (
                  <a
                    href={activeModalProject.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#333] bg-[#222] text-white hover:text-[#FF6B35] font-semibold uppercase tracking-wider text-xs"
                  >
                    <span>{t.btnFigma}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#333] bg-[#1e1e1e] text-white hover:text-[#FF6B35] font-semibold uppercase tracking-wider text-xs"
                >
                  <span>{t.modalOpenGithub}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#FF6B35]" />
                </a>
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
    </div>
  );
};
