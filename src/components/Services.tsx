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
    },
    {
      title: "Residential Plots",
      description:
        "Assistance in finding, verifying, and buying premium residential layouts with complete clear titles and legal permissions.",
      icon: Layers,
    },
    {
      title: "Apartments",
      description:
        "Carefully curated listing of ultra-modern, spacious apartments from renowned builders, customized to your spatial preferences.",
      icon: Building,
    },
    {
      title: "Villas",
      description:
        "Luxury independent villa properties in exclusive gated communities featuring world-class construction and pristine landscaping.",
      icon: Gem,
    },
    {
      title: "Individual Houses",
      description:
        "Locating and registering premium independent houses offering complete spatial control, quiet neighborhoods, and absolute comfort.",
      icon: Home,
    },
    {
      title: "Commercial Properties",
      description:
        "Strategic commercial sites, offices, and plots with high foot traffic and high potential rental yields for smart business owners.",
      icon: Building2,
    },
    {
      title: "Agricultural Lands",
      description:
        "Premium farm lands, arable agricultural acreage, and green farm plots for sustainable investments or leisure weekend farms.",
      icon: Trees,
    },
    {
      title: "Site Visits",
      description:
        "Complimentary, fully assisted site visits to let you physically examine property layouts, soil quality, roads, and neighborhoods first-hand.",
      icon: Eye,
    },
    {
      title: "Investment Guidance",
      description:
        "In-depth future value analysis, local price history trends, development forecasts, and strategic asset allocation advice.",
      icon: TrendingUp,
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
                className="bg-[#f8fafc] border border-slate-200 hover:border-slate-300 hover:bg-white p-8 rounded-2xl transition-all duration-300 group flex flex-col items-start shadow-[0_8px_30px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_35px_rgba(15,23,42,0.09)]"
              >
                {/* Icon */}
                <div className="p-3 bg-white border border-slate-200 rounded-xl text-slate-700 group-hover:text-white group-hover:bg-slate-900 transition-all duration-300 mb-6 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Service Title */}
                <h3 className="text-base font-semibold text-slate-900 mb-3 tracking-wide">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-xs leading-relaxed mb-6 font-light">
                  {svc.description}
                </p>

                {/* CTA */}
                <div className="mt-auto">
                  <button
                    onClick={onContactClick}
                    className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors cursor-pointer hover:underline underline-offset-4 decoration-slate-300 hover:decoration-slate-700"
                  >
                    Discuss Service &rarr;
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}