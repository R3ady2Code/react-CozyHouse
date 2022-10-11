import React from 'react';

import cardSrc from '../../img/credit-card.svg';

const CreditCard = () => {
  return (
    <div class="credit-card">
      <img src={cardSrc} alt="credit-card" />
      <h4 class="h4-text">8380 2880 8028 8791 7435</h4>
    </div>
  );
};

export default CreditCard;
