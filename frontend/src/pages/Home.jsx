import React from "react";
import { PiNavigationArrowFill } from "react-icons/pi";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-full">
      {/* <section className="p-8 grid items-center h-full"> */}
      <div className="h-full w-full grid items-end relative ml-auto mt-[20%] lg:mt-[4%]">
        <div className="w-[min(80rem,80%)] justify-self-end h-[70%] bg-gray-600 relative">
          <div className=" absolute self-center -top-[6%] -left-[15%]">
            <motion.p
              initial={{ opacity: 0, translateX: -30 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ type: "easeInOut", duration: 1 }}
              className="text-[clamp(80px,13vw,250px)] font-bold tracking-tighter text-gray-700 showcaseHeader absolute self-center -top-[30%] left-[8%] grid z-[-1]"
            >
              ELITEGNOSIS
            </motion.p>
            <motion.p
              // initial={{ opacity: 0, translateX: 30 }}
              // animate={{ opacity: 1, translateX: 0 }}
              // transition={{ type: "easeInOut", duration: 1 }}
              className="text-[clamp(100px,18vw,350px)] font-bold tracking-tighter text-white showcaseHeader"
            >
              AGENCY
            </motion.p>
            <button className="bg-white border gap-10 py-4 px-4 lg:py-6 lg:px-8 text-sm flex items-center lg:ml-[18%]">
              About Us{" "}
              <PiNavigationArrowFill className="text-base rotate-[133deg]" />
            </button>
          </div>
        </div>
      </div>
      {/* </section> */}
    </div>
  );
}
