import { IconArrowForward } from '@assets/proyects/IconArrowForward';
import './btnChangeProyect.css';
const BtnChangeProyect = ({value, typeAction, btnColor, action}) => {
    return (
        <button 
            className={`btn-change-proyect btn-type-${typeAction} btn-color-${btnColor}`} 
            onClick={() => action()}
        >
            <span>{value}</span>
            <IconArrowForward
                color='white'
            />
        </button>
    )
}

export default BtnChangeProyect;