import React, { useEffect, useState } from 'react';
import { Navigate ,useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ReadFromDB } from '../Slice/ProfileSlice';

const Protected = ({ children }) => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const location = useLocation(); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      const loggedIn = localStorage.getItem('loggedIn');
      
      if (!token || !loggedIn) {
        setLoading(false); 
        return;
      }
      try {
         dispatch(ReadFromDB());
      } catch (error) {
        console.error('Error verifying token:', error);
        localStorage.clear(); 
      } finally {
        setLoading(false); 
      }
    };

    if (!profile._id || profile._id === 'Guest') {
      verifyToken();
    } else {
      setLoading(false); 
    }
  },[]);

  const loginTime = localStorage.getItem('loginTime');
  const currentTime = new Date().getTime();

  
  if (loginTime && currentTime - loginTime > 10 * 1000) {
        localStorage.clear();
        return <Navigate to="/Login" />;
      }
    

  if (loading) {
    return <h1>Loading...</h1>; 
  }

  
  if (!localStorage.getItem('loggedIn')) {
    return <Navigate to="/Login" replace />;
  }

  return children; 
};

export default Protected;
