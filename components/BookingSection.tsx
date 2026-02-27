"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONTACT } from "@/lib/data";

export function BookingSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp}?text=Hola%20Nadia%2C%20me%20gustar%C3%ADa%20reservar%20un%20turno.`;

  return (
    <section
      id="reservar"
      ref={ref}
      className="section-py relative overflow-hidden"
      style={{ background: "var(--color-charcoal-300)" }}
    >
      {/* Texture ornamental */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(168,152,128,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.span
            className="section-tag justify-center"
            style={{ color: "var(--color-olive-200)", justifyContent: "center" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Reservar turno
          </motion.span>

          <motion.h2
            className="text-display"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              color: "var(--color-cream-50)",
              marginBottom: "1.5rem",
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Tu próxima
            <br />
            <em
              className="text-accent-script"
              style={{ fontSize: "1.2em", color: "var(--color-olive-200)", fontStyle: "normal" }}
            >
              transformación
            </em>
            <br />
            empieza acá
          </motion.h2>

          <motion.p
            className="text-body-sans mb-10"
            style={{
              fontSize: "0.95rem",
              color: "rgba(253,250,245,0.65)",
              lineHeight: 1.8,
              maxWidth: "38ch",
              margin: "0 auto 2.5rem",
            }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Escribime por WhatsApp para consultar disponibilidad. Respondo
            personalmente en el menor tiempo posible.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3"
              style={{
                padding: "1rem 2.5rem",
                background: "#25D366",
                color: "#fff",
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1ebe5c")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#25D366")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Reservar por WhatsApp
            </a>

            {/* Email alternativo */}
            <a
              href={`mailto:${CONTACT.email}?subject=Consulta%20de%20turno`}
              className="btn-outline"
              style={{
                borderColor: "rgba(253,250,245,0.3)",
                color: "var(--color-cream-50)",
              }}
            >
              <span>Escribir por email</span>
            </a>
          </motion.div>

          {/* Info secundaria */}
          <motion.div
            className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            role="list"
          >
            {[
              { icon: "🕐", label: "Respuesta", value: "En el día" },
              { icon: "📍", label: "Atención", value: "Presencial + domicilio" },
              { icon: "💳", label: "Formas de pago", value: "Efectivo · Transferencia" },
            ].map(({ icon, label, value }) => (
              <div key={label} role="listitem" style={{ textAlign: "center" }}>
                <span style={{ fontSize: "1.4rem", display: "block", marginBottom: "0.5rem" }} aria-hidden="true">
                  {icon}
                </span>
                <span
                  className="text-label block"
                  style={{ color: "rgba(253,250,245,0.4)", fontSize: "0.58rem", marginBottom: "0.2rem" }}
                >
                  {label}
                </span>
                <span
                  className="text-body-sans"
                  style={{ color: "rgba(253,250,245,0.7)", fontSize: "0.8rem" }}
                >
                  {value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
