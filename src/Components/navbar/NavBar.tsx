import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Button from '../button/Button';
function NavBar() {
  return (
    <header className='bg-primery--color w-screen flex items-center px-5 justify-between' >
        <div className='flex'>
            <Button>
                LogIn
            </Button>
            <FaCartShopping/>
        </div>
        <form action="">
            <input type="text" placeholder='search...' name="" id="" />
        </form>
    </header>
  )
}

export default NavBar