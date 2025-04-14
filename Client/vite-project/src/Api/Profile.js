import axiosInstance from "../axios/axios";
// all api calls for profiel of user
export const getProfile = async () => {      //to get detail
    try {
        const res = await axiosInstance.get('/Profile');
        return res.data;
    } catch (error) {
        console.error('Error fetching profile:', error);
        throw error;
    }
}
 
export const setProfile = async (data) => {    //to set detail or sign up
    try {
        const res = await axiosInstance.post('/Profile/Signup/', data);
        return res;
    } catch (error) {
        console.error('Error setting profile:', error);
        throw error;
    }
}

export const getLogin = async (Credential) => {   // to log in 
    try {
        const res = await axiosInstance.post('/Profile/login/', Credential);
        return res;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}
