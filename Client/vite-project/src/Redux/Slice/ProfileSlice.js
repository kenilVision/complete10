import { createSlice } from "@reduxjs/toolkit";


const ProfileSlice = createSlice({
    name: 'Profile',

    initialState : {
        _id: '',
        FirstName: '',
        LastName: '',
        email: '',
        MobileNumber: ''
    },

    reducers : {
        AddToDB   :(state,action)=>{},
        ReadFromDB:(State,action)=>{}
    }
})


export const {AddToDB,ReadFromDB} = ProfileSlice.actions

export default ProfileSlice.reducer