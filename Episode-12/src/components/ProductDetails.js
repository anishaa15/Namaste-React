import useProductDetails from "../utils/useProductDetails";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { productId } = useParams();

  const productInfo = useProductDetails(productId);
  if (productInfo === null) return <Shimmer />;
  const { id, title, description, price, category, rating, thumbnail, reviews } =
    productInfo;
  return (
    <div className="details w-6/12 items-center m-auto">
      <div className="flex">
        <div>
          <img
            className="bg-gray-100 rounded-lg w-220 m-2"
            src={thumbnail}
            alt=""
          />
        </div>
        <div className="p-2 m-2 ">
          <h2 className="font-bold text-2xl pb-2">{title}</h2>
          <h3 className="font-bold">⭐ {rating}/5</h3>
          <h3 className="font-bold text-2xl">$ {price}</h3>
          <p>{description}</p>
        </div>
      </div>
      {/* <div>
        <h2 className="font-bold text-2xl m-4 p-4">Customer Reviews</h2>
        {reviews.map((review) => {
          return (<div className="bg-amber-200 mb-3">
            <h2>{review.reviewerName}</h2>
            <h3>{review.rating}⭐</h3>
            <h3>"{review.comment}"</h3>
            <h3>{review.date.split("T")[0]}</h3>
          </div>);
        })}
      </div> */}
    </div>
  );
};

export default ProductDetails;
