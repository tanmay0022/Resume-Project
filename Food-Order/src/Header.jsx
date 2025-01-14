import React, { useState , useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  const{ loggedInUser}= useContext(UserContext);
  
  

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  return (
    <header className="glass-header fixed w-[100%] top-4 z-50  rounded-xl">
      <div className="container mx-auto  px-6 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold  text-white transition-colors">
          Tasty Bites
        </div>

        <nav className="ml-auto font-semibold">
          <ul className="flex items-center space-x-12">
            <li className="flex items-center">
              
              <Link
                to="/"
                className="group-hover:text-orange-600 transition-all duration-300 text-white"
              >
                Home
              </Link>
            </li>

            <li className="text-gray-900 relative group py-2 text-lg font-medium transition-transform duration-300 ">
              <Link
                to="/about"
                className=" text-white"
              >
                About
              </Link>
            </li>
            <li className="text-gray-900 hover:text-gray-900 relative group py-2 text-lg font-medium transition-transform duration-300 hover:scale-110">
              <Link
                to="/cart"
                className="group-hover:text-orange-600 transition-all duration-300 text-white"
              >
                Cart   {cartItems.lenght > 0 && cartItems.length}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:text-orange-600"></span>
              </Link>
            </li>
            {/* <li className="text-white font-medium">
              Status: {onlineStatus ? "🟢" : "🔴"}
            </li> */}
            <li className="text-white font-bold">
             {loggedInUser ? loggedInUser: "Guest"}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
