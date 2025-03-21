import React from 'react';
function Search_Sort({queries ,setField}) {
  return (
    <nav className="bg-gray-900 w-full p-4">
    <div className="container mx-auto flex justify-between items-center">
        <input
          className="form-input bg-gray-700 text-white px-4 py-2 border border-[#30363D] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          type="search"
          placeholder="Search"
          name="search"
        value ={queries.search}
         onChange={(e)=>{setField(e.target)}}
        />
      <select
        className="form-select bg-gray-700 text-white px-4 py-2 border border-[#30363D] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        aria-label="Sort options"
        onChange={(e) => {setField({ name: 'sort', value: e.target.value });}}>
        <option value="" defaultValue>Sort by: Featured</option>
        <option value="FirstName">First Name</option>
        <option value="LastName">Last Name</option>
        <option value="Email">Email</option>
      </select>
    </div>
  </nav>
);
}

export default Search_Sort;
