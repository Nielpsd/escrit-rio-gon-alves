import { createFileRoute } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/admin/content")({
  loader: async () => {
    const { data } = await supabase.from("site_content").select("*");
    const map: Record<string, string> = {};
    for (const row of data ?? []) map[row.chave] = row.valor;
    return { content: map };
  },
});
