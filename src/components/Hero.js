import React, { useRef } from 'react';
import { useHoverEffect } from '../hooks/useHoverEffect';

const data = {
  img1: "https://images.unsplash.com/photo-1523264766116-1e09b3145b84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  img2: "https://images.unsplash.com/photo-1579084061716-7a321d7687eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80",
}

const Hero = () => {
  const heroImageRef = useRef(null);

  useHoverEffect(heroImageRef, data.img1, data.img2);
  return (
    <div className='hero container mx-auto mt-20'>
      <div className="hero-img" ref={heroImageRef}></div>
      <div className="shutter">
        <h1>ReactJS</h1>
      </div>
      <div className="shutter">
        <h1>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;