import React from "react";
import ExcelExport from "../components/ExcelExport";

export default function Excel({ lightDark, setUserInfo }) {
  return (
    <div className="h-full grid items-center">
      <div className="grid">
          <p
            className={`text-center text-4xl font-semibold transition-colors duration-200 mb-10 ${
              lightDark ? "text-white" : "text-black"
            }`}
          >
            Download Excel Data
          </p>
          <ExcelExport />
      </div>
    </div>
  );
}
