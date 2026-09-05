import React, { useState } from 'react';
import { PageType, Language } from '../types';
import { CONTACT_DATA } from '../data/portfolioData';
import { TRANSLATIONS } from '../data/translations';
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
  Download
} from 'lucide-react';

interface AboutPageProps {
  onSelectPage: (page: PageType) => void;
  currentLanguage: Language;
  onOpenResume?: () => void;
  onSelectProject?: (projectId: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ 
  onSelectPage, 
  currentLanguage,
  onOpenResume,
  onSelectProject
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const t = TRANSLATIONS[currentLanguage].about;
  const featuredProjects = TRANSLATIONS[currentLanguage].projectsData.filter(p => p.featured);

  const copyText = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const pillarIcons = [
    <CheckCircle2 key="cs" className="w-4 h-4 text-[#FF6B35] shrink-0" />,
    <Database key="db" className="w-4 h-4 text-[#FF6B35] shrink-0" />,
    <Layers key="ux" className="w-4 h-4 text-[#FF6B35] shrink-0" />,
    <Bot key="ai" className="w-4 h-4 text-[#FF6B35] shrink-0" />
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Section with Artistic Editorial Flair */}
      <section className="relative overflow-hidden pt-4 sm:pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Editorial Hero Card */}
          <div className="border border-[#333] bg-[#181818] overflow-hidden shadow-2xl">
            
            {/* Top Bar with Badge */}
            <div className="bg-[#141414] border-b border-[#333] px-6 sm:px-10 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 bg-[#FF6B35]"></span>
                <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#FF6B35] font-semibold">
                  {t.topBadge}
                </span>
              </div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#9ca3af] hidden sm:block">
                {t.location}
              </span>
            </div>

            {/* Core Narrative Split: Identity/Actions (Left) & Value Proposition/Contact (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#333]">
              
              {/* Left Column: Portrait Photo & Identity/Profile below it */}
              <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 bg-[#161616] flex flex-col justify-between space-y-8">
                
                {/* Retrato Profissional */}
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

                  {/* Perfil Profissional logo abaixo da imagem */}
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#9ca3af] block mb-2 font-semibold">
                      {t.profileEyebrow}
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-serif-artistic italic mb-1 leading-none text-[#f5f5f5]">
                      Priscilla
                    </h1>
                    <h1 className="text-4xl sm:text-5xl font-serif-artistic italic mb-5 leading-none text-[#f5f5f5]">
                      Cahino
                    </h1>
                    
                    {/* Artistic Accent Divider */}
                    <div className="h-[2px] w-20 bg-[#FF6B35] mb-5"></div>
                    
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#f5f5f5] font-semibold flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#FF6B35] shrink-0"></span>
                        {t.roles[0]}
                      </p>
                      <p className="text-xs uppercase tracking-[0.16em] text-[#d1d5db]">
                        {t.roles[1]}
                      </p>
                      <p className="text-xs uppercase tracking-[0.16em] text-[#9ca3af]">
                        {t.roles[2]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="pt-6 border-t border-[#2a2a2a] space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                      id="btn-hero-projects"
                      onClick={() => onSelectPage('projects')}
                      className="flex items-center justify-center gap-2 px-4 py-3.5 bg-[#FF6B35] hover:bg-[#ff7f4d] text-[#121212] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
                    >
                      <span>{t.btnProjects}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {onOpenResume && (
                      <button
                        id="btn-hero-resume"
                        type="button"
                        onClick={onOpenResume}
                        className="flex items-center justify-center gap-2 px-4 py-3.5 border border-[#FF6B35] hover:bg-[#FF6B35] text-[#FF6B35] hover:text-[#121212] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm"
                        title={t.btnResume}
                      >
                        <FileText className="w-4 h-4" />
                        <span>{t.btnResume}</span>
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      id="btn-hero-whatsapp"
                      href={CONTACT_DATA.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 border border-[#FF6B35]/50 text-[#FF6B35] bg-[#FF6B35]/10 hover:bg-[#FF6B35] hover:text-[#121212] font-semibold text-xs uppercase tracking-wider transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{t.btnWhatsapp}</span>
                    </a>

                    <a
                      id="btn-hero-linkedin"
                      href={CONTACT_DATA.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 border border-[#333] hover:border-[#FF6B35] text-[#f5f5f5] hover:text-white bg-[#1f1f1f] font-semibold text-xs uppercase tracking-wider transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-[#0077B5]" />
                      <span>{t.btnLinkedin}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Apresentação Profissional */}
              <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-[#181818] flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-xs uppercase tracking-[0.3em] text-[#FF6B35] font-bold font-mono">
                      {t.presentationEyebrow}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-artistic italic text-white leading-snug">
                    {t.presentationHeadline}
                  </h2>

                  <div className="space-y-5 text-[#d1d5db] text-base sm:text-lg leading-relaxed font-light">
                    <p>
                      {t.presentationP1}
                    </p>
                    <p>
                      {t.presentationP2}
                    </p>
                  </div>
                </div>

                {/* Direct Contact Bar */}
                <div className="p-4 sm:p-5 border border-[#333] bg-[#141414] flex flex-wrap items-center justify-between gap-3 text-xs text-[#9ca3af]">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#FF6B35] shrink-0" />
                    <span className="font-mono text-[#f5f5f5] text-xs sm:text-sm">{CONTACT_DATA.email}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => copyText(CONTACT_DATA.email, 'email')}
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
                      href={`tel:${CONTACT_DATA.phone}`}
                      className="text-[#d1d5db] hover:text-[#FF6B35] flex items-center gap-1 font-mono text-xs"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#FF6B35]" />
                      <span>{CONTACT_DATA.phoneFormatted}</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Shelf: 4 Core Capabilities Distributed Evenly */}
            <div className="border-t border-[#333] bg-[#141414] p-6 sm:p-8 lg:p-10">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#9ca3af] font-semibold">
                  {t.pillarsEyebrow}
                </span>
                <span className="text-xs font-mono text-[#FF6B35] font-semibold">
                  {t.pillarsBadge}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {t.pillars.map((pillar, idx) => (
                  <div key={idx} className="p-4 border border-[#2a2a2a] hover:border-[#FF6B35] bg-[#181818] transition-colors flex flex-col justify-between space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-white">
                      {pillarIcons[idx]}
                      <span>{pillar.title}</span>
                    </div>
                    <p className="text-xs text-[#d1d5db] font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Main Narrative Section: "Sobre mim" */}
      <section id="sobre-mim" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-[#333] bg-[#181818] p-6 sm:p-12 lg:p-14 shadow-xl relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto border-b border-[#2e2e2e] pb-8 mb-10">
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6B35] mb-2 font-bold block font-mono">
              {t.storyEyebrow}
            </span>
            <h2 className="font-serif-artistic italic text-3xl sm:text-4xl text-white font-normal mb-3">
              {t.storyTitle}
            </h2>
            <div className="inline-block h-[1px] w-16 bg-[#FF6B35] mb-3"></div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#9ca3af] font-mono font-medium">
                {t.storyBadge}
              </span>
            </div>
          </div>

          {/* Text Content centered on the page */}
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

            <div className="p-5 border border-[#333] hover:border-[#FF6B35] bg-[#141414] transition-colors">
              <p className="text-white font-normal">
                {t.storyQuoteBox}
              </p>
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

            <p className="text-[#9ca3af] font-light">
              {t.storyClosing}
            </p>

          </div>

        </div>
      </section>

      {/* Academic Projects Preview Section (Direct link to Page 2) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#2e2e2e]">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#FF6B35] mb-2 font-bold block font-mono">
              {t.featuredEyebrow}
            </span>
            <h2 className="font-serif-artistic italic text-3xl sm:text-4xl text-white font-normal">
              {t.featuredTitle}
            </h2>
            <p className="text-[#9ca3af] text-xs sm:text-sm mt-1 font-light">
              {t.featuredSubtitle}
            </p>
          </div>

          <button
            id="btn-featured-view-all"
            onClick={() => onSelectPage('projects')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#FF6B35] hover:text-[#ff7f4d] transition-colors group cursor-pointer"
          >
            <span>{t.viewAllProjects}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => {
                if (onSelectProject) {
                  onSelectProject(project.id);
                } else {
                  onSelectPage('projects');
                }
              }}
              className="border border-[#333] hover:border-[#FF6B35] bg-[#181818] overflow-hidden flex flex-col justify-between transition-all group cursor-pointer shadow-md"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSelectPage('projects')}
              aria-label={`Ver detalhes do projeto ${project.title}`}
            >
              <div>
                {project.image && (
                  <div className="aspect-[16/9] w-full overflow-hidden bg-[#141414] relative border-b border-[#2a2a2a]">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      width={480}
                      height={270}
                      className="w-full h-full object-cover object-top grayscale contrast-105 group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 bg-[#121212]/90 text-xs font-mono text-[#FF6B35] uppercase tracking-wider border border-[#333]">
                        {project.categoryLabel}
                      </span>
                    </div>
                    <div className="absolute top-2.5 right-2.5">
                      <span className="text-xs font-mono text-[#d1d5db] bg-[#121212]/80 px-2 py-0.5 border border-[#333]">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 space-y-3">
                  <h3 className="font-serif-artistic italic text-xl text-white group-hover:text-[#FF6B35] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#FF6B35] font-semibold">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-[#d1d5db] font-light line-clamp-3 leading-relaxed">
                    {project.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-3 border-t border-[#2a2a2a] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-xs font-mono px-2 py-0.5 bg-[#141414] border border-[#2a2a2a] text-[#9ca3af]">
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="text-xs uppercase tracking-wider font-semibold text-[#FF6B35] group-hover:underline flex items-center gap-1 shrink-0">
                  <span>Ver Detalhes</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filosofia & Propósito */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden border border-[#333] hover:border-[#FF6B35] bg-[#141414] p-6 sm:p-8 transition-colors">
          <div className="max-w-3xl">
            <div className="h-[2px] w-10 bg-[#FF6B35] mb-3"></div>
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#FF6B35] block mb-2 font-mono">
              {t.quoteEyebrow}
            </span>
            <blockquote className="text-base sm:text-lg font-serif-artistic italic text-[#d4d4d4] font-normal leading-relaxed mb-2.5">
              {t.quoteText}
            </blockquote>
            <p className="text-xs uppercase tracking-[0.18em] font-semibold text-[#FF6B35]">
              {t.quoteAuthor}
            </p>
            <p className="mt-1.5 text-xs text-[#9ca3af] italic font-light">
              {t.quoteNote}
            </p>
          </div>
        </div>
      </section>

      {/* Contato & Conexão */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-[#333] bg-[#161616] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#FF6B35] block font-mono">
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
                  id="btn-cta-whatsapp"
                  href={CONTACT_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-[#FF6B35] hover:bg-[#ff7f4d] text-[#121212] font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  id="btn-cta-linkedin"
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
                  id="btn-cta-github"
                  href={CONTACT_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 border border-[#333] hover:border-[#FF6B35] bg-[#1f1f1f] text-[#eee] font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  <Github className="w-4 h-4 text-white" />
                  <span>GitHub</span>
                </a>

                {onOpenResume && (
                  <button
                    id="btn-cta-resume"
                    type="button"
                    onClick={onOpenResume}
                    className="flex items-center justify-center gap-2 py-3 px-4 border border-[#FF6B35]/70 bg-[#1f1f1f] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-[#121212] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>{t.btnResume || 'Ver Currículo Completo'}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
