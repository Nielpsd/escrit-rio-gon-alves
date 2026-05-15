import { createLazyFileRoute, Outlet, Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { BookOpen, FileText, LayoutDashboard, LogOut, MessageSquare, Settings } from "lucide-react";
import { supabase } from "@/lib/supabase";

export const Route = createLazyFileRoute("/admin")({
  component: AdminLayout,
});

const NAV = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/admin/blog", label: "Blog", icon: BookOpen, exact: false },
  { to: "/admin/messages", label: "Mensagens", icon: MessageSquare, exact: false },
  { to: "/admin/content", label: "Conteúdo", icon: FileText, exact: false },
] as const;

function AdminLayout() {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  async function handleSignOut() {
    await supabase.auth.signOut();
    navigate({ to: "/login" });
  }

  return (
    <div className="flex min-h-screen bg-[var(--surface)]">
      <aside className="flex w-60 flex-col border-r border-[var(--border)] bg-white">
        <div className="flex items-center gap-3 border-b border-[var(--border)] px-5 py-4">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--navy)] font-display text-lg font-bold text-[var(--gold-light)]">
            G
          </div>
          <div>
            <div className="text-xs font-semibold text-[var(--navy)]">Escritório Gonçalves</div>
            <div className="text-[10px] text-[var(--text-light)]">Admin</div>
          </div>
        </div>

        <nav className="flex-1 space-y-0.5 p-3">
          {NAV.map(({ to, label, icon: Icon, exact }) => {
            const active = exact ? pathname === to : pathname.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                className={[
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                  active
                    ? "bg-[var(--navy)] text-white"
                    : "text-[var(--text-muted)] hover:bg-[var(--surface)] hover:text-[var(--navy)]",
                ].join(" ")}
              >
                <Icon size={16} />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-[var(--border)] p-3">
          <Link
            to="/admin/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[var(--text-muted)] hover:bg-[var(--surface)] hover:text-[var(--navy)] transition-colors"
          >
            <Settings size={16} /> Configurações
          </Link>
          <button
            onClick={handleSignOut}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[var(--text-muted)] hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <LogOut size={16} /> Sair
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
