"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "À propos", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Avis", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-black/95 backdrop-blur-md border-b border-brand-gold/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-[4%] lg:px-[5%] flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col">
          <a href="#" className="font-serif text-brand-gold text-2xl lg:text-3xl tracking-tight">
            Lyon VTC Premium
          </a>
          <span className="text-brand-white uppercase text-[0.65rem] tracking-[0.2em] mt-1">
            Chauffeur Privé · Lyon
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-brand-gold transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="bg-brand-gold text-brand-black px-6 py-2.5 rounded-sm font-semibold text-sm hover:bg-brand-gold-light transition-colors"
          >
            Réserver
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-brand-gold p-2"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-brand-black z-50 flex flex-col pt-24 px-6"
          >
            <button
              className="absolute top-6 right-6 text-brand-gold"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <X size={32} />
            </button>
            <ul className="flex flex-col items-center gap-8 text-2xl font-serif">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:text-brand-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-12 bg-brand-gold text-brand-black px-8 py-4 rounded-sm font-semibold text-lg text-center hover:bg-brand-gold-light transition-colors w-full uppercase tracking-wider"
            >
              Réserver maintenant
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
