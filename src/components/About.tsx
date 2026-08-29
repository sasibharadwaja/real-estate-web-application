import React, { useState } from "react";
import {
  Clock,
  ShieldCheck,
  FileCheck,
  Compass,
  MapPin,
  Users,
  Award,
  Calendar,
  Briefcase
} from "lucide-react";
import MadhuPortrait from "./MadhuPortrait";

export default function About() {
  const [imageIndex, setImageIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const candidatePaths = [
    "/assets/madhu.png",
    "/madhu.png",
    "/madhu_profile.jpg",
    "/madhu_bharadwaja.jpg",
    "/assets/madhu_bharadwaja.jpg",
    "/profile.jpg",
  ];

  const handleImageError = () => {
    if (imageIndex < candidatePaths.length - 1) {
      setImageIndex(prev => prev + 1);
    } else {
      setHasError(true);
    }
  };

  const stats = [
    {
      title: "16+ Years of Real Estate Experience",
      description: "A seasoned industry veteran with depth of knowledge in legalities, lands, and corporate management.",
      icon: Clock,
    },
    {
      title: "Trusted & Transparent Guidance",
      description: "Complete clarity in transactions, titles, and paperwork without hidden charges or legal surprises.",
      icon: ShieldCheck,
    },
    {
      title: "Verified Properties & Approved Layouts",
      description: "Specializing strictly in NUDA and DTCP approved layouts, safeguarding your hard-earned investments.",
      icon: FileCheck,
    },
    {
      title: "Personalized Property Consultation",
      description: "Direct strategic advice customized to your exact requirements, budget limits, and future appreciation goals.",
      icon: Compass,
    },
    {
      title: "Presence Across Multiple Cities",
      description: "Widespread real estate network connecting premium plots and ready-to-move homes in major growth hubs.",
      icon: MapPin,
    },
    {
      title: "Customer-First Approach",
      description: "A client-centric philosophy focusing on active listening, responsive coordination, and lifelong trust.",
      icon: Users,
    },
  ];

  return (
    <section id="about" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">
            About Me
          </h2>
          <p className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-4">
            Meet <span className="font-bold italic text-slate-300">Madhu Bharadwaja</span>
          </p>
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-4" />
        </div>

        {/* Profile Card & Bio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Column 1: Image container */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative max-w-sm w-full overflow-hidden flex justify-center">
              {!hasError ? (
                <div className="relative overflow-hidden rounded-xl w-full">
                  <img
                    src={candidatePaths[imageIndex]}
                    alt="Madhu Bharadwaja"
                    className="w-full h-auto object-cover rounded-xl aspect-[4/5]"
                    onError={handleImageError}
                    referrerPolicy="no-referrer"
                  />
                  {/* Soft vignette overlays to isolate and blend edges softly into pure solid black */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_45%,_#000000_100%)] pointer-events-none mix-blend-multiply" />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
                </div>
              ) : (
                <img
                src={candidatePaths[imageIndex]}
                alt="Madhu Bharadwaja"
                className="w-full h-auto object-cover rounded-xl aspect-[4/5]"
                onError={handleImageError}
                referrerPolicy="no-referrer"
                />
              )}
            </div>

            {/* Quick Contact Badges under portrait */}
            <div className="mt-6 flex flex-col space-y-2.5 w-full max-w-sm bg-[#0a0a0a]/90 border border-white/5 p-5 rounded-2xl">
              <div className="flex items-center space-x-3 text-xs text-slate-400">
                <Briefcase className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Senior General Manager at <strong className="text-white font-medium">SREA Infra Developers</strong></span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-slate-400">
                <Award className="w-4 h-4 text-slate-500 shrink-0" />
                <span>16+ Years Industry Experience</span>
              </div>
            </div>
          </div>

          {/* Column 2: Biography & Timeline */}
          <div className="lg:col-span-7 flex flex-col">
            <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-6">
              Expert Real Estate <span className="font-bold italic text-slate-300">Wealth Advisor</span>
            </h3>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
              I am <strong className="text-white font-medium">Madhu Bharadwaja</strong> (Madhu Sudhana Rao Bharadwaja), currently serving as the <strong className="text-white font-medium">Senior General Manager</strong> at <strong className="text-white font-medium">SREA Infra Developers</strong>. With a professional real estate journey spanning over 16 years, I have made it my core mission to help clients navigate the complexity of land acquisitions and housing investments with clarity and peace of mind.
            </p>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">
              My approach focuses heavily on <strong className="text-white font-medium">transparency, trust, and fostering long-term relationships</strong>. I have successfully guided numerous customers in purchasing verified residential plots, apartments, premium villas, and commercial properties. By prioritizing legal clearances, government approved layouts (NUDA & DTCP), and honest consultations, I ensure that your investments are safeguarded and positioned for maximum long-term growth.
            </p>

            {/* Professional Timeline */}
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-6 flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Professional Journey
            </h4>

            <div className="border-l border-white/5 ml-3 space-y-8 mb-8">
              {/* SREA */}
              <div className="relative pl-8 group">
                <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-slate-300 border border-[#050505] group-hover:scale-125 transition-transform duration-300" />
                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500 block mb-1">
                  05 September 2021 – Present
                </span>
                <h5 className="text-sm font-semibold text-white tracking-wide">
                  Senior General Manager
                </h5>
                <p className="text-xs text-slate-400 font-light mt-0.5">
                  SREA Infra Developers
                </p>
                <p className="text-slate-400 text-xs mt-2 font-light leading-relaxed">
                  Leading strategic real estate developments, overseeing land sourcing, planning, and guiding premium clientele through successful site matching and layout developments.
                </p>
              </div>

              {/* Welfare Group */}
              <div className="relative pl-8 group">
                <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-white/10 border border-[#050505] group-hover:scale-125 transition-transform duration-300" />
                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-600 block mb-1">
                  March 2007 – September 2019
                </span>
                <h5 className="text-sm font-semibold text-slate-300 tracking-wide">
                  Executive Commissioner
                </h5>
                <p className="text-xs text-slate-500 font-light mt-0.5">
                  Welfare Group of Companies
                </p>
                <p className="text-slate-400 text-xs mt-2 font-light leading-relaxed">
                  Managed corporate welfare initiatives, housing layouts, land clearances, and developed foundational client management protocols based on transparency and high standard code of ethics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Work With Me Section */}
        <div className="border-t border-white/5 pt-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-2xl font-light tracking-tight text-white mb-4">
              Why Work <span className="font-bold italic text-slate-300">With Me?</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              With over 16 years of experience in the real estate industry, I am committed to helping clients make confident and informed property decisions. My approach is built on trust, transparency, and long-term relationships, ensuring every client receives professional guidance throughout their real estate journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl hover:border-slate-500/40 hover:bg-[#0f0f0f] transition-all duration-300 flex flex-col items-start shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
                >
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-300 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-2">
                    {stat.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-light">
                    {stat.description}
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
