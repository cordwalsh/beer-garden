import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _abv = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, abv: _abv.value, id: v4()});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _abv.value = '';
  }
  return (
    <div className="kegform">
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'
          ref={(input) => {_name = input;}}/>

        <input
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => {_brand = input;}}/>

          <input
            type='text'
            id='price'
            placeholder='Price'
            ref={(input) => {_price = input;}}/>

          <input
            type='text'
            id='abv'
            placeholder='Abv'
            ref={(input) => {_abv = input;}}/>


          <button type='submit'>ADD</button>
      </form>
      <h1>CHEERS!</h1>
      <h2>🍻</h2>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
