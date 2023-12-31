import React, { useState } from 'react';
import './styles/Footer.css';

import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import npm from '../../assets/npm.png'

export default function Footer() {
    const [displayFooter, setDisplayFooter] = useState('none');
    const [footerHeight, setFooterHeight] = useState(75);
    window.addEventListener('scroll', () => {
        const { scrollTop } = document.documentElement;

        /** Transition cards appearence */
        if(scrollTop > 7100) {
            setDisplayFooter('flex');
        }

        if(scrollTop < 7100) {
            setDisplayFooter('none');
        }

        /** Transition cards size */
        if(scrollTop > 7200) {
            setFooterHeight(150);
        }

        if(scrollTop < 7200) {
            setFooterHeight(75);
        }
    });
    return(
        <footer 
            className='footer footer-appearence'
            style = {{
                display: displayFooter,
                height: footerHeight,
            }}
        >
            <a 
                target='_blank' 
                rel="noreferrer" 
                href="https://www.linkedin.com/in/alexis-mauray-3193b9a8/"
                className='footer-link'
            >
                <img src={linkedin} alt='linkedIn' className='logo-linkedIn' />
                <p className='footer-text'>lien LinkedIn</p>
            </a>
            <a 
                target='_blank' 
                rel="noreferrer" 
                href="https://github.com/eden1207?tab=repositories"
                className='footer-link'
            >
                <img src={github} alt='Github' className='logo-github' />
                <p className='footer-text'>lien Github</p>
            </a>
            <a 
                target='_blank' 
                rel="noreferrer" 
                href="https://www.npmjs.com/package/package-select-menu"
                className='footer-link'
            >
                <img src={npm} alt='NPM' className='logo-npm' />
                <p className='footer-text'>lien NPM</p>
            </a>
        </footer>
    )
}