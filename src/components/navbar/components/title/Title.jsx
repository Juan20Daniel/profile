import { useLayoutEffect, useState } from 'react';
import './title.css';

const Title = ({value}) => {
    const [ title, setTitle ] = useState([]);
    useLayoutEffect(() => {
        separeTitle(value);
    },[]);
    const separeTitle = (title) => {
        const words = title.split(' '); 
        setTitle(words);
    }
    return (
        <h1 className='title-section'>{title[0]} <span>{title[1]}</span></h1>
    );
} 

export default Title;