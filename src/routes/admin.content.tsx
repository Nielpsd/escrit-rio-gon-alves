import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Save } from "lucide-react";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/admin/content")({
  loader: async () => {
    const { data } = await supabase.from("site_content").select("*");
    const map: Record<string, string> = {};
    for (const row of data ?? []) map[row.chave] = row.valor;
    return { content: map };
  },
  component: AdminContent,
});

const FIELDS = [
  { chave: "hero_titulo", label: "Hero — Título principal", multiline: false },
  { chave: "hero_descricao", label: "Hero — Descrição", multiline: true },
  { chave: "sobre_resumo", label: "Sobre — Parágrafo principal", multiline: true },
  { chave: "cta_texto", label: "CTA — Texto do botão principal", multiline: false },
  { chave: "whatsapp_numero", label: "WhatsApp — Número (com DDI)", multiline: false },
  { chave: "email_contato", label: "E-mail de contato", multiline: false },
];

function AdminContent() {
  const { content } = Route.useLoaderData();
  const navigate = useNavigate();
  const [values, setValues] = useState<Record<string, string>>(content);
  const [saving, setSaving] = useState(false);

  function set(chave: string, valor: string) {
    setValues((v) => ({ ...v, [chave]: valor }));
  }

  async function handleSave() {
    setSaving(true);
    const upserts = FIELDS.map(({ chave }) => ({
      chave,
      valor: values[chave] ?? "",
    }));
    await supabase.from("site_content").upsert(upserts, { onConflict: "chave" });
    setSaving(false);
    navigate({ to: "/admin/content" });
  }

  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-semibold text-[var(--navy)]">Conteúdo do site</h1>
        <p className="mt-1 text-sm text-[var(--text-muted)]">
          Edite textos e informações que aparecem no site público.
        </p>
      </div>

      <div className="space-y-5">
        {FIELDS.map(({ chave, label, multiline }) => (
          <div key={chave} className="space-y-1.5">
            <label className="text-xs font-medium text-[var(--text)]">{label}</label>
            {multiline ? (
              <textarea
                value={values[chave] ?? ""}
                onChange={(e) => set(chave, e.target.value)}
                rows={3}
                className="input resize-none"
              />
            ) : (
              <input
                value={values[chave] ?? ""}
                onChange={(e) => set(chave, e.target.value)}
                className="input"
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-8">
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--navy)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--navy-mid)] disabled:opacity-50 transition-colors"
        >
          <Save size={16} /> {saving ? "Salvando…" : "Salvar alterações"}
        </button>
      </div>
    </div>
  );
}
