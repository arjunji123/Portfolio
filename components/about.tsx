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
      I am Arjun Singh Naruka, a  <span className="font-medium">MERN stack developer</span>. with a B.Tech in Information Technology from Govt. Engineering College, Ajmer. I have hands-on experience in both frontend and backend development, specializing in ReactJS, Node.js, and MySQL. Currently, I’m working as a Full Stack Developer at Digital Future Web Solutions, where I’ve developed a Telegram bot and optimized backend systems for better performance.

Through various internships at Dotsquares and REI Technologies, I’ve worked on several projects, including UnitradeHub and Wanderlust, improving user experience and implementing secure, scalable features. I’m passionate about creating efficient, user-friendly applications and constantly learning new technologies to enhance my skills.

       
      
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
