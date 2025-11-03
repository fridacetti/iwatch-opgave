"use client";
import { useState } from "react";
import { TbLineDotted } from "react-icons/tb";

const ColorSwitch = ({ selectedProductColor, handleProductColorClick }) => {
  return (
    <div className="colors">
      <div className={`color nb ${selectedProductColor === "/navy.png" ? "active" : ""}`} onClick={() => handleProductColorClick("/navy.png")}></div>
      <TbLineDotted color="white" size={20} style={{ transform: "rotate(90deg)" }} />
      <div className={`color mb ${selectedProductColor === "/mint.png" ? "active" : ""}`} onClick={() => handleProductColorClick("/mint.png")}></div>
      <TbLineDotted color="white" size={20} style={{ transform: "rotate(90deg)" }} />
      <div className={`color ob ${selectedProductColor === "/ocean.png" ? "active" : ""}`} onClick={() => handleProductColorClick("/ocean.png")}></div>
    </div>
  );
};

export default ColorSwitch;
