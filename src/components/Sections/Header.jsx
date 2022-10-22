import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Container from '../Logic/Container';
import Navigation from '../Logic/Navigation';
import Burger from '../UI/Burger';
import Logo from '../UI/Logo';

import src from '../../img/header-puppy.svg';
import Button from '../UI/Button';

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__top">
          <Logo />
          <Navigation />
          <Burger />
        </div>
        <div className="header__content">
          <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
            <article>
              <h2 className="h2-text color-light">
                Not only people <br />
                need a house
              </h2>
              <p className="paragraph-l">
                We offer to give a chance to a little and nice puppy with an extremely wide and open
                heart. He or she will love you more than anybody else in the world, you will see!
              </p>
              <Button className="btn_primary">Make a friend</Button>
            </article>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <img src={src} alt="header-puppy" />
          </AnimationOnScroll>
        </div>
      </Container>
    </header>
  );
};

export default Header;
