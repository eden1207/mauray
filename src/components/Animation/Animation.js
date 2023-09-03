import React from 'react';
import './styles/Animation.css';


export default function Animation() {
    return(
        <React.Fragment>
            <div className='animation-title-box'><h2 className='animation-title'>Vie associative et animation scientifique</h2></div>
            <div className='animation'>
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