"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONTACT } from "@/lib/data";

export function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="contacto"
      ref={ref}
      className="section-py relative"
      style={{ background: "var(--color-cream-100)" }}
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info */}
          <div>
            <motion.span
              className="section-tag"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Contacto y ubicación
            </motion.span>

            <motion.h2
              className="text-display"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--color-charcoal-300)",
                marginBottom: "2rem",
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Encontranos en
              <br />
              <em
                className="text-accent-script"
                style={{
                  fontSize: "1.2em",
                  color: "var(--color-olive-400)",
                  fontStyle: "normal",
                }}
              >
                Córdoba
              </em>
            </motion.h2>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Dirección */}
              <div className="flex gap-4">
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid var(--color-olive-200)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                  aria-hidden="true"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-olive-400)"
                    strokeWidth="1.5"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <span
                    className="text-label block mb-1"
                    style={{
                      color: "var(--color-olive-400)",
                      fontSize: "0.6rem",
                    }}
                  >
                    Dirección
                  </span>
                  <p
                    className="text-body-sans"
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--color-charcoal-200)",
                    }}
                  >
                    {CONTACT.address}
                  </p>
                  <p
                    className="text-body-sans"
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--color-charcoal-100)",
                      marginTop: "0.15rem",
                    }}
                  >
                    Atención presencial y a domicilio en Córdoba Capital
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4">
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid var(--color-olive-200)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                  aria-hidden="true"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="var(--color-olive-400)"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <span
                    className="text-label block mb-1"
                    style={{
                      color: "var(--color-olive-400)",
                      fontSize: "0.6rem",
                    }}
                  >
                    WhatsApp
                  </span>
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-sans"
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--color-charcoal-200)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--color-olive-400)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        "var(--color-charcoal-200)")
                    }
                  >
                    {CONTACT.whatsappDisplay}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex gap-4">
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid var(--color-olive-200)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                  aria-hidden="true"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-olive-400)"
                    strokeWidth="1.5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="0.5"
                      fill="var(--color-olive-400)"
                    />
                  </svg>
                </div>
                <div>
                  <span
                    className="text-label block mb-1"
                    style={{
                      color: "var(--color-olive-400)",
                      fontSize: "0.6rem",
                    }}
                  >
                    Instagram
                  </span>
                  <a
                    href={CONTACT.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-sans"
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--color-charcoal-200)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--color-olive-400)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color =
                        "var(--color-charcoal-200)")
                    }
                  >
                    @nadialopez.estilista
                  </a>
                </div>
              </div>
              {/* Medios de pago */}
              <div className="flex gap-4">
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid var(--color-olive-200)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                  aria-hidden="true"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-olive-400)"
                    strokeWidth="1.5"
                  >
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                    <line x1="1" y1="10" x2="23" y2="10" />
                  </svg>
                </div>
                <div>
                  <span
                    className="text-label block mb-1"
                    style={{
                      color: "var(--color-olive-400)",
                      fontSize: "0.6rem",
                    }}
                  >
                    Medios de pago
                  </span>
                  <p
                    className="text-body-sans"
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--color-charcoal-200)",
                    }}
                  >
                    Efectivo · Mercado Pago · Tarjetas de crédito
                  </p>
                  <p
                    className="text-body-sans"
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--color-charcoal-100)",
                      marginTop: "0.15rem",
                    }}
                  >
                    Visa, Mastercard y demás tarjetas
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mapa placeholder (preparado para embed real) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              style={{
                background: "var(--color-cream-300)",
                aspectRatio: "4/3",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                border: "1px solid rgba(168,152,128,0.2)",
                position: "relative",
                overflow: "hidden",
              }}
              role="img"
              aria-label="Mapa de ubicación – Humberto 1° 3398, Córdoba"
            >
              {/* Decorativo mapa placeholder */}
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="24"
                  cy="20"
                  r="12"
                  stroke="var(--color-olive-300)"
                  strokeWidth="1.5"
                />
                <circle cx="24" cy="20" r="4" fill="var(--color-olive-300)" />
                <path
                  d="M24 32v8"
                  stroke="var(--color-olive-300)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <div className="text-center">
                <p
                  className="text-display"
                  style={{
                    fontSize: "1rem",
                    color: "var(--color-charcoal-200)",
                  }}
                >
                  Humberto 1° 3398
                </p>
                <p
                  className="text-body-sans"
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-charcoal-100)",
                    marginTop: "0.25rem",
                  }}
                >
                  Córdoba Capital, Argentina
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Humberto+1+3398,+Córdoba,+Argentina"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{
                  padding: "0.5rem 1.2rem",
                  fontSize: "0.62rem",
                  marginTop: "0.5rem",
                }}
              >
                <span>Ver en Google Maps</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
