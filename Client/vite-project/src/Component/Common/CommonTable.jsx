import React from 'react'

function CommonTable({header,body}) {
  return (
    <div className="relative overflow-x-auto bg-gray-900 border-0">
            <table className=" text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {header}
                </tr>
                </thead>
                <tbody>
                    {body}
                </tbody>
                </table>
        </div>
  )
}

export default CommonTable
