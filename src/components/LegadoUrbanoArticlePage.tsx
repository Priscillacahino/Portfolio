import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowUp,
  BookOpen,
  Briefcase,
  Building2,
  Check,
  ExternalLink,
  FileText,
  Home,
  Info,
  Landmark,
  Leaf,
  Mail,
  MapPin,
  Share2,
  ShieldCheck,
  Sparkles,
  Sun,
  TrendingUp,
  Users
} from 'lucide-react';

interface LegadoUrbanoArticlePageProps {
  onBackToHome: () => void;
  onOpenResume?: () => void;
}

const sourceLinks = [
  {
    label: 'Prefeitura de João Pessoa — Residencial Antônio Júnior / antigo IPASE (2026)',
    href: 'https://www.joaopessoa.pb.gov.br/noticias/secretarias-e-orgaos/semhab/equipe-da-prefeitura-e-da-uniao-por-moradia-visitam-obra-do-residencial-antonio-junior/'
  },
  {
    label: 'Prefeitura de João Pessoa — Villa Sanhauá',
    href: 'https://www.joaopessoa.pb.gov.br/noticias/villa-sanhaua-da-nova-vida-ao-centro-historico-com-moradias-dignas-e-empreendimentos-culturais/'
  },
  {
    label: 'Prefeitura de João Pessoa — Programa Viva o Centro',
    href: 'https://www.joaopessoa.pb.gov.br/servico/viva-o-centro/'
  },
  {
    label: 'Iphan — Estratégia Centro Vivo (2026)',
    href: 'https://www.gov.br/iphan/pt-br/acesso-a-informacao/acoes-e-programas/programas/programa-centro-vivo'
  },
  {
    label: 'Prefeitura de João Pessoa — Qualifica João Pessoa (2026)',
    href: 'https://www.joaopessoa.pb.gov.br/noticias/qualifica-joao-pessoa-ultrapassa-81-mil-inscritos-e-fortalece-capacitacao-profissional-gratuita-na-capital/'
  },
  {
    label: 'Lei nº 14.300/2022 — Marco Legal da Geração Distribuída',
    href: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14300.htm'
  }
];

const finopsMetrics = [
  { label: 'CAPEX', value: 'R$ 13,9 mi', note: 'investimento acadêmico-base' },
  { label: 'OPEX anual', value: 'R$ 2,0 mi', note: 'operação acadêmica-base' },
  { label: 'TCO 5 anos', value: 'R$ 23,9 mi', note: 'cenário-base' },
  { label: 'TCO 20 anos', value: 'R$ 53,9 mi', note: 'cenário-base' }
];

const comparisonRows = [
  ['Retrofit e moradia', 'Já existem projetos reais', 'Critérios para decidir quais imóveis vale a pena recuperar'],
  ['Comércio e serviços', 'Villa Sanhauá e Viva o Centro já integram atividade econômica', 'Acompanhar o efeito territorial depois da ocupação'],
  ['Qualificação e emprego', 'Município já possui Sine-JP e programas de capacitação', 'Conectar a família à rede existente por um Plano Individual de Autonomia'],
  ['Patrimônio', 'Restauro e preservação fazem parte das iniciativas reais', 'Laudo Digital e manutenção preventiva no pós-ocupação'],
  ['Turismo e cultura', 'Já fazem parte da estratégia de revitalização', 'Tratar como impacto econômico indireto, sem depender da receita turística'],
  ['Energia', 'Não é o eixo central dos projetos comparados', 'Eficiência + geração solar remota + medição da economia real'],
  ['Gestão financeira', 'Projetos possuem seus próprios orçamentos e controles', 'CAPEX + OPEX + TCO + cenários + stress tests em um ciclo de decisão']
];

