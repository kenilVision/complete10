import { configureStore } from '@reduxjs/toolkit';
import FormSlice from './Slice/FormSlice';
import UserSlice from './Slice/UserSlice';
import ProfileSlice from './Slice/ProfileSlice';
import PageSlice from './Slice/PageSlice';
import modal from './Slice/modal'
import Queries from './Slice/Queries';

const store = configureStore({
    reducer: {
        form: FormSlice,
        user: UserSlice,
        profile: ProfileSlice,
        page: PageSlice,
        modal:modal,
        queries:Queries
    }
});

export default store;
