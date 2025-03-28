import { useState } from "react";
import SectionContext from "./SectionContext";

const SectionProvider = ({children}) => {
    const [sections, setSections] = useState([
        {position: 0, name:'Sobre mi', place:'vertical-center'},
        {position: 1, name:'Mis proyectos', place:'bottom'},
        {position: 2, name:'Habilidades', place:'bottom'},
        {position: 3, name:'Experiencia', place:'bottom'}
    ]);

    const convertNum = (num) => {
        return parseInt(`${num}`.replace('-',''));
    }

    const changeSection = (actualSection, nextSection, action) => {
        const copy_sections = [...sections];
        let position = actualSection;
        let index = actualSection-nextSection;
        if(index < 0) index = convertNum(index);
        for(let i=0; i<=index; i++) {
            if(position === nextSection) {
                copy_sections[position].place = 'vertical-center';
            } else if(action === 'increment') {
                copy_sections[position].place = 'top';
                position++;
            } else {
                copy_sections[position].place = 'bottom';
                position--;
            }
        }
        setSections(copy_sections);
    }
    const changeSection_test = (actualSection, nextSection) => {
        const copy_sections = [...sections];
        let position = actualSection;
        let action = actualSection < nextSection ? 'increment':'decrement'
        let index = actualSection-nextSection;
        if(index < 0) index = convertNum(index);
        for(let i=0; i<=index; i++) {
            if(position === nextSection) {
                copy_sections[position].place = 'vertical-center';
            } else if(action === 'increment') {
                copy_sections[position].place = 'top';
                position++;
            } else {
                copy_sections[position].place = 'bottom';
                position--;
            }
        }
        setSections(copy_sections);
    }
    return (
        <SectionContext.Provider value={{
            sections, 
            changeSection,
            changeSection_test
        }}>
            {children}
        </SectionContext.Provider>
    );
}
export default SectionProvider;