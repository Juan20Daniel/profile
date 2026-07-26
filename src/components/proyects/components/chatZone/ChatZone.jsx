import { useContext } from "react";
import AppContext from '@context/apps/AppsContext';
import ModalGaleryContext from "@context/modalGalery/ModalGaleryContext";
import BoxContentApp from "../boxContentApp/BoxContentApp";
import Galery from "../galery/Galery";
import DetailsProyect from "../detailsProyect/DetailsProyect";
import imgSmall from '@assets/proyects/proyect3/imgSmall.png';
import imgBig from '@assets/proyects/proyect3/imgBig.png';
import BtnChangeProyect from "../btnChangeProyect/BtnChangeProyect";

const navigation = {
    about:[1,0],
    skills:[1,2],
    experience:[1,3]
}
const ChatZone = () =>  {
    const { changeApp } = useContext(AppContext);
    const { setProyectName } = useContext(ModalGaleryContext);
    return (
        <BoxContentApp 
            position={2} 
            colorCard='green'
            navigation={navigation}
        >
            <Galery 
                alt='Imagenes de proyecto ChatZone'
                proyectName='chatZone'
                imgSmall={imgSmall}
                imgBig={imgBig}
            />
            <DetailsProyect 
                title='Chat, Zone'
                developmentTools='Node, React, Css y Mongodb'
                description='Un chat web con sistema de rutas complejo y con el uso de comunicación bidireccional con socket.io.'
                color='green'
            >
                <BtnChangeProyect
                    value='Átras'
                    typeAction='back'
                    btnColor='green'
                    action={() => changeApp(2, 'right')}
                />
                <BtnChangeProyect
                    value='Siguiente'
                    typeAction='next'
                    btnColor='green'
                    action={() => {
                        setProyectName(null);
                        changeApp(2, 'left');
                    }}
                />
            </DetailsProyect> 
        </BoxContentApp>
    )
}


export default ChatZone;