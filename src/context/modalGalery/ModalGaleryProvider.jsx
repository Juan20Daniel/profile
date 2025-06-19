import { useState } from "react";
import ModalGaleryContext from "./ModalGaleryContext";
import { useDropdown } from '@hooks/useDropdown';

const ModalGaleryProvider = ({ children }) => {
    const [ proyectName, setProyectName ] = useState(null);
    const { elementRef, dropdown, close, open } = useDropdown();
    const openModalGalery = (proyect) => {
        open();
        setProyectName(proyect);
    }
    return (
        <ModalGaleryContext.Provider value={{
            elementRef, 
            dropdown,
            close,
            proyectName,
            setProyectName,
            openModalGalery,
        }}>
            {children}
        </ModalGaleryContext.Provider>
    )
}

export default ModalGaleryProvider; 
