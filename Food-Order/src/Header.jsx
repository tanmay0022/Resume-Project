import React from 'react'
 import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-beige shadow-md fixed w-full top-0 z-50 bg-white">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 hover:text-gray-800 transition-colors">
          Tasty Bites
        </div>
        
        <nav className="ml-auto">
          <ul className="flex items-center space-x-12">
            <li className="text-gray-900 hover:text-gray-900 relative group py-2 text-lg font-medium">
              <Link to="/" className="group-hover:w-full transition-all duration-300">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="text-gray-900 hover:text-gray-900 relative group py-2 text-lg font-medium">
              <Link to="/about" className="group-hover:w-full transition-all duration-300">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="text-gray-900 hover:text-gray-900 relative group py-2 text-lg font-medium">
              <Link to="/cart" className="group-hover:w-full transition-all duration-300">
                Cart
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header