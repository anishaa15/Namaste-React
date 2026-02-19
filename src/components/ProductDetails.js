import { useEffect } from "react";
import { PRODUCT_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const [productInfo, setProductInfo] = useState(null);

  const {productId} = useParams();

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
      const data = await fetch(PRODUCT_URL + "/" + productId);
      const json = await data.json();
      setProductInfo(json);
    } catch (err) {
      console.error(err);
    }
  };
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
