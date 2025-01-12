"use client";
import React from "react";
import "./skills.css";

import { motion } from "framer-motion";

const transition = { duration: 2, type: "linear" };
const transition1 = { duration: 2, type: "spring" };

const Skills = () => {
  const skillsArray = [
    {
      name: "React Js",
      level: 90,
    },
    {
      name: "Next Js",
      level: 70,
    },
    {
      name: "HTML",
      level: 90,
    },
    {
      name: "Javascript",
      level: 80,
    },
    {
      name: "CSS",
      level: 70,
    },

    {
      name: "Python",
      level: 40,
    },
    {
      name: "MOngo DB",
      level: 50,
    },
    {
      name: "Backend",
      level: 50,
    },
  ];
  return (
    <>
      <div className="skills" id="Skills">
        {/* <div className="a-left">
                        <img src={apic} alt="" />
                    </div> */}

        <div className="skills_section">
          <motion.div
            className="title"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={transition1}
          >
            {/* yahan change hy darkmode ka */}
            <span>Skills</span>
            <span> skills I mastered </span>
          </motion.div>

          <div className="skills_main">
            {skillsArray.map((curEle, i) => {
              const { name, level } = curEle;
              return (
                <div className="skill_bar" key={i}>
                  <div className="info">
                    <p>{name}</p>
                    <p>{level}%</p>
                  </div>
                  <div className="bar">
                    <motion.span
                      className="html"
                      style={{ width: `${level}%` }}
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${level}%` }}
                      transition={transition}
                    ></motion.span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
