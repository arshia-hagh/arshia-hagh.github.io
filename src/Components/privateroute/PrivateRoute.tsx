import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
import { Navigate, Outlet } from 'react-router-dom'
import { useLoginContext } from '../../Context/LoginContext'
function PrivateRoute() {
    const {login} = useLoginContext()
  return (
    <>
    {login ? <Outlet/> : <Navigate to='/Auth'/>}
    </>
  )
}

export default PrivateRoute