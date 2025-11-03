"use client";
import { useState } from "react";
import Image from "next/image";

const Watches = ({ selectedProductColor, handleProductColorClick }) => {
  return (
    <div className="galleri">
      <Image className="navyur" src={selectedProductColor} alt="Picture of the author" width={500} height={500} />
      <div className="watches">
        <div className="boks nb" onClick={() => handleProductColorClick("/navy.png")} style={{ cursor: "pointer" }}>
          <Image className="watch" src="/navy.png" alt="watch" width={100} height={100} />
        </div>
        <div className="boks mb" onClick={() => handleProductColorClick("/mint.png")} style={{ cursor: "pointer" }}>
          <Image className="watch" src="/mint.png" alt="watch" width={100} height={100} />
        </div>
        <div className="boks ob" onClick={() => handleProductColorClick("/ocean.png")} style={{ cursor: "pointer" }}>
          <Image className="watch" src="/ocean.png" alt="watch" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Watches;
