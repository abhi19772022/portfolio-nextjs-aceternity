// import React from "react";
// import TitleText from "./TitleText";
// import { StickyScroll } from "./ui/sticky-scroll-reveal";

// const Education = () => {
//   return (
//     <div>
//       <TitleText title="Panelists" />
//       <StickyScroll content={content} />
//     </div>
//   );
// };

// export default Education;

// const content = [
//   {
//     title: "BS Computer Science",
//     description:
//       "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//         BS Computer Science
//       </div>
//     ),
//   },
//   {
//     title: "Masters in Computer Science",
//     description:
//       "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
//         Masters in Computer Science
//       </div>
//     ),
//   },
// ];
import React from "react";
import TitleText from "./TitleText";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
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
        <img 
          src= {image1.src}
          alt="Aman Kumar" 
          className="absolute inset-0 h-full w-full object-cover" 
        />
      </div>
    ),
  },
  {
    title: "Shilpa Dadhwal",
    description:
      "Founder & Director@SQE Labs",
    content: (
      <div className="relative h-full w-full flex items-center justify-center text-white">
        <img 
          src= {image2.src} 
          alt="Shilpa Dadhwal" 
          className="absolute inset-0 h-full w-full object-cover" 
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
        <img 
          src= {image3.src} 
          alt="Sanjeev Demra" 
          className="absolute inset-0 h-full w-full object-cover" 
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
        <img 
          src= {image4.src} 
          alt="Sanjeev Demra" 
          className="absolute inset-0 h-full w-full object-cover" 
        />
      </div>
    ),
  },
];

