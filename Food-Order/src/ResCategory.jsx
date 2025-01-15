import React, { useState } from 'react'
import Itemlist from './Itemlist'

const ResCategory = ({data}) => {
    const [showItems, setShowItems] = useState(false);
    const categoryData = data?.card?.card;
  
    const handleClick = () => {
        setShowItems(!showItems);
    } 

    return (
        <div className="p-3 md:p-4 shadow-lg my-2 md:my-4 bg-gray-50 rounded-lg cursor-pointer">
            <div className="flex justify-between items-center" onClick={handleClick}>
                <span className="text-base md:text-lg font-bold text-gray-800">
                    {categoryData?.title} ({categoryData?.itemCards?.length})
                </span>
                <span className={`text-xl md:text-2xl text-gray-800 transition-transform duration-300 ${showItems ? "rotate-180" : "rotate-0"}`}>
                    ⌄
                </span>
            </div>
            <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${showItems ? "max-h-[2000px]" : "max-h-0"}`}>
                <Itemlist items={categoryData?.itemCards} />
            </div>
        </div>
    )
}

export default ResCategory