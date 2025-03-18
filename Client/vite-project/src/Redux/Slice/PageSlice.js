import { createSlice } from "@reduxjs/toolkit";


const PageSlice = createSlice({
    name: 'Page',

    initialState : 0,

    reducers : {
        ReadFromDB:(State,action)=>{}
    }
})

export const {ReadFromDB} = PageSlice.actions
export default PageSlice.reducer