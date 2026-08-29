import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Sparkles,
  Loader2,
  CheckCircle2
} from "lucide-react";
import { ContactFormData } from "../types";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    phoneNumber: "",
    city: "",
    emailAddress: "",
    interestedIn: "Plot & Flat",
    preferredLocation: "Nellore",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const locations = [
    { name: "Bengaluru", note: "Silicon Valley Hub" },
    { name: "Hyderabad", note: "Premium IT Corridors & Layouts" },
    { name: "Nellore", note: "Coastal Growth & NUDA Approved Plots" },
    { name: "Ongole", note: "Highway Expansion & Industrial Sites" },
    { name: "Gudur", note: "Mica & Education Corridor" },
    { name: "Tirupati", note: "Spiritual Hub & Premium Gated Communities" },
    { name: "Naidupeta", note: "SEZ Corridors & Commercial Sites" },
    { name: "Tada", note: "Sri City Border Industrial Hub" },
    { name: "Manubolu", note: "Highway Logistics Zone" },
    { name: "Podalakuru", note: "Rapidly Appreciating Residential Layouts" },
  ];

  const interestOptions = [
    "Plot & Flat",
    "Apartments",
    "Agricultural Lands",
    "Villas",
    "Commercial Sites",
    "Individual Houses",
    "Site Visit",
    "General Inquiry",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Validate required fields
    if (!formData.fullName.trim() || !formData.phoneNumber.trim() || !formData.emailAddress.trim()) {
      setError("Please fill in all required fields (Full Name, Phone Number, and Email).");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setSuccess("Thank you for contacting PlotStories. We will get back to you shortly.");
        // Clear form
        setFormData({
          fullName: "",
          phoneNumber: "",
          city: "",
          emailAddress: "",
          interestedIn: "Plot & Flat",
          preferredLocation: "Nellore",
          budget: "",
          message: "",
        });
      } else {
        setError(data?.message || "There was an error sending your consultation request. Please try again.");
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      setError("Unable to connect to the email service. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] text-white relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Service Locations */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">
              Where We Operate
            </h2>
            <p className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-4">
              Our Primary <span className="font-bold italic text-slate-300">Service Locations</span>
            </p>
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-6" />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
              We specialize in high-growth corridors across Andhra Pradesh, Telangana, and Karnataka. These regions are hand-selected for infrastructure expansion and rapid capital appreciation.
            </p>
          </div>

          {/* Locations grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="bg-[#0a0a0a] border border-white/5 p-5 rounded-2xl text-center transition-all duration-300 group hover:-translate-y-1 hover:border-slate-500/40"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-3 border border-white/10 text-slate-300 group-hover:text-black group-hover:bg-gradient-to-br group-hover:from-slate-200 group-hover:to-slate-400 transition-all duration-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <h4 className="text-white text-xs font-bold tracking-wider uppercase mb-1">
                  {loc.name}
                </h4>
                <p className="text-slate-500 text-[10px] leading-tight font-light">
                  {loc.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-white/5 pt-24">
          
          {/* Column 1: Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-4">
                <Sparkles className="w-3 h-3 text-slate-400" />
                <span className="text-[9px] text-slate-300 uppercase tracking-widest font-bold">
                  Free Consultation
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-6">
                Let's Find Your <span className="font-bold italic text-slate-300">Next Investment</span>
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-8 font-light">
                Whether you want to schedule an in-person site visit, ask about legal approvals (NUDA/DTCP), or discuss custom investment budgets, get in touch today. We will provide verified listings that align exactly with your goals.
              </p>
            </div>

            {/* Direct Details */}
            <div className="space-y-4 mt-6 lg:mt-0">
              <div className="flex items-center space-x-4 bg-[#0a0a0a] border border-white/5 p-4 rounded-2xl">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-300 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Call or WhatsApp</p>
                  <a href="tel:+919490321363" className="text-sm font-bold text-white hover:text-slate-300 transition-colors">
                    +91 9490321363
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-[#0a0a0a] border border-white/5 p-4 rounded-2xl">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-300 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Email Inquiry</p>
                  <a href="mailto:bmsrao2001@gmail.com" className="text-sm font-bold text-white hover:text-slate-300 transition-colors break-all">
                    bmsrao2001@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-[#0a0a0a] border border-white/5 p-4 rounded-2xl">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-slate-300 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Office Hours</p>
                  <p className="text-sm font-bold text-white">9:00 AM – 7:30 PM (Daily)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Form */}
          <div className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
            <h4 className="text-base font-semibold text-white mb-6 border-b border-white/5 pb-4">
              Consultation Request Form
            </h4>

            {error && (
              <div className="mb-6 p-4 bg-red-950/40 border border-red-900 rounded-xl text-red-200 text-xs">
                {error}
              </div>
            )}

            {success ? (
              <div className="p-8 bg-[#050505] border border-white/5 rounded-2xl text-center">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-bold text-base mb-2">Message Sent Successfully</p>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  {success}
                </p>

                <button
                  onClick={() => setSuccess(null)}
                  className="mt-2 px-6 py-3 bg-gradient-to-r from-slate-400 to-slate-200 text-black font-bold text-xs uppercase tracking-widest rounded transition-all cursor-pointer hover:from-slate-300 hover:to-white"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-[9px] text-slate-400 uppercase tracking-widest font-bold mb-1.5">
                      Full Name <span className="text-slate-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Madhav Rao"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-slate-400 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[9px] text-slate-400 uppercase tracking-widest font-bold mb-1.5">
                      Phone Number <span className="text-slate-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      required
                      placeholder="e.g. +91 94903 21363"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-slate-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-[9px] text-slate-400 uppercase tracking-widest font-bold mb-1.5">
                      Email Address <span className="text-slate-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="emailAddress"
                      required
                      placeholder="e.g. client@example.com"
                      value={formData.emailAddress}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-slate-400 transition-colors"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-[9px] text-slate-400 uppercase tracking-widest font-bold mb-1.5">
                      City <span className="text-slate-500">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="e.g. Nellore"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-slate-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Interested In */}
                  <div>
                    <label className="block text-[9px] text-slate-400 uppercase tracking-widest font-bold mb-1.5">
                      Interested In
                    </label>
                    <select
                      name="interestedIn"
                      value={formData.interestedIn}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-slate-300 text-xs focus:outline-none focus:border-slate-400 transition-colors appearance-none cursor-pointer"
                    >
                      {interestOptions.map((opt, i) => (
                        <option key={i} value={opt} className="bg-[#0a0a0a] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Location */}
                  <div>
                    <label className="block text-[9px] text-slate-400 uppercase tracking-widest font-bold mb-1.5">
                      Preferred Location
                    </label>
                    <select
                      name="preferredLocation"
                      value={formData.preferredLocation}
                      onChange={handleInputChange}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-slate-300 text-xs focus:outline-none focus:border-slate-400 transition-colors appearance-none cursor-pointer"
                    >
                      {locations.map((loc, i) => (
                        <option key={i} value={loc.name} className="bg-[#0a0a0a] text-white">
                          {loc.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-[9px] text-slate-400 uppercase tracking-widest font-bold mb-1.5">
                    Estimated Budget <span className="text-slate-500">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="budget"
                    placeholder="e.g. ₹20 Lakhs - ₹40 Lakhs"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-slate-400 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[9px] text-slate-400 uppercase tracking-widest font-bold mb-1.5">
                    Message <span className="text-slate-500">(Optional)</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your requirements, preferred plot sizes, or specific survey requests..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-xs focus:outline-none focus:border-slate-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-slate-400 to-slate-200 hover:from-slate-300 hover:to-white disabled:bg-neutral-800 text-black font-bold tracking-wider text-xs uppercase rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 active:scale-[0.99] cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Sending lead details...</span>
                    </>
                  ) : (
                    <span>Get a Free Consultation</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
