import Link from "next/link";
import React from "react";

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
          Banur,chandigarh
        </div>
        <div className="text-gray-100 md:mr-4 lg:mr-8">
        https://www.theuniques.in/
        </div>
      </div>
    </footer>
  );
};

export default Footer;
