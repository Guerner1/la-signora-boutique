"use client";

import { motion } from "framer-motion";
import restaurantData from "../data/restaurant.json";

export default function Footer() {
  const { address, phone, hours, socials, name } = restaurantData;

  return (
    <footer id="contactos" className="bg-[var(--color-boutique-ink)] text-white py-24 px-6 lg:px-12 selection:bg-[var(--color-boutique-accent)] selection:text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 border-t border-[var(--color-boutique-surface)] border-opacity-20 pt-16">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="flex flex-col gap-6"
        >
          <span className="font-serif text-3xl font-bold tracking-wide text-white">
            LA SIGNORA
          </span>
          <p className="font-sans font-light opacity-80 leading-relaxed text-sm max-w-xs">
            A essência de Itália no coração da cidade. Criamos experiências inesquecíveis, uma reserva de cada vez.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           viewport={{ once: true }}
           className="flex flex-col gap-6"
        >
          <h4 className="font-sans font-semibold text-lg text-[var(--color-boutique-accent)] tracking-widest uppercase border-b border-[var(--color-boutique-surface)] border-opacity-20 pb-4 inline-block max-w-xs">
            Visitare
          </h4>
          <address className="not-italic font-sans font-light opacity-80 leading-relaxed max-w-[200px] flex flex-col gap-1">
            <span className="mb-2 block md:w-48">{address}</span>
            <span className="text-[var(--color-boutique-accent)] hover:opacity-80 transition-opacity">
              {phone}
            </span>
          </address>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           viewport={{ once: true }}
           className="flex flex-col gap-6"
        >
          <h4 className="font-sans font-semibold text-lg text-[var(--color-boutique-accent)] tracking-widest uppercase border-b border-[var(--color-boutique-surface)] border-opacity-20 pb-4 inline-block max-w-xs">
            Orari
          </h4>
          <ul className="flex flex-col gap-4 font-sans font-light">
            {hours.map((h, i) => (
              <li key={i} className="flex justify-between items-center opacity-80 max-w-[280px]">
                <span>{h.days}</span>
                <span className="text-sm font-serif tracking-widest">{h.time}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[var(--color-boutique-surface)] border-opacity-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-sans font-thin text-xs tracking-widest uppercase opacity-50">
          © {new Date().getFullYear()} {name}. Todos os direitos reservados.
        </p>
        <div className="flex gap-6 font-sans text-xs tracking-widest uppercase opacity-70">
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-boutique-accent)] transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
