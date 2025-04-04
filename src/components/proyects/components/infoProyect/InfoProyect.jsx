import { useContext } from "react";
import AppContext from "@context/apps/AppsContext";
import './infoProyect.css';

const InfoProyect = ({title, developmentTools, description, color}) => {
    const { changeApp } = useContext(AppContext);
    return (
        <div className="info-proyect">
            <h1 className={`proyect-title proyect-title-${color}`}>{title}</h1>
            <p className="development-tools">{developmentTools}</p>
            <p className="proyect-description">{description}</p>
            <button onClick={() => changeApp(0, 'left')}>Next</button> 
        </div>
    );
}

export default InfoProyect;