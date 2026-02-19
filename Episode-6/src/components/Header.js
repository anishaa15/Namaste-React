import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnNameReact, setNameReact] = useState("Login");
  console.log("Header render");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="app logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
               btnNameReact === "Login" ? setNameReact("Logout") : setNameReact("Login") ;
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
