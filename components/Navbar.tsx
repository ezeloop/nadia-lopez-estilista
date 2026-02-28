"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT } from "../lib/data";

const NAV_LINKS = [
  { href: "#inicio",       label: "Inicio" },
  { href: "#sobre-mi",     label: "Sobre mí" },
  { href: "#servicios",    label: "Servicios" },
  { href: "#trabajos",     label: "Trabajos" },
  { href: "#contacto",     label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(253,250,245,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(168,152,128,0.15)" : "none",
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container-site flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="#inicio"
            className="flex flex-col leading-none"
            style={{ textDecoration: "none" }}
          >
            <span
              className="text-accent-script"
              style={{
                fontSize: "1.7rem",
                color: "var(--color-charcoal-300)",
                lineHeight: 1,
              }}
            >
              Nadia López
            </span>
            <span
              className="text-label"
              style={{
                color: "var(--color-olive-300)",
                fontSize: "0.55rem",
                letterSpacing: "0.25em",
              }}
            >
              Estilista Profesional
            </span>
          </Link>

          {/* Nav desktop */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Navegación principal"
          >
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-label transition-colors duration-300"
                style={{
                  color: "var(--color-charcoal-100)",
                  fontSize: "0.68rem",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-charcoal-300)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-charcoal-100)")
                }
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex btn-primary"
              style={{ padding: "0.6rem 1.4rem", fontSize: "0.65rem" }}
            >
              <span>Reservar turno</span>
            </a>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
            >
              <motion.span
                className="block h-px w-full"
                style={{ background: "var(--color-charcoal-300)" }}
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 5 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-px w-full"
                style={{ background: "var(--color-charcoal-300)" }}
                animate={{ opacity: menuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-px w-full"
                style={{ background: "var(--color-charcoal-300)" }}
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -5 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden flex flex-col justify-center items-center"
            style={{ background: "var(--color-cream-50)" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  className="text-display"
                  style={{
                    fontSize: "clamp(1.8rem, 8vw, 2.8rem)",
                    color: "var(--color-charcoal-300)",
                    textDecoration: "none",
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 + 0.1, duration: 0.4 }}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setMenuOpen(false)}
              >
                <span>Reservar turno</span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
