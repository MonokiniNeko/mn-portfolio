//MODULES
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Carousel from 'react-gallery-carousel';

import parse from 'html-react-parser'; 

//UTILS
import content from '../../data/content/projects';

// Styles
import './Projects.css';

import 'react-gallery-carousel/dist/index.css';

Modal.setAppElement(document.getElementById('projects'));

function Project({language, isMobile, theme}) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isProjectHidden, setIsProjectHidden] = useState(true);
    const [currentProject, setCurrentProject] = useState( 
        {
        en : {
            title : "Zoom-clone",
            shortDescription : "A visual clone of Zoom in React Native",
            description : "A visual clone of Zoom in React Native including a camera and a textual chat with socket.io",
        },
        fr : {
            title : "Zoom-clone",
            shortDescription : "Un clone visual de Zoom React Native",
            description : "A visual clone of Zoom in React Native including a camera and a textual chat with socket.io",
            
        },
        thumbnail : "https://picsum.photos/60/60",
        images : ["https://picsum.photos/200/300","https://picsum.photos/200/300"],
        links : {
            front : "https://github.com/MonokiniNeko/zoom-clone-front",
            back : "https://github.com/MonokiniNeko/zoom-clone-back"
        },
        tags : ["React", "React Native", "NodeJS", "Socket.io","Mobile","Javascript"]
    }
    );

    const handleClickModal = (project) => { // Open and close the Modal
        if (project) setCurrentProject(project);
        const isOpen = modalIsOpen
        setIsOpen(!isOpen);
    }

    const handleClickShow = (e) => { // Show more or hide the projects' list

        const isHidden = isProjectHidden;
        setIsProjectHidden(!isHidden);
        setTimeout(function(){ // TIMEOUT to prevent a malfunction on mobile resolution
            if (!isHidden) document.getElementById('projects').scrollIntoView({behavior : "smooth"})}, 1)
    }

    let howManyProjects = isMobile ? 3 : 6;

    useEffect(() => {
        document.body.style.overflow = (modalIsOpen) ? 'hidden' : 'unset' // prevent scrolling outside of the modal
    }, [modalIsOpen]);

    const title = {
        en : "My projects",
        fr : "Mes projets"
    }

    const buttons = {
        show : {
            en : "Show More",
            fr : "Montrer plus"
        },
        hide : {
            en : "Show less",
            fr : "Montrer moins"
        },
        links : {
            en : "Link(s) : ",
            fr : "Lien(s) : "
        }
    }


    return (
        <div className="projects">
            <h2>{title[language]}</h2>
            {content.map((project, index) => (
                <div className={((index > howManyProjects-1) && isProjectHidden) ? "project hidden" : "project"} onClick={() => handleClickModal(project)} key={index}>
                    <h4>{project[language].title}</h4>
                    <span className="shortDescription">{project[language].shortDescription}</span>
                    <img src={`images/projects/${project.folder}/${project.thumbnail}`} alt=""/>
                    <span className="tags"> Tags : <span>{project.tags.join(', ')}</span> </span>
                </div>
            ))}
            {(content.length > howManyProjects)? <div className="button"><button className="show" onClick={(e) => handleClickShow(e)}>{isProjectHidden ? buttons.show[language] : buttons.hide[language]}</button> </div>: "" }
            <Modal
                ariaHideApp={false}
                isOpen={modalIsOpen}
                style={customStyles.content}
                className={theme}
            >
                <div className="modalContent">
                    <h4>
                        {currentProject[language].title}
                        {isMobile ? "" : <img src={`images/projects/${currentProject.folder}/${currentProject.thumbnail}`} alt=""/> }
                    </h4>
                    <span className="description">
                        {parse(currentProject[language].description)}
                    </span>
                    {
                        (Object.keys(currentProject.links).length > 0 ) ?buttons.links[language] : ""
                    }
                    {  
                       Object.keys(currentProject.links).map((link, i) => {
                        return <a href={currentProject.links[link]} title={currentProject[language].title + ' '+ link} key={i}> {link} </a>
                       })
                       

                    }
                    <span className="tags"> Tags : <span>{currentProject.tags.join(', ')}</span> </span>
                    {(currentProject.images.length > 0) ? 
                    <Carousel 
                        images={currentProject.images.map(img => {return { src :`images/projects/${currentProject.folder}/${img}`}})}
                        style={{ height: "50%", width: (isMobile) ? "100%":"50%", margin: "0 auto", }}
                    />
                    :
                    (isMobile) ? <Carousel 
                        images={[{src : `images/projects/${currentProject.folder}/${currentProject.thumbnail}`}]}
                        style={{ height: "50%", width: (isMobile) ? "100%":"50%", margin: "0 auto", }}
                    /> : ""
                    }
                    <button type="button" className="close" onClick={() => handleClickModal()}> </button>
                </div>
            </Modal>
        </div>
    )
}

const customStyles={
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
    },
    content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  }


export default Project
