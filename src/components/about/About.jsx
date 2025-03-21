import { useContext } from 'react';
import AboutContext from '@context/about/AboutContext';
import SectionContext from '@context/section/SectionContext';
import Section from '../section/Section';
import Font from './components/Font/font';
import Content from './components/content/Content';
import MenuContext from '@context/menu/MenuContext';
import BoxMenu from '../boxMenu/BoxMenu';
import BtnNav from '../btnNav/BtnNav';
import './about.css';

const About = () => {
    const { proyects, skills, experience } = useContext(AboutContext);
    const { menu, closeMenu } = useContext(MenuContext);
    const { sections } = useContext(SectionContext);

    return ( 
        <>
            {menu && 
                <BoxMenu>
                    <BtnNav 
                        value='Mis proyectos'
                        isActive={true}
                        action={() => {
                            closeMenu();
                            proyects();
                        }}
                    />
                    <BtnNav 
                        value='Habilidades'
                        action={() => {
                            closeMenu();
                            skills();
                        }}
                    />
                     <BtnNav 
                        value='Experiencia'
                        action={() => {
                            closeMenu();
                            experience();
                        }}
                    />
                </BoxMenu>
            }
            <Section state={sections[0].place}>
                <Font />
                <Content />
            </Section>
        </>
    );
}
export default About;