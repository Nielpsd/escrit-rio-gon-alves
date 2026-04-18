import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import * as React from "react";

/* =====================================================
   Sistema de animações — Escritório Gonçalves
   Variants reutilizáveis + componentes wrapper para
   animações de entrada, scroll reveal e stagger.
   ===================================================== */

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE } },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

type RevealProps = HTMLMotionProps<"div"> & {
  variant?: "fadeUp" | "fadeIn" | "scaleIn" | "slideInLeft" | "slideInRight";
  delay?: number;
  amount?: number;
  once?: boolean;
};

const variantsMap = {
  fadeUp,
  fadeIn,
  scaleIn,
  slideInLeft,
  slideInRight,
};

/** Reveal: anima o filho quando entra na viewport. */
export function Reveal({
  variant = "fadeUp",
  delay = 0,
  amount = 0.2,
  once = true,
  children,
  ...rest
}: RevealProps) {
  const v = variantsMap[variant];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={v}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Stagger: anima filhos em cascata. Use com <StaggerItem>. */
export function Stagger({
  amount = 0.15,
  once = true,
  children,
  ...rest
}: HTMLMotionProps<"div"> & { amount?: number; once?: boolean }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={staggerContainer}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  variant = "fadeUp",
  children,
  ...rest
}: HTMLMotionProps<"div"> & {
  variant?: "fadeUp" | "fadeIn" | "scaleIn" | "slideInLeft" | "slideInRight";
}) {
  return (
    <motion.div variants={variantsMap[variant]} {...rest}>
      {children}
    </motion.div>
  );
}

/** PageTransition: animação de entrada da página. */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
