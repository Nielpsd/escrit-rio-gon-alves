-- Execute no Supabase: painel → SQL Editor → New query

-- Tabela de posts do blog
create table if not exists public.posts (
  id           uuid primary key default gen_random_uuid(),
  slug         text not null unique,
  title        text not null,
  excerpt      text not null default '',
  content      text not null default '',
  tag          text not null default 'Aposentadoria',
  author       text not null default 'Dr. Renan Gonçalves',
  read_time    text not null default '5 min',
  published    boolean not null default false,
  published_at timestamptz not null default now(),
  created_at   timestamptz not null default now()
);

-- Tabela de mensagens do formulário de contato
create table if not exists public.messages (
  id         uuid primary key default gen_random_uuid(),
  nome       text not null,
  telefone   text,
  assunto    text,
  mensagem   text not null,
  lida       boolean not null default false,
  created_at timestamptz not null default now()
);

-- Tabela de conteúdo editável do site
create table if not exists public.site_content (
  chave      text primary key,
  valor      text not null default '',
  updated_at timestamptz not null default now()
);

-- RLS: somente usuários autenticados (admin) gerenciam posts e mensagens
alter table public.posts enable row level security;
alter table public.messages enable row level security;
alter table public.site_content enable row level security;

-- Posts: leitura pública para posts publicados
create policy "posts_public_read" on public.posts
  for select using (published = true);

-- Posts: admin pode tudo
create policy "posts_admin_all" on public.posts
  for all using (auth.role() = 'authenticated');

-- Mensagens: qualquer pessoa pode inserir (envio do formulário)
create policy "messages_public_insert" on public.messages
  for insert with check (true);

-- Mensagens: apenas admin pode ler e atualizar
create policy "messages_admin_read" on public.messages
  for select using (auth.role() = 'authenticated');

create policy "messages_admin_update" on public.messages
  for update using (auth.role() = 'authenticated');

-- Conteúdo do site: leitura pública, escrita autenticada
create policy "site_content_public_read" on public.site_content
  for select using (true);

create policy "site_content_admin_write" on public.site_content
  for all using (auth.role() = 'authenticated');
