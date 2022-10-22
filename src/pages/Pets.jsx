import React from 'react';

import Container from '../components/Logic/Container';
import Navigation from '../components/Logic/Navigation';
import Logo from '../components/UI/Logo';
import Burger from '../components/UI/Burger';

const Pets = () => {
  return (
    <>
      <Container>
        <div className="header__top">
          <Logo dark={true} />
          <Navigation dark={true} />
          <Burger dark={true} />
        </div>
      </Container>
    </>
  );
};

export default Pets;
