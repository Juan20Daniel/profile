import { useContext } from 'react';
import MenuContext from '@context/menu/MenuContext';
import './boxMenu.css';
const BoxMenu = ({children}) => {
    const { elementRef } = useContext(MenuContext);
    return (
        <div className="box-menu" ref={elementRef}>
            {children}
        </div>
    );
}

export default BoxMenu;