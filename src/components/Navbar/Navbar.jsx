"use client";
import React, { useState } from "react";

import "./Navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
// import { FaUser } from "react-icons/fa";
// import Link from "next/link";
import Toggle from "./Toggle";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      const topPosition = section.getBoundingClientRect().top + window.scrollY; // Calculate the section's position
      const offset = 100; // Offset of 100px before the section
      window.scrollTo({
        top: topPosition - offset,
        behavior: "smooth",
      });
      setOpenNav(false);
    }
  }

  const NavArray = [
    {
      label: "Home",
      id: "home",
    },
    {
      label: "Skills",
      id: "Skills",
    },
    {
      label: "About",
      id: "about",
    },
    {
      label: "Projects",
      id: "projects",
    },
  ];

  return (
    <>
      <div className="n-wrapper sticky" id="Navbar">
        <div className="flex justify-between w-full md:w-auto md:items-center size-5">
          <div className="flex items-center justify-between gap-2">
            <div className="n-name">VikramAditya</div>
            <Toggle />
          </div>
          <div
            className="md:hidden cursor-pointer z-50"
            onClick={() => {
              setOpenNav(!openNav);
            }}
          >
            {openNav ? (
              <AiFillCloseCircle size={24} className="text-orange" />
            ) : (
              <GiHamburgerMenu size={24} className="text-orange" />
            )}
          </div>
        </div>
        {/* right */}

        <div className="n-right">
          <ul style={{ listStyleType: "none" }}>
            {NavArray.map(({ label, id }, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    scrollToSection(id);
                  }}
                >
                  <span className="n-link">{label}</span>
                </li>
              );
            })}
            <li>
              <button
                className="n-button"
                onClick={() => scrollToSection("contact")}
              >
                <span>Let&apos;s connect</span>
              </button>
            </li>
          </ul>
        </div>
        {/* Hamburger Menu for smaller screens */}
        <div
          className={`absolute top-14 left-0 w-full bg-white shadow-lg z-0 transition-all duration-300 ease-in-out transform ${
            openNav
              ? "translate-y-0 opacity-100 "
              : "-translate-y-[1000px] opacity-0"
          } md:hidden`}
        >
          <ul
            style={{ listStyleType: "none" }}
            className="flex flex-col justify-center w-full items-center gap-4 p-4"
          >
            {NavArray.map(({ label, id }, i) => (
              <li
                key={i}
                onClick={() => {
                  scrollToSection(id);
                }}
                className="text-lg font-medium"
              >
                <span className="n-link">{label}</span>
              </li>
            ))}
            <li>
              <button
                className="n-button"
                onClick={() => scrollToSection("contact")}
              >
                <span>Let&apos;s connect</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
