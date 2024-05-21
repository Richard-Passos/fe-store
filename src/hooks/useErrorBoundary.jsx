'use client';

import { useContext } from 'react';

import { ErrorBoundaryContext } from '@/contexts';

const useErrorBoundary = () => {
  const context = useContext(ErrorBoundaryContext);

  handleErrors(context);

  return context;
};

const handleErrors = (context) => {
  const errors = {
    id: 'useErrorBoundary must be within ErrorBoundary.'
  };

  Object.entries(context).forEach(([key, value]) => {
    const errorMessage = errors[key];

    if (errorMessage && !value) throw new Error(errorMessage);
  });
};

export default useErrorBoundary;
