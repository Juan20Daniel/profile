import Title from "./components/title/Title";
import './navbar.css';
const Navbar = ({title, children}) => {
    return (
        <nav>
            {title && <Title value={title} />}
            {children}
        </nav>
    )
}

export default Navbar;