import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
const Footer = () => {
  return (
    <footer className="flex h-16 w-full items-center px-4 text-sm font-light border-t-[1px] border-t-purple-500">
      <div className="container flex items-center justify-between px-4 md:px-6">
        <nav className="flex gap-4">
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
        <div className="text-gray-100 md:mr-4 lg:mr-8">
          Elevate 2024. All rights reserved
        </div>
        <div className="text-gray-100 md:mr-4 lg:mr-8">
        <LinkPreview url="https://www.google.com/maps/place/Swami+Vivekanand+Institute+of+Engineering+%26+Technology/@30.5307179,76.6376441,14z/data=!4m10!1m2!2m1!1ssviet!3m6!1s0x390fc2e25466d5e7:0xf0bbb65fa7fca376!8m2!3d30.5307179!4d76.6757529!15sCgVzdmlldFoHIgVzdmlldJIBB2NvbGxlZ2WaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTjVhVWxsU0hSQlJSQULgAQA!16s%2Fm%2F04jh8m9?authuser=0&entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D" className="font-bold">
        Banur, Chandigarh
        </LinkPreview>
        </div>
        <div className="text-gray-100 md:mr-4 lg:mr-8">
        <LinkPreview url="https://www.theuniques.in/" className="font-bold">
        https://www.theuniques.in/
        </LinkPreview>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
