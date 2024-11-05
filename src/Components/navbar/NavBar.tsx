import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import 'animate.css';
import Button from '../button/Button';
function NavBar() {
    const [query,setQuery] = useState<string>('')
  return (
    <header className='bg-primery--color  w-screen flex items-center p-5 justify-between' >
        <div className='flex gap-3 animate__animated   animate__fadeInUp items-center'>
            <Button  className='px-5  transition-transform duration-[0.3s] hover:translate-y-[-3px] py-2'>
                LogIn
            </Button>
            <FaCartShopping className='cursor-pointer transition-transform duration-[0.3s] hover:translate-y-[-3px] ' color='white' fontSize={30}/>
        </div>
        <form action="">
            <input type="text" className='outline-none  px-2 py-1 border-2 rounded-2xl border-[#c86305] bg-transparent text-white' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search...' name="" id="" />
        </form>
    </header>
  )
}

export default NavBar