import { useContext } from 'react';
import ModalGaleryContext from '@context/modalGalery/ModalGaleryContext';
import BtnCloseModal from './components/btnCloseModal/BtnCloseModal';
import { proyectImages } from '@assets/proyects/proyectsImages';
import { ImageItem } from './components/imageItem/ImageItem';
import './modalGalery.css';

const ModalGalery = () => {
    const { elementRef, proyectName } = useContext(ModalGaleryContext);
    return (
        <div className='modal-galery' ref={elementRef}>
            <BtnCloseModal />
            <div className='box-content-galery'>
                <p className='modal-title'>Algunas imágenes del proyecto</p>
                <div className='content-galery'>
                    {proyectImages(proyectName).map(proyectImage => (
                        <ImageItem
                            key={proyectImage.id}
                            image={proyectImage.img}
                            width={proyectImage.width}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ModalGalery;