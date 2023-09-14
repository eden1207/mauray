import React, { useState } from 'react';
import './styles/Projects.css';
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
    const [displayProjectsCardTitle, setDisplayProjectsCardTitle] = useState('none');
    const [displayProjectsCard, setDisplayProjectsCard] = useState('none');
    window.addEventListener('scroll', () => {
        const { scrollTop } = document.documentElement;

        /** Transition cards appearence */
        if(scrollTop > 6070) {
            setDisplayProjectsCardTitle('flex');
        }

        if(scrollTop > 6120) {
            setDisplayProjectsCard('flex');
        }
    });
    return(
        <React.Fragment>
            <div 
                className='projects-title-box projects-title-appearence'
                style = {{
                    display: displayProjectsCardTitle
                }}
            >
                <h2 className='projects-title'>Mes projets web</h2>
            </div>
            <div 
                className='projects projects-text-appearence'
                style = {{
                    display: displayProjectsCard
                }}
            >
                <div className='projects-list1'>
                    <h3 className='projects-list1-title'>Liens vers mes projets réalisés lors de ma formation chez OpenClassrooms</h3>
                    <nav className='subnavigation1' aria-label="secondary" role="navigation">
                        <a 
                            target='_blank' 
                            rel="noreferrer" 
                            href="https://eden1207.github.io/booki.github.io/"
                            className='submenu-link1'
                        >
                            <img src={logo_booki} alt='booki' className='logo-booki' />
                        </a>
                        <a 
                            target='_blank' 
                            rel="noreferrer" 
                            href="https://eden1207.github.io/ohmyfood.github.io/index.html"
                            className='submenu-link1'
                        >
                            <img src={logo_ohmyfood} alt='ohmyfood' className='logo-ohmyfood' />
                        </a>
                        <a 
                            target='_blank' 
                            rel="noreferrer" 
                            href="https://eden1207.github.io/GameOn-website-FR/"
                            className='submenu-link1'
                        >
                            <img src={logo_gameon} alt='game on' className='logo-gameon' />
                        </a>
                        <a 
                            target='_blank' 
                            rel="noreferrer" 
                            href="https://chic-haupia-4dc758.netlify.app/"
                            className='submenu-link1'
                        >
                            <img src={logo_fisheye} alt='fisheye' className='logo-fisheye' />
                        </a>
                        <a 
                            target='_blank' 
                            rel="noreferrer" 
                            href="https://eden1207.github.io/Les_petits_plats/"
                            className='submenu-link1'
                        >
                            <img src={logo_les_petits_plats} alt='les petits plats' className='logo-les-petits-plats' />
                        </a>
                        <a 
                            target='_blank' 
                            rel="noreferrer" 
                            href="https://zesty-granita-53d806.netlify.app/"
                            className='submenu-link1'
                        >
                            <img src={logo_kasa} alt='kasa' className='logo-kasa' />
                        </a>
                        <a 
                            target='_blank' 
                            rel="noreferrer" 
                            href="https://wondrous-faloodeh-a2ecb5.netlify.app/"
                            className='submenu-link1'
                        >
                            <img src={logo_sportsee} alt='sportsee' className='logo-sportsee' />
                        </a>
                        <a 
                            target='_blank' 
                            rel="noreferrer" 
                            href="https://funny-pie-5460e5.netlify.app/"
                            className='submenu-link1'
                        >
                            <img src={logo_argentbank} alt='argent bank' className='logo-argentbank' />
                        </a>
                        <a 
                            target='_blank' 
                            rel="noreferrer" 
                            href="https://tranquil-begonia-8bcca0.netlify.app/"
                            className='submenu-link1'
                        >
                            <img src={logo_hrnet} alt='HRNet' className='logo-hrnet' />
                        </a>
                    </nav>
                </div>
                <div className='projects-list2'>
                    <h3 className='projects-list2-title'>Liens vers mes projets réalisés sur mon temps libre</h3>
                    <nav className='subnavigation2' aria-label="secondary" role="navigation">
                        <button 
                        type='button'
                            className='submenu-link2-logo-website' 
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth'});
                            }}
                        >
                            <div className='border-logo-website'>
                                <img src={profil} alt='Alexis Mauray' className='logo-page-web' />
                            </div>
                            <p className='logo-page-web-title'>Mon site</p>
                        </button>
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
                            href="https://subtle-jalebi-5ea228.netlify.app/"
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