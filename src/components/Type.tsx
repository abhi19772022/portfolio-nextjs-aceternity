"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import Image from "next/image";
import ashneer from "@/app/assets/assneer.png";

function Typer() {
  const words = [
    { text: "Our  " },
    { text: "Special" },
    { text: "Guest" },
    {
      text: "Ashneer Grover",
      className: "text-emerald-500 dark:text-emerald-500",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-[60rem] gap-8 md:gap-20 p-4">
      <div>
        <TypewriterEffectSmooth words={words} />
      </div>
      <div className="w-[250px] h-[250px] md:w-[450px] md:h-[450px] overflow-hidden">
        <Image className="h-full w-full object-cover" src={ashneer} alt="Ashneer Grover" />
      </div>
    </div>
  );
}

export default Typer;
