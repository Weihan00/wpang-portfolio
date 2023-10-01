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
      className="mb-28 max-w-[45rem] text-left leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      {/* <p>My favorite part of programming is the problem-solving aspect. I love
        the feeling of finally figuring out a solution to a problem.</p> */}
      <p className="mb-3">
        After graduating with a master degree in{" "}
        <span className="font-medium">Computer Science</span>, I embarked on my
        professional journey. I worked as Data Analyst for 4 years, primarily
        responsible for digital operations.
      </p>
      <p>
        <ul className="list-disc">
          My responsibilities encompassed three key areas:
          <li>
            Streamlining repetitive data processing tasks for business teams to
            enhance overall efficiency.
          </li>
          <li>
            Providing decision-makers with intuitive, real-time reports,
            offering them comprehensive insights into ongoing operations.
          </li>
          <li>
            Spearheading the digitalization of paperwork within the business
            department, not only bolstering efficiency but also ensuring data
            permanence and security.
          </li>
        </ul>
        Initially, my expertise centered on data modeling and data
        visualizations. As business requirements evolved, there emerged the need
        for data interaction. This prompted me to explore{" "}
        <span className="font-medium">front-end development</span>, and
        utilizing JavaScript and SQL to create APIs for data retrieval.
      </p>
      <p>
        Since then, my enthusiasm for web development has grown significantly.
        My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a front-end
        developer or full-stack developer developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading
        books, watching movies, dancing and practicing yoga. I have always been
        curious and I greatly enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">philosophy and divination</span>. I'm also
        learning to play the piano.
      </p>
    </motion.section>
  );
}
