import back from '@/app/assets/backdropp.jpg'
import image1 from '@/app/assets/image1.jpg'
import image2 from '@/app/assets/image2.jpg'
import image3 from '@/app/assets/image3.jpg'
import image4 from '@/app/assets/image4.jpg'
import image5 from '@/app/assets/image5.jpg'
import image6 from '@/app/assets/image6.jpg'
import image7 from '@/app/assets/image7.jpg'
import image8 from '@/app/assets/image8.jpg'
import image9 from '@/app/assets/image9.jpg'
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: image1,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: image2,
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: image3,
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: image4,
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      image5,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: image6,
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:image7,
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: image8,
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: image9,
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      image1,
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      image2,
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      back,
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: image3,
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:image4,
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      image5,
  },
];

export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  desc: string;
  image: string;
  categoryId: number;
}
export const categories: Category[] = [
  
  { id: 2, name: "Round 2" },
  { id: 3, name: "Round 3" },
  // Add more categories here
];

export const work: Product[] = [
  {
    id: 1,
    name: "ecommerce",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/mobile-1.jpg",
    categoryId: 0,
  },
 
  {
    id: 6,
    name: "kanban clone",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/mobile-1.jpg",
    categoryId: 2,
  },

  {
    id: 3,
    name: "dashboard",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/mobile-3.jpg",
    categoryId: 3,
  },

];

export const skills = [
  {
    name: "React js",
    percentage: "95%",
    image: "/react.svg",
  },
  {
    name: "XD",
    percentage: "90%",
    image: "/xd.svg",
  },
  {
    name: "Javascript",
    percentage: "85%",
    image: "/js.svg",
  },
  {
    name: "Figma",
    percentage: "97%",
    image: "/figma.svg",
  },
  {
    name: "Wordpress",
    percentage: "75%",
    image: "/wp.svg",
  },
  {
    name: "Sketch",
    percentage: "70%",
    image: "/sketch.svg",
  },
];

export const experience = [
  {
    id: 1,
    day: "Day 1 | 10:00",
    title: "Inaugural Ceremony",
    description: "Official welcome with inspiring words from the chief guest and an introduction to the program.",
  },
  {
    id: 2,
    day: "Day 1 | 01:00",
    title: "Panel Discussion",
    description: "Insights from industry experts and top educators on the future of learning and industry trends.",
  },
  {
    id: 3,
    day: "Day 1 | 03:00",
    title: "Talk Show with Ashneer Grover",
    description: "Exclusive session with Ashneer Grover sharing his journey, challenges, and successes.",
  },
  {
    id: 4,
    day: "Day 1 | 07:00",
    title: "Standup Comedy Show",
    description: "Entertainment by a top comedian to end the day on a high note.",
  },
  {
    id: 5,
    day: "Day 2 | 10:00",
    title: "Google Developers Group Panel",
    description: "Exploring the latest in technology with leaders from Google Developers Group.",
  },
  {
    id: 6,
    day: "Day 2 | 02:00",
    title: "Startup Leaders Panel",
    description: "Inspiration from successful startup founders on turning ideas into thriving businesses.",
  },
  {
    id: 7,
    day: "Day 2 | 04:00",
    title: "Cultural Carnival",
    description: "Celebration of diversity and creativity with performances and showcases by talented freshers.",
  },
  {
    id: 8,
    day: "Day 3 | 10:00",
    title: "Motivational Session",
    description: "Powerful session led by a renowned motivational and spiritual leader to inspire and center yourself.",
  },
  {
    id: 9,
    day: "Day 3 | 02:00",
    title: "College Management Interaction",
    description: "Engage directly with the college leadership team and get to know the people who will guide you.",
  },
  {
    id: 10,
    day: "Day 3 | 06:00",
    title: "Band Night",
    description: "An electrifying night with live music, bonding, and celebration to wrap up Elevate-2024.",
  },
];

