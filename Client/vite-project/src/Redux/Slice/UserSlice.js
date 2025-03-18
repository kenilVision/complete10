import { createSlice } from "@reduxjs/toolkit";


const UserSlice = createSlice({
    name: 'User',

    initialState : [],

    reducers : {
        ReadFromDB:(State,action)=>{}
    }
})

export const {ReadFromDB} = UserSlice.actions
export default UserSlice.reducer