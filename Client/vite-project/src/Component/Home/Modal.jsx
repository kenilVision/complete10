import React from 'react';
import Button from '../Common/Button';
import Input from '../Common/Input'
import CommonModal from '../Common/CommonModal'
const ModalComponent = ({modal,setmodel , form , resetForm,updateForm,Submitform,mode }) => {


return (
<CommonModal
      modal={modal}
      setmodel={setmodel}
      resetForm={resetForm}
      mode={mode}
    >
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
                  <Input
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
                  <Input
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
                  <Input
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
                  <Input
                    type="number"
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
                  <div className="flex items-center  space-x-4">
                    <label className=" mb-2 text-sm font-medium flex items-center text-gray-900 dark:text-white">
                      <input
                        type="checkbox"
                        value="Sports"
                        checked={form.Hobbies.includes('Sports') || false}
                        onChange={(e)=>updateForm(e)}
                        className='me-1'
                      />
                      Sports
                    </label>
                    <label className=" mb-2 text-sm font-medium flex items-center text-gray-900 dark:text-white">
                      <input
                        type="checkbox"
                        value="Art"
                        checked={form.Hobbies.includes('Art') || false}
                        onChange={(e)=>updateForm(e)}
                        className='me-1'
                      />
                      Art
                    </label>
                    <label className="mb-2 text-sm font-medium flex items-center text-gray-900 dark:text-white">
                      <input
                        type="checkbox"
                        value="Game"
                        checked={form.Hobbies.includes('Game') || false}
                        onChange={(e)=>updateForm(e)}
                        className='me-1'
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
                    <label className="flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      <input
                        type="radio"
                        name="Gender"
                        value="male"
                        checked={form.Gender === 'male'}
                        className='me-1'
                        onChange={(e)=>updateForm(e)}
                      />
                      Male
                    </label>
                    <label className="flex items-center mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      <input
                        type="radio"
                        name="Gender"
                        value="female"
                        checked={form.Gender === 'female'}
                        className='me-1'
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
                  <Input
                    type="file"
                    id="file"
                    name="file"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    onChange={(e)=>updateForm(e)}
                  />
                </div>
              </div>
              <Button 
              text={mode? "Add User" :"Edit User" } 
              svg = {mode?<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
              </svg>:<svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 bi bi-pencil-fill"
                fill="#fff"
                viewBox="0 0 20 20"
                >
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                </svg>}
              className= "w-full text-center"
              />
            </form>

    </CommonModal>

    
//   )

// />

//     {modal && (
//       <div
//         id="crud-modal"
//         className="fixed top-0 left-0 right-0 z-50 w-full h-screen flex justify-center items-center bg-gray-900/50"

//       >
//         <div className="relative p-4 w-full max-w-md max-h-full ">
//           <div className="bg-white rounded-lg shadow-sm dark:bg-gray-700">
//             <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                 {mode? "Add User" :"Edit User" }
//               </h3>
//               <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"  
//               onClick={() => {
//                   setmodel(!modal)
//                   resetForm()
//                 }}>
//                     <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
//                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
//                     </svg>
//                     <span class="sr-only">Close modal</span>
//                 </button>
//             </div>
           

            
//           </div>
//         </div>
//       </div>
//     )}
//   </div>
);
};

export default ModalComponent;
