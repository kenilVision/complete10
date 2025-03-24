import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/artwork.png'

function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className="bg-white dark:bg-gray-900  w-full  top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
        

        <div className="items-center flex justify-between w-full">
        <div className="flex space-x-3 rtl:space-x-reverse me-auto"><img src = {image} className=' max-h-15 w-auto'/></div>
          <ul className="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 space-x-8 rtl:space-x-reverse flex-row mt-0 border-0 bg-white dark:bg-gray-800 dark:bg-gray-900 dark:border-gray-700">
            
          </ul>

            <button
              type="button"
              className="text-white bg-red-500 ms-auto hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
            onClick={()=>{
              localStorage.clear()
              navigate("/Login")  
            }}
            >
              LoginOut
            </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
