import React, { useState } from 'react';
import '../styles/SignIn.css';
import appleIcon from '../assets/apple.svg';
import appleIconBlue from '../assets/apple-blue.svg';
import googleIcon from '../assets/google.svg';
import googleIconBlue from '../assets/google-blue.svg';
import twitterIcon from '../assets/x.svg';
import twitterIconBlue from '../assets/x-blue.svg';


const SignIn = () => {
  const [hovered, setHovered] = useState(null);

  const buttons = [
    { id: 'apple', icon: appleIcon, hoverIcon: appleIconBlue },
    { id: 'google', icon: googleIcon, hoverIcon: googleIconBlue },
    { id: 'twitter', icon: twitterIcon, hoverIcon: twitterIconBlue },
  ];

  return (
    <div className="signin-container">
      <div className="logo">Spotify</div>
      <h1 className="headline">LIFE IS WASTED ON THE LIVING</h1>
      <p className="signin-text">Sign in<br />with</p>
      <div className="button-group">
        {buttons.map(btn => (
          <button
            key={btn.id}
             className="signin-button"
            // className={`signin-button ${hovered === btn.id ? 'active' : ''}`}
            onMouseEnter={() => setHovered(btn.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* <img src={btn.icon} alt={btn.id} /> */}
            <img
              src={hovered === btn.id ? btn.hoverIcon : btn.icon}
              alt={btn.id}
              className="signin-icon"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SignIn;
