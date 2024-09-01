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
import {FloatingDock} from "@/components/ui/FloatNavbar";
import { Timelinee } from "@/components/Timeline";
import Typer from "@/components/Type";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';

// npm i @emotion/react @mui/icons-material @emotion/styled
export default function Home() {
  const navbarItems = [
    { title: "Home", icon: <HomeIcon />, href: "/" },
    { title: "About", icon: <InfoIcon />, href: "/about" },
    { title: "Services", icon: <BuildIcon />, href: "/services" },
    { title: "Portfolio", icon: <WorkIcon />, href: "/portfolio" },
    { title: "Contact", icon: <ContactMailIcon />, href: "/contact" },
  ];
  
  return (
    <div className="bg-slate-950">
      {/* <FloatingNavbar /> */}
      <FloatingDock items={navbarItems}/> 
      <Hero/>
      <HeroBanner />
      <div>
      <Typer/>
        <Timelinee/>
        
        </div>
      <div className="max-w-7xl mx-auto px-10">
        {/* <About /> */}
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
