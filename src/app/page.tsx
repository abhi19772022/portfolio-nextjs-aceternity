// import About from "@/components/About";
// import Contact from "@/components/Contact";
// import Education from "@/components/Education";
// import Experience from "@/components/Experience";
// import Footer from "@/components/Footer";
// import { HeroBanner } from "@/components/HeroBanner";
// import FloatingNavbar from "@/components/Navbar";
// import RecentBlogs from "@/components/RecentBlogs";
// import RecentWork from "@/components/RecentWork";
// import Skills from "@/components/Skills";
// import { Hero } from "@/components/Hero";
// import Image from "next/image";
// <<<<<<< HEAD
// =======
// import { FloatingDock } from "@/components/ui/FloatNavbar";
// >>>>>>> d876ad5fdf3e7f9b1e2952c78e176aed6f2dc413
// import { Timelineee } from "@/components/Timeline";
// import Typer from "@/components/Type";
// import { MagicMovingCard } from "@/components/MagicMovingCard";
// import TitleText from "../components/TitleText";
// import Gallery from "@/components/Gallery";
// import Counter from "@/components/Counter";
// import HomeIcon from '@mui/icons-material/Home';
// import InfoIcon from '@mui/icons-material/Info';
// import BuildIcon from '@mui/icons-material/Build';
// import WorkIcon from '@mui/icons-material/Work';
// import ContactMailIcon from '@mui/icons-material/ContactMail';



// // npm i @emotion/react @mui/icons-material @emotion/styled
// export default function Home() {
//   const navbarItems = [
//     { title: "Home", icon: <HomeIcon />, href: "/" },
//     { title: "About", icon: <InfoIcon />, href: "/about" },
//     { title: "Services", icon: <BuildIcon />, href: "/services" },
//     { title: "Portfolio", icon: <WorkIcon />, href: "/portfolio" },
//     { title: "Contact", icon: <ContactMailIcon />, href: "#ideajam" },
//   ];
  
//   return (
//     <div className="bg-slate-950">
//       {/* Uncomment if needed */}
//       {/* <FloatingNavbar /> */}
//       <FloatingDock items={navbarItems}/> 
//       <Hero/>
//       <HeroBanner />
//       <div>
// <<<<<<< HEAD
//       <Typer/>
//       {/* <Counter/> */}
//         <Timelineee/>
        
//         </div>
// =======
//         <Typer/>
//         {/* Uncomment if needed */}
//         {/* <Counter/> */}
//         <Timelineee/>
//       </div>
// >>>>>>> d876ad5fdf3e7f9b1e2952c78e176aed6f2dc413
//       <div className="max-w-7xl mx-auto px-10">
//         {/* Uncomment if needed */}
//         {/* <About /> */}
//         <RecentWork />
//         {/* Uncomment if needed */}
//         {/* <Skills /> */}
//         <Gallery />
//         <Experience />
//         <Education />
//         <div className="relative">
//           {/* Uncomment if needed */}
//           {/* <RecentBlogs /> */}
//         </div>
//         <Contact />
//         <TitleText title="Our Team" />
//         <MagicMovingCard />
//         <Footer />
//       </div>
//     </div>
//   );
// }

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
import Image from "next/image";
import { FloatingDock } from "@/components/ui/FloatNavbar";
import { Timelineee } from "@/components/Timeline";
import Typer from "@/components/Type";
import { MagicMovingCard } from "@/components/MagicMovingCard";
import TitleText from "@/components/TitleText";
import Gallery from "@/components/Gallery";
import Counter from "@/components/Counter";
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
    { title: "Contact", icon: <ContactMailIcon />, href: "#ideajam" },
  ];

  return (
    <div className="bg-slate-950">
      {/* Uncomment if needed */}
      {/* <FloatingNavbar /> */}
      <FloatingDock 
        items={navbarItems} 
        desktopClassName="desktop-class" // Pass the appropriate class
        mobileClassName="mobile-class" // Pass the appropriate class
         // Any other props that FloatingDock requires
      /> 
      <Hero/>
      <HeroBanner />
      <div>
        <Typer/>
        {/* Uncomment if needed */}
        {/* <Counter/> */}
        <Timelineee/>
      </div>
      <div className="max-w-7xl mx-auto px-10">
        {/* Uncomment if needed */}
        {/* <About /> */}
        <RecentWork />
        {/* Uncomment if needed */}
        {/* <Skills /> */}
        <Gallery />
        <Experience />
        <Education />
        <div className="relative">
          {/* Uncomment if needed */}
          {/* <RecentBlogs /> */}
        </div>
        <Contact />
        <TitleText title="Our Team" />
        <MagicMovingCard />
        <Footer />
      </div>
    </div>
  );
}
