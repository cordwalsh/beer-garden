import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';
import keg from './Keg';


function KegList(props){
  return (
    <div>

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
