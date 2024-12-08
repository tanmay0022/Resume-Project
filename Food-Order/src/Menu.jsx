import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Menu = () => {
  const { id } = useParams();
  const [menu, setmenu] = useState([])
  const [restaurant, setRestaurant] = useState(null)

  useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = async () => {
    try {
      const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.9456906&lng=78.16424780000001&restaurantId='+id);
      const json = await response.json();
      
      const { data } = json;
      const { cards } = data;

      // Get restaurant info
      const restaurantInfo = cards.find(card => card?.card?.card?.info)?.card?.card?.info;
      setRestaurant(restaurantInfo);

      // Find the menu category card
      const menuCategory = cards.find(card => 
        card?.groupedCard?.cardGroupMap?.REGULAR?.cards)?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      
      // Find the actual menu items from the categories
      const menuItems = menuCategory?.find(card => 
        card?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')?.card?.card?.itemCards;

      // console.log("Menu Items:", menuItems);
      setmenu(menuItems || []);
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ml-40 mt-20">
      <div className="menu p-8 max-w-4xl w-[80%] mx-auto bg-white shadow-lg rounded-lg my-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">{restaurant?.name}</h1>
        <div className="text-sm text-gray-600 mb-4 text-center">
          <p>{restaurant?.cuisines?.join(", ")}</p>
          <p>{restaurant?.areaName}, {restaurant?.city}</p>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Menu</h2>
        <div className="menu-items space-y-4">
          {menu?.map((item) => (
            <div key={item?.card?.info?.id} className="menu-item flex justify-between items-center p-4 border-b hover:shadow-lg transition-all">
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-2">
                  {item?.card?.info?.isVeg ? (
                    <span className="w-4 h-4 border-2 border-green-600 flex items-center justify-center">
                      <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    </span>
                  ) : (
                    <span className="w-4 h-4 border-2 border-red-600 flex items-center justify-center">
                      <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    </span>
                  )}
                  <h3 className="font-semibold text-lg text-gray-800">{item?.card?.info?.name}</h3>
                </div>
                <div className="mt-1">
                  <span className="font-medium text-gray-800">₹{item?.card?.info?.price / 100}</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{item?.card?.info?.description}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                {item?.card?.info?.imageId && (
                  <img 
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item?.card?.info?.imageId}`} 
                    alt={item?.card?.info?.name}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                )}
                <button className="bg-white text-green-500 px-8 py-2 rounded-lg font-medium border border-gray-200 hover:shadow-md transition-all">
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu