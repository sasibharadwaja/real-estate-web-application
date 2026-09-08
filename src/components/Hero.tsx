import React from "react";
import heroImage from "../../assets/hero-city.png";
import {
  ShieldCheck,
  Sparkles,
  Layers,
  MapPin,
  Compass,
  ArrowRight,
} from "lucide-react";

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
    <section
      id="home"
      className="relative pt-24 bg-[#f7f9fc] overflow-hidden"
    >
      {/* Hero Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Very Subtle Overlay for Text Readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950/40 via-slate-900/25 to-transparent pointer-events-none" />

      {/* Very Soft Bottom Blend */}
      <div className="absolute inset-x-0 bottom-0 h-32 z-0 bg-gradient-to-t from-[#f7f9fc]/35 to-transparent pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-28 md:pb-32">
        <div className="max-w-3xl">

          {/* Accent Tag */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-[4px] backdrop-saturate-150 border border-white/40 px-4 py-2 rounded-full mb-6 shadow-[0_4px_20px_rgba(15,23,42,0.12)]">
            <span className="w-2 h-2 rounded-full bg-blue-700 animate-pulse" />

            <span className="text-[10px] text-slate-800 uppercase tracking-widest font-bold">
              Authorized Senior Real Estate Consultant
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight leading-tight mb-6">
            Where Every Plot Tells a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-[#40578a] font-bold italic whitespace-nowrap">
              Premium Story.
            </span>
          </h1>

          {/* Description with Side Accent */}
          <div className="relative max-w-2xl mb-10 pl-5 border-l-2 border-gradient-to-b border-white/70">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/20 via-slate-950/10 to-transparent rounded-r-xl" />

            <p className="text-sm sm:text-base md:text-lg text-white/95 font-light leading-relaxed">
              Discover premium plots, villas, and properties across South India —
              with trusted guidance every step of the way.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onCtaclick("projects")}
              className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase tracking-widest text-xs rounded-[1.25rem] shadow-[0_8px_25px_rgba(15,23,42,0.15)] transition-all duration-300 flex items-center justify-center space-x-2 active:scale-95 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onCtaclick("contact")}
              className="px-8 py-4 bg-white/70 backdrop-blur-[3px] hover:bg-white/85 text-slate-900 font-bold uppercase tracking-widest text-xs rounded-[1.25rem] border border-white/80 hover:border-white shadow-sm transition-all duration-300 flex items-center justify-center active:scale-95 cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white/15 backdrop-blur-[3px] rounded-3xl border border-white/40 shadow-[0_8px_30px_rgba(15,23,42,0.10)] p-8 relative overflow-hidden">

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center p-3 transition-transform hover:-translate-y-1 duration-300 ${
                    index >= 2 ? "pt-6 md:pt-3" : "pt-3"
                  } ${index > 0 ? "md:pl-4" : ""}`}
                >
                  {/* Liquid Glass Icon Bubble */}
                  <div className="p-3 bg-white/15 backdrop-blur-[3px] rounded-full mb-3 border border-white/40 text-white shadow-[0_4px_15px_rgba(15,23,42,0.10)] transition-all duration-300 group-hover:bg-white/20">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-white text-xs font-semibold mb-1 tracking-wider uppercase">
                    {item.title}
                  </h3>

                  <p className="text-white/80 text-[11px] leading-relaxed font-light">
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