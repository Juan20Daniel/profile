import { useContext } from 'react';
import ModalGaleryContext from '@context/modalGalery/ModalGaleryContext';
import SectionContext from '@context/section/SectionContext';
import AppsProvider from '@context/apps/AppsProvider';
import Section from '../section/Section';
import Nutrideli from './components/nutrideli/Nutrideli';
import ChatZone from './components/chatZone/ChatZone';
import Vituchs from './components/vituchs/Vituchs';
import Works from './components/works/Works';
import Generator from './components/generator/Generator';
import ModalGalery from './components/modalGalery/ModalGalery';
import './proyects.css';
const Proyects = () => {
    const { dropdown } = useContext(ModalGaleryContext);
    const { sections } = useContext(SectionContext);
    return (
        <AppsProvider>
            {dropdown && <ModalGalery />}
            <Section state={sections[1].place} styles='section-proyects'>
                <Nutrideli />
                <ChatZone />
                <Vituchs />
                <Works />
                <Generator />
            </Section>
        </AppsProvider>
    );
}

export default Proyects;