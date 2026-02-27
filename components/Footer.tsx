"use client";

import Link from "next/link";
import { CONTACT } from "@/lib/data";

const NAV_LINKS = [
  { href: "#inicio",    label: "Inicio" },
  { href: "#sobre-mi",  label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos",  label: "Trabajos" },
  { href: "#reservar",  label: "Reservar turno" },
  { href: "#contacto",  label: "Contacto" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ background: "var(--color-charcoal-400)", borderTop: "1px solid rgba(168,152,128,0.1)" }}
      role="contentinfo"
    >
      <div className="container-site py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span
              className="text-accent-script block"
              style={{ fontSize: "2rem", color: "var(--color-cream-50)", lineHeight: 1, marginBottom: "0.5rem" }}
            >
              Nadia López
            </span>
            <span
              className="text-label block"
              style={{ color: "var(--color-olive-300)", fontSize: "0.58rem", letterSpacing: "0.22em" }}
            >
              Estilista Profesional
            </span>
            <p
              className="text-body-sans mt-4"
              style={{ fontSize: "0.82rem", color: "rgba(253,250,245,0.4)", maxWidth: "28ch", lineHeight: 1.7 }}
            >
              Diseño de color, tratamientos y peinados en Córdoba Capital.
              Atención personalizada, resultados reales.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Navegación del pie de página">
            <span
              className="text-label block mb-4"
              style={{ color: "var(--color-olive-300)", fontSize: "0.6rem" }}
            >
              Navegación
            </span>
            <ul className="space-y-2" role="list">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-body-sans"
                    style={{ fontSize: "0.82rem", color: "rgba(253,250,245,0.5)", textDecoration: "none", transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cream-50)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(253,250,245,0.5)")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto rápido */}
          <div>
            <span
              className="text-label block mb-4"
              style={{ color: "var(--color-olive-300)", fontSize: "0.6rem" }}
            >
              Contacto rápido
            </span>
            <div className="space-y-3">
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-body-sans"
                style={{ fontSize: "0.82rem", color: "rgba(253,250,245,0.5)", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(253,250,245,0.5)")}
              >
                WhatsApp: {CONTACT.whatsappDisplay}
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-body-sans"
                style={{ fontSize: "0.82rem", color: "rgba(253,250,245,0.5)", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-cream-50)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(253,250,245,0.5)")}
              >
                Instagram: @nadia.lopez.estilista
              </a>
              <p
                className="text-body-sans"
                style={{ fontSize: "0.82rem", color: "rgba(253,250,245,0.35)" }}
              >
                {CONTACT.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(168,152,128,0.1)",
            paddingTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <p
            className="text-label"
            style={{ color: "rgba(253,250,245,0.2)", fontSize: "0.58rem", textAlign: "center" }}
          >
            © {year} Nadia López – Todos los derechos reservados · Córdoba, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
