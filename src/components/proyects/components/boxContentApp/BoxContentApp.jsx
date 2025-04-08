import { useContext } from "react";
import Section from "@components/section/Section";
import SectionContext from "@context/section/SectionContext";
import AppContext from "@context/apps/AppsContext";
import figure from "@assets/proyects/figure.png";
import Navbar from "../../../navbar/Navbar";
import './boxContentApp.css';
const navigation = {
    about:[1,0],
    skills:[1,2],
    experience:[1,3]
}
const BoxContentApp = ({
    position, 
    colorCard='black', 
    // navigation={about:[], skills:[],experience:[]},
    children
}) => {
    // const { changeSection } = useContext(SectionContext);
    const { apps } = useContext(AppContext);
    // const { about, skills, experience } = navigation;
    
    return (
        <Section styles={`box-content ${apps[position].place}`}>
            <Navbar
                customStylesNav=''
                actualSection='proyects'
                title='Mis proyectos'
                colorBtnMenu='black'
                colorBtnActive={colorCard}
                customStylesBoxBtns={'sp-btns-nav'}
                navigation={navigation}
            />
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