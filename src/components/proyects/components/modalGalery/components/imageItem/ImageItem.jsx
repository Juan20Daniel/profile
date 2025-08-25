import './imageItem.css';

export const ImageItem = ({image, width='full'}) => (
    <div className={`image-item image-item-${width}`}>
        <img
            src={image} 
            alt='Imagen de proyecto' 
            className={`img-proyect img-proyect-${width}`}
        />
    </div>
);