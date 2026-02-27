"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.15 },
  }),
};

const CERTIFICATIONS = [
  "Recibida en Academia Bertoldi – Córdoba",
  "Colorimetría avanzada – L'Oréal Professionnel",
  "Técnicas de balayage y degradé artesanal",
  "Protocolo de tratamientos reconstructores",
  "Alisado progresivo libre de formol",
  "Peinado para novias y eventos especiales",
];

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="sobre-mi"
      ref={ref}
      className="section-py relative overflow-hidden"
      style={{ background: "var(--color-cream-100)" }}
    >
      {/* Fondo decorativo */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(168,152,120,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ── Imágenes ────────────────────────────────────────── */}
          <motion.div
            className="relative pb-16 lg:pb-0"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Imagen principal */}
            <div
              className="img-reveal relative overflow-hidden"
              style={{
                borderRadius: "2px",
                aspectRatio: "3/4",
                maxWidth: "400px",
              }}
            >
              <Image
                src="/estilista-nadia-lopez/nadia-lopez-1.jpeg"
                alt="Nadia López – Estilista Profesional"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 45vw"
                priority
              />
              {/* Overlay sutil */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(46,37,32,0.15) 0%, transparent 50%)",
                }}
              />
            </div>

            {/* Imagen secundaria superpuesta */}
            <motion.div
              className="absolute -bottom-8 right-0 lg:-right-12 img-reveal overflow-hidden shadow-2xl"
              style={{
                width: "clamp(130px, 18vw, 200px)",
                aspectRatio: "1",
                borderRadius: "2px",
                border: "4px solid var(--color-cream-50)",
              }}
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Image
                src="/estilista-nadia-lopez/nadia-lopez-2.jpeg"
                alt="Nadia López trabajando"
                fill
                className="object-cover"
                sizes="200px"
              />
            </motion.div>

          </motion.div>

          {/* ── Texto ────────────────────────────────────────────── */}
          <div>
            <motion.span
              className="section-tag"
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Sobre mí
            </motion.span>

            <motion.h2
              className="text-display"
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                color: "var(--color-charcoal-300)",
                marginBottom: "1.5rem",
              }}
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              El cuidado que
              <br />
              <em
                className="text-accent-script"
                style={{
                  fontSize: "1.2em",
                  color: "var(--color-olive-400)",
                  fontStyle: "normal",
                }}
              >
                tu cabello merece
              </em>
            </motion.h2>

            <motion.div
              className="space-y-4"
              style={{ color: "var(--color-charcoal-100)", lineHeight: 1.8 }}
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <p>
                Soy Nadia, estilista profesional radicada en Córdoba Capital.
                Trabajo el cabello como forma de expresión personal y tengo
                muchas clientas felices que lo confirman. Me especializo en
                colorimetría artesanal, tratamientos de recuperación y peinados
                para eventos que duran toda la noche.
              </p>
              <p>
                Mi enfoque es cercano y honesto: antes de empezar escucho lo que
                querés, analizo el estado real de tu cabello y te digo lo que
                técnicamente es posible. Nada de promesas vacías. La confianza se
                construye resultado a resultado.
              </p>
              <p>
                Atiendo de forma presencial en mi espacio en Humberto 1° 3398 y
                también a domicilio en Córdoba Capital para quienes lo prefieran.
              </p>
            </motion.div>

            {/* Divider */}
            <motion.div
              className="my-8"
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="divider-organic" style={{ margin: "0" }} />
            </motion.div>

            {/* Certificaciones */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <span className="text-label" style={{ color: "var(--color-olive-400)", display: "block", marginBottom: "1rem" }}>
                Formación y especialización
              </span>
              <ul className="space-y-2" role="list">
                {CERTIFICATIONS.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-start gap-3 text-body-sans"
                    style={{ fontSize: "0.88rem", color: "var(--color-charcoal-100)" }}
                  >
                    <span
                      style={{
                        display: "block",
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "var(--color-olive-300)",
                        marginTop: "0.55rem",
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    />
                    {cert}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
