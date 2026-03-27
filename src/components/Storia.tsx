"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Storia() {
  return (
    <section id="storia" className="py-28 md:py-40 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-28 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col justify-center"
        >
          <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-[var(--color-boutique-accent)] mb-5 block">
            A Nossa História
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-boutique-ink)] mb-6 leading-tight">
            La Nostra<br />
            <span className="italic text-[var(--color-boutique-accent)]">Storia</span>
          </h2>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-[var(--color-boutique-gold)]" />
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[var(--color-boutique-ink)]/40">Est. 2024</span>
          </div>
          <p className="font-sans font-light text-[var(--color-boutique-ink)]/75 leading-[1.9] text-base md:text-lg mb-6">
            Nascida da paixão pela autêntica tradição italiana, a <strong className="font-normal text-[var(--color-boutique-ink)]">La Signora Boutique</strong> é mais do que um restaurante — é uma ode à elegância e aos sabores verdadeiros de Itália.
          </p>
          <p className="font-sans font-light text-[var(--color-boutique-ink)]/75 leading-[1.9] text-base md:text-lg">
            Selecionamos meticulosamente os ingredientes mais frescos para que cada prato conte uma história de amor familiar, tradição e excelência culinária incomparável.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="relative w-full aspect-[4/5]"
        >
          <Image
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"
            alt="Interior La Signora Boutique"
            fill
            className="object-cover shadow-2xl"
          />
          {/* Gold frame offset */}
          <div className="absolute inset-0 border border-[var(--color-boutique-gold)]/30 transform translate-x-5 translate-y-5 -z-10" />
          {/* Corner accent */}
          <div className="absolute bottom-6 right-6 w-20 h-20 border-b border-r border-[var(--color-boutique-gold)]/60" />
          <div className="absolute top-6 left-6 w-20 h-20 border-t border-l border-[var(--color-boutique-gold)]/60" />
        </motion.div>
      </div>
    </section>
  );
}
