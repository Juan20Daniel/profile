import { useContext } from "react";
import Section from "@components/section/Section";
import AppContext from "@context/apps/AppsContext";
import './boxContentApp.css';
const BoxContentApp = ({position, children}) => {
    const { apps } = useContext(AppContext);
    return (
        <Section styles={`box-content ${apps[position].place}`}>
            {children}
        </Section>
    )
}

export default BoxContentApp;

