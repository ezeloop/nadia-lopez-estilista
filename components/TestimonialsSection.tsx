"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} estrellas`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill={i < count ? "var(--color-olive-300)" : "var(--color-olive-100)"}
          aria-hidden="true"
        >
          <path d="M6 1l1.24 2.51L10 3.91 8 5.86l.47 2.73L6 7.27 3.53 8.59 4 5.86 2 3.91l2.76-.4L6 1z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="testimonios"
      ref={ref}
      className="section-py relative overflow-hidden"
      style={{ background: "var(--color-cream-200)" }}
    >
      {/* Decorativo */}
      <div
        className="absolute inset-0 pointer-events-none select-none flex items-center justify-center"
        aria-hidden="true"
      >
        <span
          className="text-accent-script"
          style={{
            fontSize: "clamp(8rem, 20vw, 18rem)",
            color: "rgba(168,152,128,0.06)",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          amor
        </span>
      </div>

      <div className="container-site relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="section-tag justify-center"
            style={{ justifyContent: "center" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Clientas felices
          </motion.span>
          <motion.h2
            className="text-display"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "var(--color-charcoal-300)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Lo que dicen{" "}
            <em
              className="text-accent-script"
              style={{ color: "var(--color-olive-400)", fontStyle: "normal" }}
            >
              ellas
            </em>
          </motion.h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={t.id}
              className="card-hover"
              style={{
                background: "var(--color-warm-white)",
                padding: "2rem",
                border: "1px solid rgba(168,152,128,0.15)",
                position: "relative",
              }}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.15 }}
            >
              {/* Quote mark */}
              <span
                className="text-display absolute top-4 right-5 select-none"
                style={{ fontSize: "5rem", color: "rgba(168,152,128,0.1)", lineHeight: 1 }}
                aria-hidden="true"
              >
                "
              </span>

              <Stars count={t.rating} />

              <p
                className="text-body-sans mt-4 mb-6"
                style={{
                  fontSize: "0.92rem",
                  color: "var(--color-charcoal-200)",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                }}
              >
                "{t.quote}"
              </p>

              <footer>
                <div
                  style={{
                    width: "2rem",
                    height: "1px",
                    background: "var(--color-olive-200)",
                    marginBottom: "0.75rem",
                  }}
                />
                <span
                  className="text-display block"
                  style={{ fontSize: "1rem", color: "var(--color-charcoal-300)" }}
                >
                  {t.name}
                </span>
                <span
                  className="text-label block"
                  style={{ color: "var(--color-olive-300)", fontSize: "0.6rem", marginTop: "0.2rem" }}
                >
                  {t.service}
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
