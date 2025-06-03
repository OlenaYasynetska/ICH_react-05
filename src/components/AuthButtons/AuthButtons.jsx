import React, { useState } from 'react';
import './AuthButtons.css';
import appleIcon from '../../assets/apple.svg';
import appleIconBlue from '../../assets/apple-blue.svg';
import googleIcon from '../../assets/google.svg';
import googleIconBlue from '../../assets/google-blue.svg';
import twitterIcon from '../../assets/x.svg';
import twitterIconBlue from '../../assets/x-blue.svg';

const buttons = [
  { id: 'apple', icon: appleIcon, hoverIcon: appleIconBlue },
  { id: 'google', icon: googleIcon, hoverIcon: googleIconBlue },
  { id: 'twitter', icon: twitterIcon, hoverIcon: twitterIconBlue },
];

const AuthButtons = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="button-group">
      {buttons.map(btn => (
        <button
          key={btn.id}
          className="signin-button"
          onMouseEnter={() => setHovered(btn.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <img
            src={hovered === btn.id ? btn.hoverIcon : btn.icon}
            alt={btn.id}
            className="signin-icon"
          />
        </button>
      ))}
    </div>
  );
};

export default AuthButtons; 