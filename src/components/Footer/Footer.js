import React from 'react';
import './styles/Footer.css';

import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

export default function Footer() {
    return(
        <footer className='footer'>
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