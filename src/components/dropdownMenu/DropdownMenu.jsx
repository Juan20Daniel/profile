import { useContext, useLayoutEffect, useState } from 'react';
import DropdownMenuContext from '@context/dropdownMenu/DropdownMenuContext';
import SectionContext from '@context/section/SectionContext';
import BtnNav from '../btnNav/BtnNav';
import './dropdownMenu.css';
const DropdownMenu = () => {
    const [ actualSection, setActialSection ] = useState(0);
    const { sections, changeSection } = useContext(SectionContext);
    const { elementRef, close } = useContext(DropdownMenuContext);
    useLayoutEffect(() => {
        const result = sections.find(section => section.place === 'vertical-center').position;
        setActialSection(result);
    },[sections]);
    return (
        <div className="box-menu" ref={elementRef}>
            {sections
            .filter(section => section.place!=='vertical-center')
            .map(section => (
                <BtnNav
                    key={section.position}
                    value={section.name}
                    action={() => {
                        changeSection(actualSection, section.position)
                        close();
                    }}
                />
            ))}
        </div>
    );
}

export default DropdownMenu;