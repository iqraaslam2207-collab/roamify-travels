"use client";

import React, { useState } from "react";
import { X, CheckCircle } from "lucide-react";

export default function BookingModal({ packageData, onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", date: "" });
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="bg-white p-8 rounded-2xl max-w-md w-full text-center shadow-2xl relative">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Inquiry sent</h3>
          <p className="text-slate-600 text-sm mb-6">
            Thank you, {formData.name}. We will contact you about {packageData.title}.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="w-full bg-slate-900 text-white font-medium py-3 rounded-xl hover:bg-slate-800 transition"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 p-1.5 rounded-full transition"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="p-6 bg-blue-600 text-white">
          <span className="text-xs uppercase tracking-wider font-bold text-blue-100">Booking form</span>
          <h3 className="text-2xl font-bold mt-1">{packageData.title}</h3>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 outline-none text-sm text-slate-800"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 outline-none text-sm text-slate-800"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 outline-none text-sm text-slate-800"
              placeholder="+92 300 1234567"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Departure date</label>
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 outline-none text-sm text-slate-800"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-xl hover:bg-blue-700 transition shadow-md"
          >
            Confirm booking ({packageData.price})
          </button>
        </form>
      </div>
    </div>
  );
}
