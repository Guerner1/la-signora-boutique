"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Storia() {
  return (
    <section id="storia" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden bg-[var(--color-boutique-bg)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-boutique-ink)] mb-6">
            La Nostra Storia
          </h2>
          <div className="w-16 h-px bg-[var(--color-boutique-accent)] mb-8"></div>
          <p className="font-sans font-light text-[var(--color-boutique-ink)] opacity-80 leading-relaxed text-lg mb-6">
            Nascida da paixão pela autêntica tradição italiana, a <strong>La Signora Boutique</strong> é mais do que um restaurante; é uma ode à elegância e aos sabores verdadeiros da Itália.
          </p>
          <p className="font-sans font-light text-[var(--color-boutique-ink)] opacity-80 leading-relaxed text-lg">
            Selecionamos meticulosamente os ingredientes mais frescos para que cada prato conte uma história de amor familiar, tradição e excelência culinária incomparável.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5]"
        >
          <Image
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"
            alt="Interior La Signora Boutique"
            fill
            className="object-cover rounded-sm shadow-2xl"
          />
          {/* Decorative frame */}
          <div className="absolute inset-0 border border-[var(--color-boutique-accent)] opacity-50 transform translate-x-4 translate-y-4 -z-10 rounded-sm"></div>
        </motion.div>
      </div>
    </section>
  );
}
