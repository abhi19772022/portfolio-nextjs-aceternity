"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import Image from "next/image";
import ashneer from "@/app/assets/assneer.png";
 function Typer() {
  const words = [
    {
      text: "Our  ",
    },
    {
      text: "Special",
    },
    {
      text: "Guest",
    },
    
    {
      text: "Ashneer Grover",
      className: "text-emerald-500 dark:text-emerald -500",
    },
  ];
  return (
    <div className="flex flex-row items-center justify-center h-[40rem] gap-20">
    <div>
      <TypewriterEffectSmooth words={words} />
    </div>
    <div className=" h-[450px] w-[450px] overflow-hidden">
      <Image className="h-full w-full object-cover " src={ashneer} />
    </div>
  </div>
  
  );
}
export default Typer;