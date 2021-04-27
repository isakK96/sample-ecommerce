import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 100
    );
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      <nav
        className={
          "bg-white w-full flex flex-col lg:flex-row flex-wrap items-center content-center justify-around z-10 fixed transform ease-linear duration-200 " +
          (visible ? "translate-y-0" : "-translate-y-56 lg:-translate-y-44")
        }
      >
        <Link className="text-black text-6xl" to="/">
          Burenta
        </Link>
        <div className="lg:flex mb-3 lg:m-0 items-center">
          <ul className="flex flex-row list-none ">
            <li className="nav-item">
              <Link
                to="/about"
                className="px-3 py-1 flex items-center text-lg uppercase leading-snug border-black border-r-2 border-opacity-40 hover:bg-opacity-5 hover:bg-black"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="/#products"
                className="px-3 py-1 flex items-center text-lg uppercase leading-snug border-black border-r-2 border-opacity-40 hover:bg-opacity-5 hover:bg-black"
              >
                Products
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="px-3 py-1 flex items-center text-lg uppercase leading-snug hover:bg-opacity-5 hover:bg-black"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="search relative lg:order-first">
          <input
            type="search"
            placeholder="Search . . ."
            className="border border-black rounded-full py-2 pl-8 pr-2 bg-gray-300 bg-opacity-40 focus:bg-opacity-5 focus:outline-none"
          />
          <button className="absolute top-1/4 left-2 focus:outline-none">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </nav>
    </>
  );
}
