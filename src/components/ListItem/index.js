import React from 'react';
import MaterialListItem from '@material-ui/core/ListItem';

export default function ListItem({ children }) {
  return (
    <MaterialListItem button className='ListItem'>
      {children}
    </MaterialListItem>
  );
}
