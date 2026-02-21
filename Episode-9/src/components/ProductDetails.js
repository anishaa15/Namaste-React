import useProductDetails from "../utils/useProductDetails";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const ProductDetails = () => {

  const {productId} = useParams();

  const productInfo = useProductDetails(productId);
  if (productInfo === null) return <Shimmer />;
  const { title, description, price, category, rating } =
    productInfo;
  return(
  <div className="details">
    <h1>Product details</h1>
    <h2>{title}</h2>
    <p>{description}</p>
    <h3>$ {price}</h3>
    <h3>{category}</h3>
    <h3>{rating} stars</h3>
  </div>);
};

export default ProductDetails;
