import { useContext } from "react";
import BoxContentApp from "../boxContentApp/BoxContentApp";
import AppContext from "@context/apps/AppsContext";
import './nutrideli.css';
const navigation = {
    about:[1,0],
    skills:[1,2],
    experience:[1,3]
}
const Nutrideli = () => {
    const { changeApp } = useContext(AppContext);
   return (
        <BoxContentApp 
            position={0} 
            colorCard='blue'
            navigation={navigation}
        >
            <p>Nutrideli</p>
            <button onClick={() => changeApp(0, 'left')}>Next</button>   
        </BoxContentApp>
   )
}

export default Nutrideli;