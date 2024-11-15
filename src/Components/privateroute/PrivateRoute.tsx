import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import { login } from '../../Redux/LoginSlice'
import { Navigate, Outlet } from 'react-router-dom'
function PrivateRoute() {
    const {Login} = useSelector((state : RootState)=> state)
  return (
    <>
    {Login ? <Outlet/> : <Navigate to='/Auth'/>}
    </>
  )
}

export default PrivateRoute