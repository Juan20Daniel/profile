import { useContext } from "react";
import BoxContentApp from "../boxContentApp/BoxContentApp";
import AppContext from "@context/apps/AppsContext";

const Generator = () => {
    const { changeApp } = useContext(AppContext);
   return (
        <BoxContentApp position={4}>
            <p>Generator</p>
            <button onClick={() => changeApp(4, 'right')}>Back</button>
        </BoxContentApp>
   )
}

export default Generator;