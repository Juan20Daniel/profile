import { useContext } from "react";
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
                <BtnMenu />
            </Navbar>
            <p>Nutrideli</p>
            <button onClick={() => changeApp(0, 'left')}>Next</button>
        </BoxContentApp>
   )
}

export default Nutrideli;