import { useState, useEffect, JSX } from 'react';
import { protectedUser } from '../../shared/api/usersApi';
import { IUser } from '../../shared/types/IUser';
import { AuthContext } from '../context/AuthContex';

interface Props { children: JSX.Element | JSX.Element[] }

const defaultState = {
  id: '',
  username: '',
  email: '',
  password: ''
}

export const AuthProvider = ({ children }: Props) => {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [user, setUser] = useState<IUser>(defaultState)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
        protectedUser().then((res) => {
            if (!res.error) {
                setIsAuth(true)
                setUser(res.user)
            } else {
                localStorage.removeItem('token')
            }
        }).catch((err) => {
            setError(err)
        }).finally(() => {
            setIsLoading(false)
        })
    } else {
        setIsLoading(false)
    }
  }, []);

  const authUser = (user: IUser) => {
    setIsAuth(true)
    setUser(user)
  }

  const logout = () => {
    setIsAuth(false)
    setUser(defaultState)
    localStorage.removeItem('token')
  }



  return (
    <AuthContext.Provider value={{isAuth, isLoading, user, error, authUser, logout}}>
      {!isLoading && children} 
    </AuthContext.Provider>
  );
};
