"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Born and raised in Hawai'i, I now call Oakland, California my home, blending my island upbringing with the energetic pulse of the Bay Area in my work as a software developer. With expertise spanning front-end to full-stack development, I've collaborated with industry leaders in the AI art, logistics, and e-commerce sectors, using a diverse range of programming languages and technologies. When I'm not crafting digital solutions, my heart is in indie game development; I'm a passionate solo game dev who regularly competes in game jam challenges, producing titles like "Cycle of the Wolf" and "Islands of Fortune". Outside of my professional life, I cherish moments in the kitchen, cooking up delightful dishes, and enjoying life with my Danish spouse and our two cherished dogs.
      </p>

    </motion.section>
  );
}
