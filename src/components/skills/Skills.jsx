import { useContext } from 'react';
import Section from '../section/Section';
import SectionContext from '@context/section/SectionContext';
import './skills.css';

const Skills = () => {
    const { sections } = useContext(SectionContext);
    return (
        <Section state={sections[2].place} styles='section-skills'>
           <p>Skills</p>
        </Section>
    );
}

export default Skills;