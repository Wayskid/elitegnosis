import { motion } from "framer-motion";

import React from "react";

export default function Reveal({
  children,
  className,
  id,
}: {
  children?: React.JSX.Element;
  className?: string;
  id?: string;
}) {
  return (
    <motion.div
      initial={{ translateY: 70, opacity: 0 }}
      whileInView={{
        translateY: 0,
        opacity: 1,
        transition: { type: "easeInOut", delay: 0.3 },
      }}
      viewport={{ once: true }}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({
  children,
  className,
}: {
  children?: React.JSX.Element;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ translateX: 200, opacity: 0 }}
      whileInView={{
        translateX: 0,
        opacity: 1,
        transition: { type: "easeInOut", delay: 0.3 },
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
