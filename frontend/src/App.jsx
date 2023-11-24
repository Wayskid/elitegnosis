import React, { useEffect, useState } from "react";
import Nav from "./layout/Nav";
import Home from "./pages/Home";

export default function App() {
  const [french, setFrench] = useState(localStorage.getItem("French") || false);

  useEffect(() => {
    localStorage.setItem("French", french);
  }, [french]);
  return (
    <div className="h-full">
      <Nav french={french} setFrench={setFrench} />
      <Home />
    </div>
  );
}
