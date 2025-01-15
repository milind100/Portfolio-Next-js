"use client";
import React from "react";
import { motion } from "framer-motion";
import "./projects.css";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/constants/projects.desc";

const Projects = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <div id="projects">
      <section id="p_gallery-section">
        <div className="title">
          <span>Projects</span>
          <span>Here is Our Work Gallery For You </span>
        </div>

        <div className="p_gallery-main">
          <div className="flex flex-col gap-6">
            {projectsData.map((Ele) => {
              const { title, desc, github, Projimage, link, technology } = Ele;
              return (
                <motion.div
                  key={title}
                  className="p_card"
                  initial={{ y: 100 }}
                  whileInView={{ y: 0 }}
                  transition={transition}
                >
                  <div className="w-full max-w-md h-32 md:h-64 ">
                    <Image
                      src={Projimage}
                      alt={`${title} Project Image`}
                      width={500} // Fixed width
                      height={500} // Fixed height
                      className="object-cover rounded-md w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col text-left gap-6">
                    <span className="text-xl sm:text-4xl font-bold text-black dark:text-white">
                      {title}
                    </span>
                    <div className="flex flex-col gap-4 dark:text-whiten">
                      <div className="text-sm sm:text-xl">{desc}</div>
                      <dvi className="text-xs sm:text-lg">
                        <b>Technology:</b>
                        {technology}
                      </dvi>
                      <div className="flex gap-4">
                        {github && (
                          <Link
                            href="www.github.com"
                            className="border-2 bg-orange font-bold  rounded-lg sm:rounded-3xl px-4 py-2 text-xs  sm:py-2 hover:text-orange hover:bg-black"
                          >
                            GitHub
                          </Link>
                        )}
                        {link && (
                          <Link
                            href={link}
                            className="border-2 bg-orange font-bold  rounded-lg sm:rounded-3xl px-4 py-2 text-xs sm:px-8 sm:py-2 hover:text-orange hover:bg-black"
                          >
                            Website
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
