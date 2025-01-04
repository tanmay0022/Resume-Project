import React, { useState , useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";

import { FaHome } from "react-icons/fa";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  const{ loggedInUser}= useContext(UserContext);
  
  

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  return (
    <header className="bg-beige mx-12 shadow-lg fixed w-[90%] top-2 z-50 bg-white rounded-2xl">
      <div className="container mx-auto  px-6 py-4 flex justify-between items-center  ">
        <div className="text-2xl font-bold text-gray-800 hover:text-gray-800 transition-colors">
          Tasty Bites
        </div>

        <nav className="ml-auto">
          <ul className="flex items-center space-x-12">
            <li className="flex items-center">
              <FaHome className="mr-2  text-black"/>
              <Link
                to="/"
                className="group-hover:text-orange-600 transition-all duration-300 text-black"
              >
                Home
              </Link>
            </li>

            <li className="text-gray-900 relative group py-2 text-lg font-medium transition-transform duration-300 ">
              <Link
                to="/about"
                className="group-hover:text-orange-600 transition-all duration-300 text-black"
              >
                About
              </Link>
            </li>
            <li className="text-gray-900 hover:text-gray-900 relative group py-2 text-lg font-medium transition-transform duration-300 hover:scale-110">
              <Link
                to="/cart"
                className="group-hover:text-orange-600 transition-all duration-300 text-black"
              >
                Cart- ({cartItems.length})
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:text-orange-600"></span>
              </Link>
            </li>
            <li className="text-black font-medium">
              Status: {onlineStatus ? "🟢" : "🔴"}
            </li>
            <li className="text-black font-bold">
             {loggedInUser ? loggedInUser: "Guest"}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
