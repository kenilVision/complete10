import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Move the asynchronous logic outside the reducers
export const ReadFromDB = () => async (dispatch) => {
    const token = localStorage.getItem('token').replace(/"/g, '');
    try {
        const res = await axios.get('http://localhost:5000/Profile/', {
            headers: {
                'Authorization': `${token}`
            }
        });

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
        _id: '',
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
