import axiosInstance from "../axios/axios";

export const getSingleUser = async (id) =>{

    try{
        const res = await axiosInstance.get(`/User/${id}`);
        return res;
    }
    catch (error) {
        console.error('Error fetching profile:', error);
        throw error;
    }

}

export const getUser = async (queryString) =>{

    try{
        const res = await axiosInstance.get(`/User?${queryString}`);
        return res;
    }
    catch (error) {
        console.error('Error fetching profile:', error);
        throw error;
    }

}


export const putUser = async (formDataToSubmit) => {
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

export const postUser = async (formDataToSubmit) => {
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
