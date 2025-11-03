"use client";
import { useState } from "react";
import { TbLineDotted } from "react-icons/tb";
import Navy from "../../../public/navy.png";
import Ocean from "../../../public/ocean.png";
import Mint from "../../../public/mint.png";

const ColorSwitch = ({ selectedProductColor, handleProductColorClick }) => {
  return (
    <div className="colors">
      <div className={`color nb ${selectedProductColor === Navy ? "active" : ""}`} onClick={() => handleProductColorClick(Navy)}></div>
      <TbLineDotted color="white" size={20} style={{ transform: "rotate(90deg)" }} />
      <div className={`color mb ${selectedProductColor === Mint ? "active" : ""}`} onClick={() => handleProductColorClick(Mint)}></div>
      <TbLineDotted color="white" size={20} style={{ transform: "rotate(90deg)" }} />
      <div className={`color ob ${selectedProductColor === Ocean ? "active" : ""}`} onClick={() => handleProductColorClick(Ocean)}></div>
    </div>
  );
};

export default ColorSwitch;
