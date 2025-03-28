import { useContext } from 'react';
import { IconMenu } from '@assets/btnMenu/IconMenu';
import DropdownMenuContext from '@context/dropdownMenu/DropdownMenuContext';
import './btnMenu.css';

const BtnMenu = ({color='white'}) => {
    const { openMenu } = useContext(DropdownMenuContext);
    return (
        <button 
            type='button'
            className="btn-menu"
            title='Menu'
            onClick={() => openMenu()}
        >
            <IconMenu color={color} />
        </button>
    );
} 

export default BtnMenu;