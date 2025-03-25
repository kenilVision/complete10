import axiosInstance from "../axios/axios";

export const getProfile = async () => {
    try {
        const res = await axiosInstance.get('/Profile');
        return res.data;
    } catch (error) {
        console.error('Error fetching profile:', error);
        return error;
    }
}

export const setProfile = async (data) => {
    try {
        const res = await axiosInstance.post('/Profile/Signup/', data);
        return res;
    } catch (error) {
        console.error('Error setting profile:', error);
        throw error;
    }
}

export const getLogin = async (Credential) => {
    try {
        const res = await axiosInstance.post('/Profile/login/', Credential);
        return res;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}
