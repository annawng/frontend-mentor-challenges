import React from 'react';
import Review from './Review';

const reviews = [
  { rating: 5, reviewer: 'Reviews' },
  { rating: 5, reviewer: 'Report Guru' },
  { rating: 5, reviewer: 'BestTech' },
];

function ReviewSection() {
  return (
    <ul className='reviews'>
      {reviews.map((review, index) => (
        <Review key={index} rating={review.rating} reviewer={review.reviewer} />
      ))}
    </ul>
  );
}

export default ReviewSection;
