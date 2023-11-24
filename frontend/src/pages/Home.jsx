import React, { useEffect, useState } from "react";
import { PiNavigationArrowFill } from "react-icons/pi";
import { motion } from "framer-motion";
import Img from "../assets/homeBkg.png";

export default function Home() {
  return (
    <div className="h-full">
      <div className="h-full w-full grid items-end ml-auto mt-[20%] md:mt-[10%] lg:mt-[4%]">
        <div className="w-[min(80rem,80%)] justify-self-end h-[70%]  relative">
          <div className="absolute self-center -top-[6%] -left-[15%]">
            <motion.p
              initial={{ opacity: 0, translateX: -90 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ type: "easeInOut", duration: 1 }}
              className="text-[clamp(80px,13vw,250px)] font-bold tracking-tighter text-gray-700 showcaseHeader absolute self-center -top-[30%] left-[8%] grid z-[-1]"
            >
              ELITEGNOSIS
            </motion.p>
            <motion.p
              initial={{ opacity: 0, translateX: 90 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ type: "easeInOut", duration: 1 }}
              className="text-[clamp(100px,18vw,350px)] font-bold tracking-tighter text-white showcaseHeader"
            >
              AGENCY
            </motion.p>
            <motion.button
              initial={{ opacity: 0, translateX: -140 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ type: "easeInOut", duration: 1 }}
              className="bg-white border gap-10 py-4 px-4 lg:py-6 lg:px-8 text-sm flex items-center lg:ml-[18%] hover:bg-black hover:text-white transition duration-200 ease-in"
            >
              About Us{" "}
              <PiNavigationArrowFill className="text-base rotate-[133deg]" />
            </motion.button>
          </div>
            <img
              src={Img}
              alt="bkgImg"
              className="w-[95%] object-cover absolute z-[-1]"
            />
        </div>
      </div>
    </div>
  );
}
