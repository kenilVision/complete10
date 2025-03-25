import React from 'react';
import Modal from './Modal'
import Input from '../Common/Input'
function Search_Sort({queries ,setField , modal, setmodel , form , resetForm,updateForm,Submitform,mode ,setmode}) {
  return (

   <nav className="bg-gray-900 w-full p-4">
    <div className="mx-auto max-w-7xl  flex  ">
      <div className='pe-2' >
        <Input
          className="form-input bg-gray-700  text-white px-4 py-2 border border-[#30363D] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          type="search"
          placeholder="Search"
          name="search"
        value ={queries.search}
         onChange={(e)=>{setField(e.target)}}
        />
        </div>

        <div>
      <select
       className="form-select bg-gray-700 text-white px-4 py-2 border border-[#30363D] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 appearance-none relative"
        onChange={(e) => {setField({ name: 'sort', value: e.target.value });}}>
        <option value="" defaultValue>Sort by: Featured</option>
        <option value="FirstName">First Name</option>
        <option value="LastName">Last Name</option>
        <option value="Email">Email</option>
      </select>
      </div>
      <div className='ms-auto'>
        <Modal modal={modal} setmodel={setmodel} form={form}  resetForm={resetForm} updateForm={updateForm} Submitform={Submitform} mode={mode}  setmode={setmode} />
      </div>
    </div>
  </nav>


);
}

export default Search_Sort;
