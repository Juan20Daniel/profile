import { useContext } from 'react';
import { useGetSizeWindow } from '@hooks/useGetSizeWindow';
import ModalGaleryContext from '@context/modalGalery/ModalGaleryContext';
import './galery.css';

const Galery = ({alt, proyectName, imgSmall, imgBig}) =>  {
    const { openModalGalery } = useContext(ModalGaleryContext);
    const { width } = useGetSizeWindow();

    return (
        <div className="galery-nutrideli">
            <div className="container-image" onClick={() => openModalGalery(proyectName)}>
                <img
                    alt={alt}
                    src={width < 1000 ? imgSmall : imgBig}
                    style={{ width: "100%", height: "auto", objectFit:'contain' }}
                    title='Ver imagenes'
                />
            </div>
        </div>
    )
}


export default Galery;