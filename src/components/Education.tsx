import React from "react";
import TitleText from "./TitleText";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import image2 from "@/app/assets/speaker1.jpeg";
import image1 from "@/app/assets/speaker2.jpg";
import image3 from "@/app/assets/speaker3.jpeg";
import image4 from "@/app/assets/speaker4.jpeg";

const Education = () => {
  return (
    <div>
      <TitleText title="Panelists" />
      <StickyScroll content={content} />
    </div>
  );
};

export default Education;

const content = [
  {
    title: "Aman Kumar",
    description:
      "Dean-Lloyd Business School || Motivational Speaker || Personal Branding Coach",
    content: (
      <div className="relative h-full w-full flex items-center justify-center text-white">
        <Image
          src={image1}
          alt="Aman Kumar"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
    ),
  },
  {
    title: "Shilpa Dadhwal",
    description: "Founder & Director@SQE Labs",
    content: (
      <div className="relative h-full w-full flex items-center justify-center text-white">
        <Image
          src={image2}
          alt="Shilpa Dadhwal"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
    ),
  },
  {
    title: "Sanjeev Demra",
    description:
      "Delivery Management, Identity and Access Expert, CyberSecurity Professional, Quality specialist",
    content: (
      <div className="relative h-full w-full flex items-center justify-center text-white">
        <Image
          src={image3}
          alt="Sanjeev Demra"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
    ),
  },
  {
    title: "Rajiv Bhargava",
    description:
      "An experienced higher education professional, passionate about design thinking, machine learning and mentoring startups.",
    content: (
      <div className="relative h-full w-full flex items-center justify-center text-white">
        <Image
          src={image4}
          alt="Rajiv Bhargava"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
    ),
  },
];
