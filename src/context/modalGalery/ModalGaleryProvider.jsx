import { useState } from "react";
import ModalGaleryContext from "./ModalGaleryContext";
import { useDropdown } from '@hooks/useDropdown';
const ModalGaleryProvider = ({ children }) => {
    const [ image, setImage ] = useState(null);
    const { elementRef, dropdown, open } = useDropdown();
    const showModalGalery = (img) => {
        setImage(img);
        open();
    }
    return (
        <ModalGaleryContext.Provider value={{
            elementRef, 
            dropdown,
            image,
            showModalGalery 
        }}>
            {children}
        </ModalGaleryContext.Provider>
    )
}

export default ModalGaleryProvider; 
