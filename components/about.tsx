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
      {/* <p>My favorite part of programming is the problem-solving aspect. I love
        the feeling of finally figuring out a solution to a problem.</p> */}
      <p className="mb-3 ">
        After graduating with a master degree in{" "}
        <span className="font-medium">Computer Science</span>, I embarked on my
        professional journey. I worked as{" "}
        <span className="font-medium">Data Analyst</span> for 4 years, primarily
        responsible for digital operations.
      </p>
      <p>
        I implemented{" "}
        <span className="font-medium">data ETL-process and data modeling</span>{" "}
        using SQL and visualized it through Tableau or PowerBI. Additionally, in
        response to user demands for interactive data, such as digitizing
        paperwork for various departments. I delved into{" "}
        <span className="font-medium">front-end web development</span>, and also
        constructed APIs by using JavaScript and SQL for data retrieval.
      </p>
      <p className="mt-3">
        Since then, my enthusiasm for web development has grown significantly.
        I've been dedicated to honing my skills. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a front-end
        or full-stack developer.
      </p>

      <p className="mt-3">
        <span className="italic">When I'm not coding</span>, I enjoy reading
        books, watching movies, dancing and practicing yoga. I have always been
        curious and I greatly enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about philosophy and divination. I'm also learning to play the
        piano.
      </p>
    </motion.section>
  );
}
