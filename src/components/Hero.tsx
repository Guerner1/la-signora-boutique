"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Multi-layer gradient overlay for depth */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)" }} />

      <div className="relative z-10 text-center px-6 max-w-3xl flex flex-col items-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white/70 font-sans font-light uppercase tracking-[0.45em] text-xs md:text-sm mb-8"
        >
          Ristorante Boutique · Santa Maria de Lamas
        </motion.p>

        {/* Logo circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden mb-8"
          style={{ boxShadow: "0 0 0 1px rgba(196,154,94,0.6), 0 0 60px rgba(0,0,0,0.8)" }}
        >
          <Image src="/images/logo.jpg" alt="La Signora Logo" fill className="object-cover" priority />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-serif italic text-5xl md:text-7xl text-white mb-3 leading-none"
          style={{ textShadow: "0 2px 30px rgba(0,0,0,0.5)" }}
        >
          La Signora
        </motion.h1>

        {/* Thin gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="w-20 h-px mb-6 origin-center"
          style={{ background: "var(--color-boutique-gold)" }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-white/60 font-sans font-light tracking-widest text-xs md:text-sm mb-12 uppercase"
        >
          Tradição Italiana · Sabores Autênticos
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="https://wa.me/351913860397?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva."
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[11px] uppercase tracking-[0.25em] px-10 py-4 bg-[var(--color-boutique-gold)] text-[var(--color-boutique-ink)] font-medium hover:bg-white transition-all duration-300"
          >
            Reservar Mesa
          </a>
          <Link
            href="/menu"
            className="font-sans text-[11px] uppercase tracking-[0.25em] px-10 py-4 border border-white/40 text-white hover:border-[var(--color-boutique-gold)] hover:text-[var(--color-boutique-gold)] transition-all duration-300"
          >
            Ver a Carta
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 font-sans text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
