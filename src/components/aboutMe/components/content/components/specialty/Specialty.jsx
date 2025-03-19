import Navbar from '@components/navbar/Navbar';
import BtnMenu from '@components/btnMenu/BtnMenu';
import BtnNav from '@components/btnNav/BtnNav';
import { useGetSizeWindow } from '@hooks/useGetSizeWindow';
import { useGetOrientation } from '@hooks/useGetOrientation';
import './specialty.css';
const Specialty = () => {
    const { width, height } = useGetSizeWindow();
    const { orientation } = useGetOrientation();
    return (
        <div className="specialty">
            <Navbar>
                {width <= 599 || orientation === 'horizontal'
                    ?   <BtnMenu />
                    :   <div className="nav-btns">
                            <BtnNav 
                                value='Experiencia'
                                color='white'
                            />  
                            <BtnNav 
                                value='Habilidades'
                                color='white'
                            />  
                            <BtnNav 
                                value='Proyectos'
                                color='white'
                                isActive={true}
                            />      
                        </div>
                }
            </Navbar>
            <div className="box-specialty">
                <span className='specialty'>Fullstack developer</span>
                <span className='languege'>Javascript</span>
            </div>
        </div>
    );
}

export default Specialty;