import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Loader from '../Loader';

export default function InputButton({ isLoading, onSubmit }) {
  return (
    <IconButton
      aria-label='Search'
      className='Input__search-icon'
      onClick={onSubmit}
    >
      {isLoading ? <Loader size={20} /> : <SearchIcon />}
    </IconButton>
  );
}
