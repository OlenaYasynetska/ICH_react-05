import React from 'react';
import '../styles/AuthButtons.css';
import appleIcon from '../assets/apple.svg';
import appleIconBlue from '../assets/apple-blue.svg';
import googleIcon from '../assets/google.svg';
import googleIconBlue from '../assets/google-blue.svg';
import twitterIcon from '../assets/x.svg';
import twitterIconBlue from '../assets/x-blue.svg';

const buttons = [
  { id: 'apple', icon: appleIcon, hoverIcon: appleIconBlue },
  { id: 'google', icon: googleIcon, hoverIcon: googleIconBlue },
  { id: 'twitter', icon: twitterIcon, hoverIcon: twitterIconBlue },
];

const AuthButtons = () => {
  const handleMouseEnter = (e, hoverIcon) => {
    e.target.src = hoverIcon;
  };

  const handleMouseLeave = (e, defaultIcon) => {
    e.target.src = defaultIcon;
  };

  return (
    <div className="button-group">
      {buttons.map(btn => (
        <button key={btn.id} className="signin-button">
          <img 
            src={btn.icon} 
            alt={btn.id} 
            className="signin-icon"
            onMouseEnter={(e) => handleMouseEnter(e, btn.hoverIcon)}
            onMouseLeave={(e) => handleMouseLeave(e, btn.icon)}
          />
        </button>
      ))}
    </div>
  );
};

export default AuthButtons; 