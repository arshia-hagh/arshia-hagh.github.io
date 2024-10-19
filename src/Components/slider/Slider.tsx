import Button from "../../Components/button/Button";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import { Timer, Person } from "@mui/icons-material";
import react from "../../assets/how-to-use-svgs-react.avif";
import { useThemeContext } from '../../context/ThemeContext';
import { checkdark } from '../sideBar/SideBar';
function Slider() {
  const { theme } = useThemeContext();
  return (
    <div className="slide-container">
    <Slide>
      <div className="grid overflow-hidden grid-flow-col   lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        <div className={`flex text-center rounded ${checkdark(theme)}   p-5  flex-col items-center bg-cover justify-center `}>
          <div>
            <img src={react} alt="" className="rounded m-auto w-[100%]" />
            <h1 className="mt-3 text-xl ">React-Hooks-Form</h1>
          </div>
          <br />
          <div className="flex px-5 sm:p-0 w-[100%] justify-between ">
            <div className="flex gap-2">
              <Person />
              <h1>arshia-hagh</h1>
            </div>
            <div className="flex gap-2">
              <Timer />
              <span>5H</span>
            </div>
          </div>
          <br />
          <div className="text-center w-full">
            <Link to="/store">
              <Button className="w-full" variant="Sucsess">
                Go to Shope
              </Button>
            </Link>
          </div>
        </div>
        <div className={`flex text-center rounded ${checkdark(theme)}   p-5  flex-col items-center bg-cover justify-center `}>
          <div>
            <img src={react} alt="" className="rounded m-auto w-[100%]" />
            <h1 className="mt-3 text-xl ">React-Query</h1>
          </div>
          <br />
          <div className="flex px-5 sm:p-0 w-[100%] justify-between ">
            <div className="flex gap-2">
              <Person />
              <h1>arshia-hagh</h1>
            </div>
            <div className="flex gap-2">
              <Timer />
              <span>5H</span>
            </div>
          </div>
          <br />
          <div className="text-center w-full">
            <Link to="/store">
              <Button className="w-full" variant="Sucsess">
                Go to Shope
              </Button>
            </Link>
          </div>
        </div>
        <div className={`flex text-center rounded ${checkdark(theme)}   p-5  flex-col items-center bg-cover justify-center `}>
          <div>
            <img src={react} alt="" className="rounded m-auto w-[100%]" />
            <h1 className="mt-3 text-xl ">React-Props</h1>
          </div>
          <br />
          <div className="flex px-5 sm:p-0 w-[100%] justify-between ">
            <div className="flex gap-2">
              <Person />
              <h1>arshia-hagh</h1>
            </div>
            <div className="flex gap-2">
              <Timer />
              <span>1H</span>
            </div>
          </div>
          <br />
          <div className="text-center w-full">
            <Link to="/store">
              <Button className="w-full" variant="Sucsess">
                Go to Shope
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Slide>
    <br/>
    <Slide>
      <div className="grid overflow-hidden grid-flow-col  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
      <div className={`flex text-center rounded ${checkdark(theme)}   p-5  flex-col items-center bg-cover justify-center `}>
          <div>
            <img src={react} alt="" className="rounded m-auto w-[100%]" />
            <h1 className="mt-3 text-xl ">React-Hooks-Form</h1>
          </div>
          <br />
          <div className="flex px-5 sm:p-0 w-[100%] justify-between ">
            <div className="flex gap-2">
              <Person />
              <h1>arshia-hagh</h1>
            </div>
            <div className="flex gap-2">
              <Timer />
              <span>5H</span>
            </div>
          </div>
          <br />
          <div className="text-center w-full">
            <Link to="/store">
              <Button className="w-full" variant="Sucsess">
                Go to Shope
              </Button>
            </Link>
          </div>
        </div>
        <div className={`flex text-center rounded ${checkdark(theme)}   p-5  flex-col items-center bg-cover justify-center `}>
          <div>
            <img src={react} alt="" className="rounded m-auto w-[100%]" />
            <h1 className="mt-3 text-xl ">React-Hooks-Form</h1>
          </div>
          <br />
          <div className="flex px-5 sm:p-0 w-[100%] justify-between ">
            <div className="flex gap-2">
              <Person />
              <h1>arshia-hagh</h1>
            </div>
            <div className="flex gap-2">
              <Timer />
              <span>5H</span>
            </div>
          </div>
          <br />
          <div className="text-center w-full">
            <Link to="/store">
              <Button className="w-full" variant="Sucsess">
                Go to Shope
              </Button>
            </Link>
          </div>
        </div>
        <div className={`flex text-center rounded ${checkdark(theme)}   p-5  flex-col items-center bg-cover justify-center `}>
          <div>
            <img src={react} alt="" className="rounded m-auto w-[100%]" />
            <h1 className="mt-3 text-xl ">React-Hooks-Form</h1>
          </div>
          <br />
          <div className="flex px-5 sm:p-0   w-[100%] justify-between ">
            <div className="flex gap-2">
              <Person />
              <h1>arshia-hagh</h1>
            </div>
            <div className="flex gap-2">
              <Timer />
              <span>5H</span>
            </div>
          </div>
          <br />
          <div className="text-center w-full">
            <Link to="/store">
              <Button className="w-full" variant="Sucsess">
                Go to Shope
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Slide>
  </div>
  )
}

export default Slider