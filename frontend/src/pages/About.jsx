import React from "react";
import { useTranslation } from "react-i18next";

export default function About({ lightDark }) {
  const { t, i18n } = useTranslation();
  return (
    <div className="px-6 md:px-8 mt-32">
      <div className="pt-10 mb-20">
        <p
          className={`text-5xl showcaseHeader ${
            lightDark ? "text-white" : "text-black"
          }`}
        >
          {t("about_page.vision")}
        </p>
        <p
          className={`text-lg mt-5 ${lightDark ? "text-white" : "text-black"}`}
        >
          {t("about_page.our_vision")}
        </p>
      </div>
      <div className="">
        <p
          className={`text-5xl showcaseHeader ${
            lightDark ? "text-white" : "text-black"
          }`}
        >
          {t("about_page.mission")}
        </p>
        <p
          className={`text-lg mt-5 ${lightDark ? "text-white" : "text-black"}`}
        >
          {t("about_page.our_mission")}
        </p>
      </div>
    </div>
  );
}
