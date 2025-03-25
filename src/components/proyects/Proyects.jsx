import { useContext } from 'react';
import SectionContext from '@context/section/SectionContext';
import AppsProvider from '../../context/apps/AppsProvider';
import Section from '../section/Section';
import Nutrideli from './components/nutrideli/Nutrideli';
import ChatZone from './components/chatZone/ChatZone';
import Vituchs from './components/vituchs/Vituchs';
import Works from './components/works/Works';
import Generator from './components/generator/Generator';
import './proyects.css';
const Proyects = () => {
    const { sections } = useContext(SectionContext);
    return (
        <AppsProvider>
            <Section state={sections[1].place} styles='section-apps'>
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





// import img1 from '../../assets/proyects/proyect1/img1.jpg';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
{/* <LazyLoadImage 
    alt='Imagen 1'
    src={img1}
    width='auto'
    height='100%'
    threshold={1}
    effect="blur"
    wrapperProps={{
        // If you need to, you can tweak the effect transition using the wrapper style.
        style: {transitionDelay: "0.5s"},
    }}
/>
} */}