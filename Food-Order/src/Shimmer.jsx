import React from 'react'

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white rounded-lg p-4 shadow-md">
          <div className="rounded-lg w-80 h-48 object-cover bg-gray-200"></div>
          <div className="mt-4">
            <h3 className="text-xl font-bold text-black bg-gray-200 h-6 rounded-md"></h3>
            <div className="flex items-center mt-2">
              <span className="bg-gray-200 text-lg p-1 rounded-md h-6 block w-12"></span>
            </div>
            <p className="text-black mt-2 bg-gray-200 h-4 rounded-md w-32"></p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Shimmer