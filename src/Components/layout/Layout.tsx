import React from 'react'
import NavBar from '../navbar/NavBar'
interface TChildren{
    children: React.ReactNode
}
function Layout({children} : TChildren) {
  return (
    <div>
        <NavBar/>
        {children}
    </div>
  )
}

export default Layout