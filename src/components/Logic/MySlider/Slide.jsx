import React from 'react';

import PetCard from '../PetCard';

const Slide = ({ pet }) => {
  return <PetCard {...pet} />;
};

export default Slide;
