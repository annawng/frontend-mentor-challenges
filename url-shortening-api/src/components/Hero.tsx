import React from 'react';

import image from '../assets/illustration-working.svg';

const Hero = () => {
  return (
    <section>
      <img src={image} />
      <h1>More than just shorter links</h1>
      <p>
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </p>
      <a>Get Started</a>
    </section>
  );
};

export default Hero;
