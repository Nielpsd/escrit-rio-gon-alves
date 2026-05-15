import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { supabase } from "@/lib/supabase";

export const Route = createLazyFileRoute("/admin/messages")({
  component: AdminMessages,
});

function AdminMessages() {
  const { messages } = Route.useLoaderData();
  const navigate = useNavigate();

  const unread = messages.filter((m) => !m.lida).length;

  async function markRead(id: string) {
    await supabase.from("messages").update({ lida: true }).eq("id", id);
    navigate({ to: "/admin/messages" });
  }

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-semibold text-[var(--navy)]">Mensagens</h1>
        <p className="mt-1 text-sm text-[var(--text-muted)]">
          {messages.length} total · {unread} não lidas
        </p>
      </div>

      <div className="space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`rounded-2xl border p-6 ${
              m.lida ? "border-[var(--border)] bg-white" : "border-[var(--gold)]/40 bg-[var(--gold-pale)]"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-display font-semibold text-[var(--navy)]">{m.nome}</span>
                  {m.assunto && (
                    <span className="rounded-full bg-[var(--navy-light)] px-2.5 py-0.5 text-[10px] font-medium text-[var(--navy)]">
                      {m.assunto}
                    </span>
                  )}
                  {!m.lida && (
                    <span className="rounded-full bg-[var(--gold)] px-2.5 py-0.5 text-[10px] font-semibold text-[var(--navy)]">
                      Nova
                    </span>
                  )}
                </div>
                {m.telefone && (
                  <p className="mt-1 text-xs text-[var(--text-light)]">{m.telefone}</p>
                )}
                <p className="mt-3 text-sm text-[var(--text)] leading-relaxed">{m.mensagem}</p>
                <p className="mt-3 text-xs text-[var(--text-light)]">
                  {new Date(m.created_at).toLocaleString("pt-BR")}
                </p>
              </div>

              {!m.lida && (
                <button
                  onClick={() => markRead(m.id)}
                  title="Marcar como lida"
                  className="flex-shrink-0 grid h-8 w-8 place-items-center rounded-full border border-[var(--border)] bg-white text-[var(--text-light)] hover:border-green-500 hover:text-green-600 transition-colors"
                >
                  <Check size={14} />
                </button>
              )}
            </div>
          </div>
        ))}

        {messages.length === 0 && (
          <div className="rounded-2xl border border-[var(--border)] bg-white p-12 text-center text-sm text-[var(--text-muted)]">
            Nenhuma mensagem recebida ainda.
          </div>
        )}
      </div>
    </div>
  );
}
