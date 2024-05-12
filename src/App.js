import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import ParticlesComponent from './components/Particles';
import Banner from './components/Banner'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Music from './components/Music'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Music />

      <ParticlesComponent id="particles"/>
      
    </div>
  );
}

export default App;