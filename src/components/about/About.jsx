import { useContext } from 'react';
import SectionContext from '@context/section/SectionContext';
import Section from '../section/Section';
import Font from './components/Font/font';
import Content from './components/content/content'

const About = () => {
    const { sections } = useContext(SectionContext);
    return (
        <Section state={sections[0].place}>
            <Font />
            <Content />
        </Section>
    );
}
export default About;