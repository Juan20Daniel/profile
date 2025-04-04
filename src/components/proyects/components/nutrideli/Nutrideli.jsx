import BoxContentApp from "../boxContentApp/BoxContentApp";
import Galery from "../galery/Galery";
import InfoProyect from "../infoProyect/InfoProyect";
import imgSmall from '@assets/proyects/proyect1/imgSmall.png';
import imgBig from '@assets/proyects/proyect1/imgBig.png';
import './nutrideli.css';
const navigation = {
    about:[1,0],
    skills:[1,2],
    experience:[1,3]
}
const Nutrideli = () =>  (
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
        <InfoProyect 
            title='Guia medica'
            developmentTools='Node, React native, Mysql'
            description='Diseñada y creada con el proposito de dar publicidad a los consultorios de medicina.'
            color='blue'
        /> 
    </BoxContentApp>
)


export default Nutrideli;