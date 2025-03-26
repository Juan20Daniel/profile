import Main from './components/main/Main';
import DropdownMenuProvider from './context/DropdownMenu/DropdownMenuProvider';
import AboutProvider from './context/about/AboutProvider';
import About from './components/about/About';
import Proyects from './components/proyects/Proyects';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';

const App = () => {
  return (
    <AboutProvider>
      <DropdownMenuProvider>
        <Main>
          <About />
          <Proyects />
          <Experience />
          <Skills />
        </Main>
      </DropdownMenuProvider>
    </AboutProvider>
  );
}

export default App;