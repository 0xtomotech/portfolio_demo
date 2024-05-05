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
      <SectionHeading>About Me & My Sister</SectionHeading>

      <p className="mb-12">
        Around here, life is never dull! We might tussle over who's the boss of
        the toy basket, but when it comes to cuddle time, we're a team. Whether
        we're plotting to snag some treats or racing to claim the coziest lap,
        we're always in sync—even when we're in a feisty mood!
      </p>

      <p className="mb-12">
        Our days are filled with mischief and play, but nothing compares to our
        pre-walk jitters. I, Rizsi, get so excited I could spin just like
        Gabner's head spins! And Popi, well, she's there, wagging along,
        probably dreaming about adevnutres with her parner in crime, Tomo, and
        oh boy, they are a legendary duo. After our adventures, it's all about
        the snuggles—
        <span className="font-medium">
          if you've got the lap, we've got the love.
        </span>{" "}
        Mono is our favourite human pillow!
      </p>

      <p className="mb-12">
        But let's talk fears—thunderstorms turn me, Popi, into a nervous wreck,
        hiding under the first toilet I can find. Rizsi tries to play it cool,
        often distracted by those sneaky cats outside. It's tough being brave,
        but together, we manage, turning our home into a fortress of comfort on
        stormy days.
      </p>

      <p className="">
        On the bright side, sunbathing is our shared hobby, alongside a shared
        mission of keeping those cats and ducks in check. It’s a tough job, but
        hey, someone’s got to do it! Together, we’re ready for anything—fun,
        frolic, or the occasional fright. Our life? It’s a tail-wagging tale of
        adventure and affection!
      </p>
    </motion.section>
  );
};

export default About;
