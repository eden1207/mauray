import React from 'react';
import './styles/Home.css';
import Header from '../Header/Header.js';
import Softskills from '../Softskills/Softskills.js';
import Skills from '../Skills/Skills.js';
import Formation from '../Formation/Formation.js';
import Background from '../Background/Background.js';
import Mentorship from '../Mentorship/Mentorship.js';
import Animation from '../Animation/Animation.js';
import Projects from '../Projects/Projects.js';
import Hobbies from '../Hobbies/Hobbies.js';
import Footer from '../Footer/Footer.js';

export default function Home() {
    return(
        <div className='home home_dimensions home_aspect'>
            <Header />
            <main className='main'>
                <Softskills />
                <Skills />
                <Formation />
                <Background />
                <Mentorship />
                <Animation />
                <Projects />
                <Hobbies />
            </main>
            <Footer />
        </div>
    )
}