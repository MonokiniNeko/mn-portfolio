import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as user, faCode as code, faDiceD20 as diceD20, faAddressCard as addressCard } from '@fortawesome/free-solid-svg-icons';

function Navigation({language, currentElement, setCurrentElement}) {
    
    const links = [
        {
            link : "about",
            title : "About",
            icon : user,
            en : "About me",
            fr : "A propos"
        },
        {
            link : "projects",
            title : "Projects",
            icon : code,
            en : "My projects",
            fr : "Mes projets"
        },
        {
            link : "hobbies",
            title : "Hobbies",
            icon : diceD20,
            en : "My hobbies",
            fr : "Mes hobbies"
        },
        {
            link : "contact",
            title : "Contact",
            icon : addressCard,
            en : "Contact me",
            fr : "Contact"
        }  
    ]

    const handleClick = (e,id) => {
        e.preventDefault()
        document.getElementById(id).scrollIntoView({behavior : 'smooth'});
        // setCurrentElement(id)
    }

    return (
        <div className="navigation">
            <ul>
                {links.map((link, index) => (
                        <li key={index} className={(link.link=== currentElement) ? "selected": ""}>
                            <a href={"#"+link.link} title={link.title} onClick={(e) => handleClick(e,link.link)}>
                                <FontAwesomeIcon icon={link.icon} style={{position: "absolute"}}/>
                                <span>{link[language]}</span>
                            </a>
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default Navigation
