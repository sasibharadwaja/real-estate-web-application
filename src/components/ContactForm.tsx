import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Clock,
  MessageCircle,
  Sparkles,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { ContactFormData } from "../types";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    phoneNumber: "",
    city: "",
    emailAddress: "",
    interestedIn: "",
    preferredLocation: "",
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
    {
      name: "Tirupati",
      note: "Spiritual Hub & Premium Gated Communities",
    },
    { name: "Naidupeta", note: "SEZ Corridors & Commercial Sites" },
    { name: "Tada", note: "Sri City Border Industrial Hub" },
    { name: "Manubolu", note: "Highway Logistics Zone" },
    {
      name: "Podalakuru",
      note: "Rapidly Appreciating Residential Layouts",
    },
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    if (
      !formData.fullName.trim() ||
      !formData.phoneNumber.trim() ||
      !formData.emailAddress.trim()
    ) {
      setError(
        "Please fill in all required fields (Full Name, Phone Number, and Email)."
      );
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
        setSuccess(
          "Thank you for contacting PlotStories. We will get back to you shortly."
        );

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
        setError(
          data?.message ||
            "There was an error sending your consultation request. Please try again."
        );
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      setError(
        "Unable to connect to the email service. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#f7f9fc] text-slate-900 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Service Locations */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">
              Where We Operate
            </h2>

            <p className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight mb-4">
              Our Primary{" "}
              <span className="font-bold italic text-slate-600">
                Service Locations
              </span>
            </p>

            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-6" />

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
              We specialize in high-growth corridors across Andhra Pradesh,
              Telangana, and Karnataka. These regions are hand-selected for
              infrastructure expansion and rapid capital appreciation.
            </p>
          </div>

          {/* Locations Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-5 rounded-2xl text-center transition-all duration-300 group hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
              >
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-3 border border-slate-200 text-slate-600 group-hover:text-white group-hover:bg-slate-900 transition-all duration-300">
                  <MapPin className="w-4 h-4" />
                </div>

                <h4 className="text-slate-900 text-xs font-bold tracking-wider uppercase mb-1">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-slate-200 pt-24">
          {/* Column 1: Info Cards */}
          <div
            id="contact-info"
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-3 py-1 rounded-full mb-4 shadow-sm">
                <Sparkles className="w-3 h-3 text-slate-500" />

                <span className="text-[9px] text-slate-600 uppercase tracking-widest font-bold">
                  Free Consultation
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-slate-900 mb-6">
                Let's Find Your{" "}
                <span className="font-bold italic text-slate-600">
                  Next Investment
                </span>
              </h3>

              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-8 font-light">
                Whether you want to schedule an in-person site visit, ask about
                legal approvals (NUDA/DTCP), or discuss custom investment
                budgets, get in touch today. We will provide verified listings
                that align exactly with your goals.
              </p>
            </div>

            {/* Direct Details */}
            <div className="space-y-4 mt-6 lg:mt-0">
              {/* WhatsApp */}
              <div className="flex items-center space-x-4 bg-white border border-slate-200 p-4 rounded-2xl shadow-[0_6px_25px_rgba(15,23,42,0.05)]">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>

                <div>
                  <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">
                    WhatsApp
                  </p>

                  <a
                    href="https://wa.me/919490321363"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-slate-900 hover:text-slate-500 transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4 bg-white border border-slate-200 p-4 rounded-2xl shadow-[0_6px_25px_rgba(15,23,42,0.05)]">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>

                <div>
                  <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">
                    Email Inquiry
                  </p>

                  <a
                    href="mailto:contact@plotstories.in"
                    className="text-sm font-bold text-slate-900 hover:text-slate-500 transition-colors break-all"
                  >
                    contact@plotstories.in
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-center space-x-4 bg-white border border-slate-200 p-4 rounded-2xl shadow-[0_6px_25px_rgba(15,23,42,0.05)]">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-600 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>

                <div>
                  <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">
                    Office Hours
                  </p>

                  <p className="text-sm font-bold text-slate-900">
                    9:00 AM – 7:30 PM (Daily)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Form */}
          <div
            id="consultation-form"
            className="lg:col-span-7 bg-white border border-slate-200 p-8 rounded-2xl shadow-[0_10px_35px_rgba(15,23,42,0.07)]"
          >
            <h4 className="text-base font-semibold text-slate-900 mb-6 border-b border-slate-200 pb-4">
              Consultation Request Form
            </h4>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs">
                {error}
              </div>
            )}

            {success ? (
              <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl text-center">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-700 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-slate-700" />
                </div>

                <p className="text-slate-900 font-bold text-base mb-2">
                  Message Sent Successfully
                </p>

                <p className="text-slate-500 text-xs leading-relaxed mb-6">
                  {success}
                </p>

                <button
                  onClick={() => setSuccess(null)}
                  className="mt-2 px-6 py-3 bg-slate-900 text-white font-bold text-xs uppercase tracking-widest rounded transition-all cursor-pointer hover:bg-slate-800"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-[9px] text-slate-500 uppercase tracking-widest font-bold mb-1.5">
                      Full Name <span className="text-slate-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Madhu Sudhana rao"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-slate-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[9px] text-slate-500 uppercase tracking-widest font-bold mb-1.5">
                      Phone Number <span className="text-slate-500">*</span>
                    </label>

                    <input
                      type="tel"
                      name="phoneNumber"
                      required
                      placeholder="Enter phone number"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-slate-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Email + City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-[9px] text-slate-500 uppercase tracking-widest font-bold mb-1.5">
                      Email Address <span className="text-slate-500">*</span>
                    </label>

                    <input
                      type="email"
                      name="emailAddress"
                      required
                      placeholder="e.g. client@example.com"
                      value={formData.emailAddress}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-slate-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-[9px] text-slate-500 uppercase tracking-widest font-bold mb-1.5">
                      City{" "}
                      <span className="text-slate-400">(Optional)</span>
                    </label>

                    <input
                      type="text"
                      name="city"
                      placeholder="e.g. Nellore"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-slate-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Interested In + Preferred Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Interested In */}
                  <div>
                    <label className="block text-[9px] text-slate-500 uppercase tracking-widest font-bold mb-1.5">
                      Interested In
                    </label>

                    <select
                      name="interestedIn"
                      value={formData.interestedIn}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-600 text-xs focus:outline-none focus:border-slate-500 focus:bg-white transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Select option
                      </option>

                      {interestOptions.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Location */}
                  <div>
                    <label className="block text-[9px] text-slate-500 uppercase tracking-widest font-bold mb-1.5">
                      Preferred Location
                    </label>

                    <select
                      name="preferredLocation"
                      value={formData.preferredLocation}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-600 text-xs focus:outline-none focus:border-slate-500 focus:bg-white transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Select option
                      </option>

                      {locations.map((loc, i) => (
                        <option key={i} value={loc.name}>
                          {loc.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-[9px] text-slate-500 uppercase tracking-widest font-bold mb-1.5">
                    Estimated Budget{" "}
                    <span className="text-slate-400">(Optional)</span>
                  </label>

                  <input
                    type="text"
                    name="budget"
                    placeholder="e.g. ₹20 Lakhs - ₹40 Lakhs"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-slate-500 focus:bg-white transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[9px] text-slate-500 uppercase tracking-widest font-bold mb-1.5">
                    Message{" "}
                    <span className="text-slate-400">(Optional)</span>
                  </label>

                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your requirements, preferred plot sizes, or specific survey requests..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-slate-500 focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 disabled:text-slate-500 text-white font-bold tracking-wider text-xs uppercase rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 active:scale-[0.99] cursor-pointer shadow-[0_8px_20px_rgba(15,23,42,0.12)]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
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