import React, { useState } from 'react';
import { SUSTAINABILITY_ARTICLE } from '../data/articleData';
import { OriginalResearchModal } from './OriginalResearchModal';
import { 
  ArrowLeft, 
  Calendar, 
  BookOpen, 
  User, 
  GraduationCap, 
  Share2, 
  Check, 
  Info, 
  ArrowUp,
  Linkedin,
  FileText,
  Mail,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';

interface ArticlePageProps {
  onBackToHome: () => void;
  currentLanguage: Language;
  onOpenResume?: () => void;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({
  onBackToHome,
  currentLanguage,
  onOpenResume
}) => {
  const [isResearchModalOpen, setIsResearchModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const article = SUSTAINABILITY_ARTICLE;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <article className="min-h-screen bg-[#121212] text-[#f5f5f5] pb-24 animate-fadeIn">
      {/* Top Header Bar with Breadcrumb */}
      <div className="border-b border-[#2a2a2a] bg-[#161616]/90 sticky top-16 sm:top-20 z-30 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ccc] hover:text-[#FF6B35] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Portfólio</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsResearchModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider border border-[#333] hover:border-[#FF6B35] bg-[#1e1e1e] text-[#ccc] hover:text-white transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span>Sobre a pesquisa original</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider border border-[#333] hover:border-[#555] bg-[#1e1e1e] text-[#ccc] hover:text-white transition-colors cursor-pointer"
              title="Copiar link deste artigo"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copiado!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#aaa]" />
                  <span>Compartilhar</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-12">
        
        {/* Article Masthead */}
        <header className="space-y-6 border-b border-[#2a2a2a] pb-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF6B35] font-semibold bg-[#1e1e1e] px-2.5 py-1 border border-[#333]">
              Artigos e Estudos
            </span>
            <span className="text-xs font-mono tracking-wider text-[#888] bg-[#181818] px-2.5 py-1 border border-[#2e2e2e]">
              Releitura Profissional • 2013 → 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-artistic italic text-white tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#d1d5db] font-light leading-relaxed">
            {article.subtitle}
          </p>

          {/* Author & Academic Metadata */}
          <div className="pt-4 border-t border-[#222] flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-4 text-[#aaa]">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span className="text-white font-medium">{article.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span>{article.undergraduate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#FF6B35]" />
                <span>Pesquisa original: {article.originalYear} • Releitura: {article.revisitYear}</span>
              </div>
            </div>

            <button
              onClick={() => setIsResearchModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-[#FF6B35] hover:underline cursor-pointer font-mono"
            >
              <Info className="w-3.5 h-3.5" />
              <span>Ver ficha da monografia original (56 págs)</span>
            </button>
          </div>

          {/* Topic Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {article.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="text-[11px] font-mono text-[#aaa] bg-[#1a1a1a] px-2.5 py-0.5 border border-[#2a2a2a]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Section: "Sobre este artigo" (Explicit Disclaimer Box) */}
        <div className="p-6 sm:p-7 bg-[#171717] border-l-4 border-l-[#FF6B35] border border-[#2d2d2d] space-y-3">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#FF6B35]" />
            <h2 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Sobre este artigo & Advertência de Temporalidade
            </h2>
          </div>
          <p className="text-sm text-[#ddd] font-light leading-relaxed">
            {article.disclaimer}
          </p>
        </div>

        {/* Core Article Content Sections */}
        <div className="space-y-12 text-[#e0e0e0] leading-relaxed text-base sm:text-lg font-light">
          {article.sections.map((section, sIndex) => (
            <section key={section.id} className="space-y-5 border-b border-[#222] pb-10">
              <h2 className="text-xl sm:text-2xl font-serif-artistic italic text-white tracking-wide">
                {section.title}
              </h2>

              {section.highlight && (
                <div className="p-4 sm:p-5 bg-[#181818] border border-[#2f2f2f] text-[#f0f0f0] font-normal text-sm sm:text-base italic border-l-2 border-l-[#FF6B35]">
                  “{section.highlight}”
                </div>
              )}

              <div className="space-y-4">
                {section.paragraphs.map((p, pIndex) => (
                  <p key={pIndex} className="text-[#ccc] text-sm sm:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}

          {/* Conclusion Section */}
          <section className="space-y-5 pt-4">
            <h2 className="text-xl sm:text-2xl font-serif-artistic italic text-white tracking-wide">
              {article.conclusion.title}
            </h2>

            <div className="space-y-4">
              {article.conclusion.paragraphs.map((p, pIndex) => (
                <p key={pIndex} className="text-[#ccc] text-sm sm:text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="p-6 bg-[#181818] border border-[#333] text-center space-y-3 mt-8">
              <Sparkles className="w-5 h-5 text-[#FF6B35] mx-auto" />
              <p className="font-serif-artistic italic text-base sm:text-lg text-white max-w-2xl mx-auto">
                {article.conclusion.closingQuote}
              </p>
              <span className="block text-[11px] font-mono uppercase tracking-widest text-[#888]">
                Priscilla Santos Cahino • Releitura Crítica 2026
              </span>
            </div>
          </section>
        </div>

        {/* Footer Navigation & Author Bio */}
        <div className="border-t border-[#2a2a2a] pt-10 space-y-8">
          <div className="p-6 bg-[#161616] border border-[#2e2e2e] flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 shrink-0 border border-[#333] overflow-hidden bg-black">
              <img 
                src="/priscilla-cahino-perfil.jpg" 
                alt="Priscilla Cahino"
                className="w-full h-full object-cover grayscale contrast-110"
              />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="font-serif-artistic italic text-lg text-white">Priscilla Cahino</span>
                <span className="text-xs font-mono text-[#FF6B35] uppercase">
                  CX • Dados • Tecnologia
                </span>
              </div>
              <p className="text-xs text-[#aaa] font-light leading-relaxed">
                Graduada em Ciências Contábeis pelo IESP (2013), estudante de Análise e Desenvolvimento de Sistemas e com pós-graduação em Engenharia de Dados. Mais de 18 anos de experiência consolidada em operações financeiras e relacionamento com clientes.
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/priscilla-cahino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#bbb] hover:text-[#FF6B35] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:priscilla_cahino@hotmail.com"
                  className="inline-flex items-center gap-1 text-xs text-[#bbb] hover:text-[#FF6B35] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>E-mail</span>
                </a>
                {onOpenResume && (
                  <button
                    onClick={onOpenResume}
                    className="inline-flex items-center gap-1 text-xs text-[#FF6B35] hover:underline cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Ver Currículo</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="flex items-center justify-between">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#333] hover:border-[#FF6B35] bg-[#1a1a1a] text-xs font-mono uppercase tracking-wider text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao Portfólio</span>
            </button>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 border border-[#333] hover:border-[#555] bg-[#1a1a1a] text-xs font-mono uppercase tracking-wider text-[#999] hover:text-white transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Topo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal Sobre a Pesquisa Original */}
      <OriginalResearchModal
        isOpen={isResearchModalOpen}
        onClose={() => setIsResearchModalOpen(false)}
      />
    </article>
  );
};
