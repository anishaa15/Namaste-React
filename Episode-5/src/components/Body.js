import RestaurantCard from "./Restaurant";
import { useState } from "react";
import resList from "../utils/mockData"
const Body = () => {
  // Local State Variable - Super Powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  //Normal JS Variable
  // let listOfRestaurants=null;
  ///Normal JS variable
  // let listOfRestaurantsJS = [
  //   {
  //     info: {
  //       id: "439785",
  //       name: "Pizza Hut",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/8317de37-c494-469f-aa00-b9f1e55a7535_439785.JPG",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 3.8,
  //       sla: {
  //         deliveryTime: 23,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "439786",
  //       name: "Barbeque Nation",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/8317de37-c494-469f-aa00-b9f1e55a7535_439785.JPG",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.5,
  //       sla: {
  //         deliveryTime: 23,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "439787",
  //       name: "MCD",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/8317de37-c494-469f-aa00-b9f1e55a7535_439785.JPG",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Burger, Fries, Coke"],
  //       avgRating: 4.1,
  //       sla: {
  //         deliveryTime: 23,
  //       },
  //     },
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter">
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
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
