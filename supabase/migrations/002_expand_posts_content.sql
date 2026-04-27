-- Expande conteúdo e corrige imagens — match por título (mais confiável que slug)

-- 1. BPC/LOAS
UPDATE public.posts SET
  image = 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80&auto=format&fit=crop',
  content = '<h2>O que é o BPC/LOAS</h2>
<p>O Benefício de Prestação Continuada (BPC), previsto na Lei Orgânica da Assistência Social (LOAS), é um benefício assistencial pago pelo governo federal a idosos e pessoas com deficiência em situação de vulnerabilidade econômica. Em 2026, seu valor corresponde a um salário mínimo — R$ 1.412 mensais — e é pago enquanto o beneficiário atender aos requisitos.</p>
<p>Ao contrário da aposentadoria, o BPC não exige que o beneficiário tenha contribuído ao INSS em nenhum momento. É um direito social garantido pela Constituição Federal para quem mais precisa.</p>
<h2>Quem tem direito ao BPC</h2>
<p>Para receber o BPC, é necessário atender cumulativamente a dois critérios principais:</p>
<ul>
<li><strong>Ser idoso com 65 anos ou mais</strong>, independentemente de sexo ou condição de saúde; ou <strong>ser pessoa com deficiência de qualquer idade</strong>, com impedimentos de longo prazo de natureza física, mental, intelectual ou sensorial que dificultem a participação plena na sociedade em igualdade de condições.</li>
<li><strong>Renda familiar per capita inferior a 1/4 do salário mínimo</strong> (R$ 353 mensais em 2026). O cálculo considera a renda bruta de todos os membros da família que vivem na mesma casa.</li>
</ul>
<h2>O que conta (e o que não conta) no cálculo da renda</h2>
<p>O cálculo da renda familiar para fins do BPC inclui salários, aposentadorias, pensões, aluguéis e outros rendimentos dos membros do grupo familiar. Por outro lado, alguns valores são excluídos do cálculo por lei:</p>
<ul>
<li>O próprio BPC já recebido por outro membro da família</li>
<li>Benefícios de programas de transferência de renda como o Bolsa Família</li>
<li>Valores recebidos de programas estaduais e municipais de assistência social</li>
<li>Rendimentos de trabalho de pessoa com deficiência em processo de inclusão no mercado de trabalho (dentro dos limites legais)</li>
</ul>
<h2>Como dar entrada no BPC</h2>
<p>O pedido do BPC é feito pelo INSS, mesmo sendo um benefício assistencial e não previdenciário. O processo é:</p>
<ol>
<li>Inscrição no <strong>CadÚnico</strong> atualizado há menos de dois anos, no CRAS do seu município</li>
<li>Agendamento no <strong>Meu INSS</strong> (aplicativo ou site) ou pelo telefone 135</li>
<li>Realização de <strong>perícia médica e social</strong> pelo INSS, para pessoas com deficiência</li>
<li>Apresentação de RG, CPF, comprovante de residência e documentos de renda de todos os membros da família</li>
</ol>
<h2>O INSS negou o BPC — e agora?</h2>
<p>A negativa do BPC é muito comum, especialmente quando o INSS entende que a renda familiar está acima do limite ou que a deficiência não atinge o grau de impedimento exigido. Nesses casos, é possível interpor <strong>recurso administrativo</strong> no prazo de 30 dias ou ingressar com <strong>ação judicial</strong> nos Juizados Especiais Federais.</p>
<p>A jurisprudência dos tribunais federais tem sido cada vez mais favorável ao reconhecimento do BPC em casos de negativa injustificada, especialmente quando a vulnerabilidade social é evidente mesmo que a renda per capita esteja marginalmente acima do limite legal. Não desista sem consultar um especialista.</p>'
WHERE title ILIKE '%BPC%LOAS%';

-- 2. Quanto paga o INSS
UPDATE public.posts SET
  content = '<h2>O valor médio dos benefícios do INSS</h2>
