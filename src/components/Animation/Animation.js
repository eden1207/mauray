import React, { useState } from 'react';
import './styles/Animation.css';


export default function Animation() {
    const [displayAnimationCardTitle, setDisplayAnimationCardTitle] = useState('none');
    const [displayAnimationCard, setDisplayAnimationCard] = useState('none');
    window.addEventListener('scroll', () => {
        const { scrollTop } = document.documentElement;

        /** Transition cards appearence */
        if(scrollTop > 5356) {
            setDisplayAnimationCardTitle('flex');
        }

        if(scrollTop > 5406) {
            setDisplayAnimationCard('flex');
        }
    });
    return(
        <React.Fragment>
            <div 
                className='animation-title-box animation-title-appearence'
                style = {{
                    display: displayAnimationCardTitle
                }}
            >
                <h2 className='animation-title'>Vie associative et animation scientifique</h2>
            </div>
            <div 
                className='animation animation-text-appearence'
                style = {{
                    display: displayAnimationCard
                }}
            >
                <div className='animation-line'>
                    <p className='animation-date'>2020 <br/>Rennes</p>
                    <p className='animation-content'>
                        Membre des animateurs de l'Institut de Physique de Rennes pour la fête de 
                        la Science 
                    </p>
                </div>
                <div className='animation-line'>
                    <p className='animation-date'>2019 <br/>Rennes</p>
                    <p className='animation-content'>
                        Membre des organisateurs de la journée des doctorants de l'Intitut de 
                        Physique de Rennes 
                    </p>
                </div>
                <div className='animation-line'>
                    <p className='animation-date'>2011-2012 <br/>Orsay</p>
                    <p className='animation-content'>
                        Membre du BDE du Magistère de Physique d'Orsay 
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}