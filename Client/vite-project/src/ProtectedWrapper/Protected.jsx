import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ReadFromDB } from '../Slice/ProfileSlice';
import axiosInstance from '../axios/axios'; // Assuming axios instance is managed separately

const Protected = ({ children }) => {
  const Profile = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axiosInstance.get('/Profile/');

        if (response.data.success) {
          setIsAuthenticated(true);
          dispatch(ReadFromDB());
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        if (error.response?.status === 401) {
          console.error('Unauthorized access. Redirecting...');
        } else {
          console.error('Error verifying token:', error);
        }
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    if (Profile._id == 'Guest') {
      verifyToken();
    } else {
      setIsAuthenticated(true);
      setLoading(false);
    }
  },[Profile, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (!isAuthenticated) return <Navigate to="/Login" />;

  return children;
};

export default Protected;
