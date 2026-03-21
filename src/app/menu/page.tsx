"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const menuItems = [
  // Pizze
  { id: 1, name: "Margherita D.O.P.", desc: "Molho de tomate San Marzano, Mozzarella di Bufala Campana, manjericão fresco, azeite extra virgem.", price: "16€", category: "Pizze" },
  { id: 2, name: "La Signora Tartufo", desc: "Creme de trufa preta, fior di latte, cogumelos porcini frescos, lascas de parmesão, azeite de trufa.", price: "24€", category: "Pizze" },
  { id: 3, name: "Burrata & Prosciutto", desc: "Fior di latte, rúcula selvagem, presunto de Parma curado 24 meses, burrata inteira no topo, tomate cereja confitado.", price: "22€", category: "Pizze" },
  { id: 4, name: "Diavola Piccante", desc: "Molho de tomate, fior di latte, salame piccante napolitano, nduja da Calábria, malagueta fresca.", price: "18€", category: "Pizze" },
  { id: 5, name: "Pistacchio Mortadella", desc: "Pesto de pistáchio, fior di latte, mortadela de Bolonha IGP, stracciatella, granada de pistáchio.", price: "21€", category: "Pizze" },

  // Paste
  { id: 6, name: "Spaghetti alla Carbonara", desc: "Guanciale estaladiço, gemas de ovos biológicos, Pecorino Romano, pimenta preta moída no momento.", price: "19€", category: "Paste" },
  { id: 7, name: "Tagliatelle al Ragù", desc: "Massa fresca artesanal, ragù tradicional à bolonhesa cozinhado lentamente durante 8 horas, Parmigiano Reggiano.", price: "20€", category: "Paste" },
  { id: 8, name: "Ravioli Ricotta & Tartufo", desc: "Massa fresca recheada com ricotta e espinafres, servida num creme aveludado de trufa preta e sálvia.", price: "26€", category: "Paste" },
  { id: 9, name: "Linguine ai Frutti di Mare", desc: "Linguine com mexilhões, amêijoas, camarão tigre, lulas, alho, vinho branco e tomate fresco.", price: "28€", category: "Paste" },

  // La Cantina
  { id: 10, name: "Aperol Spritz Clássico", desc: "Aperol, Prosecco DOCG premium, água com gás e uma rodela de laranja fresca.", price: "12€", category: "La Cantina" },
  { id: 11, name: "Negroni La Signora", desc: "Gin artesanal, Campari, Vermute tinto premium, servido com gelo lapidado e zest de laranja.", price: "14€", category: "La Cantina" },
  { id: 12, name: "Barolo DOCG (Garrafa)", desc: "Vinho tinto italiano de excelência da região do Piemonte. Intenso, complexo e elegante.", price: "85€", category: "La Cantina" },
  { id: 13, name: "Chianti Classico Riserva (Garrafa)", desc: "Vinho tinto da Toscana. Notas de cereja e madeira, perfeito para acompanhar as nossas carnes e massas com molhos vermelhos.", price: "45€", category: "La Cantina" },
  { id: 14, name: "Sangria de Frutos Vermelhos com Prosecco", desc: "Jarro de 1L. Prosecco, sumo natural de frutos vermelhos, vodka, limão, hortelã e flor de sabugueiro.", price: "32€", category: "La Cantina" },

  // Dolci
  { id: 15, name: "Tiramisù Tradizionale", desc: "A verdadeira receita italiana com palitos la reine, café espresso puro, creme de mascarpone e cacau em pó.", price: "9€", category: "Dolci" },
  { id: 16, name: "Panna Cotta al Limoncello", desc: "Panna cotta cremosa com uma redução de licor limoncello artesanal e crumble de amêndoa.", price: "8€", category: "Dolci" },
  { id: 17, name: "Cannolo Siciliano", desc: "Massa crocante recheada com creme de ricotta de ovelha doce, pedaços de chocolate negro e pistáchio.", price: "10€", category: "Dolci" },
];

const categories = ["Visualizar Tudo", "Pizze", "Paste", "La Cantina", "Dolci"];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Visualizar Tudo");

  const filteredItems = menuItems.filter(
    (item) => activeCategory === "Visualizar Tudo" || item.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-[var(--color-boutique-bg)] text-[var(--color-boutique-text)] font-sans">
      <Navbar />

      {/* Hero Header para o Menu */}
      <div className="relative h-[50vh] min-h-[400px] w-full mt-20 flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2000&auto=format&fit=crop"
          alt="Menu La Signora"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-boutique-bg)]" />
        
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <Link href="/" className="inline-flex items-center text-sm uppercase tracking-widest text-[var(--color-boutique-accent)] hover:text-white transition-colors mb-6 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar ao Início
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-playfair mb-6"
          >
            A Nossa <span className="text-[var(--color-boutique-accent)] italic">Carta</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl font-light opacity-80"
          >
            Uma jornada pelos verdadeiros sabores da gastronomia italiana, combinando a tradição com uma elegância inconfundível. Da nossa forno para a sua mesa.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20 sticky top-28 z-40 bg-[var(--color-boutique-bg)]/90 backdrop-blur-md py-4 border-b border-[var(--color-boutique-ink)]/5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat 
                  ? "bg-[var(--color-boutique-accent)] text-white font-medium"
                  : "bg-transparent text-[var(--color-boutique-ink)]/50 hover:text-white border border-[var(--color-boutique-ink)]/10 hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group border-b border-[var(--color-boutique-ink)]/5 pb-8 relative"
              >
                {/* Decorative dot */}
                <div className="absolute left-0 top-3 w-1.5 h-1.5 rounded-full bg-[var(--color-boutique-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="pl-6">
                  <div className="flex justify-between items-baseline mb-3 gap-4">
                    <h3 className="text-2xl font-playfair">{item.name}</h3>
                    <span className="text-xl font-light text-[var(--color-boutique-accent)] whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-sm font-light leading-relaxed opacity-70">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Decorative elements */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-[var(--color-boutique-ink)]/40 font-light">
            Sem resultados para esta categoria.
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
