import { useContext } from 'react';
import { useGetOrientation } from '@hooks/useGetOrientation';
import DropdownMenu from '../dropdownMenu/DropdownMenu';
import DropdownMenuContext from '../../context/DropdownMenu/DropdownMenuContext';
import './main.css';

const Font = ({children}) => {
  const { menu } = useContext(DropdownMenuContext);
  const { orientation } = useGetOrientation();
  return (
    <main className={`${orientation}`}>
      {menu && <DropdownMenu />}
      {children}
    </main>
  );
}

export default Font;