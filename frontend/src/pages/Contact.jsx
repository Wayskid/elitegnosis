import React from "react";
import { motion } from "framer-motion";
import {
  BsInstagram,
  BsPhone,
  BsPhoneLandscape,
  BsTelephone,
} from "react-icons/bs";
import {
  FaInstagram,
  FaLocationDot,
  FaLocationPin,
  FaPhone,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import {
  MdEmail,
  MdLocationPin,
  MdOutlineMail,
  MdOutlineWhatsapp,
} from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

import ContactForm from "../components/ContactForm";
import Call from "../assets/call.jpg";
import { useTranslation } from "react-i18next";

export default function Contact({ lightDark }) {
  const { t, i18n } = useTranslation();
  return (
    <div className="relative">
      <section className="h-screen relative grid">
        <div className={`text-center grid transition-colors `}>
          <img
            src={Call}
            className={`absolute -z-10 w-full h-full object-cover grayscale ${
              lightDark ? "opacity-20" : "opacity-40"
            }`}
            alt=""
          />
          <div className="self-center grid pt-20">
            <p
              className={`text-[3rem] md:text-[5rem] font-extrabold text-[#2e9cd7] w-[min(70rem,95%)] mx-auto`}
            >
              {t("contact_page.add_value")}
            </p>
            <a
              href="https://calendar.app.google/ZzgEsJz4Em1LYQBs7"
              target="_blank"
              className={`border border-black py-5 px-10 transition-colors duration-200 ease-in relative mx-auto mt-10 mb-32 text-lg ${
                lightDark
                  ? "dark:border-white dark:bg-white dark:text-black hover:bg-black hover:text-white"
                  : "text-white bg-black hover:bg-white hover:text-black"
              }`}
            >
              {t("contact_page.make_it_happen")}
            </a>
          </div>
        </div>
        <div className="absolute -bottom-72 bg-[#2e9cd7] grid w-[min(76rem,100%)] h-[25rem] md:h-[30rem] items-center justify-self-center rounded-lg">
          <div className="grid grid-cols-2 mx-auto">
            <div
              className={`grid justify-items-center gap-3 p-5 md:p-10 text-white border-b `}
            >
              <MdOutlineWhatsapp className="text-5xl self-center" />
              <p className="text-center font-medium">+46 (722) 572457</p>
            </div>
            <div
              className={`grid justify-items-center gap-3 p-5 md:p-10 text-white border-l border-b`}
            >
              <FaInstagram className="text-5xl self-center" />
              <p className="text-center font-medium">@elitegnosis.ig</p>
            </div>
            <div
              className={`grid justify-items-center gap-3 p-5 md:p-10 text-white `}
            >
              <MdOutlineMail className="text-5xl self-center" />
              <p className="text-center font-medium">
                elitegnosis
                <br />
                @gmail.com
              </p>
            </div>
            <div
              className={`grid justify-items-center gap-3 p-5 md:p-10 text-white border-l`}
            >
              <SlLocationPin className="text-5xl self-center" />
              <p className="text-center font-medium">
                14 rue Louis Aurelia, Monaco
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`pb-[35rem] md:pb-[40rem] lg:pb-[30rem] py-[150px] ${
          lightDark ? "bkgGradientDark" : "bkgGradientLight"
        }`}
      >
        FAQ
      </section>
      <ContactForm lightDark={lightDark} />
    </div>
  );
}
