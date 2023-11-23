import React from "react";
import Nav from "./layout/Nav";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="h-full">
      <Nav />
      <Home/>
    </div>
  );
}
