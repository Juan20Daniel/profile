import { useContext } from 'react';
import ModalGaleryContext from '@context/modalGalery/ModalGaleryContext';
import BtnCloseModal from './components/btnCloseModal/BtnCloseModal';
import './modalGalery.css';

const ModalGalery = () => {
    const { elementRef, image } = useContext(ModalGaleryContext);
    return (
        <div className='modal-galery' ref={elementRef}>
            <BtnCloseModal />
            {/* <img 
                src={image} 
                alt='Imagen de proyecto' 
                className='img-proyect'
            /> */}
        </div>
    );
}

export default ModalGalery;