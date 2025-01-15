"use client";
import React from "react";
import "./skills.css";

import { motion } from "framer-motion";
import { skillsArray } from "@/constants/skills.desc";

const transition = { duration: 2, type: "linear" };
const transition1 = { duration: 2, type: "spring" };

const Skills = () => {
  return (
    <>
      <div className="skills mb-16" id="Skills">
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
