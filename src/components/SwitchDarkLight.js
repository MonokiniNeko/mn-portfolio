/* updateTheme (setState) for switching the current theme (dark/light) */
/* theme (state) for the current theme */
/* antiTheme (state) for the opposite of the current theme */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun as sun, faMoon as moon} from '@fortawesome/free-solid-svg-icons';

function SwitchDarkLight({updateTheme, theme, antiTheme}) {
    const styles = {
        switch : {
            borderRadius : 10,
            display : "inline",
            boxSizing : "content-box",
            cursor : "pointer",
    }
       
    }
    return (
        <div className="SwitchDarkLight">
            <span onClick={() =>updateTheme()} style={styles.switch} className={antiTheme}>
                <FontAwesomeIcon icon={theme === "dark" ? sun : moon} title={"switch to "+antiTheme+" mode"}/> 
                {/* <FontAwesomeIcon icon={moon} title="switch to dark mode"/> */}
            </span>
        </div>
    )
}

export default SwitchDarkLight
