"use client";

import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-12">
        Life's a romp with my sister <span className="font-medium">Rizsi</span>{" "}
        around! We have a classic{" "}
        <span className="italic">love-hate relationship</span>—one minute we're
        wrestling for the title of Queen of the Couch, the next, we're the
        snuggle champions of the living room. It's a ruff life, but someone's
        got to live it!
      </p>

      <p className="mb-12">
        And let’s not forget about my partner in crime,{" "}
        <span className="font-medium">Tomo</span>. We're a legendary duo, always
        on the hunt for sneaky treats or a sunny spot for a nap. After a day
        filled with adventures, I love curling up for a good cuddle.{" "}
        <span className="font-bold">
          {" "}
          If you’ve got a lap, I’ve got some snuggles to share!
        </span>
      </p>
      <p className="mb-12">
        Don't let my sunny, duck-watching days fool you—I'm a bit of a
        scaredy-dog when it comes to thunderstorms. As soon as those booms
        start, you can find me transforming into a{" "}
        <span className="italic">blanket burrito</span> under the nearest cover.
        But hey, every superhero has their kryptonite, right? On bright days,
        though, I'm all about that{" "}
        <span className="font-medium">sunbathing life</span>, soaking up rays
        and keeping an eye on those sneaky ducks. It's a tough job, but
        someone's got to keep those quackers in line!
      </p>
    </motion.section>
  );
};

export default About;
