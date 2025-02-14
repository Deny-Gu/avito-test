import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { useAuth } from '../context/AuthContex';

interface Props {
  children?: ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {
  const { isAuth } = useAuth()

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};