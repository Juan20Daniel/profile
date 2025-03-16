import { useContext } from 'react';
import Section from '../section/Section';
import Font from './components/Font/font';
import Content from './components/content/Content';
import SectionContext from '@context/section/SectionContext';
import MenuContext from '@context/menu/MenuContext';
import BoxMenu from '../boxMenu/BoxMenu';
import BtnNav from '../btnNav/BtnNav';
import './aboutMe.css';

const Header = () => {
    const { menu, closeMenu } = useContext(MenuContext);
    const {sections} = useContext(SectionContext);
    return ( 
        <>
            {menu && 
                <BoxMenu>
                    <BtnNav 
                        value='Mis proyectos'
                        isActive={true}
                        action={closeMenu}
                    />
                    <BtnNav 
                        value='Experiencia'
                        action={closeMenu}
                    />
                    <BtnNav 
                        value='Habilidades'
                        action={closeMenu}
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
export default Header;