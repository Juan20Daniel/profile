import { useContext } from 'react';
import Section from '../section/Section';
import SectionContext from '@context/section/SectionContext';
const Experience = () => {
    const {sections, changeSection} = useContext(SectionContext);
    return (
        <Section state={sections[3].place}>
           <p>Experience</p>
           <button className='next-btn' onClick={() => changeSection(3, 0, 'decrement')}>
                About me    
            </button>
           <button className='next-btn' onClick={() => changeSection(3, 1, 'decrement')}>
                Proyects
            </button>
            <button className='next-btn' onClick={() => changeSection(3, 2, 'decrement')}>
                Skills
            </button>
        </Section>
    );
}

export default Experience;