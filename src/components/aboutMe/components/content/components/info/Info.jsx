// import { useContext } from 'react';
// import SectionContext from '@context/section/SectionContext';
import Profile from './components/profile/Profile';
import './info.css';
const Info = () => {
    // const {changeSection} = useContext(SectionContext);
    return (
        <div className="info">
            <Profile />
            {/* <button className='next-btn' onClick={() => changeSection(0, 1, 'increment')}>
                proyects
            </button>
            <button className='next-btn' onClick={() => changeSection(0, 2, 'increment')}>
                skills
            </button>
            <button className='next-btn' onClick={() => changeSection(0, 3, 'increment')}>
                experience
            </button> */}
        </div>
    );
}

export default Info;