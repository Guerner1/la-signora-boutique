"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Users, ArrowRight, MessageCircle } from "lucide-react";

export default function ReservasPage() {
  return (
    <main className="min-h-screen bg-[var(--color-boutique-bg)] text-[var(--color-boutique-text)] font-sans">
      <Navbar />

      <div className="relative h-[40vh] min-h-[300px] w-full mt-20 flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
          alt="Reservas e Eventos La Signora"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-boutique-bg)]" />
        
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-playfair mb-4"
          >
            A Sua <span className="text-[var(--color-boutique-accent)] italic">Mesa</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg font-light opacity-80 uppercase tracking-widest text-sm"
          >
            Reservas & Eventos Privados
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Reservation Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[var(--color-boutique-surface)] p-10 lg:p-14 rounded-sm border border-[var(--color-boutique-ink)]/5 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Calendar className="w-32 h-32" />
          </div>
          
          <h2 className="text-3xl font-playfair mb-6 relative z-10">Reservas Diárias</h2>
          <p className="text-sm font-light leading-relaxed opacity-70 mb-10 relative z-10">
            Garanta o seu lugar no La Signora Boutique. Para almoços de negócios, encontros românticos ou jantares de família, clique abaixo para falar diretamente com o nosso Maître d' via WhatsApp.
          </p>
          
          <a
            href="https://wa.me/351912345678" // Mudar para o numero real
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center justify-center w-full gap-3 bg-[var(--color-boutique-accent)] text-[var(--color-boutique-ink)] font-medium px-8 py-4 rounded-sm uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Reservar por WhatsApp
          </a>

          <div className="mt-10 relative z-10 border-t border-[var(--color-boutique-ink)]/10 pt-6">
            <p className="text-xs uppercase tracking-widest text-[var(--color-boutique-accent)] mb-2">Horário de Funcionamento</p>
            <p className="text-sm font-light opacity-70">Terça a Domingo: 12h00 - 15h00 | 19h00 - 23h00</p>
            <p className="text-sm font-light opacity-70 mt-1">Encerra à Segunda-feira.</p>
          </div>
        </motion.div>

        {/* Group Events Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[var(--color-boutique-surface)] p-10 lg:p-14 rounded-sm border border-[var(--color-boutique-ink)]/5 relative overflow-hidden group border-t-4 border-t-[var(--color-boutique-accent)]"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Users className="w-32 h-32" />
          </div>
          
          <h2 className="text-3xl font-playfair mb-6">Jantares de Grupo & Eventos</h2>
          <p className="text-sm font-light leading-relaxed opacity-70 mb-10">
            Privatize o nosso espaço ou reserve uma mesa longa para celebrações corporativas, aniversários e datas especiais. Desenhamos menus sob medida para o seu grupo (mínimo 10 pessoas).
          </p>

          <form className="space-y-6 relative z-10">
            <div>
              <label className="block text-xs uppercase tracking-widest opacity-70 mb-2">Nome Completo</label>
              <input 
                type="text" 
                className="w-full bg-[var(--color-boutique-bg)] border border-[var(--color-boutique-ink)]/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-boutique-accent)] transition-colors text-[var(--color-boutique-ink)]"
                placeholder="Ex: João Silva"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest opacity-70 mb-2">Data Pretendida</label>
                <input 
                  type="date" 
                  className="w-full bg-[var(--color-boutique-bg)] border border-[var(--color-boutique-ink)]/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-boutique-accent)] transition-colors text-[var(--color-boutique-ink)]/70"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest opacity-70 mb-2">Nº Pessoas</label>
                <input 
                  type="number" 
                  min="10"
                  className="w-full bg-[var(--color-boutique-bg)] border border-[var(--color-boutique-ink)]/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-boutique-accent)] transition-colors text-[var(--color-boutique-ink)]"
                  placeholder="Ex: 15"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest opacity-70 mb-2">Mensagem</label>
              <textarea 
                rows={3}
                className="w-full bg-[var(--color-boutique-bg)] border border-[var(--color-boutique-ink)]/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-boutique-accent)] transition-colors text-[var(--color-boutique-ink)] resize-none"
                placeholder="Fale-nos sobre o evento..."
              />
            </div>
            <button
              type="button"
              className="w-full border border-[var(--color-boutique-accent)] text-[var(--color-boutique-accent)] hover:bg-[var(--color-boutique-accent)] hover:text-[var(--color-boutique-ink)] font-medium px-8 py-4 rounded-sm uppercase tracking-widest text-sm transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Solicitar Orçamento
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
