import React, { ComponentProps } from 'react'
type TButton = ComponentProps<'button'> & {
    children: React.ReactNode
}
function Button({children,...rest} : TButton) {
  return (
    <button {...rest} className='text-black rounded-md bg-secondery--color'>{children}</button>
  )
}

export default Button