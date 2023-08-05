import React from 'react';
import './FormLabel.css';

const FormLabel = ({
  value,
  name,
  span,
  placeholder,
  inputsValid,
  errorMessage,
  handleChangeValidation,
  minLength,
  type,
}) => {
  return (
    <label className='label'>
      <span className='label__input-name'>{span}</span>
      <input
        type={type}
        className={`label__input ${!inputsValid ? 'label__input_error' : ''}`}
        placeholder={placeholder}
        minLength={minLength}
        required
        name={name}
        value={value}
        onChange={handleChangeValidation}
      />
      <span className='label__error-message'>{errorMessage}</span>
    </label>
  );
};

export default FormLabel;
