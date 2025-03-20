import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../axios/axios";

// Move the asynchronous logic outside the reducers
export const ReadFromDB = () => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const res = await axiosInstance.get('/Profile');
        console.log(res)
        dispatch(setProfile({
            _id: res.data._id,
            FirstName: res.data.FirstName,
            LastName: res.data.LastName,
            email: res.data.Email,
            MobileNumber: res.data.MobileNumber,
        }));
    } catch (err) {
        console.log(err);
    }
};

const ProfileSlice = createSlice({
    name: 'Profile',
    initialState: {
        _id: 'Guest',
        FirstName: '',
        LastName: '',
        email: '',
        MobileNumber: '',
    },
    reducers: {
        // Define a synchronous action to update the state
        setProfile: (state, action) => {
            state._id = action.payload._id;
            state.FirstName = action.payload.FirstName;
            state.LastName = action.payload.LastName;
            state.email = action.payload.email;
            state.MobileNumber = action.payload.MobileNumber;
        }
    }
});

export const { setProfile } = ProfileSlice.actions;

export default ProfileSlice.reducer;
