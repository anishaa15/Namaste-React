import { PRODUCT_URL } from "./constants"
import { useEffect, useState } from "react";
const useProductDetails = (productId) => {

    const [productInfo, setProductInfo] = useState(null);
    
    useEffect(()=>{
        fetchProductDetails();
    }, []);

    const fetchProductDetails = async () => {
        const data = await fetch(PRODUCT_URL + "/" + productId);
        const json = await data.json();
        setProductInfo(json);

    }
    return productInfo;
}

export default useProductDetails;