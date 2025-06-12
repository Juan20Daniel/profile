import ModalGaleryContext from "./ModalGaleryContext";
import { useDropdown } from '@hooks/useDropdown';

const ModalGaleryProvider = ({ children }) => {
    const { elementRef, dropdown, close, open } = useDropdown();

    return (
        <ModalGaleryContext.Provider value={{
            elementRef, 
            dropdown,
            open,
            close 
        }}>
            {children}
        </ModalGaleryContext.Provider>
    )
}

export default ModalGaleryProvider; 
