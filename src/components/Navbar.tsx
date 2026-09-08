import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({
  onNavClick,
  activeSection,
}: NavbarProps) {
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
      {/* Premium Transparent Liquid Glass Navbar */}
      <nav
        id="main-navbar"
        className={`fixed top-3 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-300 rounded-3xl border backdrop-blur-[4px] backdrop-saturate-150 ${
          isScrolled
          ? "bg-white/20 border-white/45 shadow-[0_8px_30px_rgba(15,23,42,0.12)] py-3"
          : "bg-white/15 border-white/40 shadow-[0_8px_30px_rgba(15,23,42,0.10)] py-5"
        }`}
      >
        <div className="px-4 sm:px-5 lg:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo Section */}
            <div
              className="flex-shrink-0 cursor-pointer flex items-center transition-transform duration-300 hover:scale-[1.03]"
              onClick={() => handleItemClick("home")}
            >
              <Logo
                className="text-slate-700 hover:text-slate-900 transition-colors"
                height="3.5rem"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-200 relative py-1 ${
                    activeSection === item.id
                      ? "text-slate-900 font-semibold"
                      : "text-slate-700 hover:text-slate-950"
                  }`}
                >
                  {item.label}

                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-slate-700 to-slate-400 rounded-full" />
                  )}
                </button>
              ))}

              {/* Get Consultation */}
              <button
                onClick={() => handleItemClick("consultation-form")}
                className="px-6 py-2.5 bg-slate-900/90 hover:bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 shadow-[0_4px_15px_rgba(15,23,42,0.18)] active:scale-95 cursor-pointer"
              >
                Get Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-950 hover:bg-white/20 focus:outline-none transition-colors"
                aria-expanded={isOpen}
              >
                <span className="sr-only">
                  {isOpen ? "Close main menu" : "Open main menu"}
                </span>

                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen
              ? "max-h-screen opacity-100 border-t border-white/30 bg-white/20"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="px-2 pt-3 pb-6 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-md text-xs font-medium uppercase tracking-wider transition-colors ${
                  activeSection === item.id
                    ? "bg-white/25 text-slate-900 border-l-2 border-slate-700"
                    : "text-slate-700 hover:bg-white/20 hover:text-slate-950"
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="px-4 mt-4">
              <button
                onClick={() => handleItemClick("consultation-form")}
                className="w-full py-3 bg-slate-900/90 hover:bg-slate-900 text-white text-xs font-bold uppercase tracking-widest rounded text-center block transition-all"
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