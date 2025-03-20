import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {ReadFromDB}  from '../../Redux/Slice/UserSlice.js'
import {updateProfileFieldEdit} from '../../Redux/Slice/FormSlice';
import {toggleModal} from '../../Redux/Slice/modal.js'
import {resetQuery,total} from '../../Redux/Slice/Queries'
import axios from'axios'

function Table() {
    
    const profile = useSelector(state => state.user)
    const dispatch = useDispatch();
    const quries =  useSelector(state => state.queries)
     useEffect(()=>{
        const fetchData = async () => {
            try {
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
              dispatch(total(response.data.totalPages))
              dispatch(ReadFromDB(formattedData));
            } catch (error) {
              console.error('Error fetching user data:', error);
            }
          };
      
          fetchData();
     },[dispatch , quries.page ,quries.sort ,quries.search ])

    
    
     const editloader =  async (id) =>{
        try{
            
            const response = await axios.get(`http://localhost:5000/User/${id}`);
            const formattedData =  {
                  _id: response.data._id,
                  FirstName: response.data.FirstName,
                  LastName: response.data.LastName,
                  Email: response.data.Email,
                  MobileNumber: response.data.MobileNumber,
                  Hobbies: response.data.Hobbies,
                  Gender: response.data.Gender,
                }
                console.log(formattedData)
                dispatch(updateProfileFieldEdit(formattedData))
                dispatch(toggleModal())
              
        }
        catch(err){
            console.error('Error deleting user:', err);
        }

     }
     const del = async (_id) => {
        try {
            await axios.delete(`http://localhost:5000/User/${_id}`);  

            const response = await axios.get('http://localhost:5000/user');
      
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
           
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };
    
    
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Profile Pic
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Firstname
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Lastname
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Mobilenumber
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Gender
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Hobbies
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                    profile.map((user)=>(
                        
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200" key={user._id}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="rounded  ">
                            <img src={user.filename} alt="profile" className="h-12 w-12 rounded-full" />
                        </div>
                        </th>
                        <td className="px-6 py-4">
                            {user.FirstName}
                        </td>
                        <td className="px-6 py-4">
                            {user.LastName}
                        </td>
                        <td className="px-6 py-4">
                            {user.Email}
                        </td>
                        
                        <td className="px-6 py-4">
                        {user.MobileNumber}
                        </td>
                        <td className="px-6 py-4">
                            {user.Gender}
                        </td>
                        <td className="px-6 py-4">
                            {user.Hobbies}
                        </td>
                        <td className="px-6 py-4">
                        <button
                        className="p-0 text-gray-600 hover:text-gray-800 "
                        type="button"
                        onClick={() => editloader(user._id)}
                        >
                        <span className="">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pencil-fill"
                            viewBox="0 0 16 16"
                            >
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                            </svg>
                        </span>
                        </button>

                        <button
                        className="p-0 text-gray-600 hover:text-gray-800 "
                        onClick={() => del(user._id)}
                        >
                        <span className="">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash3"
                            viewBox="0 0 16 16"
                            >
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                            </svg>
                        </span>
                        </button>

                        </td>
                    </tr>
                ))
                }
                </tbody>
            </table>
        </div>

    )
}

export default Table
