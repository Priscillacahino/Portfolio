from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, PageBreak, Image
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_RIGHT
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'public', 'Curriculo_Priscilla_Cahino.pdf')
PROFILE_IMAGE = os.path.join(ROOT, 'public', 'priscilla-cahino-perfil.jpg')

font_regular = '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
font_bold = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
font_italic = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Oblique.ttf'
if os.path.exists(font_regular):
    pdfmetrics.registerFont(TTFont('DVSans', font_regular))
    pdfmetrics.registerFont(TTFont('DVSans-Bold', font_bold))
    pdfmetrics.registerFont(TTFont('DVSans-Italic', font_italic))
    REG, BOLD, ITALIC = 'DVSans', 'DVSans-Bold', 'DVSans-Italic'
else:
    REG, BOLD, ITALIC = 'Helvetica', 'Helvetica-Bold', 'Helvetica-Oblique'

PAGE_W, PAGE_H = A4
MARGIN = 14*mm
ACCENT = colors.HexColor('#D9521E')
TEXT = colors.HexColor('#202124')
MUTED = colors.HexColor('#5F6368')
LIGHT = colors.HexColor('#F3F4F6')
DIV = colors.HexColor('#D7D9DC')

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameX', fontName=BOLD, fontSize=16.2, leading=18, textColor=TEXT, spaceAfter=2))
styles.add(ParagraphStyle(name='PositionX', fontName=BOLD, fontSize=8.8, leading=11, textColor=ACCENT, spaceAfter=1.5))
styles.add(ParagraphStyle(name='SubX', fontName=ITALIC, fontSize=7.5, leading=9.5, textColor=MUTED, spaceAfter=2))
styles.add(ParagraphStyle(name='ContactX', fontName=REG, fontSize=7.2, leading=9.2, textColor=MUTED))
styles.add(ParagraphStyle(name='SectionX', fontName=BOLD, fontSize=9.8, leading=11, textColor=ACCENT, spaceBefore=4, spaceAfter=4))
styles.add(ParagraphStyle(name='BodyX', fontName=REG, fontSize=7.9, leading=10.6, textColor=TEXT, spaceAfter=2))
styles.add(ParagraphStyle(name='SmallMuted', fontName=REG, fontSize=6.9, leading=8.7, textColor=MUTED))
styles.add(ParagraphStyle(name='ExpRole', fontName=BOLD, fontSize=8.4, leading=10, textColor=TEXT, spaceAfter=1))
styles.add(ParagraphStyle(name='ExpCompany', fontName=ITALIC, fontSize=7.5, leading=9, textColor=ACCENT, spaceAfter=1.5))
styles.add(ParagraphStyle(name='BulletX', fontName=REG, fontSize=7.2, leading=9.0, leftIndent=8, firstLineIndent=-5, textColor=TEXT, spaceAfter=0.7))
styles.add(ParagraphStyle(name='ProjectName', fontName=BOLD, fontSize=7.8, leading=9.2, textColor=TEXT, spaceAfter=0.5))
styles.add(ParagraphStyle(name='ProjectText', fontName=REG, fontSize=6.9, leading=8.5, textColor=MUTED, spaceAfter=2))
styles.add(ParagraphStyle(name='TableItem', fontName=REG, fontSize=6.9, leading=8.8, textColor=MUTED))


def link(text, url):
    return f'<link href="{url}" color="#D9521E"><u>{text}</u></link>'


def p(text, style='BodyX'):
    return Paragraph(text, styles[style])


def section(title):
    return [
        Paragraph(title.upper(), styles['SectionX']),
        Table([['']], colWidths=[PAGE_W-2*MARGIN], rowHeights=[0.5],
              style=[('BACKGROUND',(0,0),(-1,-1),DIV),('LINEBELOW',(0,0),(-1,-1),0.5,DIV),
                     ('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),0)]),
        Spacer(1, 3)
    ]


def exp_block(role, company, period, mode, bullets):
    role_p = Paragraph(role, styles['ExpRole'])
    right = Paragraph(f'{period} | {mode}', ParagraphStyle('r', parent=styles['SmallMuted'], alignment=TA_RIGHT))
    t = Table([[role_p, right]], colWidths=[112*mm, 69*mm])
    t.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),
                           ('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),
                           ('BOTTOMPADDING',(0,0),(-1,-1),0)]))
    items = [t, Paragraph(company, styles['ExpCompany'])]
    for b in bullets:
        items.append(Paragraph('• '+b, styles['BulletX']))
    items.append(Spacer(1, 3.5))
    return KeepTogether(items)


