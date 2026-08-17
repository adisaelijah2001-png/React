import { useState } from 'react'
import './App.css'
import Navbar from './Navbar';
import Home from './Home';

function App () {
  return(
    <div className="main-page">
      <Navbar />
      <h1>This name is good</h1>
      <Home />
    </div>
    
  )
}

 export default App; 