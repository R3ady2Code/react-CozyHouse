import React from 'react';

import src from '../../img/pets/pets-jennifer.svg';

const PetPopUp = ({ closeModal }) => {
  return (
    <div className="background_pop-up">
      <div className="pop-up">
        <div className="img__wrapper">
          <img src={src} alt="pet" />
        </div>
        <article>
          <h3 className="h3-text">Jennifer</h3>
          <h4 className="h4-text">Dog - Labrador</h4>
          <h5 className="h5-text">
            Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new
            forever home. This girl really enjoys being able to go outside to run and play, but
            won't hesitate to play up a storm in the house if she has all of her favorite toys.
          </h5>
          <ul>
            <li>
              <span className="h5-modal-window">
                <b>Age: </b>2 months
              </span>
            </li>
            <li>
              <span className="h5-modal-window">
                <b>Inoculations: </b>none
              </span>
            </li>
            <li>
              <span className="h5-modal-window">
                <b>Diseases: </b>none
              </span>
            </li>
            <li>
              <span className="h5-modal-window">
                <b>Parasites: </b>none
              </span>
            </li>
          </ul>
        </article>
        <button onClick={closeModal} className="btn_circle">
          &#10006;
        </button>
      </div>
    </div>
  );
};

export default PetPopUp;
