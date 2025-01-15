"use client";

import React from "react";
import { motion } from "framer-motion";
import "./intro.css";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/constants/socialLinks";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="intro" id="home">
      <div className="i-left">
        <motion.div
          className="i-name"
          initial={{ x: -250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={transition}
        >
          <span className="font-bold text-3xl mmd:text-5xl  text-black dark:text-white">
            Hy! I Am
          </span>
          <span className="font-bold  text-3xl mmd:text-5xl text-orange">
            ReactJs/NextJs Developer
          </span>
          <span className="font-bold text-xl mmd:text-3xl mt-3 w-[50%] text-black dark:text-white">
            Milind Ravikant Patil
          </span>
          <p className="font-[100] text-base mmd:text-[18px] text-blue mt-[10px] w-[80%]">
            Experienced React.js and Next.js developer specializing in
            full-stack development, code fixes, and modifications. Proficient in
            enhancing functionality,and optimizing performance, Ready to tackle
            complex challenges
          </p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={transition}
            className="social-icon mt-8"
          >
            {socialLinks?.map(({ src, link }) => {
              return (
                <Link href={link} key={src}>
                  <Image
                    src={src}
                    alt="Facebook Logo"
                    height={52}
                    width={52}
                  ></Image>
                </Link>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={transition}
        className="hidden sm:block w-[660px] h-[600px] mmd:h-auto mmd:w-[60%]"
      >
        <Image
          src="/img/profile.jpeg"
          alt="profile"
          width={400}
          height={400}
          className="block w-[400px] h-[450px] border-[3px] border-black rounded-xl shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default Intro;
