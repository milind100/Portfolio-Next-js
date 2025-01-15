"use client";
import React, { useEffect, useState } from "react";
import { IoMoonSharp } from "react-icons/io5";
import { BiSun } from "react-icons/bi";
import { useTheme } from "next-themes";

const Toggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const changeMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex justify-between  border-[3px] border-orange rounded-full relative p-[2px] cursor-pointer text-orange">
        <BiSun />
        <IoMoonSharp />
      </div>
    );
  }

  return (
    <div
      className="flex justify-between border-[3px] border-orange rounded-full relative p-[2px] cursor-pointer text-orange"
      onClick={changeMode}
    >
      <BiSun />
      <IoMoonSharp />
      <div
        className={`bg-orange rounded-full absolute w-4 h-4 ${
          theme === "light" ? "left-[2px]" : "right-[2px]"
        }`}
      ></div>
    </div>
  );
};

export default Toggle;
