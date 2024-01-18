import About from './components/About';
import './App.css'
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { useRef } from 'react';

function App() {
  const contactSectionRef = useRef(null);

  return (
    <div className="app">
      <Navbar contactSectionRef={contactSectionRef} />
      <HomePage contactSectionRef={contactSectionRef} />
      <About />
  </div>
  )
}

export default App
