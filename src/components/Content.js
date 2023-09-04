import React, {useEffect} from 'react';

// ./sections
import About from './sections/About';
import Projects from './sections/Projects';
import Hobbies from './sections/Hobbies';
import Contact from './sections/Contact';

// Styles
import './Content.css';

function Content({ setCurrentElement, language, isMobile, theme }) {
    // VARIABLE DECLARATIONS
    //   Sections
    let elAbout 
    let elProjects 
    let elHobbies
    let elContact



    // SCROLLS EVENT
    const handleScroll = () => {
        if (isElementVisible(elContact)) setCurrentElement('contact')
        else if (isElementVisible(elHobbies)) setCurrentElement('hobbies')
        else if (isElementVisible(elProjects)) setCurrentElement('projects')
        else setCurrentElement('about')
    }

    // check is the given element is visible for more than half the window height
    const isElementVisible = (el) => {
        let currentEl = (el === null) ? elAbout : el
        let rect = currentEl.getBoundingClientRect();
        let elemTop = rect.top;
        let elemBottom = rect.bottom;
        // the element take at least one half of the screen
        let isVisible = elemTop < (window.innerHeight - (window.innerHeight / 2)) && elemBottom >= 0;
        return isVisible;

    }

    // ONLOAD
    useEffect(() => {
        // eslint-disable-next-line
        elAbout = document.getElementById('about');
        // eslint-disable-next-line
        elProjects = document.getElementById('projects');
        // eslint-disable-next-line
        elHobbies = document.getElementById('hobbies');
        // eslint-disable-next-line
        elContact = document.getElementById('contact');
        
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }; 
    },[])

    return (
        <div className="content" id="content">
            <section className={"about"} id="about">
                <About 
                language={language}
                theme={theme}
                isMobile={isMobile}
                />
            </section>
            <section className={"projects"} id="projects">
                <Projects language={language} isMobile={isMobile} theme={theme}/>
            </section>
            <section className={"hobbies"} id="hobbies">
                <Hobbies language={language}/>
            </section>
            <section className={"contact"} id="contact">
                <Contact language={language}/>
            </section>
        </div>
    )
}

export default Content
