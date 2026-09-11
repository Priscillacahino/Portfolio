import React, { useState } from 'react';
import { 
  Smartphone, 
  Layers, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Copy, 
  Calendar, 
  Clock, 
  Search, 
  Bell, 
  Heart, 
  User, 
  Home as HomeIcon, 
  ExternalLink,
  ShieldCheck,
  RotateCcw,
  Sparkles
} from 'lucide-react';

interface PetzoneWireframeViewerProps {
  onClose?: () => void;
  isModal?: boolean;
}

type ScreenId = 'home' | 'profile' | 'schedule' | 'confirmed';

export const PetzoneWireframeViewer: React.FC<PetzoneWireframeViewerProps> = ({ onClose, isModal = false }) => {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');
  const [selectedService, setSelectedService] = useState<'consulta' | 'vacina' | 'banho'>('consulta');
  const [selectedDate, setSelectedDate] = useState<string>('Amanhã, 14h30');
  const [selectedVet, setSelectedVet] = useState<string>('Dra. Camila Ramos');
  const [copiedSpecs, setCopiedSpecs] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'simulator' | 'figmaGuide'>('simulator');

  const figmaSpecsText = `ESTRUTURA DE WIREFRAME PETZONA (FIGMA GUIDELINE)

1. SETUP DO ARQUIVO FIGMA:
- Frame Size recomendado: Mobile 360 x 800 px (Android) ou 393 x 852 px (iPhone 15)
- Grid: Layout Grid de 4 Colunas | Margens: 16px | Gutter: 12px
- Tipografia: Inter ou Roboto (Semibold para títulos 18-22px, Medium 14px, Regular 12-14px)
- Paleta Grayscale:
  * Background: #F8F9FA
  * Cards / Containers: #FFFFFF
  * Bordas & Linhas: #E5E7EB
  * Textos Secundários / Placeholders: #6B7280
  * Títulos & Ações: #111827
  * Cor de Destaque / Ação (CTA): #FF6B35 ou #2563EB

2. TELAS & FLUXO (3 FRAMES PRINCIPAIS):

FRAME 1: HOME / FEED PET (360x800)
- Header: Logo "PetZona", avatar do usuário e ícone de notificações (Bell).
- Search Bar: Campo com ícone de lupa: "Buscar clínica, vacina ou serviço..."
- Categorias Rápidas (Horizontal Scroll):
  * Pills: [Todos] [Consultas] [Vacinas] [Banho & Tosa] [Exames]
- Card do Pet Principal ("Thor"):
  * Foto/Placeholder do Golden Retriever
  * Nome: "Thor" | Raça: "Golden Retriever • 3 anos"
  * Alerta preventivo: "Vacina V10 recomendada em 15 dias"
  * Botão Primário: "Agendar Cuidado" -> Conexão Figma: Navigate to Frame 3
- Próximos Agendamentos / Clínicas Próximas:
  * Cards de clínicas com nota (ex: 4.9 ★) e distância (1.2 km).
- Bottom Navigation Bar (Fixed 64px):
  * Ícones: Home, Meus Pets, Agenda, Perfil

FRAME 2: PERFIL DO PET & SAÚDE (360x800)
- Header: Botão Voltar (ArrowLeft), Título "Perfil do Pet", Botão Editar.
- Hero Avatar: Foto circular do Pet, Nome "Thor", Tag "Golden Retriever • 31 kg".
- Resumo de Métricas (3 Colunas):
  * Idade: 3 anos | Peso: 31 kg | Microchip: #8921
- Histórico de Saúde Recente:
  * 10/01/2025: Vacina Antirrábica (Dra. Camila) - Concluída
  * 14/11/2024: Consulta de Rotina (Dr. Marcos) - Sem alterações
- Card de Ação Rápida:
  * Botão: "Agendar Nova Consulta ou Vacina" -> Conexão: Navigate to Frame 3
  * Botão Secundário: "Carteira Digital de Vacinação"

FRAME 3: AGENDAMENTO DE SERVIÇO (360x800)
- Header: Botão Voltar (volta para tela anterior), Título "Agendar Atendimento".
- Passo 1: Seleção de Serviço:
  * Opções tipo Radio/Card: [Consulta Veterinária Geral], [Aplicação de Vacina], [Banho & Tosa]
- Passo 2: Seleção de Veterinário / Unidade:
  * Cards com foto do médico veterinário, especialidade e avaliação.
- Passo 3: Data e Horário:
  * Seletor de dias da semana (Seg, Ter, Qua, Qui, Sex, Sáb)
  * Pills de horários disponíveis: [09:00] [11:30] [14:30] [16:00]
- Resumo do Agendamento (Floating Bottom Bar):
  * Preço estimado e botão: "Confirmar Agendamento" -> Conexão: Open Overlay (Modal Sucesso)

3. PROTOTIPAÇÃO NO FIGMA (INTERACTIONS):
- On Click em "Agendar Cuidado" (Frame 1) -> Navigate to Frame 3 (Smart Animate, 300ms Ease Out)
- On Click no Card do Thor (Frame 1) -> Navigate to Frame 2 (Push Left, 250ms)
- On Click em "Agendar" (Frame 2) -> Navigate to Frame 3 (Slide Left, 250ms)
- On Click em "Confirmar Agendamento" (Frame 3) -> Open Overlay ou Navigate to Confirmation Screen.`;

  const copyFigmaSpecs = () => {
    navigator.clipboard.writeText(figmaSpecsText);
    setCopiedSpecs(true);
    setTimeout(() => setCopiedSpecs(false), 2500);
  };

  return (
    <div className="w-full bg-[#141414] border border-[#333] text-white overflow-hidden shadow-2xl">
      {/* Header do Wireframe Viewer */}
      <div className="p-4 sm:p-5 bg-[#181818] border-b border-[#2e2e2e] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-[#222] border border-[#333] text-[#FF6B35]">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base font-semibold text-white">
                Wireframe Interativo: PetZona Mobile
              </h3>
              <span className="px-2 py-0.5 bg-[#FF6B35]/20 text-[#FF6B35] text-[10px] font-mono uppercase tracking-wider border border-[#FF6B35]/40">
                Low-Fidelity Figma Flow
              </span>
            </div>
            <p className="text-xs text-[#aaa] font-light">
              Simulação de baixa fidelidade para teste de usabilidade da jornada de agendamento pet.
            </p>
          </div>
        </div>

        {/* Alternador entre Simulador e Especificações Figma */}
        <div className="flex items-center gap-2">
          <div className="inline-flex p-1 bg-[#121212] border border-[#333]">
            <button
              onClick={() => setActiveTab('simulator')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'simulator' 
                  ? 'bg-[#FF6B35] text-[#121212]' 
                  : 'text-[#aaa] hover:text-white'
              }`}
            >
              Simulador Interativo
            </button>
            <button
              onClick={() => setActiveTab('figmaGuide')}
              className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === 'figmaGuide' 
                  ? 'bg-[#FF6B35] text-[#121212]' 
                  : 'text-[#aaa] hover:text-white'
              }`}
            >
              Guia para Figma
            </button>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 text-[#aaa] hover:text-white hover:bg-[#252525] border border-[#333] transition-colors cursor-pointer"
              title="Fechar visualizador"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Conteúdo Principal */}
      {activeTab === 'simulator' ? (
        <div className="p-4 sm:p-8 bg-[#101010] flex flex-col lg:flex-row items-center justify-center gap-8 min-h-[640px]">
          {/* Navegação entre telas do Wireframe */}
          <div className="w-full lg:w-72 space-y-4 order-2 lg:order-1">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-[0.2em] font-mono text-[#FF6B35] font-semibold">
                Navegar Telas do Fluxo
              </span>
              <p className="text-xs text-[#999] font-light">
                Clique nas etapas abaixo ou interaja diretamente com a tela do smartphone:
              </p>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => setCurrentScreen('home')}
                className={`w-full text-left p-3 border transition-all cursor-pointer flex items-center justify-between ${
                  currentScreen === 'home'
                    ? 'border-[#FF6B35] bg-[#1a1a1a] text-white shadow-md'
                    : 'border-[#2a2a2a] bg-[#141414] text-[#aaa] hover:text-white hover:border-[#444]'
                }`}
              >
                <div>
                  <span className="text-xs font-mono text-[#FF6B35] block">01. Tela Inicial</span>
                  <span className="text-sm font-semibold">Home & Feed do Pet</span>
                </div>
                {currentScreen === 'home' && <ArrowRight className="w-4 h-4 text-[#FF6B35]" />}
              </button>

              <button
                onClick={() => setCurrentScreen('profile')}
                className={`w-full text-left p-3 border transition-all cursor-pointer flex items-center justify-between ${
                  currentScreen === 'profile'
                    ? 'border-[#FF6B35] bg-[#1a1a1a] text-white shadow-md'
                    : 'border-[#2a2a2a] bg-[#141414] text-[#aaa] hover:text-white hover:border-[#444]'
                }`}
              >
                <div>
                  <span className="text-xs font-mono text-[#FF6B35] block">02. Prontuário</span>
                  <span className="text-sm font-semibold">Perfil de Saúde do Pet</span>
                </div>
                {currentScreen === 'profile' && <ArrowRight className="w-4 h-4 text-[#FF6B35]" />}
              </button>

              <button
                onClick={() => setCurrentScreen('schedule')}
                className={`w-full text-left p-3 border transition-all cursor-pointer flex items-center justify-between ${
                  currentScreen === 'schedule' || currentScreen === 'confirmed'
                    ? 'border-[#FF6B35] bg-[#1a1a1a] text-white shadow-md'
                    : 'border-[#2a2a2a] bg-[#141414] text-[#aaa] hover:text-white hover:border-[#444]'
                }`}
              >
                <div>
                  <span className="text-xs font-mono text-[#FF6B35] block">03. Agendamento</span>
                  <span className="text-sm font-semibold">Serviço, Médico & Horário</span>
                </div>
                {(currentScreen === 'schedule' || currentScreen === 'confirmed') && (
                  <ArrowRight className="w-4 h-4 text-[#FF6B35]" />
                )}
              </button>
            </div>

            {/* Painel com Métricas de UX */}
            <div className="p-3.5 border border-[#2e2e2e] bg-[#141414] space-y-2 text-xs">
              <div className="flex items-center gap-1.5 text-[#FF6B35] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Heurísticas Aplicadas</span>
              </div>
              <ul className="text-[#aaa] space-y-1 font-light text-[11px] leading-relaxed">
                <li>• <strong>Visibilidade de Status:</strong> Alerta de vacina pendente visível logo no primeiro scroll.</li>
                <li>• <strong>Consistência:</strong> Menos cliques até o agendamento (3 etapas diretas).</li>
                <li>• <strong>Prevenção de Erros:</strong> Resumo antes da confirmação final.</li>
              </ul>
            </div>

            <button
              onClick={() => {
                setCurrentScreen('home');
                setSelectedService('consulta');
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 border border-[#333] hover:border-[#FF6B35] bg-[#181818] text-xs font-mono text-[#ccc] hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span>Reiniciar Simulação</span>
            </button>
          </div>

          {/* Smartphone Frame (360x720 visual proporcional) */}
          <div className="w-[340px] sm:w-[360px] h-[680px] bg-[#0c0c0c] border-[6px] border-[#2a2a2a] rounded-[36px] shadow-2xl overflow-hidden relative flex flex-col order-1 lg:order-2">
            {/* Top Notch & Speaker */}
            <div className="w-full h-7 bg-[#141414] flex items-center justify-between px-6 shrink-0 select-none border-b border-[#222]">
              <span className="text-[11px] font-mono text-[#888]">9:41</span>
              <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#222] mr-2" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]" />
              </div>
              <div className="flex items-center gap-1 text-[10px] text-[#888]">
                <span>5G</span>
                <span className="w-3.5 h-2 border border-[#888] rounded-xs inline-block" />
              </div>
            </div>

            {/* Tela Interativa do Smartphone */}
            <div className="flex-1 bg-[#1a1a1a] overflow-y-auto flex flex-col justify-between text-neutral-200 select-none relative">
              
              {/* SCREEN 1: HOME */}
              {currentScreen === 'home' && (
                <div className="p-4 space-y-4 pb-20 animate-fadeIn">
                  {/* Header App */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#FF6B35] flex items-center justify-center font-bold text-black text-xs">
                        PZ
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white tracking-wide block">PetZona</span>
                        <span className="text-[10px] text-neutral-400 font-mono">Olá, Priscilla 👋</span>
                      </div>
                    </div>
                    <button className="p-2 bg-[#252525] border border-[#333] rounded-full text-neutral-300">
                      <Bell className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Search Bar Wireframe */}
                  <div className="flex items-center gap-2 p-2.5 bg-[#252525] border border-[#3a3a3a] rounded-xl text-xs text-neutral-400">
                    <Search className="w-3.5 h-3.5 text-[#FF6B35]" />
                    <span>Buscar clínicas, vacinas e cuidados...</span>
                  </div>

                  {/* Categorias Rápidas */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-neutral-400 font-semibold">
                      Serviços Rápidos
                    </span>
                    <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                      {['Todos', 'Consultas', 'Vacinas', 'Banho & Tosa', 'Exames'].map((cat, idx) => (
                        <span
                          key={idx}
                          className={`px-2.5 py-1 text-[11px] rounded-full shrink-0 border ${
                            idx === 0 
                              ? 'bg-[#FF6B35] text-black font-bold border-[#FF6B35]' 
                              : 'bg-[#222] text-neutral-300 border-[#333]'
                          }`}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card do Pet Ativo */}
                  <div className="p-3.5 bg-[#222] border-2 border-[#FF6B35] rounded-2xl space-y-3 relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-12 h-12 rounded-xl bg-[#2e2e2e] border border-[#444] flex items-center justify-center text-xl">
                          🐕
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-bold text-white">Thor</span>
                            <span className="px-1.5 py-0.2 bg-[#333] text-[9px] font-mono text-[#FF6B35] rounded">Ativo</span>
                          </div>
                          <span className="text-[11px] text-neutral-400 block">Golden Retriever • 3 anos</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => setCurrentScreen('profile')}
                        className="text-[11px] text-[#FF6B35] font-semibold hover:underline cursor-pointer"
                      >
                        Ver Perfil →
                      </button>
                    </div>

                    {/* Alerta Preventivo */}
                    <div className="p-2 bg-[#2a201a] border border-[#FF6B35]/40 rounded-lg flex items-center gap-2 text-[11px] text-[#ffb899]">
                      <Clock className="w-3.5 h-3.5 text-[#FF6B35] shrink-0" />
                      <span>Vacina V10 vence em 15 dias. Agende com antecedência.</span>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedService('vacina');
                        setCurrentScreen('schedule');
                      }}
                      className="w-full py-2.5 bg-[#FF6B35] hover:bg-[#ff7f4d] text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Agendar Cuidado Agora</span>
                    </button>
                  </div>

                  {/* Seção Próximas Unidades Recomendadas */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-neutral-400 font-semibold">
                      Clínicas Credenciadas Próximas
                    </span>
                    <div className="p-3 bg-[#222] border border-[#333] rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-[#2b2b2b] flex items-center justify-center text-base">
                          🏥
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-white block">PetCare Tambaú</span>
                          <span className="text-[10px] text-neutral-400">1.2 km • Aberto até 20h</span>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-[#FF6B35]">★ 4.9</span>
                    </div>
                  </div>
                </div>
              )}

              {/* SCREEN 2: PROFILE DO PET */}
              {currentScreen === 'profile' && (
                <div className="p-4 space-y-4 pb-20 animate-fadeIn">
                  {/* Header */}
                  <div className="flex items-center justify-between pt-1">
                    <button 
                      onClick={() => setCurrentScreen('home')}
                      className="p-1.5 bg-[#252525] border border-[#333] rounded-full text-neutral-300 hover:text-white cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                      Prontuário do Pet
                    </span>
                    <div className="w-7" />
                  </div>

                  {/* Pet Hero */}
                  <div className="p-4 bg-[#222] border border-[#333] rounded-2xl flex flex-col items-center text-center space-y-2">
                    <div className="w-16 h-16 rounded-full bg-[#2e2e2e] border-2 border-[#FF6B35] flex items-center justify-center text-3xl shadow-inner">
                      🐕
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Thor</h4>
                      <span className="text-xs text-neutral-400 font-light">Golden Retriever • Macho</span>
                    </div>

                    {/* Stats 3 columns */}
                    <div className="grid grid-cols-3 gap-2 w-full pt-2 border-t border-[#2d2d2d] text-center">
                      <div className="p-1.5 bg-[#1a1a1a] rounded-lg">
                        <span className="text-[10px] text-neutral-400 block font-mono">Idade</span>
                        <span className="text-xs font-bold text-white">3 anos</span>
                      </div>
                      <div className="p-1.5 bg-[#1a1a1a] rounded-lg">
                        <span className="text-[10px] text-neutral-400 block font-mono">Peso</span>
                        <span className="text-xs font-bold text-white">31 kg</span>
                      </div>
                      <div className="p-1.5 bg-[#1a1a1a] rounded-lg">
                        <span className="text-[10px] text-neutral-400 block font-mono">Chip</span>
                        <span className="text-xs font-bold text-white">#8921</span>
                      </div>
                    </div>
                  </div>

                  {/* Histórico Recente */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-neutral-400 font-semibold">
                      Histórico Recente de Atendimentos
                    </span>

                    <div className="space-y-2">
                      <div className="p-2.5 bg-[#222] border-l-3 border-emerald-500 border-y border-r border-[#333] rounded-lg text-xs space-y-0.5">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-white">Vacina Antirrábica</span>
                          <span className="text-[10px] font-mono text-neutral-400">10/01/2025</span>
                        </div>
                        <p className="text-[11px] text-neutral-400 font-light">Dra. Camila Ramos • Dose regular anual</p>
                      </div>

                      <div className="p-2.5 bg-[#222] border-l-3 border-[#FF6B35] border-y border-r border-[#333] rounded-lg text-xs space-y-0.5">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-white">Consulta Preventiva</span>
                          <span className="text-[10px] font-mono text-neutral-400">14/11/2024</span>
                        </div>
                        <p className="text-[11px] text-neutral-400 font-light">Dr. Marcos Silva • Exames de rotina OK</p>
                      </div>
                    </div>
                  </div>

                  {/* Ações */}
                  <div className="space-y-2 pt-1">
                    <button
                      onClick={() => setCurrentScreen('schedule')}
                      className="w-full py-2.5 bg-[#FF6B35] hover:bg-[#ff7f4d] text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Agendar Novo Cuidado para Thor</span>
                    </button>

                    <button
                      onClick={() => alert('Carteira Digital de Vacinação: 4 vacinas registradas com selo veterinário.')}
                      className="w-full py-2 bg-[#252525] hover:bg-[#333] border border-[#3a3a3a] text-neutral-200 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                    >
                      Ver Carteira de Vacinação Digital
                    </button>
                  </div>
                </div>
              )}

              {/* SCREEN 3: AGENDAMENTO */}
              {currentScreen === 'schedule' && (
                <div className="p-4 space-y-3.5 pb-20 animate-fadeIn">
                  {/* Header */}
                  <div className="flex items-center justify-between pt-1">
                    <button 
                      onClick={() => setCurrentScreen('profile')}
                      className="p-1.5 bg-[#252525] border border-[#333] rounded-full text-neutral-300 hover:text-white cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                      Novo Agendamento
                    </span>
                    <div className="w-7" />
                  </div>

                  {/* Passo 1: Tipo de Serviço */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-neutral-400 font-semibold">
                      1. Escolha o Serviço
                    </span>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[
                        { id: 'consulta', label: 'Consulta', icon: '🩺' },
                        { id: 'vacina', label: 'Vacina', icon: '💉' },
                        { id: 'banho', label: 'Banho', icon: '🛁' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setSelectedService(item.id as any)}
                          className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                            selectedService === item.id
                              ? 'bg-[#2a201a] border-[#FF6B35] text-white'
                              : 'bg-[#222] border-[#333] text-neutral-400 hover:text-white'
                          }`}
                        >
                          <span className="text-base block">{item.icon}</span>
                          <span className="text-[11px] font-semibold">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Passo 2: Profissional */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-neutral-400 font-semibold">
                      2. Veterinário(a) Responsável
                    </span>
                    <div className="space-y-1.5">
                      {[
                        { name: 'Dra. Camila Ramos', role: 'Clínica Geral & Vacinas', rating: '★ 4.9' },
                        { name: 'Dr. André Fonseca', role: 'Dermatologia & Cirurgia', rating: '★ 4.8' },
                      ].map((vet, idx) => (
                        <div
                          key={idx}
                          onClick={() => setSelectedVet(vet.name)}
                          className={`p-2 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                            selectedVet === vet.name
                              ? 'bg-[#2a201a] border-[#FF6B35]'
                              : 'bg-[#222] border-[#333]'
                          }`}
                        >
                          <div>
                            <span className="text-xs font-semibold text-white block">{vet.name}</span>
                            <span className="text-[10px] text-neutral-400">{vet.role}</span>
                          </div>
                          <span className="text-[11px] font-mono text-[#FF6B35] font-bold">{vet.rating}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Passo 3: Horários */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase tracking-wider font-mono text-neutral-400 font-semibold">
                      3. Horários Disponíveis
                    </span>
                    <div className="grid grid-cols-3 gap-1.5">
                      {['Hoje, 16h30', 'Amanhã, 10h00', 'Amanhã, 14h30'].map((slot, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedDate(slot)}
                          className={`p-2 rounded-lg border text-center text-[10px] font-mono transition-all cursor-pointer ${
                            selectedDate === slot
                              ? 'bg-[#FF6B35] text-black font-bold border-[#FF6B35]'
                              : 'bg-[#222] border-[#333] text-neutral-300 hover:text-white'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Resumo & Botão Confirmar */}
                  <div className="p-3 bg-[#151515] border border-[#333] rounded-xl space-y-2">
                    <div className="flex justify-between text-xs text-neutral-300">
                      <span>Paciente: <strong>Thor</strong></span>
                      <span className="text-[#FF6B35] font-mono font-semibold">R$ 120,00</span>
                    </div>

                    <button
                      onClick={() => setCurrentScreen('confirmed')}
                      className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-md"
                    >
                      Confirmar Agendamento
                    </button>
                  </div>
                </div>
              )}

              {/* SCREEN 4: CONFIRMADO */}
              {currentScreen === 'confirmed' && (
                <div className="p-6 flex flex-col items-center justify-center text-center space-y-4 my-auto pb-16 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400">
                    <Check className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white">Agendamento Concluído!</h4>
                    <p className="text-xs text-neutral-400 font-light max-w-xs">
                      O atendimento de Thor foi confirmado para <strong>{selectedDate}</strong> com <strong>{selectedVet}</strong>.
                    </p>
                  </div>

                  <div className="p-3 bg-[#222] border border-[#333] rounded-xl w-full text-xs text-left font-mono space-y-1 text-neutral-300">
                    <p>• Paciente: Thor (Golden Retriever)</p>
                    <p>• Procedimento: {selectedService === 'consulta' ? 'Consulta Veterinária' : selectedService === 'vacina' ? 'Aplicação de Vacina' : 'Banho & Tosa'}</p>
                    <p>• Lembrete por SMS/WhatsApp ativado</p>
                  </div>

                  <button
                    onClick={() => setCurrentScreen('home')}
                    className="w-full py-2.5 bg-[#FF6B35] text-black font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer"
                  >
                    Voltar ao Início
                  </button>
                </div>
              )}

              {/* Bottom Navigation Bar */}
              <div className="absolute bottom-0 inset-x-0 h-14 bg-[#141414] border-t border-[#2d2d2d] flex items-center justify-around px-2 text-neutral-400 z-10">
                <button
                  onClick={() => setCurrentScreen('home')}
                  className={`flex flex-col items-center gap-0.5 text-[10px] cursor-pointer ${
                    currentScreen === 'home' ? 'text-[#FF6B35]' : 'hover:text-white'
                  }`}
                >
                  <HomeIcon className="w-4 h-4" />
                  <span>Home</span>
                </button>

                <button
                  onClick={() => setCurrentScreen('profile')}
                  className={`flex flex-col items-center gap-0.5 text-[10px] cursor-pointer ${
                    currentScreen === 'profile' ? 'text-[#FF6B35]' : 'hover:text-white'
                  }`}
                >
                  <Heart className="w-4 h-4" />
                  <span>Pets</span>
                </button>

                <button
                  onClick={() => setCurrentScreen('schedule')}
                  className={`flex flex-col items-center gap-0.5 text-[10px] cursor-pointer ${
                    currentScreen === 'schedule' ? 'text-[#FF6B35]' : 'hover:text-white'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agenda</span>
                </button>

                <button
                  onClick={() => alert('Área do Tutor / Configurações')}
                  className="flex flex-col items-center gap-0.5 text-[10px] hover:text-white cursor-pointer"
                >
                  <User className="w-4 h-4" />
                  <span>Perfil</span>
                </button>
              </div>

            </div>

            {/* Smartphone Bottom Home Indicator bar */}
            <div className="w-full h-3 bg-[#141414] flex justify-center items-center pb-1">
              <div className="w-28 h-1 bg-[#444] rounded-full" />
            </div>
          </div>
        </div>
      ) : (
        /* ABA GUIA DE ESPECIFICAÇÃO PARA O FIGMA */
        <div className="p-6 sm:p-8 bg-[#101010] space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#2a2a2a] pb-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#FF6B35] font-bold">
                Design Hand-off & Diretrizes Figma
              </span>
              <h4 className="text-xl font-serif-artistic italic text-white mt-1">
                Especificação Técnica para Montagem no Figma
              </h4>
              <p className="text-xs text-[#aaa] font-light mt-1">
                Todas as medidas, grids, componentes e conexões de prototipagem para reproduzir e rodar no Figma.
              </p>
            </div>

            <button
              onClick={copyFigmaSpecs}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#FF6B35] hover:bg-[#ff7f4d] text-black font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shrink-0"
            >
              {copiedSpecs ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copiado com Sucesso!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar Diretrizes Completas</span>
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-[#2a2a2a] bg-[#161616] space-y-2">
              <span className="text-xs font-mono text-[#FF6B35] uppercase tracking-wider font-semibold">
                📐 1. Canvas & Grid
              </span>
              <ul className="text-xs text-[#ccc] space-y-1 font-light leading-relaxed">
                <li>• <strong>Frame Base:</strong> 360 x 800 px (Android) ou 393 x 852 px (iPhone)</li>
                <li>• <strong>Layout Grid:</strong> 4 Colunas, Margem 16px, Gutter 12px</li>
                <li>• <strong>Spacing Scale:</strong> 4px, 8px, 12px, 16px, 24px</li>
              </ul>
            </div>

            <div className="p-4 border border-[#2a2a2a] bg-[#161616] space-y-2">
              <span className="text-xs font-mono text-[#FF6B35] uppercase tracking-wider font-semibold">
                🎨 2. Paleta Grayscale
              </span>
              <ul className="text-xs text-[#ccc] space-y-1 font-light leading-relaxed">
                <li>• <strong>Background:</strong> #F8F9FA ou Dark #141414</li>
                <li>• <strong>Containers:</strong> #FFFFFF ou Dark #222222</li>
                <li>• <strong>Bordas:</strong> #E5E7EB ou Dark #333333</li>
                <li>• <strong>Destaque / CTA:</strong> #FF6B35</li>
              </ul>
            </div>

            <div className="p-4 border border-[#2a2a2a] bg-[#161616] space-y-2">
              <span className="text-xs font-mono text-[#FF6B35] uppercase tracking-wider font-semibold">
                ⚡ 3. Conexões de Protótipo
              </span>
              <ul className="text-xs text-[#ccc] space-y-1 font-light leading-relaxed">
                <li>• <strong>Card Pet → Perfil:</strong> On click → Navigate to (Push Left, 250ms)</li>
                <li>• <strong>Agendar → Formulário:</strong> On click → Navigate to (Slide Left)</li>
                <li>• <strong>Confirmar → Sucesso:</strong> On click → Open Overlay ou Navigate</li>
              </ul>
            </div>
          </div>

          {/* Bloco de Código de Especificação Formatada */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#888] uppercase tracking-wider">
              Documento de Especificação Pronta:
            </span>
            <pre className="p-4 bg-[#0a0a0a] border border-[#262626] text-xs font-mono text-[#bbb] overflow-x-auto leading-relaxed max-h-72">
              {figmaSpecsText}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};
