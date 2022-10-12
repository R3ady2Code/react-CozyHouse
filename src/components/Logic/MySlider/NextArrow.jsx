import React from 'react';

const NextArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} className="slider__arrow slider__arrow_left">
      &#8594;
    </button>
  );
};

export default NextArrow;
