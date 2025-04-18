import { useContext } from 'react';
import { useGetOrientation } from '@hooks/useGetOrientation';
import DropdownMenuContext from '@context/dropdownMenu/DropdownMenuContext';
import DropdownMenu from '../dropdownMenu/DropdownMenu';
import './main.css';

const Font = ({children}) => {
  const { dropdown } = useContext(DropdownMenuContext);
  const { orientation } = useGetOrientation();
  return (
    <main className={`${orientation}`}>
      {dropdown && <DropdownMenu />}
      {children}
    </main>
  );
}

export default Font;