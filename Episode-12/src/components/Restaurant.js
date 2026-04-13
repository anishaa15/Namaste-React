import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
  const {loggedInUser} = useContext(UserContext);

  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
  return (
    <div className="res-card w-52 m-4 px-4 py-4 rounded-lg bg-violet-100 flex flex-col items-center hover:cursor-pointer hover:shadow-2xl hover:shadow-black-200 ">
      <img
        className="res-logo w-full h-40 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <div className="w-full text-left">
        <h3 className="font-bold py-1">{name}</h3>
        <h4 >
          ⭐ {avgRating} • {sla.deliveryTime} minutes
        </h4>
        <h4>{cuisines.join(", ")}</h4>

        <h4>{costForTwo}</h4>
        <h4 className="font-semibold"> User: {loggedInUser} </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
