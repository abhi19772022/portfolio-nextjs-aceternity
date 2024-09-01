import { cn } from "@/utils/cn";
import Marquee from "@/components/ui/marquee";
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Image from "next/image";

import { LinkPreview } from "@/components/ui/link-preview";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import lalan from '../app/assets/lalan.jpg'
import aryan from '../app/assets/aryan3.jpg'
import neeraj from '../app/assets/neeraj2.jpg'
import abhishek from '../app/assets/abhishek2.jpg'
const reviews = [
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
    github: "https://github.com/Nemmen",
    linkdin:"https://www.linkedin.com/in/aryan-kammboz-110521252/",
    insta:"",
    facebook:"",
    image:aryan
  },
  {
    quote:"Web Lead",
    name: "Niraj kumar",
    github: "https://github.com/nirajn45",
    linkdin:"https://www.linkedin.com/in/niraj-gupta-04b3ba255/",
    insta:"",
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
    github: "https://github.com/Nemmen",
    linkdin:"https://www.linkedin.com/in/aryan-kammboz-110521252/",
    insta:"",
    facebook:"",
    image:aryan
  },
  {
    quote:"Web Lead",
    name: "Neeraj kumar",
    github: "https://github.com/nirajn45",
    linkdin:"https://www.linkedin.com/in/niraj-gupta-04b3ba255/",
    insta:"",
    facebook:"",
    image:neeraj
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  quote,
  name,
  github,
  linkdin,
  insta,
  facebook,
  image
}: {
  quote: string;
  name: string;
  github: string;
  linkdin: string;
  insta: string;
  facebook: string;
  image: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-70 h-60 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image src={image} className="rounded-xl" width="190" height="190" alt="" />
        <div className="flex flex-col">
          <figcaption className="text-lg text-500 p-2 font-medium dark:text-white">
            {name}
          </figcaption>
          <div className="flex flex-row gap-2 p-2">
          <LinkPreview
              url={linkdin}
              className=""
            >
          <ImLinkedin className="text-emerald-500"/>
          </LinkPreview>
          <LinkPreview
              url={github}
              className=""
            >
          <FaGithub className="text-emerald-500" />
          </LinkPreview>
          <LinkPreview
              url={facebook}
              className=""
            >
          <FaFacebook className="text-emerald-500" />
          </LinkPreview>
          <LinkPreview
              url={insta}
              className=""
            >
          <IoLogoInstagram className="text-emerald-500" />
          </LinkPreview>
          </div>
        </div>
      </div>
      <blockquote className="mt-2 text-base text-white">Web Lead</blockquote>
    </figure>
  );
};

export function MagicMovingCard() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
    </div>
  );
}
