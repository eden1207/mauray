import React, { useState } from 'react';
import './styles/Formation.css';

export default function Formation() {
    const [displayFormationCardTitle, setDisplayFormationCardTitle] = useState('none');
    const [displayFormationCard, setDisplayFormationCard] = useState('none');
    window.addEventListener('scroll', () => {
        const { scrollTop } = document.documentElement;

        /** Transition cards appearence */
        if(scrollTop > 3214) {
            setDisplayFormationCardTitle('flex');
        }

        if(scrollTop > 3264) {
            setDisplayFormationCard('flex');
        }
    });
    return(
        <React.Fragment>
            <div 
                className='formation-title-box formation-title-appearence'
                style = {{
                    display: displayFormationCardTitle
                }}
            >
                <h2 className='formation-title'>Formations</h2>
            </div>
            <div 
                className='formation formation-text-appearence'
                style = {{
                    display: displayFormationCard
                }}
            >
                <div className='formation-line'>
                    <p className='formation-date'>2022-2023 <br/>Rennes</p>
                    <p className='formation-content'>
                        Formation à distance de développeur d'applications Front-End chez 
                        OpenClassrooms
                    </p>
                </div>
                <div className='formation-line'>
                    <p className='formation-date'>2014-2017 <br/>Bordeaux/Grenoble</p>
                    <p className='formation-content'>
                        Doctorat (CIFFRE) en Physique au Laboratoire du Futur (LOF) Solvay - 
                        Laboratoire Rhéologie et Procédés (LRP)
                    </p>
                </div>
                <div className='formation-line'>
                    <p className='formation-date'>2011-2014 <br/>Orsay</p>
                    <p className='formation-content'>
                        Magistère de Physique Fondamentale d'Orsay - spécialité microfluidique 
                        <br/>Université Paris-Saclay
                    </p>
                </div>
                <div className='formation-line'>
                    <p className='formation-date'>2008-2011 <br/>Caen</p>
                    <p className='formation-content'>
                        Classes Préparatoires aux Grandes Ecoles (PC*) 
                        <br/>Lycée Victor Hugo
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}