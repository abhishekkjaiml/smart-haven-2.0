import { pre } from "framer-motion/client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const getIntitalTheme = () => {
        const saveTheme = localStorage.getItem('smarthaven_theme');

        if(saveTheme === 'dark'){
            return true;
        }

        if(saveTheme === 'light'){
            return false
        }

        return false
    }

    const [darkMode, setDarkMode] = useState(getIntitalTheme);

    // Save theme

    useEffect(() => {
        localStorage.setItem(
            'smarthaven_theme',
            darkMode ? 'dark' : 'light'
        )
    }, [darkMode])

    const toggleTheme = () => {
        setDarkMode((prev) => !prev);
    }

    return(
        <ThemeContext.Provider  value={{darkMode, setDarkMode, toggleTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext);

export {ThemeProvider, useTheme}