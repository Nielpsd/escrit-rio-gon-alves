import { createFileRoute } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/admin/blog/")({
  loader: async () => {
    const { data } = await supabase
      .from("posts")
      .select("id, slug, title, tag, published, published_at, author")
      .order("created_at", { ascending: false });
    return { posts: data ?? [] };
  },
});
