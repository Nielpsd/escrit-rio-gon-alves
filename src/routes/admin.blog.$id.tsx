import { createFileRoute, notFound } from "@tanstack/react-router";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/admin/blog/$id")({
  loader: async ({ params }) => {
    const { data } = await supabase.from("posts").select("*").eq("id", params.id).maybeSingle();
    if (!data) throw notFound();
    return { post: data };
  },
});
