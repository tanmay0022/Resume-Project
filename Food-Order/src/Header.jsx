import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const onlineStatus = useOnlineStatus();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`sticky top-0 z-50 ${isHome ? 'bg-transparent' : 'bg-white shadow-md'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            
            <span className={`ml-2 text-xl font-bold ${isHome ? 'text-white' : 'text-black'}`}>
              Tasty Bites
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-500 hover:text-gray-600"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center space-x-8`}>
            <ul className="flex space-x-8 items-center">
              <li className="text-gray-900 hover:text-gray-900 relative group py-2 text-lg font-medium">
                <Link to="/" className={`duration-300 ${isHome ? 'text-white' : 'text-black'}`}>
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="text-gray-900 hover:text-gray-900 relative group py-2 text-lg font-medium">
                <Link to="/about" className={`duration-300 ${isHome ? 'text-white' : 'text-black'}`}>
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="text-gray-900 hover:text-gray-900 relative group py-2 text-lg font-medium">
                <Link to="/menu" className={`duration-300 ${isHome ? 'text-white' : 'text-black'}`}>
                  Menu
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="text-gray-900 hover:text-gray-900 relative group py-2 text-lg font-medium">
                <Link to="/cart" className={`duration-300 ${isHome ? 'text-white' : 'text-black'} relative`}>
                  Cart
                  {cartItems.length > 0 && (
                    <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="text-gray-900 hover:text-gray-900 relative group py-2 text-lg font-medium">
                <span className={`duration-300 ${isHome ? 'text-white' : 'text-black'}`}>
                  {loggedInUser}
                </span>
              </li>
              <li>
                <span className={`duration-300 ${isHome ? 'text-white' : 'text-black'}`}>
                  {onlineStatus ? "🟢" : "🔴"}
                </span>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden ${
            isMenuOpen ? "block" : "hidden"
          } bg-white shadow-lg rounded-lg mt-2 py-4`}
        >
          <ul className="flex flex-col space-y-4 px-4">
            <li>
              <Link to="/" className="text-gray-900 hover:text-gray-600 block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-900 hover:text-gray-600 block py-2">
                About
              </Link>
            </li>
            <li>
              <Link to="/menu" className="text-gray-900 hover:text-gray-600 block py-2">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-gray-900 hover:text-gray-600 block py-2 relative">
                Cart
                {cartItems.length > 0 && (
                  <span className="absolute top-2 ml-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>
            <li className="py-2">
              <span className="text-gray-900">{loggedInUser}</span>
            </li>
            <li className="py-2">
              <span className="text-gray-900">
                {onlineStatus ? "🟢 Online" : "🔴 Offline"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
