import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems); 
  return (
    <div className="flex justify-between bg-pink-100">
      <div className="logo-container">
        <img
          className="w-20 m-4 pd-4 rounded-lg"
          src={LOGO_URL}
          alt="app logo"
        />
      </div>

      <div>
        <ul className="flex p-2 m-2 ">
          <li className="m-4">Online Status: {onlineStatus ? "🟢" : "🔴"} </li>
          <li className="m-4">
            <Link to="/">Home</Link>
          </li>
          <li className="m-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="m-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="m-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="m-4 font-bold">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
            </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setNameReact("Logout")
                : setNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="m-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
