import React, { useState } from 'react';
import './styles/Footer.css';

import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

export default function Footer() {
    const [displayFooter, setDisplayFooter] = useState('none');
    const [footerHeight, setFooterHeight] = useState(75);
    window.addEventListener('scroll', () => {
        const { scrollTop } = document.documentElement;
        console.log(scrollTop)

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
            className='footer'
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
                <p className='footer-text'>Mon LinkedIn</p>
            </a>
            <a 
                target='_blank' 
                rel="noreferrer" 
                href="https://github.com/eden1207?tab=repositories"
                className='footer-link'
            >
                <img src={github} alt='Github' className='logo-github' />
                <p className='footer-text'>Mon Github</p>
            </a>
        </footer>
    )
}