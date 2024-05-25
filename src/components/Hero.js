import React from 'react';
import './Hero.css';


function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>CHURURUP's here for your pet</h1>
        <img src="/HeroDog.png" alt="로고" className="hero-logo" />
      </div>
    </section>
  );
}

export default Hero;