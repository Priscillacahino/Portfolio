/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { PageType, Language } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { ProjectsPage } from './components/ProjectsPage';
import { ArticlePage } from './components/ArticlePage';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('about');
  const [currentLanguage, setCurrentLanguage] = useState<Language>('pt');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  // Parse URL hash to determine page and active project
  const handleHashChange = useCallback(() => {
    const hash = window.location.hash.toLowerCase();

    if (hash.startsWith('#/artigo')) {
      setCurrentPage('article');
      setActiveProjectId(null);
    } else if (hash.startsWith('#/projetos')) {
      setCurrentPage('projects');
      const parts = hash.split('/');
      if (parts.length >= 3 && parts[2]) {
        setActiveProjectId(parts[2] === 'petzone' ? 'petzona' : parts[2]);
      } else {
        setActiveProjectId(null);
      }
    } else if (hash === '#/curriculo' || hash === '#/cv') {
      setIsResumeOpen(true);
    } else {
      setCurrentPage('about');
      setActiveProjectId(null);
    }
  }, []);

  // Initialize and listen to hash change
  useEffect(() => {
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [handleHashChange]);

  const handleSelectPage = (page: PageType) => {
    setCurrentPage(page);
    setActiveProjectId(null);
    if (page === 'article') {
      window.location.hash = '#/artigos/instituicoes-financeiras-sustentabilidade';
    } else if (page === 'projects') {
      window.location.hash = '#/projetos';
    } else {
      window.location.hash = '#/';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (projectId: string | null) => {
    setActiveProjectId(projectId);
    if (projectId) {
      setCurrentPage('projects');
      window.location.hash = `#/projetos/${projectId}`;
    } else {
      window.location.hash = '#/projetos';
    }
  };

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
    if (window.location.hash === '#/curriculo' || window.location.hash === '#/cv') {
      if (currentPage === 'article') {
        window.location.hash = '#/artigos/instituicoes-financeiras-sustentabilidade';
      } else if (currentPage === 'projects') {
        window.location.hash = '#/projetos';
      } else {
        window.location.hash = '#/';
      }
    }
  };

  useEffect(() => {
    const titles: Record<Language, { about: string; projects: string; article: string; home: string }> = {
      pt: {
        home: 'Priscilla Cahino | CX, Dados & Tecnologia',
        about: 'Priscilla Cahino | CX, Dados & Tecnologia',
        projects: 'Priscilla Cahino | Projetos Acadêmicos & Portfólio',
        article: 'Instituições Financeiras e Sustentabilidade | Priscilla Cahino'
      },
      es: {
        home: 'Priscilla Cahino | CX, Datos & Tecnología',
        about: 'Priscilla Cahino | CX, Datos & Tecnología',
        projects: 'Priscilla Cahino | Proyectos Académicos & Portafolio',
        article: 'Instituciones Financieras y Sostenibilidad | Priscilla Cahino'
      }
    };

    const currentTitles = titles[currentLanguage];
    document.title = currentTitles[currentPage] || currentTitles.about;
  }, [currentPage, currentLanguage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-[#f5f5f5] selection:bg-[#FF6B35]/30 selection:text-[#FF6B35]">
      {/* Persistent Navigation Header with 9 items */}
      <Header 
        currentPage={currentPage} 
        onSelectPage={handleSelectPage}
        currentLanguage={currentLanguage}
        onSelectLanguage={setCurrentLanguage}
        onOpenResume={handleOpenResume}
      />

      {/* Main Dynamic Content */}
      <main className="flex-1">
        {currentPage === 'article' ? (
          <ArticlePage
            onBackToHome={() => handleSelectPage('about')}
            currentLanguage={currentLanguage}
            onOpenResume={handleOpenResume}
          />
        ) : currentPage === 'projects' ? (
          <ProjectsPage 
            onSelectPage={handleSelectPage} 
            currentLanguage={currentLanguage} 
            onOpenResume={handleOpenResume}
            activeProjectId={activeProjectId}
            onSelectProject={handleSelectProject}
          />
        ) : (
          <AboutPage 
            onSelectPage={handleSelectPage} 
            currentLanguage={currentLanguage}
            onOpenResume={handleOpenResume}
            onSelectProject={handleSelectProject}
            onOpenArticle={() => handleSelectPage('article')}
          />
        )}
      </main>

      {/* Shared Footer with Contact & Links */}
      <Footer 
        onSelectPage={handleSelectPage} 
        currentLanguage={currentLanguage} 
        onOpenResume={handleOpenResume}
      />

      {/* Accessible Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={handleCloseResume}
        currentLanguage={currentLanguage}
      />
    </div>
  );
}
