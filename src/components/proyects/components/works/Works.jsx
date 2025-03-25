import { useContext } from "react";
import BoxContentApp from "../boxContentApp/BoxContentApp";
import AppContext from "@context/apps/AppsContext";

const Works = () => {
    const { changeApp } = useContext(AppContext);
   return (
        <BoxContentApp position={3}>
            <p>Works</p>
            <button onClick={() => changeApp(3, 'right')}>Back</button>
            <button onClick={() => changeApp(3, 'left')}>Next</button>
        </BoxContentApp>
   )
}

export default Works;