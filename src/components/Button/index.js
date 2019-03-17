import React from 'react';
import MaterialButton from '@material-ui/core/Button';

export default function Button({ children, onClick }) {
  return (
    <MaterialButton className='Button' onClick={onClick} variant='contained'>
      {children}
    </MaterialButton>
  );
}
