import figure from "@assets/skills/figure.webp";
import { UndrawDeveloper } from "@assets/skills/UndrawDeveloper";
import './ilustration.css';
const Ilustration = () => (
    <div className="ilustration">
        <img src={figure} alt='figuea de fondo' className="figure" />
        <UndrawDeveloper />
    </div>
);

export default Ilustration;