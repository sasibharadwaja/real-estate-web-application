import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ArrowUp
} from "lucide-react";
import Logo from "./Logo";

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/bmsrelitestates/",
      icon: Facebook,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/madhu_realestate?igsh=aWEzaWFwd3ZmN2hs",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/madhu-bharadwaja-7742a7422/",
      icon: Linkedin,
    },
    {
      name: "YouTube",
      url: "http://www.youtube.com/@madhu5238",
      icon: Youtube,
    },
  ];

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "Projects", id: "projects" },
    { label: "Services", id: "services" },
    { label: "About", id: "about" },
    { label: "Contact Us", id: "contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] text-slate-400 border-t border-white/5 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Footer: Logo and Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Logo Column */}
          <div className="md:col-span-5 flex flex-col justify-start">
            <div className="flex-shrink-0 cursor-pointer mb-6 flex items-center transition-transform duration-300 hover:scale-[1.03]" onClick={() => onNavClick("home")}>
              <Logo className="text-slate-200 hover:text-white transition-colors" height="2.5rem" />
            </div>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm font-light">
              PlotStories is a premium consultancy initiative helping customers secure authorized gated communities, verified residential layouts, high-growth plots, and agricultural farm lands in South India.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white/5 hover:bg-[#050505] border border-white/10 hover:border-slate-500/40 rounded-xl text-slate-400 hover:text-white transition-all duration-300"
                    aria-label={`Visit Madhu's ${social.name}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavClick(link.id)}
                    className="text-xs hover:text-white text-slate-400 transition-colors block text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Contact Information
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-xs text-slate-400">
                <Mail className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-500 text-[9px] uppercase font-bold tracking-widest leading-none mb-1">Email</p>
                  <a href="mailto:contact@plotstories.in" className="hover:text-white transition-colors">
                    contact@plotstories.in
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-xs text-slate-400">
                <MessageCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-500 text-[9px] uppercase font-bold tracking-widest leading-none mb-1">WhatsApp</p>
                  <a
                  href="https://wa.me/919490321363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  >
                  Chat on WhatsApp
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-500 text-[9px] uppercase font-bold tracking-widest leading-none mb-1">Affiliation</p>
                  <span className="text-white font-medium">SREA Infra Developers</span>
                  <p className="text-[11px] text-slate-500">Premium Real Estate Layouts & Projects</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Footer: Copyright & Scroll to Top */}
        <div className="border-t border-white/5 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center text-center gap-4">
          <p className="text-[10px] sm:text-xs text-slate-600">
            © 2026 PlotStories. All Rights Reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="p-3 bg-white/5 border border-white/10 hover:border-slate-500/40 text-slate-400 hover:text-white rounded-full transition-all duration-300 shadow-md flex items-center justify-center cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
