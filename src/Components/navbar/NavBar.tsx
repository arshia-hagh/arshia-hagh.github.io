import { FaCartShopping } from "react-icons/fa6";
import "animate.css";
import Button from "../button/Button";
import Searchbar from "../searchbar/Searchbar";
import { Link } from "react-router-dom";

import { useLoginContext } from "../../Context/LoginContext";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
function NavBar() {
  const { login, handleLogout } = useLoginContext();
  const [flag, setFlag] = useState<boolean>(false);
  const { t } = useTranslation();
  useEffect(() => {
    const handlescroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 1000) {
        setFlag(true);
      } else {
        setFlag(false);
      }
    };
    window.addEventListener("scroll", handlescroll);

    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);
  return (
    <header
      className={`bg-primery--color sticky  translate-x-0 top-0 ${
        flag ? "translate-y-[-100%]" : "translate-y-0"
      } ${
        i18n.language === "en" ? "ltr" : ""
      } transition-all z-[100] min-w-[100vw] `}
    >
      <div className="lg:w-full  md:w-full flex  items-center lg:p-6 md:p-6  sm:py-9 lg:justify-between md:justify-between sm:justify-around sm:w-full">
      <div className="flex lg:gap-5 md:gap-5 sm:gap-2 animate__animated    animate__fadeInUp items-center">
        <Searchbar />
        <div className="rounded border-[2px] w-20 relative  flex   border-[#c86305]">
          <label
            className={`bg-secondery--color   transition-transform  inline-block z-[-1]  ${
              i18n.language === "fa" ? "translate-x-0" : "translate-x-[100%]"
            }   absolute     h-full  w-[50%]`}
          ></label>
          <span
            onClick={() => i18n.changeLanguage("fa")}
            className={`cursor-pointer ${
              i18n.language === "fa" ? "text-black" : ""
            }  text-center  w-full `}
          >
            FA
          </span>
          <span
            onClick={() => i18n.changeLanguage("en")}
            className={`cursor-pointer  ${
              i18n.language === "en" ? "text-black" : ""
            } text-center w-full`}
          >
            EN
          </span>
        </div>
      </div>
      <h1 className="uppercase text-nowrap lg:relative md:relative  sm:absolute lg:top-0 md:top-0 sm:top-2 lg:text-2xl md:text-xl sm:text-lg tracking-wide">
        {t("title")}
      </h1>

      <div className="flex  lg:gap-5 md:gap-5 sm:gap-2 animate__animated   animate__fadeInUp items-center">
        <FaCartShopping
          className="cursor-pointer transition-transform duration-[0.3s] hover:translate-y-[-3px] "
          color="white"
          fontSize={30}
        />
        <Link to="/Auth">
          <Button
            onClick={() => {
              login ? handleLogout() : "";
            }}
            className="lg:px-5 lg:py-2 md:py-2 md:px-5  sm:py-2 sm:px-3 transition-transform duration-[0.3s] hover:translate-y-[-3px] "
          >
            {login ? t("Logout") : t("Login")}
          </Button>
        </Link>
      </div>
      </div>
    </header>
  );
}

export default NavBar;
