'use client';

import { useContext } from 'react';

import { ToggleContext } from '@/contexts';

const useToggleContext = () => {
  const context = useContext(ToggleContext);

  handleErrors(context);

  return context;
};

const handleErrors = (obj) => {
  const errors = {
    id: 'useToggleContext must be within Toggle.'
  };

  Object.entries(obj).forEach(([key, value]) => {
    const errorMessage = errors[key];

    if (errorMessage && !value) throw new Error(errorMessage);
  });
};

export default useToggleContext;
