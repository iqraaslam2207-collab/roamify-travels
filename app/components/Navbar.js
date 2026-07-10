"use client";
import React, { useState } from "react";
import { Menu, X, Globe, Mail, Send } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu ke liye
  const [isFormOpen, setIsFormOpen] = useState(false); // 📦 Email Box Modal ke liye

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-slate-800 tracking-tight">
                Roamify <span className="text-blue-600">Travels</span>
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8 font-medium text-slate-600">
              <a href="#" className="hover:text-blue-600 transition">Home</a>
              <a href="#services" className="hover:text-blue-600 transition">Services</a>
              <a href="#packages" className="hover:text-blue-600 transition">Packages</a>
              <a href="#testimonials" className="hover:text-blue-600 transition">Reviews</a>

              {/* 📧 Desktop Book Now Button - Opens Box */}
              <button 
                onClick={() => setIsFormOpen(true)}
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition font-semibold text-sm shadow-md text-center inline-block"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Burger Icon */}
            <div className="flex items-center md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t px-4 pt-2 pb-4 space-y-2 shadow-inner">
            <a href="#" className="block py-2 text-slate-600">Home</a>
            <a href="#services" className="block py-2 text-slate-600">Services</a>
            <a href="#packages" className="block py-2 text-slate-600">Packages</a>
            <a href="#testimonials" className="block py-2 text-slate-600">Reviews</a>
            
            {/* 📧 Mobile Book Now Button - Opens Box & Closes Menu */}
            <button 
              onClick={() => { setIsFormOpen(true); setIsOpen(false); }}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-full mt-2 font-semibold shadow-md"
            >
              Book Now
            </button>
          </div>
        )}
      </nav>

      {/* --- 📦 POPUP EMAIL / BOOKING BOX --- */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-slate-100 overflow-hidden text-slate-800 relative animate-in fade-in zoom-in duration-200">
            
            {/* Box Header */}
            <div className="bg-blue-600 text-white p-5 flex justify-between items-center">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <h3 className="font-bold text-lg">Inquiry Form - Roamify</h3>
              </div>
              <button 
                onClick={() => setIsFormOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Box Form */}
            <form 
              onSubmit={(e) => { 
                e.preventDefault(); 
                alert("Thank you! Your request has been submitted to Roamify Travels. 🎉"); 
                setIsFormOpen(false); 
              }} 
              className="p-6 space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Your Name</label>
                <input required type="text" placeholder="Enter your full name" className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-slate-50" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Email Address</label>
                <input required type="email" placeholder="name@example.com" className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-slate-50" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Destination & Plan Details</label>
                <textarea rows="3" placeholder="Tell us where you want to go and for how many days..." className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-slate-50 resize-none"></textarea>
              </div>

              {/* Submit Inside Website */}
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition flex items-center justify-center shadow-md mt-2"
              >
                Send Message <Send className="h-4 w-4 ml-2" />
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}