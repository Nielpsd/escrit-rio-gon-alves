import { createLazyFileRoute, useNavigate, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Save } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { PostForm } from "@/components/admin/PostForm";

export const Route = createLazyFileRoute("/admin/blog/$id")({
  component: AdminEditPost,
});

function toHtml(content: string): string {
  if (!content) return "";
  if (content.trimStart().startsWith("<")) return content;
  return content.split("\n\n").filter(Boolean).map((p) => `<p>${p}</p>`).join("");
}

function AdminEditPost() {
  const { post } = Route.useLoaderData();
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    title: post.title,
    excerpt: post.excerpt,
    content: toHtml(post.content),
    tag: post.tag,
    author: post.author,
    read_time: post.read_time,
    image: post.image ?? "",
    published: post.published,
    published_at: post.published_at.slice(0, 10),
  });

  function set(key: string, value: string | boolean) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSave(publish?: boolean) {
    setSaving(true);
    const updated = publish !== undefined ? { ...form, published: publish } : form;
    await supabase.from("posts").update(updated).eq("id", post.id);
    setSaving(false);
    navigate({ to: "/admin/blog" });
  }

  return (
    <div className="p-8 max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <Link to="/admin/blog" className="text-[var(--text-light)] hover:text-[var(--navy)] transition-colors">
          <ArrowLeft size={18} />
        </Link>
        <h1 className="font-display text-2xl font-semibold text-[var(--navy)]">Editar post</h1>
      </div>

      <PostForm form={form} set={set} />

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => handleSave()}
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-white px-4 py-2.5 text-sm font-medium text-[var(--navy)] hover:bg-[var(--surface)] disabled:opacity-50 transition-colors"
        >
          <Save size={16} /> Salvar
        </button>
        {!form.published && (
          <button
            onClick={() => handleSave(true)}
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--navy)] px-4 py-2.5 text-sm font-medium text-white hover:bg-[var(--navy-mid)] disabled:opacity-50 transition-colors"
          >
            Publicar
          </button>
        )}
        {form.published && (
          <button
            onClick={() => handleSave(false)}
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-white px-4 py-2.5 text-sm text-[var(--text-muted)] hover:bg-[var(--surface)] disabled:opacity-50 transition-colors"
          >
            Despublicar
          </button>
        )}
      </div>
    </div>
  );
}
