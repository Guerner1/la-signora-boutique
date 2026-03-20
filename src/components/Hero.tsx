"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(42, 42, 42, 0.4), rgba(42, 42, 42, 0.6)), url('/images/foto_fachada.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="relative z-10 text-center px-4 max-w-4xl pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white font-sans uppercase tracking-[0.3em] text-sm md:text-base mb-6"
        >
          Tradição Italiana
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-[var(--color-boutique-accent)]">
            <Image src="/images/logo.jpg" alt="La Signora Logo" fill className="object-cover" priority />
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           viewport={{ once: true }}
           className="pointer-events-auto"
        >
          <a
            href="https://wa.me/351913860397?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative z-50 bg-[var(--color-boutique-accent)] text-white font-sans text-sm uppercase tracking-widest px-8 md:px-12 py-4 md:py-5 hover:bg-opacity-90 transition-all border border-[var(--color-boutique-accent)] cursor-pointer"
          >
            Fazer Reserva
          </a>
        </motion.div>
      </div>
    </section>
  );
}