const dictionary = [
  ['CAPEX', 'Investimento necessário para implantar o projeto. Em linguagem simples: quanto custa colocar de pé.'],
  ['OPEX', 'Custo necessário para manter a operação. Em linguagem simples: quanto custa continuar funcionando.'],
  ['TCO', 'Total Cost of Ownership: custo total ao longo de um período, somando implantação, operação e manutenção.'],
  ['FinOps', 'Disciplina de gestão financeira orientada à visibilidade dos custos, responsabilidade e decisão baseada em valor.'],
  ['Retrofit', 'Adaptação e modernização de um edifício existente para novo uso ou melhor desempenho.'],
  ['Benchmark', 'Referência usada para comparação e aprendizado; não significa copiar custos ou soluções.'],
  ['Premissa', 'Condição assumida para permitir uma simulação. Não é fato comprovado.'],
  ['Hipótese', 'Resultado ou relação que ainda precisa ser testado com evidências.'],
  ['Stress test', 'Teste de estresse que altera premissas para verificar como o modelo reage a condições adversas.'],
  ['KPI', 'Indicador-chave usado para acompanhar o desempenho de um objetivo.'],
  ['Saving', 'Economia financeira efetivamente comprovada.'],
  ['PIA', 'Plano Individual de Autonomia: roteiro de acompanhamento de qualificação, renda, emprego, educação e outras necessidades da família.'],
  ['LGPD', 'Lei Geral de Proteção de Dados, aplicada ao tratamento de informações pessoais.'],
  ['RBAC', 'Controle de acesso baseado em função: cada perfil vê apenas os dados necessários ao seu trabalho.'],
  ['Ciclo de vida', 'Acompanhamento desde a implantação até operação, manutenção, avaliação e revisão das decisões.']
];

