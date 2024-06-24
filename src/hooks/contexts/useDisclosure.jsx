'use client';

import { useContext } from 'react';

import { DisclosureContext } from '@/contexts';

const useDisclosureContext = () => {
  const context = useContext(DisclosureContext);

  handleErrors(context);

  return context;
};

const handleErrors = (obj) => {
  const errors = {
    id: 'useDisclosureContext must be within Disclosure.'
  };

  Object.entries(obj).forEach(([key, value]) => {
    const errorMessage = errors[key];

    if (errorMessage && !value) throw new Error(errorMessage);
  });
};

export default useDisclosureContext;
