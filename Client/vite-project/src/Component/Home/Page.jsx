// import React from 'react'
// function Page() {
//   return (

//     <div >
//       <div className="flex ">
//         <button
//           className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//         onClick={()=>{
//             if (queries.page > 1) {
//                 const value = queries.page - 1;
//                 setPage(value);
//             }}}>
//           Previous
//         </button>

//         <button
//           className="flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//           onClick={()=>{
//             if (queries.page < queries.total) {
//                 const value = queries.page + 1;
//                 setPage(value);
//             }}}>
//           Next
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Page


import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'



export default function Example( {queries,setPage}) {


  // const arr = new Array(queries.total);
  const arr = Array.from({ length: queries.total }, (_, i) => i + 1);

  const getVisiblePages = () => {
    if (queries.page <= 4) {
      return arr.slice(0, 5).concat(["..."], [queries.total]);
    } else if (queries.page >= queries.total - 3) {
      return [1, "..."].concat(arr.slice(queries.total - 5));
    } else {
      return [1, "..."].concat(
        arr.slice(queries.page - 2, queries.page + 1),
        ["..."],
        [queries.total]
      );
    }
  };

  const visiblePages = queries.total > 7 ? getVisiblePages() : arr;

  return (
    <div className="flex items-center justify-between  bg-gray-900 text-white  ">
    
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-white">
            Showing <span className="font-medium">{queries.page}</span> to <span className="font-medium">{queries.total}</span> 
          </p>
        </div>
        <div>
          <nav aria-label="Pagination" className="isolate bg-gray-700 border-0 inline-flex -space-x-px rounded-md shadow-xs">
            <button
             
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={()=>{
              if (queries.page > 1) {
                                const value = queries.page - 1;
                                setPage(value);
                            }}}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="size-5" />
            </button>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            {/* <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a> */}

                  {visiblePages.map((x, i) =>
              x === "..." ? (
                <span
                  key={i}
                  className="relative inline-flex items-center px-3 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset focus:z-20 focus:outline-offset-0"
                >
                  {x}
                </span>
              ) : (
                <button
                  key={i}
                  className={`relative inline-flex items-center px-3 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                    queries.page === x ? "bg-blue-700 text-white" : ""
                  }`}
                  onClick={() => setPage(x)}
                >
                  {x}
                </button>
              )
            )}
                            <button
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={()=>{
                            if (queries.page < queries.total) {
                                const value = queries.page + 1;
                                setPage(value);
                            }}}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="size-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
