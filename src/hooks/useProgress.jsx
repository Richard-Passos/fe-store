'use client';

import { useContext } from 'react';

import { ProgressContext } from '@/contexts';

const useProgress = () => {
  const context = useContext(ProgressContext);

  handleErrors(context);

  return context;
};

const handleErrors = (context) => {
  const errors = {
    id: 'useProgress must be within Progress.'
  };

  Object.entries(context).forEach(([key, value]) => {
    const errorMessage = errors[key];

    if (errorMessage && !value) throw new Error(errorMessage);
  });
};

export default useProgress;
