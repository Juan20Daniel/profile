import { useState, useLayoutEffect } from 'react';

export const useGetOrientation = () => {
    const [ width, setWidth ] = useState(window.innerWidth);
    const [ height, setHeight ] = useState( window.innerHeight);
    useLayoutEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[]);
  
    return {
        orientation: width > height ? 'horizontal' : 'vertical'
    };
}