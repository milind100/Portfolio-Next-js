"use client";
import React, { useState } from "react";
// import "./Toggle.css";
import { IoMoonSharp } from "react-icons/io5";
import { BiSun } from "react-icons/bi";

const Toggle = () => {
  const [mode, setMode] = useState("sun");
  const changeMode = () => {
    mode === "sun" ? setMode("moon") : setMode("sun");
    console.log(mode);
  };
  return (
    <div
      className="flex justify-between  border-[3px] border-orange rounded-full relative p-[2px] cursor-pointer text-orange"
      onClick={changeMode}
    >
      <BiSun />
      <IoMoonSharp />
      <div
        className={`bg-orange rounded-full absolute w-4 h-4 ${
          mode === "sun" ? "left-[2px]" : "right-[2px]"
        }`}
      ></div>
    </div>
  );
};

export default Toggle;
