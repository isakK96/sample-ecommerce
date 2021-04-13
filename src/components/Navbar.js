import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Burger from "./Burger";

export default function Navbar() {
  return (
    <>
      <Burger />
      <nav className="border-b-2 border-gray-300 w-full z-10 flex flex-wrap items-center justify-between px-2 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="font-logo text-6xl -mt-2 leading-relaxed inline-block whitespace-no-wrap"
              to="/"
            >
              Burenta
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <FontAwesomeIcon icon={faShoppingBag} />
            </button>
          </div>
          <div className="lg:flex flex-grow items-center">
            <ul className="flex flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  to="/about"
                  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug hover:opacity-75"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug hover:opacity-75"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug hover:opacity-75"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
