import React, { useState } from 'react';
import './styles/Background.css';

export default function Background() {
    const [displayBackgroundCardTitle, setDisplayBackgroundCardTitle] = useState('none');
    const [displayBackgroundCard, setDisplayBackgroundCard] = useState('none');
    window.addEventListener('scroll', () => {
        const { scrollTop } = document.documentElement;

        /** Transition cards appearence */
        if(scrollTop > 3928) {
            setDisplayBackgroundCardTitle('flex');
        }

        if(scrollTop > 3978) {
            setDisplayBackgroundCard('flex');
        }
    });
    return(
        <React.Fragment>
            <div 
                className='background-title-box background-title-appearence'
                style = {{
                    display: displayBackgroundCardTitle
                }}
            >
                <h2 className='background-title'>Expériences professionnelles</h2>
            </div>
            <div 
                className='background background-text-appearence'
                style = {{
                    display: displayBackgroundCard
                }}
            >
                <div className='background-line'>
                    <p className='background-date'>2018-2021 <br/>Rennes</p>
                    <p className='background-content'>
                        Post Doc dirigé par Marie-Caroline Jullien à l'Institut de Physique de Rennes 
                        (IPR)

                    </p>
                </div>
                <div className='background-line'>
                    <p className='background-date'>2014-2017 <br/>Bordeaux/Grenoble</p>
                    <p className='background-content'>
                        Thèse dirigée par Hugues Bodiguel (LRP) et Max Chabert (Solvay) au Laboratoire 
                        du Futur (LOF) puis au Laboratoire Rhéologie et Procédés (LRP)
                    </p>
                </div>
                <div className='background-line'>
                    <p className='background-date'>2014 <br/>Paris</p>
                    <p className='background-content'>
                        Stage de 6 mois dirigé par Anke Lindner et Olivia Du Roure au Laboratoire 
                        Physique et Mécanique des Milieux Hétérogènes (PMMH)
                    </p>
                </div>
                <div className='background-line'>
                    <p className='background-date'>2013 <br/>Paris</p>
                    <p className='background-content'>
                        Stage de 3 mois dirigé par Sham Tlili et François Graner au Laboratoire 
                        Matière et Systèmes Complexes (MSC)
                    </p>
                </div>
                <div className='background-line'>
                    <p className='background-date'>2012 <br/>Orsay</p>
                    <p className='background-content'>
                        Stage de 6 semaines dirigé par David Verney à l'Institut de Physique Nucléaire 
                        d'Orsay (IPNO)
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}