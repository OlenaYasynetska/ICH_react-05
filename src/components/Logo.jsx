import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Logo.css';

const Logo = () => {
  return (
    <Link to="/" className="logo">
      Spotify
    </Link>
  );
};

export default Logo; 