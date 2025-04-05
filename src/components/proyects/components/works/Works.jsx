import { useContext } from "react";
import AppContext from '@context/apps/AppsContext';
import BoxContentApp from "../boxContentApp/BoxContentApp";
import Galery from "../galery/Galery";
import InfoProyect from "../infoProyect/InfoProyect";
import imgSmall from '@assets/proyects/proyect4/imgSmall.png';
import imgBig from '@assets/proyects/proyect4/imgBig.png';
import BtnChangeProyect from "../btnChangeProyect/BtnChangeProyect";
const navigation = {
    about:[1,0],
    skills:[1,2],
    experience:[1,3]
}
const Works = () => {
    const { changeApp } = useContext(AppContext);
   return (
        <BoxContentApp 
            position={3} 
            colorCard='black'
            navigation={navigation}
        >
            <Galery 
                alt='Imagenes de proyecto nutrideli'
                imgSmall={imgSmall}
                imgBig={imgBig}
            />
            <InfoProyect 
                title='Works'
                developmentTools='Node, React, Css y Mysql'
                description='Una aplicación web creada para una agencia aduanal que sirve para simplificar los trámites y procesos de transporte logístico que se realizan de forma manual y con herramientas poco prácticas.'
                color='orange'
            >
                <BtnChangeProyect
                    value='Átras'
                    typeAction='back'
                    btnColor='orange'
                    action={() => changeApp(3, 'right')}
                />
                <BtnChangeProyect
                    value='Siguiente'
                    typeAction='next'
                    btnColor='orange'
                    action={() => changeApp(3, 'left')}
                />
            </InfoProyect>
        </BoxContentApp>
   )
}

export default Works;