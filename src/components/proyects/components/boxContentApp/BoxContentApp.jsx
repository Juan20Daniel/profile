import { useContext } from "react";
import Section from "@components/section/Section";
import SectionContext from "@context/section/SectionContext";
import AppContext from "@context/apps/AppsContext";
import figure from "@assets/proyects/figure.png";
import Navbar from "../../../navbar/Navbar";
import BtnMenu from "../../../btnMenu/BtnMenu";
import BtnNav from '../../../btnNav/BtnNav';
import './boxContentApp.css';

const BoxContentApp = ({
    position, 
    colorCard='black', 
    navigation={about:[], skills:[],experience:[]},
    children
}) => {
    const { changeSection } = useContext(SectionContext);
    const { apps } = useContext(AppContext);
    const { about, skills, experience } = navigation;
    
    return (
        <Section styles={`box-content ${apps[position].place}`}>
             <Navbar title='Mis proyectos'>
                <div className="box-btn-menu">
                    <BtnMenu color="black" />
                </div>
                <div className="nav-btns-proyects">
                    <BtnNav
                        value='Experiencia'
                        color='black'
                        action={() => changeSection(experience[0], experience[1])}
                    />  
                    <BtnNav 
                        value='Habilidades'
                        color='black'
                        action={() => changeSection(skills[0], skills[1])}
                    />  
                    <BtnNav 
                        value='Sobe mi'
                        color={colorCard}
                        isActive={true}
                        action={() => changeSection(about[0], about[1])}
                    />     
                </div>
            </Navbar>
            <div className={`box-info-app font-color-${colorCard}`}>
                <div className="box-center-info-app">
                    <img className="figure-proyects" src={figure} alt="Figura" />
                    <div className="info-app">
                        {children}
                    </div>
                    <img className="figure-proyects" src={figure} alt="Figura" />
                </div>
            </div>
        </Section>
    )
}

export default BoxContentApp;

