"use client";

import { motion } from "framer-motion";

export default function DoveSiamo() {
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
          Av. Comendador Henrique Amorim nº 243, <br />
          4535-342 Santa Maria de Lamas
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-white/10"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.2039774640956!2d-8.5693059!3d40.9799086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd238712da2a0333%3A0x6bba46c5ecf00d!2sAv.%20Comendador%20Henrique%20Amorim%20243%2C%204535-342%20Santa%20Maria%20de%20Lamas!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale-[30%] contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        />
      </motion.div>
    </section>
  );
}
