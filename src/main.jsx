import { createRoot } from 'react-dom/client';
import SectionProvider from './context/section/SectionProvider.jsx';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <SectionProvider>
    <App />
  </SectionProvider>
);