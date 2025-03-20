import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { updateProfileField, updateHobbies, reset} from '../../Redux/Slice/FormSlice';
import {ReadFromDB} from '../../Redux/Slice/UserSlice.js'
import {toggleModal} from '../../Redux/Slice/modal.js';
import {total, resetQuery} from '../../Redux/Slice/Queries'
import axios from 'axios';
const ModalComponent = () => {
  
  const formData = useSelector(state => state.form)
  const dispatch =  useDispatch()
  const isModalOpen = useSelector(state => state.modal)
  const [selectedFile, setSelectedFile] = useState(null);
  const quries =  useSelector(state => state.queries)

  const handleInputChange = (e) => {
    const { name, value } = e.target; 
    dispatch(updateProfileField({ name, value })); 
  }

  const handleHobbiesChange = (e) => {
    const { value, checked } = e.target;
    dispatch(updateHobbies({ hobby: value, checked })); 
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file); // Keep the file in local state
  };
 

  const handleSubmit = async(e) => {
    e.preventDefault();
    

     
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('FirstName', formData.FirstName);
    formDataToSubmit.append('LastName', formData.LastName);
    formDataToSubmit.append('Email', formData.Email);
    formDataToSubmit.append('MobileNumber', formData.MobileNumber);
    formDataToSubmit.append('Hobbies', JSON.stringify(formData.Hobbies)); 
    formDataToSubmit.append('Gender', formData.Gender);
    if (formData._id) {
        formDataToSubmit.append('_id', formData._id);
    }
    if (selectedFile) {
      formDataToSubmit.append('file', selectedFile);
    }
  if (formDataToSubmit._id === '') {
      delete formDataToSubmit._id;
  }
  console.log(formData)
  try {
      if (formData._id) {
          await axios.put(`http://localhost:5000/User`, formDataToSubmit,{
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });
          dispatch(toggleModal());
          dispatch(reset());
          const queryString = new URLSearchParams(quries).toString();
          const response = await axios.get(`http://localhost:5000/User?${queryString}`);
                
                        const formattedData = response.data.user.map((user) => {
                          return {
                            _id: user._id,
                            FirstName: user.FirstName,
                            LastName: user.LastName,
                            Email: user.Email,
                            MobileNumber: user.MobileNumber,
                            Hobbies: user.Hobbies,
                            Gender: user.Gender,
                            filename: user.url,
                          };
                        });
          dispatch(resetQuery())
          dispatch(total(response.data.totalPages))  
          dispatch(ReadFromDB(formattedData));
      } else {
          console.log(formDataToSubmit);
          await axios.post(`http://localhost:5000/User`, formDataToSubmit, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });
          dispatch(toggleModal());
          dispatch(reset());
          const queryString = new URLSearchParams(quries).toString();
          const response = await axios.get(`http://localhost:5000/User?${queryString}`);
                
                        const formattedData = response.data.user.map((user) => {
                          return {
                            _id: user._id,
                            FirstName: user.FirstName,
                            LastName: user.LastName,
                            Email: user.Email,
                            MobileNumber: user.MobileNumber,
                            Hobbies: user.Hobbies,
                            Gender: user.Gender,
                            filename: user.url,
                          };
                        });
          dispatch(resetQuery())
          dispatch(total(response.data.totalPages))             
          dispatch(ReadFromDB(formattedData));
      }
  } catch (error) {
      if (error.response.data.flag === 1) {
          alert("Email already exists");
      }
      if (error.response.data.flag === 2) {
          alert("Valid Mobile Number is required");
      }
      console.error("Error submitting form data:", error.response.data);
  }
    
  };


  

  return (
    <div>

    <button
      onClick={()=>{dispatch(toggleModal())}}
      className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Add user
    </button>


    {isModalOpen && (
      <div
        id="crud-modal"
        className="fixed top-0 left-0 right-0 z-50 w-full h-screen flex justify-center items-center bg-gray-900 bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Add User
              </h3>
            </div>

            <form className="p-4 md:p-5"  onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                <input
                    type="text"
                    name="_id"
                    value={formData._id}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                   
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
                    value={formData.FirstName}
                    onChange={handleInputChange}
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
                    value={formData.LastName}
                    onChange={handleInputChange}
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
                    value={formData.Email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label htmlFor="MobileNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="MobileNumber"
                    name="MobileNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Mobile Number"
                    value={formData.MobileNumber}
                    onChange={handleInputChange}
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
                          checked={formData.Hobbies.includes('Sports') || false}
                          onChange={handleHobbiesChange}
                        />
                        Sports
                      </label>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        <input
                          type="checkbox"
                          value="Art"
                          checked={formData.Hobbies.includes('Art') || false}
                          onChange={handleHobbiesChange}
                        />
                        Art
                      </label>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        <input
                          type="checkbox"
                          value="Game"
                          checked={formData.Hobbies.includes('Game') || false}
                          onChange={handleHobbiesChange}
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
                          checked={formData.Gender === 'male'}
                          onChange={handleInputChange}
                        />
                        Male
                      </label>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        <input
                          type="radio"
                          name="Gender"
                          value="female"
                          checked={formData.Gender === 'female'}
                          onChange={handleInputChange}
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

                    onChange={handlePhotoChange}
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
                dispatch(toggleModal());
                dispatch(reset());
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
