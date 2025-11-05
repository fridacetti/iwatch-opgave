"use client";
import { useState } from "react";
import Image from "next/image";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import Colorswitch from "./components/Colorswitch";
import Button from "./components/Button";
import PageIndicator from "./components/PageIndicator";
import Watches from "./components/Watches";

export default function Home() {
  //State der gemmer valgte billede
  const [selectedProductColor, setSelectedProductColor] = useState("/navy.png");

  // Funktion der opdatere state(billede) når mna trykker på et thumbnail ur
  const handleProductColorClick = (selectedProductColor) => {
    setSelectedProductColor(selectedProductColor);
  };
  return (
    <div className="mx-20 grid grid-cols-[2.5fr_2fr] grid-rows-[auto_auto_auto_1fr_auto] gap-y-6 py-16">
      <Navigation />
      <Title />
      <Colorswitch
        selectedProductColor={selectedProductColor}
        handleProductColorClick={handleProductColorClick}
      />
      <Button />
      <PageIndicator />
      <Watches
        selectedProductColor={selectedProductColor}
        handleProductColorClick={handleProductColorClick}
      />
    </div>
  );
}
