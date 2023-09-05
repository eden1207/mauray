import React, { useState } from 'react';
import './styles/Softskills.css';
import profil from '../../assets/profil.jpg';


export default function Softskills() {
    const [softSkills, setSoftSkills] = useState('introduction');
    const [softSkillsPhotoBorder, setSoftSkillsPhotoBorder] = useState('photo-border-introduction');
    const [softSkillsPhoto, setSoftSkillsPhoto] = useState('photo-introduction');
    const [softSkillsText, setSoftSkillsText] = useState('softSkills-text-introduction');
    const [isSoftSkillsTextOpen, setIsSoftSkillsTextOpen] = useState(false);
    const [textOpacity, setTextOpacity] = useState(0);
    const [softSkillsScrollBar, setSoftSkillsScrollBar] = useState('none');
    window.addEventListener('scroll', () => {
        const { scrollTop } = document.documentElement;
        const scrollOpacityMin = 100;
        const scrollOpacityMax = 1428;
        const textOpacityValue = (scrollTop-scrollOpacityMin)/(scrollOpacityMax-scrollOpacityMin);

        /** Transition screen introduction - soft skills displayed */
        if(scrollTop > 10) {
            setSoftSkillsPhotoBorder('photo-border-softskills');
            setSoftSkillsPhoto('photo-softskills');
            setSoftSkillsText('softSkills-text-displayed');
            setIsSoftSkillsTextOpen(true);
        }

        if(scrollTop < 10) {
            setSoftSkillsPhotoBorder('photo-border-introduction');
            setSoftSkillsPhoto('photo-introduction');
            setSoftSkillsText('softSkills-text-introduction');
            setIsSoftSkillsTextOpen(false);
        }

        /** Text Soft Skills opacity */
        if(scrollTop < 100) {
            setTextOpacity(0);
        }

        if(100 < scrollTop < 1428) {
            setTextOpacity(textOpacityValue);
        }

        if(1428 < scrollTop) {
            setTextOpacity(1);
        }

        /** Scroll Soft skills text */
        if(scrollTop < 1428) {
            setSoftSkillsScrollBar('none');
        }

        if(1428 < scrollTop) {
            setSoftSkillsScrollBar('scroll');
        }

        /** Transition avoiding to scroll of the first part of the website page */
        if(scrollTop > 2142) {
            setSoftSkills('softSkillsDisplayed');
        }
        if(scrollTop < 2142) {
            setSoftSkills('introduction');
        }
    });
    return(
        <React.Fragment>
            <div 
                className={'softSkills ' + softSkills}
            >
                <div 
                    className={'photo-profile-appearence softSkills-photo-border ' + softSkillsPhotoBorder}
                >
                    <img 
                        src={profil} 
                        alt='Alexis Mauray' 
                        className={'softSkills-photo ' + softSkillsPhoto}
                    />
                </div>
                <div 
                    className={'card-title-appearence ' + softSkillsText}
                >
                    {
                        isSoftSkillsTextOpen ? (
                            <div className='softSkills-text-container'>
                                <article 
                                    className='softSkills-text'
                                    style = {{
                                        opacity: textOpacity,
                                        overflowY: softSkillsScrollBar,
                                    }}
                                >
                                    <p>
                                        Je suis actuellement développeur d'application front-end et je suis passionné 
                                        par la conception et la mise en pratique d'outils technologiques.
                                    </p>
                                    <p>
                                        De nature curieuse, je suis issu d'un parcours de docteur en physique et j'ai exercé 
                                        mes compétences de chercheur au sein de 3 laboratoires pendant une durée de 6 ans. Ces 
                                        expériences m'ont permis de développer de nombreuses compétences et de me structurer 
                                        professionnellement. J'ai effectivement pu acquérir une maîtrise en terme de gestion de 
                                        projet à travers deux collaborations entre le milieu universitaire et le milieu industrielle 
                                        (Solvay puis Total Energies). Lors de ces interactions, j'ai dû échanger avec des équipes 
                                        d'ingénieurs de ces entreprises afin de discuter de leurs problématiques et de planifier une 
                                        stratégie de R&D sur une durée de 2 à 3 ans pour chaque contrat. Cela m'a amené à m'approprier 
                                        un sujet nouveau, à chercher de nouvelles connaissances dans la littérature scientifique et à 
                                        prendre du recul sur une problématique afin de définir une stratégie de travail sur les courts, 
                                        moyens et longs termes. Travaillant dans la recherche expérimentale, j'ai mis en place de manière 
                                        autonome des postes expérimentaux (installation de paillasses, microscopie, gestion d'écoulement 
                                        de fluides, achat de matériel, etc). La difficulté dans l'acquisition de données et dans leur traitement 
                                        informatique (Matlab) m'ont enseigné la patience, la rigueur et la persévérance. Enfin, à travers les conférences, 
                                        réunions avec les acteurs académiques et industrielles ainsi que de nombreux rapports écrits à rendre, 
                                        je suis capable de présenter un projet de manière constructive. 
                                    </p>
                                    <p>
                                        En dehors de mes activités professionnelles, j'ai aussi une passion pour les activités créatives à travers
                                        des projets de sites web (lien), la photo (lien) et la peinture/modélisme sur figurines (lien). J'aime 
                                        aussi les activités de groupe dont celles centrées sur les wargames tels que Warhammer 40k ou Age of Sigmar 
                                        pour citer ceux parmi les plus connus.  
                                    </p>
                                </article>
                            </div>
                        ) : (
                            <h1 className='page-title'>
                                <div>
                                    <span className='letter-appearence1'>B</span>
                                    <span className='letter-appearence2'>i</span>
                                    <span className='letter-appearence3'>e</span>
                                    <span className='letter-appearence4'>n</span>
                                    <span className='letter-appearence5'>v</span>
                                    <span className='letter-appearence6'>e</span>
                                    <span className='letter-appearence7'>n</span>
                                    <span className='letter-appearence8'>u</span>
                                    <span className='letter-appearence9'>e </span>
                                </div>
                                <div>
                                    <span className='letter-appearence10'>s</span>
                                    <span className='letter-appearence11'>u</span>
                                    <span className='letter-appearence12'>r</span>
                                </div>
                                <div>
                                    <span className='letter-appearence13'>l</span>
                                    <span className='letter-appearence14'>a</span>
                                </div>
                                <div>
                                    <span className='letter-appearence15'>p</span>
                                    <span className='letter-appearence16'>a</span>
                                    <span className='letter-appearence17'>g</span>
                                    <span className='letter-appearence18'>e</span>
                                </div>
                                <div>
                                    <span className='letter-appearence19'>p</span>
                                    <span className='letter-appearence20'>e</span>
                                    <span className='letter-appearence21'>r</span>
                                    <span className='letter-appearence22'>s</span>
                                    <span className='letter-appearence23'>o</span>
                                    <span className='letter-appearence24'>n</span>
                                    <span className='letter-appearence25'>n</span>
                                    <span className='letter-appearence26'>e</span>
                                    <span className='letter-appearence27'>l</span>
                                    <span className='letter-appearence28'>l</span>
                                    <span className='letter-appearence29'>e</span>
                                </div>
                                <div>
                                    <span className='letter-appearence30'>d</span>
                                    <span className='letter-appearence31'>'</span>
                                    <span className='letter-appearence32'>A</span>
                                    <span className='letter-appearence33'>l</span>
                                    <span className='letter-appearence34'>e</span>
                                    <span className='letter-appearence35'>x</span>
                                    <span className='letter-appearence36'>i</span>
                                    <span className='letter-appearence37'>s</span>
                                </div>
                                <div>
                                    <span className='letter-appearence38'>M</span>
                                    <span className='letter-appearence39'>a</span>
                                    <span className='letter-appearence40'>u</span>
                                    <span className='letter-appearence41'>r</span>
                                    <span className='letter-appearence42'>a</span>
                                    <span className='letter-appearence43'>y</span>
                                </div>
                            </h1>
                        )
                    }
                </div>
            </div>
        </React.Fragment>
    )
}