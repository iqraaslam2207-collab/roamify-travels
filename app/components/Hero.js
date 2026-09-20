"use client";

import React, { useState } from "react";
import { Search, MapPin, Calendar, Clock } from "lucide-react";

export default function Hero({ onSearch }) {
  const [destination, setDestination] = useState("");
  const [month, setMonth] = useState("");
  const [duration, setDuration] = useState("");

  function handleSearch() {
    if (onSearch) onSearch({ destination, month, duration });
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="relative bg-slate-900 text-white py-32 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
      <div className="relative max-w-5xl mx-auto z-10">
        <span className="bg-blue-500/20 text-blue-400 text-sm font-semibold px-4 py-1.5 rounded-full border border-blue-500/30">
          Discover The World With Us
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-6 mb-6">
          Your Journey Begins <span className="text-blue-500">Here</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Explore premium tours, breathtaking destinations, and customized travel plans tailored just for you.
        </p>

        <div className="bg-white p-4 rounded-2xl md:rounded-full shadow-xl grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-slate-800">
          <div className="flex items-center px-3 border-b md:border-b-0 md:border-r border-slate-200 pb-3 md:pb-0">
            <MapPin className="text-blue-500 mr-2 h-5 w-5 flex-shrink-0" />
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full focus:outline-none text-sm bg-transparent text-slate-700 cursor-pointer font-medium"
            >
              <option value="">Select Destination</option>
              <option value="maldives">Maldives</option>
              <option value="switzerland">Switzerland</option>
              <option value="turkey">Turkey</option>
              <option value="dubai">Dubai</option>
              <option value="malaysia">Malaysia</option>
              <option value="thailand">Thailand</option>
            </select>
          </div>

          <div className="flex items-center px-3 border-b md:border-b-0 md:border-r border-slate-200 pb-3 md:pb-0">
            <Calendar className="text-blue-500 mr-2 h-5 w-5 flex-shrink-0" />
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-full focus:outline-none text-sm bg-transparent text-slate-700 cursor-pointer font-medium"
            >
              <option value="">Select Month</option>
              <option value="january">January</option>
              <option value="february">February</option>
              <option value="march">March</option>
              <option value="april">April</option>
              <option value="may">May</option>
              <option value="june">June</option>
              <option value="july">July</option>
              <option value="august">August</option>
              <option value="september">September</option>
              <option value="october">October</option>
              <option value="november">November</option>
              <option value="december">December</option>
            </select>
          </div>

          <div className="flex items-center px-3 border-b md:border-b-0 md:border-r border-slate-200 pb-3 md:pb-0">
            <Clock className="text-blue-500 mr-2 h-5 w-5 flex-shrink-0" />
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full focus:outline-none text-sm bg-transparent text-slate-700 cursor-pointer font-medium"
            >
              <option value="">Select Duration</option>
              <option value="3-5-days">3 - 5 Days</option>
              <option value="1-week">1 Week</option>
              <option value="10-days">10 Days</option>
              <option value="2-weeks">2 Weeks</option>
            </select>
          </div>

          <button
            type="button"
            onClick={handleSearch}
            className="bg-blue-600 text-white rounded-xl md:rounded-full py-3 px-6 hover:bg-blue-700 transition font-semibold flex items-center justify-center shadow-md"
          >
            <Search className="h-4 w-4 mr-2" /> Search
          </button>
        </div>
      </div>
    </div>
  );
}
