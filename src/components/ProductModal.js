import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

function ProductDetails(props) {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 mx-auto">
        <div className="mx-auto">
          <div className="w-full flex flex-col lg:flex-row lg:pl-4 lg:py-6 mt-6 lg:mt-0">
            <div className="w-full flex flex-col lg:pr-8">
              <InnerImageZoom
                src={props.imgUrl}
                zoomScale={10}
                zoomType="hover"
                className="lg:w-72"
              />
              <h1 className="text-center text-gray-900 text-2xl title-font font-medium mb-1">
                {props.product}
              </h1>
              <div className="flex flex-col items-center">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {props.price}
                </span>
                <button
                  className="flex text-white uppercase text-lg border py-2 px-8 my-6 focus:outline-none rounded bg-black hover:bg-opacity-70
                              transition ease-linear duration-75"
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              {props.description}
              <p className="font-semibold mt-2">Ingredients</p>
              {props.ingredients}
            </div>
            <div className="flex">
              <div className="flex flex-col w-1/2">
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductModal(props) {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <button
        className="text-white uppercase text-lg border py-2 px-8 focus:outline-none rounded bg-black hover:bg-opacity-70
        transition ease-linear duration-75"
        onClick={onOpenModal}
      >
        View
        <span className="ml-2">
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <ProductDetails
          product={props.product}
          price={props.price}
          imgUrl={props.imgUrl}
          description={props.description}
          ingredients={props.ingredients}
        />
      </Modal>
    </>
  );
}
