import './btnNav.css';
const BtnNav = ({ value, color='black', isActive=false, action }) => {
    return (
        <div className={`box-btn-nav ${isActive && 'active'}`}>
            <button
                type="button"
                className={`btn-nav btn-${color}`}
                onClick={() => action()}
            >
                {value}
            </button>
        </div>
    );
}

export default BtnNav;