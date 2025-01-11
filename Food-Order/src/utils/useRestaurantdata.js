import {useEffect,useState} from "react";

const useRestaurantdata = () => {

const [List, setList] = useState([]);
const [filteredRestaurants, setFilteredRestaurants] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
    const fetchData = async () => {
        try {
          const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
          );
    
          const json = await data.json();
          
          
          // Find the restaurant cards array from the response
          const cards = json?.data?.cards;
          const restaurantCard = cards?.find(card => 
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
          );
          
          const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
          console.log("Extracted Restaurants:", restaurants); // Debug log
          
          setList(restaurants);
          setFilteredRestaurants(restaurants);
        } catch (error) {
          console.error("Error fetching data:", error);
          setList([]);
          setFilteredRestaurants([]);
        } finally {
          setLoading(false);
        }
      };

      fetchData();

},[])

return {List,filteredRestaurants,loading,setFilteredRestaurants}

}

export default useRestaurantdata;