import { createLazyFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Save } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { CATEGORIAS } from "@/lib/posts";
import { PostForm } from "@/components/admin/PostForm";

export const Route = createLazyFileRoute("/admin/blog/new")({
  component: AdminNewPost,
});

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
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
