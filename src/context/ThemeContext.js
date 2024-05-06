import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const ThemeContext = createContext()

export function ThemeContextProvider ({children}){
    const [ theme, updateTheme] = useState();

    useEffect(() =>{
        const userTheme = Cookies.get("theme");
        if (userTheme) {
            setTheme(JSON.parse(userTheme));
        }else{
            const windowsIsDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
            if (windowsIsDarkTheme) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        }
         
    },[])

    const setTheme = ( theme ) => {
        if (theme === 'dark') {
            updateTheme(theme);
            document.documentElement.classList.add('dark');
            Cookies.set('theme', theme);
        } else {
            updateTheme(theme);
            document.documentElement.classList.remove('dark');
            Cookies.set('theme', theme);
        }
    }

   

    return(
        <ThemeContext.Provider value={{ theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useThemeContext () {
    return useContext(ThemeContext);
}