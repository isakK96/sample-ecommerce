import daycream from "../assets/products/daycream.png";
import mineralconcealer from "../assets/products/mineralconcealer.png";
import mineralpowder from "../assets/products/mineralpowder.png";
import mineralprimer from "../assets/products/mineralprimer.png";
import nightcream from "../assets/products/nightcream.png";
import nailpolish from "../assets/products/nailpolish.png";
import ProductCard from "./ProductCard";
import { DESCRIPTIONS, INGREDIENTS } from "./ProductInformation";

export default function ProductList() {
  return (
    <>
      <h3
        id="products"
        className="text-center text-black text-opacity-70 uppercase text-4xl"
      >
        All products
      </h3>
      <div className="w-11/12 mx-auto justify-evenly flex flex-row flex-wrap">
        <ProductCard
          product="Day Cream"
          price="$29.99"
          imgUrl={daycream}
          description={DESCRIPTIONS.daycream}
          ingredients={INGREDIENTS.daycream}
        />
        <ProductCard
          product="Night Cream"
          price="$29.99"
          imgUrl={nightcream}
          description={DESCRIPTIONS.nightcream}
          ingredients={INGREDIENTS.nightcream}
        />
        <ProductCard
          product="Mineral Powder"
          price="$29.99"
          imgUrl={mineralpowder}
          description={DESCRIPTIONS.mineralpowder}
          ingredients={INGREDIENTS.mineralpowder}
        />
        <ProductCard
          product="Airbrush Mineral Primer"
          price="$29.99"
          imgUrl={mineralprimer}
          description={DESCRIPTIONS.mineralprimer}
          ingredients={INGREDIENTS.mineralprimer}
        />
        <ProductCard
          product="Liquid Mineral Concealer"
          price="$29.99"
          imgUrl={mineralconcealer}
          description={DESCRIPTIONS.mineralconcealer}
          ingredients={INGREDIENTS.mineralconcealer}
        />
        <ProductCard
          product="Nail Polish"
          price="$29.99"
          imgUrl={nailpolish}
          description={DESCRIPTIONS.nailpolish}
          ingredients={INGREDIENTS.nailpolish.red}
        />
      </div>
    </>
  );
}
