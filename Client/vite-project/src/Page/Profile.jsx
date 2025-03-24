import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {

  const profile = useSelector(state => state.profile)

  if(profile.Loading){
    return <h1> LOADING </h1>
  }
  else{
    return (
      <section className="bg-gray-50 min-h-screen dark:bg-gray-900 w-full ">
      <div className="flex flex-col items-center  px-6 py-8 mx-auto min-h-screen w-full lg:py-0">
        <div className="w-full max-w-lg bg-white rounded-lg shadow dark:border  dark:bg-gray-800 dark:border-gray-700 mt-10  ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Profile
            </h1>
            <h2  className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              First Name : {profile.FirstName}
            </h2>
            <h2  className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Last Name : {profile.LastName}
            </h2>
            <h2  className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Email : {profile.Email}
            </h2>
            <h2  className="text-lg font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Number : {profile.MobileNumber}
            </h2>
          </div>
        </div>
      </div>
    </section>
    )
  }
  

  
}

export default Profile
