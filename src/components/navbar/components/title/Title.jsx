import { useLayoutEffect, useState } from 'react';
import './title.css';

const Title = ({value, colorTitle='black'}) => {
    const [ title, setTitle ] = useState([]);
    useLayoutEffect(() => {
        separeTitle(value);
    },[]);
    const separeTitle = (title) => {
        const words = title.split(' '); 
        setTitle(words);
    }
    return (
        <h1 className={`title-section color-title-${colorTitle}`}>{title[0]} <span>{title[1]}</span></h1>
    );
} 

export default Title;