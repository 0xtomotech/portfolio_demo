"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={theme === "dark" ? "/popi.JPG" : "/rizsi2.png"}
              alt="Popi"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-52 w-52 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-2 right-2 text-5xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            {theme === "dark" ? "🥕" : "🎾"}
          </motion.span>
        </div>
      </div>

      {theme === "dark" ? (
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Woof Woof, I am Popi.</span> I am a{" "}
          <span className="font-bold">Cheeky Chiweenie</span> with{" "}
          <span className="font-bold">6 years</span> of experience. I enjoy
          snacking{" "}
          <span className="italic">carrots, parma ham and beef jerky</span>, and
          I always collect the <span className="underline">cheese tax</span>.
        </motion.h1>
      ) : (
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hey there, I am Rizsi.</span> As a{" "}
          <span className="font-bold">
            5.5-year-old Terrier-Australian Shepherd Mix
          </span>
          , I have a knack for{" "}
          <span className="font-bold">keen observation</span>. I love watching
          the world from our <span className="italic">balcony</span> and can
          never resist a good <span className="underline">game of ball</span>.
        </motion.h1>
      )}

      <motion.div
        className="flex flex-col items-center justify-center gap-4 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-2" />{" "}
        </Link>

        <a
          className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full border bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>

        <a
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full border bg-white p-4 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://Linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full border bg-white p-4 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
          href="https://github.com/0xtomotech"
          target="_blank"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
