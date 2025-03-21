import React from 'react';

const ModalComponent = ({modal,setmodel , form , resetForm,updateForm,Submitform}) => {


return (
  <div>

    <button
      onClick={() => { setmodel(!modal) }}
      className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Add user
    </button>


    {modal && (
      <div
        id="crud-modal"
        className="fixed top-0 left-0 right-0 z-50 w-full h-screen flex justify-center items-center bg-opacity-50 bg-gray-900 "
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Add User
              </h3>
            </div>

            <form className="p-4 md:p-5" onSubmit={(e)=>Submitform(e)}>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <input
                    type="text"
                    name="_id"
                    value={form._id}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    hidden
                  />

                  <label htmlFor="FirstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="FirstName"
                    name="FirstName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="First name"
                    value={form.FirstName}
                    onChange={(e)=>updateForm(e)}
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label htmlFor="LastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="LastName"
                    name="LastName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Last name"
                    value={form.LastName}
                    onChange={(e)=>updateForm(e)}
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Email"
                    value={form.Email}
                    onChange={(e)=>updateForm(e)}
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label htmlFor="MobileNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    id="MobileNumber"
                    name="MobileNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Mobile Number"
                    value={form.MobileNumber}
                    onChange={(e)=>updateForm(e)}
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Hobbies
                  </label>
                  <div className="flex items-center space-x-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      <input
                        type="checkbox"
                        value="Sports"
                        checked={form.Hobbies.includes('Sports') || false}
                        onChange={(e)=>updateForm(e)}
                      />
                      Sports
                    </label>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      <input
                        type="checkbox"
                        value="Art"
                        checked={form.Hobbies.includes('Art') || false}
                        onChange={(e)=>updateForm(e)}
                      />
                      Art
                    </label>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      <input
                        type="checkbox"
                        value="Game"
                        checked={form.Hobbies.includes('Game') || false}
                        onChange={(e)=>updateForm(e)}
                      />
                      Game
                    </label>
                  </div>
                </div>

                <div className="col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Gender
                  </label>
                  <div className="flex items-center space-x-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      <input
                        type="radio"
                        name="Gender"
                        value="male"
                        checked={form.Gender === 'male'}
                        onChange={(e)=>updateForm(e)}
                      />
                      Male
                    </label>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      <input
                        type="radio"
                        name="Gender"
                        value="female"
                        checked={form.Gender === 'female'}
                        onChange={(e)=>updateForm(e)}
                      />
                      Female
                    </label>

                  </div>
                </div>

                <div className="col-span-2">
                  <label htmlFor="LastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Photo
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    onChange={(e)=>updateForm(e)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
                </svg>
                Add User
              </button>

              <button
                type="button"
                onClick={() => {
                  setmodel(!modal)
                  resetForm()
                }}
                className="ml-2 text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Close
              </button>

            </form>
          </div>
        </div>
      </div>
    )}
  </div>
);
};

export default ModalComponent;
