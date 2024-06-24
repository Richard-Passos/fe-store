'use client';

import { useContext } from 'react';

import { FilterCatalogContext } from '@/contexts';

const useFilterCatalog = () => {
  const context = useContext(FilterCatalogContext);

  handleErrors(context);

  return context;
};

const handleErrors = (context) => {
  const errors = {
    id: 'useFilterCatalog must be within FilterCatalog.'
  };

  Object.entries(context).forEach(([key, value]) => {
    const errorMessage = errors[key];

    if (errorMessage && !value) throw new Error(errorMessage);
  });
};

export default useFilterCatalog;
