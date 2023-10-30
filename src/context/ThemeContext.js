import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext()

export function ThemeContextProvider ({children}){
    const [ theme, updateTheme] = useState();

    useEffect(() =>{
        const windowsIsDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        if (windowsIsDarkTheme) {
            document.documentElement.classList.add('dark');
            updateTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            updateTheme('light');
        } 
    },[])

    const setTheme = ( theme ) => {
        if (theme === 'dark') {
            updateTheme(theme);
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', theme);
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.removeItem('theme');
            updateTheme(theme);
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