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
            'https://hits.sh/portfoliopriscilla.vercel.app/curriculo.svg?label=Acessos&color=ff6b35&labelColor=1a1a1a',
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
      fetch('https://hits.sh/portfoliopriscilla.vercel.app/curriculo-download.svg?label=Downloads&color=ff6b35', { mode: 'no-cors' }).catch(() => {});
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
                  {isPt 
                    ? 'Customer Experience | Análise de Dados | Estudante de ADS' 
                    : isEs 
                    ? 'Customer Experience | Análisis de Datos | Estudiante de ADS' 
                    : 'Customer Experience | Data Analysis | Systems Development Student'}
                </p>
                <p className="text-xs sm:text-sm text-[#bbb] print:text-neutral-700 mt-1 font-light max-w-2xl">
                  {isPt 
                    ? '+18 anos em atendimento, crédito e relacionamento; em formação em tecnologia' 
                    : isEs 
                    ? '+18 años uniendo experiencia del cliente, operaciones, análisis de datos y tecnología'
                    : '+18 years bridging customer experience, operations, data analytics, and technology'}
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
              <a 
                href="https://portfoliopriscilla.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#FF6B35] hover:underline print:text-black flex items-center gap-1"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>portfoliopriscilla.vercel.app</span>
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
                  Profissional com <strong className="text-white print:text-black font-semibold">+18 anos de sólida trajetória</strong> em negócios, crédito e relacionamento com clientes nos setores bancário e imobiliário, em <strong className="text-white print:text-black font-semibold">transição consciente para a área de tecnologia</strong>. Graduação em Ciências Contábeis (UNIESP), graduação em Análise e Desenvolvimento de Sistemas em andamento (UNIPÊ) com vivência prática na Fábrica de Software e Pós-graduação em Engenharia de Dados (UNIESP). Não me posiciono como especialista em TI, mas trago a maturidade e visão de processos sênior somadas a <strong className="text-white print:text-black font-semibold">noções práticas aplicadas em SQL, Python, Power BI e prototipação em Figma</strong>, com foco em Customer Success, Operações, Análise de Dados e UX.
                </>
              ) : isEs ? (
                <>
                  Profesional con <strong className="text-white print:text-black font-semibold">+18 años de sólida trayectoria</strong> en negocios, crédito y atención al cliente en los sectores bancario e inmobiliario, en <strong className="text-white print:text-black font-semibold">transición consciente a la tecnología</strong>. Licenciatura en Ciencias Contables (UNIESP), formación en Análisis y Desenvolvimento de Sistemas en curso (UNIPÊ) con participación en la Fábrica de Software y Posgrado en Ingeniería de Datos (UNIESP). No me posiciono como especialista en TI, sino con madurez senior en procesos y negocios combinada con <strong className="text-white print:text-black font-semibold">nociones prácticas en SQL, Python, Power BI y Figma</strong> para Customer Success, Operaciones, Análisis de Datos y UX.
                </>
              ) : (
                <>
                  Business and credit professional with <strong className="text-white print:text-black font-semibold">+18 years of career experience</strong> across banking and real estate, in a <strong className="text-white print:text-black font-semibold">conscious transition into technology</strong>. Degree in Accounting Sciences (UNIESP), Systems Analysis & Development undergraduate (UNIPÊ) active in the Software Factory, complemented by an Postgraduate qualification in Data Engineering (UNIESP). Blending senior business acumen with <strong className="text-white print:text-black font-semibold">practical application of SQL, Python, Power BI, and Figma</strong> focused on Customer Success, Tech Operations, Data Analysis, and UX.
                </>
              )}
            </p>
          </div>

          {/* Experiência Profissional Completa (Valores Aproximados Realistas) */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#FF6B35] print:text-black flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{isPt ? 'Experiência Profissional' : isEs ? 'Experiencia Profesional' : 'Professional Experience'}</span>
            </h3>

            <div className="space-y-4">
              {/* Exp 1: Fábrica de Software */}
              <div className="border-l-2 border-[#FF6B35] pl-4 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                  <span className="font-semibold text-white print:text-black text-sm">
                    {isPt ? 'UX/UI — Projeto de Extensão' : 'UX/UI — University Extension Project'}
                  </span>
                  <span className="font-mono text-[#888] print:text-neutral-600">
                    mar/2026 – jul/2026 • {isPt ? 'Híbrido' : 'Hybrid'}
                  </span>
                </div>
                <p className="text-xs text-[#FF6B35] font-mono print:text-neutral-700">
                  Fábrica de Software UBTech Office / UNIPÊ — João Pessoa/PB
                </p>
                <ul className="text-xs sm:text-sm text-[#bbb] print:text-neutral-800 space-y-1 list-disc list-inside font-light">
                  <li>
                    {isPt 
                      ? 'Design de interfaces no projeto Administração para Todos: pesquisa de UX, wireframes, protótipos interativos de alta fidelidade.' 
                      : 'Interface design for the Administration for All project: UX research, wireframes, interactive high-fidelity prototypes.'}
                  </li>
                  <li>
                    {isPt 
                      ? 'Organização de fluxos de navegação para Coordenação, Instrutores e Alunos.' 
                      : 'Organization of navigation flows for Coordinators, Instructors, and Students.'}
                  </li>
                  <li>
                    {isPt 
                      ? 'Colaboração com a equipe de desenvolvimento na apresentação de protótipos e fluxos.' 
                      : 'Collaboration with the development team to present prototypes and navigation flows.'}
                  </li>
                </ul>
              </div>

              {/* Exp 2: Confiance Transações Financeiras */}
              <div className="border-l-2 border-[#FF6B35] pl-4 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                  <span className="font-semibold text-white print:text-black text-sm">
                    {isPt ? 'Analista de Crédito e Risco | Experiência do Cliente (CX)' : 'Credit & Risk Analyst | Customer Experience (CX)'}
                  </span>
                  <span className="font-mono text-[#888] print:text-neutral-600">
                    jul/2018 – dez/2025 • {isPt ? 'Tempo integral' : 'Full-time'}
                  </span>
                </div>
                <p className="text-xs text-[#FF6B35] font-mono print:text-neutral-700">
                  Confiance Transações Financeiras — João Pessoa/PB
                </p>
                <p className="text-xs text-[#d1d5db] font-light print:text-neutral-700">
                  {isPt 
                    ? 'Atuação em análise de crédito e validação documental para operações de crédito habitacional, consignado e comercial, com carteira mensal variável de 20 a 40 processos em análise.'
                    : 'Credit analysis and document validation for mortgage, payroll loan, and commercial operations, with a monthly portfolio of 20 to 40 processes.'}
                </p>
                <ul className="text-xs sm:text-sm text-[#bbb] print:text-neutral-800 space-y-1 list-disc list-inside font-light">
                  <li>
                    {isPt 
                      ? 'Abertura, atualização e acompanhamento de contas de clientes Pessoa Física.' 
                      : 'Opening, updating, and monitoring Individual (PF) client accounts.'}
                  </li>
                  <li>
                    {isPt 
                      ? 'Atendimento e orientação consultiva sobre crédito, financiamentos, produtos e serviços financeiros.' 
                      : 'Consultative customer service and guidance on credit, financing, financial products, and services.'}
                  </li>
                  <li>
                    {isPt 
                      ? 'Identifiquei que a taxa de fechamento de contratos dependia mais de gargalos documentais e de aprovação externa do que do volume de clientes atendidos — percepção que hoje aplico à análise de jornada do cliente e pontos de atrito no processo.' 
                      : 'Identified that deal closing rates depended more on documentation bottlenecks and external approval workflows than on sheer client volume — insight applied to customer journey mapping and friction reduction.'}
                  </li>
                  <li>
                    {isPt 
                      ? 'Suporte à resolução de demandas e conflitos, contribuindo para agilidade operacional e melhoria contínua da experiência do cliente.' 
                      : 'Support in demand and dispute resolution, contributing to operational agility and enhanced customer experience.'}
                  </li>
                  <li>
                    {isPt 
                      ? 'Certificação em Ouvidoria Pública e Privada pela Escola Nacional de Administração Pública (ENAP).' 
                      : 'Certified in Ombudsman and Sensitive Demands Mediation by ENAP.'}
                  </li>
                </ul>
              </div>

              {/* Exp 3: Confiance Conde */}
              <div className="border-l-2 border-[#333] pl-4 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                  <span className="font-semibold text-white print:text-black text-sm">
                    {isPt ? 'Analista de Negócios Imobiliários' : 'Real Estate Business Analyst'}
                  </span>
                  <span className="font-mono text-[#888] print:text-neutral-600">
                    dez/2023 – dez/2024 • {isPt ? 'Remoto (Atuação em paralelo)' : 'Remote (Simultaneous Role)'}
                  </span>
                </div>
                <p className="text-xs text-[#aaa] font-mono print:text-neutral-700">
                  Confiance Conde — Conde/PB
                </p>
                <p className="text-xs text-[#d1d5db] font-light print:text-neutral-700">
                  {isPt 
                    ? 'Atuação simultânea, em regime home office, na originação e acompanhamento de financiamentos imobiliários — empresa distinta da Confiance Transações Financeiras, mesmo segmento.'
                    : 'Simultaneous remote position in originating and monitoring real estate financing — distinct company from Confiance Transações Financeiras in the same segment.'}
                </p>
                <ul className="text-xs sm:text-sm text-[#bbb] print:text-neutral-800 space-y-1 list-disc list-inside font-light">
                  <li>
                    {isPt 
                      ? 'Análise e conferência documental para operações de crédito imobiliário, observando requisitos e procedimentos das instituições financeiras.' 
                      : 'Document review and verification for mortgage credit operations adhering to financial institution compliance.'}
                  </li>
                  <li>
                    {isPt 
                      ? 'Acompanhamento de propostas, pendências e etapas necessárias para aprovação e contratação dos financiamentos.' 
                      : 'Tracking proposals, pending requirements, and procedural steps for financing approval and closing.'}
                  </li>
                  <li>
                    {isPt 
                      ? 'Relacionamento e interface entre clientes, incorporadoras e instituições financeiras, facilitando a comunicação e o andamento dos processos.' 
                      : 'Relationship management and liaison between clients, developers, and financial institutions, facilitating process flow.'}
                  </li>
                  <li>
                    {isPt 
                      ? 'Apoio na resolução de demandas e acompanhamento do cliente ao longo de toda a jornada de financiamento.' 
                      : 'Hands-on support in resolving inquiries and accompanying clients throughout the entire mortgage journey.'}
                  </li>
                </ul>
              </div>

              {/* Exp 4: GN Imobiliária */}
              <div className="border-l-2 border-[#333] pl-4 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                  <span className="font-semibold text-white print:text-black text-sm">
                    {isPt ? 'Assistente Administrativo | Suporte ao Cliente' : 'Administrative Assistant | Customer Support'}
                  </span>
                  <span className="font-mono text-[#888] print:text-neutral-600">
                    dez/2012 – jun/2018 • {isPt ? 'Presencial' : 'On-site'}
                  </span>
                </div>
                <p className="text-xs text-[#aaa] font-mono print:text-neutral-700">
                  GN Imobiliária — João Pessoa/PB
                </p>
                <ul className="text-xs sm:text-sm text-[#bbb] print:text-neutral-800 space-y-1 list-disc list-inside font-light">
                  <li>
                    {isPt 
                      ? 'Suporte operacional e atendimento administrativo a expressivo fluxo mensal de clientes, mantendo altos padrões de satisfação e fidelização.' 
                      : 'Operational and administrative customer care for substantial monthly client volumes, sustaining high satisfaction ratings.'}
                  </li>
                  <li>
                    {isPt 
                      ? 'Digitalização e organização do acervo documental, reduzindo sensivelmente o tempo de localização e recuperação de contratos.' 
                      : 'Digitalization and archiving of contractual records, noticeably accelerating information retrieval times.'}
                  </li>
                  <li>
                    {isPt 
                      ? 'Resolução ágil de demandas contratuais e mediação de conflitos locatícios, diminuindo expressivamente a reincidência de chamados.' 
                      : 'Proactive resolution of administrative inquiries and lease disputes, minimizing repeat service tickets.'}
                  </li>
                </ul>
              </div>

              {/* Exp 5: Caixa Econômica Federal */}
              <div className="border-l-2 border-[#333] pl-4 space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                  <span className="font-semibold text-white print:text-black text-sm">
                    {isPt ? 'Recepcionista | Atendimento e Operações Bancárias' : 'Front Desk Officer | Banking Operations'}
                  </span>
                  <span className="font-mono text-[#888] print:text-neutral-600">
                    abr/2007 – nov/2011 • {isPt ? 'Presencial' : 'On-site'}
                  </span>
                </div>
                <p className="text-xs text-[#aaa] font-mono print:text-neutral-700">
                  Caixa Econômica Federal — João Pessoa/PB
                </p>
                <p className="text-xs text-[#d1d5db] font-light print:text-neutral-700">
                  {isPt 
                    ? 'Atuação no atendimento ao cliente e suporte às rotinas bancárias e administrativas, com volume diário superior a 100 atendimentos.'
                    : 'Customer service and administrative support for banking operations with a daily volume exceeding 100 interactions.'}
                </p>
                <ul className="text-xs sm:text-sm text-[#bbb] print:text-neutral-800 space-y-1 list-disc list-inside font-light">
                  <li>
                    {isPt 
                      ? 'Abertura de contas Pessoa Física, atualização cadastral e conferência de informações e documentos.' 
                      : 'Opening Individual (PF) checking/savings accounts, customer data updates, and document verification.'}
                  </li>
                  <li>
                    {isPt 
                      ? 'Atendimento em processos de inscrição e regularização de CPF e PIS.' 
                      : 'Customer assistance with CPF and PIS federal registration and regularizations.'}
                  </li>
                  <li>
                    {isPt 
                      ? 'Apoio na análise documental relacionada a operações de crédito habitacional e comercial.' 
                      : 'Support in document audit related to residential and commercial credit applications.'}
                  </li>
                  <li>
                    {isPt 
                      ? 'Orientação sobre produtos, serviços financeiros e utilização de canais alternativos e digitais de atendimento.' 
                      : 'Guidance on banking products, financial services, and self-service digital branch channels.'}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Formação Acadêmica & Pós-Graduação */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#FF6B35] print:text-black flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{isPt ? 'Formação Acadêmica & Especialização' : isEs ? 'Educación y Especialización' : 'Education & Credentials'}</span>
            </h3>

            <div className="space-y-3">
              <div className="border-l-2 border-[#FF6B35] pl-4 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                  <span className="font-semibold text-white print:text-black text-sm">
                    {isPt ? 'Graduação em Análise e Desenvolvimento de Sistemas (ADS)' : 'Degree in Systems Analysis and Development'}
                  </span>
                  <span className="font-mono text-[#888] print:text-neutral-600">fev/2025 – jul/2027 • {isPt ? 'Em andamento' : 'In progress'}</span>
                </div>
                <p className="text-xs text-[#FF6B35] font-mono print:text-neutral-700">Centro Universitário de João Pessoa (UNIPÊ)</p>
                <p className="text-xs text-[#bbb] print:text-neutral-700 font-light">
                  {isPt 
                    ? 'Lógica de programação, modelagem de banco de dados, engenharia de software e participação prática como estagiária na Fábrica de Software UBTech Office.' 
                    : 'Programming logic, database modeling, software engineering, and active internship at UBTech Office Software Factory.'}
                </p>
              </div>

              <div className="border-l-2 border-[#333] pl-4 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                  <span className="font-semibold text-white print:text-black text-sm">
                    {isPt ? 'Pós-graduação em Engenharia de Dados' : 'Postgraduate qualification in Data Engineering'}
                  </span>
                  <span className="font-mono text-[#888] print:text-neutral-600">nov/2023 – mar/2024 • {isPt ? 'Concluído' : 'Completed'}</span>
                </div>
                <p className="text-xs text-[#aaa] font-mono print:text-neutral-700">UNIESP Centro Universitário</p>
                <p className="text-xs text-[#bbb] print:text-neutral-700 font-light">
                  {isPt 
                    ? 'Transformação de grandes volumes de dados em insights estratégicos. SQL, arquiteturas ETL/ELT, modelagem analítica e Business Intelligence.' 
                    : 'Transforming large data volumes into strategic business insights. SQL, ETL/ELT pipelines, analytical modeling, and Business Intelligence.'}
                </p>
              </div>

              <div className="border-l-2 border-[#333] pl-4 space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                  <span className="font-semibold text-white print:text-black text-sm">
                    {isPt ? 'Graduação em Ciências Contábeis (Bacharelado)' : 'Bachelor Degree in Accounting Sciences'}
                  </span>
                  <span className="font-mono text-[#888] print:text-neutral-600">2009 – 2013 • {isPt ? 'Concluído' : 'Completed'}</span>
                </div>
                <p className="text-xs text-[#aaa] font-mono print:text-neutral-700">UNIESP</p>
                <p className="text-xs text-[#bbb] print:text-neutral-700 font-light">
                  {isPt 
                    ? 'Formação com sólida base em conformidade contábil, conciliação, auditoria, análise de balanços e operações financeiras. Trabalho de Conclusão de Curso (TCC) voltado a Instituições Financeiras e Sustentabilidade Socioambiental.' 
                    : 'Comprehensive background in accounting compliance, reconciliation, audit, balance sheet analysis, and financial operations. Capstone thesis on Financial Institutions and Socio-environmental Sustainability.'}
                </p>
              </div>
            </div>
          </div>

          {/* Licenças & Certificações Relevantes */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#FF6B35] print:text-black flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isPt ? 'Licenças & Certificações Relevantes' : 'Relevant Certifications'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 border border-[#2e2e2e] print:border-neutral-300 bg-[#141414] print:bg-transparent space-y-1">
                <span className="font-semibold text-white print:text-black block">
                  {isPt ? '📊 Dados, BI & Inteligência Artificial' : 'Data, BI & AI'}
                </span>
                <ul className="text-[#bbb] print:text-neutral-700 space-y-0.5 font-light">
                  <li>• Power BI e Copilot para Análise de Dados</li>
                  <li>• SQL para Ciência de Dados e Banco Relacional</li>
                  <li>• Microsoft Certified: Azure AI Fundamentals (IA-900)</li>
                  <li>• Soluções de Inteligência Artificial no GitHub</li>
                </ul>
              </div>

              <div className="p-3 border border-[#2e2e2e] print:border-neutral-300 bg-[#141414] print:bg-transparent space-y-1">
                <span className="font-semibold text-white print:text-black block">
                  {isPt ? '🎨 UX/UI, Ouvidoria & Gestão' : 'UX/UI, Ombudsman & Management'}
                </span>
                <ul className="text-[#bbb] print:text-neutral-700 space-y-0.5 font-light">
                  <li>• Ouvidoria Pública e Privada — ENAP</li>
                  <li>• UX Design: Usabilidade e Melhores Práticas Web</li>
                  <li>• Liderança no Atendimento e Resolução de Conflitos</li>
                  <li>• Fundamentos de Finanças e Análise de Risco</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Competências & Ferramentas (Diferenciais) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
            
            <div className="p-4 border border-[#333] bg-[#141414] print:border-neutral-300 print:bg-neutral-50 space-y-2">
              <h4 className="text-xs uppercase font-mono font-bold text-[#FF6B35] print:text-black">
                {isPt ? 'Core de Negócio & Operações' : 'Core Business & Operations'}
              </h4>
              <ul className="text-xs text-[#bbb] print:text-neutral-800 space-y-1">
                <li>• Customer Success (CS) & Customer Experience (CX)</li>
                <li>• Análise de Crédito e Gestão de Riscos (+7 anos)</li>
                <li>• Mapeamento de Jornada do Cliente e Redução de Inadimplência</li>
                <li>• Ouvidoria e Mediação de Demandas Sensíveis (ENAP)</li>
                <li>• Otimização Contínua de Processos e KPIs</li>
              </ul>
            </div>

            <div className="p-4 border border-[#333] bg-[#141414] print:border-neutral-300 print:bg-neutral-50 space-y-2">
              <h4 className="text-xs uppercase font-mono font-bold text-[#FF6B35] print:text-black">
                {isPt ? 'Diferenciais Técnicos em Dados & UX' : 'Technical Highlights in Data & UX'}
              </h4>
              <ul className="text-xs text-[#bbb] print:text-neutral-800 space-y-1">
                <li>• <strong>Dados & BI:</strong> Power BI, SQL (MySQL), Python (Pandas, Scikit-Learn)</li>
                <li>• <strong>UX/UI Design:</strong> Figma, Miro, Prototipação Navegável, Design System</li>
                <li>• <strong>Engenharia de Dados:</strong> Modelagem Relacional, Pipelines e ETL (MBA)</li>
                <li>• <strong>Tecnologia:</strong> Git & GitHub, Engenharia de Software, IA Aplicada</li>
              </ul>
            </div>

          </div>

          {/* Projetos Técnicos de Destaque com Estrutura Objetivo / Ferramentas / Resultados */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#FF6B35] print:text-black flex items-center gap-2">
              <Code className="w-3.5 h-3.5" />
              <span>{isPt ? 'Projetos Técnicos de Destaque' : 'Highlighted Projects'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 border border-[#2e2e2e] print:border-neutral-300 bg-[#141414] print:bg-transparent space-y-1.5">
                <span className="font-semibold text-white print:text-black block text-sm">ClínicaCare</span>
                <p className="text-[#FF6B35] text-[11px] font-mono">Power BI • SQL • Python</p>
                <p className="text-[#ccc] print:text-neutral-700 text-xs leading-relaxed font-light">
                  <strong>Objetivo:</strong> Mapear gargalos e risco de inadimplência em clínica de saúde.<br/>
                  <strong>Resultados:</strong> Modelagem MySQL, análise exploratória em Python e dashboard no Power BI com dados acadêmicos simulados.
                </p>
              </div>

              <div className="p-3.5 border border-[#2e2e2e] print:border-neutral-300 bg-[#141414] print:bg-transparent space-y-1.5">
                <span className="font-semibold text-white print:text-black block text-sm">Adm4All</span>
                <p className="text-[#FF6B35] text-[11px] font-mono">Figma • UX/UI • Design System</p>
                <p className="text-[#ccc] print:text-neutral-700 text-xs leading-relaxed font-light">
                  <strong>Objetivo:</strong> Interface inclusiva de capacitação empreendedora na Fábrica de Software.<br/>
                  <strong>Resultados:</strong> Prototipação de interfaces no Figma e organização de fluxos para Coordenação, Instrutores e Alunos.
                </p>
              </div>

              <div className="p-3.5 border border-[#2e2e2e] print:border-neutral-300 bg-[#141414] print:bg-transparent space-y-1.5">
                <span className="font-semibold text-white print:text-black block text-sm">Petzona</span>
                <p className="text-[#FF6B35] text-[11px] font-mono">Figma • Miro • Customer Journey</p>
                <p className="text-[#ccc] print:text-neutral-700 text-xs leading-relaxed font-light">
                  <strong>Objetivo:</strong> Prototipação mobile de agendamento de cuidados e serviços pet.<br/>
                  <strong>Resultados:</strong> Construção de persona, mapeamento da jornada no Miro e protótipo navegável de serviços pet no Figma.
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
