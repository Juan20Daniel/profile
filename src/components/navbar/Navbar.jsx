import Title from "./components/title/Title";
import './navbar.css';
const Navbar = ({title, colorTitle, children}) => {
    return (
        <nav>
            {title && <Title 
                value={title} 
                colorTitle={colorTitle}
            />}
            {children}
        </nav>
    )
}

export default Navbar;