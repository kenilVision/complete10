import { createSlice } from "@reduxjs/toolkit";



const UserSlice = createSlice({
    name: 'User',

    initialState : [],

    reducers : {
        ReadFromDB:(state,action)=>{
            return action.payload;
        }
    }
})

export const {ReadFromDB} = UserSlice.actions
export default UserSlice.reducer