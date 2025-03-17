import { IconArrowCircleUp } from '@assets/header/IconArrowCircleUp';
import { IconEmail } from '@assets/header/IconEmail';
import { IconWhatApp } from '@assets/header/IconWhatApp';
import { IconLinkding } from '@assets/header/IconLinkding';
import BtnContact from './components/btnContact/BtnContact';
import './contacts.css';
const Contacts = () => {
    return (
        <div className='contacts'>
            <div className="box-contact-title">
                <span>Contactar</span>
                <IconArrowCircleUp />
            </div>
            <div className="box-btn-contacts">
                <BtnContact link='https://mail.google.com/mail/?view=cm&fs=1&to=juandaniel200031@gmail.com'>
                    <IconEmail />
                </BtnContact>
                <BtnContact link='https://wa.me/523141023884?'>
                    <IconWhatApp />
                </BtnContact>
                <BtnContact link='https://www.linkedin.com/in/juandaniel-daniel-morales-3698b62b9/'>
                    <IconLinkding />
                </BtnContact>
            </div>
        </div>
    );
}

export default Contacts;