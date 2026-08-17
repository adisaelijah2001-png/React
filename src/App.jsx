import './App.css'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';

function App() {
  return(
    <div className="main-page">
      <Navbar />
      <h1>This name is good</h1>
      <Home />
      <div className="about-me">
         <About />
      </div>
    </div>
    
  )
}

 export default App; 