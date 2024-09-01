// src/pages/Home.tsx
"use client";

import React from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { HeroBanner } from "@/components/HeroBanner";
import FloatingNavbar from "@/components/Navbar";
import RecentBlogs from "@/components/RecentBlogs";
import RecentWork from "@/components/RecentWork";
import Skills from "@/components/Skills";
import { Hero } from "@/components/Hero";
import Typer from "@/components/Type";
import Gallery from "@/components/Gallery";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <div className="bg-slate-950">
      <FloatingNavbar />
      <Hero />
      <HeroBanner />
      <div>
      <Typer/>
        <Timelinee/>
        
        </div>
      <div className="max-w-7xl mx-auto px-10">
        {/* <About /> */}
        <RecentWork />
        {/* <Skills /> */}
        <Gallery />
        <Experience />
        <Education />
        <div className="relative">
          {/* <RecentBlogs /> */}
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