def edu_block(title, inst, period, desc):
    t = Table([[Paragraph(title, styles['ExpRole']),
                Paragraph(period, ParagraphStyle('er', parent=styles['SmallMuted'], alignment=TA_RIGHT))]],
              colWidths=[125*mm, 56*mm])
    t.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),
                           ('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),
                           ('BOTTOMPADDING',(0,0),(-1,-1),0)]))
    return KeepTogether([t, Paragraph(inst, styles['ExpCompany']), Paragraph(desc, styles['SmallMuted']), Spacer(1,2.5)])


class ResumeDocTemplate(SimpleDocTemplate):
    def afterPage(self):
        pass


def on_page(canv: canvas.Canvas, doc):
    canv.saveState()
    canv.setTitle('Currículo Profissional — Priscilla Santos Cahino')
    canv.setAuthor('Priscilla Santos Cahino')
    canv.setSubject('Customer Experience | Operações e Processos | Tecnologia | FinOps em construção')
    canv.setKeywords('Customer Success, Customer Experience, Operações, Processos, Análise de Negócios, FinOps, Crédito, Risco, ADS, Ciências Contábeis, Tecnologia')
    canv.setFont(REG, 6.4)
    canv.setFillColor(MUTED)
    page_no = canv.getPageNumber()
    canv.drawString(MARGIN, 7*mm, f'Priscilla Santos Cahino | Currículo Profissional | Página {page_no} de 2')
    canv.restoreState()


os.makedirs(os.path.dirname(OUT), exist_ok=True)
doc = ResumeDocTemplate(OUT, pagesize=A4, leftMargin=MARGIN, rightMargin=MARGIN, topMargin=11*mm, bottomMargin=12*mm)
story=[]

if not os.path.exists(PROFILE_IMAGE):
    raise FileNotFoundError(f'Foto de perfil não encontrada: {PROFILE_IMAGE}')
profile = Image(PROFILE_IMAGE, width=21.75*mm, height=29*mm)
profile_box = Table([[profile]], colWidths=[23*mm], rowHeights=[29*mm])
profile_box.setStyle(TableStyle([('BOX',(0,0),(-1,-1),0.8,ACCENT),('VALIGN',(0,0),(-1,-1),'MIDDLE'),
                                 ('ALIGN',(0,0),(-1,-1),'CENTER'),('LEFTPADDING',(0,0),(-1,-1),0),
                                 ('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),
                                 ('BOTTOMPADDING',(0,0),(-1,-1),0)]))
header_text = [
    Paragraph('PRISCILLA SANTOS CAHINO', styles['NameX']),
    Paragraph('Customer Experience (CX/CS) | Operações e Processos | Tecnologia', styles['PositionX']),
    Paragraph('FinOps em construção | Estudante de ADS | +18 anos em clientes, crédito e operações financeiras', styles['SubX']),
    Paragraph('João Pessoa - PB | (83) 99955-3329 | priscilla_cahino@hotmail.com', styles['ContactX']),
    Paragraph(f'{link("LinkedIn", "https://www.linkedin.com/in/priscilla-cahino/")} &nbsp;&nbsp;|&nbsp;&nbsp; {link("GitHub", "https://github.com/Priscillacahino")} &nbsp;&nbsp;|&nbsp;&nbsp; {link("Portfólio", "https://portfoliopriscilla.vercel.app/")}', styles['ContactX'])
]
ht = Table([[profile_box, header_text]], colWidths=[27*mm, 154*mm])
ht.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),
                         ('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),
                         ('BOTTOMPADDING',(0,0),(-1,-1),0)]))
