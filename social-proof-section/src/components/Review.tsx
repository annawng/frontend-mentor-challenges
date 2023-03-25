import React from 'react';
import starIcon from '../../public/images/icon-star.svg';

interface ReviewProps {
  rating: number;
  reviewer: string;
}
function Review({ rating, reviewer }: ReviewProps) {
  return (
    <li className='review'>
      <div className='stars'>
        {[...Array(5)].map((_, index) => (
          <img src={starIcon} alt='' key={index} />
        ))}
      </div>
      <p>
        Rated {rating} Stars in {reviewer}
      </p>
    </li>
  );
}

export default Review;
