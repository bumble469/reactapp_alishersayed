import './App.css';
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Curriculum from './components/Curriculum';
import Testimonials from './components/Testimonials';
function App() {
  return (
  <div className="App">
    <Navbar/>
    <Overview/>
    <Curriculum/>
    <Testimonials/>
  </div>
  );
}

export default App;
