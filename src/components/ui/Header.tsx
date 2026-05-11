'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { SALON_INFO } from '@/lib/constants/services';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Agendamento', href: '/agendamento-e-contato' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-brand font-black text-gray-900 tracking-tighter flex items-center gap-1 uppercase">
              JULIANA<span className="text-rose-500">MOURA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold text-gray-500 hover:text-rose-500 transition-colors uppercase tracking-[0.2em]"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/agendamento-e-contato"
              className="inline-flex items-center px-8 py-3.5 border border-transparent text-xs font-black rounded-full shadow-xl shadow-rose-500/10 text-white bg-gray-900 hover:bg-rose-600 hover:-translate-y-0.5 active:translate-y-0 transition-all uppercase tracking-widest"
            >
              Agendar
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-900 hover:text-rose-500 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 top-20 bg-white z-40 md:hidden transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-10 space-y-8 h-full bg-white/50 backdrop-blur-3xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-serif font-bold text-gray-900 hover:text-pink-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-10">
            <Link
              href="/agendamento-e-contato"
              onClick={() => setIsOpen(false)}
              className="inline-block w-full text-center py-5 bg-gray-900 text-white rounded-full font-bold text-xl shadow-xl shadow-pink-500/10"
            >
              Agendar Agora
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
