"use client";
import React from "react";

import "./Navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import Toggle from "./Toggle";

const Navbar = () => {
  // const navigate = useNavigate();

  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  const NavArray = [
    {
      label: "Home",
      id: "#Home",
    },
    {
      label: "Skills",
      id: "#Skills",
    },
    {
      label: "About",
      id: "#About",
    },
    {
      label: "Projects",
      id: "#Projects",
    },
  ];

  return (
    <>
      <div className="n-wrapper" id="Navbar">
        <div className="n-left">
          <div className="n-name">Chiku</div>
          <Toggle />
        </div>
        {/* <div className="n-middle">
          <h1
            onClick={() => {
              setNavToggle(!navToggle);
            }}
          >
            {navToggle === false ? (
              <GiHamburgerMenu color="var(--orange)" />
            ) : (
              <AiFillCloseCircle color="var(--orange)" />
            )}
          </h1>
        </div> */}
        {/* right */}
        <div
          // className={
          //   window.innerWidth < 800 && navToggle === true
          //     ? "n-right active"
          //     : "n-right"
          // }
          className="n-right active"
        >
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
              <button className="n-button">
                <span>Let's connect</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
