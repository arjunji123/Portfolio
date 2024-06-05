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
      I am a recent graduate with a{" "}
        <span className="font-medium">Bachelor of Technology in Information Technology</span> from Govt. Engineering College, Ajmer. With a solid foundation in {" "}
        <span className="font-medium">MERN stack development</span>.{" "}
        I have hands-on experience in ReactJS, NodeJS, ExpressJS, and MongoDB. I am passionate about solving complex problems and enhancing user experiences through innovative coding practices. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.
        {" "}I am always looking to
        learn new technologies. I am actively seeking my first{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. where I can apply my technical skills and enthusiasm for learning new technologies. I enjoy staying updated with the latest trends in web development and continuously expanding my skill set.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
