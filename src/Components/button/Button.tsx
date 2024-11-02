import React, { ComponentProps } from 'react'
type TButton = ComponentProps<'button'> & {
    children: React.ReactNode
}
function Button({children,className,...rest} : TButton) {
  return (
    <button {...rest} className={`text-black  font-bold ${className}  rounded-md bg-secondery--color `}>{children}</button>
  )
}

export default Button