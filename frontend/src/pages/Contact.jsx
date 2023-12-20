import React from "react";
import { motion } from "framer-motion";
import {
  BsInstagram,
  BsPhone,
  BsPhoneLandscape,
  BsTelephone,
} from "react-icons/bs";
import { FaLocationDot, FaLocationPin, FaPhone } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdEmail, MdLocationPin } from "react-icons/md";
import ContactForm from "../components/ContactForm";
import Call from "../assets/call.jpg";

export default function Contact({ lightDark }) {
  return (
    <div className="mt-16 relative">
      <section className="h-screen relative grid">
        <div className={`h-[95%] text-center grid transition-colors`}>
          <img
            src={Call}
            className={`absolute -z-10 w-full h-full object-cover grayscale ${
              lightDark ? "opacity-20" : "opacity-40"
            }`}
            alt=""
          />
          <div className="self-center grid">
            <p
              className={`text-[4.5rem] md:text-[5rem] font-semibold ${
                lightDark ? "text-white" : "text-black"
              }`}
            >
              Book A
            </p>
            <p
              className={`text-[4.5rem] md:text-[5rem] font-semibold ${
                lightDark ? "text-white" : "text-black"
              }`}
            >
              Call Time
            </p>
            <a
              href="https://calendar.app.google/ZzgEsJz4Em1LYQBs7"
              target="_blank"
              className={`border border-black py-5 px-10 transition-colors duration-200 ease-in relative mx-auto mt-10 mb-32 text-lg ${
                lightDark
                  ? "dark:border-white dark:bg-white dark:text-black"
                  : "text-white bg-black"
              }`}
            >
              BOOK NOW
            </a>
          </div>
        </div>
        <div className="absolute -bottom-56 bg-[#2e9cd7] grid w-[min(76rem,100%)] h-[25rem] md:h-[30rem] items-center justify-self-center rounded-lg">
          <div className="grid grid-cols-2 mx-auto">
            <div
              className={`grid justify-items-center gap-3 p-5 md:p-10 text-white border-b `}
            >
              <FaPhone className="text-5xl self-center" />
              <p className="text-center font-medium">+46 (722) 572457</p>
            </div>
            <div
              className={`grid justify-items-center gap-3 p-5 md:p-10 text-white border-l border-b`}
            >
              <BsInstagram className="text-5xl self-center" />
              <p className="text-center font-medium">CEO: @thomassuray</p>
            </div>
            <div
              className={`grid justify-items-center gap-3 p-5 md:p-10 text-white `}
            >
              <MdEmail className="text-5xl self-center" />
              <p className="text-center font-medium">
                elitegnosis
                <br />
                @gmail.com
              </p>
            </div>
            <div
              className={`grid justify-items-center gap-3 p-5 md:p-10 text-white border-l`}
            >
              <MdLocationPin className="text-5xl self-center" />
              <p className="text-center font-medium">
                14 rue Louise Aurelia, Monaco
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`pb-[35rem] md:pb-[40rem] lg:pb-[30rem] py-[500px] ${
          lightDark ? "bkgGradientDark" : "bkgGradientLight"
        }`}
      >
        FAQ
      </section>
      <ContactForm lightDark={lightDark} />
    </div>
  );
}
