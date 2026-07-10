import React from "react";
import { packages } from "../data/mockData";
import { Star, Clock, ArrowRight } from "lucide-react";

export default function Packages() {
  
  // 📞 WhatsApp Par Direct Customer ko Bhejne ka Function
  const handleBookingViaWhatsApp = (pkg) => {
    // ⬇️ Yahan apna sahi wala WhatsApp number likhein (Country code 92 ke sath)
    const phoneNumber = "923001234567"; 
    
    // Automatic message jo customer ke phone par khud hi type ho jayega
    const message = `Hi Kazmi Paradise Travel & Tours! ✈️\nI am interested in booking this package:\n\n📍 Destination: ${pkg.title}\n⏳ Duration: ${pkg.duration}\n💰 Price: ${pkg.price}\n\nPlease share the booking details!`;
    
    // Yeh line user ko direct WhatsApp par le jayegi
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="packages" className="bg-slate-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">Popular Tour Packages</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Pick your favorite destination and unlock premium experiences today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages && packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col h-full border border-slate-200">
              <div className="relative h-56 w-full">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                <span className="absolute top-4 right-4 bg-white/90 text-slate-800 font-bold px-3 py-1 rounded-full text-sm shadow-sm">
                  {pkg.price}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-3">
                  <span className="flex items-center text-amber-500">
                    <Star className="h-4 w-4 fill-amber-500 mr-1" /> {pkg.rating}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" /> {pkg.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{pkg.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">{pkg.description}</p>
                
                {/* Book Package Button - DIRECT WHATSAPP CALL */}
                <button 
                  onClick={() => handleBookingViaWhatsApp(pkg)}
                  className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition flex items-center justify-center group shadow-md"
                >
                  Book Package <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}