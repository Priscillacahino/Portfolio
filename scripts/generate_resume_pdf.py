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
import base64
from io import BytesIO

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'public', 'Curriculo_Priscilla_Cahino.pdf')
PROFILE_IMAGE = os.path.join(ROOT, 'public', 'priscilla-cahino-perfil.jpg')
RESUME_PHOTO_BASE64 = '''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'''

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
    if page_no == 1:
        canv.drawImage(PROFILE_IMAGE, 42, PAGE_H - 132, width=72, height=96, preserveAspectRatio=False, mask='auto')
    canv.drawString(MARGIN, 7*mm, f'Priscilla Santos Cahino | Currículo Profissional | Página {page_no} de 2')
    canv.restoreState()


os.makedirs(os.path.dirname(OUT), exist_ok=True)
doc = ResumeDocTemplate(OUT, pagesize=A4, leftMargin=MARGIN, rightMargin=MARGIN, topMargin=11*mm, bottomMargin=12*mm)
story=[]

if not os.path.exists(PROFILE_IMAGE):
    raise FileNotFoundError(f'Foto de perfil não encontrada: {PROFILE_IMAGE}')

# Mesma foto, proporção e enquadramento do currículo de referência anexado.
# A imagem no arquivo de referência ocupa exatamente 72 x 96 pt (proporção 3:4).
profile = Spacer(72, 96)
profile_box = Table([[profile]], colWidths=[72], rowHeights=[96], hAlign='LEFT')
profile_box.setStyle(TableStyle([
    ('VALIGN',(0,0),(-1,-1),'TOP'),
    ('ALIGN',(0,0),(-1,-1),'LEFT'),
    ('LEFTPADDING',(0,0),(-1,-1),0),
    ('RIGHTPADDING',(0,0),(-1,-1),0),
    ('TOPPADDING',(0,0),(-1,-1),0),
    ('BOTTOMPADDING',(0,0),(-1,-1),0)
]))

header_text = [
    Paragraph('PRISCILLA SANTOS CAHINO', styles['NameX']),
    Paragraph('Customer Experience (CX/CS) | Operações e Processos | Tecnologia', styles['PositionX']),
    Paragraph('FinOps em construção | Estudante de ADS | +18 anos em clientes, crédito e operações financeiras', styles['SubX']),
    Paragraph('João Pessoa - PB | (83) 99955-3329 | priscilla_cahino@hotmail.com', styles['ContactX']),
    Paragraph(f'{link("LinkedIn", "https://www.linkedin.com/in/priscilla-cahino/")} &nbsp;&nbsp;|&nbsp;&nbsp; {link("GitHub", "https://github.com/Priscillacahino")} &nbsp;&nbsp;|&nbsp;&nbsp; {link("Portfólio", "https://portfoliopriscilla.vercel.app/")}', styles['ContactX'])
]

# 18 pt de respiro após a foto, reproduzindo a posição do arquivo de referência.
header = Table(
    [[profile_box, header_text]],
    colWidths=[90, (PAGE_W - 2*MARGIN) - 90],
    rowHeights=[96],
    hAlign='CENTER'
)
header.setStyle(TableStyle([
    ('VALIGN',(0,0),(-1,-1),'TOP'),
    ('LEFTPADDING',(0,0),(-1,-1),0),
    ('RIGHTPADDING',(0,0),(-1,-1),0),
    ('TOPPADDING',(0,0),(-1,-1),0),
    ('BOTTOMPADDING',(0,0),(-1,-1),0)
]))

story += [
    header, Spacer(1,4),
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
