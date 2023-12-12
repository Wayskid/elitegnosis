import React, { useState } from "react";
import NavMenu from "./NavMenu";
import { NavLink } from "react-router-dom";
import { IoMoon, IoSunnySharp } from "react-icons/io5";

export default function Nav({ french, setFrench, lightDark, setLightDark }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className={`fixed top-0 z-50 w-full bg-white transition-colors duration-200 ${
        lightDark ? "dark:bg-black text-white" : "text-black"
      }`}
    >
      <div className="flex p-6 items-center">
        <div className="flex">
          <NavLink
            to="/"
            className={`text-2xl font-semibold md:border-r md:border-black pr-8 pb-1 leading-5 ${
              lightDark && "md:border-white"
            }`}
          >
            EliteGnosis
          </NavLink>
          <div className="hidden md:flex gap-8 pl-8 font-medium">
            <NavLink to="/">MAISON</NavLink>
            <NavLink to="/">CONTACT</NavLink>
            <NavLink to="/">À PROPOS</NavLink>
          </div>
        </div>
        <div className="relative ml-auto items-center hidden md:grid">
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
        <NavLink
          className={`font-medium hidden md:flex py-3 px-5 border border-black text-sm hover:bg-black hover:text-white transition duration-200 ease-in ${
            lightDark && "md:border-white"
          }`}
          onClick={() => setFrench(!french)}
        >
          {french ? "English" : "Français"}
        </NavLink>
        <div
          className={`grid gap-[9px] cursor-pointer md:hidden ml-auto ${
            lightDark && "dark:[&>*]:bg-white"
          }`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="w-4 h-[1.8px] justify-self-end bg-black"></div>
          <div className="w-8 h-[1.8px] bg-black"></div>
          <div className="w-4 h-[1.8px] justify-self-start bg-black"></div>
        </div>
      </div>
      <NavMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        french={french}
        setFrench={setFrench}
        lightDark={lightDark}
        setLightDark={setLightDark}
      />
    </div>
  );
}
