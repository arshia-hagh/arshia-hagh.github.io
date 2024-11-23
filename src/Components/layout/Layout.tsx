import React from 'react'
import NavBar from '../navbar/NavBar'
interface TChildren{
    children: React.ReactNode
}
function Layout({children} : TChildren) {
  return (
    <>
        <NavBar/>
        {children}
    </>
  )
}

export default Layout