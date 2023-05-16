import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import PopUp from '../PetPopUp';

const MySlider = () => {
  const pets = [
    { id: 1, name: 'Katrine', imgSrc: 'pets-katrine.svg' },
    { id: 2, name: 'Jennifer', imgSrc: 'pets-jennifer.svg' },
    { id: 3, name: 'Woody', imgSrc: 'pets-woody.svg' },
    { id: 4, name: 'Katrine', imgSrc: 'pets-katrine.svg' },
    { id: 5, name: 'Jennifer', imgSrc: 'pets-jennifer.svg' },
    { id: 6, name: 'Woody', imgSrc: 'pets-woody.svg' },
  ];

  const [width, setWidth] = React.useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <CarouselProvider naturalSlideWidth={900} naturalSlideHeight={600} totalSlides={6}>
      <Slider>
        {pets.map((slider) => (
          <Slide key={slider.id} index={slider.id} pet={slider} />
        ))}
      </Slider>
    </CarouselProvider>
  );
};

export default MySlider;
