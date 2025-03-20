import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux'


const Protected = ({ children }) => {
  const  Profile  = useSelector(state=>state.profile);
  if (!Profile   ) {
    
    return <Navigate to="/Login" />;
  }

  
  return children;
};

export default Protected;