<p>A maioria dos brasileiros aposentados recebe entre um e dois salários mínimos do INSS. Em 2026, o salário mínimo é de R$ 1.412, e estatísticas do próprio INSS mostram que mais de 65% dos aposentados recebem exatamente esse valor — o mínimo garantido pela legislação. Mas por que isso acontece, mesmo após décadas de contribuição?</p>
<h2>Como o INSS calcula o seu benefício</h2>
<p>O cálculo da aposentadoria considera a média de todas as suas contribuições desde julho de 1994, atualizada monetariamente. Sobre essa média, aplica-se uma alíquota que varia conforme as regras de transição aplicáveis ao seu caso.</p>
<p>Para quem se aposenta pela regra de pontos (a mais comum na transição), somam-se a idade e o tempo de contribuição. Em 2026, são necessários 100 pontos para mulheres e 105 para homens, com mínimo de 30 e 35 anos de contribuição, respectivamente.</p>
<p>O problema é que muitas pessoas tiveram períodos de trabalho informal, contribuições sobre o salário mínimo ou lacunas no histórico previdenciário — o que reduz significativamente a média de cálculo e, consequentemente, o valor do benefício.</p>
<h2>Cinco regras de transição — qual é a melhor para você?</h2>
<p>A Reforma da Previdência de 2019 criou cinco regras de transição para quem já contribuía antes da reforma. São elas: pedágio de 50%, pedágio de 100%, regra de pontos, regra de idade progressiva e a regra de tempo de contribuição com redutores. Cada uma gera um resultado diferente dependendo do histórico individual.</p>
<p>A escolha errada pode representar uma diferença de centenas de reais por mês — e esse erro não pode ser desfeito depois que o benefício é concedido. Por isso, simular todas as regras antes de pedir a aposentadoria é fundamental.</p>
<h2>O que fazer para receber mais</h2>
<ul>
<li><strong>Revisar o CNIS:</strong> erros no Cadastro Nacional de Informações Sociais são comuns e podem reduzir sua média sem nenhuma justificativa. Solicite o extrato e verifique cada período.</li>
<li><strong>Incluir contribuições não computadas:</strong> empregos antigos, trabalho autônomo ou períodos rurais frequentemente ficam fora do cálculo por falta de documentação — e podem ser incluídos com a documentação adequada.</li>
<li><strong>Aguardar o momento certo:</strong> em algumas regras, aposentar um ou dois anos mais tarde pode resultar em aumento significativo no coeficiente aplicado à média.</li>
<li><strong>Consultar um especialista:</strong> um advogado previdenciário pode simular todas as regras e identificar qual gera o maior benefício para o seu histórico específico.</li>
</ul>
<h2>Se você já está aposentado, pode ter direito à revisão</h2>
<p>Se você se aposentou nos últimos 10 anos, ainda é possível solicitar uma revisão do benefício caso haja erro no cálculo, períodos de contribuição não computados ou aplicação de uma regra desvantajosa. O prazo decadencial é de 10 anos a partir da data da concessão.</p>
<p>Muitos segurados deixam de receber centenas de reais por mês simplesmente por não questionarem o cálculo feito pelo INSS. Consulte um advogado especializado antes de aceitar que o valor atual é definitivo.</p>'
WHERE title ILIKE '%quanto paga o INSS%';

-- 3. Diabetes tipo 1
UPDATE public.posts SET
  content = '<h2>O que estava em jogo com o projeto de lei</h2>
