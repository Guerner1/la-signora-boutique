"use client";

import { motion } from "framer-motion";
import restaurantData from "@/data/restaurant.json";

export default function DoveSiamo() {
  const addressQuery = encodeURIComponent(restaurantData.address);

  return (
    <section id="dove-siamo" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto bg-[var(--color-boutique-bg)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-boutique-ink)] mb-4">
          Dove Siamo
        </h2>
        <div className="w-16 h-px bg-[var(--color-boutique-accent)] mx-auto mb-10"></div>
        <p className="font-sans text-[var(--color-boutique-ink)] opacity-80 max-w-md mx-auto">
          {restaurantData.address.split(',').map((item, i, arr) => (
            <span key={i}>
              {item.trim()}
              {i < arr.length - 1 && <>, <br /></>}
            </span>
          ))}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-white/10"
      >
        <iframe
          src={`https://maps.google.com/maps?q=${addressQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Localização do Restaurante no Google Maps"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale-[30%] contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${addressQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[var(--color-boutique-accent)] text-[var(--color-boutique-bg)] border border-[var(--color-boutique-accent)] font-sans text-sm uppercase tracking-widest px-8 py-4 hover:bg-transparent hover:text-[var(--color-boutique-accent)] transition-all cursor-pointer w-full sm:w-auto text-center"
        >
          Como Chegar
        </a>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${addressQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-transparent text-[var(--color-boutique-ink)] border border-[var(--color-boutique-ink)]/20 font-sans text-sm uppercase tracking-widest px-8 py-4 hover:border-[var(--color-boutique-accent)] hover:text-[var(--color-boutique-accent)] transition-all cursor-pointer w-full sm:w-auto text-center"
        >
          Ver no Google Maps
        </a>
      </motion.div>
    </section>
  );
}
