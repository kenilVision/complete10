import axiosInstance from "../axios/axios";
// all api calls for managing users
export const getSingleUser = async (id) =>{    // to get all user

    try{
        const res = await axiosInstance.get(`/User/${id}`);
        return res;
    }
    catch (error) {
        console.error('Error fetching profile:', error);
        return error;
    }

}

export const getUser = async (queryString) =>{    // to get one user

    try{
        const res = await axiosInstance.get(`/User?${queryString}`);
        return res;
    }
    catch (error) {
        console.error('Error fetching profile:', error);
        return  error;
    }

}


export const putUser = async (formDataToSubmit) => {    // to edit one user
    try {
        const res = await axiosInstance.put('/User', formDataToSubmit, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return res;
    } catch (error) {
        console.error('Error updating user profile:', error);
        throw error;
    }
}

export const postUser = async (formDataToSubmit) => {    // to add one user
    try {
        const res = await axiosInstance.post('/User', formDataToSubmit, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return res;
    } catch (error) {
        console.error('Error creating user profile:', error);
        throw error;
    }
}
