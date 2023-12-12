import React from "react";
import { PiNavigationArrowFill } from "react-icons/pi";
import { motion } from "framer-motion";
import Img from "../assets/Project__2_-removebg.png";
import Course from "../assets/course.jpg";
import Community from "../assets/community.jpg";
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import RevenueSimulator from "../components/RevenueSimulator";

export default function Home({ lightDark, setFileData }) {
  return (
    <div className="overflow-y-hidden">
      <section className="h-screen w-full grid items-end mt-[20%] md:mt-[10%] lg:mt-[4%]">
        <div
          className={`absolute md:grid right-8 top-[40%] gap-8 text-xl justify-between hidden transition-colors duration-200 ${
            lightDark ? "dark:text-white" : "text-black"
          }`}
        >
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
              className={`text-[clamp(80px,13vw,250px)] font-bold tracking-tight showcaseHeader absolute self-center -top-[31%] md:left-[8%] grid z-[-1] textStroke transition-[-webkit-text-fill-color_-webkit-text-stroke] duration-200 ${
                lightDark
                  ? "dark:text-white dark:[-webkit-text-fill-color:black] dark:[-webkit-text-stroke:3px_#6e6fc3]"
                  : "text-black"
              }`}
            >
              ELITEGNOSIS
            </motion.p>
            <motion.p
              initial={{ opacity: 0, translateX: 90 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ type: "easeInOut", duration: 1 }}
              className={`text-[clamp(100px,18vw,350px)] font-bold tracking-tighter showcaseHeader transition-colors duration-200 ${
                lightDark ? "dark:text-white" : "text-black"
              }`}
            >
              AGENCY
            </motion.p>
            <motion.button
              initial={{ opacity: 0, translateX: -140 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ type: "easeInOut", duration: 1 }}
              className={`border border-black bg-white gap-10 py-4 px-4 lg:py-6 lg:px-8 text-sm flex items-center hover:bg-black hover:text-white transition-colors duration-200 ease-in relative ${
                lightDark
                  ? "dark:border-white dark:bg-black dark:text-white"
                  : "text-black"
              }`}
            >
              À PROPOS{" "}
              <PiNavigationArrowFill className="text-base rotate-[133deg]" />
              <div
                className={`absolute flex left-0 -bottom-10 text-xl w-full justify-between md:hidden transition-colors duration-200 ${
                  lightDark ? "dark:text-white" : "text-black"
                }`}
              >
                <BsInstagram />
                <FaLinkedinIn />
                <BsTwitterX />
                <FaFacebookF />
              </div>
            </motion.button>
          </div>
          {/* <img
            src={Img}
            alt="bkgImg"
            className="w-full absolute z-[-1] h-full object-cover xl:object-[5%_30%] saturate"
          /> */}
        </div>
      </section>
      <div
        className={`transition-colors duration-200 px-6 grid pb-80 ${
          lightDark ? "bkgGradientDark" : "bkgGradientLight"
        }`}
      >
        <section className="py-10 grid">
          <motion.p className="text-[clamp(28px,5vw,48px)] text-center text-[#6e6fc3] font-semibold transition-colors duration-200 mb-10">
            CE QUE NOUS OFFRONS
          </motion.p>
          <div className="grid md:flex gap-14 md:gap-6 w-[min(80rem,100%)] mx-auto">
            <div className="w-full object-cover grid">
              <img
                src={Course}
                alt="Online course"
                className="w-full object-cover mb-5 md:h-80"
              />
              <p
                className={`text-2xl showcaseHeader mb-2 ${
                  lightDark ? "dark:text-white" : "text-black"
                }`}
              >
                Cours en ligne
              </p>
              <p className={lightDark ? "dark:text-white" : "text-black"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, dolore nihil eum doloribus ipsa architecto deserunt,
                temporibus.
              </p>
              <button className="mr-auto mt-2 text-[#6e6fc3] flex items-center gap-1">
                Apprendre encore plus
              </button>
            </div>
            <div className="w-full object-cover grid">
              <img
                src={Community}
                alt="Online community"
                className="w-full object-cover mb-5 md:h-80"
              />
              <p
                className={`text-2xl showcaseHeader mb-2 ${
                  lightDark ? "dark:text-white" : "text-black"
                }`}
              >
                Communauté en ligne
              </p>
              <p className={lightDark ? "dark:text-white" : "text-black"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, dolore nihil eum doloribus ipsa architecto deserunt,
                temporibus.
              </p>
              <button className="mr-auto mt-2 text-[#6e6fc3] flex items-center gap-1">
                Apprendre encore plus
              </button>
            </div>
          </div>
          <button
            className={`border border-black bg-transparent py-4 px-4 lg:py-6 lg:px-8 hover:bg-black hover:text-white transition-colors duration-200 ease-in mt-10 mx-auto ${
              lightDark
                ? "dark:border-white dark:bg-black dark:text-white"
                : "text-black"
            }`}
          >
            Simulateur de revenus
          </button>
        </section>
        <RevenueSimulator lightDark={lightDark} setFileData={setFileData} />
      </div>
    </div>
  );
}
