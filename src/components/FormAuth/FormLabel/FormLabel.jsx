import React from 'react';
import './FormLabel.css';

const FormLabel = ({
  value,
  name,
  span,
  placeholder,
  inputsValid,
  message,
  handleChangeValidation,
  minLength,
  maxLength,
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
        maxLength={maxLength}
        required
        name={name}
        value={value}
        onChange={handleChangeValidation}
      />
      <span className='label__error-message'>{message}</span>
    </label>
  );
};

export default FormLabel;
