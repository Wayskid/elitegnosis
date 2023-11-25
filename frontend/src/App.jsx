import React, { useEffect, useState } from "react";
import Nav from "./layout/Nav";
import Home from "./pages/Home";

export default function App() {
  //Language selection
  const [french, setFrench] = useState(
    JSON.parse(localStorage.getItem("French")) || false
  );

  //Theme selection
  const [lightDark, setLightDark] = useState(
    JSON.parse(localStorage.getItem("Theme")) || false
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

  return (
    <div className="h-full text-black">
      <Nav
        french={french}
        setFrench={setFrench}
        lightDark={lightDark}
        setLightDark={setLightDark}
      />
      <Home lightDark={lightDark} setLightDark={setLightDark} />
    </div>
  );
}
