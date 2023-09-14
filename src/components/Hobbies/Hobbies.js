import React, { useState } from 'react';
import './styles/Hobbies.css';

import bouddha from '../../assets/bouddha.jpg';
import mask from '../../assets/mask.jpg';
import cabane from '../../assets/cabane.jpg';
import amiral from '../../assets/amiral.jpg';
import busan from '../../assets/busan.jpg';
import clochet from '../../assets/clochet.jpg';
import caroussel from '../../assets/caroussel.jpg';
import duchesse from '../../assets/duchesse.jpg';
import pommeray from '../../assets/pommeray.jpg';

//import krondys from '../../assets/krondys.jpg';
import krondys from '../../assets/krondys.png';
//import radukar from '../../assets/radukar.jpg';
import radukar from '../../assets/radukar.png';
//import kruelboyz from '../../assets/kruelboyz.jpg';
import kruelboyz from '../../assets/kruelboyz.png';
//import yndrasta from '../../assets/yndrasta.jpg';
import yndrasta from '../../assets/yndrasta.png';
import Gallery from '../Gallery/Gallery.js';

const paint = [
    {
        'photo': krondys,
        'name': 'krondys'
    },
    {
        'photo': radukar,
        'name': 'radukar'
    },
    {
        'photo': kruelboyz,
        'name': 'kruelboyz'
    },
    {
        'photo': yndrasta,
        'name': 'yndrasta'
    }
];

const photo = [
    {
        'photo': bouddha,
        'name': 'bouddha'
    },
    {
        'photo': mask,
        'name': 'mask'
    },
    {
        'photo': cabane,
        'name': 'house'
    },
    {
        'photo': amiral,
        'name': 'Yi Sun-sin'
    },
    {
        'photo': busan,
        'name': 'busan'
    },
    {
        'photo': clochet,
        'name': 'church'
    },
    {
        'photo': caroussel,
        'name': 'caroussel'
    },
    {
        'photo': duchesse,
        'name': 'duchess'
    },
    {
        'photo': pommeray,
        'name': 'pommeray'
    }
];

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

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [galleryTab, setgalleryTab] = useState(null);

    return isGalleryOpen ? (
        <Gallery 
            listPhotos={galleryTab} 
            setIsGalleryOpen={setIsGalleryOpen} 
            setgalleryTab={setgalleryTab}
        />
    ) : (
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
                <div className='hobbies-element'>
                    <button 
                        type='button' 
                        className='border-logo-photo' 
                        onClick={ () => {
                            setIsGalleryOpen(true);
                            setgalleryTab(paint)
                        }}
                    >
                        <img src={krondys} alt='krondys' className='logo-page-paint' />
                    </button>
                    <p className='logo-title'>Peinture et modélisme</p>
                </div>
                <div className='hobbies-element'>
                    <button 
                        type='button' 
                        className='border-logo-photo' 
                        onClick={ () => {
                            setIsGalleryOpen(true);
                            setgalleryTab(photo)
                        }}
                    >
                        <img src={bouddha} alt='bouddha' className='logo-page-photo' />
                    </button>
                    <p className='logo-title'>Photo</p>
                </div>
            </div>
        </React.Fragment>
    )
}

/**<Gallery listPhotos={paint} /> */

/**
 *                 <div className='subnavigation3'>
                    <div className='submenu-link-logo-paint'>
                        <button type='button' className='border-logo-paint' onClick={ (event) => event.preventDefault() }>
                            <img src={krondys} alt='krondys' className='logo-page-paint' />
                        </button>
                        <p className='logo-paint-title'>Peinture et modélisme</p>
                    </div>
                    <div className='submenu-link-logo-photo'>
                        <button type='button' className='border-logo-photo' onClick={ (event) => event.preventDefault() }>
                            <img src={bouddha} alt='bouddha' className='logo-page-photo' />
                        </button>
                        <p className='logo-photo-title'>Photo</p>
                    </div>
                </div>
 */