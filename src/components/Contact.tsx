"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import TitleText from "./TitleText";
import { fadeIn, staggerContainer } from "@/utils/motion";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Label } from "./ui/label";
import { Input, SelectInput } from "./ui/input";
import { cn } from "@/utils/cn";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import { IconPhone, IconMail, IconHomeLink } from "@tabler/icons-react";
import { FileUpload } from "@/components/ui/file-upload";
import { toast, Toaster } from "sonner";

const staggerContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const Contact = () => {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <div className="flex flex-col justify-center" id="ideajam">
      <TitleText title="Registration form" />
      <div className="grid my-20">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex mx-auto"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="max-w-2xl w-full rounded-2xl m-5 p-4 md:p-8 bg-white dark:bg-black border-[1px] border-[#0e514f] hover:shadow-md hover:shadow-[#0e514f]"
          >
            <h2 className="font-bold text-3xl lg:text-5xl text-emerald-500">
          IdeaJam Registration
            </h2>
            <p className="text-black dark:text-white text-sm max-w-sm mt-2">
              Fill the form to register your team.
            </p>
            <form className="my-8">
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="theme">Select Theme</Label>
                  <SelectInput id="theme" />
                </LabelInputContainer>
              </div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="teamname">Team name</Label>
                  <Input id="teamname" placeholder="AI WIZARD" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="leadername">Team Leader Name</Label>
                  <Input id="leadername" placeholder="Alpha" type="text" />
                </LabelInputContainer>
              </div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="example.com" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="contact">Contact</Label>
                  <Input id="contact" placeholder="+91 xxxxxxxxxxx" type="text" />
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="members">Team Members Name</Label>
                <Input id="members" placeholder="Alpha, Beta, Gamma" type="text" />
              </LabelInputContainer>
              <div className="w-full max-w-4xl mx-auto my-10 min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
                <FileUpload onChange={handleFileUpload} />
              </div>

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-[#0e514f] block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Sign up &rarr;
                <BottomGradient />
              </button>

              <div className="bg-gradient-to-r from-transparent via-[#0e514f] to-transparent my-8 h-[1px] w-full" />
            </form>
          </motion.div>
        </motion.div>
      </div>
      <Toaster />
    </div>
  );
};

export default Contact;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-[#0e514f] to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-[#0e514f] to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
