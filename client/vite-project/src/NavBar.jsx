import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './Login';
import GeneralFaceCare from './GeneralFaceCare';

const NavBar = () => {
  const [showGeneralFaceCare, setShowGeneralFaceCare] = useState(false);

  function handleClickGeneralFaceCare() {
    setShowGeneralFaceCare(true);
  }

  function changeTextColor(e) {
    e.target.style.color = 'blue';
  }

  function redchangeTextColor(e) {
    e.target.style.color = 'black';
  }

  const [isShown, setIsShown] = useState(false);

  
  return (
    <div className='NavBar' 
      
    >
      <ul>
        <li onMouseOver={changeTextColor}
      onMouseLeave={redchangeTextColor} onClick={handleClickGeneralFaceCare}>General Face Care</li>
        <li onMouseOver={changeTextColor}
      onMouseLeave={redchangeTextColor}>Foundation</li>
        <li onMouseOver={changeTextColor}
      onMouseLeave={redchangeTextColor}>Powders</li>
        <li onMouseOver={changeTextColor}
      onMouseLeave={redchangeTextColor}>LipCare</li>
        <li onMouseOver={changeTextColor}
      onMouseLeave={redchangeTextColor}>Eyebrows</li>
        <li onMouseOver={changeTextColor}
      onMouseLeave={redchangeTextColor}>EyeCare</li>
        <li onMouseOver={changeTextColor}
      onMouseLeave={redchangeTextColor}>Sunscreen</li>
        <li onMouseOver={changeTextColor}
      onMouseLeave={redchangeTextColor}>Makeup Tools</li>
        <Login />
        <li onMouseOver={changeTextColor}
      onMouseLeave={redchangeTextColor}>Cart</li>
      </ul>

      {showGeneralFaceCare && <GeneralFaceCare />}
    </div>
  );
};

export default NavBar;
