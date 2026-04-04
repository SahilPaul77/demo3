"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Treatments', href: '#services' },
    { name: 'The Clinic', href: '#clinic' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
        ? 'bg-white/80 backdrop-blur-md border-stone-200 py-4 shadow-sm' 
        : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo / Brand Name */}
        <Link href="/" className="group flex flex-col">
          <span className={`font-serif text-2xl tracking-tighter transition-colors duration-500 ${scrolled ? 'text-slate-950' : 'text-white'}`}>
            AURA <span className="font-light italic">DENTAL</span>
          </span>
        
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-[11px] uppercase tracking-[0.3em] font-medium hover:opacity-50 transition-all duration-300 ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="/contact" 
            className={`px-8 py-3 text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${
              scrolled 
              ? 'bg-slate-950 text-white hover:bg-stone-800' 
              : 'border border-white/30 text-white backdrop-blur-sm hover:bg-white hover:text-slate-950'
            }`}
          >
            Inquire
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden flex flex-col gap-1.5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`h-[1px] w-6 transition-all ${scrolled || isOpen ? 'bg-slate-950' : 'bg-white'} ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-[1px] w-6 transition-all ${scrolled || isOpen ? 'bg-slate-950' : 'bg-white'} ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-[1px] w-6 transition-all ${scrolled || isOpen ? 'bg-slate-950' : 'bg-white'} ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-stone-50 transition-all duration-700 flex flex-col justify-center items-center gap-10 lg:hidden ${
        isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full'
      }`}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-serif text-slate-950 hover:italic transition-all"
          >
            {link.name}
          </Link>
        ))}
        <Link 
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="mt-4 px-12 py-4 border border-slate-950 text-slate-950 uppercase tracking-widest text-xs"
        >
          Book Consultation
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;