import React from 'react';

import Button from '../UI/Button';
import PetPopUp from './PetPopUp';

const PetCard = ({ name, imgSrc }) => {
  const [openPopUp, setOpenPopUp] = React.useState(false);

  return (
    <>
      <div className="pet-card">
        <img src={require(`../../img/pets/${imgSrc}`)} alt="pet" />
        <article>
          <h4 className="h4-text">{name}</h4>
          <Button onClick={() => setOpenPopUp(true)} className="btn_secondary">
            Learn more
          </Button>
        </article>
      </div>
      {openPopUp && <PetPopUp closeModal={() => setOpenPopUp(false)} />}
    </>
  );
};

export default PetCard;
