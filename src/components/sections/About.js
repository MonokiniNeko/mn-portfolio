import React, { useEffect, createRef } from 'react';
import parse from 'html-react-parser'; 

// My MODULES
import Cube from './about/Cube';

// 3D BACKGROUND EFFECT
import * as THREE from 'three'
import VANTA_BG from 'vanta/dist/vanta.net.min';

//DATA
import about from '../../data/content/about'

// STYLES
import './About.css'

function About({language, theme, isMobile}) {

    let vantaRef = createRef()
    
    useEffect(() => {
        let vantaEffect = VANTA_BG({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1,
            scaleMobile: 0.5,
            color: (theme === 'dark' )? 0xffd900 : 0x181818,
            backgroundColor: (theme === 'dark' ) ? 0x181818 : 0x68b8d7,
            showDots: false
        })
 
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    //eslint-disable-next-line
    },[theme])




    return (
        <div className="about" ref={vantaRef}>
            <div className="container">
                <div className="avatar">
                    <Cube isMobile={isMobile}/>
                </div>
                <div className="text">
                    <h1>Gwenaël <span>H</span>alasz</h1>
                    <span>{parse(about.intro[language])}</span>
                    <span>{parse(about.p1[language])}</span>
                    <span>{parse(about.p2[language])}</span>
                    <span>{parse(about.p3[language])}</span>
                </div>
            </div>
        </div>
    )
}

export default About
