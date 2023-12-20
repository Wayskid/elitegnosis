import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import footerImg from "../assets/footerImg.jpg";
import { MdAlternateEmail, MdMessage } from "react-icons/md";

export default function ContactForm({ lightDark }) {
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
          <p className="text-4xl text-white">Get in touch</p>
        </div>
        <form
          className="grid gap-5"
          // onSubmit={handleCalculation}
        >
          <div className="rounded-md border-[1px] p-2 flex focus-within:border-[#2e9cd7] focus:placeholder:opacity-0 placeholder:opacity-60 text-black bg-[rgb(247,247,251)] border-black">
            <BsPerson className="self-top mt-[4px] text-xl text-black" />
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
          <div className="rounded-md border-[1px] p-2 flex focus-within:border-[#2e9cd7] focus:placeholder:opacity-0 placeholder:opacity-60 text-black bg-[rgb(247,247,251)] border-black">
            <MdAlternateEmail className="self-top mt-[4px] text-xl text-black" />
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
          <div className="rounded-md border-[1px] p-2 flex focus-within:border-[#2e9cd7] focus:placeholder:opacity-0 placeholder:opacity-60 text-black bg-[rgb(247,247,251)] border-black">
            <MdMessage className="self-top mt-[4px] text-xl text-black" />
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
            className="items-center px-14 py-3 text- border rounded-md text-black bg-[rgb(247,247,251)] border-black"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
