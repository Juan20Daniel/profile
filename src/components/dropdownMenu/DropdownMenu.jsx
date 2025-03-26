import { useContext } from 'react';
import BtnNav from '../btnNav/BtnNav';
import DropdownMenuContext from '@context/DropdownMenu/DropdownMenuContext';
import './dropdownMenu.css';
const DropdownMenu = () => {
    const { elementRef, closeMenu } = useContext(DropdownMenuContext);
    return (
        <div className="box-menu" ref={elementRef}>
            <BtnNav
                value='Mis proyectos'
                action={() => {
                    closeMenu();
                }}
            />
            <BtnNav 
                value='Habilidades'
                action={() => {
                    closeMenu();
                }}
            />
            <BtnNav 
                value='Experiencia'
                action={() => {
                    closeMenu();
                }}
            />
        </div>
    );
}

export default DropdownMenu;