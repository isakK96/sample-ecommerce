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
        <Link className="font-logo text-black text-9xl mt-4" to="/">
          Burenta
        </Link>
        <div className="lg:flex -mt-6 mb-3 lg:m-0 items-center">
          <ul className="flex flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link
                to="/about"
                className="px-3 py-1 flex items-center text-lg uppercase leading-snug border-gray-400 border-r-2 border-opacity-40 hover:opacity-75"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="/#products"
                className="px-3 py-1 flex items-center text-lg uppercase leading-snug border-gray-400 border-r-2 border-opacity-40 hover:opacity-75"
              >
                Products
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="px-3 py-1 flex items-center text-lg uppercase leading-snug hover:opacity-75"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="search relative lg:order-first mb-3 lg:mt-14">
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
