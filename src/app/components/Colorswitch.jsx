"use client";
import { useState } from "react";
import { TbLineDotted } from "react-icons/tb";

const ColorSwitch = ({ selectedProductColor, handleProductColorClick }) => {
  return (
    <div className="row-2 flex flex-col items-center place-self-center">
      <div
        className={`bg-iwatch-navy h-5 w-5 cursor-pointer rounded-full border-2 border-white transition-transform duration-200 ${
          selectedProductColor === "/navy.png" ? "scale-110 border-[3px]" : ""
        }`}
        onClick={() => handleProductColorClick("/navy.png")}
      ></div>
      <TbLineDotted color="white" size={20} className="my-1 rotate-90" />
      <div
        className={`bg-iwatch-mint h-5 w-5 cursor-pointer rounded-full border-2 border-white transition-transform duration-200 ${
          selectedProductColor === "/mint.png" ? "scale-110 border-[3px]" : ""
        }`}
        onClick={() => handleProductColorClick("/mint.png")}
      >
        {" "}
      </div>
      <TbLineDotted color="white" size={20} className="my-1 rotate-90" />
      <div
        className={`bg-iwatch-ocean h-5 w-5 cursor-pointer rounded-full border-2 border-white transition-transform duration-200 ${
          selectedProductColor === "/ocean.png" ? "scale-110 border-[3px]" : ""
        }`}
        onClick={() => handleProductColorClick("/ocean.png")}
      ></div>
    </div>
  );
};

export default ColorSwitch;
