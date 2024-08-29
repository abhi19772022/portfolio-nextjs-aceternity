"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import exp from "constants";
import { TextHoverEffect } from "./ui/text-hover-effect";
function Lamp() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" mt-32 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
            <div className="h-[30rem]  h-screen  flex items-center justify-center bg-transparent">
            <TextHoverEffect text="ELEVATE" />
            
            <text className="text-6xl font-bold text-white absolute mb-[-15%]">2024</text>
    </div>
    
           
      </motion.h1>
    </LampContainer>
  );
}
export default Lamp;