import React from "react";
import ProductList from "./ProductList";
import { MainSlider } from "./ProductSlider";

export default function Home() {
  return (
    <>
      <MainSlider />
      <div className="bg-sand bg-opacity-40 pt-4">
        <ProductList />
      </div>
    </>
  );
}
