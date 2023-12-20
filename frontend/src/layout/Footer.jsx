import React, { useState } from "react";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";


export default function Footer({ lightDark }) {
  const { t, i18n } = useTranslation();
  return (
    <div
      className={`transition-colors duration-200 px-6 pb-10 ${
        lightDark ? "black" : "white"
      }`}
    >
      <div className="grid w-[min(80rem,100%)] mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 mt-[35rem] md:mt-[28rem] gap-8 md:justify-between w-full">
          <div className="">
            <p className={!lightDark ? "text-black" : "text-white"}>
              {t("home_page.phone")}:
            </p>
            <p className={!lightDark ? "text-black" : "text-white"}>
              454656557567
            </p>
          </div>
          <div className="md:justify-self-end">
            <p className={!lightDark ? "text-black" : "text-white"}>
              {t("home_page.address")}:
            </p>
            <p className={!lightDark ? "text-black" : "text-white"}>
              Patricia C. Amedee 41 Waldeck Grapevine
              <br /> Nashville, TX 76
            </p>
          </div>
          <div className="md:justify-self-end">
            <p className={!lightDark ? "text-black" : "text-white"}>
              {t("home_page.email")}:
            </p>
            <p
              className={`break-words ${
                !lightDark ? "text-black" : "text-white"
              }`}
            >
              info@yourdomain.com
            </p>
          </div>
          <div className="md:justify-self-end">
            <p className={!lightDark ? "text-black" : "text-white"}>
              {t("home_page.social")}:
            </p>
            <p className={!lightDark ? "text-black" : "text-white"}>Phone</p>
          </div>
        </div>

        <div className="grid [@media(min-width:540px)]:flex justify-between text-white mt-10 items-center">
          <img src={logo} className="w-36" />
          <p className={!lightDark ? "text-black" : "text-white"}>
            &copy;2023 ELITEGNOSIS AGENCY
          </p>
        </div>
      </div>
    </div>
  );
}
