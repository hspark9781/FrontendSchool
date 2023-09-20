import React, { createContext, useState } from 'react';
import ThemeComponents from './components/ThemeComponents';
import ThemeSwitch from './components/ThemeSwitch';


const ThemeContext = createContext();

export default function DarkMode() {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            return prevTheme === 'light' ? 'dark' : 'light';
        })
    }

    return (
        <div>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <ThemeComponents/>
                <ThemeSwitch/>
            </ThemeContext.Provider>
        </div>
    )
}

export {DarkMode, ThemeContext}
