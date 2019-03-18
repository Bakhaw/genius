import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';

import ClearInput from './ClearInput';
import InputButton from './InputButton';

function CustomizedInputBase({
  clearInput,
  isLoading,
  label,
  onChange,
  placeholder,
  onSubmit,
  value
}) {
  return (
    <div className='Input'>
      <label className='Input__label' htmlFor='InputComponent'>
        {label}
      </label>
      <Paper className='Input__paper' elevation={3}>
        <InputBase
          className='Input__base'
          id='InputComponent'
          onChange={onChange}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              e.target.blur();
              e.preventDefault();
              onSubmit();
            }
          }}
          placeholder={placeholder}
          value={value}
        />

        {value !== '' && <ClearInput clearInput={clearInput} />}
        <InputButton isLoading={isLoading} onSubmit={onSubmit} />
      </Paper>
    </div>
  );
}

export default CustomizedInputBase;
