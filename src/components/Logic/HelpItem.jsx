import React from 'react';

const HelpItem = ({ title, imgSrc }) => {
  return (
    <div className="help__item">
      <img src={require(`../../img/help/${imgSrc}`)} alt={`${title}-help`} />
      <h4 className="h4-text">{title}</h4>
    </div>
  );
};

export default HelpItem;
