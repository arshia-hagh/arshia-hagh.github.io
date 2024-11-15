
import { FaCartShopping } from "react-icons/fa6";
import 'animate.css';
import Button from '../button/Button';
import Searchbar from '../searchbar/Searchbar';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
function NavBar() {
  const {login} =  useSelector((state: RootState) => state.Login)
  return (
    <header className='bg-primery--color  w-screen flex items-center p-5 justify-between' >
        <div className='flex gap-3 animate__animated   animate__fadeInUp items-center'>
          <Link to='/Auth'>
            <Button  className='px-5  transition-transform duration-[0.3s] hover:translate-y-[-3px] py-2'>
                {login ? 'Logout' : 'Login'}
            </Button>
          </Link>
            <FaCartShopping className='cursor-pointer transition-transform duration-[0.3s] hover:translate-y-[-3px] ' color='white' fontSize={30}/>
        </div>
        <Searchbar/>
 
    </header>
  )
}

export default NavBar