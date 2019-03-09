import React from 'react';
import Input from '../../components/Input';

export default function Form({ isLoading, onSubmit }) {
  const [search, setSearch] = React.useState('');
  const handleInputChange = e => {
    setSearch(e.target.value);
  };

  return (
    <React.Fragment>
      <Input
        clearInput={() => setSearch('')}
        isLoading={isLoading}
        label='Search artists & more...'
        onChange={handleInputChange}
        onSubmit={() => onSubmit(search)}
        placeholder='Drake'
        value={search}
      />
    </React.Fragment>
  );
}
