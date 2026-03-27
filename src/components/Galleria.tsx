"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop", alt: "Galeria Prato 1" },
  { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop", alt: "Galeria Vinho" },
  { src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop", alt: "Galeria Mesa" },
  { src: "https://images.unsplash.com/photo-1551024506-0bc4a1050853?q=80&w=800&auto=format&fit=crop", alt: "Galeria Sobremesa" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop", alt: "Galeria Prato 2" },
  { src: "https://images.unsplash.com/photo-1560684352-8497838a2229?q=80&w=800&auto=format&fit=crop", alt: "Galeria Cozinha" },
];

export default function Galleria() {
  return (
    <section id="galleria" className="py-28 bg-[var(--color-boutique-ink)] overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center"
      >
        <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-[var(--color-boutique-accent)] mb-5 block">
          Os Nossos Momentos
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-5">
          La Nostra <span className="italic text-[var(--color-boutique-gold)]">Galleria</span>
        </h2>
        <div className="w-12 h-px bg-[var(--color-boutique-gold)] mx-auto mb-6" />
        <a
          href="https://www.instagram.com/lasignoraa_/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans font-light tracking-[0.3em] uppercase text-xs text-white/40 hover:text-[var(--color-boutique-gold)] transition-colors duration-300"
        >
          @lasignoraa_
        </a>
      </motion.div>

      {/* Grid */}
      <div className="w-full px-2 md:px-4 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-2">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative w-full aspect-square overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[var(--color-boutique-gold)]/0 group-hover:bg-[var(--color-boutique-gold)]/10 transition-colors duration-500 pointer-events-none" />
              {/* Hover overlay with Instagram icon feel */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-10 h-10 rounded-full border border-white/60 flex items-center justify-center">
                  <span className="text-white text-xs font-serif italic">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
