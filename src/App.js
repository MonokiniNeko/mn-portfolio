import React, { useEffect, useState } from 'react';
// STYLES
import './App.css';
import './App.desktop.css';
import './App.mobile.css';
// COMPONENTS
import Header from './components/Header';
import Menu from './components/Menu';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Content from './components/Content';
// UTILS
import {checkStorageTheme, checkStorageLanguage} from './utils/checkStorage'



function App() {

  // HOOKS and STATES
  const [theme, setTheme] = useState("dark");
  const [antiTheme, setAntiTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  const [scrollPosition, setScrollPosition] = useState(0); // Y position to position the .selected className
  const [currentElement, setCurrentElement] = useState('about'); // Current .selected classname
  const [isMobile, setIsMobile] = useState(true); // TRUE if width is less than 601px and FALSE if 601 or more

  // variables and functions declarations
  
  const handleScroll = () => { // calculate the Y position
    const position = window.pageYOffset;
    setScrollPosition(position);
    return position;
  };



  // ONLOAD
  useEffect(() => {

    document.title = " Gwenaël \"Monokini Neko\" Halasz's portfolio";

    // check and set the theme
    const currentTheme = checkStorageTheme()
    setTheme(currentTheme);
    setAntiTheme((currentTheme === "dark" ? "light" : "dark"))

    // check and set the language
    const currentLanguage = checkStorageLanguage()
    if (currentLanguage !== "en") document.documentElement.lang = currentLanguage;
    setLanguage(currentLanguage)

    // check if it's mobile or desktop 
    const handleResize = () => {
      let output = (window.innerWidth < 601);
      if (isMobile !== output) setIsMobile(output);
      return output;
    };
    handleResize();
    // Create EventListener for the scrolling state & resizing
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);


    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
    }; 
  },[isMobile]);

  // UPDATE
  const updateTheme = () => {
    const updatedTheme = (theme === "light" ? "dark" : "light")
    localStorage.setItem("theme", updatedTheme)
    setTheme(updatedTheme)
    setAntiTheme((updatedTheme === "dark" ? "light" : "dark"))

  }
  const updateLanguage = () => {
    const newLanguage = (language === "en" ) ? "fr" : "en";
    document.documentElement.lang = newLanguage;
    localStorage.setItem("language", newLanguage)
    setLanguage(newLanguage)
  }

  // RENDER
  return (
    <div className={"App "+theme}>
      <Header 
        scrollPosition={scrollPosition}
        currentElement={currentElement} 
        theme={theme}
      />
      <Menu>
        <Navigation
          language={language}
          currentElement={currentElement}
          setCurrentElement={setCurrentElement}
        />
        <Footer 
          theme={theme}
          antiTheme={antiTheme}
          updateTheme={updateTheme}
          language={language}
          updateLanguage={updateLanguage}
          />
      </Menu>
      <Content 
        setCurrentElement={setCurrentElement}
        language={language}
        isMobile={isMobile}
        theme={theme}
      />
    </div>
  );
}

export default App;
