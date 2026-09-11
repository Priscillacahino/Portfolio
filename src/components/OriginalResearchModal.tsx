import React from 'react';
import { SUSTAINABILITY_ARTICLE } from '../data/articleData';
import { 
  BookOpen, 
  X, 
  FileText, 
  Calendar, 
  Building2, 
  GraduationCap, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight 
} from 'lucide-react';

interface OriginalResearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReadArticle?: () => void;
}

export const OriginalResearchModal: React.FC<OriginalResearchModalProps> = ({
  isOpen,
  onClose,
  onReadArticle
}) => {
  if (!isOpen) return null;

  const res = SUSTAINABILITY_ARTICLE.originalResearch;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-fadeIn overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="original-research-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-[#161616] border border-[#333] shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#2a2a2a] pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-[#222] border border-[#333] text-[#FF6B35]">
                <BookOpen className="w-4 h-4" />
              </span>
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FF6B35] font-semibold">
                Pesquisa Original • Graduação em Ciências Contábeis (2013)
              </span>
            </div>
            <h3 id="original-research-title" className="text-lg sm:text-xl font-serif-artistic italic text-white">
              {res.title}
            </h3>
            <p className="text-xs text-[#999] font-light">
              Trabalho de Conclusão de Curso (TCC) aprovado perante banca examinadora no UNIPÊ.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#aaa] hover:text-white hover:bg-[#252525] border border-[#333] transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Ficha Técnica Acadêmica */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-[#1c1c1c] border border-[#2a2a2a] space-y-1">
            <span className="text-[#888] font-mono block text-[10px] uppercase">Instituição & Curso</span>
            <div className="flex items-center gap-1.5 font-semibold text-white">
              <Building2 className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span>UNIPÊ — Ciências Contábeis</span>
            </div>
          </div>

          <div className="p-3 bg-[#1c1c1c] border border-[#2a2a2a] space-y-1">
            <span className="text-[#888] font-mono block text-[10px] uppercase">Área de Concentração</span>
            <div className="flex items-center gap-1.5 font-semibold text-white">
              <GraduationCap className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span>Contabilidade Financeira</span>
            </div>
          </div>

          <div className="p-3 bg-[#1c1c1c] border border-[#2a2a2a] space-y-1">
            <span className="text-[#888] font-mono block text-[10px] uppercase">Extensão & Ano</span>
            <div className="flex items-center gap-1.5 font-semibold text-white">
              <Calendar className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span>{res.pages} páginas • Ano de Conclusão: 2013</span>
            </div>
          </div>

          <div className="p-3 bg-[#1c1c1c] border border-[#2a2a2a] space-y-1">
            <span className="text-[#888] font-mono block text-[10px] uppercase">Tipo de Investigação</span>
            <div className="flex items-center gap-1.5 font-semibold text-white">
              <Layers className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span>Qualitativa e Quantitativa (Mista)</span>
            </div>
          </div>
        </div>

        {/* Advertência sobre Temporalidade */}
        <div className="p-3.5 bg-[#241a15] border border-[#FF6B35]/40 text-xs text-[#ffcaa6] space-y-1">
          <div className="flex items-center gap-1.5 font-semibold text-[#FF6B35]">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Nota de Contexto Temporal</span>
          </div>
          <p className="font-light leading-relaxed text-[11px]">
            Os dados estatísticos, percentuais e práticas corporativas descritos na monografia original pertencem ao cenário bancário de 2013. A conclusão do estudo original já afirmava que o setor financeiro estava incorporando aspectos sociais e ambientais às decisões de crédito, embora houvesse diferenças significativas entre o reporte institucional e a percepção do cliente na ponta.
          </p>
        </div>

        {/* Instrumentos Metodológicos */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF6B35] font-semibold block">
            Instrumentos de Investigação Utilizados
          </span>
          <div className="space-y-1.5">
            {res.instruments.map((inst, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#ddd] bg-[#1a1a1a] p-2.5 border border-[#2e2e2e]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B35] shrink-0 mt-0.5" />
                <span className="font-light">{inst}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Principais Achados */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#FF6B35] font-semibold block">
            Síntese das Conclusões da Pesquisa de 2013
          </span>
          <ul className="space-y-1.5 text-xs text-[#bbb] font-light leading-relaxed">
            {res.keyFindings.map((finding, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#FF6B35] font-mono font-bold">•</span>
                <span>{finding}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer com Ações */}
        <div className="border-t border-[#2a2a2a] pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-[#777] font-mono">
            Acervo acadêmico • UNIPÊ João Pessoa/PB
          </span>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {onReadArticle && (
              <button
                onClick={() => {
                  onClose();
                  onReadArticle();
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#FF6B35] hover:bg-[#ff7f4d] text-black font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Ler Artigo Completo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 border border-[#333] hover:border-[#555] text-xs uppercase tracking-wider text-[#ccc] hover:text-white transition-colors cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
