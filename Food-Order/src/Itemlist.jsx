import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./utils/cartSlice";

const Itemlist = ({ items, isCart }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      {items?.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="p-2 md:p-4 border-b flex flex-col md:flex-row justify-between items-center md:items-start hover:bg-gray-50"
          >
            <div className="flex-1 pr-2 md:pr-4 w-full md:w-auto text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                {item.card.info.isVeg ? (
                  <span className="w-3 md:w-4 h-3 md:h-4 border-2 border-green-600 flex items-center justify-center">
                    <span className="w-1.5 md:w-2 h-1.5 md:h-2 bg-green-600 rounded-full"></span>
                  </span>
                ) : (
                  <span className="w-3 md:w-4 h-3 md:h-4 border-2 border-red-600 flex items-center justify-center">
                    <span className="w-1.5 md:w-2 h-1.5 md:h-2 bg-red-600 rounded-full"></span>
                  </span>
                )}
                <h3 className="font-medium text-sm md:text-base text-gray-800">
                  {item.card.info.name}
                </h3>
              </div>
              <div className="mt-1 text-black">
                <span className="font-medium text-xs md:text-sm">
                  ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="mt-2 text-xs md:text-sm text-gray-500 leading-5 line-clamp-2 md:line-clamp-none">
                {!isCart && item.card.info.description}
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2 mt-2 md:mt-0">
              {item.card.info.imageId && (
                <img
                  className="w-20 md:w-28 h-16 md:h-24 object-cover rounded-lg"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
                  alt={item.card.info.name}
                />
              )}
              {isCart ? (
                <div className="flex items-center gap-2 mt-2 md:-mt-4 mr-0 md:mr-4">
                  <button
                    className="px-2 md:px-3 py-1 rounded-lg text-sm md:text-base font-medium border border-gray-300 hover:shadow-md transition-all bg-white text-orange-500"
                    onClick={() => handleRemoveItem(item)}
                  >
                    −
                  </button>
                  <button
                    className="px-2 md:px-3 py-1 rounded-lg text-sm md:text-base font-medium border border-gray-300 hover:shadow-md transition-all bg-white text-orange-500"
                    onClick={() => handleAddItem(item)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="bg-white text-green-500 px-3 md:px-4 py-1 rounded-lg text-sm md:text-base font-medium border border-gray-300 hover:shadow-md transition-all mt-2 md:-mt-4 mr-0 md:mr-4"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Itemlist;
