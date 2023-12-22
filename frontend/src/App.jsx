import React, { useEffect, useState } from "react";
import Nav from "./layout/Nav";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Excel from "./pages/Excel";
import Footer from "./layout/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { useTranslation } from "react-i18next";
import ChatBubble from "./layout/ChatBubble";
import Chat from "./layout/Chat";

export default function App() {
  //Language selection
  const [french, setFrench] = useState(
    JSON.parse(localStorage.getItem("French")) ?? true
  );

  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (french) i18n.changeLanguage("fr");
    else {
      i18n.changeLanguage("en");
    }
  }, [french]);

  //Theme selection
  const [lightDark, setLightDark] = useState(
    JSON.parse(localStorage.getItem("Theme")) ?? true
  );

  useEffect(() => {
    localStorage.setItem("French", JSON.stringify(french));
    localStorage.setItem("Theme", JSON.stringify(lightDark));

    if (lightDark) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "white";
    }
  }, [french, lightDark]);

  const [fileData, setFileData] = useState([]);

  //Login
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("UserInfo")) || false
  );

  //Chat bubble
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="h-full">
      <Nav
        french={french}
        setFrench={setFrench}
        lightDark={lightDark}
        setLightDark={setLightDark}
      />
      <Routes>
        <Route
          path="/"
          element={<Home lightDark={lightDark} setFileData={setFileData} />}
        ></Route>
        <Route
          path="/contact"
          element={<Contact lightDark={lightDark} />}
        ></Route>
        <Route path="/about" element={<About lightDark={lightDark} />}></Route>
        <Route
          path="/login"
          element={<Login lightDark={lightDark} setUserInfo={setUserInfo} />}
        ></Route>
        <Route
          path="/excel"
          element={
            <Excel
              lightDark={lightDark}
              setUserInfo={setUserInfo}
              fileData={fileData}
            />
          }
        ></Route>
      </Routes>
      <div className="fixed bottom-3 right-3 justify-items-end w-[min(23rem,93%)] grid gap-2 z-40">
        <Chat showChat={showChat} lightDark={lightDark} />
        <ChatBubble showChat={showChat} setShowChat={setShowChat} />
      </div>
      <Footer lightDark={lightDark} />
    </div>
  );
}
