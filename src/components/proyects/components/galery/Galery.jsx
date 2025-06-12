import { useContext } from 'react';
import { useGetSizeWindow } from '@hooks/useGetSizeWindow';
import ModalGaleryContext from '@context/modalGalery/ModalGaleryContext';
import './galery.css';

const Galery = ({alt, imgSmall, imgBig}) =>  {
    const { open } = useContext(ModalGaleryContext);
    const { width } = useGetSizeWindow();

    return (
        <div className="galery-nutrideli">
            <div className="container-image" onClick={() => open()}>
                <img
                    alt={alt}
                    src={width < 1000 ? imgSmall : imgBig}
                    style={{ width: "100%", height: "auto", objectFit:'contain' }}
                />
            </div>
        </div>
    )
}


export default Galery;