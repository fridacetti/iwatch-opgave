"use client";
import { useState } from "react";
import Image from "next/image";

const Watches = ({ selectedProductColor, handleProductColorClick }) => {
  return (
    <div className="col-2 row-2">
      <Image
        src={selectedProductColor}
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <div className="flex items-end gap-5 self-end pt-7.5 pb-7.5">
        <div
          className="bg-iwatch-navy flex h-[70px] w-[150px] items-baseline-last justify-center rounded-lg"
          onClick={() => handleProductColorClick("/navy.png")}
          style={{ cursor: "pointer" }}
        >
          <Image
            className="h-[100px] w-[100px] object-contain"
            src="/navy.png"
            alt="watch"
            width={100}
            height={100}
          />
        </div>
        <div
          className="bg-iwatch-mint flex h-[70px] w-[150px] items-baseline-last justify-center rounded-lg"
          onClick={() => handleProductColorClick("/mint.png")}
          style={{ cursor: "pointer" }}
        >
          <Image
            className="h-[100px] w-[100px] object-contain"
            src="/mint.png"
            alt="watch"
            width={100}
            height={100}
          />
        </div>
        <div
          className="bg-iwatch-ocean flex h-[70px] w-[150px] items-baseline-last justify-center rounded-lg"
          onClick={() => handleProductColorClick("/ocean.png")}
          style={{ cursor: "pointer" }}
        >
          <Image
            className="h-[100px] w-[100px] object-contain"
            src="/ocean.png"
            alt="watch"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Watches;
