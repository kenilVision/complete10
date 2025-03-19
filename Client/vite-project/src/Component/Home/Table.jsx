import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {ReadFromDB}  from '../../Redux/Slice/UserSlice.js'
import axios from'axios'

function Table() {
    
    const profile = useSelector(state => state.user)
    const dispatch = useDispatch();

     useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await axios.get('http://localhost:5000/user');
              console.log(response);
      
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
      
              console.log(formattedData);
              dispatch(ReadFromDB(formattedData));
            } catch (error) {
              console.error('Error fetching user data:', error);
            }
          };
      
          fetchData();
     },[dispatch])
    
    
    
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
                    </tr>
                ))
                }
                </tbody>
            </table>
        </div>

    )
}

export default Table
