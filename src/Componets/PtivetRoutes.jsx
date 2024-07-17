import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './AuthContextProvider';

export default function PrivateRoute({ child }) {

  const { isAuth } = useContext(AuthContext)

  if (!isAuth) {
    return <Navigate to="/login" />
  }

  return <>
    {child}
  </>

}
