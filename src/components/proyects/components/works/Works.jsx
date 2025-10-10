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
const Works = () => {
    const { changeApp } = useContext(AppContext);
   return (
        <BoxContentApp 
            position={3} 
            colorCard='black'
            navigation={navigation}
        >
            <Galery 
                alt='Imagenes de proyecto works'
                proyectName='works'
                imgSmall={imgSmall}
                imgBig={imgBig}
            />
            <DetailsProyect
                title='Works'
                developmentTools='Node, React native y MySQL'
                description='Una aplicación móvil que cumple el propósito de dar a conocer nuevas oportunidades laborales mediante publicaciones por medio de imágenes o personalizadas.'
                color='black'
            >
                <BtnChangeProyect
                    value='Átras'
                    typeAction='back'
                    btnColor='black'
                    action={() => changeApp(3, 'right')}
                />
                <BtnChangeProyect
                    value='Siguiente'
                    typeAction='next'
                    btnColor='black'
                    action={() => changeApp(3, 'left')}
                />
            </DetailsProyect>
        </BoxContentApp>
   )
}

export default Works;