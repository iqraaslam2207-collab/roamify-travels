import React from "react";
import { ShieldCheck, Compass, Headphones, Award } from "lucide-react";

export default function Services() {
  const services = [
    { icon: <Compass className="h-8 w-8 text-blue-600" />, title: "Best Tour Guides", desc: "Expert local guides who know every hidden gem of the destination." },
    { icon: <ShieldCheck className="h-8 w-8 text-blue-600" />, title: "Secure Bookings", desc: "100% safe and verified payment methods with instant confirmation." },
    { icon: <Headphones className="h-8 w-8 text-blue-600" />, title: "24/7 Support", desc: "Our dedicated support team is always ready to assist you during your trip." },
    { icon: <Award className="h-8 w-8 text-blue-600" />, title: "Premium Luxury", desc: "Top-notch hotels, luxury transport, and premium comfort throughout." }
  ];

  return (
    <section id="services" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">Why Choose Us?</h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">We provide the most seamless and memorable travel experiences for our clients.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition text-center group">
            <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}