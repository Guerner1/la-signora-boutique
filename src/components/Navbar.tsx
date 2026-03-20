"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[var(--color-boutique-bg)] shadow-sm text-[var(--color-boutique-ink)]" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 relative z-50">
          <div className="w-16 h-16 relative rounded-full overflow-hidden shadow-lg border border-[var(--color-boutique-accent)]">
            <Image src="/images/logo.jpg" alt="La Signora Logo" fill className="object-cover" />
          </div>
        </a>
        
        <div className="hidden md:flex gap-8 font-sans font-light text-sm uppercase tracking-widest relative z-50">
          <a href="#menu" className="hover:text-[var(--color-boutique-accent)] transition-colors cursor-pointer">O Menu</a>
          <a href="#contactos" className="hover:text-[var(--color-boutique-accent)] transition-colors cursor-pointer">Contactos</a>
        </div>

        <a
          href="https://wa.me/351913860397?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva."
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-50 bg-[var(--color-boutique-accent)] text-white font-sans text-sm uppercase tracking-widest px-6 py-3 rounded-none hover:bg-opacity-90 transition-opacity cursor-pointer"
        >
          Reservar
        </a>
      </div>
    </nav>
  );
}
