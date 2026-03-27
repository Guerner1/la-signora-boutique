"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import restaurantData from "../data/restaurant.json";

export default function Footer() {
  const { address, phone, hours, socials, name } = restaurantData;

  return (
    <footer
      id="contactos"
      className="bg-[var(--color-boutique-ink)] text-white pt-0 pb-12 px-6 lg:px-12 selection:bg-[var(--color-boutique-accent)] selection:text-white overflow-hidden"
    >
      {/* Gold accent top bar */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-boutique-gold)] to-transparent mb-16" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-white/5">

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="md:col-span-4 flex flex-col gap-6"
        >
          <div className="inline-flex items-center border border-[var(--color-boutique-gold)]/30 px-5 py-2 self-start">
            <span className="font-serif text-2xl italic tracking-[0.15em] text-[var(--color-boutique-gold)]">
              La Signora
            </span>
          </div>
          <p className="font-sans font-light opacity-50 leading-relaxed text-sm max-w-xs">
            A essência de Itália no coração da cidade. Criamos experiências inesquecíveis, uma reserva de cada vez.
          </p>
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[10px] uppercase tracking-[0.3em] text-[var(--color-boutique-accent)] hover:text-[var(--color-boutique-gold)] transition-colors duration-300 self-start"
          >
            Instagram ↗
          </a>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="md:col-span-2 flex flex-col gap-5"
        >
          <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] text-[var(--color-boutique-gold)] mb-1">
            Navegar
          </h4>
          {[
            { href: "/menu", label: "O Menu" },
            { href: "/historia", label: "A Nossa Essência" },
            { href: "/reservas", label: "Reservas" },
            { href: "/takeaway", label: "Take Away" },
            { href: "/experiencias", label: "Experiências" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-sans font-light text-sm opacity-50 hover:opacity-100 hover:text-[var(--color-boutique-accent)] transition-all duration-300"
            >
              {label}
            </Link>
          ))}
        </motion.div>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:col-span-3 flex flex-col gap-5"
        >
          <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] text-[var(--color-boutique-gold)] mb-1">
            Visitare
          </h4>
          <address className="not-italic font-sans font-light opacity-50 leading-[1.8] text-sm flex flex-col gap-1">
            <span>{address}</span>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="text-[var(--color-boutique-accent)] hover:text-[var(--color-boutique-gold)] transition-colors mt-2 opacity-100"
            >
              {phone}
            </a>
          </address>
        </motion.div>

        {/* Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:col-span-3 flex flex-col gap-5"
        >
          <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] text-[var(--color-boutique-gold)] mb-1">
            Orari
          </h4>
          <ul className="flex flex-col gap-4 font-sans font-light text-sm">
            {hours.map((h, i) => (
              <li key={i} className="flex flex-col gap-0.5 opacity-50">
                <span>{h.days}</span>
                <span className="text-[var(--color-boutique-accent)] text-xs tracking-wider opacity-100">{h.time}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase opacity-25">
          © {new Date().getFullYear()} {name}. Todos os direitos reservados.
        </p>
        <p className="font-sans font-light text-[10px] tracking-[0.25em] uppercase opacity-25">
          Feito com paixão · Italia nel cuore
        </p>
      </div>
    </footer>
  );
}
