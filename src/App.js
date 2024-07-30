import './App.css';
import Navbar from './components/Sections/Navbar';
import Presentation from './components/Sections/Presentation';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Footer from './components/Sections/Footer';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
