import React from 'react'
// import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-beige shadow-md absolute w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 hover:text-gray-800 transition-colors">
          Tasty Bites
        </div>
        
        <nav className="ml-auto">
          <ul className="flex items-center space-x-12">
            {['Home', 'About', 'Cart'].map((item) => (
              <li key={item}>
                <a 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-gray-900 hover:text-gray-900 relative group py-2 text-lg font-medium"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300">
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header