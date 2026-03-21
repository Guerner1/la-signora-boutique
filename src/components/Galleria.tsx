"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Galleria() {
  const images = [
    { src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=800&auto=format&fit=crop", alt: "Galeria Prato 1" },
    { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=800&auto=format&fit=crop", alt: "Galeria Vinho" },
    { src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop", alt: "Galeria Mesa" },
    { src: "https://images.unsplash.com/photo-1551024506-0bc4a1050853?q=80&w=800&auto=format&fit=crop", alt: "Galeria Sobremesa" },
    { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop", alt: "Galeria Prato 2" },
    { src: "https://images.unsplash.com/photo-1560684352-8497838a2229?q=80&w=800&auto=format&fit=crop", alt: "Galeria Cozinha" },
  ];

  return (
    <section id="galleria" className="py-24 bg-[var(--color-boutique-surface)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-boutique-ink)] mb-4">
            A Nossa Galeria
          </h2>
          <div className="w-16 h-px bg-[var(--color-boutique-accent)] mx-auto mb-6"></div>
          <p className="font-sans font-light tracking-widest uppercase text-sm opacity-70">
            @lasignoraa_
          </p>
        </motion.div>
      </div>

      <div className="w-full px-2 md:px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px" }}
              className="relative w-full aspect-square overflow-hidden group rounded-sm shadow-md"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
