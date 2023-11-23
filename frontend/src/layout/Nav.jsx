import React, { useState } from "react";
import NavMenu from "./NavMenu";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="fixed top-0 z-50 w-full bg-black">
      <div className="w-[min(90rem,100%)] flex justify-between p-8 items-center">
        <p className="text-xl text-white">EliteGnosis</p>
        <div
          className="grid gap-[9px] cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="w-4 h-[1.8px] justify-self-end bg-white"></div>
          <div className="w-8 h-[1.8px] bg-white"></div>
          <div className="w-4 h-[1.8px] justify-self-start bg-white"></div>
        </div>
      </div>
      <NavMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
}
