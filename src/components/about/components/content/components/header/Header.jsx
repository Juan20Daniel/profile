import SectionContext from "@context/section/SectionContext";
import Navbar from '@components/navbar/Navbar';
import BtnNav from '@components/btnNav/BtnNav';
import { useContext } from 'react';
import './header.css';
 
const Header = () => {
    const { changeSection } = useContext(SectionContext);
    return (
        <header>
            <Navbar
                customStylesNav='nav-about'
                colorBtnMenu='white'
                customStylesBtnMenu='as-disable-menu'
                customStylesBoxBtns='as-show-btns align-vertical'
            >
                <BtnNav
                    value='Experiencia'
                    color='white'
                    action={() => changeSection(0, 3)}
                />  
                <BtnNav
                    value='Habilidades'
                    color='white'
                    action={() => changeSection(0, 2)}
                />     
                <BtnNav 
                    value='Proyectos'
                    color='white'
                    isActive={true}
                    action={() => changeSection(0, 1)}
                />    
            </Navbar>
            <div className="box-specialty">
                <span className='specialty'>Fullstack developer</span>
                <span className='languege'>Javascript</span>
            </div>
        </header>
    );
}

export default Header;