<p>O projeto vetado pelo presidente Lula equiparava o diabetes tipo 1 a uma deficiência para fins previdenciários e tributários. Se sancionado, portadores da doença teriam acesso facilitado a benefícios como aposentadoria por deficiência, BPC/LOAS, isenção de IPI na compra de veículos e outros direitos garantidos à pessoa com deficiência pela legislação brasileira.</p>
<p>A decisão gerou forte reação de associações de pacientes e especialistas em saúde, que argumentam que o diabetes tipo 1 — uma doença autoimune que exige monitoramento constante e uso de insulina por toda a vida — gera limitações funcionais significativas que justificam o tratamento legal diferenciado.</p>
<h2>Qual foi o argumento do governo para o veto</h2>
<p>O governo federal justificou o veto com base no impacto fiscal estimado, alegando que a equiparação geraria despesas não previstas no orçamento e contrariaria a Lei de Responsabilidade Fiscal. A Casa Civil também apontou que a definição de deficiência adotada pelo projeto divergia do conceito utilizado pela Convenção Internacional sobre os Direitos das Pessoas com Deficiência, da qual o Brasil é signatário.</p>
<h2>O que muda na prática para quem tem diabetes tipo 1</h2>
<p>Com o veto, portadores de diabetes tipo 1 não têm direito automático ao enquadramento como pessoa com deficiência para fins previdenciários. No entanto, isso não significa que estão sem alternativas:</p>
<ul>
<li><strong>Reconhecimento individual por perícia:</strong> é possível solicitar ao INSS avaliação médica e funcional para reconhecimento de deficiência ou incapacidade, dependendo do grau de comprometimento da doença.</li>
<li><strong>Aposentadoria por incapacidade permanente:</strong> se o diabetes gerou complicações que impedem definitivamente o trabalho (neuropatia grave, amputação, perda de visão etc.), o segurado pode ter direito à aposentadoria por incapacidade permanente.</li>
<li><strong>Auxílio por incapacidade temporária:</strong> nos períodos de descompensação ou internação, o auxílio-doença pode ser requerido com documentação médica adequada.</li>
<li><strong>BPC/LOAS:</strong> para pacientes de baixa renda com deficiência reconhecida por perícia do INSS, o BPC/LOAS continua sendo uma opção, independentemente do veto.</li>
</ul>
<h2>O caminho judicial ainda está aberto</h2>
<p>Após um veto presidencial, o Congresso pode derrubá-lo com maioria absoluta em sessão conjunta do Senado e da Câmara. Diversas entidades de pacientes já sinalizaram que vão pressionar os parlamentares para a derrubada do veto.</p>
<p>Enquanto isso, cada caso deve ser analisado individualmente por um advogado previdenciário. As possibilidades variam muito conforme o histórico médico, o nível funcional do paciente e o tempo de contribuição ao INSS.</p>'
WHERE title ILIKE '%diabetes tipo 1%';

-- 4. Anencefalia
UPDATE public.posts SET
  content = '<h2>O que dizia o projeto de lei antes do veto</h2>
<p>O projeto aprovado pelo Congresso instituía uma pensão especial para mães que perderam filhos com anencefalia — uma malformação congênita incompatível com a vida extrauterina. A proposta reconhecia o sofrimento dessas famílias e buscava garantir um amparo financeiro mínimo por um período determinado após a perda.</p>
<p>Após a aprovação nas duas casas do Congresso, o projeto foi enviado ao presidente Lula, que optou pelo veto total, alegando questões de ordem orçamentária e constitucional relacionadas à criação de despesas sem indicação de fonte de custeio.</p>
<h2>O impacto nas famílias afetadas</h2>
<p>Mães que passam pela perda de um filho com anencefalia enfrentam um processo duplo de dor: o luto pela perda e, muitas vezes, o retorno precoce ao trabalho por necessidade financeira. A ausência de qualquer suporte governamental específico para essa situação deixa essas famílias sem amparo no momento mais vulnerável.</p>
<h2>O que ainda é possível buscar na Justiça</h2>
<ul>
<li><strong>Salário-maternidade:</strong> em caso de natimorto, a segurada tem direito ao salário-maternidade pelo período mínimo de duas semanas, conforme a legislação previdenciária vigente.</li>
<li><strong>Afastamento por incapacidade:</strong> o sofrimento psicológico intenso decorrente do luto pode configurar incapacidade temporária para o trabalho, permitindo o requerimento do auxílio por incapacidade temporária com laudo psiquiátrico adequado.</li>
<li><strong>BPC/LOAS para a família:</strong> se a mãe ou outro membro da família possui deficiência e a renda familiar per capita é inferior a 1/4 do salário mínimo, pode haver direito ao BPC independentemente da situação do filho.</li>
<li><strong>Licença-maternidade estendida:</strong> algumas convenções coletivas e estatutos de servidores públicos preveem licença-maternidade mesmo em casos de natimorto, com duração variável.</li>
</ul>
<h2>A pressão pelo Congresso reverter o veto</h2>
<p>Organizações de apoio a famílias enlutadas e associações de mulheres já iniciaram campanha para que o Congresso Nacional derrube o veto presidencial. A derrubada exige maioria absoluta em sessão conjunta das duas casas — um processo que pode se estender por meses.</p>
<p>Independentemente do desfecho político, cada família em situação de vulnerabilidade deve buscar orientação jurídica individual. Há casos em que o caminho judicial é mais rápido e eficaz do que aguardar a solução legislativa.</p>'
WHERE title ILIKE '%anencefalia%';

