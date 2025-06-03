import React from 'react';
import './SignIn.css';
import Logo from '../Logo/Logo';
import AuthButtons from '../AuthButtons/AuthButtons';

const SignIn = () => {
  return (
    <div className="signin-container">
      <Logo />
      <h1 className="headline">LIFE IS WASTED ON THE LIVING</h1>
      <p className="signin-text">Sign in<br />with</p>
      <AuthButtons />
    </div>
  );
};

export default SignIn;
