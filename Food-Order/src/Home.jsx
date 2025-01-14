import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" min-h-screen w-full">
        {/* main section */}
    <div>
    <div className="ml-40 ">
        <div className="mt-52  w-full  mx-auto ">
          <h1 className="text-6xl text-white font-bold w-[30%] leading-[60px] ml-20 ">
            Its not just <span className="text-purple-600">food</span>,Its an experience
          </h1>

          <p className="text-white mt-4 w-[35%] ml-20 font-semibold  ">
            Discover a world of flavors at our restaurant. From savory dishes to
            delightful desserts, every bite is a celebration of flavors from
            around the world.
          </p>
          <div>
            <div className="relative ml-20 mt-8 inline-block">
             <Link to='/Menu'>
             <button className="relative font-bold bg-purple-600 text-white px-6 py-2 rounded-lg overflow-hidden group h-10 w-40">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform group-hover:-translate-y-full">
                  Order now!
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
                  See full menu →
                </span>
              </button>
             </Link>
             <div>
            <img src="../src/assets/confuse.png" alt=""
            className="w-80 h-80 relative -top-36 -left-[115%] drop-shadow-md -z-10 " />
        </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-40 mt-16 right-24 w-[600px] mr-44 img">
        <img
          src="../src/assets/img3.png"
          alt="Featured dish"
          className="w-full h-full object-cover transform scale-[1.5] rounded-lg drop-shadow-2xl"
        />

        <div>
            <img src="../src/assets/pizza.png" alt=""
            className="w-20 h-20 absolute -top-10 -left-12 drop-shadow-md rotate-45" />
        </div>
       
      </div>
    </div>
   

    {/* Ratings Section */}
    <div className="bg-gray-50 py-16 mt-60">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Rating Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {"★".repeat(5)}
              </div>
              <span className="ml-2 text-gray-600">5.0</span>
            </div>
            <p className="text-gray-700 mb-4">"Amazing food and quick delivery! The taste is absolutely authentic."</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">JD</span>
              </div>
              <div className="ml-3">
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-500">Regular Customer</p>
              </div>
            </div>
          </div>

          {/* Rating Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {"★".repeat(5)}
              </div>
              <span className="ml-2 text-gray-600">5.0</span>
            </div>
            <p className="text-gray-700 mb-4">"The variety of dishes is impressive. Each order has been perfect!"</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-semibold">AS</span>
              </div>
              <div className="ml-3">
                <p className="font-semibold">Alice Smith</p>
                <p className="text-sm text-gray-500">Food Enthusiast</p>
              </div>
            </div>
          </div>

          {/* Rating Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {"★".repeat(5)}
              </div>
              <span className="ml-2 text-gray-600">5.0</span>
            </div>
            <p className="text-gray-700 mb-4">"Best food delivery service I've used. The quality is consistently high."</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-semibold">MJ</span>
              </div>
              <div className="ml-3">
                <p className="font-semibold">Mike Johnson</p>
                <p className="text-sm text-gray-500">Verified Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tasty Bites</h3>
            <p className="text-gray-400">Delivering happiness with every order.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Menu</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Food Street</li>
              <li>Foodie City, FC 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@tastybites.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe for the latest updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none"
              />
              <button className="bg-green-600 px-4 py-2 rounded-r-lg hover:bg-green-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Tasty Bites. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </div>
 
  );
};

export default Home;
