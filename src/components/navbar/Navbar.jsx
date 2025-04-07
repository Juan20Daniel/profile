import { useContext } from "react";
import BtnMenu from "../btnMenu/BtnMenu";
import BtnNav from "../btnNav/BtnNav";
import Title from "./components/title/Title";
import './navbar.css';
import SectionContext from "../../context/section/SectionContext";
const Navbar = ({
    customStylesNav,
    actualSection,
    title, 
    colorTitle, 
    customStylesBtnMenu,
    colorBtnMenu='black', 
    colorBtnActive='black',
    customStylesBoxBtns,
    navigation={about:[], proyects:[], skills:[], experience:[]}
}) => {
    const { changeSection } = useContext(SectionContext);
    const {about, proyects, skills, experience} = navigation;
    return (
        <nav className={`${customStylesNav}`}>
            {title && 
                <Title 
                    value={title} 
                    colorTitle={colorTitle}
                />
            }
            <div className={`box-btn-menu ${customStylesBtnMenu}`}>
                <BtnMenu color={colorBtnMenu} />
            </div>
            <div className={`nav-btns ${customStylesBoxBtns}`}>
                {actualSection !== 'experience' && 
                    <BtnNav
                        value='Experiencia'
                        color={colorBtnActive}
                        action={() => changeSection(experience[0], experience[1])}
                    />  
                }
                {actualSection !== 'skills' &&
                    <BtnNav 
                        value='Habilidades'
                        color={colorBtnActive}
                        action={() => changeSection(skills[0], skills[1])}
                    />  
                }
                {actualSection !== 'proyects' && 
                    <BtnNav 
                        value='Mis proyectos'
                        color={colorBtnActive}
                        isActive={true}
                        action={() => changeSection(proyects[0], proyects[1])}
                    />     
                }
                {actualSection !== 'about' && 
                    <BtnNav 
                        value='Sobe mi'
                        color={colorBtnActive}
                        isActive={true}
                        action={() => changeSection(about[0], about[1])}
                    />     
                }
            </div>
        </nav>
    )
}

export default Navbar;