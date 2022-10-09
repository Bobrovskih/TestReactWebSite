import React from 'react';
import Logo from './Navbar_img/Logo.svg';
import Circeya from './Navbar_img/Circeya.svg';
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__circeya_logo">
        <img src={Logo} alt="logo" />
        <img src={Circeya} alt="Circeya_name" />
      </div>
      <div className="navbar__telephone"> +7 (495) 495-49-54 </div>
    </div>
  );
}
