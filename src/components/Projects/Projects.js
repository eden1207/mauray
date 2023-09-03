import React from 'react';
import './styles/Projects.css';
import { Link } from 'react-router-dom';
import logo_booki from '../../assets/Booki.png';
import logo_ohmyfood from '../../assets/ohmyfood.png';
import logo_gameon from '../../assets/gameon.png';
import logo_fisheye from '../../assets/fisheye.png';
import logo_les_petits_plats from '../../assets/les_petits_plats.png';
import logo_kasa from '../../assets/kasa.png';
import logo_sportsee from '../../assets/sportsee.png';
import logo_argentbank from '../../assets/argentBank.png';
import logo_hrnet from '../../assets/HRNet.png';
import profil from '../../assets/profil.jpg';
import logo_ghibli from '../../assets/logo_ghibli.png';
import logo_leo_paul_berthaut from '../../assets/logo_leo_paul_berthaut.png';

export default function Projects() {
    return(
        <React.Fragment>
            <div className='projects-title-box'><h2 className='projects-title'>Mes projets web</h2></div>
            <div className='projects'>
                <div className='projects-list1'>
                    <h3 className='projects-list1-title'>Projets réalisés lors de ma formation chez OpenClassrooms</h3>
                    <nav className='subnavigation1' aria-label="secondary" role="navigation">
                        <Link className='submenu-link1' to="/" onClick={ (event) => event.preventDefault() }>
                            <img src={logo_booki} alt='booki' className='logo-booki' />
                        </Link>
                        <Link className='submenu-link1' to="/" onClick={ (event) => event.preventDefault() }>
                            <img src={logo_ohmyfood} alt='ohmyfood' className='logo-ohmyfood' />
                        </Link>
                        <Link className='submenu-link1' to="/" onClick={ (event) => event.preventDefault() }>
                            <img src={logo_gameon} alt='game on' className='logo-gameon' />
                        </Link>
                        <Link className='submenu-link1' to="/" onClick={ (event) => event.preventDefault() }>
                            <img src={logo_fisheye} alt='fisheye' className='logo-fisheye' />
                        </Link>
                        <Link className='submenu-link1' to="/" onClick={ (event) => event.preventDefault() }>
                            <img src={logo_les_petits_plats} alt='les petits plats' className='logo-les-petits-plats' />
                        </Link>
                        <Link className='submenu-link1' to="/" onClick={ (event) => event.preventDefault() }>
                            <img src={logo_kasa} alt='kasa' className='logo-kasa' />
                        </Link>
                        <Link className='submenu-link1' to="/" onClick={ (event) => event.preventDefault() }>
                            <img src={logo_sportsee} alt='sportsee' className='logo-sportsee' />
                        </Link>
                        <Link className='submenu-link1' to="/" onClick={ (event) => event.preventDefault() }>
                            <img src={logo_argentbank} alt='argent bank' className='logo-argentbank' />
                        </Link>
                        <Link className='submenu-link1' to="/" onClick={ (event) => event.preventDefault() }>
                            <img src={logo_hrnet} alt='HRNet' className='logo-hrnet' />
                        </Link>
                    </nav>
                </div>
                <div className='projects-list2'>
                    <h3 className='projects-list2-title'>Projets réalisés sur mon temps libre</h3>
                    <nav className='subnavigation2' aria-label="secondary" role="navigation">
                        <Link className='submenu-link2-logo-website' to="/" onClick={ (event) => event.preventDefault() }>
                            <div className='border-logo-website'>
                                <img src={profil} alt='Alexis Mauray' className='logo-page-web' />
                            </div>
                            <p className='logo-page-web-title'>Mon site</p>
                        </Link>
                        <a 
                            target='_blank' 
                            rel="noreferrer" 
                            href="https://fanciful-dango-479265.netlify.app/"
                            className='submenu-link2'
                        >
                            <img src={logo_ghibli} alt='ghibli' className='logo-ghibli' />
                        </a>
                        <a 
                            target='_blank' 
                            rel="noreferrer" 
                            href="https://lucent-paprenjak-c18120.netlify.app/"
                            className='submenu-link2'
                        >
                            <img src={logo_leo_paul_berthaut} alt='léo-paul Berthaut' className='logo-leo-paul-berthaut' />
                        </a>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    )
}