import About from './components/About';
import './App.css'
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar />
      <HomePage/>
      <About />
  </div>
  )
}

export default App
