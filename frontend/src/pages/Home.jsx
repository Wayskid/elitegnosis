import React, { useEffect, useState } from "react";
import { PiNavigationArrowFill } from "react-icons/pi";
import { motion } from "framer-motion";
import Img from "../assets/homeBkg2.png";
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  
  return (
    <div className="h-full">
      <div className="h-screen w-full grid items-end mt-[20%] md:mt-[10%] lg:mt-[4%]">
        <div className="absolute md:grid right-8 top-[40%] gap-8 text-xl justify-between hidden">
          <BsInstagram />
          <FaLinkedinIn />
          <BsTwitterX />
          <FaFacebookF />
        </div>
        <div className="w-[min(80rem,80%)] justify-self-end [@media(min-width:1700px)]:justify-self-center h-[70%] relative">
          <div className="absolute self-center -top-[6%] -left-[15%]">
            <motion.p
              initial={{ opacity: 0, translateX: -90 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ type: "easeInOut", duration: 1 }}
              className="text-[clamp(80px,13vw,250px)] font-bold tracking-tight showcaseHeader absolute self-center -top-[30%] left-[8%] grid z-[-1] textStroke"
            >
              ELITEGNOSIS
            </motion.p>
            <motion.p
              initial={{ opacity: 0, translateX: 90 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ type: "easeInOut", duration: 1 }}
              className="text-[clamp(100px,18vw,350px)] font-bold tracking-tighter showcaseHeader"
            >
              AGENCY
            </motion.p>
            <motion.button
              initial={{ opacity: 0, translateX: -140 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ type: "easeInOut", duration: 1 }}
              className="border border-black bg-white gap-10 py-4 px-4 lg:py-6 lg:px-8 text-sm flex items-center hover:bg-black hover:text-white transition duration-200 ease-in relative"
            >
              About Us{" "}
              <PiNavigationArrowFill className="text-base rotate-[133deg]" />
              <div className="absolute flex left-0 -bottom-10 text-xl w-full justify-between md:hidden">
                <BsInstagram />
                <FaLinkedinIn />
                <BsTwitterX />
                <FaFacebookF />
              </div>
            </motion.button>
          </div>
          <img
            src={Img}
            alt="bkgImg"
            className="w-full absolute z-[-1] h-full object-cover xl:object-[5%_30%]"
          />
        </div>
      </div>
    </div>
  );
}
