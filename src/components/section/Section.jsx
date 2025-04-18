import './section.css';
const Section = ({state, styles, children}) => {
    return (
        <section className={`${state} ${styles}`}>
            {children}
        </section>
    );
}

export default Section;