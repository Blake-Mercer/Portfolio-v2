import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navigation/Navbar';
import Header from './components/Header/Header';
import Particles from 'react-particles-js';
import About from './components/About/About';
import Tech from './components/Tech/Tech';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Particles
        className='particle-canvas'
        params={{
          particles: {
            number: {
              value: 15,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: 'line',
              stroke: {
                width: 6,
                color: '#fff',
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Experience />
      <Tech />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
