import { useContext } from 'react';
import { IconMenu } from '@assets/btnMenu/IconMenu';
import DropdownMenuContext from '@context/dropdownMenu/DropdownMenuContext';
import './btnMenu.css';

const BtnMenu = () => {
    const { openMenu } = useContext(DropdownMenuContext);
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