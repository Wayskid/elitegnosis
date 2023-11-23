import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMiniXMark } from "react-icons/hi2";

export default function NavMenu({ showMenu, setShowMenu }) {
  return (
    <div
      className={`${
        showMenu ? "grid" : "hidden"
      } fixed top-0 h-full w-full bg-black text-white text-[clamp(55px,13vw,90px)] items-center py-5 px-6 font-bold showcaseHeader`}
    >
      <HiMiniXMark
        className="ml-auto text-6xl cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      />
      <NavLink>HOME</NavLink>
      <NavLink>ABOUT</NavLink>
      <NavLink>CONTACT US</NavLink>
      <NavLink>CALCULATOR</NavLink>
    </div>
  );
}
