import React, { useState } from 'react';
import { PageType, Language } from '../types';
import { CONTACT_DATA } from '../data/portfolioData';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageType;
  onSelectPage: (page: PageType) => void;
  currentLanguage: Language;
  onSelectLanguage: (lang: Language) => void;
  onOpenResume?: () => void;
}

interface NavItem {
  id: string;
  label: string;
  labelEs: string;
  isArticleDirect?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Início', labelEs: 'Inicio' },
  { id: 'sobre', label: 'Sobre', labelEs: 'Sobre mí' },
  { id: 'conhecimentos', label: 'Conhecimentos', labelEs: 'Conocimientos' },
  { id: 'projetos', label: 'Projetos', labelEs: 'Proyectos' },
  { id: 'artigos', label: 'Artigos', labelEs: 'Artículos' },
  { id: 'certificacoes', label: 'Certificações', labelEs: 'Certificaciones' },
  { id: 'curriculo', label: 'Currículo', labelEs: 'Currículum' },
  { id: 'contato', label: 'Contato', labelEs: 'Contacto' },
];

export const Header: React.FC<HeaderProps> = ({ 
  currentPage, 
  onSelectPage,
  currentLanguage,
  onSelectLanguage,
  onOpenResume
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (itemId: string) => {
    setMobileMenuOpen(false);

    if (currentPage !== 'about') {
      onSelectPage('about');
      setTimeout(() => {
        const el = document.getElementById(itemId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return;
    }

    const el = document.getElementById(itemId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#2a2a2a] bg-[#121212]/95 backdrop-blur-md">
      
      {/* Top Bar: Brand, Language, CV Button & Mobile Toggle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-3">
          
          {/* Brand & Name */}
          <div 
            onClick={() => handleNavClick('inicio')}
            className="flex items-center gap-3 cursor-pointer group text-left min-w-0"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick('inicio')}
            aria-label="Ir para o início"
          >
            <div className="truncate">
              <div className="flex items-center gap-2">
                <span className="font-serif-artistic italic text-xl sm:text-2xl text-white tracking-wide group-hover:text-[#FF6B35] transition-colors truncate">
                  {CONTACT_DATA.name}
                </span>
                <span className="hidden sm:inline-flex items-center text-[10px] uppercase tracking-wider font-mono font-semibold px-2 py-0.5 bg-[#1e1e1e] text-[#FF6B35] border border-[#333]">
                  CX • Dados • Tech
                </span>
              </div>
              <p className="text-xs tracking-wider text-[#9ca3af] font-mono hidden md:block truncate">
                {currentLanguage === 'pt'
                  ? 'Ciências Contábeis | Estudante de Análise e Desenvolvimento de Sistemas'
                  : 'Ciencias Contables | Estudiante de Análisis y Desarrollo de Sistemas'}
              </p>
            </div>
          </div>

          {/* Controls: Flags Switcher + CV Modal + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            
            {/* Language Switcher Buttons with Flags */}
            <div 
              className="flex items-center bg-[#1a1a1a] border border-[#333] p-0.5 gap-0.5"
              role="group"
              aria-label="Seleção de idioma"
            >
              <button
                id="lang-pt"
                onClick={() => onSelectLanguage('pt')}
                title="Português"
                aria-label="Selecionar idioma Português"
                className={`flex items-center justify-center w-8 h-8 text-base transition-all cursor-pointer ${
                  currentLanguage === 'pt'
                    ? 'bg-[#FF6B35] shadow-sm scale-105'
                    : 'hover:bg-[#252525] opacity-70 hover:opacity-100'
                }`}
              >
                <span className="leading-none select-none text-base" role="img" aria-hidden="true">🇧🇷</span>
              </button>

              <button
                id="lang-es"
                onClick={() => onSelectLanguage('es')}
                title="Español"
                aria-label="Seleccionar idioma Español"
                className={`flex items-center justify-center w-8 h-8 text-base transition-all cursor-pointer ${
                  currentLanguage === 'es'
                    ? 'bg-[#FF6B35] shadow-sm scale-105'
                    : 'hover:bg-[#252525] opacity-70 hover:opacity-100'
                }`}
              >
                <span className="leading-none select-none text-base" role="img" aria-hidden="true">🇪🇸</span>
              </button>
            </div>

            {/* CV / Currículo Modal Button */}
            {onOpenResume && (
              <button
                id="header-btn-resume"
                type="button"
                onClick={onOpenResume}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#FF6B35] bg-[#1e1e1e] hover:bg-[#FF6B35] text-white hover:text-[#121212] text-xs uppercase tracking-wider font-semibold font-mono transition-colors cursor-pointer"
                title="Ver Currículo Completo"
              >
                <FileText className="w-3.5 h-3.5 text-[#FF6B35] group-hover:text-[#121212]" />
                <span>Currículo</span>
              </button>
            )}

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#ccc] hover:text-white border border-[#333] bg-[#1a1a1a] transition-colors cursor-pointer"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>
      </div>

      {/* Navigation Sub-Bar (Desktop): Exact 9 items requested */}
      {/* Início | Sobre | Experiência | Conhecimentos | Projetos | Artigos | Formação | Currículo | Contato */}
      <div className="hidden lg:block border-t border-[#252525] bg-[#141414]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between py-2 text-xs font-mono uppercase tracking-wider overflow-x-auto scrollbar-none">
            {NAV_ITEMS.map((item, idx) => {
              const label = currentLanguage === 'pt' ? item.label : item.labelEs;
              return (
                <React.Fragment key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="text-[#bbb] hover:text-[#FF6B35] hover:bg-[#1f1f1f] px-2.5 py-1 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {label}
                  </button>
                  {idx < NAV_ITEMS.length - 1 && (
                    <span className="text-[#333] select-none">•</span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Horizontal Navigation Scroller (Always accessible below top bar) */}
      <div className="lg:hidden border-t border-[#252525] bg-[#141414]/90 overflow-x-auto scrollbar-none">
        <div className="flex items-center px-4 py-2 space-x-2 text-xs font-mono uppercase tracking-wider whitespace-nowrap">
          {NAV_ITEMS.map((item) => {
            const label = currentLanguage === 'pt' ? item.label : item.labelEs;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-[#bbb] hover:text-[#FF6B35] bg-[#181818] border border-[#2a2a2a] px-2.5 py-1 transition-colors cursor-pointer"
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Fullscreen / Drawer Menu if opened */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#333] bg-[#161616] px-4 py-6 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => {
              const label = currentLanguage === 'pt' ? item.label : item.labelEs;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="p-3 text-left border border-[#2e2e2e] bg-[#1a1a1a] text-xs font-mono uppercase tracking-wider text-[#ddd] hover:text-[#FF6B35] hover:border-[#FF6B35] transition-colors"
                >
                  {label}
                </button>
              );
            })}
          </div>

          {onOpenResume && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full mt-3 p-3 bg-[#FF6B35] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Ver Currículo Completo (PDF)</span>
            </button>
          )}
        </div>
      )}

    </header>
  );
};
