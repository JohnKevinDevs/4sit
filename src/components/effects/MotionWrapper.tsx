"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MotionWrapperProps extends HTMLMotionProps<"div"> {
  delay?: number;
  animateIn?: boolean;
  y?: number;
}

export function MotionWrapper({
  children,
  className,
  delay = 0,
  animateIn = false,
  y = 18,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      initial={animateIn ? { opacity: 0, y } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
