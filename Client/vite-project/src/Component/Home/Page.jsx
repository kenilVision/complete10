import React from 'react'
function Page({queries,setPage}) {
  return (
    <div >
      <div className="flex ">
        <button
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={()=>{
            if (queries.page > 1) {
                const value = queries.page - 1;
                setPage(value);
            }}}>
          Previous
        </button>
        {queries.page}
        <button
          className="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={()=>{
            if (queries.page < queries.total) {
                const value = queries.page + 1;
                setPage(value);
            }}}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Page
