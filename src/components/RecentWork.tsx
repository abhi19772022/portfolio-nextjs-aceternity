"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Categories from "./Categories";
import { textVarient } from "@/utils/motion";
import { categories, work } from "@/utils/data";
import Products from "./Products";
import Image from "next/image";
import logo from "@/app/assets/Ideajam logo white.png";

const RecentWork = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    0
  );

  const filteredWork = selectedCategoryId
    ? work.filter((product) => product.categoryId === selectedCategoryId)
    : work.filter((product) => product.categoryId === 0);

  return (
    <>
      <div className="flex justify-center lg:mt-[-10rem] mt-[-5rem]">
        <Image src={logo} alt="Ideajam Logo" className="w-[45rem] text-center object-contain" />
      </div>
      <motion.div variants={textVarient} initial="hidden" whileInView="show">
        <p className="text-white text-center text-lg p-10 md:px-[25%] lg:mt-[-20rem] mt-[-6rem]">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </p>
        <Categories
          selectedCategoryId={selectedCategoryId}
          setSelectedCategoryId={setSelectedCategoryId}
          categories={categories}
        />
        <Products filteredWork={filteredWork} />
      </motion.div>
    </>
  );
};

export default RecentWork;
