import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const Protected = ({ children }) => {
  const Profile = useSelector(state => state.profile);
  const dispatch = useDispatch()
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const verifyToken = async () => {
      try {
       
        const response = await axios.get(`http://localhost:5000/Profile/`, {
          headers: {
            Authorization: `${localStorage.getItem('token')}`,
          },
        });

        if (response.data.success) {
          setIsAuthenticated(true);
          console.log(response.data)
        } else {
          setIsAuthenticated(false); 
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        setIsAuthenticated(false); 
      } finally {
        setLoading(false); 
      }
    };

    if (!Profile) {
      verifyToken(); 
    } else {
      setIsAuthenticated(true);
      setLoading(false);
    }
  }, [Profile]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!isAuthenticated) {
    return <Navigate to="/Login" />;
  }

  return children; 
};

export default Protected;
