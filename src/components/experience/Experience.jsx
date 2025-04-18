import { useContext } from 'react';
import { Ilustration } from '@assets/experience/Ilustration';
import SectionContext from '@context/section/SectionContext';
import Section from '../section/Section';
import Navbar from '../navbar/Navbar';
import BtnNav from '../btnNav/BtnNav';
import ItemCompany from './components/itemCompany/ItemCompany';
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
                <div className="list-company">
                    <ItemCompany 
                        name='NutriDeli'
                        history='1 año trabajando para un restaurante en donde desarrollé una aplicación para mejorar la gestión de su empresa.'
                    />
                     <ItemCompany 
                        name='Universidad ITECCE'
                        history='3 años trabajando para la Universidad Itecce en el área de 
                        Sistemas en la cual he propuesto y desarrollado proyectos para la mejora de sus servicios para los estudiantes.'
                    />
                     <ItemCompany 
                        name='Soluciones Tec'
                        history='He trabajado para equipos de desarrolladores en donde ayudé a
                        diseñar y desarrollar apps complejas, incluyendo la creación de un chat web para una empresa privada.'
                    />
                </div>
            </div>
        </Section>
    );
}

export default Experience;