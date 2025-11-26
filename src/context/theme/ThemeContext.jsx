import { createContext, useReducer } from "react";
import { ThemeReducer } from "./ThemeReducer";

const ThemeContext = createContext()

const themeExist = JSON.parse(localStorage.getItem('theme'))



export const ThemeProvider = ({children}) =>{

    const initialState = {
        theme : themeExist || false
    }


    const [state , dispatch] = useReducer(ThemeReducer , initialState)


    return(
        <ThemeContext.Provider value={{...state , dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext