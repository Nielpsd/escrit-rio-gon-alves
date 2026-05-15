import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/admin/")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const { postsCount, messagesCount, unreadCount } = Route.useLoaderData();

  return (
    <div className="p-8">
      <h1 className="font-display text-2xl font-semibold text-[var(--navy)]">Dashboard</h1>
      <p className="mt-1 text-sm text-[var(--text-muted)]">Resumo do site</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        <StatCard label="Posts publicados" value={postsCount} />
        <StatCard label="Mensagens recebidas" value={messagesCount} />
        <StatCard label="Não lidas" value={unreadCount} highlight />
      </div>
    </div>
  );
}

function StatCard({ label, value, highlight }: { label: string; value: number; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl border p-6 ${highlight ? "border-[var(--gold)] bg-[var(--gold-pale)]" : "border-[var(--border)] bg-white"}`}>
      <div className={`font-display text-4xl font-bold ${highlight ? "text-[var(--gold-deep)]" : "text-[var(--navy)]"}`}>
        {value}
      </div>
      <div className="mt-1 text-sm text-[var(--text-muted)]">{label}</div>
    </div>
  );
}
