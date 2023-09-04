import React from 'react';

import parse from 'html-react-parser';
import './Book.css';

function Book({ openBook, setOpenBook, language, content, ...props }) {

    const handleClose = () => {
        setOpenBook(false)
    }

    const hintClose = {
        fr : 'Cliquez sur le livre pour le fermer',
        en : 'Click on the book to close it'
    }


    return (
        <div id="Book" className={openBook?"open":"close"} onClick={handleClose}>
            <div className="book"  onClick={handleClose}>
                <div className="back" style={{backgroundColor : "#323330"}}></div>
                <div className="page6">
                    <span>{parse(content.description[language])}</span>
                    
                </div>
                <div className="page5">
                    <span className="inverse">
                        <h4>{content.title[language]}</h4>
                        <img src={`images/hobbies/${content.image}`} alt={content.title[language] + " illustration"}/>         
                    </span>
                    <span className="hintClose">{hintClose[language]}</span>
                </div>
                <div className="page4"></div>
                <div className="page3"></div>
                <div className="page2"></div>
                <div className="page1"></div>
                <div className="front" style={{backgroundColor : "#f0db4f"}}></div>
                
                <div className="mobile-book">
                    <h4>{content.title[language]}</h4>
                    
                    <span><img src={`images/hobbies/${content.image}`} alt={content.title[language] + " illustration"}/>{parse(content.description[language])}</span>
                </div>
            </div>
        </div>
    )
}

export default Book
