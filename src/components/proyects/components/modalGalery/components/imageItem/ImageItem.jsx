import './imageItem.css';

export const ImageItem = ({image, width='full', rounded=false}) => (
    <div className={`image-item image-item-${width}`}>
        <img
            src={image}
            alt='Imagen de proyecto' 
            className={`img-proyect img-proyect-${width} ${rounded ? 'rounded' :''}`}
        />
    </div>
);