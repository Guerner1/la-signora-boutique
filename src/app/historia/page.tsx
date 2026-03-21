"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HistoriaPage() {
  return (
    <main className="min-h-screen bg-[var(--color-boutique-bg)] text-[var(--color-boutique-text)] font-sans">
      <Navbar />

      <div className="relative h-[60vh] min-h-[500px] w-full mt-24 flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2000&auto=format&fit=crop"
          alt="A Nossa Essência"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-boutique-bg)] to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl pt-20">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-8xl font-playfair mb-6 tracking-wide"
          >
            A Nossa <span className="text-[var(--color-boutique-accent)] italic">História</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-px h-24 bg-gradient-to-b from-[var(--color-boutique-accent)] to-transparent mx-auto mt-10"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        
        {/* As Nossas Origens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[var(--color-boutique-accent)] uppercase tracking-widest text-sm mb-4">A Gênese</h2>
            <h3 className="text-4xl md:text-5xl font-playfair mb-8">As Nossas Origens</h3>
            <p className="text-lg font-light opacity-80 leading-relaxed mb-6">
              A La Signora Boutique nasceu de um sonho profundo: trazer a verdadeira alma das osterias italianas para um ambiente de luxo e exclusividade incontestável.
            </p>
            <p className="text-base font-light opacity-60 leading-relaxed">
              Viajámos de Nápoles a Florença, estudando as receitas seculares guardadas pelas "nonnas" e os segredos das massas feitas à mão. Não abrimos um restaurante; inaugurámos uma embaixada da tradição gastronómica italiana, onde cada jantar é uma celebração da arte de bem receber.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] rounded-sm overflow-hidden border border-[var(--color-boutique-ink)]/10"
          >
            <Image
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop"
              alt="Ambiente Clássico Italiano"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>
        </div>

        {/* Os Nossos Ingredientes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] rounded-sm overflow-hidden border border-[var(--color-boutique-ink)]/10 order-2 lg:order-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1596649282362-e6e8e81d77a9?q=80&w=1200&auto=format&fit=crop"
              alt="Tomate San Marzano fresco"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 lg:pl-10"
          >
            <h2 className="text-[var(--color-boutique-accent)] uppercase tracking-widest text-sm mb-4">A Matéria-Prima</h2>
            <h3 className="text-4xl md:text-5xl font-playfair mb-8">Os Ingredientes</h3>
            <p className="text-lg font-light opacity-80 leading-relaxed mb-6">
               Não existem segredos na cozinha da La Signora. Existe apenas uma obsessão impiedosa pela qualidade impecável da matéria-prima.
            </p>
            <ul className="space-y-6 mt-8">
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-boutique-accent)] mt-2 shrink-0" />
                <div>
                  <h4 className="text-xl font-playfair text-[var(--color-boutique-ink)] mb-1">Pistácchio D.O.P. de Bronte</h4>
                  <p className="text-sm font-light opacity-60">O ouro verde da Sicília, trazido diretamente das encostas vulcânicas do Etna para o nosso pesto artesanal.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-boutique-accent)] mt-2 shrink-0" />
                <div>
                  <h4 className="text-xl font-playfair text-[var(--color-boutique-ink)] mb-1">Trufa Negra Fresca</h4>
                  <p className="text-sm font-light opacity-60">Pérolas da terra, selecionadas por caçadores especializados em Piemonte, conferindo um aroma inconfundivel aos nossos cremes.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-boutique-accent)] mt-2 shrink-0" />
                <div>
                  <h4 className="text-xl font-playfair text-[var(--color-boutique-ink)] mb-1">Tomate San Marzano</h4>
                  <p className="text-sm font-light opacity-60">A base de todas as nossas Pizzas de Autor, cultivado nos majestosos solos vulcânicos do Monte Vesúvio.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* A Equipa */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center bg-[var(--color-boutique-surface)] p-10 md:p-16 rounded-sm border border-[var(--color-boutique-ink)]/5">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 text-center md:text-left"
          >
            <h2 className="text-[var(--color-boutique-accent)] uppercase tracking-widest text-sm mb-4">O Coração da Cozinha</h2>
            <h3 className="text-4xl md:text-5xl font-playfair mb-6">A Nossa Equipa</h3>
            <p className="text-base font-light opacity-70 leading-relaxed">
              Liderados pelo nosso excecional Head Chef, a brigada da La Signora transforma cada noite numa orquestra perfeita. A coreografia em frente ao forno a lenha reflete anos de prática e dedicação à alta cozinha.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] md:col-span-7 rounded-sm overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1200&auto=format&fit=crop"
              alt="Chef e Forno a Lenha"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
