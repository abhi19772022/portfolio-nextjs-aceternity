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
  { id: 1, name: "Prisma" },
  { id: 2, name: "Nextjs" },
  // Add more categories here
];

export const work: Product[] = [
  {
    id: 1,
    name: "ecommerce",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/mobile-1.jpg",
    categoryId: 1,
  },
  {
    id: 4,
    name: "trello clone",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/laptop-1.jpg",
    categoryId: 2,
  },
  {
    id: 6,
    name: "kanban clone",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/laptop-3.jpg",
    categoryId: 2,
  },
  {
    id: 2,
    name: "portfolio",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/mobile-2.jpg",
    categoryId: 1,
  },
  {
    id: 3,
    name: "dashboard",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/mobile-3.jpg",
    categoryId: 1,
  },
  {
    id: 5,
    name: "gemini clone",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    image: "/laptop-2.jpg",
    categoryId: 2,
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
    startDate: "2020",
    endDate: "2021",
    title: "MERN stack developer",
    description: "MERN stack, full stack 1 year experienced developer",
  },
  {
    id: 2,
    startDate: "2021",
    endDate: "2023",
    title: "MERN stack developer",
    description: "MERN stack, full stack 1 year experienced developer",
  },
  {
    id: 3,
    startDate: "2020",
    endDate: "2023",
    title: "FULL stack developer",
    description: "MERN stack, full stack 1 year experienced developer",
  },
  {
    id: 4,
    startDate: "2022",
    endDate: "present",
    title: "Lead developer",
    description: "MERN stack, full stack 1 year experienced developer",
  },
  {
    id: 5,
    startDate: "2020",
    endDate: "2021",
    title: "MERN stack developer",
    description: "MERN stack, full stack 1 year experienced developer",
  },
  {
    id: 6,
    startDate: "2020",
    endDate: "2021",
    title: "MERN stack developer",
    description: "MERN stack, full stack 1 year experienced developer",
  },
];
