"use client";
import { useState } from "react";
import Image from "next/image";
import Navy from "../../public/navy.png";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import Colorswitch from "./components/Colorswitch";
import Button from "./components/Button";
import PageIndicator from "./components/PageIndicator";
import Watches from "./components/Watches";

export default function Home() {
  //State der gemmer valgte billede
  const [selectedProductColor, setSelectedProductColor] = useState(Navy);

  // Funktion der opdatere state(billede) når mna trykker på et thumbnail ur
  const handleProductColorClick = (selectedProductColor) => {
    setSelectedProductColor(selectedProductColor);
  };
  return (
    <div className="grid-container">
      <Navigation />
      <Title />
      <Colorswitch selectedProductColor={selectedProductColor} handleProductColorClick={handleProductColorClick} />
      <Button />
      <PageIndicator />
      <Watches selectedProductColor={selectedProductColor} handleProductColorClick={handleProductColorClick} />
    </div>
  );
}
