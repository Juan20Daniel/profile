import { useContext } from "react";
import AppContext from '@context/apps/AppsContext';
import BoxContentApp from "../boxContentApp/BoxContentApp";
import Galery from "../galery/Galery";
import DetailsProyect from "../detailsProyect/DetailsProyect";
import imgSmall from '@assets/proyects/proyect4/imgSmall.webp';
import imgBig from '@assets/proyects/proyect4/imgBig.webp';
import BtnChangeProyect from "../btnChangeProyect/BtnChangeProyect";

const navigation = {
    about:[1,0],
    skills:[1,2],
    experience:[1,3]
}
const MedicanGuia = () => {
    const { changeApp } = useContext(AppContext);
    return (
        <BoxContentApp 
            position={3}
            colorCard='blue'
            navigation={navigation}
        >
            <Galery 
                alt='Imagenes de proyecto chat zone'
                proyectName='guiaMedica'
                imgSmall={imgSmall}
                imgBig={imgBig}
            />
            <DetailsProyect
                title='Guia medica'
                developmentTools='Node, React native, Mysql'
                description='Diseñada y creada con el propósito de brindar gran cantidad de publicidad a los consultorios de medicina.'
                color='blue'
            >
                <BtnChangeProyect
                    value='Átras'
                    typeAction='back'
                    btnColor='blue'
                    action={() => changeApp(3, 'right')}
                />
                <BtnChangeProyect
                    value='Siguiente'
                    typeAction='next'
                    btnColor='blue'
                    action={() => changeApp(3, 'left')}
                />
            </DetailsProyect> 
        </BoxContentApp>
    )
}

export default MedicanGuia;