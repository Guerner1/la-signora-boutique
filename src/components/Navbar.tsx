"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/menu", label: "O Menu" },
  { href: "/historia", label: "A Nossa Essência" },
  { href: "/reservas", label: "Reservas" },
  { href: "/takeaway", label: "Take Away" },
  { href: "/experiencias", label: "Experiências" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isHome = pathname === "/";
  const transparent = !scrolled && isHome;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          transparent
            ? "bg-transparent text-white"
            : "bg-[var(--color-boutique-bg)]/95 backdrop-blur-md text-[var(--color-boutique-ink)] shadow-sm border-b border-[var(--color-boutique-ink)]/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 group">
            <div
              className={`flex items-center justify-center px-5 py-2 border transition-all duration-500 ${
                transparent
                  ? "border-white/40 group-hover:border-[var(--color-boutique-gold)]"
                  : "border-[var(--color-boutique-accent)]/50 group-hover:border-[var(--color-boutique-gold)]"
              }`}
            >
              <span className="font-serif text-xl italic tracking-[0.15em] text-[var(--color-boutique-gold)]">
                La Signora
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-8 font-sans font-light text-[11px] uppercase tracking-[0.2em]">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative pb-0.5 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  pathname === href
                    ? "text-[var(--color-boutique-accent)] after:scale-x-100 after:bg-[var(--color-boutique-accent)]"
                    : transparent
                    ? "hover:text-[var(--color-boutique-gold)] after:bg-[var(--color-boutique-gold)]"
                    : "hover:text-[var(--color-boutique-accent)] after:bg-[var(--color-boutique-accent)]"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/reservas"
              className={`hidden lg:inline-block font-sans text-[11px] uppercase tracking-[0.2em] px-7 py-3 transition-all duration-300 ${
                transparent
                  ? "bg-white/10 border border-white/30 text-white hover:bg-[var(--color-boutique-gold)] hover:border-[var(--color-boutique-gold)] hover:text-[var(--color-boutique-ink)]"
                  : "bg-[var(--color-boutique-accent)] border border-[var(--color-boutique-accent)] text-white hover:bg-[var(--color-boutique-gold)] hover:border-[var(--color-boutique-gold)] hover:text-[var(--color-boutique-ink)]"
              }`}
            >
              Reservar Mesa
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden relative z-50 p-2"
              aria-label="Abrir menu"
            >
              {mobileOpen ? (
                <X className={`w-5 h-5 ${transparent && !mobileOpen ? "text-white" : "text-[var(--color-boutique-ink)]"}`} />
              ) : (
                <Menu className={`w-5 h-5 ${transparent ? "text-white" : "text-[var(--color-boutique-ink)]"}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--color-boutique-bg)] flex flex-col justify-center items-center gap-10 transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <span className="font-serif text-2xl italic tracking-[0.15em] text-[var(--color-boutique-gold)] mb-4">
          La Signora
        </span>
        <nav className="flex flex-col items-center gap-7">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-sans font-light text-sm uppercase tracking-[0.25em] transition-colors duration-300 ${
                pathname === href
                  ? "text-[var(--color-boutique-accent)]"
                  : "text-[var(--color-boutique-ink)] hover:text-[var(--color-boutique-accent)]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="/reservas"
          className="mt-6 font-sans text-[11px] uppercase tracking-[0.2em] px-10 py-4 bg-[var(--color-boutique-accent)] text-white border border-[var(--color-boutique-accent)] hover:bg-[var(--color-boutique-gold)] transition-all duration-300"
        >
          Reservar Mesa
        </Link>
      </div>
    </>
  );
}
