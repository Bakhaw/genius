import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import Loader from '../Loader';

function CustomizedInputBase({
  isLoading,
  label,
  onChange,
  placeholder,
  onSubmit,
  value
}) {
  return (
    <div className='Input'>
      <span className='Input__label'>{label}</span>
      <Paper className='Input__paper' elevation={3}>
        <InputBase
          className='Input__base'
          onChange={onChange}
          onKeyPress={ev => {
            if (ev.key === 'Enter') {
              ev.preventDefault();
              onSubmit();
            }
          }}
          placeholder={placeholder}
          value={value}
        />
        <IconButton
          aria-label='Search'
          className='Input__search-icon'
          onClick={onSubmit}
        >
          {isLoading ? <Loader /> : <SearchIcon />}
        </IconButton>
      </Paper>
    </div>
  );
}

export default CustomizedInputBase;
