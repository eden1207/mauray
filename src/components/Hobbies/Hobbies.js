import React from 'react';
import './styles/Hobbies.css';
import { Link } from 'react-router-dom';
import bouddha from '../../assets/bouddha.jpg';
import krondys from '../../assets/krondys.jpg';

export default function Hobbies() {
    return(
        <React.Fragment>
            <div className='hobbies-title-box'><h2 className='hobbies-title'>Mes passions</h2></div>
            <div className='hobbies'>
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