import { useContext, useState } from 'react';
import SectionContext from '@context/section/SectionContext';
import Section from '../section/Section';
import './proyects.css';
const Proyects = () => {
    const {sections, changeSection } = useContext(SectionContext);
    const [ proyectsSectios, setProyectsSections ] = useState([
        {place:'horizontal-center'},
        {place:'right'},
        {place:'right'}
    ]);
    const changeProyect = (position, to) => {
        const copy_sections = [...proyectsSectios];
        copy_sections[position].place = to;
        if(to === 'left') {
            copy_sections[position+1].place='horizontal-center';
        } else {
            copy_sections[position-1].place='horizontal-center';
        }
        setProyectsSections(copy_sections);
    }
    return (
        <Section state={sections[1].place} styles='section-proyects'>
            <Section state={sections[1].place} styles={`proyects ${proyectsSectios[0].place}`}>
                <p>Proyect1</p>
                <button onClick={() => changeProyect(0, 'left')}>Next</button>
            </Section>
            <Section state={sections[1].place} styles={`proyects ${proyectsSectios[1].place}`}>
                <p>Proyect2</p>
                <button onClick={() => changeProyect(1, 'right')}>Back</button>
                <button onClick={() => changeProyect(1, 'left')}>Next</button>
            </Section>
            <Section state={sections[1].place} styles={`proyects ${proyectsSectios[2].place}`}>
                <p>Proyect3</p>
                <button onClick={() => changeProyect(2, 'right')}>Back</button>
            </Section>
        </Section>
    );
}

export default Proyects;





// import img1 from '../../assets/proyects/proyect1/img1.jpg';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
 {/* <div className='box'>
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
            </div> */}