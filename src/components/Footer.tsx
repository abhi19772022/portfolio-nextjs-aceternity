import Link from "next/link";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row h-auto md:h-16 w-full items-center px-4 py-4 md:py-0 text-sm font-light border-t-[1px] border-t-purple-500">
      <div className="container flex flex-col md:flex-row items-center justify-between px-4 md:px-6 gap-4 md:gap-0">
        <nav className="flex gap-4 order-2 md:order-1">
          <Link
            href="#"
            className="text-gray-100 hover:underline hover:text-gray-400"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-gray-100 hover:underline hover:text-gray-400"
          >
            Privacy
          </Link>
        </nav>
        <div className="text-gray-100 order-1 md:order-2">
          Elevate 2024. All rights reserved
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 order-3">
          <div className="text-gray-100">
            <LinkPreview
              url="https://www.google.com/maps/place/Swami+Vivekanand+Institute+of+Engineering+%26+Technology/@30.5307179,76.6376441,14z/data=!4m10!1m2!2m1!1ssviet!3m6!1s0x390fc2e25466d5e7:0xf0bbb65fa7fca376!8m2!3d30.5307179!4d76.6757529!15sCgVzdmlldFoHIgVzdmlldJIBB2NvbGxlZ2WaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTjVhVWxsU0hSQlJSQULgAQA!16s%2Fm%2F04jh8m9?authuser=0&entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D"
              className=""
            >
              Banur, Chandigarh
            </LinkPreview>
          </div>
          <div className="text-gray-100">
            <LinkPreview
              url="https://www.theuniques.in/"
              className=""
            >
              https://www.theuniques.in/
            </LinkPreview>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
