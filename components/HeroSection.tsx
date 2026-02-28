"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CONTACT } from "@/lib/data";

// Unsplash – libre de derechos (Unsplash License).
// Foto de modelo con cabello estilizado, tonos cálidos.
// Podés reemplazar la URL por una foto real de Nadia o de sus trabajos.
const HERO_PHOTO =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=90&auto=format&fit=crop";

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
      {/* ── Fondo: gradiente orgánico ───────────────────────────── */}
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

      {/* ── Layout principal ─────────────────────────────────────── */}
      <div className="container-site relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen py-28 lg:py-0">
        {/* ── Columna texto ──────────────────────────────────────── */}
        <div className="flex flex-col justify-center">
          <motion.span
            className="section-tag"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            Estilista Profesional
          </motion.span>

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

          <motion.div
            className="flex flex-col sm:flex-row items-start gap-3"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
          >
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=Hola%20Nadia,%20quiero%20consultar%20disponibilidad`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Consultá disponibilidad</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7 17L17 7M17 7H7M17 7v10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <Link href="#trabajos" className="btn-outline">
              <span>Ver trabajos</span>
            </Link>
          </motion.div>

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
                  style={{ fontSize: "1.6rem", color: "var(--color-charcoal-200)", lineHeight: 1 }}
                >
                  {value}
                </div>
                <div
                  className="text-label"
                  style={{ color: "var(--color-olive-300)", marginTop: "0.3rem" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Columna foto ─────────────────────────────────────────── */}
        <motion.div
          className="relative w-full flex items-center justify-center"
          style={{ height: "clamp(300px, 70vw, 700px)" }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
        >
          {/* Halo decorativo detrás de la foto */}
          <div
            className="absolute"
            style={{
              inset: "5%",
              borderRadius: "42% 58% 62% 38% / 40% 44% 56% 60%",
              background:
                "radial-gradient(ellipse at center, rgba(188,168,140,0.22) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          {/* Marco orgánico: borde decorativo desplazado */}
          <div
            className="absolute"
            style={{
              inset: "8%",
              border: "1px solid rgba(168,152,128,0.25)",
              borderRadius: "38% 62% 55% 45% / 45% 38% 62% 55%",
              transform: "translate(12px, 12px)",
            }}
            aria-hidden="true"
          />

          {/* Foto principal */}
          <div
            style={{
              position: "relative",
              width: "82%",
              height: "90%",
              borderRadius: "40% 60% 58% 42% / 44% 42% 58% 56%",
              overflow: "hidden",
              boxShadow: "0 24px 60px rgba(60,50,40,0.22), 0 4px 16px rgba(60,50,40,0.1)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_PHOTO}
              alt="Trabajo de estilismo – modelo con cabello estilizado"
              loading="eager"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />

            {/* Overlay gradiente sutil en la parte inferior */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(45,38,32,0.35) 0%, transparent 55%)",
              }}
              aria-hidden="true"
            />
          </div>

          {/* Badge flotante – etiqueta elegante */}
          <motion.div
            style={{
              position: "absolute",
              bottom: "12%",
              left: "4%",
              background: "rgba(255,252,248,0.92)",
              backdropFilter: "blur(8px)",
              padding: "0.75rem 1.1rem",
              border: "1px solid rgba(168,152,128,0.25)",
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <p
              className="text-label"
              style={{ color: "var(--color-olive-400)", fontSize: "0.55rem", marginBottom: "0.2rem" }}
            >
              Especialidad
            </p>
            <p
              className="text-display"
              style={{ color: "var(--color-charcoal-300)", fontSize: "0.88rem" }}
            >
              Color & Peinado
            </p>
          </motion.div>

          {/* Badge superior derecho */}
          <motion.div
            style={{
              position: "absolute",
              top: "10%",
              right: "2%",
              background: "var(--color-olive-400)",
              padding: "0.6rem 0.9rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.7 }}
          >
            <span
              className="text-display"
              style={{ color: "var(--color-cream-50)", fontSize: "1.3rem", lineHeight: 1 }}
            >
              5★
            </span>
            <span
              className="text-label"
              style={{ color: "rgba(255,252,240,0.8)", fontSize: "0.5rem", marginTop: "0.15rem" }}
            >
              Calificación
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
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