story += [
    ht, Spacer(1,4),
    Table([['']], colWidths=[181*mm], rowHeights=[0.9],
          style=[('BACKGROUND',(0,0),(-1,-1),ACCENT),('LINEBELOW',(0,0),(-1,-1),0.9,ACCENT),
                 ('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),0)]),
    Spacer(1,4)
]

story += section('Resumo Profissional & Posicionamento')
story.append(p('Profissional com mais de 18 anos de trajetória nos setores bancário e imobiliário, com atuação em atendimento consultivo, análise de crédito e risco, operações financeiras, conformidade documental, relacionamento com clientes e acompanhamento de processos. Em transição para tecnologia, busco oportunidades em CX/CS, Atendimento, Operações e Análise de Negócios, conectando essa experiência aos conhecimentos que venho desenvolvendo em ADS, dados e produtos digitais.'))
story.append(p('Sou graduada em Ciências Contábeis, pós-graduada em Engenharia de Dados e estudante de Análise e Desenvolvimento de Sistemas. FinOps é uma direção profissional em construção: uma forma de aproximar minha base financeira de tecnologia, custos, governança, métricas e geração de valor, sem me posicionar ainda como especialista na área.'))
story.append(Spacer(1,3))

story += section('Competências & Conhecimentos')
left_items = [
    '<b>Customer Experience e Customer Success</b><br/>Atendimento consultivo, relacionamento, jornada, retenção e resolução de demandas.',
    '<b>Operações financeiras, crédito e risco</b><br/>Análise documental, financiamentos, processos PF/PJ, conformidade e acompanhamento.',
    '<b>Processos e Análise de Negócios</b><br/>Levantamento de necessidades, identificação de gargalos, priorização e melhoria contínua.',
    '<b>Governança e qualidade operacional</b><br/>Registro, rastreabilidade, análise de riscos e visão de pós-entrega.'
]
right_items = [
    '<b>Dados e BI - em desenvolvimento</b><br/>SQL, Power BI, Python/Pandas e indicadores em projetos acadêmicos.',
    '<b>UX/UI - prática acadêmica</b><br/>Figma, jornadas, wireframes, heurísticas, usabilidade e acessibilidade.',
    '<b>Tecnologia - em desenvolvimento</b><br/>Git/GitHub, HTML/CSS/JS, Kotlin/Android e fundamentos de banco de dados.',
    '<b>FinOps - em construção</b><br/>Custos, TCO, indicadores, governança, eficiência e análise de valor aplicada a estudos.'
]
comp_data=[[Paragraph(a, styles['TableItem']), Paragraph(b, styles['TableItem'])] for a,b in zip(left_items,right_items)]
comp=Table(comp_data, colWidths=[89*mm,89*mm], hAlign='LEFT')
comp.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,-1),LIGHT),('BOX',(0,0),(-1,-1),0.4,DIV),
                          ('INNERGRID',(0,0),(-1,-1),0.35,colors.white),('VALIGN',(0,0),(-1,-1),'TOP'),
                          ('LEFTPADDING',(0,0),(-1,-1),5),('RIGHTPADDING',(0,0),(-1,-1),5),
                          ('TOPPADDING',(0,0),(-1,-1),4),('BOTTOMPADDING',(0,0),(-1,-1),4)]))
story += [comp, Spacer(1,4)]

story += section('Experiência Profissional')
story.append(exp_block('UX/UI — Projeto de Extensão','Fábrica de Software UBTech Office / UNIPÊ','mar/2026 - jul/2026','Híbrido - João Pessoa/PB',[
    'Concepção de interfaces do projeto Administração para Todos, com organização de fluxos, arquitetura da informação, wireframes, protótipos e atenção à acessibilidade.',
    'Estruturação da experiência para Coordenação, Instrutores e Alunos e colaboração com a equipe de desenvolvimento na apresentação das telas e fluxos.'
]))
story.append(exp_block('Analista de Crédito e Risco | Experiência do Cliente (CX)','Confiance Transações Financeiras','jul/2018 - dez/2025','Tempo integral - João Pessoa/PB',[
    'Análise de crédito e validação documental em operações habitacionais, consignadas e comerciais, com acompanhamento de pendências e etapas de contratação.',
    'Atendimento consultivo, atualização cadastral e suporte à resolução de demandas, conciliando clareza para o cliente, requisitos bancários e qualidade do processo.',
    'Identificação de gargalos documentais e operacionais, acompanhamento de riscos e interface com diferentes participantes da jornada.'
]))
story.append(exp_block('Analista de Negócios Imobiliários | Gestão de Relacionamento','Confiance Conde (atuação simultânea)','dez/2023 - dez/2024','Remoto - Conde/PB',[
    'Originação e acompanhamento de financiamentos imobiliários, análise documental e controle das etapas necessárias para aprovação e contratação.',
    'Relacionamento entre clientes, incorporadoras e instituições financeiras, facilitando o fluxo de informações e pendências.'
]))

story.append(PageBreak())

