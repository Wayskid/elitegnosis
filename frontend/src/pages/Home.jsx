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
    <div className="relative ">
      <section className="h-screen grid grid-rows-[2fr_1fr] lg:grid-rows-[unset] lg:grid-cols-2 relative gap-10">
        <img
          src={School}
          className={`absolute -z-10 w-full h-full object-cover grayscale ${
            lightDark ? "opacity-20" : "opacity-40"
          }`}
          alt=""
        />
        <div className="px-6 md:px-8 lg:self-center self-end grid justify-center lg:justify-start">
          <p
            className={`showcaseHeader text-center lg:text-left text-[clamp(90px,13vw,150px)]  tracking-tighter leading-[1em] ${
              lightDark
                ? "dark:[-webkit-text-fill-color:transparent] dark:[-webkit-text-stroke:3.5px_#2e9cd7]"
                : "[-webkit-text-fill-color:transparent] [-webkit-text-stroke:3px_#2e9cd7]"
            }`}
          >
            ELITEGNOSIS
          </p>
          <p
            className={`showcaseHeader text-center lg:text-left text-[clamp(90px,13vw,150px)] tracking-tighter leading-[1em] font-bold ${
              lightDark ? "dark:text-white" : "text-black"
            }`}
          >
            AGENCY
          </p>
          <a
            href="#offers"
            className={`border border-black py-3 md:py-5 px-16 transition-colors duration-200 ease-in mt-5 mx-auto lg:mr-auto lg:ml-0 md:text-lg ${
              lightDark
                ? "dark:border-white dark:bg-white dark:text-black"
                : "text-white bg-black"
            }`}
          >
            {t("home_page.our_offers")}
          </a>
        </div>
        <div className="grid lg:self-center self-start lg:gap-5 px-6">
          <p
            className={`text-3xl md:text-5xl text-center lg:text-left lg:border-l-4 lg:py-10 px-6 ${
              lightDark ? "text-white border-white" : "text-black border-black"
            }`}
          >
            {t("home_page.level")}
          </p>
          <p
            className={`text-3xl md:text-5xl text-center lg:text-right lg:border-r-4 lg:py-10 px-6 ${
              lightDark ? "text-white border-white" : "text-black border-black"
            }`}
          >
            {t("home_page.your_followers")}
          </p>
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
              <div className="px-5 md:px-16 py-20 text-center">
                <p
                  className={`text-5xl mb-5 ${
                    lightDark ? "text-white" : "text-black"
                  }`}
                >
                  {t("home_page.online_course")}
                </p>
                <p className={`${lightDark ? "text-white" : "text-black"}`}>
                  {t("home_page.online_course_des")}
                </p>
              </div>
            </div>
            <div
              className={` rounded-lg overflow-hidden ${
                lightDark ? "bg-black" : "bg-white"
              }`}
            >
              <p className="bg-[#2e9cd7] p-4 text-[4rem] grid place-content-center text-white">
                <MdOutlinePeopleAlt />
              </p>
              <div className="px-5 md:px-16 py-20 text-center">
                <p
                  className={`text-5xl mb-5 ${
                    lightDark ? "text-white" : "text-black"
                  }`}
                >
                  {t("home_page.online_comm")}
                </p>
                <p className={`${lightDark ? "text-white" : "text-black"}`}>
                  {t("home_page.online_comm_des")}
                </p>
              </div>
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
