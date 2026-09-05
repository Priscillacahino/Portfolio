import React, { useEffect, useRef, useState } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Award, BookOpen, Briefcase, Code, Sparkles, CheckCircle2, Eye } from 'lucide-react';
import { CONTACT_DATA } from '../data/portfolioData';
import { Language } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, currentLanguage }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [viewCount, setViewCount] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      // Track view and retrieve hit count
      let isMounted = true;
      const trackAndFetchViewCount = async () => {
        try {
          const res = await fetch(
            'https://hits.sh/portifoliocpriscillacom.vercel.app/curriculo.svg?label=Acessos&color=ff6b35&labelColor=1a1a1a',
            { cache: 'no-cache' }
          );
          if (res.ok) {
            const svg = await res.text();
            const match = svg.match(/aria-label="[^:]+:\s*([0-9,.]+)"/);
            if (match && match[1] && isMounted) {
              setViewCount(match[1]);
              try {
                localStorage.setItem('priscilla_resume_views_cached', match[1]);
              } catch {}
              return;
            }
          }
        } catch {
          // Network error or offline
        }

        // Resilient fallback with localStorage
        if (isMounted) {
          try {
            const cached = localStorage.getItem('priscilla_resume_views_cached');
            if (cached) {
              setViewCount(cached);
            } else {
              const localVal = parseInt(localStorage.getItem('priscilla_resume_views') || '1', 10);
              localStorage.setItem('priscilla_resume_views', String(localVal + 1));
              setViewCount(String(localVal + 1));
            }
          } catch {}
        }
      };

      trackAndFetchViewCount();

      return () => {
        isMounted = false;
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    // Discreetly track download hit
    try {
      fetch('https://hits.sh/portifoliocpriscillacom.vercel.app/curriculo-download.svg?label=Downloads&color=ff6b35', { mode: 'no-cors' }).catch(() => {});
      const dlCount = parseInt(localStorage.getItem('priscilla_resume_downloads') || '0', 10);
      localStorage.setItem('priscilla_resume_downloads', String(dlCount + 1));
    } catch {}

    try {
      const response = await fetch('/Curriculo_Priscilla_Cahino.pdf');
      if (!response.ok) throw new Error('Network response not ok');
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Curriculo_Priscilla_Cahino.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);
    } catch {
      // Fallback
      window.open('/Curriculo_Priscilla_Cahino.pdf', '_blank');
    }
  };

  const isPt = currentLanguage === 'pt';
  const isEs = currentLanguage === 'es';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:static"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      ref={modalRef}
      onClick={(e) => {
        if (e.target === modalRef.current) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#181818] border border-[#333] shadow-2xl my-8 text-[#eee] print:border-0 print:bg-white print:text-black print:my-0 print:shadow-none">
        
        {/* Modal Action Bar (Hidden on Print) */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#2e2e2e] bg-[#121212] print:hidden gap-3 flex-wrap">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="w-2.5 h-2.5 bg-[#FF6B35]"></span>
            <h2 id="resume-title" className="text-xs uppercase tracking-widest font-mono text-white font-bold">
              {isPt ? 'Currículo Profissional Completo' : 'Currículum Vitae Completo'}
            </h2>
            {viewCount && (
              <span 
                className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#1c1c1c] border border-[#333] text-[11px] font-mono text-[#FF6B35]"
                title={isPt ? `Visualizações registradas deste currículo: ${viewCount}` : `Visualizaciones registradas de este currículum: ${viewCount}`}
              >
                <Eye className="w-3 h-3 text-[#FF6B35]" />
                <span>{viewCount} {isPt ? 'acessos' : 'accesos'}</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-end">
            <button
              id="btn-modal-download-resume"
              type="button"
              onClick={handleDownloadPdf}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 bg-[#FF6B35] hover:bg-[#ff7f4d] text-[#121212] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              title={isPt ? 'Baixar Arquivo PDF' : isEs ? 'Descargar Archivo PDF' : 'Download PDF File'}
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isPt ? 'Baixar PDF' : isEs ? 'Descargar PDF' : 'Download PDF'}</span>
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 border border-[#444] bg-[#242424] hover:bg-[#303030] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              title={isPt ? 'Imprimir ou Salvar em PDF' : isEs ? 'Imprimir o Guardar en PDF' : 'Print or Save to PDF'}
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{isPt ? 'Imprimir' : isEs ? 'Imprimir' : 'Print'}</span>
            </button>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#252525] hover:bg-[#333] border border-[#555] transition-colors cursor-pointer"
              aria-label={isPt ? 'Voltar ao Portfólio' : isEs ? 'Volver al Portafolio' : 'Back to Portfolio'}
            >
              <X className="w-4 h-4 text-[#FF6B35]" />
              <span>{isPt ? 'Voltar ao Portfólio' : isEs ? 'Volver al Portafolio' : 'Back to Portfolio'}</span>
            </button>
          </div>
        </div>

        {/* Printable Resume Document Area */}
        <div className="p-6 sm:p-10 space-y-8 bg-[#181818] print:bg-white print:text-black print:p-8">
          
          {/* Header */}
          <div className="border-b border-[#333] pb-6 print:border-black">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="font-serif-artistic italic text-3xl sm:text-4xl text-white print:text-black font-bold">
                  {CONTACT_DATA.name}
                </h1>
                <p className="text-[#FF6B35] print:text-black font-semibold text-sm sm:text-base mt-1">
                  Customer Success e Operações em Tecnologia
                </p>
                <p className="text-xs sm:text-sm text-[#bbb] print:text-neutral-700 mt-1 font-light max-w-2xl">
                  {isPt 
                    ? '18 anos em crédito, atendimento e melhoria de processos • Dados e UX aplicados à jornada do cliente' 
                    : isEs 
                    ? '18 años en crédito, atención y mejora de procesos • Datos y UX aplicados al customer journey'
                    : '18 years in credit, customer care & process optimization • Data & UX applied to the customer journey'}
                </p>
              </div>

              <div className="space-y-1 text-xs font-mono text-[#aaa] print:text-neutral-800 text-left sm:text-right mt-3 sm:mt-0">
                <p className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FF6B35] print:hidden" />
                  <span>{CONTACT_DATA.location}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#FF6B35] print:hidden" />
                  <span>{CONTACT_DATA.phoneFormatted}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#FF6B35] print:hidden" />
                  <span>{CONTACT_DATA.email}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-[#2a2a2a] print:border-neutral-300 text-xs font-mono">
              <a 
                href={CONTACT_DATA.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#FF6B35] hover:underline print:text-black flex items-center gap-1"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/priscilla-cahino</span>
              </a>
              <a 
                href={CONTACT_DATA.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#FF6B35] hover:underline print:text-black flex items-center gap-1"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/Priscillacahino</span>
              </a>
            </div>
          </div>

          {/* Posicionamento Estratégico / Resumo */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#FF6B35] print:text-black flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isPt ? 'Posicionamento Profissional' : isEs ? 'Posicionamiento Profesional' : 'Executive Summary'}</span>
            </h3>
            <p className="text-sm text-[#ccc] print:text-neutral-800 leading-relaxed font-light">
              {isPt ? (
                <>
                  <strong className="text-white print:text-black font-semibold">Sênior em negócio, crédito, processos e relacionamento; em desenvolvimento nas ferramentas de produtos digitais e dados.</strong> Mais de 18 anos de sólida trajetória nos setores bancário e imobiliário atuando em esteiras de concessão de crédito, conferência documental, atendimento de alta exigência e resolução ágil de atritos operacionais. Atuação orientada à jornada do cliente (CS/CX), unindo visão de regras de negócio a diferenciais práticos em modelagem de dados (SQL/MySQL), exploração com Python, métricas no Power BI e prototipação centrada no usuário no Figma.
                </>
              ) : isEs ? (
                <>
                  <strong className="text-white print:text-black font-semibold">Senior en negocio, crédito, procesos y relación con clientes; en desarrollo en herramientas de productos digitales y datos.</strong> Más de 18 años de sólida trayectoria en los sectores bancario e inmobiliario en análisis y flujo de crédito, atención consultiva y resolución ágil de demandas operativas complejas. Enfoque estratégico en Customer Success (CS/CX), integrando visión de negocio con diferenciales técnicos en SQL, Power BI, Python y diseño UX/UI en Figma.
                </>
              ) : (
                <>
                  <strong className="text-white print:text-black font-semibold">Senior in business, credit underwriting, operational workflows, and client relationships; continuously expanding expertise across digital product tools and data analytics.</strong> Over 18 years of seasoned experience in the banking and real estate industries managing credit pipelines, consultative customer care, and rapid operational problem-solving. Strong focus on Customer Success (CS/CX), combining robust business acumen with practical technical skillsets in SQL, Power BI, Python, and human-centered UX/UI prototyping in Figma.
                </>
              )}
            </p>
          </div>

          {/* Experiência Profissional */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#FF6B35] print:text-black flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{isPt ? 'Trajetória & Experiência Profissional' : isEs ? 'Trayectoria y Experiencia' : 'Professional Experience'}</span>
            </h3>

            <div className="border-l-2 border-[#FF6B35] pl-4 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <span className="font-semibold text-white print:text-black text-sm">
                  {isPt ? 'Especialista em Atendimento, Crédito e Relacionamento' : 'Credit, Customer Operations & Relationship Specialist'}
                </span>
                <span className="font-mono text-[#888] print:text-neutral-600">
                  {isPt ? '18+ anos de atuação consolidada' : '18+ years of proven track record'}
                </span>
              </div>
              <p className="text-xs text-[#FF6B35] font-mono print:text-neutral-700">
                {isPt ? 'Segmentos Bancário & Imobiliário' : 'Banking & Real Estate Sectors'}
              </p>
              <ul className="text-xs sm:text-sm text-[#bbb] print:text-neutral-800 space-y-1.5 list-disc list-inside font-light">
                <li>
                  {isPt 
                    ? 'Gestão de relacionamento de longo prazo com clientes pessoas físicas e jurídicas, assegurando retenção, transparência e satisfação (CS/CX).'
                    : 'End-to-end relationship management with retail and corporate clients, fostering long-term loyalty and satisfaction (CS/CX).'}
                </li>
                <li>
                  {isPt 
                    ? 'Análise minuciosa de crédito, validação de conformidade documental e acompanhamento de esteiras financeiras complexas.'
                    : 'In-depth credit analysis, compliance verification, and proactive pipeline management of financial transactions.'}
                </li>
                <li>
                  {isPt 
                    ? 'Otimização contínua de processos e rotinas operacionais para eliminação de gargalos e redução de tempo de resposta aos clientes.'
                    : 'Continuous improvement of operational workflows to eliminate bottlenecks and shorten customer response cycles.'}
                </li>
                <li>
                  {isPt 
                    ? 'Mediação estratégica de demandas sensíveis e resolução ágil de conflitos com postura colaborativa e consultiva.'
                    : 'Strategic conflict resolution and sensitive demand mitigation with a collaborative, consultative approach.'}
                </li>
              </ul>
            </div>
          </div>

          {/* Formação Acadêmica & Fábrica de Software */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#FF6B35] print:text-black flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isPt ? 'Formação Acadêmica' : isEs ? 'Formación Académica' : 'Education'}</span>
            </h3>

            <div className="space-y-3">
              <div className="border-l-2 border-[#333] pl-4 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                  <span className="font-semibold text-white print:text-black text-sm">
                    {isPt ? 'Graduação em Análise e Desenvolvimento de Sistemas (ADS)' : 'Undergraduate Degree in Systems Analysis and Development'}
                  </span>
                  <span className="font-mono text-[#888] print:text-neutral-600">UNIPÊ • Em andamento</span>
                </div>
                <p className="text-xs text-[#aaa] print:text-neutral-700">
                  {isPt 
                    ? 'Participação ativa na Fábrica de Software: desenvolvimento de produtos digitais, modelagem de dados e interfaces centradas no usuário.' 
                    : 'Active participation in the Software Factory: digital product prototyping, relational data modeling, and user-centered design.'}
                </p>
              </div>
            </div>
          </div>

          {/* Competências & Ferramentas (Diferenciais) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            <div className="p-4 border border-[#333] bg-[#141414] print:border-neutral-300 print:bg-neutral-50 space-y-2">
              <h4 className="text-xs uppercase font-mono font-bold text-[#FF6B35] print:text-black">
                {isPt ? 'Core de Negócio & Operações' : 'Core Business & Operations'}
              </h4>
              <ul className="text-xs text-[#bbb] print:text-neutral-800 space-y-1">
                <li>• Customer Success (CS) & Customer Experience (CX)</li>
                <li>• Análise de Crédito e Esteiras Operacionais</li>
                <li>• Mapeamento de Jornada do Cliente e Processos</li>
                <li>• Gestão de Relacionamento e Resolução de Conflitos</li>
                <li>• Foco em Retenção, Engajamento e Eficiência</li>
              </ul>
            </div>

            <div className="p-4 border border-[#333] bg-[#141414] print:border-neutral-300 print:bg-neutral-50 space-y-2">
              <h4 className="text-xs uppercase font-mono font-bold text-[#FF6B35] print:text-black">
                {isPt ? 'Diferenciais Técnicos em Dados & UX' : 'Technical Highlights in Data & UX'}
              </h4>
              <ul className="text-xs text-[#bbb] print:text-neutral-800 space-y-1">
                <li>• <strong>Dados:</strong> SQL, MySQL, Python (Pandas, EDA), Power BI</li>
                <li>• <strong>UX/UI:</strong> Figma, Prototipação, Wireframes, Usabilidade</li>
                <li>• <strong>Tecnologia:</strong> Git & GitHub, Engenharia de Software</li>
                <li>• <strong>Inovação:</strong> Inteligência Artificial aplicada a processos</li>
              </ul>
            </div>

          </div>

          {/* Projetos Técnicos de Destaque */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#FF6B35] print:text-black flex items-center gap-2">
              <Code className="w-3.5 h-3.5" />
              <span>{isPt ? 'Projetos Acadêmicos Relevantes' : 'Highlighted Academic Projects'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 border border-[#2e2e2e] print:border-neutral-300 bg-[#141414] print:bg-transparent">
                <span className="font-semibold text-white print:text-black block mb-1">Adm4All</span>
                <p className="text-[#ccc] print:text-neutral-700 text-xs leading-relaxed font-light">
                  {isPt ? 'Prototipação de telas, fluxos de usuário e design system no Figma na Fábrica de Software UNIPÊ.' : 'Full UI prototyping, flows, and design system in Figma.'}
                </p>
              </div>

              <div className="p-3 border border-[#2e2e2e] print:border-neutral-300 bg-[#141414] print:bg-transparent">
                <span className="font-semibold text-white print:text-black block mb-1">ClínicaCare</span>
                <p className="text-[#ccc] print:text-neutral-700 text-xs leading-relaxed font-light">
                  {isPt ? 'Modelagem relacional MySQL, análise com Python/Pandas e dashboard executivo no Power BI.' : 'Modelado relacional en MySQL, análisis con Python/Pandas y dashboard ejecutivo en Power BI.'}
                </p>
              </div>

              <div className="p-3 border border-[#2e2e2e] print:border-neutral-300 bg-[#141414] print:bg-transparent">
                <span className="font-semibold text-white print:text-black block mb-1">Petzona</span>
                <p className="text-[#ccc] print:text-neutral-700 text-xs leading-relaxed font-light">
                  {isPt ? 'Protótipo mobile interativo no Figma com persona e mapeamento da jornada do cliente no Miro.' : 'Prototipo móvil interactivo en Figma con persona y mapeo de la jornada del cliente en Miro.'}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer info in modal */}
        <div className="px-6 py-4 border-t border-[#2e2e2e] bg-[#121212] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#888] print:hidden">
          <div className="flex items-center gap-2 flex-wrap">
            <span>{CONTACT_DATA.name} • João Pessoa - PB</span>
            {viewCount && (
              <>
                <span className="hidden sm:inline text-[#555]">•</span>
                <span className="inline-flex items-center gap-1.5 text-[#FF6B35]">
                  <Eye className="w-3.5 h-3.5" />
                  <span>{viewCount} {isPt ? 'visualizações deste currículo' : 'visualizaciones registradas'}</span>
                </span>
              </>
            )}
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <button
              type="button"
              onClick={handleDownloadPdf}
              className="text-[#FF6B35] hover:underline flex items-center gap-1 cursor-pointer font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isPt ? 'Baixar PDF' : isEs ? 'Descargar PDF' : 'Download PDF'}</span>
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={handlePrint}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{isPt ? 'Imprimir' : isEs ? 'Imprimir' : 'Print'}</span>
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 bg-[#252525] hover:bg-[#333] text-white border border-[#444] transition-colors cursor-pointer font-sans font-semibold text-xs"
            >
              {isPt ? '← Voltar ao Portfólio' : isEs ? '← Volver al Portafolio' : '← Back to Portfolio'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
