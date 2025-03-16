import Main from './components/main/Main';
import MenuProvider from './context/menu/MenuProvider';
import AboutMe from './components/aboutMe/AboutMe';
import Proyects from './components/proyects/Proyects';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import './App.css';

const App = () => {
  return (
      <MenuProvider>
        <Main>
          <AboutMe />
          <Proyects />
          <Experience />
          <Skills />
        </Main>
      </MenuProvider>
  );
}

export default App;