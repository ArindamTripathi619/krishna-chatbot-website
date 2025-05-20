import React, { createContext } from "react";

export const ThemeContext = createContext({ dark: true });

export const ThemeProvider = ({ children }) => {
    // Always set dark mode on <html> and <body>
    React.useEffect(() => {
        document.documentElement.classList.add("dark");
        document.body.classList.add("dark");
    }, []);

    return (
        <ThemeContext.Provider value={{ dark: true }}>
            {children}
        </ThemeContext.Provider>
    );
};