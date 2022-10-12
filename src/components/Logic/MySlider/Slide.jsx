import React from 'react';

import Button from '../../UI/Button';

const Slide = ({ name, imgSrc }) => {
  return (
    <div className="slider__item">
      <img src={require(`../../../img/pets/${imgSrc}`)} alt="pet" />
      <article>
        <h4 className="h4-text">{name}</h4>
        <Button className="btn_secondary">Learn more</Button>
      </article>
    </div>
  );
};

export default Slide;
