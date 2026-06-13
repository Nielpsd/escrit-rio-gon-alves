# Sistema de Metas 2026 – Gonçalves Advogados

Sistema local em HTML/CSS/JS para controle de pontuação e bonificações da equipe.

## Como usar

Abra o arquivo `metas/index.html` diretamente no navegador (Chrome ou Edge recomendado). Não precisa de servidor.

## Abas

| Aba | Função |
|---|---|
| **Dashboard** | KPIs do mês, ranking, destaques e últimos lançamentos |
| **Lançar Pontos** | Formulário de registro com cálculo automático |
| **Histórico** | Todos os lançamentos com filtros, edição e exclusão |
| **Colaboradores** | Cadastro e gerenciamento da equipe |
| **Relatórios** | Resumo por período + exportação CSV |

## Regras implementadas

- Pontuação por tipo de benefício: 1,00 / 0,75 / 0,50 ponto
- Bônus sentença rápida (≤150 dias): +0,25 ou +0,10 (para processos de 0,5 pt)
- Bônus sentença total: +0,25
- Liminar importante (≤60 dias): 1 ponto fixo
- RPV rápido (≤165 dias): 1 ponto fixo
- Acórdão sem sustentação oral: 1,5 pts / R$ 150
- Acórdão com sustentação oral: 2,5 pts / R$ 250
- Concessão administrativa: repete pontuação da montagem
- Bônus destaque do mês: R$ 500 a cada 10 pontos de protocolo (cumulativo)
- Prazos rápidos calculados automaticamente pelas datas informadas

## Dados

Tudo é armazenado no `localStorage` do navegador. Para backup, use a exportação CSV.

## Exportação CSV

O separador do CSV é `;` (ponto e vírgula), compatível com Excel e Google Sheets.
Ao abrir no Excel: Dados → De Texto/CSV → separador `;`.
