import BtnMenu from "../btnMenu/BtnMenu";
import Title from "./components/title/Title";
import './navbar.css';
const Navbar = ({
    customStylesNav,
    title, 
    colorTitle='black', 
    customStylesBtnMenu,
    colorBtnMenu='black',
    customStylesBoxBtns,
    children
}) => {
    return (
        <nav className={`${customStylesNav}`}>
            {title && 
                <Title 
                    value={title} 
                    colorTitle={colorTitle}
                    colorBtnMenu='white'
                />
            }
            <div className={`box-btn-menu ${customStylesBtnMenu}`}>
                <BtnMenu color={colorBtnMenu} />
            </div>
            <div className={`nav-btns ${customStylesBoxBtns}`}>
                {children}
            </div>
        </nav>
    )
}

export default Navbar;