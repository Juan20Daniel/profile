import Main from './components/main/Main';
import MenuProvider from './context/menu/MenuProvider';
import AboutProvider from './context/about/AboutProvider';
import AppsProvider from './context/apps/AppsProvider';
import About from './components/about/About';
import Proyects from './components/proyects/Proyects';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import './App.css';

const App = () => {
  return (
    <AboutProvider>
      <MenuProvider>
        <Main>
          <About />
          <Proyects />
          <Experience />
          <Skills />
        </Main>
      </MenuProvider>
    </AboutProvider>
  );
}

export default App;