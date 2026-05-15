import { createFileRoute } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/admin/")({
  loader: async () => {
    const [{ count: postsCount }, { count: messagesCount }, { count: unreadCount }] =
      await Promise.all([
        supabase.from("posts").select("*", { count: "exact", head: true }).eq("published", true),
        supabase.from("messages").select("*", { count: "exact", head: true }),
        supabase.from("messages").select("*", { count: "exact", head: true }).eq("lida", false),
      ]);
    return { postsCount: postsCount ?? 0, messagesCount: messagesCount ?? 0, unreadCount: unreadCount ?? 0 };
  },
});
