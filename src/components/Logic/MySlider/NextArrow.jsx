import React from 'react';

const NextArrow = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn_circle btn_circle_left">
      &#8594;
    </button>
  );
};

export default NextArrow;
