import React, { ComponentProps } from 'react'
type TChildren = ComponentProps<'div'> &  {
    children: React.ReactNode
}
function Container({children,className,...rest} : TChildren) {
  return (
    <div {...rest} className={`lg:w-[70%] m-auto md:w-[80%] ${className} sm:w-screen`}>
        {children}
    </div>
  )
}

export default Container