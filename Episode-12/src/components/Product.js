import { PRODUCT_URL } from "../utils/constants";

const ProductCard = (props) => {
  const { productData } = props;
  const { title, price, rating } = productData;
  return (
    <div className="product-card w-52 m-4 px-4 py-4 rounded-lg bg-violet-100 flex flex-col items-center hover:cursor-pointer hover:shadow-2xl hover:shadow-black-200">
      <img
        className="bg-white rounded-lg"
        src={productData.thumbnail}
        alt="product-logo"
      />
      <div className="w-full">
        <h3 className="font-bold py-2">{title}</h3>
        <h4>
          ${price} ⭐ {rating}
        </h4>
      </div>
    </div>
  );
};

export const withFeaturedBadge = (ProductCard) => {
  return (props) => {
    return (
      <div>
        <label className="m-2 p-2 bg-black text-white absolute rounded-lg">Featured</label>
        <ProductCard {...props}/>
      </div>
    );
  };
};
export default ProductCard;
