import React from "react";

const Itemlist = ({ items }) => {
  console.log(items);

  return (
    <div>
      {items?.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="p-4 border-b flex justify-between items-start hover:bg-gray-50"
          >
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-2">
                {item.card.info.isVeg ? (
                  <span className="w-4 h-4 border-2 border-green-600 flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  </span>
                ) : (
                  <span className="w-4 h-4 border-2 border-red-600 flex items-center justify-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  </span>
                )}
                <h3 className="font-medium text-base text-gray-800">
                  {item.card.info.name}
                </h3>
              </div>
              <div className="mt-1">
                <span className="font-medium text-sm">
                  ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-500 leading-5">
                {item.card.info.description}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              {item.card.info.imageId && (
                <img
                  className="w-28 h-24 object-cover rounded-lg"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`}
                  alt={item.card.info.name}
                />
              )}
              <button className="bg-white text-green-500 px-4 py-1 rounded-lg font-medium border border-gray-300 hover:shadow-md transition-all relative -mt-4 mr-4">
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Itemlist;
