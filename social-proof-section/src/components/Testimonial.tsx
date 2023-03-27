import React from 'react';

type TestimonialProps = {
  name: string;
  message: string;
};

function Testimonial({ name, message }: TestimonialProps) {
  const firstName: string = name.split(' ')[0].toLowerCase();

  return (
    <li className='testimonial'>
      <div className='testimonial__buyer-info'>
        <img
          src={`${import.meta.env.BASE_URL}images/image-${firstName}.jpg`}
          alt={firstName}
        />
        <div>
          <p>{name}</p>
          <p>Verified Buyer</p>
        </div>
      </div>
      <p>&ldquo; {message} &rdquo;</p>
    </li>
  );
}

export default Testimonial;
