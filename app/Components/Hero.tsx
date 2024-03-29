import React from "react";
import "./Hero.module.css";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <div className="h-[80vh] w-full flex justify-center items-center">
      <Navbar />

      <div>
        <div className="text-[2.2rem] mt-[7vh] font-sixtyfour md:text-[3rem] lg:text-[4rem] text-wrap font-semibold text-center text-[#FF7B15]">
          Lightweight DAS for{" "}
          <span className="solana_color font-extrabold ">Solana</span>
        </div>
        {/* <div className="flex justify-center text-white text-[0.8rem] md:text-[1.2rem] items-center gap-4 mt-5 ">
          <p>Supported By</p>
          <div className="border-2 border-solid border-white rounded-md">
            <div className="border-1 border-red-500 border-solid">
              <img
                src={"/Assets/superteam.png"}
                className="border-1 border-solid border-white"
                width={64}
                height={64}
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
