import './content.css';
import Title from './components/title/Title';
import Info from './components/info/Info';
const Content = ({id}) =>  (
    <div className="header-content">
        <Title />
        <Info />
    </div>
);
export default Content;