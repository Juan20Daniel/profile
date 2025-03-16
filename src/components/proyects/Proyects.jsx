import { useContext } from 'react';
import SectionContext from '@context/section/SectionContext';
import img1 from '../../assets/proyects/proyect1/img1.jpg';
import Section from '../section/Section';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './proyects.css';
const Proyects = () => {
    const {sections, changeSection } = useContext(SectionContext);
    return (
        <Section state={sections[1].place}>
          <div className='box'>
            <p>My proyects</p>
                <button className='next-btn' onClick={() => changeSection(1, 0, 'decrement')}>
                    About me
                </button>
                <button className='next-btn' onClick={() => changeSection(1, 2, 'increment')}>
                    skills
                </button>
                <button className='next-btn' onClick={() => changeSection(1, 3, 'increment')}>
                    experience
                </button>
                <LazyLoadImage 
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
            </div>
        </Section>
    );
}

export default Proyects;