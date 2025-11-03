"use client";
import { useState } from "react";
import Image from "next/image";
import Navy from "../../../public/navy.png";
import Ocean from "../../../public/ocean.png";
import Mint from "../../../public/mint.png";

const Watches = ({ selectedProductColor, handleProductColorClick }) => {
  return (
    <div className="galleri">
      <Image className="navyur" src={selectedProductColor} alt="Picture of the author" width={500} height={500} />
      <div className="watches">
        <div className="boks nb" onClick={() => handleProductColorClick(Navy)} style={{ cursor: "pointer" }}>
          <Image className="watch" src={Navy} alt="watch" width={100} height={100} />
        </div>
        <div className="boks mb" onClick={() => handleProductColorClick(Mint)} style={{ cursor: "pointer" }}>
          <Image className="watch" src={Mint} alt="watch" width={100} height={100} />
        </div>
        <div className="boks ob" onClick={() => handleProductColorClick(Ocean)} style={{ cursor: "pointer" }}>
          <Image className="watch" src={Ocean} alt="watch" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Watches;
