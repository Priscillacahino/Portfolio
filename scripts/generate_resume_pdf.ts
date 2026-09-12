import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResumePdf() {
  const doc = await PDFDocument.create();
  doc.setTitle('Currículo Profissional — Priscilla Santos Cahino');
  doc.setAuthor('Priscilla Santos Cahino');
  doc.setSubject('Customer Experience | Análise de Dados | Estudante de ADS');
  doc.setKeywords(['Analista de Dados', 'Customer Experience', 'UX Design', 'Engenharia de Dados', 'Power BI', 'SQL', 'Python', 'Currículo']);

  const helvetica = await doc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const helveticaOblique = await doc.embedFont(StandardFonts.HelveticaOblique);

  const primaryColor = rgb(0.12, 0.12, 0.12);
  const secondaryColor = rgb(0.32, 0.32, 0.32);
  const accentColor = rgb(0.85, 0.32, 0.12); // #D9521E - high contrast rust/orange
  const dividerColor = rgb(0.84, 0.84, 0.84);

  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const marginX = 42;
  const contentWidth = pageWidth - (marginX * 2);

  function clean(str: string) {
    return str
      .replace(/[•●]/g, '-')
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'")
      .replace(/[—–]/g, '-');
  }

  function wrapText(text: string, maxWidth: number, font: any, size: number): string[] {
    const sanitized = clean(text);
    const words = sanitized.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    for (const word of words) {
      const candidate = currentLine ? `${currentLine} ${word}` : word;
      const width = font.widthOfTextAtSize(candidate, size);
      if (width <= maxWidth) {
        currentLine = candidate;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  // ==================== PAGE 1 ====================
  let page = doc.addPage([pageWidth, pageHeight]);
  let y = pageHeight - 38;

  // Header Name
  page.drawText(clean('PRISCILLA SANTOS CAHINO'), {
    x: marginX,
    y,
    font: helveticaBold,
    size: 20,
    color: primaryColor,
  });
  y -= 19;

  // Title
  page.drawText(clean('Customer Experience | Análise de Dados | Estudante de ADS'), {
    x: marginX,
    y,
    font: helveticaBold,
    size: 11,
    color: accentColor,
  });
  y -= 15;

  // Subtitle
  page.drawText(clean('Unindo Negócios, Experiência do Usuário e Tecnologia | +18 anos de trajetória'), {
    x: marginX,
    y,
    font: helveticaOblique,
    size: 9.5,
    color: secondaryColor,
  });
  y -= 15;

  // Contact Row
  const contactText = clean('João Pessoa - PB | (83) 99955-3329 | priscilla_cahino@hotmail.com');
  page.drawText(contactText, {
    x: marginX,
    y,
    font: helvetica,
    size: 8.5,
    color: secondaryColor,
  });
  y -= 13;

  // Links Row
  const linksText = clean('LinkedIn: linkedin.com/in/priscilla-cahino | GitHub: github.com/Priscillacahino | Portfólio: portfoliocpriscillacom.vercel.app');
  page.drawText(linksText, {
    x: marginX,
    y,
    font: helveticaBold,
    size: 8,
    color: accentColor,
  });
  y -= 13;

  // Divider
  page.drawLine({
    start: { x: marginX, y },
    end: { x: marginX + contentWidth, y },
    thickness: 1.2,
    color: accentColor,
  });
  y -= 16;

  function drawSectionHeader(title: string) {
    page.drawText(clean(title.toUpperCase()), {
      x: marginX,
      y,
      font: helveticaBold,
      size: 10.5,
      color: accentColor,
    });
    y -= 5;
    page.drawLine({
      start: { x: marginX, y },
      end: { x: marginX + contentWidth, y },
      thickness: 0.6,
      color: dividerColor,
    });
    y -= 13;
  }

  // 1. RESUMO PROFISSIONAL
  drawSectionHeader('Resumo Profissional & Posicionamento');
  const summaryP1 = 'Profissional com mais de 18 anos de trajetória em negócios, crédito e relacionamento com clientes nos setores bancário e imobiliário, em transição consciente para tecnologia com foco em Customer Success, Operações, Análise de Dados e UX. Mais de 7 anos em Análise de Crédito e Risco, atuando na identificação de gargalos de processos e esteiras de atendimento.';
  const summaryLines = wrapText(summaryP1, contentWidth, helvetica, 9);
  for (const line of summaryLines) {
    page.drawText(line, { x: marginX, y, font: helvetica, size: 9, color: primaryColor });
    y -= 12.5;
  }
  y -= 3;

  const summaryP2 = 'Graduada em Ciências Contábeis, graduanda em ADS (UNIPÊ) com vivência prática na Fábrica de Software UBTech Office e com pós-graduação em Engenharia de Dados (UNIESP). Não me posiciono como especialista em TI, mas trago maturidade sênior de negócios somada a noções práticas aplicadas em SQL, Python, Power BI e prototipação no Figma para analisar métricas e apoiar decisões com dados.';
  const summaryLines2 = wrapText(summaryP2, contentWidth, helvetica, 9);
  for (const line of summaryLines2) {
    page.drawText(line, { x: marginX, y, font: helvetica, size: 9, color: primaryColor });
    y -= 12.5;
  }
  y -= 12;

  // 2. COMPETÊNCIAS & DIFERENCIAIS
  drawSectionHeader('Competências & Tecnologias');
  
  const colWidth = (contentWidth - 18) / 2;
  const col1X = marginX;
  const col2X = marginX + colWidth + 18;
  const colStartY = y;

  // Left Column: Core Business & Operações
  page.drawText(clean('Core de Negócios, Operações & CX'), { x: col1X, y: colStartY, font: helveticaBold, size: 9.5, color: primaryColor });
  let col1Y = colStartY - 13;
  const col1Items = [
    'Customer Experience (CX) e Customer Success (CS)',
    'Análise de Crédito e Gestão de Risco (+7 anos)',
    'Mapeamento de Jornada e Otimização de Esteiras Operacionais',
    'Ouvidoria e Mediação de Demandas Sensíveis (ENAP)',
    'Melhoria Contínua de Processos e Redução de Inadimplência',
  ];
  for (const item of col1Items) {
    page.drawText('-', { x: col1X, y: col1Y, font: helveticaBold, size: 8.5, color: accentColor });
    const lines = wrapText(item, colWidth - 10, helvetica, 8.5);
    for (const l of lines) {
      page.drawText(l, { x: col1X + 10, y: col1Y, font: helvetica, size: 8.5, color: secondaryColor });
      col1Y -= 11.5;
    }
  }

  // Right Column: Dados, UX & Engenharia
  page.drawText(clean('Dados, BI, UX/UI & Tecnologia'), { x: col2X, y: colStartY, font: helveticaBold, size: 9.5, color: primaryColor });
  let col2Y = colStartY - 13;
  const col2Items = [
    'Power BI, Dashboards Executivos, KPIs e DAX',
    'SQL (MySQL), Modelagem Relacional e Consultas em Projetos Acadêmicos',
    'Python (Pandas, Análise Exploratória, Scikit-Learn)',
    'UX/UI Design: Figma, Miro, Prototipação e Usabilidade',
    'IA Generativa, Copilot e Aceleração de Produtividade',
  ];
  for (const item of col2Items) {
    page.drawText('-', { x: col2X, y: col2Y, font: helveticaBold, size: 8.5, color: accentColor });
    const lines = wrapText(item, colWidth - 10, helvetica, 8.5);
    for (const l of lines) {
      page.drawText(l, { x: col2X + 10, y: col2Y, font: helvetica, size: 8.5, color: secondaryColor });
      col2Y -= 11.5;
    }
  }

  y = Math.min(col1Y, col2Y) - 12;

  // 3. EXPERIÊNCIA PROFISSIONAL (Page 1)
  drawSectionHeader('Experiência Profissional');

  function drawExperience(role: string, company: string, period: string, mode: string, bullets: string[]) {
    page.drawText(clean(role), { x: marginX, y, font: helveticaBold, size: 9.5, color: primaryColor });
    const periodText = clean(`${period} | ${mode}`);
    const pWidth = helvetica.widthOfTextAtSize(periodText, 8.5);
    page.drawText(periodText, { x: marginX + contentWidth - pWidth, y, font: helvetica, size: 8.5, color: secondaryColor });
    y -= 13;

    page.drawText(clean(company), { x: marginX, y, font: helveticaOblique, size: 9, color: accentColor });
    y -= 12;

    for (const b of bullets) {
      page.drawText('-', { x: marginX + 4, y, font: helveticaBold, size: 8.5, color: accentColor });
      const bLines = wrapText(b, contentWidth - 16, helvetica, 8.5);
      for (const bl of bLines) {
        page.drawText(bl, { x: marginX + 14, y, font: helvetica, size: 8.5, color: primaryColor });
        y -= 11.5;
      }
    }
    y -= 8;
  }

  // Exp 1: Fábrica de Software
  drawExperience(
    'Designer de Interface do Usuário / UI/UX (Estágio)',
    'Fábrica de Software UBTech Office / UNIPÊ',
    'mar/2026 - jul/2026',
    'Híbrido - João Pessoa/PB',
    [
      'Design de interfaces do projeto Administração para Todos: pesquisa de UX, arquitetura de informação, wireframes, protótipos de alta fidelidade.',
      'Organização de fluxos de navegação para Coordenação, Instrutores e Alunos.',
      'Colaboração com a equipe de desenvolvimento na apresentação de protótipos e fluxos.',
    ]
  );

  // Exp 2: Confiance Transações Financeiras
  drawExperience(
    'Analista de Crédito e Risco | Experiência do Cliente (CX)',
    'Confiance Transações Financeiras',
    'jul/2018 - dez/2025',
    'Tempo integral - João Pessoa/PB',
    [
      'Análise de crédito e validação documental para operações de crédito habitacional, consignado e comercial (20 a 40 processos/mês).',
      'Abertura, atualização e acompanhamento de contas de clientes Pessoa Física, prestando atendimento consultivo financeiro.',
      'Percepção de que o fechamento dependia de gargalos documentais e aprovação externa — visão aplicada a CX e melhoria de jornada.',
      'Suporte na resolução de demandas e conflitos operacionais, contribuindo para celeridade e melhor experiência do cliente.',
      'Certificação em Ouvidoria Pública e Privada pela Escola Nacional de Administração Pública (ENAP).',
    ]
  );

  // Exp 3: Confiance Conde
  drawExperience(
    'Analista de Negócios Imobiliários',
    'Confiance Conde (Atuação simultânea)',
    'dez/2023 - dez/2024',
    'Remoto - Conde/PB',
    [
      'Atuação simultânea em regime home office na originação e acompanhamento de financiamentos imobiliários (empresa distinta).',
      'Análise e conferência documental para crédito imobiliário conforme requisitos e procedimentos bancários.',
      'Acompanhamento de propostas, pendências e etapas necessárias para aprovação e contratação de financiamentos.',
      'Interface e relacionamento entre clientes, incorporadoras e instituições financeiras facilitando o fluxo.',
    ]
  );

  // Footer page 1
  page.drawText(clean('Priscilla Santos Cahino | Currículo Profissional | Página 1 de 2'), {
    x: marginX,
    y: 22,
    font: helvetica,
    size: 8,
    color: secondaryColor,
  });

  // ==================== PAGE 2 ====================
  page = doc.addPage([pageWidth, pageHeight]);
  y = pageHeight - 38;

  // Running header
  page.drawText(clean('PRISCILLA SANTOS CAHINO — Currículo Profissional (continuação)'), {
    x: marginX,
    y,
    font: helveticaBold,
    size: 8.5,
    color: secondaryColor,
  });
  page.drawText(clean('Página 2 de 2'), {
    x: marginX + contentWidth - 45,
    y,
    font: helvetica,
    size: 8.5,
    color: secondaryColor,
  });
  y -= 8;
  page.drawLine({
    start: { x: marginX, y },
    end: { x: marginX + contentWidth, y },
    thickness: 0.6,
    color: dividerColor,
  });
  y -= 14;

  drawSectionHeader('Experiência Profissional (continuação)');

  // Exp 4: GN Imobiliária
  drawExperience(
    'Assistente Administrativo | Suporte ao Cliente',
    'GN Imobiliária',
    'dez/2012 - jun/2018',
    'Presencial - João Pessoa/PB',
    [
      'Suporte operacional e atendimento administrativo a expressivo fluxo mensal de clientes, mantendo altos padrões de satisfação e fidelização.',
      'Digitalização e estruturação do acervo documental, reduzindo sensivelmente o tempo de localização e recuperação de contratos e processos.',
      'Resolução ágil de demandas contratuais e mediação de conflitos locatícios, diminuindo expressivamente a reincidência de chamados operacionais.',
    ]
  );

  // Exp 5: Caixa Econômica Federal
  drawExperience(
    'Recepcionista | Atendimento e Operações Bancárias',
    'Caixa Econômica Federal',
    'abr/2007 - nov/2011',
    'Presencial - João Pessoa/PB',
    [
      'Atendimento ao cliente e suporte às rotinas bancárias e administrativas com volume diário superior a 100 atendimentos.',
      'Abertura de contas Pessoa Física, atualização cadastral e conferência criteriosa de informações e documentos.',
      'Atendimento em processos de inscrição e regularização de CPF e PIS.',
      'Apoio na análise documental relacionada a operações de crédito habitacional e comercial.',
      'Orientação sobre produtos, serviços financeiros e utilização de canais alternativos e digitais de atendimento.',
    ]
  );

  // 4. FORMAÇÃO ACADÊMICA
  drawSectionHeader('Formação Acadêmica & Pós-Graduação');

  function drawEducation(title: string, institution: string, period: string, desc: string) {
    page.drawText(clean(title), { x: marginX, y, font: helveticaBold, size: 9.5, color: primaryColor });
    const pWidth = helvetica.widthOfTextAtSize(clean(period), 8.5);
    page.drawText(clean(period), { x: marginX + contentWidth - pWidth, y, font: helvetica, size: 8.5, color: secondaryColor });
    y -= 12;

    page.drawText(clean(institution), { x: marginX, y, font: helveticaOblique, size: 9, color: accentColor });
    y -= 11;

    const dLines = wrapText(desc, contentWidth, helvetica, 8.5);
    for (const dl of dLines) {
      page.drawText(dl, { x: marginX, y, font: helvetica, size: 8.5, color: secondaryColor });
      y -= 11;
    }
    y -= 6;
  }

  drawEducation(
    'Graduação em Análise e Desenvolvimento de Sistemas (ADS)',
    'Centro Universitário de João Pessoa (UNIPÊ)',
    'fev/2025 - jul/2027 (Em andamento)',
    'Lógica de programação, modelagem de banco de dados, engenharia de software e participação na Fábrica de Software UBTech Office.'
  );

  drawEducation(
    'Pós-graduação em Engenharia de Dados',
    'UNIESP Centro Universitário',
    'nov/2023 - mar/2024 (Concluído)',
    'Transformação de grandes volumes de dados em insights estratégicos. SQL, arquiteturas ETL/ELT, modelagem analítica e Business Intelligence.'
  );

  drawEducation(
    'Graduação em Ciências Contábeis (Bacharelado)',
    'Centro Universitário UNIESP',
    '2009 - 2013 (Concluído)',
    'Base sólida em conformidade fiscal, conciliação contábil, auditoria e finanças. TCC em Responsabilidade Socioambiental e Sustentabilidade nas Instituições Financeiras.'
  );

  // 5. CERTIFICAÇÕES & LICENÇAS
  drawSectionHeader('Certificações & Licenças');
  const certColWidth = (contentWidth - 18) / 2;
  const certsLeft = [
    'Power BI e Copilot para Análise de Dados',
    'SQL para Ciência de Dados e Banco Relacional',
    'Microsoft Certified: Azure AI Fundamentals (IA-900)',
    'Soluções de Inteligência Artificial no GitHub',
  ];
  const certsRight = [
    'Ouvidoria: Gestão e Mediação de Demandas (ENAP)',
    'UX Design: Usabilidade e Melhores Práticas Web',
    'Liderança no Atendimento e Resolução de Problemas',
    'Fundamentos de Finanças e Análise de Risco',
  ];

  const certStartY = y;
  let c1Y = certStartY;
  for (const c of certsLeft) {
    page.drawText('-', { x: marginX, y: c1Y, font: helveticaBold, size: 8, color: accentColor });
    page.drawText(clean(c), { x: marginX + 8, y: c1Y, font: helvetica, size: 8, color: primaryColor });
    c1Y -= 11;
  }
  let c2Y = certStartY;
  for (const c of certsRight) {
    page.drawText('-', { x: marginX + certColWidth + 18, y: c2Y, font: helveticaBold, size: 8, color: accentColor });
    page.drawText(clean(c), { x: marginX + certColWidth + 26, y: c2Y, font: helvetica, size: 8, color: primaryColor });
    c2Y -= 11;
  }
  y = Math.min(c1Y, c2Y) - 10;

  // 6. PROJETOS PRÁTICOS DE DESTAQUE
  drawSectionHeader('Projetos Técnicos de Destaque');

  function drawProject(name: string, subtitle: string, obj: string, tools: string, results: string) {
    page.drawText(clean(name), { x: marginX, y, font: helveticaBold, size: 9.5, color: primaryColor });
    const nameWidth = helveticaBold.widthOfTextAtSize(clean(name), 9.5);
    page.drawText(clean(` - ${subtitle}`), { x: marginX + nameWidth, y, font: helveticaOblique, size: 8.5, color: accentColor });
    y -= 11;

    const fullText = `Objetivo: ${obj} | Ferramentas: ${tools} | Resultados: ${results}`;
    const pLines = wrapText(fullText, contentWidth, helvetica, 8);
    for (const pl of pLines) {
      page.drawText(pl, { x: marginX, y, font: helvetica, size: 8, color: secondaryColor });
      y -= 10.5;
    }
    y -= 5;
  }

  drawProject(
    'ClínicaCare',
    'Análise de Dados, SQL, Python & Power BI',
    'Identificar gargalos operacionais e padrões de inadimplência em clínica de saúde.',
    'Power BI, MySQL (SQL), Python (Pandas), Scikit-Learn.',
    'Modelagem relacional, análise exploratória em Python e dashboard no Power BI com dados acadêmicos simulados.'
  );

  drawProject(
    'Adm4All (Administração para Todos)',
    'Interface UX/UI & Inclusão Digital (Fábrica de Software UNIPÊ)',
    'Criar interface acessível de capacitação para microempreendedores.',
    'Figma, Design System, Heurísticas de Usabilidade, Métodos Ágeis.',
    'Prototipação de interfaces no Figma e organização de fluxos para Coordenação, Instrutores e Alunos.'
  );

  drawProject(
    'Petzona',
    'Experiência Mobile & Jornada do Cliente',
    'Protótipo mobile para agendamento de cuidados e serviços pet.',
    'Figma, Miro, Customer Journey Mapping, Personas.',
    'Construção de persona, jornada no Miro e protótipo navegável de serviços pet no Figma.'
  );

  // Footer page 2
  page.drawText(clean('Priscilla Santos Cahino | portfoliocpriscillacom.vercel.app | João Pessoa - PB'), {
    x: marginX,
    y: 22,
    font: helvetica,
    size: 8,
    color: secondaryColor,
  });

  const pdfBytes = await doc.save();
  const outputPath = path.join(process.cwd(), 'public', 'Curriculo_Priscilla_Cahino.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Successfully generated resume PDF at: ${outputPath} (${pdfBytes.length} bytes)`);
}

generateResumePdf().catch((err) => {
  console.error('Failed to generate resume PDF:', err);
  process.exit(1);
});
