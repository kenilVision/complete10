import { configureStore } from '@reduxjs/toolkit';
import ProfileSlice from '../Slice/ProfileSlice';

const store = configureStore({
    reducer: {
        profile: ProfileSlice,
    }
});

export default store;
