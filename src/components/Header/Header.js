import React, { useState } from 'react'
import './styles/Header.css';
import { useSelector } from "react-redux";
//import { homeFocused, softSkillsFocused } from "../Store/Store.js";

export default function Header() {
    //const dispatch = useDispatch();
    const [headerHeight, setHeaderHeight] = useState(147);
    const softSkillsTopLevel = 1480;
    const skillsTopLevel = 2850;
    const backgroundTopLevel = 3580;
    const projectsTopLevel = 6435;
    const hobbiesTopLevel = 7175;
    window.addEventListener('scroll', () => {
        const { scrollTop } = document.documentElement;
        if(scrollTop > 10) {
            setHeaderHeight(74);
            //dispatch(softSkillsFocused());
        }
        if(scrollTop < 10) {
            setHeaderHeight(147);
            //dispatch(homeFocused());
        }
    });

    const isSoftSkillsFocused = useSelector((state) => state.isSoftSkillsFocused);
    const isSkillsFocused = useSelector((state) => state.isSkillsFocused);
    const isFormationFocused = useSelector((state) => state.isFormationFocused);
    const isProjectsFocused = useSelector((state) => state.isProjectsFocused);
    const isHobbiesFocused = useSelector((state) => state.isHobbiesFocused);
    const isContactFocused = useSelector((state) => state.isContactFocused);
    return(
        <header 
            className='header header_dimensions header_aspect header-appearence'
            style = {{
                height: headerHeight
            }}
        >
            <nav className='navigation navigation_dimensions' aria-label="main" role="navigation">
                <button 
                    type='button'
                    className={isSoftSkillsFocused ? 'menu-link-focused' : 'menu-link header-element-appearence1'}
                    onClick={() => {
                        window.scrollTo({ top: softSkillsTopLevel, behavior: 'smooth'});
                        //dispatch(softSkillsFocused());
                    }}
                >
                    Qui suis-je ?
                    <div className={isSoftSkillsFocused ? 'link-underline-focused' : 'link-underline'}></div>
                </button>
                <button 
                    type='button'
                    className={isSkillsFocused ? 'menu-link-focused' : 'menu-link header-element-appearence2'} 
                    onClick={() => {
                        window.scrollTo({ top: skillsTopLevel, behavior: 'smooth'});
                        //dispatch(skillsFocused());
                    }}
                >
                    Mes compétences
                    <div className={isSkillsFocused ? 'link-underline-focused' : 'link-underline'}></div>
                </button>
                <button 
                    type='button'
                    className={isFormationFocused ? 'menu-link-focused' : 'menu-link header-element-appearence3'}
                    onClick={() => {
                        window.scrollTo({ top: backgroundTopLevel, behavior: 'smooth'});
                        //dispatch(formationFocused());
                    }}
                >
                    Mon parcours
                    <div className={isFormationFocused ? 'link-underline-focused' : 'link-underline'}></div>
                </button>
                <button
                    type='button' 
                    className={isProjectsFocused ? 'menu-link-focused' : 'menu-link header-element-appearence4'}
                    onClick={() => {
                        window.scrollTo({ top: projectsTopLevel, behavior: 'smooth'});
                        //dispatch(projectsFocused());
                    }}
                >
                    Mes projets web
                    <div className={isProjectsFocused ? 'link-underline-focused' : 'link-underline'}></div>
                </button>
                <button 
                    type='button'
                    className={isHobbiesFocused ? 'menu-link-focused' : 'menu-link header-element-appearence5'}
                    onClick={() => {
                        window.scrollTo({ top: hobbiesTopLevel, behavior: 'smooth'});
                        //dispatch(hobbiesFocused());
                    }}
                >
                    Mes passions
                    <div className={isHobbiesFocused ? 'link-underline-focused' : 'link-underline'}></div>
                </button>
                <button 
                    type='button'
                    className={isContactFocused ? 'menu-link-focused' : 'menu-link header-element-appearence6'}
                    onClick={ () => {
                        //dispatch(contactFocused());
                    }}
                >
                    Me contacter
                    <div className={isContactFocused ? 'link-underline-focused' : 'link-underline'}></div>
                </button>
            </nav>
        </header>
    )
}