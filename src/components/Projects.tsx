import React from "react";
import {
  ShieldCheck,
  Key,
  Building,
  Layers,
  BadgeCheck,
  FileCheck,
  Home,
  Gem,
  Briefcase,
  Trees,
  ArrowUpRight
} from "lucide-react";

interface ProjectsProps {
  onContactClick: () => void;
}

export default function Projects({ onContactClick }: ProjectsProps) {
  const categories = [
    {
      title: "Gated Community Projects",
      description: "Premium secure townships with state-of-the-art amenities, wide roads, parks, and around-the-clock security systems.",
      icon: ShieldCheck,
      badge: "Secure Living",
    },
    {
      title: "Ready-to-Move Properties",
      description: "Beautifully finished apartments, villas, and individual houses ready for registration and immediate move-in.",
      icon: Key,
      badge: "Zero Delay",
    },
    {
      title: "Apartments",
      description: "Modern 2, 3, and 4 BHK high-rise residences with optimized spaces, natural ventilation, and premium urban locations.",
      icon: Building,
      badge: "Urban Prime",
    },
    {
      title: "Residential Plots",
      description: "High-yield investment plots in rapidly growing neighborhoods, complete with water, electricity, and blacktop roads.",
      icon: Layers,
      badge: "High Growth",
    },
    {
      title: "NUDA Approved Layouts",
      description: "Nellore Urban Development Authority approved layouts ensuring 100% legal clearance, clear titles, and immediate construction.",
      icon: BadgeCheck,
      badge: "NUDA Verified",
    },
    {
      title: "DTCP Approved Layouts",
      description: "Directorate of Town and Country Planning approved layouts offering state-guaranteed layout standards and legal peace of mind.",
      icon: FileCheck,
      badge: "DTCP Certified",
    },
    {
      title: "Individual Houses",
      description: "Independent single-family homes with private terraces, parking, and custom spaces designed for lifelong comfort.",
      icon: Home,
      badge: "Privacy First",
    },
    {
      title: "Villas",
      description: "High-end ultra-luxury houses featuring premium architecture, private gardens, and high-class gated communities.",
      icon: Gem,
      badge: "Luxury Premium",
    },
    {
      title: "Commercial Sites",
      description: "Strategic roadside commercial plots and structures optimized for high visibility, offices, retail spaces, and heavy footfall.",
      icon: Briefcase,
      badge: "Business Yield",
    },
    {
      title: "Agricultural Lands",
      description: "Fertile, clear-titled agricultural farm lands and managed orchards, perfect for long-term sustainability and serene getaways.",
      icon: Trees,
      badge: "Green Investment",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-[#050505] text-white relative">
      {/* Decorative vertical silver-grey gradient lines for technical premium aesthetic */}
      <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 left-3/4 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">
            Our Portfolio
          </h2>
          <p className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-4">
            Property Categories <span className="font-bold italic text-slate-300">We Deal With</span>
          </p>
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-6" />
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
            From verified residential plots in coastal cities to commercial spaces in metropolitan areas, we bring you properties that guarantee both security and strong appreciation.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#0a0a0a] hover:bg-[#0f0f0f] border border-white/5 hover:border-slate-500/40 p-8 rounded-2xl transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.4)] flex flex-col justify-between"
              >
                <div>
                  {/* Card Header with Icon & Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-300 group-hover:text-black group-hover:bg-gradient-to-br group-hover:from-slate-200 group-hover:to-slate-400 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-bold tracking-[0.15em] uppercase bg-white/5 px-2.5 py-1 border border-white/5 text-slate-400 rounded">
                      {cat.badge}
                    </span>
                  </div>

                  {/* Card Info */}
                  <h3 className="text-base font-semibold text-white mb-3 tracking-wide group-hover:text-slate-200 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-400 text-[12px] leading-relaxed mb-6 font-light">
                    {cat.description}
                  </p>
                </div>

                {/* Card CTA */}
                <button
                  onClick={onContactClick}
                  className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors mt-2 cursor-pointer"
                >
                  <span>Inquire Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <div className="mt-12 bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div>
            <h3 className="text-base font-semibold text-white mb-2">Looking for a tailored property layout?</h3>
            <p className="text-slate-400 text-xs font-light max-w-xl">
              We assist customers in getting personalized layouts and site surveys based on individual budget and requirements. Reach out to coordinate.
            </p>
          </div>
          <button
            onClick={onContactClick}
            className="px-6 py-3 bg-gradient-to-r from-slate-400 to-slate-200 hover:from-slate-300 hover:to-white text-black font-bold text-xs uppercase tracking-widest rounded transition-all whitespace-nowrap cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          >
            Schedule Site Visit
          </button>
        </div>
      </div>
    </section>
  );
}
