import React from 'react';
import Slider from 'react-slick';

import Slide from './Slide';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import PopUp from './Slide/PopUp';

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

  const settings = {
    speed: 500,
    slidesToShow: width >= 1280 ? 3 : width >= 768 ? 2 : width >= 320 && 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [openPopUp, setOpenPopUp] = React.useState(false);

  return (
    <>
      <Slider {...settings}>
        {pets.map((slider) => (
          <Slide
            key={slider.id}
            index={slider.id}
            {...slider}
            openPopUp={() => setOpenPopUp(true)}
          />
        ))}
      </Slider>
      {openPopUp && <PopUp closeModal={() => setOpenPopUp(false)} />}
    </>
  );
};

export default MySlider;
