import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";
import Logo from "./Logo";

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/officialplotstories/",
      icon: Facebook,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/plot_stories26?utm_source=qr&igsi=MXJ2ZnFuaXcwZGdhOQ==",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/madhu-bharadwaja-7742a7422/",
      icon: Linkedin,
    },
    {
      name: "YouTube",
      url: "http://www.youtube.com/@plotstories26",
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
    <footer className="bg-[#eef2f7] text-slate-500 border-t border-slate-200 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upper Footer: Logo and Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Logo Column */}
          <div className="md:col-span-5 flex flex-col justify-start">
            <div
              className="flex-shrink-0 cursor-pointer mb-6 flex items-center transition-transform duration-300 hover:scale-[1.03]"
              onClick={() => onNavClick("home")}
            >
              <Logo
                className="text-slate-700 hover:text-slate-900 transition-colors"
                height="3.0rem"
              />
            </div>

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm font-light">
              PlotStories is a premium consultancy initiative helping
              customers secure authorized gated communities, verified
              residential layouts, high-growth plots, and agricultural farm
              lands in South India.
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
                    className="p-2.5 bg-white hover:bg-slate-900 border border-slate-200 hover:border-slate-900 rounded-xl text-slate-500 hover:text-white transition-all duration-300 shadow-sm"
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
            <h4 className="text-slate-900 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavClick(link.id)}
                    className="text-xs hover:text-slate-900 text-slate-500 transition-colors block text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4">
            <h4 className="text-slate-900 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Contact Information
            </h4>

            <ul className="space-y-4">
              {/* Email */}
              <li className="flex items-start space-x-3 text-xs text-slate-500">
                <Mail className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />

                <div>
                  <p className="text-slate-400 text-[9px] uppercase font-bold tracking-widest leading-none mb-1">
                    Email
                  </p>

                  <a
                    href="mailto:contact@plotstories.in"
                    className="hover:text-slate-900 transition-colors"
                  >
                    contact@plotstories.in
                  </a>
                </div>
              </li>

              {/* WhatsApp */}
              <li className="flex items-start space-x-3 text-xs text-slate-500">
                <MessageCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />

                <div>
                  <p className="text-slate-400 text-[9px] uppercase font-bold tracking-widest leading-none mb-1">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/919490321363"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-slate-900 transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </li>

              {/* Affiliation */}
              <li className="flex items-start space-x-3 text-xs text-slate-500">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />

                <div>
                  <p className="text-slate-400 text-[9px] uppercase font-bold tracking-widest leading-none mb-1">
                    Affiliation
                  </p>

                  <span className="text-slate-900 font-medium">
                    SREA Infra Developers
                  </span>

                  <p className="text-[11px] text-slate-400">
                    Premium Real Estate Layouts & Projects
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Footer: Copyright & Scroll to Top */}
        <div className="border-t border-slate-200 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center text-center gap-4">
          <p className="text-[10px] sm:text-xs text-slate-400">
            © 2026 PlotStories. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-3 bg-white border border-slate-200 hover:border-slate-400 text-slate-500 hover:text-slate-900 rounded-full transition-all duration-300 shadow-sm flex items-center justify-center cursor-pointer"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}