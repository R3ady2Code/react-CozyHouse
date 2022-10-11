import React from 'react';
import Button from '../UI/Button';

import katrineSrc from '../../img/pets-katrine.svg';
import jenniferSrc from '../../img/pets-jennifer.svg';
import woodySrc from '../../img/pets-woody.svg';

const Slider = () => {
  return (
    <div className="slider">
      <button className="slider__arrow slider__arrow_rigth">&#8592;</button>
      <div className="slider__wrapper">
        <div className="slider__item">
          <img src={katrineSrc} alt="pet" />
          <article>
            <h4 className="h4-text">Katrine</h4>
            <Button className="btn_secondary">Learn more</Button>
          </article>
        </div>
        <div className="slider__item">
          <img src={jenniferSrc} alt="pet" />
          <article>
            <h4 className="h4-text">Jennifer</h4>
            <Button className="btn_secondary">Learn more</Button>
          </article>
        </div>
        <div className="slider__item">
          <img src={woodySrc} alt="pet" />
          <article>
            <h4 className="h4-text">Woody</h4>
            <Button className="btn_secondary">Learn more</Button>
          </article>
        </div>
      </div>
      <button className="slider__arrow slider__arrow_left">&#8594;</button>
    </div>
  );
};

export default Slider;
