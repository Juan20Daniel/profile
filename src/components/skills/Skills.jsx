import { useContext } from 'react';
import Section from '../section/Section';
import SectionContext from '@context/section/SectionContext';
import Navbar from '../navbar/Navbar';
import BtnMenu from '../btnMenu/BtnMenu';
import BtnNav from '../btnNav/BtnNav';
import './skills.css';

const Skills = () => {
    const { sections, changeSection } = useContext(SectionContext);
    return (
        <Section state={sections[2].place} styles='section-skills'>
             <Navbar title='Mis proyectos' colorTitle='white'>
                <div className="box-btn-menu">
                    <BtnMenu color="black" />
                </div>
                <div className="nav-btns-proyects">
                    <BtnNav
                        value='Experiencia'
                        color='black'
                        action={() => changeSection(2, 3)}
                    />  
                    <BtnNav 
                        value='Proyectos'
                        color='black'
                        action={() => changeSection(2, 1)}
                    />  
                    <BtnNav 
                        value='Sobe mi'
                        color='black'
                        isActive={true}
                        action={() => changeSection(2, 0)}
                    />     
                </div>
            </Navbar>
           <p>Skills</p>
        </Section>
    );
}

export default Skills;