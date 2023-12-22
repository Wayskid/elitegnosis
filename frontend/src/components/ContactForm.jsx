import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import footerImg from "../assets/footerImg.jpg";
import { MdAlternateEmail, MdMessage } from "react-icons/md";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

export default function ContactForm({ lightDark }) {
  const { t, i18n } = useTranslation();
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [footerContact, setFooterContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  function sendEmail(e) {
    e.preventDefault();
    if (Object.values(footerContact).every((val) => val.length > 0)) {
      setLoading(true);
      emailjs
        .send(
          "service_82cheld",
          "template_025ph7t",
          {
            ...footerContact,
          },
          "cozjcJvRVN6Q6PN29"
        )
        .then(
          (result) => {
            setEmailSentRes(result);
            setLoading(false);
            setFooterContact({
              name: "",
              email: "",
              message: "",
            });
            setTimeout(() => {
              setEmailSentRes();
            }, 4000);
            console.log(result);
          },
          (error) => {
            console.log(error);
            setLoading(false);
          }
        );
    }
  }

  function handleChange(e) {
    setFooterContact({
      ...footerContact,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="grid lg:grid-cols-2 bg-[#2e9cd7] rounded-lg overflow-hidden absolute -bottom-[30rem] md:-bottom-[25rem] lg:-bottom-[18rem] left-6 right-6 md:left-8 md:right-8">
      <img
        src={footerImg}
        alt="contact"
        className="w-full h-80 object-cover lg:h-full self-center justify-self-center"
      />
      <div className="px-5 py-10 w-[min(30rem,100%)] mx-auto">
        <div className="flex items-center gap-5 mb-10">
          {" "}
          <div className="w-5 h-5 rounded-full bg-white"></div>
          <p className="text-4xl text-white">{t("home_page.get_in_touch")}</p>
        </div>
        <form className="grid gap-5" onSubmit={sendEmail}>
          <div className="rounded-md border-[1px] p-2 flex focus-within:border-[#2e9cd7] focus:placeholder:opacity-0 placeholder:opacity-60 text-black bg-[rgb(247,247,251)] border-black">
            <BsPerson className="self-top mt-[4px] text-xl text-black" />
            <input
              className="bg-transparent outline-none ml-3 text-xl w-[min(30rem,100%)] px-1 focus:placeholder:opacity-0 placeholder:opacity-60"
              placeholder={t("home_page.name")}
              required
              type="text"
              name="name"
              id="name"
              value={footerContact.name}
              onChange={handleChange}
            />
          </div>
          <div className="rounded-md border-[1px] p-2 flex focus-within:border-[#2e9cd7] focus:placeholder:opacity-0 placeholder:opacity-60 text-black bg-[rgb(247,247,251)] border-black">
            <MdAlternateEmail className="self-top mt-[4px] text-xl text-black" />
            <input
              className="bg-transparent outline-none ml-3 text-xl w-full px-1 focus:placeholder:opacity-0 placeholder:opacity-60"
              placeholder={t("home_page.email")}
              required
              type="email"
              name="email"
              id="email"
              value={footerContact.email}
              onChange={handleChange}
            />
          </div>
          <div className="rounded-md border-[1px] p-2 flex focus-within:border-[#2e9cd7] focus:placeholder:opacity-0 placeholder:opacity-60 text-black bg-[rgb(247,247,251)] border-black">
            <MdMessage className="self-top mt-[4px] text-xl text-black" />
            <textarea
              className="bg-transparent outline-none ml-3 text-xl w-full px-1 focus:placeholder:opacity-0 placeholder:opacity-60"
              placeholder={t("home_page.message")}
              required
              name="message"
              id="message"
              rows={5}
              value={footerContact.message}
              onChange={handleChange}
            />
          </div>
          <button
            className="items-center px-14 py-3 text- border rounded-md text-black bg-[rgb(247,247,251)] border-black"
            disabled={loading}
          >
            {loading
              ? `${t("home_page.send_message")}...`
              : t("home_page.send_message")}
          </button>
        </form>
      </div>
    </div>
  );
}
