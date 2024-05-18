'use client';

import { useContext } from 'react';

import { ComboboxContext } from '@/contexts';

const useCombobox = () => {
  const context = useContext(ComboboxContext);

  handleErrors(context);

  return context;
};

const handleErrors = (context) => {
  const errors = {
    id: 'useCombobox must be within Combobox.'
  };

  Object.entries(context).forEach(([key, value]) => {
    const errorMessage = errors[key];

    if (errorMessage && !value) throw new Error(errorMessage);
  });
};

export default useCombobox;
