import React from 'react';
import './styles/Skills.css';
import logo_html from '../../assets/html.png';
import logo_css from '../../assets/css.png';
import logo_sass from '../../assets/sass.png';
import logo_javascript from '../../assets/javascript.png';
import logo_matlab from '../../assets/matlab.png';
import logo_react from '../../assets/react.png';
import logo_jest from '../../assets/jest.png';
import logo_redux from '../../assets/redux.png';
import logo_latex from '../../assets/latex.png';
import logo_photoshop from '../../assets/photoshop.png';
import logo_figma from '../../assets/figma.png';
import logo_git from '../../assets/git.png';
import logo_francais from '../../assets/francais.png';
import logo_anglais from '../../assets/anglais.png';
import logo_espagnol from '../../assets/espagnol.png';

export default function Skills() {
    return(
        <React.Fragment>
            <div className='skills-title-box'><h2 className='skills-title'>Mes compétences</h2></div>
            <div className='skills'>
                <div className='skills-lists-group'>
                    <div className='skills-list'>
                        <h2 className='skills-list-title'>Langages de programmation</h2>
                        <div className='skills-list-element'>
                            <div className='skills-list-element-logo'><img src={logo_html} alt='HTML 5' className='logo-html' /></div>
                            <div className='skills-list-element-text'>HTML 5</div>
                        </div>
                        <div className='skills-list-element'>
                            <div className='skills-list-element-logo'><img src={logo_css} alt='CSS 3' className='logo-css' /></div>
                            <div className='skills-list-element-text'>CSS 3</div>
                        </div>
                        <div className='skills-list-element'>
                            <div className='skills-list-element-logo'><img src={logo_sass} alt='Sass' className='logo-sass' /></div>
                            <div className='skills-list-element-text'>Sass</div>
                        </div>
                        <div className='skills-list-element'>
                            <div className='skills-list-element-logo'><img src={logo_javascript} alt='Javascript' className='logo-javascript' /></div>
                            <div className='skills-list-element-text'>Javascript</div>
                        </div>
                        <div className='skills-list-element'>
                            <div className='skills-list-element-logo'><img src={logo_matlab} alt='Matlab' className='logo-matlab' /></div>
                            <div className='skills-list-element-text'>Matlab</div>
                        </div>
                    </div>
                    <div className='skills-list'>
                    <h2 className='skills-list-title'>Frameworks et librairies</h2>
                        <div className='skills-list-element'>
                            <div className='skills-list-element-logo'><img src={logo_react} alt='React' className='logo-react' /></div>
                            <div className='skills-list-element-text'>React</div>
                        </div>
                        <div className='skills-list-element'>
                            <div className='skills-list-element-logo'><img src={logo_jest} alt='Jest' className='logo-jest' /></div>
                            <div className='skills-list-element-text'>Jest</div>
                        </div>
                        <div className='skills-list-element'>
                            <div className='skills-list-element-logo'><img src={logo_redux} alt='Redux' className='logo-redux' /></div>
                            <div className='skills-list-element-text'>Redux</div>
                        </div>
                    </div>
                </div>
                <div className='skills-lists-group'>
                    <div className='skills-list'>
                        <h2 className='skills-list-title'>Logiciels et outils</h2>
                        <div className='skills-list-element'>
                            <div className='skills-list-element-logo'><img src={logo_latex} alt='Latex' className='logo-latex' /></div>
                            <div className='skills-list-element-text'>Latex</div>
                        </div>
                        <div className='skills-list-element'>
                            <div className='skills-list-element-logo'><img src={logo_photoshop} alt='Photoshop' className='logo-photoshop' /></div>
                            <div className='skills-list-element-text'>Photoshop</div>
                        </div>
                        <div className='skills-list-element'>
                            <div className='skills-list-element-logo'><img src={logo_figma} alt='Figma' className='logo-figma' /></div>
                            <div className='skills-list-element-text'>Figma</div>
                        </div>
                        <div className='skills-list-element'>
                            <div className='skills-list-element-logo'><img src={logo_git} alt='Git' className='logo-git' /></div>
                            <div className='skills-list-element-text'>Git</div>
                        </div>
                    </div>
                    <div className='skills-list'>
                        <h2 className='skills-list-title'>Langues vivantes</h2>
                        <div className='skills-list-element'>
                            <div className='skills-list-element-logo'><img src={logo_francais} alt='Français' className='logo-francais' /></div>
                            <div className='skills-list-element-text'>Français (langue maternelle)</div>
                        </div>
                        <div className='skills-list-element'>
                            <div className='skills-list-element-logo'><img src={logo_anglais} alt='Anglais' className='logo-anglais' /></div>
                            <div className='skills-list-element-text'>Anglais (courant)</div>
                        </div>
                        <div className='skills-list-element'>
                            <div className='skills-list-element-logo'><img src={logo_espagnol} alt='Espagnol' className='logo-espagnol' /></div>
                            <div className='skills-list-element-text'>Espagnol (élémentaire)</div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}