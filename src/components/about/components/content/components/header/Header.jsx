import { useGetOrientation } from '@hooks/useGetOrientation';
import { useGetSizeWindow } from '@hooks/useGetSizeWindow';
import Navbar from '@components/navbar/Navbar';
import './header.css';
const navigation = {
    proyects:[0,1],
    skills:[0,2],
    experience:[0,3]
}
const Header = () => {
    const { height } = useGetSizeWindow();
    const { orientation } = useGetOrientation();

    return (
        <header>
            <Navbar
                customStylesNav='nav-about'
                actualSection='about' 
                colorBtnMenu='white'
                customStylesBtnMenu='as-disable-menu'
                colorBtnActive='white'
                customStylesBoxBtns={`
                    as-show-btns
                    ${(orientation === 'horizontal' && height >= 700) && 
                        'align-vertical'}
                `}
                navigation={navigation}
            />
            <div className="box-specialty">
                <span className='specialty'>Fullstack developer</span>
                <span className='languege'>Javascript</span>
            </div>
        </header>
    );
}

export default Header;