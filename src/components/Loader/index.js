import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loader({ size }) {
  return (
    <div className='Loader'>
      <CircularProgress size={size} />
    </div>
  );
}
