import React, {useState, useRef} from 'react';

// MODULES 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Book from './hobbies/Book';

// DATA
import list from '../../data/content/hobbies';

// STYLES
import './Hobbies.css'

function Hobbies({ language }) {
    
    const [openBook, setOpenBook] = useState(false)
    const [currentBook, setCurrentBook] = useState(list[0])

    const containerRef = useRef()

    const handleClick = (i) => {
        containerRef.current.scrollIntoView({behavior : "smooth"})
        setCurrentBook(list[i])
        setOpenBook(!openBook)
    }

    const content = {
        title: {
            en: 'My Hobbies',
            fr: 'Mes loisirs'
        },
        hint : {
            en : "Pick a book !",
            fr : "Prenez un livre !"
        }
    }

    return (
        <div className="hobbies" ref={containerRef}>
            <Book
                openBook={openBook}
                setOpenBook={setOpenBook}
                language={language}
                content={currentBook}
            />
            <h4>{content.title[language]}</h4>
            <div className="hint">{content.hint[language]}</div>

            <ul>
                {list.map((el, i) => {
                    return <li key={i} className={'grid' + (i + 1)} onClick={() => handleClick(i)}>
                                <div className="bookmark-wrapper">
                                    <span className="book-title">
                                        <FontAwesomeIcon icon={el.icon}/> <br/>
                                        {el.title[language]} 
                                    </span>
                                </div>
                            </li>
                })}
            </ul>
        </div>
    )
}

export default Hobbies
