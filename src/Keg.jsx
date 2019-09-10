import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div className="keglist">
      <h3>{props.name} - {props.brand}</h3>
      <p><em>${props.price} - {props.abv}%</em></p>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
};

export default Keg;
