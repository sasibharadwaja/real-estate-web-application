import React from "react";
import { ShieldCheck, Sparkles, Layers, MapPin, Compass, ArrowRight } from "lucide-react";

interface HeroProps {
  onCtaclick: (sectionId: string) => void;
}

export default function Hero({ onCtaclick }: HeroProps) {
  const highlights = [
    {
      title: "Trusted Guidance",
      description: "16+ years of transparent dealings",
      icon: ShieldCheck,
    },
    {
      title: "Premium Properties",
      description: "Handpicked high-value listings",
      icon: Sparkles,
    },
    {
      title: "Verified Layouts",
      description: "NUDA & DTCP approved options",
      icon: Layers,
    },
    {
      title: "Multiple Locations",
      description: "Bengaluru, Hyderabad & coastal hubs",
      icon: MapPin,
    },
    {
      title: "Personalized Assistance",
      description: "Custom advice for your goals",
      icon: Compass,
    },
  ];

  return (
    <section id="home" className="relative pt-24 bg-[#050505] overflow-hidden">
      {/* Background and Ambient Light Effects */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/30 via-[#050505] to-[#050505]" />
      
      {/* Premium Hero Image with elegant diagonal slit & overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-45 bg-cover bg-center bg-no-repeat brightness-85"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop')`,
        }}
      />
      
      {/* Abstract Design Vector Lines overlay from the Design HTML */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-40 mix-blend-overlay pointer-events-none z-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L50 20 L100 100" stroke="white" fill="none" strokeWidth="0.5" strokeOpacity="0.2" />
          <path d="M20 100 L60 40 L90 100" stroke="white" fill="none" strokeWidth="0.3" strokeOpacity="0.1" />
        </svg>
      </div>
      
      {/* Silver metallic mesh-like linear gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-28 md:pb-32">
        <div className="max-w-3xl">
          {/* Subtle Accent Tag */}
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-slate-300 animate-pulse" />
            <span className="text-[10px] text-slate-300 uppercase tracking-widest font-bold">
              Authorized Senior Real Estate Consultant
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-tight mb-6">
            Where Every Plot Tells a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-100 to-slate-300 font-bold italic">
              Premium Story.
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-400 font-light leading-relaxed mb-10 max-w-2xl">
            Secure your legacy. Specializing in high-yield plots, approved layouts, and residential masterpieces across South India with absolute transparency and unmatched professional expertise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onCtaclick("projects")}
              className="px-8 py-4 bg-gradient-to-r from-slate-400 to-slate-200 hover:from-slate-300 hover:to-white text-black font-bold uppercase tracking-widest text-xs rounded shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 flex items-center justify-center space-x-2 active:scale-95 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onCtaclick("contact")}
              className="px-8 py-4 bg-transparent hover:bg-white/5 text-white font-bold uppercase tracking-widest text-xs rounded border border-slate-600 hover:border-slate-400 transition-all duration-300 flex items-center justify-center active:scale-95 cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#0a0a0a]/90 backdrop-blur-sm rounded-2xl border border-white/5 shadow-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center p-3 transition-transform hover:-translate-y-1 duration-300 ${
                    index >= 2 ? "pt-6 md:pt-3" : "pt-3"
                  } ${index > 0 ? "md:pl-4" : ""}`}
                >
                  <div className="p-3 bg-white/5 rounded-full mb-3 border border-white/5 text-slate-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white text-xs font-semibold mb-1 tracking-wider uppercase">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-[11px] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
