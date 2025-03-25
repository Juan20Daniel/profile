import { useContext } from "react";
import BoxContentApp from "../boxContentApp/BoxContentApp";
import AppContext from "@context/apps/AppsContext";

const Nutrideli = () => {
    const { changeApp } = useContext(AppContext);
   return (
        <BoxContentApp position={0}>
            <p>Nutrideli</p>
            <button onClick={() => changeApp(0, 'left')}>Next</button>
        </BoxContentApp>
   )
}

export default Nutrideli;