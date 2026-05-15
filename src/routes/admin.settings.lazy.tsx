import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/admin/settings")({
  component: AdminSettings,
});

function AdminSettings() {
  return (
    <div className="p-8 max-w-2xl">
      <h1 className="font-display text-2xl font-semibold text-[var(--navy)]">Configurações</h1>
      <p className="mt-1 text-sm text-[var(--text-muted)]">Em breve.</p>
    </div>
  );
}
