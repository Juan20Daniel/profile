import DropdownMenuProvider from './context/dropdownMenu/DropdownMenuProvider';
import ModalGaleryProvider from './context/modalGalery/ModalGaleryProvider';
import Main from './components/main/Main';
import About from './components/about/About';
import Proyects from './components/proyects/Proyects';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';

const App = () => {
  return (
    <DropdownMenuProvider>
      <ModalGaleryProvider>
        <Main>
          <About />
          <Proyects />
          <Experience />
          <Skills />
        </Main>
      </ModalGaleryProvider>
    </DropdownMenuProvider>
  );
}

export default App;