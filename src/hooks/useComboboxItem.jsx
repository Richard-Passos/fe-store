'use client';

import { useContext } from 'react';

import { ComboboxItemContext } from '@/contexts';

const useCombobox = () => {
  const context = useContext(ComboboxItemContext);

  handleErrors({ id: context.id, value: context.state.value });

  return context;
};

const handleErrors = (context) => {
  const errors = {
    id: 'useComboboxItem must be within ComboboxItem.',
    value: 'Combobox must recieve a value as prop.'
  };

  Object.entries(context).forEach(([key, value]) => {
    const errorMessage = errors[key];

    if (errorMessage && !value) throw new Error(errorMessage);
  });
};

export default useCombobox;
