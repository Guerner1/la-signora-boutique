"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Users, ArrowRight, MessageCircle, Loader2, CheckCircle, X } from "lucide-react";
import restaurantData from "@/data/restaurant.json";

export default function ReservasPage() {
  const [formData, setFormData] = useState({
    nome: "",
    contacto: "",
    data: "",
    hora: "20:00",
    pessoas: "",
    mensagem: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nome.trim()) newErrors.nome = "Nome é obrigatório";
    if (!formData.data.trim()) newErrors.data = "Data é obrigatória";
    if (!formData.hora.trim()) newErrors.hora = "Hora é obrigatória";
    if (!formData.pessoas || parseInt(formData.pessoas) < 1 || parseInt(formData.pessoas) > 20) {
      newErrors.pessoas = "Número de pessoas inválido (1-20)";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const webhookUrl = process.env.NEXT_PUBLIC_N8N_RESERVAS_WEBHOOK_URL || "https://SEU-N8N.app/webhook/reserva-la-signora";

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ nome: "", contacto: "", data: "", hora: "20:00", pessoas: "", mensagem: "" });
      } else {
        alert("Ocorreu um erro ao enviar a reserva. Por favor, tente novamente.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro de ligação ao tentar enviar a reserva. Verifique a sua internet e tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            href={`https://wa.me/${restaurantData.phone.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center justify-center w-full gap-3 bg-[var(--color-boutique-accent)] text-[var(--color-boutique-ink)] font-medium px-8 py-4 rounded-sm uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Reservar por WhatsApp
          </a>

          <div className="mt-10 relative z-10 border-t border-[var(--color-boutique-ink)]/10 pt-6">
            <p className="text-xs uppercase tracking-widest text-[var(--color-boutique-accent)] mb-2">Horário de Funcionamento</p>
            {restaurantData.hours.map((hour, idx) => (
              <p key={idx} className={`text-sm font-light opacity-70 ${idx < restaurantData.hours.length - 1 ? "mb-1" : ""}`}>
                {hour.time === "Encerrado" ? `Encerra ao ${hour.days}.` : `${hour.days}: ${hour.time.replace(/:/g, "h").replace(/, /g, " | ")}`}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Reservation Form Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[var(--color-boutique-surface)] p-10 lg:p-14 rounded-sm border border-[var(--color-boutique-ink)]/5 relative overflow-hidden group border-t-4 border-t-[var(--color-boutique-accent)]"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Users className="w-32 h-32" />
          </div>
          
          <h2 className="text-3xl font-playfair mb-6">Reservar Mesa</h2>
          <p className="text-sm font-light leading-relaxed opacity-70 mb-10">
            Preencha os detalhes abaixo para garantir o seu lugar. Ser-lhe-á enviada uma confirmação assim que o nosso staff validar a sua reserva.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label className="block text-xs uppercase tracking-widest opacity-70 mb-2">Nome Completo *</label>
              <input 
                type="text" 
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
                className={`w-full bg-[var(--color-boutique-bg)] border ${errors.nome ? 'border-red-500' : 'border-[var(--color-boutique-ink)]/10'} rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-boutique-accent)] transition-colors text-[var(--color-boutique-ink)]`}
                placeholder="Ex: João Silva"
              />
              {errors.nome && <span className="text-red-500 text-xs mt-1 block">{errors.nome}</span>}
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest opacity-70 mb-2">Contacto / Telefone</label>
              <input 
                type="tel" 
                value={formData.contacto}
                onChange={(e) => setFormData({...formData, contacto: e.target.value})}
                className="w-full bg-[var(--color-boutique-bg)] border border-[var(--color-boutique-ink)]/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-boutique-accent)] transition-colors text-[var(--color-boutique-ink)]"
                placeholder="+351 9XX XXX XXX"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest opacity-70 mb-2">Data *</label>
                <input 
                  type="date" 
                  value={formData.data}
                  onChange={(e) => setFormData({...formData, data: e.target.value})}
                  className={`w-full bg-[var(--color-boutique-bg)] border ${errors.data ? 'border-red-500' : 'border-[var(--color-boutique-ink)]/10'} rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-boutique-accent)] transition-colors text-[var(--color-boutique-ink)]`}
                />
                {errors.data && <span className="text-red-500 text-xs mt-1 block">{errors.data}</span>}
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest opacity-70 mb-2">Hora *</label>
                <input 
                  type="time" 
                  value={formData.hora}
                  onChange={(e) => setFormData({...formData, hora: e.target.value})}
                  className={`w-full bg-[var(--color-boutique-bg)] border ${errors.hora ? 'border-red-500' : 'border-[var(--color-boutique-ink)]/10'} rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-boutique-accent)] transition-colors text-[var(--color-boutique-ink)]`}
                />
                {errors.hora && <span className="text-red-500 text-xs mt-1 block">{errors.hora}</span>}
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest opacity-70 mb-2">Nº Pessoas *</label>
                <input 
                  type="number" 
                  min="1"
                  max="20"
                  value={formData.pessoas}
                  onChange={(e) => setFormData({...formData, pessoas: e.target.value})}
                  className={`w-full bg-[var(--color-boutique-bg)] border ${errors.pessoas ? 'border-red-500' : 'border-[var(--color-boutique-ink)]/10'} rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-boutique-accent)] transition-colors text-[var(--color-boutique-ink)]`}
                  placeholder="Ex: 2"
                />
                {errors.pessoas && <span className="text-red-500 text-xs mt-1 block">{errors.pessoas}</span>}
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest opacity-70 mb-2">Mensagem / Observações</label>
              <textarea 
                rows={3}
                value={formData.mensagem}
                onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                className="w-full bg-[var(--color-boutique-bg)] border border-[var(--color-boutique-ink)]/10 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-boutique-accent)] transition-colors text-[var(--color-boutique-ink)] resize-none"
                placeholder="Ocasião especial, alergias, preferências..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[var(--color-boutique-accent)] text-white hover:bg-[var(--color-boutique-ink)] font-medium px-8 py-4 rounded-sm uppercase tracking-widest text-sm transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Reservar Mesa"}
            </button>
          </form>

        </motion.div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-[var(--color-boutique-bg)] w-full max-w-md p-8 rounded-sm shadow-2xl text-center border border-[var(--color-boutique-accent)]/20"
            >
              <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-playfair mb-2">Reserva Recebida!</h2>
              <p className="font-light opacity-80 mb-8">
                Entraremos em contacto para confirmar a sua reserva.
              </p>

              <button
                onClick={() => setIsSuccess(false)}
                className="w-full py-4 bg-[var(--color-boutique-accent)] text-white hover:bg-[var(--color-boutique-ink)] transition-colors duration-300 rounded-sm text-sm uppercase tracking-widest font-medium"
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
