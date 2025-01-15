"use client";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
// import apic from "../../assets/img/aboutimg.png";
import Atimeline from "./Atimeline";
import "./About.css";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import resume from "../../assets/milins.pdf";

const About = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <>
      <div className="About" id="about">
        <motion.div className="title">
          {/* yahan change hy darkmode ka */}
          <span>About Me</span>
          <span>introduction </span>
        </motion.div>
        <div className="a-body">
          <motion.div
            className="a-left hidden"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={transition}
          >
            <Image
              src="/img/aboutimg.png"
              alt="about"
              width={650}
              height={350}
            />
          </motion.div>
          <motion.div
            className="a-right "
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={transition}
          >
            <p>
              I am Developer with passion of bulding new websites and helping
              you out with my projects download my resume below{" "}
            </p>
            <p className="flex gap-1 items-center  text-sm">
              <FaPhoneAlt className="text-blue" />
              8160997745
            </p>
            <p className="flex gap-1 items-center text-sm">
              <FaUserAlt className="text-blue" size={20} />
              143 Sham villa ,Madhuram Circle ,Kharwasa Roast
              ,Surat,Gujarat,India
            </p>
            <p className="flex gap-1 items-center text-sm">
              <FaEnvelope className="text-blue" />
              milind10rpatil@gmail.com
            </p>
            <Link
              href="/resume.pdf"
              download="milindresume"
              alt="alt text"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 border-black self-end">
                Download Cv
              </button>
            </Link>
          </motion.div>
        </div>

        <Atimeline />
      </div>
    </>
  );
};

export default About;
