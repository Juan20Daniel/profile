import { useContext } from 'react';
import SectionContext from '@context/section/SectionContext';
import Section from '../section/Section';
import BtnNav from '../btnNav/BtnNav';
import Navbar from '../navbar/Navbar';
import Ilustration from './components/ilustration/Ilustration';
import Title from './components/title/Title';
import Description from './components/description/Description';
import ItemSkill from './components/itemSkill/ItemSkill';
import './skills.css';

const Skills = () => {
    const { sections, changeSection } = useContext(SectionContext);
    return (
        <Section state={sections[2].place} styles='section-skills'>
            <Navbar
                colorTitle='white'
                title='Mis habilidades'
                colorBtnMenu='white'
            >
                <BtnNav
                    value='Experiencia'
                    color='white'
                    action={() => changeSection(2, 3)}
                />  
                <BtnNav 
                    value='Mis proyectos'
                    color='white'
                    action={() => changeSection(2, 1)}
                />    
                <BtnNav
                    value='Sobe mi'
                    color='white'
                    isActive={true}
                    action={() => changeSection(2, 0)}
                    customStyles='ss-btn-nav-active'
                />     
            </Navbar>
            <Ilustration />
            <div className='ss-box-content'>
                <Title />
                <Description />
                <ul className='box-list-skills'>
                    <ItemSkill value='React.js' />
                    <ItemSkill value='Node.js' />
                    <ItemSkill value='Css & HTML' />
                    <ItemSkill value='Mysql' />
                    <ItemSkill value='Figma' />
                    <ItemSkill value='Github' />
                    <ItemSkill value='Firebase' />
                </ul>
            </div>
        </Section>
    );
}

export default Skills;