import React, { useEffect, useState } from 'react';
import { Navigate  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ReadFromDB } from '../Slice/ProfileSlice';

const Protected = ({ children }) => {
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');
      if (!token ) {
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


  if (loading) {
    return <h1>Loading...</h1>; 
  }

  
  if (!localStorage.getItem('token')) {
    return <Navigate to="/Login" replace />;
  }

  return children; 
};

export default Protected;
