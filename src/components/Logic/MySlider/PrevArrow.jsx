import React from 'react';

const PrevArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn_circle btn_circle_rigth">
      &#8592;
    </button>
  );
};

export default PrevArrow;
