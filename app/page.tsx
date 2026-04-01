"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // ✅ icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ FIXED scroll (mobile safe)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;
      setScrolled(scrollTop > 20);
    };

    handleScroll(); // run once
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Philosophy", href: "#philosophy" },
    { name: "Treatments", href: "#services" },
    { name: "The Clinic", href: "#clinic" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-stone-200 py-4 shadow-sm"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span
            className={`font-serif text-2xl transition-colors ${
              scrolled ? "text-slate-950" : "text-red-600"
            }`}
          >
            Smile <span className="italic font-light">Care</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[11px] uppercase tracking-[0.3em] ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className={`px-8 py-3 text-[10px] uppercase ${
              scrolled
                ? "bg-slate-950 text-white"
                : "border border-white/30 text-white"
            }`}
          >
            Inquire
          </Link>
        </div>

        {/* ✅ Mobile Toggle with Icons */}
        <button
          className="lg:hidden z-[9999]"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <X
              size={28}
              className={scrolled ? "text-black" : "text-black"}
            />
          ) : (
            <Menu
              size={28}
              className={scrolled ? "text-black" : "text-red"}
            />
          )}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-[9999] bg-stone-50 flex flex-col justify-center items-center gap-10 transform transition-transform duration-500 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-serif text-slate-950 hover:italic"
          >
            {link.name}
          </Link>
        ))}

        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="mt-4 px-12 py-4 border border-slate-950 text-slate-950 uppercase text-xs"
        >
          Book Consultation
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;