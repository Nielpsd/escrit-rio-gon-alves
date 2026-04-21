const ITEMS = [
  "Aposentadoria por Tempo de Contribuição",
  "Aposentadoria por Invalidez",
  "Auxílio-Doença",
  "BPC / LOAS",
  "Pensão por Morte",
  "Revisão do Benefício",
  "Aposentadoria Especial",
  "Benefício Negado pelo INSS",
  "Planejamento Previdenciário",
  "Recursos Administrativos",
];

const SEPARATOR = (
  <span className="mx-6 text-[var(--gold-deep)] select-none" aria-hidden>
    ✦
  </span>
);

function Track() {
  return (
    <div className="flex shrink-0 items-center" aria-hidden>
      {ITEMS.map((item, i) => (
        <span key={i} className="flex items-center whitespace-nowrap text-sm font-medium tracking-wide uppercase">
          {item}
          {SEPARATOR}
        </span>
      ))}
    </div>
  );
}

export function MarqueeStrip() {
  return (
    <div className="relative overflow-hidden bg-[var(--gold)] py-3.5">
      <div
        className="flex w-max animate-[marquee_30s_linear_infinite]"
        style={{ willChange: "transform" }}
      >
        <Track />
        <Track />
      </div>
    </div>
  );
}
