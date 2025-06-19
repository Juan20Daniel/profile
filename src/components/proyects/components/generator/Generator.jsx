import { useContext } from "react";
import AppContext from '@context/apps/AppsContext';
import BoxContentApp from "../boxContentApp/BoxContentApp";
import Galery from "../galery/Galery";
import DetailsProyect from "../detailsProyect/DetailsProyect";
import imgSmall from '@assets/proyects/proyect5/imgSmall.png';
import imgBig from '@assets/proyects/proyect5/imgBig.png';
import BtnChangeProyect from "../btnChangeProyect/BtnChangeProyect";
const navigation = {
    about:[1,0],
    skills:[1,2],
    experience:[1,3]
}
const Generator = () => {
    const { changeApp } = useContext(AppContext);
   return (
        <BoxContentApp 
            position={4}
            colorCard='blue'
            navigation={navigation}
        >
            <Galery 
                alt='Imagenes de proyecto generador'
                proyectName='generator'
                
                imgSmall={imgSmall}
                imgBig={imgBig}
            />
            <DetailsProyect 
                title='Itecce credenciales'
                developmentTools='Node, React, Css y Mysql'
                description='Una aplicación que genera credenciales escolares para estudiantes, maestros y trabajadores de la Universidad Itecce.'
                color='blue'
            >
                <BtnChangeProyect
                    value='Átras'
                    typeAction='back'
                    btnColor='blue'
                    action={() => changeApp(4, 'right')}
                />
            </DetailsProyect>
        </BoxContentApp>
   )
}

export default Generator;