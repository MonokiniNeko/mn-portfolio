import React from 'react'

function SwitchLanguage({ language, updateLanguage }) {
    const styles = {
        switch: {
            borderRadius: "50%",
            display: "inline-block",
            boxSizing: "content-box",
            cursor: "pointer",
        }
    }
    return (
        <div className="SwitchLanguage">
            <span onClick={() => updateLanguage()} style={styles.switch} className={language}>
            </span>
        </div>
    )
}

export default SwitchLanguage
