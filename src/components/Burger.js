import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

export default () => {
  return (
    <Menu styles={styles}>
      <div className="flex flex-col">
        <Link
          to="/products"
          className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75"
        >
          Products
        </Link>
        <Link
          to="/about"
          className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="px-3 py-2 flex items-center uppercase font-bold leading-snug hover:opacity-75"
        >
          Contact
        </Link>
      </div>
    </Menu>
  );
};
