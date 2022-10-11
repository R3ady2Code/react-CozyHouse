import React from 'react';

import Container from '../Logic/Container';

import dogSrc from '../../img/donation-dog.svg';
import CreditCard from '../UI/CreditCard';

const Donation = () => {
  return (
    <section className="donation">
      <Container>
        <img src={dogSrc} alt="donation-dog" />
        <article>
          <h3 className="h3-text">
            You can also <br />
            make a donation
          </h3>
          <h5 className="h5-text">Name of the bank / Type of bank account</h5>
          <CreditCard />
          <p className="credit-card__info">
            Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et
            vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </p>
        </article>
      </Container>
    </section>
  );
};

export default Donation;
