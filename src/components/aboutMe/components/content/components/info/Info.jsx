// import { useContext } from 'react';
// import SectionContext from '@context/section/SectionContext';
import Profile from './components/profile/Profile';
import About from './components/about/About';
import Contacts from './components/contacts/Contacts';
import BtnGithub from './components/btnGithub/BtnGithub';
import './info.css';
// const {changeSection} = useContext(SectionContext);
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




{/* <button className='next-btn' onClick={() => changeSection(0, 1, 'increment')}>
    proyects
</button>
<button className='next-btn' onClick={() => changeSection(0, 2, 'increment')}>
    skills
</button>
<button className='next-btn' onClick={() => changeSection(0, 3, 'increment')}>
    experience
</button> */}