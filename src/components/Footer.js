import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub as github, faFacebook as facebook, faLinkedin as linkedin, faTwitter as twitter} from '@fortawesome/free-brands-svg-icons'
import SwitchDarkLight from './SwitchDarkLight';
import SwitchLanguage from './SwitchLanguage';

function Footer({updateTheme, theme, antiTheme, language, updateLanguage}) {
    return (
        <div  className="footer">
            <ul className="switches">
                <li>
                     <SwitchDarkLight updateTheme={updateTheme} theme={theme} antiTheme={antiTheme}/>
                </li>
                <li>
                    <SwitchLanguage updateLanguage={updateLanguage} language={language} />
                </li>
            </ul>
           

            <ul className="social">
                    <li>
                        <a href="https://be.linkedin.com/in/gwenaelhalasz" title="LinkedIn">
                            {/* <i class="fab fa-linkedin"></i> */}
                            <FontAwesomeIcon icon={linkedin} />
                            <span>LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/MonokiniNeko" title="Facebook">
                            {/* <i class="fab fa-facebook-f"></i> */}
                            <FontAwesomeIcon icon={facebook} />
                            <span>Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/MonokiniNeko" title="Twitter">
                            {/* <i class="fab fa-github"></i> */}
                            <FontAwesomeIcon icon={twitter} />
                            <span>Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/MonokiniNeko" title="Github">
                            {/* <i class="fab fa-github"></i> */}
                            <FontAwesomeIcon icon={github} />
                            <span>GitHub</span>
                        </a>
                    </li>
                </ul>

        </div>
    )
}

export default Footer
