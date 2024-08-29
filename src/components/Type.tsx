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
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex  flex-row items-center justify-center h-[40rem]  ">
      
      <div><TypewriterEffectSmooth words={words} /></div>
   <div className="border rounded-[50%] h-96 w-96"><Image w-100 src={ashneer}/></div>
    </div>
  );
}
export default Typer;