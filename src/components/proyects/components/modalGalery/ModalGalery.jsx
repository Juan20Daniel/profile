import { useContext } from 'react';
import ModalGaleryContext from '@context/modalGalery/ModalGaleryContext';
import BtnCloseModal from './components/btnCloseModal/BtnCloseModal';
import { proyectImages } from '@assets/proyects/proyectsImages';
import './modalGalery.css';
import { ImageItem } from './components/imageItem/ImageItem';

const ModalGalery = () => {
    const { elementRef, proyectName } = useContext(ModalGaleryContext);
    console.log(proyectName)
    return (
        <div className='modal-galery' ref={elementRef}>
            <BtnCloseModal />
            <div className='box-content-galery'>
                <p className='modal-title'>Algunas imágenes del proyecto</p>
                {proyectImages(proyectName).map(proyectImage => (
                    <ImageItem
                        key={proyectImage.id}
                        num={proyectImage.id}
                        proyectName={proyectName}
                        title={proyectImage.title}
                        image={proyectImage.img}
                        width={proyectImage.width}
                    />
                ))}
            </div>
        </div>
    );
}

export default ModalGalery;