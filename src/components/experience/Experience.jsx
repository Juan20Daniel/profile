import { useContext } from 'react';
import { Ilustration } from '@assets/experience/Ilustration';
import SectionContext from '@context/section/SectionContext';
import Section from '../section/Section';
import Navbar from '../navbar/Navbar';
import BtnNav from '../btnNav/BtnNav';
import './experience.css';
const Experience = () => {
    const {sections, changeSection} = useContext(SectionContext);
    return (
        <Section state={sections[3].place} styles='section-experience'>
            <Navbar
                colorTitle='white'
                title='Mis habilidades'
                colorBtnMenu='white'
            >
                <BtnNav
                    value='Habilidades'
                    color='white'
                    action={() => changeSection(3, 2)}
                />  
                <BtnNav 
                    value='Mis proyectos'
                    color='white'
                    action={() => changeSection(3, 1)}
                />    
                <BtnNav
                    value='Sobe mi'
                    color='white'
                    isActive={true}
                    action={() => changeSection(3, 0)}
                    customStyles='se-btn-nav-active'
                />     
            </Navbar>
            <div className='se-box-content'>
                <div className='box-ilustration'>
                    <Ilustration />
                </div>
            </div>
        </Section>
    );
}

export default Experience;