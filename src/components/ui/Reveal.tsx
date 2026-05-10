"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animateIn?: boolean;
  y?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  animateIn = false,
  y = 14,
}: RevealProps) {
  return (
    <motion.div
      initial={animateIn ? { opacity: 0, y } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
