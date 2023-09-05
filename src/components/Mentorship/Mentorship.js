import React, { useState } from 'react';
import './styles/Mentorship.css';

export default function Mentorship() {
    const [displayMentorshipCardTitle, setDisplayMentorshipCardTitle] = useState('none');
    const [displayMentorshipCard, setDisplayMentorshipCard] = useState('none');
    window.addEventListener('scroll', () => {
        const { scrollTop } = document.documentElement;

        /** Transition cards appearence */
        if(scrollTop > 4642) {
            setDisplayMentorshipCardTitle('flex');
        }

        if(scrollTop > 4692) {
            setDisplayMentorshipCard('flex');
        }
    });
    return(
        <React.Fragment>
            <div 
                className='mentorship-title-box mentorship-title-appearence'
                style = {{
                    display: displayMentorshipCardTitle
                }}
            >
                <h2 className='mentorship-title'>Encadrements et enseignements</h2>
            </div>
            <div 
                className='mentorship mentorship-text-appearence'
                style = {{
                    display: displayMentorshipCard
                }}
            >
                <div className='mentorship-line'>
                    <p className='mentorship-date'>2016-2021 <br/>Grenoble & Rennes</p>
                    <p className='mentorship-content'>
                        Encadrement et co-encadrement de 5 étudiant(e)s de niveau Licence 3 à Doctorat
                    </p>
                </div>
                <div className='mentorship-line'>
                    <p className='mentorship-date'>2015-2019 <br/>Grenoble & Rennes</p>
                    <p className='mentorship-content'>
                        Enseignement 72h de Travaux Dirigés et Travaux Pratiques en IUT, universités 
                        et école d'ingénieurs
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}