export const LegadoUrbanoArticlePage: React.FC<LegadoUrbanoArticlePageProps> = ({
  onBackToHome,
  onOpenResume
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

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
      <div className="border-b border-[#2a2a2a] bg-[#161616]/90 sticky top-16 sm:top-20 z-30 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ccc] hover:text-[#FF6B35] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Portfólio</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider border border-[#333] hover:border-[#555] bg-[#1e1e1e] text-[#ccc] hover:text-white transition-colors cursor-pointer"
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 space-y-12">
        <header className="space-y-6 border-b border-[#2a2a2a] pb-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF6B35] font-semibold bg-[#1e1e1e] px-2.5 py-1 border border-[#333]">
              Artigos e Estudos
            </span>
            <span className="text-xs font-mono tracking-wider text-[#a8d8c5] bg-[#17221e] px-2.5 py-1 border border-[#294238]">
              Estudo de caso acadêmico • 2026
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-artistic italic text-white tracking-tight leading-tight">
              Legado Urbano JP
            </h1>
            <p className="text-xl sm:text-2xl text-[#d1d5db] font-light leading-relaxed">
              Patrimônio, moradia, autonomia e sustentabilidade ao longo do tempo.
            </p>
          </div>

          <p className="max-w-4xl text-sm sm:text-base text-[#bbb] leading-relaxed">
            Um estudo de caso sobre como iniciativas de recuperação de imóveis históricos para moradia podem ser analisadas também depois da entrega da obra, considerando autonomia das famílias, manutenção do patrimônio, atividade econômica do território, energia, dados e sustentabilidade financeira.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {['Análise de Negócios', 'Processos', 'FinOps', 'Dados', 'Riscos', 'Sustentabilidade', 'João Pessoa'].map(tag => (
              <span key={tag} className="text-[11px] font-mono text-[#aaa] bg-[#1a1a1a] px-2.5 py-0.5 border border-[#2a2a2a]">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <section className="p-6 sm:p-7 bg-[#171717] border-l-4 border-l-[#FF6B35] border border-[#2d2d2d] space-y-3">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#FF6B35]" />
            <h2 className="text-xs font-mono uppercase tracking-wider text-white font-bold">Sobre este estudo</h2>
          </div>
          <p className="text-sm text-[#ddd] font-light leading-relaxed">
            O Legado Urbano JP é um estudo de caso acadêmico e de portfólio. Não representa programa oficial, proposta aprovada pela Prefeitura de João Pessoa, projeto arquitetônico, parecer jurídico, orçamento executivo ou previsão de implantação. Informações sobre iniciativas reais são diferenciadas das premissas e hipóteses criadas para a análise.
          </p>
        </section>

        <section className="space-y-5">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF6B35]">Ponto de partida</span>
          <h2 className="text-2xl sm:text-3xl font-serif-artistic italic text-white">A ideia nasceu de um contraste, mas o projeto evoluiu com a pesquisa</h2>
          <div className="space-y-4 text-sm sm:text-base text-[#ccc] leading-relaxed">
            <p>
              Sempre me incomodou observar imóveis antigos e fachadas históricas se deteriorando no Centro de João Pessoa enquanto, no mesmo território, pessoas e famílias enfrentavam vulnerabilidade habitacional.
            </p>
            <p>
              Durante a pandemia, participei de uma ação social de distribuição de colchões e lençóis para pessoas que estavam dormindo nas ruas. Em uma das conversas, ouvi o relato de uma família que havia perdido o emprego e chegado a uma situação em que já não conseguia manter simultaneamente despesas de moradia e alimentação. Esse relato individual não representa todas as causas da situação de rua; ele explica apenas o ponto de origem da minha inquietação.
            </p>
            <p>
              A primeira hipótese era intuitiva: aproximar recuperação do patrimônio, moradia e reconstrução de renda. Mas a pesquisa mostrou que parte dessa lógica já existe em João Pessoa — e que o verdadeiro espaço para aprofundamento estava no <strong className="text-white">pós-entrega e no ciclo de vida</strong>.
            </p>
          </div>
        </section>

        <section className="space-y-6 border-t border-[#242424] pt-10">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF6B35]">Referências reais</span>
          <h2 className="text-2xl sm:text-3xl font-serif-artistic italic text-white">O que João Pessoa já faz</h2>
          <p className="text-sm sm:text-base text-[#ccc] leading-relaxed max-w-4xl">
            O Legado Urbano não parte da ideia de que é necessário inventar uma política do zero. Projetos e programas locais já combinam elementos de habitação, comércio, patrimônio, ocupação e revitalização. O estudo usa essas experiências como benchmarks para perguntar o que ainda precisa ser acompanhado ao longo do tempo.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#171717] border border-[#303030] p-5 space-y-3">
              <Building2 className="w-6 h-6 text-[#FF6B35]" />
              <h3 className="font-serif-artistic italic text-xl text-white">Residencial Antônio Júnior</h3>
              <p className="text-sm text-[#bbb] leading-relaxed">
                O retrofit do antigo IPASE prevê 50 apartamentos e 17 boxes comerciais. A obra também evidencia a incerteza técnica do retrofit, pois novos elementos estruturais podem exigir revisão de cálculos durante a execução.
              </p>
              <a href={sourceLinks[0].href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[#FF6B35] hover:underline">
                Fonte oficial <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="bg-[#171717] border border-[#303030] p-5 space-y-3">
              <Landmark className="w-6 h-6 text-[#a8d8c5]" />
              <h3 className="font-serif-artistic italic text-xl text-white">Villa Sanhauá</h3>
              <p className="text-sm text-[#bbb] leading-relaxed">
                Precedente local que reuniu 17 moradias e seis unidades comerciais/culturais, conectando habitação, comércio, serviço e recuperação do patrimônio histórico.
              </p>
              <a href={sourceLinks[1].href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[#FF6B35] hover:underline">
                Fonte oficial <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="bg-[#171717] border border-[#303030] p-5 space-y-3">
              <MapPin className="w-6 h-6 text-[#8fb6ff]" />
              <h3 className="font-serif-artistic italic text-xl text-white">Viva o Centro</h3>
              <p className="text-sm text-[#bbb] leading-relaxed">
                Programa municipal que estimula moradia, comércio e serviços no Centro, com instrumentos como incentivos fiscais, microcrédito, capacitação e intermediação de mão de obra.
              </p>
              <a href={sourceLinks[2].href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-[#FF6B35] hover:underline">
                Fonte oficial <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="p-5 bg-[#151b18] border border-[#294238] text-sm sm:text-base text-[#d5e6de] leading-relaxed">
            Em 2026, o Iphan também instituiu a <strong className="text-white">Estratégia Centro Vivo</strong>, que relaciona patrimônio cultural, ocupação qualificada, desenvolvimento urbano, habitação, turismo sustentável, inclusão social e desenvolvimento econômico local. Isso reforça que a integração entre esses temas já faz parte do debate público atual.
          </div>
        </section>

        <section className="space-y-6 border-t border-[#242424] pt-10">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF6B35]">Comparação</span>
          <h2 className="text-2xl sm:text-3xl font-serif-artistic italic text-white">Onde o Legado Urbano acrescenta uma camada de análise</h2>

          <div className="overflow-x-auto border border-[#303030]">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-[#1d1d1d] text-white">
                <tr>
                  <th className="p-4 font-mono text-xs uppercase tracking-wider">Dimensão</th>
                  <th className="p-4 font-mono text-xs uppercase tracking-wider">O que já existe</th>
                  <th className="p-4 font-mono text-xs uppercase tracking-wider text-[#FF6B35]">O que o estudo acrescenta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2b2b2b]">
                {comparisonRows.map(([dimension, existing, proposal]) => (
                  <tr key={dimension} className="bg-[#161616] align-top">
                    <td className="p-4 text-white font-medium">{dimension}</td>
                    <td className="p-4 text-[#aaa]">{existing}</td>
                    <td className="p-4 text-[#ddd]">{proposal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-5 sm:p-6 bg-[#181818] border-l-2 border-l-[#FF6B35] border border-[#303030]">
            <p className="font-serif-artistic italic text-lg sm:text-xl text-white leading-relaxed">
              “O diferencial do Legado Urbano não é somente recuperar um imóvel. É estudar como família, patrimônio, manutenção, energia, território e custos se comportam depois que a obra termina.”
            </p>
          </div>
        </section>

        <section className="space-y-6 border-t border-[#242424] pt-10">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF6B35]">Funcionamento</span>
          <h2 className="text-2xl sm:text-3xl font-serif-artistic italic text-white">Os ciclos do modelo</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Building2, title: 'Patrimônio', text: 'Identificar → avaliar → retrofit → ocupar → manter → preservar.' },
              { icon: Home, title: 'Moradia', text: 'Vulnerabilidade → estabilidade habitacional → acompanhamento.' },
              { icon: Briefcase, title: 'Autonomia', text: 'PIA → qualificação existente → trabalho/renda → revisão.' },
              { icon: TrendingUp, title: 'Território', text: 'Moradores → comércio → circulação → cultura/turismo → atividade econômica.' },
              { icon: Sun, title: 'Energia', text: 'Eficiência → geração solar → medição → redução de OPEX quando comprovada.' },
              { icon: ShieldCheck, title: 'Gestão', text: 'Dados → indicadores → riscos → FinOps → decisão → correção.' }
            ].map(item => (
              <div key={item.title} className="bg-[#171717] border border-[#303030] p-5 space-y-3">
                <item.icon className="w-5 h-5 text-[#FF6B35]" />
                <h3 className="text-white font-semibold">{item.title}</h3>
                <p className="text-sm text-[#aaa] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5 border-t border-[#242424] pt-10">
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-[#a8d8c5]" />
            <h2 className="text-2xl sm:text-3xl font-serif-artistic italic text-white">Moradia, trabalho e autonomia</h2>
          </div>
          <div className="space-y-4 text-sm sm:text-base text-[#ccc] leading-relaxed">
            <p>
              A versão inicial da ideia aproximava fortemente moradia e trabalho. A análise mostrou que essa conexão precisa existir, mas não como troca obrigatória. A moradia não é salário, e a perda de emprego não deve provocar perda automática da unidade.
            </p>
            <p>
              Ao mesmo tempo, estabilidade de longo prazo exige renda. Por isso o modelo mantém uma rota ativa de autonomia por meio de um <strong className="text-white">PIA — Plano Individual de Autonomia</strong>, identificando experiência, escolaridade, competências, barreiras e possibilidades de qualificação ou recolocação.
            </p>
            <p>
              O objetivo também é evitar criar outra estrutura pública de cursos quando já existem programas. O município já mantém iniciativas como <strong className="text-white">Qualifica João Pessoa</strong>, Sine-JP e ações de capacitação e intermediação de mão de obra. O Legado Urbano estudaria principalmente a conexão organizada entre a família e essa rede existente.
            </p>
          </div>

          <div className="grid sm:grid-cols-5 gap-2 text-center">
            {['Moradia', 'PIA', 'Curso / vaga existente', 'Trabalho ou renda', 'Autonomia progressiva'].map((step, idx) => (
              <div key={step} className="relative bg-[#171717] border border-[#303030] p-4 text-xs text-[#ddd]">
                <span className="block text-[#FF6B35] font-mono mb-1">{String(idx + 1).padStart(2, '0')}</span>
                {step}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5 border-t border-[#242424] pt-10">
          <div className="flex items-center gap-3">
            <Landmark className="w-6 h-6 text-[#FF6B35]" />
            <h2 className="text-2xl sm:text-3xl font-serif-artistic italic text-white">Turismo e comércio: renda indireta no território</h2>
          </div>
          <div className="space-y-4 text-sm sm:text-base text-[#ccc] leading-relaxed">
            <p>
              O turismo permanece importante no conceito, mas não como receita direta do programa. A lógica estudada é territorial: menos famílias vivendo sem alternativa habitacional, imóveis e fachadas preservados, ocupação cotidiana e comércio ativo podem contribuir para um Centro mais vivo e atrativo para moradores e visitantes.
            </p>
            <p>
              Quando visitantes permanecem mais tempo no território, o gasto acontece em restaurantes, cafés, lojas, artesanato, transporte, hospedagem, cultura, guias e outros serviços. Esse dinheiro não entra no caixa do Legado Urbano, mas pode movimentar empresas, trabalhadores e oportunidades locais.
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-[#171717] border border-[#303030]">
            <p className="text-xs font-mono uppercase tracking-widest text-[#FF6B35] mb-4">Ciclo econômico territorial</p>
            <p className="text-sm sm:text-base text-white leading-8">
              imóvel recuperado <span className="text-[#666]">→</span> ocupação permanente <span className="text-[#666]">→</span> comércio e serviços <span className="text-[#666]">→</span> patrimônio cuidado <span className="text-[#666]">→</span> cultura e turismo <span className="text-[#666]">→</span> consumo no território <span className="text-[#666]">→</span> atividade econômica e oportunidades de renda
            </p>
          </div>

          <p className="text-sm text-[#9f9f9f] leading-relaxed">
            Para não inflar artificialmente o modelo financeiro, a premissa-base continua sendo <strong className="text-white">receita turística direta = R$ 0</strong>. O turismo é acompanhado como impacto econômico indireto.
          </p>
        </section>

        <section className="space-y-5 border-t border-[#242424] pt-10">
          <div className="flex items-center gap-3">
            <Sun className="w-6 h-6 text-[#f5c65b]" />
            <h2 className="text-2xl sm:text-3xl font-serif-artistic italic text-white">Energia solar como redução de custo de longo prazo</h2>
          </div>
          <div className="space-y-4 text-sm sm:text-base text-[#ccc] leading-relaxed">
            <p>
              A geração solar não foi retirada do modelo. Ela é tratada como uma ferramenta potencial de redução de OPEX. O cuidado é não chamar energia de “gratuita” nem assumir economia antes de medir consumo, geração, tarifas, manutenção e prazo de retorno.
            </p>
            <p>
              Em imóveis históricos, uma alternativa estudada é a <strong className="text-white">geração solar remota</strong>, evitando necessariamente instalar painéis sobre coberturas protegidas. A Lei nº 14.300/2022 estabelece o marco legal da micro e minigeração distribuída e do Sistema de Compensação de Energia Elétrica.
            </p>
          </div>

          <div className="grid sm:grid-cols-4 gap-3">
            {['Medir consumo', 'Reduzir desperdício', 'Dimensionar geração', 'Medir economia real'].map((step, idx) => (
              <div key={step} className="bg-[#181818] border border-[#333] p-4">
                <span className="text-xs font-mono text-[#f5c65b]">0{idx + 1}</span>
                <p className="text-sm text-white mt-2">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6 border-t border-[#242424] pt-10">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-[#FF6B35]" />
            <h2 className="text-2xl sm:text-3xl font-serif-artistic italic text-white">FinOps: quanto custa fazer permanecer?</h2>
          </div>

          <p className="text-sm sm:text-base text-[#ccc] leading-relaxed">
            Para tornar o estudo testável, foi criado um piloto acadêmico com 40 unidades. Os valores abaixo são <strong className="text-white">premissas de simulação</strong>, não orçamento de uma obra real ou de um imóvel específico de João Pessoa.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {finopsMetrics.map(metric => (
              <div key={metric.label} className="bg-[#171717] border border-[#303030] p-5 space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#aaa]">{metric.label}</span>
                <strong className="block text-2xl text-white">{metric.value}</strong>
                <span className="text-xs text-[#777]">{metric.note}</span>
              </div>
            ))}
          </div>

          <div className="p-5 bg-[#211b18] border border-[#4a372e]">
            <p className="text-sm sm:text-base text-[#e5d8d2] leading-relaxed">
              O resultado inicial não foi “o Legado Urbano é mais barato”. Nas premissas atuais, o modelo integrado custa mais do que uma solução habitacional simplificada. A pergunta FinOps correta passa a ser: <strong className="text-white">quais resultados adicionais justificam esse custo e quais componentes devem ser ajustados quando não entregam valor?</strong>
            </p>
          </div>
        </section>

        <section className="space-y-6 border-t border-[#242424] pt-10">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF6B35]">Sustentabilidade</span>
          <h2 className="text-2xl sm:text-3xl font-serif-artistic italic text-white">Cinco dimensões precisam permanecer de pé</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              ['Financeira', 'É possível pagar e operar ao longo do tempo?'],
              ['Estrutural', 'O patrimônio continuará adequado e preservado?'],
              ['Social', 'A família constrói condições progressivas de estabilidade?'],
              ['Urbanística', 'O território suporta e integra a ocupação?'],
              ['Ambiental / cultural', 'Energia, patrimônio e vitalidade territorial permanecem sustentáveis?']
            ].map(([title, description]) => (
              <div key={title} className="bg-[#171717] border border-[#303030] p-4">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="text-xs text-[#999] leading-relaxed mt-2">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6 border-t border-[#242424] pt-10">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF6B35]">Evolução do raciocínio</span>
          <h2 className="text-2xl sm:text-3xl font-serif-artistic italic text-white">Decisões que mudaram durante a análise</h2>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            {[
              ['Moradia ligada diretamente ao trabalho', 'Moradia e trabalho permanecem conectados pela autonomia, mas não como troca obrigatória.'],
              ['Criar novas estruturas de capacitação', 'Priorizar programas existentes de qualificação e intermediação de mão de obra.'],
              ['Todo imóvel vazio como oportunidade', 'Criar Matriz de Elegibilidade e admitir que um imóvel pode ser descartado.'],
              ['Turismo como possível receita', 'Manter receita turística direta zerada e medir impacto econômico territorial separadamente.'],
              ['Energia solar como solução automática', 'Eficiência primeiro; geração depois; economia precisa ser comprovada.'],
              ['Manutenção depois da falha', 'Manutenção preventiva + histórico técnico permanente da unidade.'],
              ['Benefícios sociais como economia financeira', 'Saving somente quando existir evidência financeira defensável.'],
              ['FinOps como corte de custos', 'FinOps como apoio à decisão e análise de valor ao longo do ciclo de vida.']
            ].map(([before, after]) => (
              <div key={before} className="bg-[#171717] border border-[#303030] p-5 space-y-2">
                <p className="text-[#888] line-through decoration-[#555]">{before}</p>
                <p className="text-white">→ {after}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6 border-t border-[#242424] pt-10">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF6B35]">Competências aplicadas</span>
          <h2 className="text-2xl sm:text-3xl font-serif-artistic italic text-white">O foco profissional do case</h2>
          <p className="text-sm sm:text-base text-[#ccc] leading-relaxed">
            Urbanismo, engenharia, assistência social, patrimônio e direito fazem parte do contexto estudado. O case não me apresenta como especialista nessas áreas. O foco do trabalho desenvolvido está na capacidade de estruturar um problema complexo por meio de:
          </p>
          <div className="flex flex-wrap gap-2">
            {['Análise de Negócios', 'Gestão de Processos', 'FinOps', 'Dados e Indicadores', 'Gestão de Riscos', 'Governança', 'Sustentabilidade'].map(item => (
              <span key={item} className="px-3 py-2 bg-[#1a1a1a] border border-[#333] text-xs text-[#ddd]">{item}</span>
            ))}
          </div>
        </section>

        <section className="space-y-6 border-t border-[#242424] pt-10">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-[#FF6B35]" />
            <h2 className="text-2xl sm:text-3xl font-serif-artistic italic text-white">Dicionário do projeto</h2>
          </div>
          <p className="text-sm text-[#aaa]">Termos técnicos explicados para que o artigo possa ser compreendido por leitores de diferentes áreas.</p>
          <div className="grid md:grid-cols-2 gap-3">
            {dictionary.map(([term, explanation]) => (
              <div key={term} className="bg-[#171717] border border-[#303030] p-4">
                <h3 className="font-mono text-sm text-[#FF6B35]">{term}</h3>
                <p className="text-xs sm:text-sm text-[#aaa] leading-relaxed mt-2">{explanation}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-5 border-t border-[#242424] pt-10">
          <h2 className="text-2xl sm:text-3xl font-serif-artistic italic text-white">Limites do estudo</h2>
          <p className="text-sm sm:text-base text-[#ccc] leading-relaxed">
            O Legado Urbano não é programa governamental, projeto arquitetônico, parecer jurídico, solução militar, programa de trabalho obrigatório, orçamento executivo nem promessa de economia. É um exercício acadêmico de análise, processos, riscos, sustentabilidade e tomada de decisão aplicado a um problema urbano real.
          </p>
          <p className="text-sm sm:text-base text-[#ccc] leading-relaxed">
            O estudo também admite conclusões negativas: um imóvel pode ser caro demais para recuperar, uma tecnologia pode não gerar economia, uma região pode não comportar a expansão ou um componente pode apresentar custo maior que o valor entregue. Revisar ou interromper também é uma decisão válida.
          </p>
        </section>

        <section className="space-y-5 border-t border-[#242424] pt-10">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF6B35]">Conclusão</span>
          <h2 className="text-2xl sm:text-3xl font-serif-artistic italic text-white">O verdadeiro teste começa depois da entrega</h2>
          <div className="space-y-4 text-sm sm:text-base text-[#ccc] leading-relaxed">
            <p>
              A pesquisa mostrou que João Pessoa já possui experiências e políticas que conectam habitação, patrimônio, comércio, cultura, turismo e ocupação do Centro. Por isso, o Legado Urbano não tenta substituir o que já existe.
            </p>
            <p>
              A contribuição acadêmica do case está em estudar uma camada complementar: <strong className="text-white">como acompanhar o ciclo de vida depois da entrega</strong>.
            </p>
            <p>
              Recuperar um imóvel é uma etapa. Oferecer moradia é outra. Construir autonomia é um processo. Preservar patrimônio exige continuidade. E fazer essas partes permanecerem financeiramente e operacionalmente sustentáveis ao longo dos anos é o desafio que este estudo procura analisar.
            </p>
          </div>

          <div className="p-7 bg-[#181818] border border-[#333] text-center space-y-3 mt-8">
            <Sparkles className="w-5 h-5 text-[#FF6B35] mx-auto" />
            <p className="font-serif-artistic italic text-lg sm:text-xl text-white max-w-3xl mx-auto">
              “Um legado não é apenas aquilo que foi construído. É aquilo que consegue permanecer útil, sustentável e gerar valor depois que a entrega inicial terminou.”
            </p>
            <span className="block text-[11px] font-mono uppercase tracking-widest text-[#888]">Priscilla Santos Cahino • 2026</span>
          </div>
        </section>

        <section className="space-y-4 border-t border-[#242424] pt-10">
          <h2 className="text-lg font-serif-artistic italic text-white">Fontes públicas consultadas</h2>
          <div className="space-y-2">
            {sourceLinks.map(source => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-xs sm:text-sm text-[#aaa] hover:text-[#FF6B35] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>{source.label}</span>
              </a>
            ))}
          </div>
        </section>

        <div className="border-t border-[#2a2a2a] pt-10 space-y-8">
          <div className="p-6 bg-[#161616] border border-[#2e2e2e] flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 shrink-0 border border-[#333] overflow-hidden bg-black">
              <img
                src="/priscilla-cahino-perfil.jpg"
                alt="Priscilla Cahino"
                className="w-full h-full object-cover grayscale contrast-110"
              />
            </div>
            <div className="space-y-2 text-center sm:text-left flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="font-serif-artistic italic text-lg text-white">Priscilla Cahino</span>
                <span className="text-xs font-mono text-[#FF6B35] uppercase">Negócios • Processos • FinOps em construção</span>
              </div>
              <p className="text-xs text-[#aaa] font-light leading-relaxed">
                Graduada em Ciências Contábeis, pós-graduada em Engenharia de Dados e estudante de Análise e Desenvolvimento de Sistemas. O Legado Urbano integra minha experiência anterior em finanças e relacionamento com clientes aos conhecimentos que venho desenvolvendo em tecnologia, processos, dados e FinOps.
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/priscilla-cahino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#bbb] hover:text-[#FF6B35] transition-colors"
                >
                  <span>LinkedIn</span>
                </a>
                <a href="mailto:priscilla_cahino@hotmail.com" className="inline-flex items-center gap-1 text-xs text-[#bbb] hover:text-[#FF6B35] transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  <span>E-mail</span>
                </a>
                {onOpenResume && (
                  <button onClick={onOpenResume} className="inline-flex items-center gap-1 text-xs text-[#FF6B35] hover:underline cursor-pointer">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Ver Currículo</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
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
    </article>
  );
};
