import { useContext } from "react";
import BoxContentApp from "../boxContentApp/BoxContentApp";
import AppContext from "@context/apps/AppsContext";

const Vituchs = () => {
    const { changeApp } = useContext(AppContext);
   return (
        <BoxContentApp position={2}>
            <p>Vituchs</p>
            <button onClick={() => changeApp(2, 'right')}>Back</button>
            <button onClick={() => changeApp(2, 'left')}>Next</button>
        </BoxContentApp>
   )
}

export default Vituchs;