import './section.css';
const Section = ({state, children}) => {
    return (
        <section className={`${state}`}>
            {children}
        </section>
    );
}

export default Section;