-- 5. Trabalhador rural
UPDATE public.posts SET
  content = '<h2>O trabalhador rural tem proteção especial na Previdência</h2>
<p>A Constituição Federal garante ao trabalhador rural — mesmo sem carteira assinada — o direito à aposentadoria. O chamado "segurado especial" é uma categoria própria da legislação previdenciária brasileira, criada para proteger quem trabalha na atividade rural em regime de economia familiar, sem relação de emprego formal.</p>
<p>Para esse trabalhador, a aposentadoria por idade é concedida aos 60 anos para homens e 55 anos para mulheres, com 15 anos de efetivo exercício de atividade rural comprovada. Não é necessário ter contribuído mensalmente ao INSS durante todo esse período.</p>
<h2>Quem se enquadra como segurado especial</h2>
<p>O segurado especial é o produtor, parceiro, meeiro, comodatário, arrendatário ou pescador artesanal que exerce atividade rural individualmente ou em regime de economia familiar. Também se enquadram os integrantes do grupo familiar que trabalham com o titular, como cônjuge e filhos maiores de 16 anos.</p>
<h2>Como provar a atividade rural sem carteira</h2>
<p>A ausência de registro em carteira não é um obstáculo intransponível. O INSS aceita uma série de documentos para comprovar a atividade rural:</p>
<ul>
<li><strong>Notas fiscais de produtor rural</strong> ou de venda de produtos agrícolas</li>
<li><strong>Declaração de Aptidão ao Pronaf (DAP)</strong> ou cadastro no PRONAF</li>
<li><strong>Declaração de sindicato de trabalhadores rurais</strong>, com reconhecimento de firma</li>
<li><strong>Contratos de parceria, comodato ou arrendamento</strong> de terra</li>
<li><strong>Cadastro de imóvel rural</strong> no INCRA ou ITR (Imposto Territorial Rural)</li>
<li><strong>Certidão de casamento ou nascimento</strong> mencionando a profissão de lavrador ou agricultor</li>
<li><strong>Testemunhas</strong> que confirmem a atividade rural em audiência</li>
</ul>
<h2>O INSS frequentemente nega — mas é possível recorrer</h2>
<p>O INSS tem postura bastante restritiva na análise de benefícios rurais. É comum que a autarquia exija documentos contemporâneos para cada ano do período de carência, o que muitas vezes é impossível para o trabalhador rural. Nesses casos, a via judicial costuma ser mais eficaz.</p>
<p>Na Justiça Federal, é possível apresentar combinação de documentos e depoimentos de testemunhas para comprovar a atividade rural de forma global, sem que seja necessário ter documentos de cada ano isoladamente. A jurisprudência dos Tribunais Regionais Federais é bastante favorável ao trabalhador rural nessa questão.</p>
<h2>Prazos e retroativos</h2>
<p>Quem tem direito ao benefício mas não requereu ainda pode receber retroativos desde a data em que preencheu os requisitos — ou desde a data do requerimento, o que for mais recente. Não vale a pena esperar. Consulte um advogado previdenciário para levantar a documentação disponível e avaliar o melhor momento para dar entrada no benefício.</p>'
WHERE title ILIKE '%trabalhador rural%carteira%';

-- 6. Auxílio-doença negado
UPDATE public.posts SET
  content = '<h2>Negativa do INSS: mais comum do que parece</h2>
