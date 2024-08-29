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
import {Hero} from "@/components/Hero";
import Image from "next/image";
import { Timelinee } from "@/components/Timeline";

export default function Home() {
  return (
    <div className="bg-black">
      <FloatingNavbar />
      <Hero/>
      <HeroBanner />
      <div>
        <Timelinee/>
        </div>
      <div className="max-w-7xl mx-auto px-10">
        <About />
        <RecentWork />
        <Skills />
        <Experience />
        <Education />
        <div className="relative">
          <RecentBlogs />
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
