import { useContext } from "react";
import AppContext from '@context/apps/AppsContext';
import BoxContentApp from "../boxContentApp/BoxContentApp";
import Galery from "../galery/Galery";
import DetailsProyect from "../detailsProyect/DetailsProyect";
import imgSmall from '@assets/proyects/proyect1/imgSmall.webp';
import imgBig from '@assets/proyects/proyect1/imgBig.webp';
import BtnChangeProyect from "../btnChangeProyect/BtnChangeProyect";

const navigation = {
    about:[1,0],
    skills:[1,2],
    experience:[1,3]
}
const Nutrideli = () =>  {
    const { changeApp } = useContext(AppContext);
    return (
        <BoxContentApp 
            position={0} 
            colorCard='blue'
            navigation={navigation}
        >
            <Galery 
                alt='Imagenes de proyecto nutrideli'
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
                    value='Siguiente'
                    typeAction='next'
                    btnColor='blue'
                    action={() => changeApp(0, 'left')}
                />
            </DetailsProyect> 
        </BoxContentApp>
    )
}


export default Nutrideli;