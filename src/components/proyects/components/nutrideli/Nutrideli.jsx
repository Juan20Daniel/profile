import { useContext } from "react";
import figure from "@assets/proyects/figure.png";
import BoxContentApp from "../boxContentApp/BoxContentApp";
import AppContext from "@context/apps/AppsContext";
import Navbar from "../../../navbar/Navbar";
import BtnMenu from "../../../btnMenu/BtnMenu";
import './nutrideli.css';

const Nutrideli = () => {
    const { changeApp } = useContext(AppContext);
   return (
        <BoxContentApp position={0}>
            <Navbar title='Mis proyectos'>
                <BtnMenu color="black" />
            </Navbar>
            <div className="box-info-app">
                <div className="box-center-info-app">
                    <img src={figure} alt="Figura" />
                    <p>Nutrideli</p>
                    <button onClick={() => changeApp(0, 'left')}>Next</button>
                    <img src={figure} alt="Figura" />
                </div>
            </div>
        </BoxContentApp>
   )
}

export default Nutrideli;