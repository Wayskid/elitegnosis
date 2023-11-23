import React from "react";
import { PiNavigationArrowFill } from "react-icons/pi";

export default function Home() {
  return (
    <div className="h-full">
      <section className="p-8 grid items-center h-full pt-[clamp(5rem,15vw,35rem)]">
        <p
          className="text-[clamp(80px,13vw,250px)]
         font-bold tracking-tighter text-gray-700 showcaseHeader absolute z-20 grid -translate-y-[79%] md:translate-x-20"
        >
          ELITEGNOSIS
        </p>
        <div className=" absolute z-30">
          <p className="text-[clamp(80px,13vw,250px)] font-bold tracking-tighter text-white showcaseHeader">
            AGENCY
          </p>
          <button className="bg-white border gap-10 py-4 px-4 text-sm flex items-center md:translate-x-24">
            About Us{" "}
            <PiNavigationArrowFill className="text-base rotate-[133deg]" />
          </button>
        </div>
        <div className="absolute z-20 right-8 w-4/5 translate-y-[10rem] md:translate-y-[9.2rem] lg:translate-y-[6.5rem] xl:translate-y-[5.8rem]">
          <div className="w-[min(80rem,100%)] h-[450px] bg-gray-600 "></div>
        </div>
      </section>
    </div>
  );
}
