import React, {useEffect, useState} from 'react'

export const ThemeToggleBtn = () => {
    const [theme, setTheme] = useState(null);
    // const initialTheme = JSON.parse(localStorage.getItem('theme'))
    useEffect(() =>{
        const windowsIsDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        if (windowsIsDarkTheme) {
            setTheme('dark');
        }
    },[])
    useEffect(() => {

        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light')
        }
    }, [theme])
  return (
    <div>
        <button onClick={()=> setTheme(theme === "dark"? 'light' : "dark")} className="dark:text-white" type="button">{theme}</button>
    </div>
  )
}
