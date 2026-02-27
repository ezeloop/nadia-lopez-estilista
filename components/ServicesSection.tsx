"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { SERVICES } from "@/lib/data";
import type { Service } from "@/types";
import { clsx } from "clsx";

const CATEGORIES = [
  { key: "all",        label: "Todos" },
  { key: "color",      label: "Color" },
  { key: "tratamiento", label: "Tratamientos" },
  { key: "peinado",    label: "Peinados" },
  { key: "corte",      label: "Cortes" },
] as const;

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.06 }}
      className="card-hover cursor-pointer"
      style={{
        background: "var(--color-warm-white)",
        border: "1px solid rgba(168,152,128,0.18)",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
      onClick={() => setExpanded(!expanded)}
      role="button"
      aria-expanded={expanded}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setExpanded(!expanded)}
    >
      {/* Número decorativo */}
      <span
        className="text-display absolute top-4 right-5 select-none pointer-events-none"
        style={{
          fontSize: "4rem",
          color: "rgba(168,152,128,0.08)",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Categoría */}
      <span
        className="text-label block mb-3"
        style={{ color: "var(--color-olive-400)", fontSize: "0.58rem" }}
      >
        {service.category}
      </span>

      {/* Nombre */}
      <h3
        className="text-display"
        style={{
          fontSize: "1.5rem",
          color: "var(--color-charcoal-300)",
          marginBottom: "0.4rem",
        }}
      >
        {service.name}
      </h3>

      {/* Tagline */}
      <p
        className="text-body-sans"
        style={{
          fontSize: "1rem",
          color: "var(--color-charcoal-100)",
          fontStyle: "italic",
          marginBottom: "1rem",
        }}
      >
        {service.tagline}
      </p>

      {/* Divider */}
      <div
        style={{
          width: "2.5rem",
          height: "1px",
          background: "var(--color-olive-200)",
          marginBottom: "1rem",
        }}
      />

      {/* Descripción */}
      <p
        className="text-body-sans"
        style={{
          fontSize: "1rem",
          color: "var(--color-charcoal-100)",
          lineHeight: 1.8,
        }}
      >
        {service.description}
      </p>

      {/* Expanded details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: "hidden" }}
          >
            <div className="mt-4 space-y-3">
              {service.technique && (
                <div>
                  <span
                    className="text-label block mb-1"
                    style={{ color: "var(--color-olive-400)", fontSize: "0.58rem" }}
                  >
                    Técnica
                  </span>
                  <p style={{ fontSize: "0.82rem", color: "var(--color-charcoal-100)" }}>
                    {service.technique}
                  </p>
                </div>
              )}
              <div
                style={{
                  background: "var(--color-cream-200)",
                  padding: "0.75rem 1rem",
                  borderLeft: "2px solid var(--color-olive-300)",
                }}
              >
                <span
                  className="text-label block mb-1"
                  style={{ color: "var(--color-olive-400)", fontSize: "0.58rem" }}
                >
                  Beneficio
                </span>
                <p style={{ fontSize: "0.82rem", color: "var(--color-charcoal-200)" }}>
                  {service.benefit}
                </p>
              </div>
              {service.duration && (
                <p
                  className="text-label"
                  style={{ color: "var(--color-charcoal-100)", fontSize: "0.62rem" }}
                >
                  Duración estimada: {service.duration}
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle hint */}
      <div
        className="mt-4 flex items-center gap-2"
        style={{ color: "var(--color-olive-300)" }}
        aria-hidden="true"
      >
        <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-body)", letterSpacing: "0.1em" }}>
          {expanded ? "Cerrar" : "Ver detalle"}
        </span>
        <motion.svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        </motion.svg>
      </div>
    </motion.article>
  );
}

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = activeCategory === "all"
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section
      id="servicios"
      ref={ref}
      className="section-py relative"
      style={{ background: "var(--color-cream-50)" }}
    >
      <div className="container-site">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <motion.span
            className="section-tag"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Servicios
          </motion.span>
          <motion.h2
            className="text-display"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "var(--color-charcoal-300)" }}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Lo que hago,
            <br />
            <em
              className="text-accent-script"
              style={{ fontSize: "1.15em", color: "var(--color-olive-400)", fontStyle: "normal" }}
            >
              con dedicación
            </em>
          </motion.h2>
        </div>

        {/* Filtros */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          role="tablist"
          aria-label="Filtrar servicios por categoría"
        >
          {CATEGORIES.map(({ key, label }) => (
            <button
              key={key}
              role="tab"
              aria-selected={activeCategory === key}
              onClick={() => setActiveCategory(key)}
              className="text-label transition-all duration-300"
              style={{
                padding: "0.5rem 1.2rem",
                fontSize: "0.65rem",
                border: "1px solid",
                borderColor:
                  activeCategory === key
                    ? "var(--color-charcoal-300)"
                    : "rgba(168,152,128,0.3)",
                background:
                  activeCategory === key
                    ? "var(--color-charcoal-300)"
                    : "transparent",
                color:
                  activeCategory === key
                    ? "var(--color-cream-50)"
                    : "var(--color-charcoal-100)",
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Grid de servicios */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA inferior */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p
            className="text-body-sans mb-6"
            style={{ color: "var(--color-charcoal-100)", fontSize: "0.95rem" }}
          >
            ¿Tenés dudas sobre qué servicio es el indicado para tu cabello?
          </p>
          <a
            href="https://wa.me/543513000000?text=Hola%20Nadia,%20me%20gustaría%20consultar%20sobre%20los%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <span>Consultame sin compromiso</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
