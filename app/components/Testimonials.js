import React from "react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    { name: "Ali Ahmed", role: "Corporate Traveler", text: "Roamify Travels made our family trip to Turkey absolutely flawless. The hotels and transportation were exceptionally luxurious!", rating: 5 },
    { name: "Sana Khan", role: "Solo Backpacker", text: "Incredible support team! I needed to modify my itinerary last minute in Skardu, and they managed it within an hour.", rating: 5 },
    { name: "Dr. Zain", role: "Vlogger", text: "Highly professional service and highly recommended. The local tour guides provided deep insight into the historic places.", rating: 5 }
  ];

  return (
    <section id="testimonials" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl">What Our Clients Say</h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Read beautiful stories from people who explored the world with us.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, i) => (
          <div key={i} className="bg-slate-50 p-8 rounded-2xl relative border border-slate-100">
            <Quote className="absolute top-6 right-6 h-10 w-10 text-blue-500/10" />
            <div className="flex text-amber-500 mb-4">
              {[...Array(rev.rating)].map((_, idx) => <Star key={idx} className="h-4 w-4 fill-amber-500" />)}
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">"{rev.text}"</p>
            <div>
              <h4 className="font-semibold text-slate-800 text-md">{rev.name}</h4>
              <span className="text-xs text-slate-400 font-medium">{rev.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}