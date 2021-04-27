import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-sand flex">
      <div className="container px-5 py-8 flex flex-row">
        <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl pr-12">Burenta</span>
        </p>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"></p>
        <div className="px-4">
          <h2 className="title-font font-medium border-b border-black text-gray-900 tracking-widest text-sm mb-3">
            Links
          </h2>
          <nav className="list-none mb-10 leading-8">
            <li>
              <Link to="/" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
            </li>
            <li>
              <a
                href="/#products"
                className="text-gray-600 hover:text-gray-800"
              >
                Products
              </a>
            </li>
            <li>
              <Link to="/about" className="text-gray-600 hover:text-gray-800">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600 hover:text-gray-800">
                Contact
              </Link>
            </li>
          </nav>
        </div>
      </div>
    </footer>
  );
}
