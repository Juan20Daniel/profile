import { useContext } from 'react';
import { useGetOrientation } from '@hooks/useGetOrientation';
import { useGetSizeWindow } from '@hooks/useGetSizeWindow';
import AboutContext from '@context/about/AboutContext';
import Navbar from '@components/navbar/Navbar';
import BtnMenu from '@components/btnMenu/BtnMenu';
import BtnNav from '@components/btnNav/BtnNav';
import './header.css';
const Header = () => {
    const { proyects, skills, experience } = useContext(AboutContext);
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
                                action={experience}
                            />  
                            <BtnNav 
                                value='Habilidades'
                                color='white'
                                action={skills}
                            />  
                            <BtnNav 
                                value='Proyectos'
                                color='white'
                                isActive={true}
                                action={proyects}
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