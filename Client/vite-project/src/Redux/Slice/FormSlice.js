import { createSlice } from "@reduxjs/toolkit";


const FormSlice = createSlice({
    name: 'Form',

    initialState : {
        _id: '',
        FirstName: '',
        LastName: '',
        email: '',
        MobileNumber: '',
        Hobbies: [],
        Gender: '',
    },

    reducers : {
        AddToDB : (state,action)=>{},
        ReadFromDB : (state,action)=>{},
        UpdateToDB : (state,action)=>{},
        DeleteFromDB:(state,action)=>{}
    }
})


export const {AddToDB,ReadFromDB,UpdateToDB,DeleteFromDB} = FormSlice.actions

export default FormSlice.reducer