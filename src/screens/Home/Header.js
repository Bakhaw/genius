import React from 'react';
import Input from '../../components/Input';

import { withContext } from '../../context';

function Form({ contextActions, contextState, isLoading, onSubmit }) {
  const { setStateByKey } = contextActions;
  const { search } = contextState;

  const handleInputChange = e => setStateByKey('search', e.target.value);
  const handleSubmit = () => onSubmit(search);
  const handleClearInput = () => {
    setStateByKey('search', '');
    document.getElementById('InputComponent').focus();
  };

  return (
    <Input
      clearInput={handleClearInput}
      isLoading={isLoading}
      label='Search artists & more'
      onChange={handleInputChange}
      onSubmit={handleSubmit}
      placeholder='Try «Drake» for example'
      value={search}
    />
  );
}

export default withContext(Form);
