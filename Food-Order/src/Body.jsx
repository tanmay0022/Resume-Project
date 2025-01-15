import React, { useState, useEffect } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import useRestaurantdata from "./utils/useRestaurantdata";

import { FaSearch } from "react-icons/fa";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const { List, loading, filteredRestaurants, setFilteredRestaurants } =
    useRestaurantdata();

  
  
  
    const FilterAll = () => {
    const newDataList =
      List?.filter((data) => data?.info?.avgRating > 4.0) || [];
    setFilteredRestaurants(newDataList);
  };

  const FilterFastDelivery = () => {
    const newDataList =
      List?.filter((data) => data?.info?.sla?.deliveryTime < 30) || [];
    setFilteredRestaurants(newDataList);
  };

  const FilterBudget = () => {
    const newDataList =
      List?.filter((data) => data?.info?.costForTwo < "₹300") || [];
    setFilteredRestaurants(newDataList);
  };

  const ResetFilter = () => {
    const newDataList = List?.filter((data) => data?.info?.avgRating > 0) || [];
    setFilteredRestaurants(newDataList);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1 className="text-4xl text-center mt-20 text-black flex justify-center align-center">
        Offline!!
      </h1>
    );
  }

  if (loading) return <Shimmer />;
  console.log(filteredRestaurants);

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container w-full px-auto mt-9  mx-20 ">
      <div className="text-2xl ml-[160px] font-bold text-[#02060c]  text-start  mt-28 w-fit  ">
        Restaurants with online food delivery
      </div>

      <div className="flex ml-[160px] mt-[2px]">
        <div className="flex gap-3 items-center flex-wrap my-6">
          <button
            onClick={FilterAll}
            className="bg-gray-100 py-1   font-gilroy   text-gray-900  font-bold border-solid border-black rounded-2xl  px-3 text-[14px]"
          >
            Ratings 4.0+
          </button>
          <button
            onClick={FilterFastDelivery}
            className="bg-gray-100 py-1 font-gilroy text-gray-900  font-bold border-solid border-black rounded-2xl px-3 text-[14px]"
          >
            Fast Delivery
          </button>
          <button
            onClick={FilterBudget}
            className="bg-gray-100 py-1 font-gilroy text-gray-900  font-bold border-solid border-black rounded-2xl px-3 text-[14px]"
          >
            Budget Friendly
          </button>
          <button
            onClick={ResetFilter}
            className="bg-gray-100 py-0 text-black font-bold border-solid border-black rounded-2xl px-3"
          >
            ⛌
          </button>
          <div className="flex gap-2 mx-auto">
            <input
              type="text"
              placeholder="Search for Restaurants"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className=" border-solid border-black rounded-2xl px-3 py-1 bg-[#f0f0f5] text-black w-fit"
            />
            <button
              onClick={() => {
                const filterData =
                  List?.filter((data) =>
                    data?.info?.name
                      ?.toLowerCase()
                      .includes(searchText.toLowerCase())
                  ) || [];
                setFilteredRestaurants(filterData);
              }}
              className=" bg-white text-[14px] font-gilroy text-gray-900  font-bold  py-2 px-1 "
            >
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
      <div className="mx-24 ">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 max-w-full mx-auto text-white">
          {filteredRestaurants.map((data) => (
            <Link to={`/restaurant/${data?.info?.id}`} key={data?.info?.id}>
              <ResCard
                key={data?.info?.id || Math.random()}
                name={data?.info?.name}
                avgRating={data?.info?.avgRating}
                cloudinaryImageId={data?.info?.cloudinaryImageId}
                cuisines={data?.info?.cuisines}
                costForTwo={data?.info?.costForTwo}
                sla={data?.info?.sla}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
