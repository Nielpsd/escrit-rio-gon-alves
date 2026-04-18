import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Plus, Pencil, Trash2, Eye, EyeOff } from "lucide-react";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/admin/blog/")({
  loader: async () => {
    const { data } = await supabase
      .from("posts")
      .select("id, slug, title, tag, published, published_at, author")
      .order("created_at", { ascending: false });
    return { posts: data ?? [] };
  },
  component: AdminBlogList,
});

function AdminBlogList() {
  const { posts } = Route.useLoaderData();
  const navigate = useNavigate();

  async function togglePublished(id: string, current: boolean) {
    await supabase.from("posts").update({ published: !current }).eq("id", id);
    navigate({ to: "/admin/blog" });
  }

  async function deletePost(id: string) {
    if (!confirm("Excluir este post?")) return;
    await supabase.from("posts").delete().eq("id", id);
    navigate({ to: "/admin/blog" });
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-semibold text-[var(--navy)]">Blog</h1>
          <p className="mt-1 text-sm text-[var(--text-muted)]">{posts.length} artigos</p>
        </div>
        <Link
          to="/admin/blog/new"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--navy)] px-4 py-2.5 text-sm font-medium text-white hover:bg-[var(--navy-mid)] transition-colors"
        >
          <Plus size={16} /> Novo post
        </Link>
      </div>

      <div className="rounded-2xl border border-[var(--border)] bg-white overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--surface)]">
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-light)]">Título</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-light)]">Categoria</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-light)]">Status</th>
              <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[var(--text-light)]">Data</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {posts.map((p) => (
              <tr key={p.id} className="border-b border-[var(--border)] last:border-b-0 hover:bg-[var(--surface)/50]">
                <td className="px-5 py-4 font-medium text-[var(--navy)]">{p.title}</td>
                <td className="px-5 py-4 text-[var(--text-muted)]">{p.tag}</td>
                <td className="px-5 py-4">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${
                    p.published
                      ? "bg-green-50 text-green-700"
                      : "bg-[var(--surface)] text-[var(--text-light)]"
                  }`}>
                    {p.published ? "Publicado" : "Rascunho"}
                  </span>
                </td>
                <td className="px-5 py-4 text-[var(--text-muted)]">
                  {new Date(p.published_at).toLocaleDateString("pt-BR")}
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1 justify-end">
                    <button
                      onClick={() => togglePublished(p.id, p.published)}
                      title={p.published ? "Despublicar" : "Publicar"}
                      className="p-1.5 rounded-md text-[var(--text-light)] hover:text-[var(--navy)] hover:bg-[var(--surface)] transition-colors"
                    >
                      {p.published ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                    <Link
                      to="/admin/blog/$id"
                      params={{ id: p.id }}
                      className="p-1.5 rounded-md text-[var(--text-light)] hover:text-[var(--navy)] hover:bg-[var(--surface)] transition-colors"
                    >
                      <Pencil size={14} />
                    </Link>
                    <button
                      onClick={() => deletePost(p.id)}
                      className="p-1.5 rounded-md text-[var(--text-light)] hover:text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr>
                <td colSpan={5} className="px-5 py-12 text-center text-sm text-[var(--text-muted)]">
                  Nenhum post ainda.{" "}
                  <Link to="/admin/blog/new" className="text-[var(--navy)] underline underline-offset-4">
                    Criar o primeiro
                  </Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
