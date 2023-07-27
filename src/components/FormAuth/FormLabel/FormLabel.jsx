import React from 'react';
import './FormLabel.css';

const FormLabel = ({ value, setValue, span, placeholder, classError, errorMassage }) => {
  return (
    <label className='label'>
      <span className='label__input-name'>{span}</span>
      <input
        type='text'
        className={`label__input ${classError}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span className='label__error-message'>{errorMassage}</span>
    </label>
  );
};

export default FormLabel;
