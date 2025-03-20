import { createSlice } from "@reduxjs/toolkit";



const UserSlice = createSlice({
    name: 'Queries',

    initialState : { 
        total:0,
        page:1,
        limit:3,
        search:"",
        sort:""},

    reducers : {
        set:(state,action)=>{
            const { name, value } = action.payload;
            console.log(name + value)
            state[name] = value; 
            
        },
        resetQuery:(state,action)=>{
            state.page = 1
            state.search = ""
            state.sort = ""
        },
        total:(state,action) =>{
            state.total = action.payload
        },
        page:(state,action)=>{
            console.log(action.payload)
            state.page = action.payload
        }   
    }
})

export const { set ,resetQuery, total,page} = UserSlice.actions
export default UserSlice.reducer