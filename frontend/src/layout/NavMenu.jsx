import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiChevronDown, HiMiniXMark } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function NavMenu({ showMenu, setShowMenu, french, setFrench }) {
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
      className={`hidden fixed top-0 h-full w-full bg-black text-white text-[clamp(55px,15vw,90px)] p-8 font-bold showcaseHeader`}
    >
      <HiMiniXMark
        className="ml-auto text-5xl cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      />
      <NavLink>HOME</NavLink>
      <NavLink>ABOUT</NavLink>
      <NavLink>CONTACT US</NavLink>
      <NavLink>CALCULATOR</NavLink>
      <NavLink
        className="text-4xl border self-center p-4 flex justify-between items-center font-medium"
        onClick={() => setFrench(!french)}
      >
        {french ? "English" : "Française"}
      </NavLink>
    </motion.div>
  );
}
