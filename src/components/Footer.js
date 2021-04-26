import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-sand flex">
      <div className="container px-5 py-8 flex flex-row">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl pr-12">Burenta</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"></p>
        <div class="px-4">
          <h2 class="title-font font-medium border-b border-black text-gray-900 tracking-widest text-sm mb-3">
            Links
          </h2>
          <nav class="list-none mb-10 leading-8">
            <li>
              <Link to="/" class="text-gray-600 hover:text-gray-800">
                Home
              </Link>
            </li>
            <li>
              <a href="/#products" class="text-gray-600 hover:text-gray-800">
                Products
              </a>
            </li>
            <li>
              <Link to="/about" class="text-gray-600 hover:text-gray-800">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" class="text-gray-600 hover:text-gray-800">
                Contact
              </Link>
            </li>
          </nav>
        </div>
      </div>
    </footer>
  );
}
