import React from 'react';

const ResCard = ({ cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla }) => {
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`;

  return (
    <div className=" w-72  p-4 hover:scale-[0.98] transition-all  duration-300 text-white">
      <div className="relative">
        <img 
          className="rounded-xl w-[98%] h-40 object-cover" 
          src={imageUrl} 
          alt={name}
          onError={(e) => {
            e.target.src = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/39cd5e4824e5c011ffaf56ddc39891e8";
          }}
        />
        
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-bold text-gray-800 truncate">{name}</h3>
        <div className="flex items-center mt-1 gap-1">
          <span className="flex items-center gap-1">
            <span className="text-white bg-green-600 text-sm px-2 py-0.5 rounded flex items-center gap-1">
              <span>★</span>{avgRating}
            </span>
          </span>
          <span className="text-gray-700">•</span>
          <span className="text-gray-700">{sla?.slaString}</span>
        </div>
        <p className="text-black text-sm mt-1 truncate">{cuisines?.join(", ")}</p>
        <p className="text-black text-sm">{costForTwo}</p>
      </div>
    </div>
  );
};

export default ResCard;