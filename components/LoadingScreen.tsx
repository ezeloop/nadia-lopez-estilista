"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const ScissorsCanvas = dynamic(
  () => import("./three/ScissorsCanvas").then((m) => m.ScissorsCanvas),
  { ssr: false }
);

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Fade out when page is fully loaded, with a min display time for elegance
    const minTimer = setTimeout(() => {
      if (document.readyState === "complete") setVisible(false);
    }, 1800);

    const onLoad = () => setTimeout(() => setVisible(false), 400);

    if (document.readyState === "complete") {
      // Already loaded: wait min time then fade
      const t = setTimeout(() => setVisible(false), 1800);
      return () => clearTimeout(t);
    }

    window.addEventListener("load", onLoad, { once: true });
    // Hard cap: never show more than 3.5 s
    const hardCap = setTimeout(() => setVisible(false), 3500);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(hardCap);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "var(--color-charcoal-300)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.25rem",
          }}
        >
          {/* Scissors 3D */}
          <div style={{ width: "200px", height: "260px" }}>
            <ScissorsCanvas variant="loading" />
          </div>

          {/* Brand name */}
          <motion.span
            className="text-accent-script"
            style={{
              color: "var(--color-cream-100)",
              fontSize: "2.4rem",
              lineHeight: 1.1,
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            Nadia López
          </motion.span>

          <motion.span
            className="text-label"
            style={{
              color: "var(--color-olive-300)",
              fontSize: "0.58rem",
              letterSpacing: "0.3em",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            Estilista Profesional
          </motion.span>

          {/* Animated loading dots */}
          <motion.div
            style={{
              display: "flex",
              gap: "0.35rem",
              marginTop: "2rem",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "var(--color-olive-300)",
                  display: "block",
                }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
