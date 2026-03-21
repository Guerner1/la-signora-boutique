"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const chefHighlights = [
  {
    name: "La Signora Tartufo",
    desc: "A nossa assinatura premiada. Creme aveludado de trufa preta, fior di latte fresco, cogumelos porcini selvagens e um fio de azeite de trufa branca no final.",
    price: "24€",
  },
  {
    name: "Linguine ai Frutti di Mare",
    desc: "Uma ode à costa de Amalfi. Frutos do mar fresquíssimos salteados em azeite, alho tostado e um caldo rico de marisco.",
    price: "28€",
  },
  {
    name: "Aperol Spritz Clássico",
    desc: "O icónico aperitivo italiano equilibrado na perfeição, preparado com Prosecco D.O.C.G. e finalizado com a frescura do Mediterrâneo.",
    price: "12€",
  },
];

export default function MenuList() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-[var(--color-boutique-surface)] text-[var(--color-boutique-text)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center mb-16 md:mb-24 px-4 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--color-boutique-accent)] uppercase tracking-[0.2em] text-sm font-semibold mb-4 block"
          >
            A Essência
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair mb-6"
          >
            Destaques do <span className="italic text-[var(--color-boutique-accent)]">Chef</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-[var(--color-boutique-text)] opacity-70 font-light"
          >
            Uma seleção de criações requintadas que representam a alma do La Signora Boutique. Descubra os pratos que definem a nossa paixão pela gastronomia italiana.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-7 space-y-10 lg:pl-10 relative">
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-[1px] h-3/4 bg-gradient-to-b from-transparent via-[var(--color-boutique-accent)] to-transparent opacity-30 hidden lg:block" />
            
            {chefHighlights.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="flex justify-between items-baseline mb-3 gap-6">
                  <h3 className="text-2xl md:text-3xl font-playfair tracking-wide text-[var(--color-boutique-ink)] group-hover:text-[var(--color-boutique-accent)] transition-colors duration-500">{item.name}</h3>
                  <div className="flex-1 border-b border-[var(--color-boutique-accent)] border-opacity-30 border-dashed mx-4 opacity-0 md:opacity-100" />
                  <span className="text-xl md:text-2xl text-[var(--color-boutique-accent)] font-light">{item.price}</span>
                </div>
                <p className="text-sm md:text-base font-light font-sans text-[var(--color-boutique-ink)] opacity-70 leading-relaxed pr-8 md:pr-24">
                  {item.desc}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-10 flex justify-center lg:justify-start"
            >
              <Link 
                href="/menu" 
                className="group flex items-center gap-3 border border-[var(--color-boutique-accent)] px-8 py-4 rounded-sm text-sm uppercase tracking-widest text-[var(--color-boutique-accent)] hover:bg-[var(--color-boutique-accent)] hover:text-white transition-all duration-300"
              >
                Ver Carta Completa
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full h-[600px] lg:h-[800px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1200&auto=format&fit=crop"
              alt="Pizza de Assinatura La Signora"
              fill
              className="object-cover border-8 border-[var(--color-boutique-bg)] shadow-2xl"
              style={{ borderRadius: "100px 100px 4px 4px" }} 
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center py-4 px-8 bg-black/60 backdrop-blur-md rounded-full border border-[var(--color-boutique-ink)]/20">
               <span className="font-playfair text-[#d4af37] italic text-2xl">L'Eccellenza</span>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
