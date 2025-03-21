import Profile from './components/profile/Profile';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import BtnGithub from './components/btnGithub/BtnGithub';
import './info.css';

const Info = () => {
    return (
        <div className="info">
            <Profile />
            <About />
            <Contacts />
            <BtnGithub />
        </div>
    );
}

export default Info;