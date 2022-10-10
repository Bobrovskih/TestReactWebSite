import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import FirstSection from './components/FirstSection/FirstSection';
import SecondSection from './components/SecondSection/SecondSection';
import PhotoSlider from './components/PhotoSlider/PhotoSlider';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="main_container">
      <div className="Navbar"><Navbar /></div>
      <div className="content">
        <FirstSection />
        <PhotoSlider />
        <SecondSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
