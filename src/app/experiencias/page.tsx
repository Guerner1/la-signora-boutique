"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Copy, Gift, Heart, ArrowRight } from "lucide-react";

export default function ExperienciasPage() {
  const experiences = [
    {
      id: "romantic",
      title: "Jantar Romântico a 2",
      price: "150€",
      desc: "Ofereça uma noite inesquecível. Inclui cocktail de autor de boas-vindas, entrada a partilhar, 2 pratos principais à escolha da grelha de Destaques do Chef, 2 sobremesas e 1 garrafa de vinho premium da Toscana recomendada pelo Sommelier.",
      icon: <Heart className="w-8 h-8 text-[var(--color-boutique-accent)]" />
    },
    {
      id: "truffle",
      title: "Experiência Tartufo",
      price: "220€",
      desc: "Uma verdadeira viagem imersiva focada no diamante da culinária italiana: a Trufa. Menu degustação de 5 momentos para 2 pessoas, totalmente desenhado em torno do sabor inebriante da trufa negra e branca fresca.",
      icon: <Gift className="w-8 h-8 text-[var(--color-boutique-accent)]" />
    }
  ];

  return (
    <main className="min-h-screen bg-[var(--color-boutique-bg)] text-[var(--color-boutique-text)] font-sans">
      <Navbar />

      <div className="relative h-[50vh] min-h-[400px] w-full mt-24 flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2000&auto=format&fit=crop"
          alt="Experiências e Vouchers"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-boutique-bg)]" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-playfair mb-6"
          >
            Vouchers & <span className="text-[var(--color-boutique-accent)] italic">Experiências</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg font-light opacity-80 uppercase tracking-widest text-sm"
          >
            Ofereça Itália a quem mais ama
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-lg font-light leading-relaxed text-[var(--color-boutique-ink)]/70">
            A forma suprema de demonstrar apreço. Os nossos Gifts Vouchers digitais são enviados por e-mail com instruções personalizadas para o feliz destinatário fazer a sua reserva à la carte com total flexibilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-[var(--color-boutique-surface)] flex flex-col justify-between border border-[var(--color-boutique-ink)]/10 rounded-sm overflow-hidden hover:border-[var(--color-boutique-accent)] transition-colors duration-500 group relative"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-boutique-accent)] blur-[100px] opacity-10 group-hover:opacity-30 transition-opacity" />

              <div className="p-10 z-10">
                <div className="mb-8">{exp.icon}</div>
                <h3 className="text-3xl font-playfair mb-4 text-[var(--color-boutique-ink)] group-hover:text-[var(--color-boutique-accent)] transition-colors">
                  {exp.title}
                </h3>
                <h4 className="text-4xl font-light text-[var(--color-boutique-accent)] mb-8">{exp.price}</h4>
                <p className="text-sm font-light leading-relaxed opacity-70 mb-10">
                  {exp.desc}
                </p>
              </div>

              <div className="border-t border-dashed border-[var(--color-boutique-ink)]/20 p-8 flex flex-col gap-4 bg-black/40 relative z-10">
                <button className="flex justify-center items-center gap-2 bg-[var(--color-boutique-accent)] text-white px-6 py-4 rounded-sm uppercase tracking-widest text-xs font-semibold hover:bg-white transition-colors w-full">
                  Comprar Voucher 
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="flex justify-center items-center gap-2 text-[var(--color-boutique-ink)]/50 px-6 py-2 uppercase tracking-widest text-[10px] hover:text-[var(--color-boutique-ink)] transition-colors w-full">
                  <Copy className="w-3 h-3" />
                  Copiar Link da Experiência
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <Footer />
    </main>
  );
}
