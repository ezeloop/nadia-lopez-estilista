"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { CONTACT, SERVICES } from "@/lib/data";
import type { Service } from "@/types";
import { clsx } from "clsx";

const ScissorsCanvas = dynamic(
  () => import("./three/ScissorsCanvas").then((m) => m.ScissorsCanvas),
  { ssr: false }
);

const CATEGORIES = [
  { key: "all",         label: "Todos" },
  { key: "color",       label: "Color" },
  { key: "tratamiento", label: "Tratamientos" },
  { key: "peinado",     label: "Peinados" },
  { key: "corte",       label: "Cortes" },
] as const;

// ── Service Modal ────────────────────────────────────────────────
function ServiceModal({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(28, 24, 20, 0.72)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          background: "var(--color-warm-white)",
          width: "100%",
          maxWidth: "820px",
          maxHeight: "90vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={service.name}
      >
        {/* ── Top section: scissors canvas + category/name ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            background: "var(--color-charcoal-300)",
            minHeight: "200px",
          }}
        >
          {/* Scissors 3D */}
          <div style={{ position: "relative", background: "var(--color-charcoal-300)" }}>
            <ScissorsCanvas variant="modal" />
          </div>

          {/* Header text */}
          <div
            style={{
              padding: "2rem 2rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              borderLeft: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span
              className="text-label block mb-2"
              style={{ color: "var(--color-olive-300)", fontSize: "0.58rem" }}
            >
              {service.category}
            </span>
            <h2
              className="text-display"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                color: "var(--color-cream-50)",
                lineHeight: 1.1,
                marginBottom: "0.5rem",
              }}
            >
              {service.name}
            </h2>
            <p
              className="text-body-sans"
              style={{
                fontSize: "0.9rem",
                color: "var(--color-cream-300)",
                fontStyle: "italic",
              }}
            >
              {service.tagline}
            </p>

            {service.duration && (
              <p
                className="text-label mt-2"
                style={{ color: "var(--color-olive-300)", fontSize: "0.58rem" }}
              >
                Duración estimada: {service.duration}
              </p>
            )}
          </div>
        </div>

        {/* ── Content ── */}
        <div
          style={{
            padding: "2rem",
            overflowY: "auto",
            flex: 1,
          }}
        >
          {/* Description */}
          <p
            className="text-body-sans"
            style={{
              fontSize: "0.95rem",
              color: "var(--color-charcoal-100)",
              lineHeight: 1.85,
              marginBottom: "1.5rem",
            }}
          >
            {service.description}
          </p>

          <div
            style={{
              width: "2.5rem",
              height: "1px",
              background: "var(--color-olive-200)",
              marginBottom: "1.5rem",
            }}
          />

          {/* Technique */}
          {service.technique && (
            <div style={{ marginBottom: "1.25rem" }}>
              <span
                className="text-label block mb-1"
                style={{ color: "var(--color-olive-400)", fontSize: "0.58rem" }}
              >
                Técnica utilizada
              </span>
              <p
                className="text-body-sans"
                style={{ fontSize: "0.88rem", color: "var(--color-charcoal-100)" }}
              >
                {service.technique}
              </p>
            </div>
          )}

          {/* Benefit */}
          {service.benefit && (
            <div
              style={{
                background: "var(--color-cream-200)",
                padding: "1rem 1.25rem",
                borderLeft: "2px solid var(--color-olive-300)",
                marginBottom: "1.5rem",
              }}
            >
              <span
                className="text-label block mb-1"
                style={{ color: "var(--color-olive-400)", fontSize: "0.58rem" }}
              >
                Beneficio principal
              </span>
              <p
                className="text-body-sans"
                style={{ fontSize: "0.88rem", color: "var(--color-charcoal-200)", lineHeight: 1.7 }}
              >
                {service.benefit}
              </p>
            </div>
          )}

          {/* CTA */}
          <a
            href={`https://wa.me/${CONTACT.whatsapp}?text=Hola%20Nadia,%20quiero%20consultar%20sobre%20${encodeURIComponent(service.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: "inline-flex" }}
          >
            <span>Consultar por este servicio</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
        </div>

        {/* ── Close button ── */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            width: "32px",
            height: "32px",
            border: "1px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.08)",
            color: "var(--color-cream-100)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

// ── Service Card ─────────────────────────────────────────────────
function ServiceCard({
  service,
  index,
  onSelect,
}: {
  service: Service;
  index: number;
  onSelect: (s: Service) => void;
}) {
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
      onClick={() => onSelect(service)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect(service)}
    >
      {/* Número decorativo */}
      <span
        className="text-display absolute top-4 right-5 select-none pointer-events-none"
        style={{ fontSize: "4rem", color: "rgba(168,152,128,0.08)", lineHeight: 1 }}
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
        style={{ fontSize: "1.5rem", color: "var(--color-charcoal-300)", marginBottom: "0.4rem" }}
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

      <div
        style={{
          width: "2.5rem",
          height: "1px",
          background: "var(--color-olive-200)",
          marginBottom: "1rem",
        }}
      />

      <p
        className="text-body-sans"
        style={{ fontSize: "0.9rem", color: "var(--color-charcoal-100)", lineHeight: 1.8 }}
      >
        {service.description.slice(0, 100)}…
      </p>

      {/* Hint */}
      <div
        className="mt-4 flex items-center gap-2"
        style={{ color: "var(--color-olive-300)" }}
        aria-hidden="true"
      >
        <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-body)", letterSpacing: "0.1em" }}>
          Ver detalle
        </span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </motion.article>
  );
}

// ── Section ──────────────────────────────────────────────────────
export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleClose = useCallback(() => setSelectedService(null), []);

  const filtered =
    activeCategory === "all"
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
                  activeCategory === key ? "var(--color-charcoal-300)" : "rgba(168,152,128,0.3)",
                background:
                  activeCategory === key ? "var(--color-charcoal-300)" : "transparent",
                color:
                  activeCategory === key ? "var(--color-cream-50)" : "var(--color-charcoal-100)",
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((service, i) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={i}
                onSelect={setSelectedService}
              />
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
            href={`https://wa.me/${CONTACT.whatsapp}?text=Hola%20Nadia,%20me%20gustaría%20consultar%20sobre%20los%20servicios`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <span>Consultame sin compromiso</span>
          </a>
        </motion.div>
      </div>

      {/* Modal portal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal service={selectedService} onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  );
}
