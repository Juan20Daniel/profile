import { useContext } from 'react';
import Section from '../section/Section';
import SectionContext from '@context/section/SectionContext';
const Skills = ({state}) => {
    const { sections, changeSection } = useContext(SectionContext);
    return (
        <Section state={sections[2].place}>
           <p>Skills</p>
           <button className='next-btn' onClick={() => changeSection(2, 0, 'decrement')}>
                About me
            </button>
            <button className='next-btn' onClick={() => changeSection(2, 1, 'decrement')}>
                Proyects
            </button>
            <button className='next-btn' onClick={() => changeSection(2, 3, 'increment')}>
                experience
            </button>
        </Section>
    );
}

export default Skills;