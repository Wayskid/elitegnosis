import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Chat({ lightDark }) {
  const { t, i18n } = useTranslation();
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageVal, setMessageVal] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setSimulatorVals({
      ...simulatorVals,
      [e.target.name]: e.target.value,
    });
  }

  function sendMessage() {}
  return (
    <div className="absolute bottom-[4.2rem] z-50 h-80 w-full bg-white grid">
      <div className="w-[min(20rem,100%)] bg-black justify-self-end">
        <div className="bg-[#2e9cd7]"></div>
        <form className="grid gap-10 py-5 mx-auto" onSubmit={sendMessage}>
          <div className="grid">
            <label
              htmlFor="email"
              className={`mb-2 font-semibold text- ${
                lightDark ? "dark:text-white" : "text-black"
              }`}
            >
              {t("home_page.email")}
            </label>
            <input
              className="bg-transparent outline-none ml-3 text-xl w-full px-1 pl focus:placeholder:opacity-0 placeholder:opacity-60"
              placeholder="ex: johnDoe@gmail.com"
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
              htmlFor="noFollowers"
              className={`mb-2 font-semibold text- ${
                lightDark ? "dark:text-white" : "text-black"
              }`}
            >
              {t("home_page.followers")}
            </label>

            <input
              className="bg-transparent outline-none ml-3 text-xl w-full px-1 pl focus:placeholder:opacity-0 placeholder:opacity-60"
              placeholder="ex: 5000"
              required
              type="number"
              name="noFollowers"
              id="noFollowers"
              value={messageVal.noFollowers}
              onChange={handleChange}
            />
          </div>
          <div className="grid">
            <label
              htmlFor="engagementRate"
              className={`mb-2 font-semibold text- ${
                lightDark ? "dark:text-white" : "text-black"
              }`}
            >
              {t("home_page.engagements")} (%)
            </label>
            <input
              className="bg-transparent outline-none ml-3 text-xl w-full px-1 pl focus:placeholder:opacity-0 placeholder:opacity-60"
              placeholder="ex: 2"
              required
              type="number"
              name="engagementRate"
              id="engagementRate"
              max="100"
              min="0"
              value={messageVal.engagementRate}
              onChange={handleChange}
            />
          </div>
          <div className="grid">
            <label
              htmlFor="coursePrice"
              className={`mb-2 flex font-semibold text- ${
                lightDark ? "dark:text-white" : "text-black"
              }`}
            >
              {t("home_page.price")} ( &euro; )
            </label>
            <input
              className="bg-transparent outline-none ml-3 text-xl w-full px-1 pl focus:placeholder:opacity-0 placeholder:opacity-60"
              placeholder="ex: 50"
              required
              type="number"
              name="coursePrice"
              id="coursePrice"
              value={messageVal.coursePrice}
              onChange={handleChange}
            />
          </div>
          <button
            className="mt-2 text-white flex items-center gap-1 bg-[#2e9cd7] mx-auto px-14 py-4 text-lg"
            disabled={loading}
          >
            {loading ? "Estimating..." : t("home_page.revenue_btn")}
          </button>
        </form>
      </div>
    </div>
  );
}
