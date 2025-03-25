import { useState } from "react";
import SectionContext from "./SectionContext";

const SectionProvider = ({children}) => {
    const [sections, setSections] = useState([
        {name:'aboutMe', place:'vertical-center'},
        {name:'proyects', place:'bottom'},
        {name:'skills', place:'bottom'},
        {name:'experience', place:'bottom'}
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
    return (
        <SectionContext.Provider value={{
            sections, 
            changeSection
        }}>
            {children}
        </SectionContext.Provider>
    );
}
export default SectionProvider;