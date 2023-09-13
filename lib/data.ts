import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import godot1 from "@/public/godot1.png";
import godot2 from "@/public/godot2.png";
import godot3 from "@/public/godot3.png";
import godot4 from "@/public/godot4.png";
import godot5 from "@/public/godot5.png";
import godot6 from "@/public/godot6.png";
import poe from "@/public/poe.png";
import plantify from "@/public/plantify.jpg";

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
    title: "Web Developer",
    location: "Oakland, CA",
    description:
      "I worked as a web developer for a large brick and mortar specialty food marketplace and helped them build an eCommerce presence.",
    icon:  React.createElement(CgWorkAlt),
    date: "2016-2019",
  },
  {
    title: "Fullstack Developer",
    location: "Vallejo, CA",
    description:
      "I was the 2nd Fullstack Developer to join a fast moving startup in the legal California cannabis delivery space.",
    icon:  React.createElement(FaReact),
    date: "2019 - 2020",
  },
  {
    title: "Software Engineer",
    location: "San Leandro, CA",
    description:
      "I helped produce processing companies in the Bay Area rebuild decades old DOS software used in their production lines using modern technologies.",
    icon:  React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Fullstack Developer",
    location: "Oakland, CA",
    description:
      "I'm now a Fullstack Developer and passionate indie game designer working as a freelancer. I'm open to freelance and full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Plantify.io",
    description:
      "Plant identification platform built so that ussers can upload images for AI driven plant identification and get information about the identified plants.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    imageUrl: plantify,
  },
  {
    title: "Path of Exile Currency Monitor",
    description:
      "Tool to parse data from the Path Of Exile trade API, offering realtime currency exchange rates and highlighting profitable trades.",
    tags: ["Angular", "Node.js", "MySQL", "AWS"],
    imageUrl: poe,
  },
  {
    title: "Cycle of the Wolf",
    description:
      "MiniJam 136 entry. A short 'survivors' style game featuring a shapeshifting werewolf. 4th place in MiniJam 136: Cycles, built in under 72 hours.",
    tags: ["Godot", "GDScript", "Aseprite", "Itch.io"],
    imageUrl: godot1,
  },
  {
    title: "Islands of Fortune",
    description:
      "Challenging puzzle game built in one weekend for MiniJam 134: Islands.",
    tags: ["Godot", "GDScript", "Aseprite", "Itch.io"],
    imageUrl: godot2,
  },
  {
    title: "Cupcake Match",
    description:
      "Simple memory match game built to learn the new features of Godot 4.0 and GDScript 2.0.",
    tags: ["Godot", "GDScript", "Aseprite", "Itch.io"],
    imageUrl: godot4,
  },
  {
    title: "Praying for Rain",
    description:
      "Point & click action game made in two days for MiniJam 110: Sacrifice.",
    tags: ["Godot", "GDScript", "Aseprite", "Itch.io"],
    imageUrl: godot3,
  },
  {
    title: "Deck Delvers",
    description:
      "Vampire Survivors style game built in 72 hours for MiniJam 109: Depths.",
    tags: ["Godot", "GDScript", "Aseprite", "Itch.io"],
    imageUrl: godot5,
  },
  {
    title: "Breakneck Beach",
    description:
      "First game project published to itch.io for MiniJam 108: Seaside, built using Godot & GDScript in less than three days.",
    tags: ["Godot", "GDScript", "Aseprite", "Itch.io"],
    imageUrl: godot6,
  },
] as const;

export const skillsData = [
  "Angular",
  "Aseprite",
  "AWS",
  "Blender",
  "Bootstrap",
  "C#",
  "CSS",
  "Django",
  "Docker",
  "Express",
  "Flask",
  "Framer Motion",
  "Gatsby",
  "GDScript",
  "Git",
  "Godot",
  "GraphQL",
  "HTML",
  "JavaScript",
  "Linux",
  "Liquid",
  "Lua",
  "Material",
  "MongoDB",
  "MySQL",
  "NextJS",
  "Node",
  "PHP",
  "PostgreSQL",
  "Python",
  "React",
  "Redux",
  "Ruby",
  "Shopify",
  "Tailwind",
  "TypeScript",
  "Unity",
  "Vue",
] as const;
