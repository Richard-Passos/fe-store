'use client';

import { createContext, useId, useState } from 'react';

const ComboboxContext = createContext({
  id: '',
  state: { isOpen: false, activeValue: '', activeLabel: null },
  setState: () => {}
});

const ComboboxProvider = ({ value, ...props }) => {
  const [state, setState] = useState({
      isOpen: false,
      activeValue: '',
      activeLabel: null
    }),
    id = useId();

  return (
    <ComboboxContext.Provider
      value={{ id, state, setState, ...value }}
      {...props}
    />
  );
};

export default ComboboxContext;
export { ComboboxProvider };
