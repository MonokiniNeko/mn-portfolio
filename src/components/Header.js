import React from 'react'
import Logo from './Logo'

function Header({scrollPosition, currentElement, theme}) {

    const colorTheme = () => {
        return (theme === "dark") ?  '#f0db4f' : '#323330';
    }

    const handleEyesColors = () => {
        let colors;
        switch(currentElement) {
            case 'about' : 
                colors = { left : "#e10052", right : "#0000ff"};
                break;
            case 'projects' : 
                colors = { left : "#0000ff", right : colorTheme()};
                break;
            case 'hobbies' : 
                colors = { left : "#00ff00", right : "#e10052"};
                break;
            case 'contact' : 
                colors = { left : colorTheme(), right : "#e10052"}; 
                break;
            default: 
                colors = { left : "#e10052", right : "#0000ff"};
                break;
        }
        return colors;
    }
    return (
        <header className={(scrollPosition === 0)? "start" : ""}>
            <Logo
                background={(theme === "light") ? "#f0db4f" : "#323330" }
                head={(theme === "light") ? "#323330" : "#f0db4f"}
                backgroundOpacity={"0"}
                left={handleEyesColors().left}
                right={handleEyesColors().right}
            />
        </header>
    )
}

export default Header
