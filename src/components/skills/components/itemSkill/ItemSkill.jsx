import './itemSkill.css';

const ItemSkill = ({value}) => (
    <li className="item-skill">
        <div className='point' />
        <span className='value'>{value}</span>
    </li>
);

export default ItemSkill;