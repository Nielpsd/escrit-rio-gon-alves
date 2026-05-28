import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function PhoneCopyButton({ phone }: { phone: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(phone).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-sm text-white/55 hover:text-[var(--gold-light)] transition-colors"
      title="Copiar número"
    >
      {copied ? (
        <>
          <Check size={13} className="text-green-400" />
          <span className="text-green-400">Copiado!</span>
        </>
      ) : (
        <>
          <Copy size={13} />
          {phone}
        </>
      )}
    </button>
  );
}
