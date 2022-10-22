import React from 'react';

import Container from '../Logic/Container';

import mailSrc from '../../img/footer/mail.svg';
import pinSrc from '../../img/footer/pin.svg';
import phoneSrc from '../../img/footer/phone.svg';
import puppySrc from '../../img/footer/footer-puppy.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__grid">
          <h3 className="h3-text color-light footer__item footer__item_1">
            For questions <br />
            and suggestions
          </h3>
          <h3 className="h3-text color-light footer__item footer__item_2">
            We are waiting <br />
            for your visit
          </h3>
          <img src={mailSrc} alt="mail" className="footer__item_3" />
          <h4 className="h4-text color-primary footer__item_4">email@shelter.com</h4>
          <img src={pinSrc} alt="pin" className="footer__item_5" />
          <h4 className="h4-text color-primary footer__item_6">
            1 Central Street, Boston (entrance from the store)
          </h4>
          <img src={phoneSrc} alt="phone" className="footer__item_7" />
          <h4 className="h4-text color-primary footer__item_8">+13 674 567 75 54</h4>
          <img src={pinSrc} alt="pin" className="footer__item_9" />
          <h4 className="h4-text color-primary footer__item_10">18 South Park, London</h4>
        </div>

        <img src={puppySrc} alt="puppy" className="footer__item footer__item_3" />
      </Container>
    </footer>
  );
};

export default Footer;
