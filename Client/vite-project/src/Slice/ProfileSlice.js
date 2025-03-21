import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios/axios";

export const ReadFromDB = createAsyncThunk("ReadFromDB", async () => {
    const res = await axiosInstance.get('/Profile');
    return res.data;
});

const ProfileSlice = createSlice({
    name: 'Profile',
    initialState: {
        loading: false,
        _id: 'Guest',
        FirstName: '',
        LastName: '',
        Email: '',
        MobileNumber: '',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(ReadFromDB.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(ReadFromDB.fulfilled, (state, action) => {
            state.loading = false;
            state._id = action.payload._id;
            state.FirstName = action.payload.FirstName;
            state.LastName = action.payload.LastName;
            state.Email = action.payload.Email;
            state.MobileNumber = action.payload.MobileNumber;
        });
        builder.addCase(ReadFromDB.rejected, (state, action) => {
            state.loading = false;
            console.error("Error", action.error.message);
        });
    }
});

export default ProfileSlice.reducer;
