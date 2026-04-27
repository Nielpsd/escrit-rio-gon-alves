export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string;
          slug: string;
          title: string;
          excerpt: string;
          content: string;
          tag: string;
          author: string;
          read_time: string;
          image: string;
          published: boolean;
          published_at: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          excerpt?: string;
          content?: string;
          tag?: string;
          author?: string;
          read_time?: string;
          image?: string;
          published?: boolean;
          published_at?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          excerpt?: string;
          content?: string;
          tag?: string;
          author?: string;
          read_time?: string;
          image?: string;
          published?: boolean;
          published_at?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      messages: {
        Row: {
          id: string;
          nome: string;
          telefone: string | null;
          assunto: string | null;
          mensagem: string;
          lida: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          nome: string;
          telefone?: string | null;
          assunto?: string | null;
          mensagem: string;
          lida?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          nome?: string;
          telefone?: string | null;
          assunto?: string | null;
          mensagem?: string;
          lida?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
      site_content: {
        Row: {
          chave: string;
          valor: string;
          updated_at: string;
        };
        Insert: {
          chave: string;
          valor: string;
          updated_at?: string;
        };
        Update: {
          chave?: string;
          valor?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
