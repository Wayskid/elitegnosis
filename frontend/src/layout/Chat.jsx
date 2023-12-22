import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Chat({ lightDark, showChat }) {
  const { t, i18n } = useTranslation();
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageVal, setMessageVal] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setMessageVal({
      ...messageVal,
      [e.target.name]: e.target.value,
    });
  }

  function sendMessage(e) {
    e.preventDefault();
    if (Object.values(messageVal).every((val) => val.length > 0)) {
      setLoading(true);
      emailjs
        .send(
          "service_82cheld",
          "template_025ph7t",
          {
            ...messageVal,
          },
          "cozjcJvRVN6Q6PN29"
        )
        .then(
          (result) => {
            setLoading(false);
            setShowResult(true);
            setMessageVal({
              name: "",
              email: "",
              message: "",
            });
            console.log(result);
          },
          (error) => {
            console.log(error);
            setLoading(false);
          }
        );
    }
  }

  const variants = {
    show: {
      translateY: 0,
      translateX: 0,
      display: "unset",
      transition: { type: "ease" },
    },
    hide: {
      translateY: 1000,
      translateX: 1000,
      transitionEnd: { display: "none" },
    },
  };

  return (
    <motion.div
      variants={variants}
      animate={showChat ? "show" : "hide"}
      className="w-full rounded-lg shadow-md overflow-hidden hidden"
    >
      <div className="bg-[#2e9cd7] text-white text-center py-3 px-2">
        <p className="text-2xl font-medium">EliteGnosis</p>
        <p className="text-sm font-medium">{t("chat_bubble.how_to_help")}</p>
        <p className="text-sm text-slate-300">{t("chat_bubble.response")}</p>
      </div>
      {showResult ? (
        <div
          className={`text-center px-3 py-[11.69rem] ${
            lightDark ? "bg-[#0A0A0A] text-white" : "bg-white text-black"
          }`}
        >
          <p className="text-3xl font-medium text-center">
            {t("chat_bubble.on_it")}
          </p>
          <p className="font-medium text-center">{t("chat_bubble.done")}</p>
        </div>
      ) : (
        <form
          className={`py-5 px-3 mx-auto transition-colors grid gap-5 ${
            lightDark ? "bg-[#0A0A0A]" : "bg-white"
          }`}
          onSubmit={sendMessage}
        >
          <div className="grid">
            <label
              htmlFor="name"
              className={`mb-1 font-medium text-sm text- ${
                lightDark ? "dark:text-white" : "text-black"
              }`}
            >
              {t("home_page.name")}
            </label>
            <input
              className={`outline-none w-full px-2 py-1 rounded-sm ${
                lightDark
                  ? "bg-slate-800 text-white [-webkit-text-fill-color:white]"
                  : "bg-slate-200 text-black [-webkit-text-fill-color:black]"
              }`}
              required
              type="name"
              name="name"
              id="name"
              autoComplete="new-password"
              value={messageVal.name}
              onChange={handleChange}
            />
          </div>
          <div className="grid">
            <label
              htmlFor="email"
              className={`mb-1 font-medium text-sm text- ${
                lightDark ? "dark:text-white" : "text-black"
              }`}
            >
              {t("home_page.email")}
            </label>
            <input
              className={`outline-none w-full px-2 py-1 rounded-sm ${
                lightDark
                  ? "bg-slate-800 text-white [-webkit-text-fill-color:white]"
                  : "bg-slate-200 text-black [-webkit-text-fill-color:black]"
              }`}
              required
              type="email"
              name="email"
              id="email"
              autoComplete="new-password"
              value={messageVal.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid">
            <label
              htmlFor="engagementRate"
              className={`mb-1 font-medium text-sm text- ${
                lightDark ? "dark:text-white" : "text-black"
              }`}
            >
              {t("chat_bubble.subject")}
            </label>
            <input
              className={`outline-none w-full px-2 py-1 rounded-sm ${
                lightDark
                  ? "bg-slate-800 text-white [-webkit-text-fill-color:white]"
                  : "bg-slate-200 text-black [-webkit-text-fill-color:black]"
              }`}
              required
              type="text"
              name="subject"
              id="subject"
              value={messageVal.subject}
              onChange={handleChange}
            />
          </div>
          <div className="grid">
            <label
              htmlFor="message"
              className={`mb-1 font-medium text-sm text- ${
                lightDark ? "dark:text-white" : "text-black"
              }`}
            >
              {t("home_page.message")}
            </label>
            <textarea
              className={`outline-none w-full px-2 py-1 rounded-sm resize-none ${
                lightDark
                  ? "bg-slate-800 text-white [-webkit-text-fill-color:white]"
                  : "bg-slate-200 text-black [-webkit-text-fill-color:black]"
              }`}
              required
              name="message"
              id="message"
              rows={4}
              value={messageVal.message}
              onChange={handleChange}
            />
          </div>
          <button
            className="text-white flex items-center gap-1 bg-[#2e9cd7] mx-auto px-7 py-2 rounded-sm"
            disabled={loading}
          >
            {loading
              ? `${t("home_page.send_message")}...`
              : t("home_page.send_message")}
          </button>
        </form>
      )}
    </motion.div>
  );
}
