import { useContext } from "react";
import BoxContentApp from "../boxContentApp/BoxContentApp";
import AppContext from "@context/apps/AppsContext";
const navigation = {
    about:[1,0],
    skills:[1,2],
    experience:[1,3]
}
const ChatZone = () => {
    const { changeApp } = useContext(AppContext);
   return (
        <BoxContentApp position={1} navigation={navigation}>
            <p>ChatZone</p>
            <button onClick={() => changeApp(1, 'right')}>Back</button>
            <button onClick={() => changeApp(1, 'left')}>Next</button>
        </BoxContentApp>
   )
}

export default ChatZone;