<p>A negativa do auxílio por incapacidade temporária (antigo auxílio-doença) é um dos motivos mais frequentes de busca por advogados previdenciários em todo o Brasil. Uma parcela significativa dos pedidos é indeferida na análise inicial — e boa parte dessas negativas é revertida em recursos administrativos ou ações judiciais.</p>
<p>Se o INSS negou seu benefício, é fundamental entender os motivos do indeferimento antes de decidir o próximo passo. A carta de indeferimento traz o código do motivo e o prazo para recorrer.</p>
<h2>Principais motivos de negativa e como contestar</h2>
<ul>
<li><strong>Carência não cumprida:</strong> para o auxílio-doença, são necessárias 12 contribuições mensais. Verifique se há períodos de contribuição não registrados no CNIS — erros são frequentes.</li>
<li><strong>Qualidade de segurado perdida:</strong> mesmo sem contribuir, o segurado mantém seus direitos por um período de graça (12 a 36 meses, dependendo do caso).</li>
<li><strong>Perícia médica desfavorável:</strong> o perito entendeu que você tem capacidade para trabalhar. Esse é o motivo mais comum — e o mais contestável com documentação médica robusta.</li>
<li><strong>Incapacidade inferior a 15 dias:</strong> o INSS só concede o benefício se a incapacidade for superior a 15 dias consecutivos.</li>
</ul>
<h2>Recurso administrativo: o primeiro passo</h2>
<p>Após a negativa, você tem 30 dias para interpor recurso administrativo junto à Junta de Recursos do INSS. O recurso é gratuito e pode ser feito pelo aplicativo Meu INSS ou pessoalmente em uma agência. Nele, você pode apresentar novos documentos médicos e contestar o laudo pericial.</p>
<p>Reúna os seguintes documentos antes de recorrer:</p>
<ul>
<li>Laudos médicos atualizados com CID, descrição detalhada da doença e prognóstico</li>
<li>Exames de imagem, laboratoriais ou outros que comprovem o diagnóstico</li>
<li>Atestados de internação, se houver</li>
<li>Declaração do médico assistente sobre a incapacidade para o trabalho</li>
</ul>
<h2>Ação judicial: quando o recurso não resolve</h2>
<p>Se o recurso administrativo for negado ou se o INSS não responder dentro do prazo (45 dias), é possível ingressar com ação judicial na Justiça Federal ou nos Juizados Especiais Federais. Em casos de urgência comprovada, é possível requerer tutela antecipada, que obriga o INSS a pagar o benefício provisoriamente enquanto o processo corre.</p>
<p>A via judicial tem prazos mais favoráveis ao segurado e permite uma análise mais completa da situação, sem as limitações da perícia administrativa do INSS. Muitos casos negados administrativamente são revertidos na Justiça.</p>'
WHERE title ILIKE '%INSS negou%auxílio%' OR title ILIKE '%INSS negou%auxilio%';

-- 7. Revisão da vida toda
UPDATE public.posts SET
  content = '<h2>O que é a revisão da vida toda</h2>
<p>A "revisão da vida toda" é uma tese jurídica que permite incluir no cálculo da aposentadoria as contribuições feitas antes de julho de 1994 — data de início do Plano Real e marco definido pela legislação original para o cálculo dos benefícios. Para muitos trabalhadores, os salários anteriores a 1994 eram proporcionalmente mais altos, o que pode elevar significativamente a média de cálculo do benefício.</p>
<p>O Supremo Tribunal Federal julgou o tema em 2022 (Tema 1.102) e reconheceu o direito à revisão, mas com uma peculiaridade importante: ela só é vantajosa quando as contribuições anteriores a 1994 são superiores às feitas depois dessa data. Nem todo aposentado se beneficia.</p>
<h2>Para quem a revisão faz sentido</h2>
<p>A revisão é mais vantajosa para trabalhadores que:</p>
<ul>
<li>Tinham salários mais altos antes de 1994 e passaram por períodos de desemprego ou salários menores após essa data</li>
<li>Trabalharam por muitos anos antes de 1994 e se aposentaram com base em poucos anos após essa data</li>
<li>São servidores públicos que migraram para o RGPS (Regime Geral) depois de 1994</li>
<li>Contribuíram por longos períodos como autônomos com bases de contribuição altas antes de 1994</li>
</ul>
<p>Por outro lado, para quem ganhava mais após 1994, a revisão pode resultar em benefício menor — e nesse caso, não deve ser solicitada.</p>
<h2>Ainda dá tempo de pedir?</h2>
<p>Sim — mas o prazo está correndo. O prazo decadencial para revisão de benefício previdenciário é de 10 anos a partir da data em que o benefício foi concedido. Portanto, aposentados que receberam o benefício há menos de 10 anos ainda podem requerer a revisão.</p>
<p>Com o julgamento do STF em 2022, muitos processos que estavam suspensos voltaram a tramitar, e novos pedidos administrativos e judiciais passaram a ser aceitos. Se você se aposentou entre 2015 e 2025, o prazo ainda não expirou.</p>
<h2>Como solicitar a revisão</h2>
<p>O primeiro passo é fazer uma simulação comparando o benefício atual com o que seria calculado com a inclusão das contribuições pré-1994. Essa simulação requer acesso ao extrato completo do CNIS e, muitas vezes, a documentos antigos como carteiras de trabalho e fichas de salário.</p>
<p>Se a revisão for vantajosa, o pedido pode ser feito administrativamente pelo Meu INSS ou por ação judicial caso o INSS indefira o pedido — o que é comum nesse tipo de revisão.</p>
<h2>Cuidado com promessas sem análise</h2>
<p>A revisão da vida toda ganhou muita publicidade e, infelizmente, gerou oportunistas que prometem resultados sem fazer a análise adequada. Antes de pagar qualquer honorário, exija que o advogado demonstre, com base no seu CNIS real, que a revisão é vantajosa para o seu caso. O resultado precisa ser calculado, não prometido.</p>'
WHERE title ILIKE '%revisão da vida toda%' OR title ILIKE '%revisao da vida toda%';

