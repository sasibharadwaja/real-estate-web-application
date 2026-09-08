import React, { useState } from "react";
import madhuImage from "../../assets/madhu.png";
import {
  Clock,
  ShieldCheck,
  FileCheck,
  Compass,
  MapPin,
  Users,
  Award,
  Calendar,
  Briefcase,
} from "lucide-react";

export default function About() {
  const [imageIndex, setImageIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const candidatePaths = [madhuImage];

  const handleImageError = () => {
    if (imageIndex < candidatePaths.length - 1) {
      setImageIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  const stats = [
    {
      title: "16+ Years of Real Estate Experience",
      description:
        "A seasoned industry veteran with depth of knowledge in legalities, lands, and corporate management.",
      icon: Clock,
    },
    {
      title: "Trusted & Transparent Guidance",
      description:
        "Complete clarity in transactions, titles, and paperwork without hidden charges or legal surprises.",
      icon: ShieldCheck,
    },
    {
      title: "Verified Properties & Approved Layouts",
      description:
        "Specializing strictly in NUDA and DTCP approved layouts, safeguarding your hard-earned investments.",
      icon: FileCheck,
    },
    {
      title: "Personalized Property Consultation",
      description:
        "Direct strategic advice customized to your exact requirements, budget limits, and future appreciation goals.",
      icon: Compass,
    },
    {
      title: "Presence Across Multiple Cities",
      description:
        "Widespread real estate network connecting premium plots and ready-to-move homes in major growth hubs.",
      icon: MapPin,
    },
    {
      title: "Customer-First Approach",
      description:
        "A client-centric philosophy focusing on active listening, responsive coordination, and lifelong trust.",
      icon: Users,
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#f7f9fc] text-slate-900 relative overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-slate-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">
            About Me
          </h2>

          <p className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight mb-4">
            Meet{" "}
            <span className="font-bold italic text-slate-600">
              Madhu Bharadwaja
            </span>
          </p>

          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-4" />
        </div>

        {/* Profile & Bio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Column 1: Seamless Portrait */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="relative w-full max-w-lg lg:-ml-8">
              {!hasError ? (
                <div className="relative w-full overflow-visible">
                  <img
                    src={candidatePaths[imageIndex]}
                    alt="Madhu Bharadwaja"
                    className="w-full h-auto object-contain block"
                    onError={handleImageError}
                    referrerPolicy="no-referrer"
                  />

                  {/* Soft Bottom Fade */}
                  <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#f7f9fc] via-[#f7f9fc]/75 to-transparent pointer-events-none" />

                  {/* Soft Left Edge Fade */}
                  <div className="absolute inset-y-0 left-0 w-[14%] bg-gradient-to-r from-[#f7f9fc]/55 via-[#f7f9fc]/15 to-transparent pointer-events-none" />

                  {/* Soft Right Edge Fade */}
                  <div className="absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-[#f7f9fc]/45 via-[#f7f9fc]/10 to-transparent pointer-events-none" />
                </div>
              ) : (
                <img
                  src={candidatePaths[imageIndex]}
                  alt="Madhu Bharadwaja"
                  className="w-full h-auto object-contain block"
                  onError={handleImageError}
                  referrerPolicy="no-referrer"
                />
              )}
            </div>

            {/* Quick Contact Badges */}
            <div className="mt-2 flex flex-col space-y-2.5 w-full max-w-lg bg-white/10 backdrop-blur-[3px] border border-white/40 p-5 rounded-2xl shadow-[0_8px_30px_rgba(15,23,42,0.05)]">
              <div className="flex items-center space-x-3 text-xs text-slate-500">
                <Briefcase className="w-4 h-4 text-slate-500 shrink-0" />

                <span>
                  Senior General Manager at{" "}
                  <strong className="text-slate-900 font-medium">
                    SREA Infra Developers
                  </strong>
                </span>
              </div>

              <div className="flex items-center space-x-3 text-xs text-slate-500">
                <Award className="w-4 h-4 text-slate-500 shrink-0" />

                <span>16+ Years Industry Experience</span>
              </div>
            </div>
          </div>

          {/* Column 2: Biography & Timeline */}
          <div className="lg:col-span-7 flex flex-col">
            <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-slate-900 mb-6">
              Expert Real Estate{" "}
              <span className="font-bold italic text-slate-600">
                Wealth Advisor
              </span>
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
              I am{" "}
              <strong className="text-slate-900 font-medium">
                Madhu Bharadwaja
              </strong>{" "}
              (Madhu Sudhana Rao Bharadwaja), currently serving as the{" "}
              <strong className="text-slate-900 font-medium">
                Senior General Manager
              </strong>{" "}
              at{" "}
              <strong className="text-slate-900 font-medium">
                SREA Infra Developers
              </strong>
              . With a professional real estate journey spanning over 16 years,
              I have made it my core mission to help clients navigate the
              complexity of land acquisitions and housing investments with
              clarity and peace of mind.
            </p>

            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light">
              My approach focuses heavily on{" "}
              <strong className="text-slate-900 font-medium">
                transparency, trust, and fostering long-term relationships
              </strong>
              . I have successfully guided numerous customers in purchasing
              verified residential plots, apartments, premium villas, and
              commercial properties. By prioritizing legal clearances,
              government approved layouts (NUDA & DTCP), and honest
              consultations, I ensure that your investments are safeguarded and
              positioned for maximum long-term growth.
            </p>

            {/* Professional Timeline */}
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-6 flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Professional Journey
            </h4>

            <div className="border-l border-slate-200 ml-3 space-y-8 mb-8">
              {/* SREA */}
              <div className="relative pl-8 group">
                <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-slate-700 border border-[#f7f9fc] group-hover:scale-125 transition-transform duration-300" />

                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500 block mb-1">
                  05 September 2021 – Present
                </span>

                <h5 className="text-sm font-semibold text-slate-900 tracking-wide">
                  Senior General Manager
                </h5>

                <p className="text-xs text-slate-500 font-light mt-0.5">
                  SREA Infra Developers
                </p>

                <p className="text-slate-500 text-xs mt-2 font-light leading-relaxed">
                  Leading strategic real estate developments, overseeing land
                  sourcing, planning, and guiding premium clientele through
                  successful site matching and layout developments.
                </p>
              </div>

              {/* Welfare Group */}
              <div className="relative pl-8 group">
                <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-slate-300 border border-[#f7f9fc] group-hover:scale-125 transition-transform duration-300" />

                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 block mb-1">
                  March 2007 – September 2019
                </span>

                <h5 className="text-sm font-semibold text-slate-700 tracking-wide">
                  Executive Commissioner
                </h5>

                <p className="text-xs text-slate-500 font-light mt-0.5">
                  Welfare Group of Companies
                </p>

                <p className="text-slate-500 text-xs mt-2 font-light leading-relaxed">
                  Managed corporate welfare initiatives, housing layouts, land
                  clearances, and developed foundational client management
                  protocols based on transparency and high standard code of
                  ethics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Work With Me Section */}
        <div className="border-t border-slate-200 pt-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-2xl font-light tracking-tight text-slate-900 mb-4">
              Why Work{" "}
              <span className="font-bold italic text-slate-600">
                With Me?
              </span>
            </h3>

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
              With over 16 years of experience in the real estate industry, I
              am committed to helping clients make confident and informed
              property decisions. My approach is built on trust, transparency,
              and long-term relationships, ensuring every client receives
              professional guidance throughout their real estate journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-slate-300 hover:bg-white transition-all duration-300 flex flex-col items-start shadow-[0_8px_30px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_35px_rgba(15,23,42,0.09)]"
                >
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h4 className="text-slate-900 text-xs font-bold tracking-widest uppercase mb-2">
                    {stat.title}
                  </h4>

                  <p className="text-slate-500 text-xs leading-relaxed font-light">
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