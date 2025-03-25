import React from 'react'
import Detail from '../Component/Profile/Detail'
import { useSelector } from 'react-redux'


function Profile() {
  const profile = useSelector(state => state.profile)
  if(profile.Loading){
    return <h1> LOADING </h1>
  }
  else{
    return <Detail/>
  }
  

  
}

export default Profile
