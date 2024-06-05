import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "ReactJs Developer Intern",
    location: "Dotsquares Technologies INDIA Pvt Ltd, Jaipur",
    description:
    "Collaborated with cross-functional teams to implement dynamic user interfaces, enhancing user experience and engagement.",   
    icon: React.createElement(FaReact),
    date: "JUN 2023-AUG 2023",
  },
  {
    title: "PHP Developer Intern",
    location: "REI Technologies Pvt Ltd, Jaipur",
    description:
      "Implemented backend logic using PHP to streamline data processing and enhance server-side performance.",
    icon: React.createElement(CgWorkAlt),
    date: "JUL 2022 - AUG 2022",
  },
  {
    title: "Java Programing",
    location: "InternPe",
    description:
      "Gained proficiency in Java-based technologies and tools during the internship. Strengthened problem-solving skills through debugging and optimizing Java code.",
    icon: React.createElement(LuGraduationCap),
    date: " JUN 2023 - JUL 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Get Me A Chai",
    description:
      "Developed and deployed a Patreon-like platform GetMeAChai, utilizing React and Next.js for a modern and responsive user interface.",
    tags: ["HTML","Tailwind","JavaScript","React", "Next.js", "MongoDB"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Wanderlust",
    description:
      "Developed Wanderlust, an Airbnb-inspired web platform, facilitating hotel listing, user reviews, and management functionalities.",
    tags: ["React", "Node.Js", "Express.Js", "MongoDB", "JavaScript"],
    imageUrl: rmtdevImg,
  },
  {
    title: "ShopHub",
    description:
      "Developed Shophub, a full-stack e-commerce web application with home, about, products, and contact pages, resulting in a 40% increase in user engagement.",
    tags: ["React", "Rest APIs", "JavaScript", "CSS", "HTML"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Rest APIs",
  "Git",
  "Tailwind",
  "MongoDB",
  "MySql",
  "Redux",
  "Express",
  "Framer Motion",
  "GitHub",
] as const;
