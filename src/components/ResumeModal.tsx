import React, { useEffect, useRef } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import { Language } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, currentLanguage }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const isPt = currentLanguage === 'pt';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-2 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      onClick={(e) => {
        if (e.target === modalRef.current) onClose();
      }}
    >
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col overflow-hidden border border-[#333] bg-[#121212] shadow-2xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2e2e2e] bg-[#121212] px-3 py-3 sm:px-5">
          <div className="min-w-0">
            <h2 id="resume-title" className="text-xs font-bold uppercase tracking-widest text-white sm:text-sm">
              {isPt ? 'Currículo — visualização em PDF' : 'Currículum — visualización en PDF'}
            </h2>
            <p className="mt-1 text-[11px] text-[#9ca3af] sm:text-xs">
              {isPt
                ? 'Use a rolagem e os controles do visualizador para navegar pelas páginas e ajustar o zoom.'
                : 'Utiliza el desplazamiento y los controles del visor para navegar por las páginas y ajustar el zoom.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="/Curriculo_Priscilla_Cahino.pdf"
              download="Curriculo_Priscilla_Cahino.pdf"
              className="inline-flex items-center gap-1.5 bg-[#FF6B35] px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#121212] transition-colors hover:bg-[#ff7f4d]"
            >
              <Download className="h-4 w-4" />
              <span>{isPt ? 'Baixar PDF' : 'Descargar PDF'}</span>
            </a>

            <a
              href="/Curriculo_Priscilla_Cahino.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-[#444] bg-[#1d1d1d] px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:border-[#FF6B35]"
            >
              <ExternalLink className="h-4 w-4 text-[#FF6B35]" />
              <span>{isPt ? 'Abrir em nova aba' : 'Abrir en nueva pestaña'}</span>
            </a>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 border border-[#444] bg-[#252525] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#333]"
              aria-label={isPt ? 'Fechar visualização do currículo' : 'Cerrar visualización del currículum'}
            >
              <X className="h-4 w-4 text-[#FF6B35]" />
              <span>{isPt ? 'Fechar' : 'Cerrar'}</span>
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 bg-[#2a2a2a]">
          <iframe
            src="/Curriculo_Priscilla_Cahino.pdf#view=FitH"
            title={isPt ? 'Currículo de Priscilla Cahino em PDF' : 'Currículum de Priscilla Cahino en PDF'}
            className="h-full min-h-[70vh] w-full border-0"
          />
        </div>
      </div>
    </div>
  );
};
