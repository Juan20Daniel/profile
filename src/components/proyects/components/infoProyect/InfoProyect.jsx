import './infoProyect.css';

const InfoProyect = ({title, developmentTools, description, color, children}) => (
    <div className="info-proyect">
        <h1 className={`proyect-title proyect-title-${color}`}>{title}</h1>
        <p className="development-tools">{developmentTools}</p>
        <p className="proyect-description">{description}</p>
        <div className="box-buttons">
            {children} 
        </div>
    </div>
);


export default InfoProyect;