import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({children,allowedRoles}) => {
  
  const {user,token} = useContext(AuthContext);
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  if(allowedRoles && !allowedRoles.includes(user.role)) {
    return <div className='p-8'>Access denied</div>
  }

  return children;
}

export default ProtectedRoute