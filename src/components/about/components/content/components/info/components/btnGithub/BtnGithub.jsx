import { IconGuthub } from "@assets/header/IconGithub";
import './btnGithub.css';
const BtnGithub = () => (
    <a 
        href='https://github.com/Juan20Daniel' 
        className="btn-github"
        target='_blank'
    >
        <IconGuthub />
        <span>Github</span>
    </a>
);

export default BtnGithub;