import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Save } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { CATEGORIAS } from "@/lib/posts";

export const Route = createFileRoute("/admin/blog/new")({
  component: AdminNewPost,
});

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

function AdminNewPost() {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    tag: CATEGORIAS[1],
    author: "Dr. Renan Gonçalves",
    read_time: "5 min",
    image: "",
    published: false,
    published_at: new Date().toISOString().slice(0, 10),
  });

  function set(key: string, value: string | boolean) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSave(publish: boolean) {
    setSaving(true);
    const { error } = await supabase.from("posts").insert({
      ...form,
      slug: slugify(form.title),
      published: publish,
      published_at: form.published_at,
    });
    setSaving(false);
    if (!error) navigate({ to: "/admin/blog" });
  }

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <Link to="/admin/blog" className="text-[var(--text-light)] hover:text-[var(--navy)] transition-colors">
          <ArrowLeft size={18} />
        </Link>
        <h1 className="font-display text-2xl font-semibold text-[var(--navy)]">Novo post</h1>
      </div>

      <PostForm form={form} set={set} />

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => handleSave(false)}
          disabled={saving || !form.title}
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-white px-4 py-2.5 text-sm font-medium text-[var(--navy)] hover:bg-[var(--surface)] disabled:opacity-50 transition-colors"
        >
          <Save size={16} /> Salvar rascunho
        </button>
        <button
          onClick={() => handleSave(true)}
          disabled={saving || !form.title}
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--navy)] px-4 py-2.5 text-sm font-medium text-white hover:bg-[var(--navy-mid)] disabled:opacity-50 transition-colors"
        >
          Publicar
        </button>
      </div>
    </div>
  );
}

export function PostForm({
  form,
  set,
}: {
  form: Record<string, string | boolean>;
  set: (key: string, value: string | boolean) => void;
}) {
  return (
    <div className="space-y-5">
      <Field label="Título">
        <input
          value={form.title as string}
          onChange={(e) => set("title", e.target.value)}
          className="input"
          placeholder="Título do artigo"
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Categoria">
          <select value={form.tag as string} onChange={(e) => set("tag", e.target.value)} className="input">
            {CATEGORIAS.filter((c) => c !== "Todos").map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </Field>
        <Field label="Tempo de leitura">
          <input
            value={form.read_time as string}
            onChange={(e) => set("read_time", e.target.value)}
            className="input"
            placeholder="5 min"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Autor">
          <input
            value={form.author as string}
            onChange={(e) => set("author", e.target.value)}
            className="input"
          />
        </Field>
        <Field label="Data de publicação">
          <input
            type="date"
            value={form.published_at as string}
            onChange={(e) => set("published_at", e.target.value)}
            className="input"
          />
        </Field>
      </div>

      <Field label="URL da imagem de capa">
        <input
          value={form.image as string}
          onChange={(e) => set("image", e.target.value)}
          className="input"
          placeholder="https://images.unsplash.com/..."
        />
        {form.image && (
          <img src={form.image as string} alt="preview" className="mt-2 h-32 w-full rounded-lg object-cover" />
        )}
      </Field>

      <Field label="Resumo">
        <textarea
          value={form.excerpt as string}
          onChange={(e) => set("excerpt", e.target.value)}
          rows={2}
          className="input resize-none"
          placeholder="Breve descrição que aparece nas listagens"
        />
      </Field>

      <Field label="Conteúdo (parágrafos separados por linha em branco)">
        <textarea
          value={form.content as string}
          onChange={(e) => set("content", e.target.value)}
          rows={12}
          className="input resize-y font-mono text-xs"
          placeholder="Escreva aqui o conteúdo do artigo..."
        />
      </Field>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-[var(--text)]">{label}</label>
      {children}
    </div>
  );
}
