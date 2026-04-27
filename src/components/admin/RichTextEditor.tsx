import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";
import {
  Bold, Italic, Underline as UnderlineIcon, Strikethrough,
  Heading2, Heading3, List, ListOrdered, Quote, Minus,
  Link as LinkIcon, LinkOff, Undo, Redo, Code, RemoveFormatting,
} from "lucide-react";

interface Props {
  value: string;
  onChange: (html: string) => void;
}

export function RichTextEditor({ value, onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
      }),
      Underline,
      CharacterCount,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: "text-[var(--gold)] underline underline-offset-2" },
      }),
      Placeholder.configure({
        placeholder: "Escreva o conteúdo do artigo aqui...",
      }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class: "prose prose-sm max-w-none min-h-[320px] px-4 py-3 focus:outline-none",
      },
    },
  });

  if (!editor) return null;

  function addLink() {
    const url = window.prompt("URL do link:");
    if (url) editor?.chain().focus().setLink({ href: url }).run();
  }

  const tools: Array<{
    label: string;
    icon: React.ReactNode;
    action: () => void;
    active?: boolean;
    disabled?: boolean;
  }> = [
    {
      label: "Desfazer",
      icon: <Undo size={14} />,
      action: () => editor.chain().focus().undo().run(),
      disabled: !editor.can().undo(),
    },
    {
      label: "Refazer",
      icon: <Redo size={14} />,
      action: () => editor.chain().focus().redo().run(),
      disabled: !editor.can().redo(),
    },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-[var(--border)] bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 border-b border-[var(--border)] bg-[var(--surface)] px-2 py-1.5">
        {/* Histórico */}
        <ToolGroup>
          <ToolBtn label="Desfazer" disabled={!editor.can().undo()} onClick={() => editor.chain().focus().undo().run()}>
            <Undo size={14} />
          </ToolBtn>
          <ToolBtn label="Refazer" disabled={!editor.can().redo()} onClick={() => editor.chain().focus().redo().run()}>
            <Redo size={14} />
          </ToolBtn>
        </ToolGroup>

        <Divider />

        {/* Formatação inline */}
        <ToolGroup>
          <ToolBtn label="Negrito" active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}>
            <Bold size={14} />
          </ToolBtn>
          <ToolBtn label="Itálico" active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}>
            <Italic size={14} />
          </ToolBtn>
          <ToolBtn label="Sublinhado" active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()}>
            <UnderlineIcon size={14} />
          </ToolBtn>
          <ToolBtn label="Tachado" active={editor.isActive("strike")} onClick={() => editor.chain().focus().toggleStrike().run()}>
            <Strikethrough size={14} />
          </ToolBtn>
          <ToolBtn label="Código inline" active={editor.isActive("code")} onClick={() => editor.chain().focus().toggleCode().run()}>
            <Code size={14} />
          </ToolBtn>
        </ToolGroup>

        <Divider />

        {/* Títulos */}
        <ToolGroup>
          <ToolBtn label="Título H2" active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
            <Heading2 size={14} />
          </ToolBtn>
          <ToolBtn label="Título H3" active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
            <Heading3 size={14} />
          </ToolBtn>
        </ToolGroup>

        <Divider />

        {/* Listas */}
        <ToolGroup>
          <ToolBtn label="Lista com marcadores" active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}>
            <List size={14} />
          </ToolBtn>
          <ToolBtn label="Lista numerada" active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}>
            <ListOrdered size={14} />
          </ToolBtn>
        </ToolGroup>

        <Divider />

        {/* Blocos */}
        <ToolGroup>
          <ToolBtn label="Citação" active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}>
            <Quote size={14} />
          </ToolBtn>
          <ToolBtn label="Linha divisória" onClick={() => editor.chain().focus().setHorizontalRule().run()}>
            <Minus size={14} />
          </ToolBtn>
        </ToolGroup>

        <Divider />

        {/* Link */}
        <ToolGroup>
          <ToolBtn label="Inserir link" active={editor.isActive("link")} onClick={addLink}>
            <LinkIcon size={14} />
          </ToolBtn>
          <ToolBtn label="Remover link" disabled={!editor.isActive("link")} onClick={() => editor.chain().focus().unsetLink().run()}>
            <LinkOff size={14} />
          </ToolBtn>
        </ToolGroup>

        <Divider />

        <ToolGroup>
          <ToolBtn label="Remover formatação" onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}>
            <RemoveFormatting size={14} />
          </ToolBtn>
        </ToolGroup>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} />

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[11px] text-[var(--text-light)]">
        <span>{editor.storage.characterCount.words()} palavras</span>
        <span>{editor.storage.characterCount.characters()} caracteres</span>
      </div>
    </div>
  );
}

function ToolGroup({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-0.5">{children}</div>;
}

function Divider() {
  return <div className="mx-1 h-4 w-px bg-[var(--border)]" />;
}

function ToolBtn({
  children,
  label,
  active,
  disabled,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      title={label}
      disabled={disabled}
      onClick={onClick}
      className={[
        "grid h-7 w-7 place-items-center rounded-md transition-colors",
        active
          ? "bg-[var(--navy)] text-white"
          : "text-[var(--text-muted)] hover:bg-[var(--navy-light)] hover:text-[var(--navy)]",
        disabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
