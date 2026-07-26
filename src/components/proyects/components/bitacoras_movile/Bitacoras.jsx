import { useContext } from "react";
import AppContext from '@context/apps/AppsContext';
import ModalGaleryContext from "@context/modalGalery/ModalGaleryContext";
import BoxContentApp from "../boxContentApp/BoxContentApp";
import Galery from "../galery/Galery";
import DetailsProyect from "../detailsProyect/DetailsProyect";
import imgBig from '@assets/proyects/proyect1/imgBig.png';
import imgSmall from '@assets/proyects/proyect1/imgSmall.png';
import BtnChangeProyect from "../btnChangeProyect/BtnChangeProyect";

const navigation = {
    about:[1,0],
    skills:[1,2],
    experience:[1,3]
}
const Bitacoras = () =>  {
    const { changeApp } = useContext(AppContext);
    const { setProyectName } = useContext(ModalGaleryContext);
    return (
        <BoxContentApp 
            position={0} 
            colorCard='coffee'
            navigation={navigation}
        >
            <Galery
                alt='Imagenes de proyecto nutrideli'
                proyectName='bitacoras_app'
                imgSmall={imgSmall}
                imgBig={imgBig}
            />
            <DetailsProyect
                title='App bitácoras'
                developmentTools='React native, Node, Express y Mysql'
                description='Aplicación móvil para facilitar el registro de entradas y salidas de personal y vehículos administrativos.'
                color='coffee'
            >
                <BtnChangeProyect
                    value='Siguiente'
                    typeAction='next'
                    btnColor='coffee'
                    action={() => {
                        setProyectName(null);
                        changeApp(0, 'left');
                    }}
                />
            </DetailsProyect> 
        </BoxContentApp>
    )
}


export default Bitacoras;