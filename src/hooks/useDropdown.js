import { useEffect, useRef, useState } from 'react'

export const useDropdown = () => {
    const [ dropdown, setDropdown ] = useState(false);
    const elementRef = useRef(null);

     useEffect(() => {
        document.addEventListener('mousedown', handleDropdown);
        return () => {
            document.removeEventListener('mousedown', handleDropdown);
        }
    },[]);

    const open = () => {
        setDropdown(true);
    }
    const close = () => {
        setDropdown(false);
    }
    const handleDropdown = (ev) => {
        if(!elementRef.current) return;
        if(elementRef.current && !elementRef.current.contains(ev.target)) {
            close();
        }
    }
    return {
        elementRef,
        dropdown,
        open,
        close
    }
}
