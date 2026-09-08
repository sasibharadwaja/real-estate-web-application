import React from "react";
import {
  Compass,
  Layers,
  Building,
  Gem,
  Home,
  Building2,
  Trees,
  Eye,
  TrendingUp,
} from "lucide-react";

interface ServicesProps {
  onContactClick: () => void;
}

export default function Services({ onContactClick }: ServicesProps) {
  const services = [
    {
      title: "Property Consultation",
      description:
        "One-on-one expert advice to help you clarify your requirements, assess local market trends, and make safe decisions.",
      icon: Compass,
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Residential Plots",
      description:
        "Assistance in finding, verifying, and buying premium residential layouts with complete clear titles and legal permissions.",
      icon: Layers,
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Apartments",
      description:
        "Carefully curated listing of ultra-modern, spacious apartments from renowned builders, customized to your spatial preferences.",
      icon: Building,
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Villas",
      description:
        "Luxury independent villa properties in exclusive gated communities featuring world-class construction and pristine landscaping.",
      icon: Gem,
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Individual Houses",
      description:
        "Locating and registering premium independent houses offering complete spatial control, quiet neighborhoods, and absolute comfort.",
      icon: Home,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Commercial Properties",
      description:
        "Strategic commercial sites, offices, and plots with high foot traffic and high potential rental yields for smart business owners.",
      icon: Building2,
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Agricultural Lands",
      description:
        "Premium farm lands, arable agricultural acreage, and green farm plots for sustainable investments or leisure weekend farms.",
      icon: Trees,
      image:
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Site Visits",
      description:
        "Complimentary, fully assisted site visits to let you physically examine property layouts, soil quality, roads, and neighborhoods first-hand.",
      icon: Eye,
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Investment Guidance",
      description:
        "In-depth future value analysis, local price history trends, development forecasts, and strategic asset allocation advice.",
      icon: TrendingUp,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-white text-slate-900 relative overflow-hidden"
    >
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">
            What We Offer
          </h2>

          <p className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight mb-4">
            Our Professional{" "}
            <span className="font-bold italic text-slate-600">
              Services
            </span>
          </p>

          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-6" />

          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
            With over 16 years of hands-on experience in corporate and
            client-facing real estate management, we offer complete end-to-end
            guidance to make your purchase smooth and risk-free.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, index) => {
            const Icon = svc.icon;

            return (
              <div
                key={index}
                className="relative overflow-hidden bg-[#f8fafc] border border-slate-200 hover:border-slate-300 hover:bg-white p-8 rounded-2xl transition-all duration-300 group flex flex-col items-start shadow-[0_8px_30px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_35px_rgba(15,23,42,0.09)]"
              >
                {/* Top-Right Image with Artistic Shade */}
                <div className="absolute top-0 right-0 w-36 h-28 sm:w-44 sm:h-32 overflow-hidden rounded-tr-2xl rounded-bl-[2.5rem] pointer-events-none shadow-[0_6px_20px_rgba(15,23,42,0.08)]">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Smooth gradient shade to blend seamlessly into card background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/25 to-transparent group-hover:from-white group-hover:via-white/25 transition-colors duration-300" />

                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#f8fafc]/30 to-[#f8fafc] group-hover:via-white/30 group-hover:to-white transition-colors duration-300" />

                  {/* Subtle ambient photographic shade */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/25 mix-blend-multiply" />
                </div>

                {/* Card Content */}
                <div className="relative z-10 w-full flex flex-col items-start h-full">
                  {/* Icon */}
                  <div className="p-3 bg-white border border-slate-200 rounded-xl text-slate-700 group-hover:text-white group-hover:bg-slate-900 transition-all duration-300 mb-6 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-base font-semibold text-slate-900 mb-3 tracking-wide max-w-[75%]">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-xs leading-relaxed mb-6 font-light">
                    {svc.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-auto pt-2">
                    <button
                      onClick={onContactClick}
                      className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors cursor-pointer hover:underline underline-offset-4 decoration-slate-300 hover:decoration-slate-700"
                    >
                      Discuss Service &rarr;
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}