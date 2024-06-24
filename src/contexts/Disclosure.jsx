'use client';

import { createContext } from 'react';

import { useDisclosure, useId } from '@/hooks';

const DEFAULTS = {
  id: '',
  isOpen: false,
  open: () => {},
  close: () => {},
  toggle: () => {},
  dataState: ''
};

const DisclosureContext = createContext(DEFAULTS);

const DisclosureProvider = ({
  defaultValue = DEFAULTS.isOpen,
  value,
  ...props
}) => {
  const [isOpen, handlers] = useDisclosure(defaultValue),
    id = useId();

  const dataState = isOpen ? 'open' : 'closed';

  return (
    <DisclosureContext.Provider
      value={{
        id,
        isOpen,
        dataState,
        ...handlers,
        ...value
      }}
      {...props}
    />
  );
};

export default DisclosureContext;
export { DisclosureProvider };
