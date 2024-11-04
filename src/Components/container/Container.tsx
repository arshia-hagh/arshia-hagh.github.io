import React from 'react'
interface TChildren {
    children: React.ReactNode
}
function Container({children} : TChildren) {
  return (
    <div className='lg:w-[70%] m-auto md:w-[80%] sm:w-screen'>
        {children}
    </div>
  )
}

export default Container