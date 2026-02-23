import RestaurantCard from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import ProductCard, { withFeaturedBadge } from "./Product";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  // Local State Variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const FeaturedProductCard = withFeaturedBadge(ProductCard);

  // Whenever a state variables update, react triggers a reconciliation cycle(re-renders the component)
  // console.log("body rendered");
  useEffect(() => {
    fetchData();
    fetchData2();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2337645&lng=81.6234519&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    ); //fetch will return a promise

    const json = await data.json();

    console.log(json);
    const restaurants =
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const fetchData2 = async () => {
    const data2 = await fetch("https://dummyjson.com/products");

    const json2 = await data2.json();

    console.log(json2);
    setProducts(json2.products);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're Offline!!! Please check your internet connection.
      </h1>
    );

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
    </div>
  );
};

export default Body;
