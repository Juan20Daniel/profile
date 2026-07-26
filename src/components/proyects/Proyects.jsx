import { useContext } from 'react';
import ModalGaleryContext from '@context/modalGalery/ModalGaleryContext';
import SectionContext from '@context/section/SectionContext';
import AppsProvider from '@context/apps/AppsProvider';
import Section from '../section/Section';
import BitacorasMovile from './components/bitacoras_movile/Bitacoras';
import BitacorasWeb from './components/bitacoras_web/BitacorasWeb';
import ChatZone from './components/chatZone/ChatZone';
import MedicanGuia from './components/medicanGuia/MedicanGuia';
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
                <BitacorasMovile />
                <BitacorasWeb />
                <ChatZone />
                <MedicanGuia />
                <Vituchs />
                <Works />
                <Generator />
            </Section>
        </AppsProvider>
    );
}

export default Proyects;