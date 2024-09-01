"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import lalan from '../app/assets/lalan.jpg'
import aryan from '../app/assets/aryan.jpg'
import neeraj from '../app/assets/neeraj.jpg'
import abhishek from '../app/assets/abhishe.jpg'
export function MovingCard() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Web Lead",
    name: "Lalan Chaudhary",
    github: "https://github.com/Lalanchaudhary",
    linkdin:"https://www.linkedin.com/in/lalan-chaudhary-066177252/",
    insta:"https://www.instagram.com/_yaashhh_04/?hl=en",
    facebook:"",
    image:lalan
  },
  {
    quote:
      "Web Lead",
    name: "Abhishek Mishra",
    github: "https://github.com/Lalanchaudhary",
    linkdin:"https://www.linkedin.com/in/lalan-chaudhary-066177252/",
    insta:"https://www.instagram.com/_yaashhh_04/?hl=en",
    facebook:"",
    image:abhishek
  },
  {
    quote:"Web Lead",
    name: "Arayn Kamboj",
    github: "https://github.com/Lalanchaudhary",
    linkdin:"https://www.linkedin.com/in/lalan-chaudhary-066177252/",
    insta:"https://www.instagram.com/_yaashhh_04/?hl=en",
    facebook:"",
    image:aryan
  },
  {
    quote:"Web Lead",
    name: "Neeraj kumar",
    github: "https://github.com/Lalanchaudhary",
    linkdin:"https://www.linkedin.com/in/lalan-chaudhary-066177252/",
    insta:"https://www.instagram.com/_yaashhh_04/?hl=en",
    facebook:"",
    image:neeraj
  },
  {
    quote:
      "Web Lead",
    name: "Lalan Chaudhary",
    github: "https://github.com/Lalanchaudhary",
    linkdin:"https://www.linkedin.com/in/lalan-chaudhary-066177252/",
    insta:"https://www.instagram.com/_yaashhh_04/?hl=en",
    facebook:"",
    image:lalan
  },
];
