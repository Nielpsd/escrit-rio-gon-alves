import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowLeft, Save, Upload, X } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { CATEGORIAS } from "@/lib/posts";
import { RichTextEditor } from "@/components/admin/RichTextEditor";

export const Route = createFileRoute("/admin/blog/new")({
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

      <Field label="Imagem de capa">
        <ImageUpload
          value={form.image as string}
          onChange={(url) => set("image", url)}
        />
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

      <Field label="Conteúdo">
        <RichTextEditor
          value={form.content as string}
          onChange={(html) => set("content", html)}
        />
      </Field>
    </div>
  );
}

function ImageUpload({ value, onChange }: { value: string; onChange: (url: string) => void }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);

  async function uploadFile(file: File) {
    if (!file.type.startsWith("image/")) {
      setError("Apenas imagens são aceitas.");
      return;
    }
    setUploading(true);
    setError("");
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}.${ext}`;
    const { data, error: upErr } = await supabase.storage
      .from("post-images")
      .upload(path, file, { upsert: true });
    if (upErr || !data) {
      setError("Erro ao fazer upload. Verifique se o bucket 'post-images' existe e é público.");
      setUploading(false);
      return;
    }
    const { data: { publicUrl } } = supabase.storage.from("post-images").getPublicUrl(data.path);
    onChange(publicUrl);
    setUploading(false);
  }

  function handleFiles(files: FileList | null) {
    if (files && files[0]) uploadFile(files[0]);
  }

  function handlePaste(e: React.ClipboardEvent) {
    const file = Array.from(e.clipboardData.items)
      .find((i) => i.type.startsWith("image/"))
      ?.getAsFile();
    if (file) uploadFile(file);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    handleFiles(e.dataTransfer.files);
  }

  if (value) {
    return (
      <div className="relative">
        <img src={value} alt="capa" className="h-48 w-full rounded-xl object-cover border border-[var(--border)]" />
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-2 top-2 rounded-full bg-black/60 p-1 text-white hover:bg-black/80 transition-colors"
        >
          <X size={14} />
        </button>
      </div>
    );
  }

  return (
    <div
      onPaste={handlePaste}
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      onClick={() => fileRef.current?.click()}
      className={[
        "relative flex h-40 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed transition-colors",
        dragging
          ? "border-[var(--navy)] bg-[var(--navy-light)]"
          : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--navy)] hover:bg-[var(--navy-light)]",
      ].join(" ")}
    >
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
      {uploading ? (
        <p className="text-sm text-[var(--text-muted)]">Enviando...</p>
      ) : (
        <>
          <Upload size={24} className="text-[var(--text-light)]" />
          <p className="text-sm font-medium text-[var(--text-muted)]">
            Clique, arraste ou cole uma imagem
          </p>
          <p className="text-xs text-[var(--text-light)]">PNG, JPG, WEBP</p>
        </>
      )}
      {error && (
        <p className="absolute bottom-2 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}

export function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-[var(--text)]">{label}</label>
      {children}
    </div>
  );
}
