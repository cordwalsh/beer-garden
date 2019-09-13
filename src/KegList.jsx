import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
import keg from './Keg';


function KegList(props){
  return (
    <div className="keglist_home">
      <h2>Available Products</h2>
      {props.kegList.map((keg) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          abv={keg.abv}
          key={keg.id}/>
      )}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
};

export default KegList;
