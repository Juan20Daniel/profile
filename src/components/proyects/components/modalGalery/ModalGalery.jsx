import { useContext } from 'react';
import ModalGaleryContext from '@context/modalGalery/ModalGaleryContext';
import './modalGalery.css';

const ModalGalery = () => {
    const { elementRef, image } = useContext(ModalGaleryContext);
    return (
        <section className='modal-galery' ref={elementRef}>
            <img 
                src={image} 
                alt='Imagen de proyecto' 
                className='img-proyect'
            />
        </section>
    );
}

export default ModalGalery;