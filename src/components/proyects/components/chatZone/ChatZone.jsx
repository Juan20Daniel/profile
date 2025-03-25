import { useContext } from "react";
import BoxContentApp from "../boxContentApp/BoxContentApp";
import AppContext from "@context/apps/AppsContext";

const ChatZone = () => {
    const { changeApp } = useContext(AppContext);
   return (
        <BoxContentApp position={1}>
            <p>ChatZone</p>
            <button onClick={() => changeApp(1, 'right')}>Back</button>
            <button onClick={() => changeApp(1, 'left')}>Next</button>
        </BoxContentApp>
   )
}

export default ChatZone;