import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import HelpItem from '../Logic/HelpItem';

const Help = () => {
  const icons = [
    { id: 1, title: 'Pet food', imgSrc: 'pet-food.svg' },
    { id: 2, title: 'Transportation', imgSrc: 'transportation.svg' },
    { id: 3, title: 'Toys', imgSrc: 'toys.svg' },
    { id: 4, title: 'Bowls and cups', imgSrc: 'bowls-and-cups.svg' },
    { id: 5, title: 'Shampoos', imgSrc: 'shampoos.svg' },
    { id: 6, title: 'Vitamins', imgSrc: 'vitamins.svg' },
    { id: 7, title: 'Medicines', imgSrc: 'medicines.svg' },
    { id: 8, title: 'Collars / leashes', imgSrc: 'collars.svg' },
    { id: 9, title: 'Sleeping areas', imgSrc: 'sleeping-area.svg' },
  ];

  return (
    <section className="help">
      <div className="container">
        <h3 className="h3-text">
          How you can help <br />
          our shelter
        </h3>
        <div className="help__flex">
          {icons.map((icon) => (
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOut="animate__fadeOutUp"
              duration={0.5}>
              <HelpItem key={icon.id} {...icon} />
            </AnimationOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Help;
