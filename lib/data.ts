import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import gameHub from "@/public/gameHub.png";
import shopper from "@/public/shopper.png";
import bookStore from "@/public/bookStore.jpg";

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
    title: "Data analyst",
    location: "Huawei Technologies Deutschland GmbH , DE",
    description:
      "Data modelling with SQL, data visualization with Tableau/PowerBI and data security management.",
    icon: React.createElement(CgWorkAlt),
    date: "Mai.2018 - Okt.2018",
  },
  {
    title: "IT Specialist",
    location: "Adecco Personaldienstleistung GmbH , DE",
    description:
      `Consulte and analyze requirements for BI and digitalization strategies.
      Design and implemente data ETL process and generate standard dashboards.
      Provide advice on all dashboard-related ideas and solutions (data preparation, dashboard optimization).`,
    icon: React.createElement(CgWorkAlt),
    date: "Nov.2018 - Jul.2019",
  },
  {
    title: "IT Specialist",
    location: "Manning GmbH, DE",
    description:
      "I worked not only as data analyst, but also upskilled to the web development for data interaction requirments. My stack is HTML, CSS, Javascript, React, SQL. ",
    icon: React.createElement(CgWorkAlt),
    date: "Aug.2019 - Aug.2022",
  }
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "Game Hub",
    description:
      "GameHub is a video game discovery web app that helps you find new and interesting games to play. You can search for games by platform, genre, and more.",
    tags: ["React", "Typescript", "ChakraUI", "Zustand"],
    imageUrl: gameHub,
    link: "https://wpang-gamehub.vercel.app/"
  },
  {
    title: "Shopper",
    description:
      "A e-commerce website built with React.js",
    tags: ["React", ],
    imageUrl: shopper,
    link: "https://e-commerce-ten-nu-93.vercel.app/"
  },
  {
    title: "Book Store",
    description:
      "A full stack web app for book store, implement backend CRUD.",
    tags: ["React", "Node.js", "MongoDB", ],
    imageUrl: bookStore,
    link: "https://github.com/Weihan00/BookStore-MERN-stack"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "MongoDB",
  "Tailwind",
  "Chakra",
  "Git",
  "SQL",
  "Tableau",
  "PowerBI",
  "Python"
] as const;
