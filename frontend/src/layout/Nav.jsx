import React, { useState } from "react";
import NavMenu from "./NavMenu";
import { NavLink } from "react-router-dom";

export default function Nav({ french, setFrench }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="fixed top-0 z-50 w-full bg-black">
      <div className="flex justify-between p-6 items-center">
        <div className="flex text-white">
          <p className="text-2xl font-semibold md:border-r pr-8 pb-1 leading-5">
            EliteGnosis
          </p>
          <div className="hidden md:flex gap-8 pl-8 font-medium">
            <NavLink className="">HOME</NavLink>
            <NavLink className="">CONTACT</NavLink>
            <NavLink className="">ABOUT</NavLink>
          </div>
        </div>
        <NavLink
          className="text-white font-medium hidden md:flex py-3 px-5 border text-sm hover:bg-white hover:text-black transition duration-200 ease-in "
          onClick={() => setFrench(!french)}
        >
          {french ? "English" : "Française"}
        </NavLink>
        <div
          className="grid gap-[9px] cursor-pointer md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="w-4 h-[1.8px] justify-self-end bg-white"></div>
          <div className="w-8 h-[1.8px] bg-white"></div>
          <div className="w-4 h-[1.8px] justify-self-start bg-white"></div>
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
