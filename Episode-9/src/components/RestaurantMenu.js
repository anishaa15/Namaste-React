import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.236127690989925&lng=81.66498553007841&restaurantId=628571&catalog_qa=undefined&submitAction=ENTER",
      );
      // console.log(res);
      const data = await res.json();
      // console.log(data);
      setResInfo(data.res);
    } catch (err) {
      console.error(err);
    }
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div>
      <h1>{resInfo?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info.name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Pizza</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
