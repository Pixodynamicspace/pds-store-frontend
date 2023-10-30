import React from 'react';
import { CiLight , CiDark} from 'react-icons/ci'
import { useThemeContext } from '../../context/ThemeContext';

export const ThemeToggleBtn = () => {
    const { theme, setTheme } = useThemeContext()
  return (
    <div>
        <button onClick={()=> setTheme(theme === "dark"? 'light' : "dark")} className="dark:text-white text-2xl" type="button">{theme === "dark"? <CiLight/> : <CiDark/>}</button>
    </div>
  )
}
