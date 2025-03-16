import { useContext } from 'react';
import { IconMenu } from '@assets/btnMenu/IconMenu';
import MenuContext from '@context/menu/MenuContext';
import './btnMenu.css';

const BtnMenu = () => {
    const { openMenu } = useContext(MenuContext)
    return (
        <button 
            type='button' 
            className="btn-menu" 
            title='Menu'
            onClick={() => openMenu()}
        >
            <IconMenu />
        </button>
    );
} 

export default BtnMenu;