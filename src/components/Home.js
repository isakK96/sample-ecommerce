import React from "react";
import ProductSlider from "./ProductSlider";

export default function Home() {
  return (
    <>
      <div className="lg:w-10/12 mx-auto h-screen bg-heroimage bg-cover bg-center mb-12">
        <div className="h-screen bg-cover bg-black bg-opacity-30">
          <h1 className="text-gray-200 font-heading font-bold text-6xl pt-20 pl-2 lg:pl-40 lg:pt-40 lg:text-7xl">
            Header
            <br />
            text
          </h1>
          <p className="text-white pl-2 pt-2 mr-3 font-semibold lg:pl-40 lg:w-1/3 lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nisi
            aut vitae, illo at, sunt tempora accusantium eveniet fugit
            repellendus aperiam odio, quis recusandae laboriosam hic asperiores
            neque voluptas delectus?
          </p>
          <button
            className="text-white uppercase border bg-primary-darkblue bg-opacity-30 rounded-full border-opacity-40 float-right lg:float-none
                          p-4 mt-8 mr-8 lg:ml-40 lg:mt-20 lg:text-2xl lg:p-6
                          transition ease-linear duration-150 hover:bg-primary-darkblue hover:bg-opacity-75 focus:outline-none"
          >
            Read More
          </button>
        </div>
      </div>
      <div className="">
        <h2 className="uppercase text-3xl text-center">Featured products</h2>
        <ProductSlider />
      </div>
    </>
  );
}
