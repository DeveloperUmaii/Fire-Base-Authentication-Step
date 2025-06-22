// যদি প্রাইভেট রাউট থাকে
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AutheProvidor/AuthProvider';
import { useContext } from 'react';


const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext); // check if user is logged in
  const location = useLocation();

  if (user) {
    return children;
  }

  return <Navigate to="/register" state={{ from: location }} replace />;
};

export default PrivateRoute;
