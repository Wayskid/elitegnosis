import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiChevronDown, HiMiniXMark } from "react-icons/hi2";
import { motion } from "framer-motion";
import { IoMoon, IoSunnySharp } from "react-icons/io5";

export default function NavMenu({
  showMenu,
  setShowMenu,
  french,
  setFrench,
  lightDark,
  setLightDark,
}) {
  const showMenuAnim = {
    hide: {
      scale: 0.95,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      display: "grid",
      transition: { type: "easeInOut", duration: 0.1 },
    },
  };
  return (
    <motion.div
      variants={showMenuAnim}
      animate={showMenu ? "show" : "hide"}
      className={`hidden fixed top-0 h-full w-full bg-white text-[clamp(55px,15vw,90px)] p-8 font-bold showcaseHeader ${
        lightDark && "dark:bg-black"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="relative items-center md:hidden grid">
          <input
            type="checkbox"
            name="themeToggle"
            id="themeToggle"
            checked={lightDark}
            onChange={() => setLightDark(!lightDark)}
            className="absolute w-full left-0 peer/theme z-10 opacity-0 cursor-pointer"
          />
          <div className="w-11 h-[1.5rem] rounded-full bg-white border border-black text-black relative mr-5 peer-checked/theme:[&>*:last-child]:right-[0.21rem] peer-checked/theme:[&>*:last-child]:bg-white peer-checked/theme:[&>*:first-child]:text-white peer-checked/theme:bg-black peer-checked/theme:border-white flex text-sm justify-between items-center py-[0.25rem] px-[0.21rem] transition-colors ease-in">
            <IoSunnySharp className="self-center text-white" />
            <IoMoon className="rounded bottom-[0.2rem] top-[0.2rem] text-black" />
            <div className="absolute rounded-full bg-black w-[1rem] h-[1rem] right-[calc(1.65rem-0.21rem)] transition-[right] ease-in duration-150"></div>
          </div>
        </div>
        <HiMiniXMark
          className="ml-auto text-5xl cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
      <NavLink
        className={`textStroke ${
          lightDark
            ? "dark:text-white dark:[-webkit-text-fill-color:black] dark:[-webkit-text-stroke:3px_white]"
            : "text-black"
        }`}
      >
        MAISON
      </NavLink>
      <NavLink
        className={`textStroke ${
          lightDark
            ? "dark:text-white dark:[-webkit-text-fill-color:black] dark:[-webkit-text-stroke:3px_white]"
            : "text-black"
        }`}
      >
        À PROPOS
      </NavLink>
      <NavLink
        className={`textStroke ${
          lightDark
            ? "dark:text-white dark:[-webkit-text-fill-color:black] dark:[-webkit-text-stroke:3px_white]"
            : "text-black"
        }`}
      >
        CONTACT
      </NavLink>
      <NavLink
        className={`textStroke ${
          lightDark
            ? "dark:text-white dark:[-webkit-text-fill-color:black] dark:[-webkit-text-stroke:3px_white]"
            : "text-black"
        }`}
      >
        CALCULATRICE
      </NavLink>
      <NavLink
        className={`text-4xl border border-black self-center p-4 flex justify-between items-center font-medium ${
          lightDark && "dark:border-white"
        }`}
        onClick={() => setFrench(!french)}
      >
        {french ? "English" : "Française"}
      </NavLink>
    </motion.div>
  );
}
