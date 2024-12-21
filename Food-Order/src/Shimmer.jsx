import React from 'react'

const Shimmer = () => {
  return (
    <div className="container mx-auto px-4 mt-20">
      <div className="flex justify-center mt-8">
        <div className="flex gap-3 items-center flex-wrap my-6">
          <div className="w-24 h-10 bg-gray-200 rounded-2xl"></div>
          <div className="w-24 h-10 bg-gray-200 rounded-2xl"></div>
          <div className="w-24 h-10 bg-gray-200 rounded-2xl"></div>
          <div className="w-32 h-10 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
      <div className='mx-36'>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-full">
          {Array(8).fill("").map((_, index) => (
            <div key={index} className="w-72 p-4">
              <div className="relative">
                <div className="rounded-xl w-[95%] h-44 bg-gray-200 animate-pulse"></div>
              </div>
              <div className="mt-3">
                <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                <div className="flex items-center mt-1 gap-1">
                  <div className="w-12 h-6 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                  <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mt-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mt-2 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Shimmer