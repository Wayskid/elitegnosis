import React, { useEffect, useState } from "react";
import Nav from "./layout/Nav";
import Home from "./pages/Home";

export default function App() {
  //Language selection
  const [french, setFrench] = useState(localStorage.getItem("French") || false);

  //Theme selection
  const [lightDark, setLightDark] = useState(false);

  useEffect(() => {
    localStorage.setItem("French", french);
    localStorage.setItem("Theme", lightDark);
  }, [french]);

  console.log(lightDark);
  return (
    <div className="h-full">
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
