import React, { useState } from "react";
import { motion } from "framer-motion";
import RevenueSimulator from "../components/RevenueSimulator";
import ContactForm from "../components/ContactForm";
import { MdOutlinePeopleAlt, MdOutlineSchool } from "react-icons/md";
import School from "../assets/school.jpg";
import { useTranslation } from "react-i18next";

export default function Home({ lightDark, setFileData }) {
  const { t, i18n } = useTranslation();
  return (
    <div className="relative">
      <section className="h-screen grid relative">
        <img
          src={School}
          className={`absolute -z-10 w-full h-full object-cover grayscale ${
            lightDark ? "opacity-20" : "opacity-40"
          }`}
          alt=""
        />
        <div className="px-6 md:px-8 self-center grid">
          <p
            className={`showcaseHeader text-[clamp(92px,18vw,250px)]  tracking-tighter leading-[1em] ${
              lightDark
                ? "dark:[-webkit-text-fill-color:transparent] dark:[-webkit-text-stroke:3.5px_#2e9cd7]"
                : "[-webkit-text-fill-color:transparent] [-webkit-text-stroke:3px_#2e9cd7]"
            }`}
          >
            ELITEGNOSIS
          </p>
          <p
            className={`showcaseHeader text-[clamp(92px,18vw,250px)] tracking-tighter leading-[1em] font-bold ${
              lightDark ? "dark:text-white" : "text-black"
            }`}
          >
            AGENCY
          </p>
          <a
            href="#offers"
            className={`border border-black py-4 md:py-6 px-20 transition-colors duration-200 ease-in mt-5 mr-auto md:text-lg ${
              lightDark
                ? "dark:border-white dark:bg-white dark:text-black"
                : "text-white bg-black"
            }`}
          >
            {t("home_page.our_offers")}
          </a>
        </div>
      </section>
      <div
        id="offers"
        className={`transition-colors duration-200 grid pb-[35rem] md:pb-[40rem] lg:pb-[30rem] ${
          lightDark ? "bkgGradientDark" : "bkgGradientLight"
        }`}
      >
        <section className="py-10 px-6 grid w-[min(85rem,100%)] mx-auto">
          <motion.p className="text-[clamp(28px,5vw,48px)] text-center text-[#2e9cd7] font-semibold transition-colors duration-200 mb-10">
            {t("home_page.our_offers")}
          </motion.p>
          <div className="grid md:grid-cols-2 gap-10">
            <div
              className={` rounded-lg overflow-hidden ${
                lightDark ? "bg-black" : "bg-white"
              }`}
            >
              <p className="bg-[#2e9cd7] p-4 text-[4rem] grid place-content-center text-white">
                <MdOutlineSchool />
              </p>
              <p
                className={`text-5xl text-center px-5 md:px-16 py-20 ${
                  lightDark ? "text-white" : "text-black"
                }`}
              >
                {t("home_page.online_course")}
              </p>
            </div>
            <div
              className={` rounded-lg overflow-hidden ${
                lightDark ? "bg-black" : "bg-white"
              }`}
            >
              <p className="bg-[#2e9cd7] p-4 text-[4rem] grid place-content-center text-white">
                <MdOutlinePeopleAlt />
              </p>
              <p
                className={`text-5xl text-center px-5 md:px-16 py-20 break-words ${
                  lightDark ? "text-white" : "text-black"
                }`}
              >
                {t("home_page.online_comm")}
              </p>
            </div>
          </div>
          <a
            href="#simulator"
            className={`py-4 px-4 lg:py-6 lg:px-8 transition-colors duration-200 ease-in mt-10 mx-auto ${
              lightDark
                ? "dark:border-white dark:bg-white dark:text-black"
                : "text-white bg-black"
            }`}
          >
            {t("home_page.offer_btn")}
          </a>
        </section>
        <RevenueSimulator lightDark={lightDark} setFileData={setFileData} />
      </div>
      <ContactForm lightDark={lightDark} />
    </div>
  );
}
