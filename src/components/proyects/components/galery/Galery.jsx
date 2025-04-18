import { useContext } from 'react';
import { useGetSizeWindow } from '@hooks/useGetSizeWindow';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ModalGaleryContext from '@context/modalGalery/ModalGaleryContext';
import './galery.css';

const Galery = ({alt, imgSmall, imgBig}) =>  {
    const { showModalGalery } = useContext(ModalGaleryContext);
    const { width } = useGetSizeWindow();

    return (
        <div className="galery-nutrideli">
            <div className="container-image" onClick={() => showModalGalery(width < 1000 ? imgSmall : imgBig)}>
                <LazyLoadImage
                    alt={alt}
                    src={width < 1000 ? imgSmall : imgBig}
                    style={{ width: "100%", height: "auto", objectFit:'contain' }}
                    effect="blur"
                    wrapperProps={{
                        style: { transitionDelay: "0.5s" },
                    }}
                />
            </div>
        </div>
    )
}


export default Galery;