-- 8. Salário-maternidade
UPDATE public.posts SET
  content = '<h2>O salário-maternidade existe para proteger a mãe, não o emprego</h2>
<p>Uma confusão muito comum é achar que o salário-maternidade está vinculado ao emprego formal. Na verdade, o benefício é previdenciário — pago pelo INSS — e pode ser concedido mesmo para mulheres que estão desempregadas no momento do nascimento, adoção ou guarda para fins de adoção.</p>
<p>O que garante esse direito é o chamado "período de graça": um intervalo de tempo após a última contribuição ao INSS durante o qual a segurada mantém seus direitos previdenciários — incluindo o salário-maternidade.</p>
<h2>Qual é o período de graça para o salário-maternidade</h2>
<p>A duração do período de graça depende da situação de cada segurada:</p>
<ul>
<li><strong>12 meses</strong> para a segurada que perdeu o emprego com carteira assinada</li>
<li><strong>12 meses</strong> para a segurada que parou de contribuir voluntariamente como autônoma</li>
<li><strong>24 meses</strong> para quem já tiver mais de 120 contribuições mensais</li>
<li><strong>36 meses</strong> para desempregadas em situação de desemprego involuntário registrado no Ministério do Trabalho</li>
</ul>
<h2>Outros grupos que têm direito mesmo sem carteira</h2>
<ul>
<li><strong>Trabalhadoras informais inscritas como contribuintes individuais:</strong> que contribuem mensalmente para o INSS e cumpriram a carência de 10 contribuições</li>
<li><strong>Trabalhadoras rurais (seguradas especiais):</strong> que exercem atividade rural em regime de economia familiar — sem necessidade de contribuição mensal</li>
<li><strong>Microempreendedoras individuais (MEI):</strong> que contribuem mensalmente pelo DAS e cumpriram a carência</li>
<li><strong>Donas de casa de baixa renda:</strong> inscritas no CadÚnico e que contribuem com alíquota reduzida de 5%</li>
</ul>
<h2>Quanto tempo dura e quanto é pago</h2>
<p>O salário-maternidade tem duração de 120 dias (4 meses) nos casos de parto. Para trabalhadoras rurais (seguradas especiais), o valor é sempre um salário mínimo. Para as demais, o valor corresponde à média das últimas 12 contribuições, respeitado o teto do INSS.</p>
<h2>O que fazer se o INSS negar</h2>
<p>O INSS frequentemente nega o salário-maternidade alegando carência não cumprida, perda da qualidade de segurada ou documentação insuficiente. Nesses casos:</p>
<ul>
<li>Verifique no extrato do CNIS se todas as suas contribuições foram registradas corretamente</li>
<li>Se o período de graça ainda está ativo, apresente documentação do desligamento do emprego</li>
<li>Recorra administrativamente no prazo de 30 dias</li>
<li>Se necessário, busque orientação jurídica para ação nos Juizados Especiais Federais</li>
</ul>
<p>O salário-maternidade é um direito que muitas mulheres deixam de receber simplesmente por desconhecimento. Não abra mão sem antes consultar um especialista.</p>'
WHERE title ILIKE '%salário-maternidade%desempregada%' OR title ILIKE '%salario-maternidade%desempregada%';
