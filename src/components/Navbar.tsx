import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Projects", id: "projects" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const handleItemClick = (id: string) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Premium Silver Gradient Accent Line at the absolute top */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-60 z-[60] pointer-events-none" />

      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#0a0a0a]/95 border-white/10 shadow-lg shadow-black/60 backdrop-blur-md py-3"
            : "bg-[#050505]/90 border-white/5 py-5 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo Section */}
            <div className="flex-shrink-0 cursor-pointer flex items-center transition-transform duration-300 hover:scale-[1.03]" onClick={() => handleItemClick("home")}>
              <Logo className="text-slate-200 hover:text-white transition-colors" height="3.5rem" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-200 relative py-1 ${
                    activeSection === item.id
                      ? "text-white font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-slate-400 to-slate-200 rounded-full" />
                  )}
                </button>
              ))}
              <button
                onClick={() => handleItemClick("contact")}
                className="px-6 py-2.5 bg-gradient-to-r from-slate-400 to-slate-200 hover:from-slate-300 hover:to-white text-black text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] active:scale-95 cursor-pointer"
              >
                Get Consultation
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-neutral-900 focus:outline-none transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-screen opacity-100 border-t border-white/5 bg-[#0a0a0a]/95" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="px-2 pt-3 pb-6 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-md text-xs font-medium uppercase tracking-wider transition-colors ${
                  activeSection === item.id
                    ? "bg-white/5 text-white border-l-2 border-slate-300"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 mt-4">
              <button
                onClick={() => handleItemClick("contact")}
                className="w-full py-3 bg-gradient-to-r from-slate-400 to-slate-200 text-black text-xs font-bold uppercase tracking-widest rounded text-center block transition-all"
              >
                Get Consultation
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
