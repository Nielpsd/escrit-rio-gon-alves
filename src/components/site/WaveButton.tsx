import * as React from "react";
import { cn } from "@/lib/utils";

type Variant =
  | "primary"
  | "gold"
  | "outline"
  | "outline-gold"
  | "outline-light"
  | "ghost"
  | "ghost-light"
  | "wpp"
  | "white";
type Size = "default" | "sm" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  full?: boolean;
  className?: string;
  children: React.ReactNode;
};

type AsLink = CommonProps & {
  as?: "a";
  href: string;
  target?: string;
  rel?: string;
};
type AsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { as: "button" };

export type WaveButtonProps = AsLink | AsButton;

function classes(variant: Variant = "primary", size: Size = "default", full?: boolean) {
  return cn(
    "btn",
    `btn-${variant}`,
    size === "sm" && "btn-sm",
    size === "lg" && "btn-lg",
    full && "btn-full",
  );
}

export function WaveButton(props: WaveButtonProps) {
  const { variant = "primary", size = "default", full, className, children } = props;
  const cls = cn(classes(variant, size, full), className);

  if ((props as AsButton).as === "button") {
    const { as: _a, variant: _v, size: _s, full: _f, className: _c, children: _ch, ...rest } =
      props as AsButton;
    void _a; void _v; void _s; void _f; void _c; void _ch;
    return (
      <button className={cls} {...rest}>
        <span className="btn-l1" />
        <span className="btn-l2" />
        <span className="btn-inner">{children}</span>
      </button>
    );
  }

  const { href, target, rel } = props as AsLink;
  return (
    <a className={cls} href={href} target={target} rel={rel}>
      <span className="btn-l1" />
      <span className="btn-l2" />
      <span className="btn-inner">{children}</span>
    </a>
  );
}
