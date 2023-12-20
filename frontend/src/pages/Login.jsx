import React, { useState } from "react";
import { MdAlternateEmail, MdLock, MdOutlinePeopleAlt } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({ lightDark, setUserInfo }) {
  const [loading, setLoading] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  }

  const navigate = useNavigate();
  async function handleLogin(e) {
    e.preventDefault();
    if (Object.values(loginDetails)) {
      setLoading(true);

      //Api
      await axios
        .post("https://elitegnosis.onrender.com/api/user/login", {
          email: loginDetails.email,
          password: loginDetails.password,
        })
        .then((result) => {
          localStorage.setItem("UserInfo", JSON.stringify(result.data));
          setUserInfo(result.data);
          setLoading(false);
          navigate("/excel");
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <section
      className={`h-screen transition-colors duration-200 px-6 grid items-center rounded-md w-[min(50rem,100%)] mx-auto ${
        lightDark ? "bg-black" : "bg-white"
      }`}
    >
      <p className="text-[clamp(30px,5vw,50px)] text-center text-[#2e9cd7] font-semibold transition-colors duration-200 self-end">
        Login
      </p>
      <form
        action=""
        className="grid gap-10 py-5 w-[min(30rem,100%)] mx-auto"
        onSubmit={handleLogin}
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
            className={`border-[1px] p-3 flex focus-within:border-[#2e9cd7] ${
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
              className="bg-transparent outline-none ml-3 text-xl w-full px-1 pl focus:placeholder:opacity-0"
              placeholder="Email"
              required
              type="email"
              name="email"
              id="email"
              value={loginDetails.email}
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
            Password
          </label>
          <div
            className={`border-[1px] p-3 flex focus-within:border-[#2e9cd7] focus:placeholder:opacity-0 ${
              lightDark
                ? "bg-[rgb(34,37,43)] text-white"
                : "text-black bg-[rgb(247,247,251)]"
            }`}
          >
            <MdLock
              className={`self-center text-xl ${
                lightDark ? "text-white" : "text-black"
              }`}
            />
            <input
              className="bg-transparent outline-none ml-3 text-xl w-full px-1 pl focus:placeholder:opacity-0"
              placeholder="Password"
              required
              type="password"
              name="password"
              id="password"
              value={loginDetails.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          className="mt-2 text-white flex items-center gap-1 bg-[#2e9cd7] mx-auto px-14 py-4 text-lg"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </section>
  );
}
