import { useState, useEffect, useRef } from "react";
import MenuContext from "./MenuContext";

const MenuProvider = ({children}) => {
    const [ menu, setMenu ] = useState(false);
    const elementRef = useRef(null);
    useEffect(() => {
        document.addEventListener('mousedown', handleMenu);
        return () => {
            document.removeEventListener('mousedown', handleMenu);
        }
    },[]);
    const openMenu = () => {
        setMenu(true);
    }
    const closeMenu = () => {
        setMenu(false);
    }
    const handleMenu = (ev) => {
        if(!elementRef.current) return;
        if(elementRef.current && !elementRef.current.contains(ev.target)) {
            closeMenu();
        }
    }
    return (
        <MenuContext.Provider value={{
            elementRef,
            menu,
            openMenu,
            closeMenu
        }}>
            {children}
        </MenuContext.Provider>
    );
}
export default MenuProvider;