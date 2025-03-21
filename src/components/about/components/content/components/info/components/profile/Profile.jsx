import logo from '@assets/header/logo-phone.png';
import logoPC from '@assets/header/logo-pc.png';
import photo from '@assets/header/photo.jpg';
import './profile.css';
const Profile = () => (
    <div className="profile">
        <picture className='box-logo'>
            <source srcSet={logoPC} media="(min-width: 900px)"/>
            <img className='logo' src={logo} alt='Logo' />
        </picture>
        <figure className='box-photo'>
            <img className='photo' src={photo} alt='Mi foto' />
        </figure>
    </div>
);

export default Profile;