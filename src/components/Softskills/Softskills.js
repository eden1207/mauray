import React, { useState } from 'react';
import './styles/Softskills.css';
import profil from '../../assets/profil.jpg';


export default function Softskills() {
    const projectsTopLevel = 6435;
    const hobbiesTopLevel = 7175;
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
                                        Physicien de formation, je suis issu d'un parcours de docteur en physique et j'ai 
                                        exercé mes compétences de chercheur au sein de 3 laboratoires pendant une durée de 
                                        6 ans. Ces expériences m'ont permises de me structurer professionnellement et de 
                                        développer de nombreuses compétences :
                                        <ul>
                                            <li>
                                                Gestion de projet à travers deux collaborations entre le milieu universitaire 
                                                et le milieu industriel (Solvay puis Total Energies)
                                            </li>
                                            <li>
                                                Méthode Agile avec équipes d'ingénieurs de ces entreprises pour définir une 
                                                stratégie R&D pour chaque contrat
                                            </li>
                                            <li>
                                                Prise de recul sur une problématique et documentation dans la littérature scientifique
                                            </li>
                                            <li>
                                                Mise en place de manière autonome de postes d'expérimentation avec aménagement de salle 
                                                expérimentale, microscopie, gestion d'écoulement de fluides, achats de matériel, etc 
                                            </li>
                                            <li>
                                                Patience, rigueur et persévérance dans la difficulté d'acquisition de données et dans leur 
                                                traitement numérique (Matlab)
                                            </li>
                                            <li>
                                                Capacité à présenter un projet de manière constructive à travers des conférences, réunions 
                                                avec les acteurs académiques et industriels ainsi que de nombreux rapports écrits
                                            </li>
                                        </ul>
                                    </p>
                                    <p>
                                        Créatif et passionné par l'apprentissage de nouvelles technologies, j'ai fait le choix de devenir 
                                        développeur d'applications front-end en suivant une formation intensive, professionnalisante et mentorée 
                                        de 14 mois chez OpenClassrooms (RNCP niveau 6) afin d'avoir le plaisir de travailler sur des projets web 
                                        dans une belle entreprise. Pourquoi le front-end ? Parce que c'est un domaine extrêmement riche allant de 
                                        fonctionnalités à coder, des interactions avec une base de données à mettre en forme, en passant par la 
                                        création du design d'une interface web pouvant être créative et dynamique. Cela m'incite à mettre en pratique 
                                        ces différents aspects à travers différents projets centralisés sur ce site. De nature curieuse, je suis 
                                        attiré par ce domaine où les technologies sont en constante évolution. 
                                    </p>
                                    <p>
                                        En dehors de mes activités professionnelles, j'ai aussi une passion pour les activités créatives à travers
                                        des <span><button type='button' className='intro-link' onClick={() => {window.scrollTo({ top: projectsTopLevel, behavior: 'smooth'})}}>projets de sites web</button></span>, 
                                        la <span><button type='button' className='intro-link' onClick={() => {window.scrollTo({ top: hobbiesTopLevel, behavior: 'smooth'})}}>photo</button></span> 
                                        et la <span><button type='button' className='intro-link' onClick={() => {window.scrollTo({ top: hobbiesTopLevel, behavior: 'smooth'})}}>peinture/modélisme sur figurines</button></span>. 
                                        J'aime aussi les activités de groupe dont celles centrées sur les wargames tels que Warhammer 40k ou Age of Sigmar pour citer ceux parmi les plus connus.  
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