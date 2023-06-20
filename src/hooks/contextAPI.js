import React, { createContext, useContext, useEffect, useState } from 'react';


const AppContext = createContext(null);


const Provider = ({ children }) => {
    const [colorTheme, setColorTheme] = useState('light-mode')
    // console.log("🚀 ~ file: contextAPI.js:9 ~ Provider ~ colorTheme", colorTheme)
    const [isTemplateOpen, setIsTemplateOpen] = useState(false);
    const [changeTem, setChangeTem] = useState('template-5');

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        console.log("🚀 ~ file: contextAPI.js:14 ~ useEffect ~ currentTheme", currentTheme)
        setColorTheme(currentTheme?currentTheme:'light-mode');
        // if (currentTheme) {
        // }
        // else {
        //     localStorage.setItem('theme', 'light-mode');
        //     setColorTheme('light-mode')
        // }
    }, [colorTheme]);
    // console.log("🚀 ~ file: contextAPI.js:25 ~ Provider ~ colorTheme", colorTheme);

    // handle theme
    const handleTheme = (theme) => {
        setColorTheme(theme);
        localStorage.setItem('theme', theme);
    };

    useEffect(() => {
        const currentTemplate = localStorage.getItem('template');
        setChangeTem(currentTemplate);
    }, [changeTem]);

    // Change template...
    const handleTemp = (template) => {
        setChangeTem(template);
        localStorage.setItem('template', template);
    }
    // Open and close theme wrapper ...
    const openTem = () => {
        setIsTemplateOpen(true)
    }
    const closeTem = () => {
        setIsTemplateOpen(false)
    }
    return (
        <AppContext.Provider
            value={{ openTem, closeTem, handleTemp, handleTheme, isTemplateOpen, colorTheme, changeTem, setIsTemplateOpen }}
        >
            <div className={`wrapper ${colorTheme === 'light-mode' ? 'light-mode' : 'dark-mode'}`} id={changeTem}>
                {children}
            </div>
        </AppContext.Provider>
    )
};


const useApplicationContext = () => {
    return (useContext(AppContext))
};
export { useApplicationContext, Provider };

