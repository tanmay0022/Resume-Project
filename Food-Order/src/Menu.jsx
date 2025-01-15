import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ResCategory from './ResCategory'
import { CDN_URL } from './utils/constants'

const Menu = () => {
  const { id } = useParams();
  const [menu, setmenu] = useState([])
  const [restaurant, setRestaurant] = useState(null)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = async () => {
    try {
      const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=29.9456906&lng=78.16424780000001&restaurantId='+id);
      const json = await response.json();
      
      const { data } = json;
      const cards = data.cards;

      // Get restaurant info
      const restaurantInfo = cards.find(card => 
        card?.card?.card?.info)?.card?.card?.info;
      
      setRestaurant(restaurantInfo);

      // Find the menu category card
      const menuCategory = cards.find(card => 
        card?.groupedCard?.cardGroupMap?.REGULAR?.cards)?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      // console.log("Menu Category:", menuCategory);
      
      // Filter categories that are of type ItemCategory
      const categories = menuCategory?.filter(card => 
        card?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
      
      
      setCategories(categories || []);

      // Find the actual menu items from the categories
      const menuItems = categories?.map(category => category?.card?.card?.itemCards);
      // console.log("Menu Items:", menuItems);
      setmenu(menuItems || []);
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  }
  

  return (
   <div className='w-full px-4 md:px-8 lg:px-10'>
     <div className="min-h-screen w-full md:w-[90%] lg:w-[80%] flex justify-center mx-auto mt-20 md:mt-24">
      <div className="menu p-4 md:p-6 lg:p-8 w-full md:max-w-[90%] lg:max-w-[80%] mx-auto shadow-lg rounded-lg my-4 md:my-8">
        <div>
          <img 
            className="w-full md:w-[90%] lg:w-[80%] h-40 md:h-48 lg:h-52 object-cover rounded-t-lg flex justify-center mx-auto" 
            src={`${CDN_URL}fl_lossy,f_auto,q_auto,w_1024/${restaurant?.cloudinaryImageId}`} 
            alt={restaurant?.name}
            onError={(e) => console.log('Image load error:', e)}
          />
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center mt-4">{restaurant?.name}</h1>
        <div className="text-xs md:text-sm text-gray-600 mb-4 text-center">
          <p>{restaurant?.cuisines?.join(", ")}</p>
          <p>{restaurant?.areaName}, {restaurant?.city}</p>
        </div>
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center">Menu</h2>
        
        <div className="space-y-4">
         {categories.map((category, index) => (
             <ResCategory key={index} data={category}/>
         ))}
        </div>
      </div>
    </div>
   </div>
  )
}

export default Menu