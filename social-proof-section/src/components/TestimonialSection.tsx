import React from 'react';
import Testimonial from './Testimonial';

const testimonials = [
  {
    name: 'Colton Smith',
    message:
      'We needed the same printed design as the one we had ordered a week ' +
      'prior. Not only did they find the original order, but we also ' +
      'received it in time. Excellent!',
  },
  {
    name: 'Irene Roberts',
    message:
      'Customer service is always excellent and very quick turn around. ' +
      'Completely delighted with the simplicity of the purchase and the ' +
      'speed of delivery.',
  },
  {
    name: 'Anne Wallace',
    message:
      'Put an order with this company and can only praise them for the very ' +
      'high standard. Will definitely use them again and recommend them to ' +
      'everyone!',
  },
];

function TestimonialSection() {
  return (
    <ul className='testimonials'>
      {testimonials.map((testimonial, index) => (
        <Testimonial
          key={index}
          name={testimonial.name}
          message={testimonial.message}
        />
      ))}
    </ul>
  );
}

export default TestimonialSection;
