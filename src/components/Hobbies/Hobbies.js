import React, { useState } from 'react';
import './styles/Hobbies.css';
import { Link } from 'react-router-dom';
import bouddha from '../../assets/bouddha.jpg';
import krondys from '../../assets/krondys.jpg';

export default function Hobbies() {
    const [displayHobbiesCardTitle, setDisplayHobbiesCardTitle] = useState('none');
    const [displayHobbiesCard, setDisplayHobbiesCard] = useState('none');
    window.addEventListener('scroll', () => {
        const { scrollTop } = document.documentElement;

        /** Transition cards appearence */
        if(scrollTop > 6784) {
            setDisplayHobbiesCardTitle('flex');
        }

        if(scrollTop > 6834) {
            setDisplayHobbiesCard('flex');
        }
    });
    return(
        <React.Fragment>
            <div 
                className='hobbies-title-box hobbies-title-appearence'
                style = {{
                    display: displayHobbiesCardTitle
                }}
            >
                <h2 className='hobbies-title'>Mes passions</h2>
            </div>
            <div 
                className='hobbies hobbies-text-appearence'
                style = {{
                    display: displayHobbiesCard
                }}
            >
                <nav className='subnavigation3' aria-label="secondary" role="navigation">
                    <Link className='submenu-link-logo-paint' to="/" onClick={ (event) => event.preventDefault() }>
                        <div className='border-logo-paint'>
                            <img src={krondys} alt='krondys' className='logo-page-paint' />
                        </div>
                        <p className='logo-paint-title'>Peinture et modélisme</p>
                    </Link>
                    <Link className='submenu-link-logo-photo' to="/" onClick={ (event) => event.preventDefault() }>
                        <div className='border-logo-photo'>
                            <img src={bouddha} alt='bouddha' className='logo-page-photo' />
                        </div>
                        <p className='logo-photo-title'>Photo</p>
                    </Link>
                </nav>
            </div>
        </React.Fragment>
    )
}