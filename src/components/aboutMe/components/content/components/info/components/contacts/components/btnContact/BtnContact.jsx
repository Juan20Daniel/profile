import './btnContact.css';

const BtnContact = ({link, children}) => (
    <a className='btn-contact' href={link} target='_blank'>
        {children}
    </a>
);

export default BtnContact;