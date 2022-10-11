import React from 'react';

import Slider from '../Logic/Slider';
import Button from '../UI/Button';

const Pets = () => {
  return (
    <section class="pets">
      <div class="container">
        <h3 class="h3-text">
          Our friends who <br />
          are looking for a house
        </h3>
        <Slider />
        <Button className="btn_primary">Get to know the rest</Button>
      </div>
    </section>
  );
};

export default Pets;
