import React from 'react';

import Button from '../../../UI/Button';
import PopUp from './PopUp';

const Slide = ({ name, imgSrc, openPopUp }) => {
  return (
    <>
      <div className="slider__item">
        <img src={require(`../../../../img/pets/${imgSrc}`)} alt="pet" />
        <article>
          <h4 className="h4-text">{name}</h4>
          <Button onClick={openPopUp} className="btn_secondary">
            Learn more
          </Button>
        </article>
      </div>
    </>
  );
};

export default Slide;
