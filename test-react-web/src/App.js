import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import FirstSection from './components/FirstSection/FirstSection';
import SecondSection from './components/SecondSection/SecondSection';

function App() {
  return (
    <div className="main_container">
      <Navbar />
      <FirstSection />
      <SecondSection />
    </div>
  );
}

export default App;
