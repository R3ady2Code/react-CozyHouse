import React from 'react';

const PrevArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} className="slider__arrow slider__arrow_rigth">
      &#8592;
    </button>
  );
};

export default PrevArrow;
