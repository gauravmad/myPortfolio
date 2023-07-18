
import './App.css';
// import Spline from '@splinetool/react-spline';
import CanvasBackground from './components/CanvasBackground/CanvasBackground';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import TechStack from './components/TechStack/TechStack';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      {/* <Experience/>
      <TechStack/>
      <Project/> */}
    </div>

  );
}

export default App;
