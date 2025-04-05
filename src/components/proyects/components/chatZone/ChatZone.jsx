import { useContext } from "react";
import AppContext from '@context/apps/AppsContext';
import BoxContentApp from "../boxContentApp/BoxContentApp";
import Galery from "../galery/Galery";
import InfoProyect from "../infoProyect/InfoProyect";
import imgSmall from '@assets/proyects/proyect2/imgSmall.png';
import imgBig from '@assets/proyects/proyect2/imgBig.png';
import BtnChangeProyect from "../btnChangeProyect/BtnChangeProyect";

const navigation = {
    about:[1,0],
    skills:[1,2],
    experience:[1,3]
}
const ChatZone = () => {
    const { changeApp } = useContext(AppContext);
    return (
        <BoxContentApp 
            position={1} 
            colorCard='green'
            navigation={navigation}
        >
            <Galery 
                alt='Imagenes de proyecto chat zone'
                imgSmall={imgSmall}
                imgBig={imgBig}
            />
            <InfoProyect 
                title='Chat, Zone'
                developmentTools='Node, React, Css y Mongodb'
                description='Un chat web con sistema de rutas complejo y con el uso de comunicación bidireccional con socket.io.'
                color='green'
            >
                <BtnChangeProyect
                    value='Átras'
                    typeAction='back'
                    btnColor='green'
                    action={() => changeApp(1, 'right')}
                />
                <BtnChangeProyect
                    value='Siguiente'
                    typeAction='next'
                    btnColor='green'
                    action={() => changeApp(1, 'left')}
                />
            </InfoProyect> 
        </BoxContentApp>
    )
}

export default ChatZone;