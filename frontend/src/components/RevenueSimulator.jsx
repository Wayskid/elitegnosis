import React, { useState } from "react";
import Finance from "../assets/financial.png";
import { motion } from "framer-motion";
import {
  MdAlternateEmail,
  MdOutlineEuroSymbol,
  MdOutlinePeopleAlt,
} from "react-icons/md";
import axios from "axios";
import { PiPercent } from "react-icons/pi";
import { NavLink } from "react-router-dom";

export default function RevenueSimulator({ lightDark, setFileData }) {
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [simulatorVals, setSimulatorVals] = useState({
    email: "",
    noFollowers: "",
    noEngagement: "",
    coursePrice: "",
  });

  const [netRevenue, setNetRevenue] = useState();

  function handleChange(e) {
    setSimulatorVals({
      ...simulatorVals,
      [e.target.name]: e.target.value,
    });
  }

  async function handleCalculation(e) {
    e.preventDefault();
    if (Object.values(simulatorVals)) {
      setLoading(true);
      const follEng =
        (simulatorVals.noFollowers * simulatorVals.noEngagement) / 100;
      const revenue = follEng * simulatorVals.coursePrice;
      const agencyFee = 30;
      const netRevenue = (revenue * (100 - agencyFee)) / 100;

      setTimeout(() => {
        setNetRevenue(netRevenue);
        setLoading(false);
        setShowResult(true);
        setFileData((prev) => [...prev, simulatorVals]);
      }, 1000);

      //Api
      const data = await axios.post(
        "https://elitegnosis.onrender.com/api/excel",
        {
          email: simulatorVals.email,
          followers: simulatorVals.noFollowers,
          engagements: simulatorVals.noEngagement,
          coursePrice: simulatorVals.coursePrice,
          agencyFee,
          netRevenue,
        }
      );
    }
  }

  return (
    <section
      id="simulator"
      className={`mb-20 mt-36 md:mt-56 transition-colors duration-200 px-6 pt-28 pb-10 grid rounded-md w-[min(50rem,100%)] mx-auto relative ${
        lightDark ? "bg-black" : "bg-white"
      }`}
    >
      <img
        src={Finance}
        alt="Finance Icon"
        className="absolute justify-self-center w-20 -mt-12 md:w-40 md:-mt-24"
      />
      <motion.p className="text-[clamp(30px,5vw,50px)] text-center text-[#6e6fc3] font-semibold transition-colors duration-200 mb-5 md:mb-10">
        Simulateur de revenus
      </motion.p>
      {showResult ? (
        <div className="py-5 grid gap-10 lg:gap-20">
          <h1 className="text-[#6e6fc3] text-2xl text-center">
            Votre revenu estimé sera
          </h1>
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="text-[#6e6fc3] text-6xl text-center"
          >
            {Intl.NumberFormat("en-FR", {
              style: "currency",
              currency: "EUR",
            }).format(netRevenue)}
            <br />
            <span className="text-slate-500">/mois</span>
          </motion.h1>
          <NavLink
            to="/contact"
            className="text-[#6e6fc3] text-2xl text-center"
          >
            Laissez-nous vous aider à y parvenir
          </NavLink>
          <button
            className="text-white flex items-center gap-1 bg-[#6e6fc3] mx-auto px-14 py-4 text-lg"
            onClick={() => {
              setLoading(false);
              setNetRevenue(0);
              setShowResult(false);
            }}
          >
            Calculer à nouveau
          </button>
        </div>
      ) : (
        <form
          className="grid gap-10 py-5 w-[min(30rem,100%)] mx-auto"
          onSubmit={handleCalculation}
        >
          <div className="grid">
            <label
              htmlFor="email"
              className={`mb-2 font-semibold text- ${
                lightDark ? "dark:text-white" : "text-black"
              }`}
            >
              Email
            </label>
            <div
              className={`border-[1px] p-3 flex focus-within:border-[#6e6fc3] ${
                lightDark
                  ? "bg-[rgb(34,37,43)] text-white"
                  : "text-black bg-[rgb(247,247,251)]"
              }`}
            >
              <MdAlternateEmail
                className={`self-center text-xl ${
                  lightDark ? "] text-white" : "text-black"
                }`}
              />
              <input
                className="bg-transparent outline-none ml-3 text-xl w-full px-1 pl focus:placeholder:opacity-0 placeholder:opacity-60"
                placeholder="ex: johnDoe@gmail.com"
                required
                type="email"
                name="email"
                id="email"
                value={simulatorVals.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid">
            <label
              htmlFor="noFollowers"
              className={`mb-2 font-semibold text- ${
                lightDark ? "dark:text-white" : "text-black"
              }`}
            >
              Number of Followers
            </label>
            <div
              className={`border-[1px] p-3 flex focus-within:border-[#6e6fc3] focus:placeholder:opacity-0 placeholder:opacity-60 ${
                lightDark
                  ? "bg-[rgb(34,37,43)] text-white"
                  : "text-black bg-[rgb(247,247,251)]"
              }`}
            >
              <MdOutlinePeopleAlt
                className={`self-center text-xl ${
                  lightDark ? "text-white" : "text-black"
                }`}
              />
              <input
                className="bg-transparent outline-none ml-3 text-xl w-full px-1 pl focus:placeholder:opacity-0 placeholder:opacity-60"
                placeholder="ex: 2000"
                required
                type="number"
                name="noFollowers"
                id="noFollowers"
                value={simulatorVals.noFollowers}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid">
            <label
              htmlFor="noEngagement"
              className={`mb-2 font-semibold text- ${
                lightDark ? "dark:text-white" : "text-black"
              }`}
            >
              Number of Engagements (%)
            </label>
            <div
              className={`border-[1px] p-3 flex focus-within:border-[#6e6fc3] focus:placeholder:opacity-0 placeholder:opacity-60 ${
                lightDark
                  ? "bg-[rgb(34,37,43)] text-white"
                  : "text-black bg-[rgb(247,247,251)]"
              }`}
            >
              <PiPercent
                className={`self-center text-xl ${
                  lightDark ? " text-white" : "text-black"
                }`}
              />
              <input
                className="bg-transparent outline-none ml-3 text-xl w-full px-1 pl focus:placeholder:opacity-0 placeholder:opacity-60"
                placeholder="ex: 2"
                required
                type="number"
                name="noEngagement"
                id="noEngagement"
                max="100"
                min="0"
                value={simulatorVals.noEngagement}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid">
            <label
              htmlFor="coursePrice"
              className={`mb-2 flex font-semibold text- ${
                lightDark ? "dark:text-white" : "text-black"
              }`}
            >
              Course Price ( &euro; )
            </label>
            <div
              className={`border-[1px] p-3 flex focus-within:border-[#6e6fc3] focus:placeholder:opacity-0 placeholder:opacity-60 ${
                lightDark
                  ? "bg-[rgb(34,37,43)] text-white"
                  : "text-black bg-[rgb(247,247,251)]"
              }`}
            >
              <MdOutlineEuroSymbol
                className={`self-center text-xl ${
                  lightDark ? " text-white" : "text-black"
                }`}
              />
              <input
                className="bg-transparent outline-none ml-3 text-xl w-full px-1 pl focus:placeholder:opacity-0 placeholder:opacity-60"
                placeholder="ex: 50"
                required
                type="number"
                name="coursePrice"
                id="coursePrice"
                value={simulatorVals.coursePrice}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            className="mt-2 text-white flex items-center gap-1 bg-[#6e6fc3] mx-auto px-14 py-4 text-lg"
            disabled={loading}
          >
            {loading ? "Estimation..." : "Estimation"}
          </button>
        </form>
      )}
    </section>
  );
}
