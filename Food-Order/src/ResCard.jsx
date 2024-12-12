import React from 'react';

const ResCard = ({ name, avgRating, cloudinaryImageId, costForTwo, cuisines, sla }) => {
  const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`;

  return (
    <div className="bg-white rounded-lg p-4 shadow-md h-full flex flex-col">
      <img 
        className="rounded-lg w-full h-48 object-cover" 
        src={imageUrl} 
        alt={name}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/320x192?text=Restaurant+Image';
        }}
      />
      <div className="mt-4 flex-grow">
        <h3 className="text-xl font-bold text-black">{name}</h3>
        <div className="flex items-center mt-2">
          <span className="text-white bg-green-600 text-lg p-1">★ {avgRating}</span>
        </div>
        <p className="text-black mt-2 font-medium">{cuisines?.join(", ")}</p>
        <p className="text-black mt-2">{costForTwo}</p>
        <p className="text-black mt-2">{sla?.slaString}</p>
      </div>
    </div>
  );
};

export default ResCard;