export const CATEGORIAS = [
  "Todos",
  "Aposentadoria",
  "Auxílio-Doença",
  "BPC/LOAS",
  "Trabalhador Rural",
  "Pensão por Morte",
  "Revisão de Benefícios",
  "Salário-Maternidade",
  "Benefícios",
  "Pensão",
] as const;

export type Categoria = (typeof CATEGORIAS)[number];

export type Post = {
  slug: string;
  tag: Categoria;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  content: string[];
};

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

const RAW: Omit<Post, "slug">[] = [
  {
    tag: "Aposentadoria",
    title: "Quanto paga o INSS para a maioria dos brasileiros? Entenda.",
    excerpt:
      "O valor médio dos benefícios pode te surpreender. Veja como funciona o cálculo e o que você pode fazer para receber mais.",
    date: "14/01/2025",
    author: "Dr. Renan Gonçalves",
    readTime: "5 min",
    content: [
      "A maioria dos aposentados brasileiros recebe valores próximos ao salário mínimo, mesmo após décadas de contribuição. Isso acontece por causa da forma como o INSS calcula a média dos seus salários e aplica o fator previdenciário.",
      "Neste artigo, explicamos passo a passo como o cálculo é feito, quais regras de transição podem ser mais vantajosas para o seu caso e o que você pode fazer hoje para garantir um benefício maior no futuro.",
      "Se você já está aposentado, ainda pode ser possível solicitar uma revisão. Procure orientação especializada antes de aceitar o valor concedido pelo INSS.",
    ],
  },
  {
    tag: "Benefícios",
    title: "Lula veta projeto que equipara diabetes tipo 1 a deficiência",
    excerpt:
      "O que muda na prática para portadores de diabetes que buscavam direitos previdenciários equiparados.",
    date: "14/01/2025",
    author: "Equipe Gonçalves",
    readTime: "4 min",
    content: [
      "O veto presidencial impacta diretamente milhões de brasileiros que esperavam ter acesso facilitado a benefícios como aposentadoria por deficiência e isenções tributárias.",
      "Apesar do veto, ainda é possível buscar reconhecimento individual da deficiência via perícia médica, garantindo direitos previdenciários específicos.",
    ],
  },
  {
    tag: "Pensão",
    title: "Lula vetou pensão para mães de crianças com anencefalia. Entenda!",
    excerpt:
      "Decisão impacta diretamente famílias que aguardavam a sanção da lei. Saiba o que ainda é possível buscar.",
    date: "13/01/2025",
    author: "Equipe Gonçalves",
    readTime: "6 min",
    content: [
      "Mesmo com o veto, mães em situação de vulnerabilidade podem buscar o BPC/LOAS e outros amparos assistenciais.",
      "Cada caso deve ser analisado individualmente para identificar o melhor caminho jurídico.",
    ],
  },
  {
    tag: "Trabalhador Rural",
    title: "Trabalhador rural sem carteira tem direito à aposentadoria?",
    excerpt:
      "Mesmo sem registro formal, é possível comprovar a atividade rural e garantir o benefício. Veja como.",
    date: "10/01/2025",
    author: "Dr. Renan Gonçalves",
    readTime: "7 min",
    content: [
      "A atividade rural pode ser comprovada por documentos como notas fiscais de produtor, declarações sindicais, contratos de parceria e testemunhas.",
      "O segurado especial tem direito à aposentadoria por idade aos 60 anos (homem) ou 55 anos (mulher), com 15 anos de atividade rural comprovada.",
    ],
  },
  {
    tag: "Auxílio-Doença",
    title: "O INSS negou seu auxílio-doença? Veja o que fazer agora",
    excerpt:
      "Negativa não é o fim do caminho. Entenda os próximos passos administrativos e judiciais para garantir seu direito.",
    date: "08/01/2025",
    author: "Dra. Mariana Gonçalves",
    readTime: "5 min",
    content: [
      "Após uma negativa, é possível entrar com recurso administrativo no prazo de 30 dias ou ingressar diretamente com ação judicial.",
      "Reúna laudos médicos atualizados, exames e atestados que comprovem a incapacidade para o trabalho.",
    ],
  },
  {
    tag: "Revisão de Benefícios",
    title: "Revisão da vida toda: ainda dá tempo de pedir?",
    excerpt:
      "Após decisões recentes do STF, muitos aposentados ainda têm direito à revisão. Confira se é o seu caso.",
    date: "05/01/2025",
    author: "Dr. Renan Gonçalves",
    readTime: "8 min",
    content: [
      "A revisão da vida toda permite incluir contribuições anteriores a julho de 1994 no cálculo do benefício, o que pode aumentar significativamente o valor.",
      "É importante avaliar se a revisão realmente é vantajosa antes de protocolar o pedido.",
    ],
  },
  {
    tag: "BPC/LOAS",
    title: "BPC/LOAS: quem tem direito ao benefício de R$ 1.412 do governo?",
    excerpt:
      "Idosos e pessoas com deficiência em situação de vulnerabilidade podem receber o BPC. Veja os requisitos atualizados.",
    date: "03/01/2025",
    author: "Equipe Gonçalves",
    readTime: "6 min",
    content: [
      "O BPC é um benefício assistencial pago a idosos com 65 anos ou mais e a pessoas com deficiência de qualquer idade, desde que a renda familiar per capita seja inferior a 1/4 do salário mínimo.",
      "Não exige contribuição prévia ao INSS, mas precisa de inscrição no CadÚnico atualizada.",
    ],
  },
  {
    tag: "Salário-Maternidade",
    title: "Salário-maternidade: desempregada também tem direito?",
    excerpt:
      "Mesmo sem vínculo ativo, é possível receber o benefício durante o período de graça. Entenda as regras.",
    date: "30/12/2024",
    author: "Dra. Mariana Gonçalves",
    readTime: "5 min",
    content: [
      "Durante o período de graça (12 a 36 meses após a última contribuição), a segurada mantém o direito ao salário-maternidade.",
      "Trabalhadoras informais também podem se inscrever como contribuintes individuais para garantir o benefício.",
    ],
  },
];

export const POSTS: Post[] = RAW.map((p) => ({ ...p, slug: slugify(p.title) }));

export const MAIS_LIDOS = [
  "Quanto paga o INSS para a maioria dos brasileiros?",
  "Trabalhador rural sem carteira tem direito à aposentadoria?",
  "O INSS negou. O que fazer agora?",
];

export function getPostBySlug(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
