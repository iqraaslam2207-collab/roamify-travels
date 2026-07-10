"use client";
import React, { useState } from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />
      <Services />
      <Packages />
      <Testimonials />
    </main>
  );
}