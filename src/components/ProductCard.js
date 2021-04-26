import ProductModal from "./ProductModal";

export default function ProductCard(props) {
  return (
    <div className="border rounded-md mb-12 mx-2 pb-2 bg-white">
      <div className="bg-black">
        <img src={props.imgUrl} alt="" className="max-h-full" />
      </div>
      <div className="flex justify-around -mt-12 pb-4 pl-4">
        <div className="flex flex-col">
          <h3 className="text-2xl">{props.product}</h3>
          <p className="">{props.price}</p>
        </div>
        <ProductModal
          product={props.product}
          price={props.price}
          imgUrl={props.imgUrl}
          description={props.description}
          ingredients={props.ingredients}
        />
      </div>
    </div>
  );
}
