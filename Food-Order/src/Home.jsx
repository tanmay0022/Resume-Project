import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen w-full home-background">
      {/* main section */}
      <div className="relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between pt-32 lg:pt-52">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-0">
              <h1 className="text-3xl md:text-4xl lg:text-6xl text-white font-bold leading-tight">
                Its not just <span className="text-purple-600">food</span>, Its an experience
              </h1>
              <p className="text-white mt-4 text-sm md:text-base lg:w-[80%] font-semibold">
                Discover a world of flavors at our restaurant. From savory dishes to
                delightful desserts, every bite is a celebration of flavors from
                around the world.
              </p>
              <div className="mt-8 relative">
                <Link to='/Menu'>
                  <button className="relative font-bold bg-purple-600 text-white px-4 md:px-6 py-2 rounded-lg overflow-hidden group h-10 w-32 md:w-40">
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform group-hover:-translate-y-full">
                      Order now!
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
                      See full menu →
                    </span>
                  </button>
                </Link>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="../src/assets/confuse.png" 
                  alt=""
                  className="w-60 lg:w-80 absolute bottom-32 -left-36 rotate-6 drop-shadow-md -z-10" 
                />
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative">
              <img
                src="../src/assets/img3.png"
                alt="Featured dish"
                className="w-full h-auto object-cover transform scale-110 lg:scale-[1.5] rounded-lg drop-shadow-2xl"
              />
              <div className="absolute -top-1 -left-12 hidden lg:block">
                <img 
                  src="../src/assets/pizza.png" 
                  alt=""
                  className="w-20 h-20 drop-shadow-md rotate-45" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="bg-gray-50 py-12 md:py-16 mt-16 md:mt-20 lg:mt-60">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* Rating Cards */}
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {"★".repeat(5)}
                  </div>
                  <span className="ml-2 text-gray-600">5.0</span>
                </div>
              <p className="text-gray-700 mb-4">"Amazing food and quick delivery! The taste is absolutely authentic."</p>
                <div className="flex items-center">
                  <div className={`w-8 h-8 md:w-10 md:h-10 ${
                    index === 1 ? 'bg-blue-100' : index === 2 ? 'bg-green-100' : 'bg-purple-100'
                  } rounded-full flex items-center justify-center`}>
                    <span className={`${
                      index === 1 ? 'text-blue-600' : index === 2 ? 'text-green-600' : 'text-purple-600'
                    } font-semibold text-sm md:text-base`}>
                      {index === 1 ? 'JD' : index === 2 ? 'AS' : 'MJ'}
                    </span>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-sm md:text-base">
                      {index === 1 ? 'John Doe' : index === 2 ? 'Alice Smith' : 'Mike Johnson'}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500">
                      {index === 1 ? 'Regular Customer' : index === 2 ? 'Food Enthusiast' : 'Verified Customer'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl font-bold mb-4">Tasty Bites</h3>
              <p className="text-gray-400 text-sm md:text-base">Delivering happiness with every order.</p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="text-sm md:text-base">&copy; 2024 Tasty Bites. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
