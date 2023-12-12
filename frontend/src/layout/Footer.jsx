import React, { useState } from "react";
import footerImg from "../assets/footerImg.jpg";
import logo from "../assets/logo.png";
import { BsPerson } from "react-icons/bs";
import { MdAlternateEmail, MdMessage } from "react-icons/md";

export default function Footer({ lightDark }) {
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [footerContact, setFooterContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFooterContact({
      ...simulatorVals,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div
      className={`transition-colors duration-200 grid px-6 pb-10 relative ${
        lightDark ? "black" : "white"
      }`}
    >
      <div className="grid w-[min(80rem,100%)] mx-auto">
        <div className="grid lg:grid-cols-2 bg-[#6e6fc3] rounded-lg overflow-hidden absolute -top-60 left-6 right-6">
          <img
            src={footerImg}
            alt="contact"
            className="w-full h-80 object-cover lg:h-full self-center justify-self-center"
          />
          <div className="px-5 py-10 w-[min(30rem,100%)] mx-auto">
            <div className="flex items-center gap-5 mb-10">
              {" "}
              <div
                className={`w-5 h-5 rounded-full ${
                  lightDark ? "bg-black" : "bg-white"
                }`}
              ></div>
              <p
                className={`text-4xl ${
                  lightDark ? "text-black" : "text-white"
                }`}
              >
                Get in touch
              </p>
            </div>
            <form
              className="grid gap-5"
              // onSubmit={handleCalculation}
            >
              <div
                className={`rounded-md border-[1px] p-2 flex focus-within:border-[#6e6fc3] focus:placeholder:opacity-0 placeholder:opacity-60 ${
                  lightDark
                    ? "bg-[rgb(34,37,43)] text-white border-white"
                    : "text-black bg-[rgb(247,247,251)] border-black"
                }`}
              >
                <BsPerson
                  className={`self-center text-xl ${
                    lightDark ? "text-white" : "text-black"
                  }`}
                />
                <input
                  className="bg-transparent outline-none ml-3 text-xl w-[min(30rem,100%)] px-1 focus:placeholder:opacity-0 placeholder:opacity-60"
                  placeholder="Name"
                  required
                  type="text"
                  name="name"
                  id="name"
                  value={footerContact.name}
                  onChange={handleChange}
                />
              </div>
              <div
                className={`rounded-md border-[1px] p-2 flex focus-within:border-[#6e6fc3] ${
                  lightDark
                    ? "bg-[rgb(34,37,43)] text-white border-white"
                    : "text-black bg-[rgb(247,247,251)] border-black"
                }`}
              >
                <MdAlternateEmail
                  className={`self-center text-xl ${
                    lightDark ? "] text-white" : "text-black"
                  }`}
                />
                <input
                  className="bg-transparent outline-none ml-3 text-xl w-full px-1 focus:placeholder:opacity-0 placeholder:opacity-60"
                  placeholder="Email"
                  required
                  type="email"
                  name="email"
                  id="email"
                  value={footerContact.email}
                  onChange={handleChange}
                />
              </div>
              <div
                className={`rounded-md border-[1px] p-2 flex focus-within:border-[#6e6fc3] focus:placeholder:opacity-0 placeholder:opacity-60 ${
                  lightDark
                    ? "bg-[rgb(34,37,43)] text-white border-white"
                    : "text-black bg-[rgb(247,247,251)] border-black"
                }`}
              >
                <MdMessage
                  className={`self-top mt-[4px] text-xl ${
                    lightDark ? " text-white" : "text-black"
                  }`}
                />
                <textarea
                  className="bg-transparent outline-none ml-3 text-xl w-full px-1 focus:placeholder:opacity-0 placeholder:opacity-60"
                  placeholder="Message"
                  required
                  name="message"
                  id="message"
                  rows={5}
                  value={footerContact.message}
                  onChange={handleChange}
                />
              </div>
              <button
                className={`items-center bg-[#6e6fc3] px-14 py-3 text- border rounded-md ${
                  lightDark
                    ? "bg-[rgb(34,37,43)]  border-white text-white"
                    : "text-black bg-[rgb(247,247,251)] border-black"
                }`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 mt-[45rem] lg:mt-[25rem] gap-8 md:justify-between w-full">
          <div className="">
            <p className={!lightDark ? "text-black" : "text-white"}>Phone:</p>
            <p className={!lightDark ? "text-black" : "text-white"}>
              454656557567
            </p>
          </div>
          <div className="md:justify-self-end">
            <p className={!lightDark ? "text-black" : "text-white"}>Address:</p>
            <p className={!lightDark ? "text-black" : "text-white"}>
              Patricia C. Amedee 41 Waldeck Grapevine
              <br /> Nashville, TX 76
            </p>
          </div>
          <div className="md:justify-self-end">
            <p className={!lightDark ? "text-black" : "text-white"}>Email:</p>
            <p
              className={`break-words ${
                !lightDark ? "text-black" : "text-white"
              }`}
            >
              info@yourdomain.com
            </p>
          </div>
          <div className="md:justify-self-end">
            <p className={!lightDark ? "text-black" : "text-white"}>Social:</p>
            <p className={!lightDark ? "text-black" : "text-white"}>Phone</p>
          </div>
        </div>

        <div className="grid [@media(min-width:540px)]:flex justify-between text-white mt-20 items-center">
          <img src={logo} className="w-32" />
          <p className={!lightDark ? "text-black" : "text-white"}>&copy; 2023 ELITEGNOSIS AGENCY</p>
        </div>
      </div>
    </div>
  );
}
