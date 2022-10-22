import React from 'react';

import MySlider from '../Logic/MySlider';
import Button from '../UI/Button';

const Pets = () => {
  return (
    <section className="pets">
      <div className="container">
        <h3 className="h3-text title">
          Our friends who <br />
          are looking for a house
        </h3>
        <MySlider />
        <Button className="btn_primary">Get to know the rest</Button>
      </div>
    </section>
  );
};

export default Pets;
