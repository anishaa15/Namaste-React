import RestaurantCard from "./Restaurant";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import ProductCard, { withFeaturedBadge } from "./Product";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import ProductCategory from "./ProductCategory";
import { PRODUCT_URL, CATEGORY_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const Body = () => {
  // Local State Variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [categories, setCategories] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState({});



  const FeaturedProductCard = withFeaturedBadge(ProductCard);

  // Whenever a state variables update, react triggers a reconciliation cycle(re-renders the component)
  // console.log("body rendered");
  useEffect(() => {
    fetchData();
    fetchData2();
    fetchData3();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2337645&lng=81.6234519&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    ); //fetch will return a promise

    const json = await data.json();

    // console.log(json);
    const restaurants =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const fetchData2 = async () => {
    const data2 = await fetch(PRODUCT_URL);

    const json2 = await data2.json();

    // console.log(json2);
    setProducts(json2.products);
  };

  const fetchData3 = async () => {
    const data3 = await fetch(CATEGORY_URL);
    const json3 = await data3.json();
    setCategories(json3);
  };

  const handleCategoryClick = async (slug) => {
    if (openCategory === slug) {
      setOpenCategory(null);
      return;
    }

    // Otherwise open it
    setOpenCategory(slug);
    if (categoryProducts[slug]) return;
    const data = await fetch(`https://dummyjson.com/products/category/${slug}`);
    const json = await data.json();
    setCategoryProducts((prev) => ({
      ...prev,
      [slug]: json.products,
    }));
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're Offline!!! Please check your internet connection.
      </h1>
    );

    const {setUserName, loggedInUser} = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 items-center">
          <input
            type="text"
            className="border border-solid border-black-100"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-50 m-4"
            onClick={() => {
              //Filter the restaurant and update the UI
              //searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>

          <input className="border border-black p-2" onChange={(e) => setUserName(e.target.value)} value={loggedInUser} />
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4,
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
     

      <h1 className="text-amber-950 align-middle py-4 m-4">
        Top Products for sale!!
      </h1>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <Link to={"/products/" + product.id} key={product.id}>
            {product.rating > 4.5 ? (
              <FeaturedProductCard productData={product} />
            ) : (
              <ProductCard productData={product} />
            )}
          </Link>
        ))}
      </div>

      <div className="p-2 m-2">
        <h1>Categories</h1>
        {categories.map((category) => (
          <ProductCategory
            key={category.slug}
            category={category}
            isOpen={openCategory === category.slug}
            products={categoryProducts[category.slug]}
            onClick={() => handleCategoryClick(category.slug)}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
