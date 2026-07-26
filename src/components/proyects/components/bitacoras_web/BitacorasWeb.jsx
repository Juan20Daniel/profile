import { useContext } from "react";
import AppContext from '@context/apps/AppsContext';
import ModalGaleryContext from "@context/modalGalery/ModalGaleryContext";
import BoxContentApp from "../boxContentApp/BoxContentApp";
import Galery from "../galery/Galery";
import DetailsProyect from "../detailsProyect/DetailsProyect";
import imgBig from '@assets/proyects/proyect2/imgBig.png';
import imgSmall from '@assets/proyects/proyect2/imgSmall.png';
import BtnChangeProyect from "../btnChangeProyect/BtnChangeProyect";

const navigation = {
    about:[1,0],
    skills:[1,2],
    experience:[1,3]
}
const BitacorasWeb = () =>  {
    const { changeApp } = useContext(AppContext);
    const { setProyectName } = useContext(ModalGaleryContext);
    return (
        <BoxContentApp 
            position={1} 
            colorCard='blue'
            navigation={navigation}
        >
            <Galery 
                alt='Imagenes de proyecto bitácoras web'
                proyectName='bitacoras_web'
                imgSmall={imgSmall}
                imgBig={imgBig}
            />
            <DetailsProyect 
                title='Bitácoras web'
                developmentTools='Next, Node, Express y Mysql'
                description='Aplicación web para facilitar el registro de entradas y salidas de personal y vehículos administrativos así como la gestión de inventario de todo tipo de equipos de una institución educativa. '
                color='blue'
            >
                <BtnChangeProyect
                    value='Átras'
                    typeAction='back'
                    btnColor='blue'
                    action={() => changeApp(1, 'right')}
                />
                <BtnChangeProyect
                    value='Siguiente'
                    typeAction='next'
                    btnColor='blue'
                    action={() => {
                        setProyectName(null);
                        changeApp(1, 'left');
                    }}
                />
            </DetailsProyect> 
        </BoxContentApp>
    )
}


export default BitacorasWeb;