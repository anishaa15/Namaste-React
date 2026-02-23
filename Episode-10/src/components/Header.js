import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100">
      <div className="logo-container">
        <img className="w-30 m-4 pd-4" src={LOGO_URL} alt="app logo" />
      </div>

      <div>
        <ul className="flex p-4 m-4 ">
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
          <li className="m-4">Cart</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
