"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { GALLERY_ITEMS } from "@/lib/data";
import type { GalleryItem } from "@/types";

// ── Lightbox ──────────────────────────────────────────────────────
function Lightbox({ item, onClose }: { item: GalleryItem; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(26,20,16,0.92)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full"
        style={{ maxWidth: item.srcBefore ? "900px" : "520px" }}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
      >
        {item.srcBefore ? (
          /* Antes/después en lightbox: lado a lado */
          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="relative" style={{ aspectRatio: "3/4" }}>
                <Image src={item.srcBefore} alt="Antes" fill className="object-cover" sizes="50vw" />
              </div>
              <p className="text-label text-center mt-2" style={{ color: "rgba(253,250,245,0.5)", fontSize: "0.62rem" }}>
                ANTES
              </p>
            </div>
            <div>
              <div className="relative" style={{ aspectRatio: "3/4" }}>
                <Image src={item.src} alt="Después" fill className="object-cover" sizes="50vw" />
              </div>
              <p className="text-label text-center mt-2" style={{ color: "rgba(253,250,245,0.5)", fontSize: "0.62rem" }}>
                DESPUÉS
              </p>
            </div>
          </div>
        ) : (
          <div className="relative" style={{ aspectRatio: "3/4", maxHeight: "80vh" }}>
            <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 520px" />
          </div>
        )}

        <button
          onClick={onClose}
          className="absolute -top-9 right-0 text-label"
          style={{ color: "rgba(253,250,245,0.5)", fontSize: "0.6rem", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.1em" }}
          aria-label="Cerrar imagen"
        >
          ESC / cerrar
        </button>
      </motion.div>
    </motion.div>
  );
}

// ── Tarjeta antes/después: muestra AMBAS fotos juntas ─────────────
function BeforeAfterCard({ item, onClick, index }: { item: GalleryItem; onClick: () => void; index: number }) {
  return (
    <motion.div
      className="cursor-pointer group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.1 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`Ver transformación completa: ${item.alt}`}
    >
      {/* Etiqueta superior */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-label" style={{ color: "var(--color-olive-200)", fontSize: "0.6rem" }}>
          {item.category}
        </span>
        <span style={{ color: "rgba(253,250,245,0.2)", fontSize: "0.6rem" }}>—</span>
        <span className="text-label" style={{ color: "rgba(253,250,245,0.35)", fontSize: "0.6rem" }}>
          Clic para ver en grande
        </span>
      </div>

      {/* Pair de fotos */}
      <div className="grid grid-cols-2 gap-1.5 overflow-hidden">
        {/* Antes */}
        <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
          <Image
            src={item.srcBefore!}
            alt="Antes"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          />
          <div
            className="absolute bottom-0 left-0 right-0 py-1.5 text-center"
            style={{ background: "rgba(26,20,16,0.55)" }}
          >
            <span className="text-label" style={{ color: "var(--color-cream-200)", fontSize: "0.58rem" }}>
              ANTES
            </span>
          </div>
        </div>

        {/* Después */}
        <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
          <Image
            src={item.src}
            alt="Después"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          />
          <div
            className="absolute bottom-0 left-0 right-0 py-1.5 text-center"
            style={{ background: "rgba(26,20,16,0.55)" }}
          >
            <span className="text-label" style={{ color: "var(--color-cream-200)", fontSize: "0.58rem" }}>
              DESPUÉS
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Tarjeta estándar (peinados / trabajos) ─────────────────────────
function GalleryCard({ item, onClick, index }: { item: GalleryItem; onClick: () => void; index: number }) {
  return (
    <motion.div
      className="img-reveal cursor-pointer group relative overflow-hidden"
      style={{ aspectRatio: "3/4", background: "var(--color-cream-200)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.08 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`Ver ${item.alt}`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Overlay hover — solo categoría, sin texto "cliente N" */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(to top, rgba(46,37,32,0.65) 0%, transparent 55%)" }}
      >
        <span className="text-label" style={{ color: "var(--color-cream-50)", fontSize: "0.6rem" }}>
          {item.category}
        </span>
      </div>
    </motion.div>
  );
}

// ── Sección principal ─────────────────────────────────────────────
export function GallerySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filters = [
    { key: "all",         label: "Todos" },
    { key: "antes-despues", label: "Antes / Después" },
    { key: "peinado",     label: "Peinados" },
    { key: "trabajo",     label: "Trabajos" },
  ];

  const filtered =
    filter === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.type === filter);

  const antesDespues = filtered.filter((g) => g.type === "antes-despues");
  const others       = filtered.filter((g) => g.type !== "antes-despues");

  return (
    <>
      <section
        id="trabajos"
        ref={ref}
        className="section-py relative"
        style={{ background: "var(--color-charcoal-400)" }}
      >
        <div className="container-site">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <motion.span
                className="section-tag"
                style={{ color: "var(--color-olive-200)" }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                Trabajos reales
              </motion.span>
              <motion.h2
                className="text-display"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "var(--color-cream-50)" }}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Resultados que
                <br />
                <em
                  className="text-accent-script"
                  style={{ fontSize: "1.15em", color: "var(--color-olive-200)", fontStyle: "normal" }}
                >
                  hablan solos
                </em>
              </motion.h2>
            </div>

            {/* Filtros */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {filters.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className="text-label"
                  style={{
                    padding: "0.45rem 1rem",
                    fontSize: "0.62rem",
                    border: "1px solid",
                    borderColor: filter === key ? "var(--color-cream-200)" : "rgba(253,250,245,0.2)",
                    background: filter === key ? "var(--color-cream-200)" : "transparent",
                    color: filter === key ? "var(--color-charcoal-300)" : "rgba(253,250,245,0.5)",
                    cursor: "pointer",
                  }}
                >
                  {label}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Antes / Después: pares en grid de 2 columnas */}
          {antesDespues.length > 0 && (
            <div className="mb-10">
              {(filter === "all") && (
                <motion.p
                  className="text-label mb-5"
                  style={{ color: "var(--color-olive-200)", fontSize: "0.6rem" }}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Transformaciones
                </motion.p>
              )}
              <div className="grid sm:grid-cols-2 gap-8">
                {antesDespues.map((item, i) => (
                  <BeforeAfterCard
                    key={item.id}
                    item={item}
                    onClick={() => setSelected(item)}
                    index={i}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Separador si hay ambos tipos */}
          {antesDespues.length > 0 && others.length > 0 && filter === "all" && (
            <div className="divider-organic my-10" style={{ background: "linear-gradient(90deg, transparent, rgba(168,152,128,0.2), transparent)" }} />
          )}

          {/* Peinados / Trabajos: masonry */}
          {others.length > 0 && (
            <>
              {(filter === "all") && (
                <motion.p
                  className="text-label mb-5"
                  style={{ color: "var(--color-olive-200)", fontSize: "0.6rem" }}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.25 }}
                >
                  Peinados y trabajos
                </motion.p>
              )}
              <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-3">
                <AnimatePresence mode="popLayout">
                  {others.map((item, i) => (
                    <div key={item.id} className="break-inside-avoid mb-3">
                      <GalleryCard item={item} onClick={() => setSelected(item)} index={i} />
                    </div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </>
          )}

          <motion.p
            className="text-center mt-10 text-body-sans"
            style={{ color: "rgba(253,250,245,0.3)", fontSize: "0.78rem" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Todos los trabajos son de clientas reales con su consentimiento.
          </motion.p>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && <Lightbox item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  );
}
