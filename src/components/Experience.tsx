"use client";
import React from "react";
import TitleText from "./TitleText";
import { motion } from "framer-motion";
import { textVarient } from "@/utils/motion";
import { BackgroundGradient } from "./ui/background-gradient";
import { experience } from "@/utils/data";

const Experience = () => {
  return (
    <div>
      <TitleText title="Events Details" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {experience?.map((exp) => (
          <motion.div
            key={exp.id}
            variants={textVarient}
            initial="hidden"
            whileInView="show"
          >
            <BackgroundGradient className="rounded-[22px] p-4 bg-zinc-900">
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-emerald-500">
                {exp.title}
              </p>
              <p className="text-sm text-neutral-400">{exp.day}</p>
              <p className="text-white mt-2">{exp.description}</p>
            </BackgroundGradient>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
