import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import img1 from "@/app/assets/image1.jpg";
import img2 from "@/app/assets/image2.jpg";
import day1 from "@/app/assets/timeline/day1.jpeg";
import day2 from "@/app/assets/timeline/day2.jpeg";
import day3 from "@/app/assets/timeline/day3.jpeg";
import band from "@/app/assets/timeline/sviet logo without name.png"


export function Timelineee() {
  const data = [
    {
      title: "Day-1",
      content: (
        <div>
          <h1 className="text-emerald-500 text-[35px] font-bold">Ignite Your Journey with Inspiration and Laughter</h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-8">
          Welcome to SVGOI!Day 1 kicks off with an  inspiring opening ceremony, dive into entrepreneurship with Ashneer Grover, and end with a night of laughter at our stand-up comedy show.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={img2}
              alt="startup template"
              width={1080}
              height={1080}
              className="rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={day1}
              alt="startup template"
              width={1080}
              height={1080}
              className="rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Day-2",
      content: (
        <div>
          <h1 className="text-emerald-500 text-[35px] font-bold">Innovate and Celebrate: Insight Meets Talent</h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-8">
          Discover cutting-edge insights from Google Developers and startup leaders, then enjoy a lively Cultural Carnival showcasing fresh talent.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={img1}
              alt="hero template"
              width={1080}
              height={1080}
              className="rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={day3}
              alt="feature template"
              width={1080}
              height={1080}
              className="rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Day-3",
      content: (
        <div>
          <h1 className="text-emerald-500 text-[35px] font-bold">Empower, Connect, and Rock the Finale</h1>
          <p className="text-neutral-800 dark:text-neutral-200 text-base font-normal mb-8">
          Energize with a motivational session, connect with college leaders, and cap off with an electrifying Band Night for an unforgettable finale.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={band}
              alt="bento template"
              width={1080}
              height={1080}
              className="rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={day2}
              alt="cards template"
              width={1080}
              height={1080}
              className="rounded-lg object-cover h-auto w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
export default Timelineee;