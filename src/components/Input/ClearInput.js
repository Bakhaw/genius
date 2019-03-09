import React from 'react';
import Clear from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';

export default function ClearInput({ clearInput }) {
  return (
    <IconButton aria-label='Clear' onClick={clearInput}>
      <Clear fontSize='small' />
    </IconButton>
  );
}
