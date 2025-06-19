import { IconX } from "@assets/IconX";
import './btnCloseModal.css';
import { useContext } from "react";
import ModalGaleryContext from "@context/modalGalery/ModalGaleryContext";

const BtnCloseModal = () => {
    const { close } = useContext(ModalGaleryContext);
    return (
        <button className='btn-close-modal' onClick={() => close()}>
            <IconX size={20} color='white' />
        </button>
    )
}

export default BtnCloseModal;