story += section('Experiência Profissional - continuação')
story.append(exp_block('Assistente Administrativo | Suporte ao Cliente','GN Imobiliária','dez/2012 - jun/2018','Presencial - João Pessoa/PB',[
    'Atendimento administrativo e suporte operacional a clientes, organização de contratos e acompanhamento de demandas do setor imobiliário.',
    'Digitalização e estruturação de acervo documental, facilitando localização, recuperação e rastreabilidade de informações.',
    'Apoio à resolução de demandas contratuais e mediação de situações operacionais.'
]))
story.append(exp_block('Recepcionista | Atendimento e Operações Bancárias','Caixa Econômica Federal','abr/2007 - nov/2011','Presencial - João Pessoa/PB',[
    'Atendimento ao cliente e suporte a rotinas bancárias e administrativas, abertura de contas, atualização cadastral e conferência documental.',
    'Orientação sobre produtos, serviços financeiros e canais de atendimento, além de apoio documental em operações de crédito.'
]))

story += section('Formação Acadêmica & Pós-graduação')
story.append(edu_block('Graduação em Análise e Desenvolvimento de Sistemas (ADS)','Centro Universitário de João Pessoa (UNIPÊ)','fev/2025 - jul/2027 (em andamento)','Lógica de programação, banco de dados, engenharia de software, desenvolvimento e participação na Fábrica de Software UBTech Office.'))
story.append(edu_block('Pós-graduação em Engenharia de Dados','UNIESP Centro Universitário','nov/2023 - mar/2024 (concluída)','Fundamentos de dados, SQL, arquiteturas ETL/ELT, modelagem analítica e Business Intelligence.'))
story.append(edu_block('Graduação em Ciências Contábeis - Bacharelado','UNIESP','2009 - 2013 (concluída)','Formação em contabilidade, finanças, auditoria e conformidade. TCC sobre sustentabilidade em instituições financeiras.'))

story += section('Certificações & Qualificações')
cert_left = ['Microsoft Certified: Azure AI Fundamentals (AI-900) - 2026','HP LIFE - Gestão Ágil - 2026','Sou CS e Agora? - Customer Success - 2026','IA aplicada com n8n e LangChain - 2026']
cert_right = ['ENAP - Ouvidoria - 20h','Power BI e Copilot para Análise de Dados','UX/UI: Usabilidade, Figma e Prototipação','Git/GitHub e fundamentos de desenvolvimento']
cert_data=[[Paragraph('• '+a, styles['TableItem']), Paragraph('• '+b, styles['TableItem'])] for a,b in zip(cert_left,cert_right)]
ct=Table(cert_data,colWidths=[89*mm,89*mm])
ct.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),0),
                        ('RIGHTPADDING',(0,0),(-1,-1),4),('TOPPADDING',(0,0),(-1,-1),1),
                        ('BOTTOMPADDING',(0,0),(-1,-1),2)]))
story += [ct, Spacer(1,3)]

story += section('Projetos Acadêmicos e Pessoais de Destaque')
projects = [
    ('Legado Urbano JP','Análise de Negócios, Processos e FinOps em construção','Estudo de caso sobre reabilitação urbana e moradia, com análise de custos, TCO, riscos, governança, sustentabilidade e valor ao longo do ciclo de vida.'),
    ('Jornada360','Customer Success, Health Score e Priorização','MVP local voltado à leitura da jornada do cliente, Health Score e organização de prioridades, com regras e cenários de teste documentados.'),
    ('Adm4All - Administração para Todos','UX/UI e Projeto de Extensão','Figma, arquitetura da informação, acessibilidade e organização de fluxos para Coordenação, Instrutores e Alunos.'),
    ('ClínicaCare','Dados e Business Intelligence','Projeto acadêmico com modelagem relacional, SQL, Python/Pandas e dashboard no Power BI para exploração de indicadores operacionais.'),
    ('UniGuard','Governança, Risco e Privacidade','Estudo acadêmico de solução de segurança no campus, considerando fluxos de acesso, privacidade, LGPD, governança e requisitos de uso.')
]
for name, sub, txt in projects:
    story.append(Paragraph(f'{name} <font color="#D9521E">- {sub}</font>', styles['ProjectName']))
    story.append(Paragraph(txt, styles['ProjectText']))

story.append(Spacer(1,1))
story.append(Paragraph('Outros projetos e estudos estão disponíveis no portfólio e no GitHub, incluindo AlcoLock, PetZona, Padrinhos da Rua, Conta Certa, Casa de Praia Vênus, Temporada PB e Guia de Lugares PB.', styles['SmallMuted']))

doc.build(story, onFirstPage=on_page, onLaterPages=on_page)
print(OUT)
