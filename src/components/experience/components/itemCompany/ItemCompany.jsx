import line from '@assets/experience/line.png';
import './itemCompany.css';
export const ItemCompany = ({name, history}) => (
    <article className='company'>
        <span className='company-name'>{name}</span>
        <p className='history'>{history}</p>
        <img src={line} className='line' />
    </article>
);

export default ItemCompany;