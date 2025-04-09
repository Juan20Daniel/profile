import { useContext } from "react";
import Section from "@components/section/Section";
import SectionContext from "@context/section/SectionContext";
import AppContext from "@context/apps/AppsContext";
import figure from "@assets/proyects/figure.png";
import Navbar from "../../../navbar/Navbar";
import BtnNav from "../../../btnNav/BtnNav";
import './boxContentApp.css';
const BoxContentApp = ({
    position, 
    colorCard='black', 
    children
}) => {
    const { changeSection } = useContext(SectionContext);
    const { apps } = useContext(AppContext);
    
    return (
        <Section styles={`box-content ${apps[position].place}`}>
            <Navbar
                title='Mis proyectos'
                colorBtnMenu='black'
                customStylesBoxBtns={'sp-btns-nav'}
            >
                <BtnNav
                    value='Experiencia'
                    color='black'
                    action={() => changeSection(1, 3)}
                />  
                <BtnNav
                    value='Habilidades'
                    color='black'
                    action={() => changeSection(1, 2)}
                />     
                <BtnNav 
                    value='Sobre mi'
                    color={colorCard}
                    isActive={true}
                    action={() => changeSection(1, 0)}
                />    
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