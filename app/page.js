"use client";

import React, { useState } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import BookingModal from "./components/BookingModal";

export default function Home() {
  const [query, setQuery] = useState({ destination: "", month: "", duration: "" });
  const [booking, setBooking] = useState(null);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Hero onSearch={setQuery} />
      <Services />
      <Packages query={query} onBook={setBooking} />
      <Testimonials />
      {booking ? <BookingModal packageData={booking} onClose={() => setBooking(null)} /> : null}
    </main>
  );
}
