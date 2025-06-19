import './imageItem.css';

export const ImageItem = ({num, proyectName, title, image, width='full'}) => {
    
    return (
        <div className='image-item'>
            <div className='box-title'>
                <div className={`num ${proyectName}`}>
                    <span>{num}</span>
                </div>
                <p className='title'>{title}</p>
            </div>
            <div className='divider-line' />
            <img
                src={image} 
                alt='Imagen de proyecto' 
                className={`img-proyect img-proyect-${width}`}
            />
        </div>
    )
}
