import React from "react";
import { Globe, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <Globe className="h-7 w-7 text-blue-500 mr-2" />
            <span className="text-lg font-bold text-white">Roamify Travels</span>
          </div>
          <p className="text-sm text-slate-400">
            Making your travel dreams come true with premium and customizable tour packages across the globe.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4 text-md">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition">Our Services</a></li>
            <li><a href="#packages" className="hover:text-blue-400 transition">Tour Packages</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4 text-md">Contact Us</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-center"><Phone className="h-4 w-4 mr-2 text-blue-500" /> +92 300 1234567</li>
            <li className="flex items-center"><Mail className="h-4 w-4 mr-2 text-blue-500" /> info@roamifytravels.com</li>
            <li className="flex items-center"><MapPin className="h-4 w-4 mr-2 text-blue-500" /> Main Boulevard, Pakistan</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Roamify Travels. All rights reserved.
      </div>
    </footer>
  );
}