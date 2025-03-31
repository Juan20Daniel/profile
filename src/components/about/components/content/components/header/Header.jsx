import { useContext } from 'react';
import { useGetOrientation } from '@hooks/useGetOrientation';
import { useGetSizeWindow } from '@hooks/useGetSizeWindow';
import SectionContext from '@context/section/SectionContext';
import Navbar from '@components/navbar/Navbar';
import BtnMenu from '@components/btnMenu/BtnMenu';
import BtnNav from '@components/btnNav/BtnNav';
import './header.css';
const Header = () => {
    const { changeSection } = useContext(SectionContext);
    const { width, height } = useGetSizeWindow();
    const { orientation } = useGetOrientation();

    return (
        <header>
            <Navbar>
                {width <= 599 || height <= 450 || (orientation === 'horizontal' && width <= 1100)
                    ?   <BtnMenu />
                    :   <div className={`nav-btns ${orientation === 'horizontal' && height >= 700 && 'align-vertical'}`}>
                            <BtnNav 
                                value='Experiencia'
                                color='white'
                                action={() => {
                                    changeSection(0, 3);
                                }}
                            />  
                            <BtnNav 
                                value='Habilidades'
                                color='white'
                                action={() => {
                                    changeSection(0, 2);
                                }}
                            />  
                            <BtnNav 
                                value='Proyectos'
                                color='white'
                                isActive={true}
                                action={() => {
                                    changeSection(0, 1);
                                }}
                            />      
                        </div>
                }
            </Navbar>
            <div className="box-specialty">
                <span className='specialty'>Fullstack developer</span>
                <span className='languege'>Javascript</span>
            </div>
        </header>
    );
}

export default Header;