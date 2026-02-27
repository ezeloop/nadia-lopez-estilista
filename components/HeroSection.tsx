"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

// Cargamos el Canvas dinámicamente para evitar SSR issues con WebGL
const HeroCanvas = dynamic(
  () => import("./three/HeroCanvas").then((m) => m.HeroCanvas),
  { ssr: false }
);

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--color-cream-50)" }}
    >
      {/* ── Fondo sutil: gradiente orgánico ─────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 60% 40%, rgba(212,196,168,0.22) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── Línea decorativa lateral izquierda ──────────────────── */}
      <motion.div
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        aria-hidden="true"
      >
        <div className="w-px h-20" style={{ background: "var(--color-olive-200)" }} />
        <span
          className="text-label"
          style={{
            writingMode: "vertical-rl",
            color: "var(--color-olive-300)",
            letterSpacing: "0.22em",
            fontSize: "0.6rem",
          }}
        >
          Córdoba, Argentina
        </span>
        <div className="w-px h-20" style={{ background: "var(--color-olive-200)" }} />
      </motion.div>

      {/* ── Layout principal ────────────────────────────────────── */}
      <div className="container-site relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen py-28 lg:py-0">
        {/* ── Columna texto ──────────────────────────────────────── */}
        <div className="flex flex-col justify-center">
          {/* Tag superior */}
          <motion.span
            className="section-tag"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            Estilista Profesional
          </motion.span>

          {/* Headline */}
          <motion.h1
            className="text-display"
            style={{
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              color: "var(--color-charcoal-300)",
              marginBottom: "0.5rem",
            }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            Cada cabello
            <br />
            <em
              className="text-accent-script"
              style={{
                fontSize: "clamp(3rem, 7vw, 6.5rem)",
                color: "var(--color-olive-400)",
                fontStyle: "normal",
              }}
            >
              cuenta una historia
            </em>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            className="text-body-sans"
            style={{
              fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
              color: "var(--color-charcoal-100)",
              maxWidth: "38ch",
              lineHeight: 1.8,
              marginTop: "1.5rem",
              marginBottom: "2.5rem",
            }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
          >
            Color, tratamientos y peinados para eventos en Córdoba Capital.
            Trabajo personalizado, con atención a cada detalle.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-start gap-3"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
          >
            <a
              href="https://wa.me/543513000000?text=Hola%20Nadia,%20quiero%20consultar%20disponibilidad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Consultá disponibilidad</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <Link href="#trabajos" className="btn-outline">
              <span>Ver trabajos</span>
            </Link>
          </motion.div>

          {/* Stats pequeños */}
          <motion.div
            className="flex gap-8 mt-14"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            {[
              { value: "♡", label: "muchas clientas felices" },
              { value: "5★", label: "valoración" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div
                  className="text-display"
                  style={{
                    fontSize: "1.6rem",
                    color: "var(--color-charcoal-200)",
                    lineHeight: 1,
                  }}
                >
                  {value}
                </div>
                <div className="text-label" style={{ color: "var(--color-olive-300)", marginTop: "0.3rem" }}>
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Columna 3D ────────────────────────────────────────── */}
        <motion.div
          className="relative w-full"
          style={{ height: "clamp(260px, 70vw, 680px)" }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
        >
          {/* Halo de fondo detrás del 3D */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(188,168,140,0.18) 0%, transparent 70%)",
              transform: "scale(1.1)",
            }}
            aria-hidden="true"
          />
          <HeroCanvas />
        </motion.div>
      </div>

      {/* ── Scroll indicator ────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        aria-hidden="true"
      >
        <span className="text-label" style={{ color: "var(--color-olive-300)", fontSize: "0.58rem" }}>
          Scroll
        </span>
        <motion.div
          className="w-px h-10"
          style={{ background: "var(--color-olive-200)" }}
          animate={{ scaleY: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
