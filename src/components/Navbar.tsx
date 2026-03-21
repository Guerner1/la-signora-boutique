"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const navBg = scrolled 
    ? "bg-[var(--color-boutique-bg)] text-[var(--color-boutique-ink)] shadow-sm" 
    : (isHome 
        ? "bg-transparent text-white" 
        : "bg-[var(--color-boutique-bg)] text-[var(--color-boutique-ink)] border-b border-[var(--color-boutique-ink)]/5");

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 relative z-50">
          <div className="flex items-center justify-center border border-[var(--color-boutique-accent)] px-4 py-2 hover:bg-[var(--color-boutique-accent)] hover:text-white transition-colors duration-500 rounded-sm">
            <span className="font-playfair text-xl italic tracking-widest text-[#d4af37]">La Signora</span>
          </div>
        </Link>
        
        <div className="hidden lg:flex gap-8 font-sans font-light text-[13px] uppercase tracking-widest relative z-50">
          <Link href="/" className={`hover:text-[var(--color-boutique-accent)] transition-colors ${pathname === '/' ? 'text-[var(--color-boutique-accent)] border-b border-[var(--color-boutique-accent)]' : ''}`}>Início</Link>
          <Link href="/menu" className={`hover:text-[var(--color-boutique-accent)] transition-colors ${pathname === '/menu' ? 'text-[var(--color-boutique-accent)] border-b border-[var(--color-boutique-accent)]' : ''}`}>O Menu</Link>
          <Link href="/historia" className={`hover:text-[var(--color-boutique-accent)] transition-colors ${pathname === '/historia' ? 'text-[var(--color-boutique-accent)] border-b border-[var(--color-boutique-accent)]' : ''}`}>A Nossa Essência</Link>
          <Link href="/reservas" className={`hover:text-[var(--color-boutique-accent)] transition-colors ${pathname === '/reservas' ? 'text-[var(--color-boutique-accent)] border-b border-[var(--color-boutique-accent)]' : ''}`}>Reservas</Link>
          <Link href="/experiencias" className={`hover:text-[var(--color-boutique-accent)] transition-colors ${pathname === '/experiencias' ? 'text-[var(--color-boutique-accent)] border-b border-[var(--color-boutique-accent)]' : ''}`}>Experiências</Link>
        </div>

        <Link
          href="/reservas"
          className="relative z-50 bg-[var(--color-boutique-accent)] text-black font-medium text-xs uppercase tracking-widest px-8 py-3 rounded-sm hover:bg-white transition-colors duration-300 shadow-xl"
        >
          Reservar Mesa
        </Link>
      </div>
    </nav>
  );
}
