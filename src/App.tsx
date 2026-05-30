import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app bg-ivory-100">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
