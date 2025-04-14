import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'


// pagination for home page 

export default function Example( {queries,setPage}) {


  
  const arr = Array.from({ length: queries.total }, (_, i) => i + 1);

  const getVisiblePages = () => { // function to apply number button
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

  const visiblePages = queries.total > 7 ? getVisiblePages() : arr;   // array  for pages 

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
