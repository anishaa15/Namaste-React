import { PRODUCT_URL } from "../utils/constants";

const ProductCard = (props) => {
    const {productData} = props;
    const {title, price, rating} = productData;
    return (
        <div className="product-card">
            <img src={productData.thumbnail} alt="product-logo" />
            <h3>{title}</h3>
            <h4>${price} ⭐ {rating}</h4>
        </div>
    )
}

export default ProductCard;