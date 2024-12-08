import React, { useState, useEffect } from 'react';
import ResCard from './ResCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {
  const [List, setList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);
  
  

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log("API Response:", json); // Debug log
      
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

  const FilterAll = () => {
    const newDataList = List?.filter(data => data?.info?.avgRating > 4.0) || [];
    setFilteredRestaurants(newDataList);
  };

  const ResetFilter = () => {
    const newDataList = List?.filter(data => data?.info?.avgRating > 0) || [];
    setFilteredRestaurants(newDataList);
  };

  if (loading) return <Shimmer />;
  console.log(filteredRestaurants);

  return filteredRestaurants.length === 0 ? (<Shimmer /> ): (
    <div className="flex flex-col items-center mt-20 ml-14">
      <div>
        <div className="flex gap-4 mb-4 mt-5">
          <button onClick={FilterAll} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Filter All
          </button>
          <button onClick={ResetFilter} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Reset Filter
          </button>
          <div>
            <input
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2"
            />
            <button
              onClick={() => {
                const filterData = List?.filter(data => 
                  data?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                ) || [];
                setFilteredRestaurants(filterData);
              }}
              className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Search
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-screen-lg">
          {   (
            filteredRestaurants.map((data) => (
              <Link to={`/restaurant/${data?.info?.id}`} key={data?.info?.id}><ResCard
                key={data?.info?.id || Math.random()}
                name={data?.info?.name}
                avgRating={data?.info?.avgRating}
                cloudinaryImageId={data?.info?.cloudinaryImageId}
                costForTwo={data?.info?.costForTwo}
                cuisines={data?.info?.cuisines}
                sla={data?.info?.sla}
              /></Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
