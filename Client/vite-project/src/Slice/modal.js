import { createSlice } from "@reduxjs/toolkit";



const UserSlice = createSlice({
    name: 'User',

    initialState : false,

    reducers : {
        toggleModal:(state,action)=>!state
    }
})

export const {toggleModal} = UserSlice.actions
export default UserSlice.reducer