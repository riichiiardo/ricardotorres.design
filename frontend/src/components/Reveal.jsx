import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, className = "", ...rest }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    {...rest}
  >
    {children}
  </motion.div>
);

export const MaskedLines = ({ lines, className = "", lineClassName = "", accentIndex = -1, accentClassName = "font-accent italic font-medium text-brand", as: Tag = "h1", delay = 0.15 }) => {
  const MotionTag = motion[Tag] || motion.h1;
  return (
    <MotionTag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className={`block ${i === accentIndex ? accentClassName : ""} ${lineClassName}`}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
};

export const SectionHead = ({ overline, title, lead, id }) => (
  <Reveal className="max-w-3xl">
    <p data-testid={id ? `${id}-overline` : undefined} className="font-mono text-xs uppercase tracking-[0.25em] text-brand font-medium mb-4">
      {overline}
    </p>
    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-[1.1]">
      {title}
    </h2>
    {lead && <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">{lead}</p>}
  </Reveal>
);
