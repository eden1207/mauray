import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import './styles/Header.css';

export default function Header() {
    const [headerHeight, setHeaderHeight] = useState(147);
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
                <Link className='menu-link header-element-appearence1' to="/" onClick={ (event) => event.preventDefault() }>
                    Qui suis-je ?
                    <div className='link-underline'></div>
                </Link>
                <Link className='menu-link header-element-appearence2' to="/" onClick={ (event) => event.preventDefault() }>
                    Mes compétences
                    <div className='link-underline'></div>
                </Link>
                <Link className='menu-link header-element-appearence3' to="/" onClick={ (event) => event.preventDefault() }>
                    Mon parcours
                    <div className='link-underline'></div>
                </Link>
                <Link className='menu-link header-element-appearence4' to="/" onClick={ (event) => event.preventDefault() }>
                    Mes projets web
                    <div className='link-underline'></div>
                </Link>
                <Link className='menu-link header-element-appearence5' to="/" onClick={ (event) => event.preventDefault() }>
                    Mes passions
                    <div className='link-underline'></div>
                </Link>
                <Link className='menu-link header-element-appearence6' to="/" onClick={ (event) => event.preventDefault() }>
                    Me contacter
                    <div className='link-underline'></div>
                </Link>
            </nav>
        </header>
    )
}