import React, { useState } from "react";
import NavMenu from "./NavMenu";
import { NavLink } from "react-router-dom";
import { IoMoon, IoSunnyOutline, IoSunnySharp } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa6";

export default function Nav({ french, setFrench }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="fixed top-0 z-50 w-full bg-white">
      <div className="flex p-6 items-center">
        <div className="flex">
          <p className="text-2xl font-semibold md:border-r md:border-black pr-8 pb-1 leading-5">
            EliteGnosis
          </p>
          <div className="hidden md:flex gap-8 pl-8 font-medium">
            <NavLink className="">HOME</NavLink>
            <NavLink className="">CONTACT</NavLink>
            <NavLink className="">ABOUT</NavLink>
          </div>
        </div>
        <div className="relative ml-auto items-center hidden md:grid">
          <input
            type="checkbox"
            name="themeToggle"
            id="themeToggle"
            className="absolute w-full peer/theme z-10 opacity-0 cursor-pointer"
          />
          <div className="w-11 h-[1.5rem] rounded-full bg-black relative mr-5 peer-checked/theme:[&>*]:-right-1 flex text-sm justify-between items-center py-[0.25rem] px-[0.21rem]">
            <IoSunnyOutline className="self-center z-20 text-white" />
            <IoMoon className="rounded bottom-[0.2rem] top-[0.2rem] text-white" />
            <div className="absolute rounded-full bg-white w-[1rem] h-[1rem] right-[0.21rem]"></div>
          </div>
        </div>
        <NavLink
          className="font-medium hidden md:flex py-3 px-5 border border-black text-sm hover:bg-black hover:text-white transition duration-200 ease-in "
          onClick={() => setFrench(!french)}
        >
          {french ? "English" : "Française"}
        </NavLink>
        <div
          className="grid gap-[9px] cursor-pointer md:hidden"
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
      />
    </div>
  );
}
