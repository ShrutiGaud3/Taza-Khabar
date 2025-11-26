import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeContext from "../context/theme/ThemeContext";

const Navbar = () => {

    const {theme , dispatch} = useContext(ThemeContext)
   
    const handleThemeSwitch = () => {
        
        dispatch({
            type :"CHANGE_THEME"

        })
        localStorage.setItem('theme' , JSON.stringify(!theme))
    }


  return (
    <nav className={theme ? "bg-gray-900 border border-b shadow-md p-4 sticky top-0 z-50" : "bg-white   shadow-md p-4 sticky top-0 z-50"}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-extrabold text-green-600">Taza <span className="text-sky-700">Khabar</span> </h1>
        <button onClick={handleThemeSwitch} className="bg-blue-700 py-1 px-4 rounded-md text-white hover:bg-blue-800 duration-200 hover:cursor-pointer">
        {theme ? (
         <div className="flex items-center gap-2">
         LightMode <FaSun/>
        </div>
    ) :(
        <div className="flex items-center gap-2">
        DardMode  <FaMoon/>
        </div>
    )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;