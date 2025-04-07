import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    const toggleTheme = () => {
        if (theme == "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
            document.body.style.backgroundColor = '#09090b';
        } else {
            setTheme("light");
            localStorage.setItem("theme", "light");
            document.body.style.backgroundColor = '#f8fafc';
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };