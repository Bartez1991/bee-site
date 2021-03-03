import React from 'react';
import './style.scss';

const Hero = () => {
  return (
    <div className="section-hero" onLoad={window.requestAnimationFrame(hoverAnimation)}>
      <div className="hero-wrapper">
          <div className="container">
            <div className="hero-inner">
            <h1 className="title">Bee-studio</h1>
            <h3 className="subtitle">Wordpress & Fron-end Develoment</h3>
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const hoverAnimation = () => {
  let wrapper = document.querySelector('.section-hero'),
      container = wrapper.querySelector('.hero-wrapper'),      
      title = wrapper.querySelector('.title'),
      subtitle = wrapper.querySelector('.subtitle'),
      circle = wrapper.querySelector('.circle');

      // Moving Animation Event
      wrapper.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 450,
            yAxis = (window.innerHeight / 2 - e.pageY) / 200;
        
        container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        circle.style.transform = `translateZ(50px) rotateZ(${xAxis*50}deg)`;
      })

      // Animate In
      wrapper.addEventListener('mouseenter', (e) => {
        // let yAxis = (window.innerHeight / 2 - e.pageY) / 100;

        container.style.transition = 'none';

        title.style.transform = 'translateZ(150px) translateX(50px)';
        subtitle.style.transform = 'translateZ(120px) translateX(-50px)';
        
      })

      // Animate Out
      wrapper.addEventListener('mouseleave', (e) => {
        container.style.transition = 'all 0.5s ease';
        container.style.transform = 'rotateY(0deg) rotateX(0deg)';

        title.style.transform = 'translateZ(0)';
        subtitle.style.transform = 'translateZ(0)';
        circle.style.transform = "translateZ(0px) rotateZ(0deg)";
      })
};


export default Hero;
