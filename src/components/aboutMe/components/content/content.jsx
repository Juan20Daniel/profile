import './content.css';
import Specialty from './components/specialty/Specialty';
import Info from './components/info/Info';
const Content = ({id}) =>  (
    <div className="header-content">
        <Specialty />
        <Info />
    </div>
);
export default Content;