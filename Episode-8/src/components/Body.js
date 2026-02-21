import RestaurantCard from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import ProductCard from "./Product";
import { Link } from "react-router-dom";
const Body = () => {
  // Local State Variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
      <div className="product-container">
        {products.map((product) => (
          <Link to={"/products/" + product.id} key={product.id}><ProductCard productData={product} /></Link>
        ))}
      </div>
      
    </div>
  );
};

export default Body;
