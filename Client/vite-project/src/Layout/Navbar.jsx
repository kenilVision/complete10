import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const arr = [
  {
    to:"/",
    text:"Home"
  },
  {
    to:"/About",
    text:"About"
  },
  {
    to:"/Profile",
    text:"Profile"
  },
  {
    to:"/Login"
  }
]
function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className="bg-white dark:bg-gray-900  w-full  top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex space-x-3 rtl:space-x-reverse"></div>
        <div className="items-center flex justify-between w-full">
          <ul className="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg bg-gray-50 space-x-8 rtl:space-x-reverse flex-row mt-0 border-0 bg-white dark:bg-gray-800 dark:bg-gray-900 dark:border-gray-700">
            {
              arr.map((x,i)=>  
              {
                return (<li key ={i}>
                  <NavLink
                    to={x.to}
                    className={({ isActive }) =>
                      `block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                        isActive ? 'dark:text-blue-500' : 'dark:text-white'
                      }`
                    }
                  >
                    {x.text}
                  </NavLink>
                </li>)
              })
            }
          </ul>

            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
