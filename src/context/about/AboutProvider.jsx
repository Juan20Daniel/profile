import { useContext } from "react";
import AboutContext from "./AboutContext";
import SectionContext from "../section/SectionContext";

const AboutProvider = ({children}) => {
   const {changeSection} = useContext(SectionContext);
      const proyects = () => {
        changeSection(0, 1, 'increment');
      }
      const skills = () => {
        changeSection(0, 2, 'increment');
      }
      const experience = () => {
        changeSection(0, 3, 'increment');
      }
    return (
        <AboutContext.Provider value={{
            proyects,
            skills,
            experience
        }}>
            {children}
        </AboutContext.Provider>
    );
}
export default AboutProvider;