import React, {useState} from 'react'
import './styles/Header.css';

export default function Header() {
    const [headerHeight, setHeaderHeight] = useState(147);
    const softSkillsTopLevel = 1480;
    const skillsTopLevel = 2850;
    const backgroundTopLevel = 3580;
    const projectsTopLevel = 6435;
    const hobbiesTopLevel = 7175;
    window.addEventListener('scroll', () => {
        const { scrollTop } = document.documentElement;
        if(scrollTop > 10) {
            setHeaderHeight(74);
        }
        if(scrollTop < 10) {
            setHeaderHeight(147);
        }
    });
    return(
        <header 
            className='header header_dimensions header_aspect header-appearence'
            style = {{
                height: headerHeight
            }}
        >
            <nav className='navigation navigation_dimensions' aria-label="main" role="navigation">
                <button 
                    type='button'
                    className='menu-link header-element-appearence1'
                    onClick={() => {
                        window.scrollTo({ top: softSkillsTopLevel, behavior: 'smooth'});
                    }}
                >
                    Qui suis-je ?
                    <div className='link-underline'></div>
                </button>
                <button 
                    type='button'
                    className='menu-link header-element-appearence2' 
                    onClick={() => {
                        window.scrollTo({ top: skillsTopLevel, behavior: 'smooth'});
                    }}
                >
                    Mes compétences
                    <div className='link-underline'></div>
                </button>
                <button 
                    type='button'
                    className='menu-link header-element-appearence3' 
                    onClick={() => {
                        window.scrollTo({ top: backgroundTopLevel, behavior: 'smooth'});
                    }}
                >
                    Mon parcours
                    <div className='link-underline'></div>
                </button>
                <button
                    type='button' 
                    className='menu-link header-element-appearence4'
                    onClick={() => {
                        window.scrollTo({ top: projectsTopLevel, behavior: 'smooth'});
                    }}
                >
                    Mes projets web
                    <div className='link-underline'></div>
                </button>
                <button 
                    type='button'
                    className='menu-link header-element-appearence5'
                    onClick={() => {
                        window.scrollTo({ top: hobbiesTopLevel, behavior: 'smooth'});
                    }}
                >
                    Mes passions
                    <div className='link-underline'></div>
                </button>
                <button 
                    type='button'
                    className='menu-link header-element-appearence6'
                    onClick={ (event) => event.preventDefault() }
                >
                    Me contacter
                    <div className='link-underline'></div>
                </button>
            </nav>
        </header>
    )
}