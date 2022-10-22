import React from 'react';

const Logo = ({ dark }) => {
  return (
    <h1>
      <p className={`logo-title  ${dark ? 'color-dark-l' : 'color-primary'}`}>Cozy House</p>
      <p className={`logo-subtitle  ${dark ? 'color-dark-3xl' : 'color-light'}`}>
        Shelter for pets in Boston
      </p>
    </h1>
  );
};

export default Logo;
