'use client';

import { createContext, useId, useState } from 'react';

const ToastContext = createContext({
  id: '',
  state: {
    isOpen: false,
    isPaused: false
  },
  setState: () => {},
  duration: 0
});

const ToastProvider = ({ value, ...props }) => {
  const [state, setState] = useState({ isOpen: false, isPaused: false }),
    id = useId();

  return (
    <ToastContext.Provider
      value={{ id, state, setState, ...value }}
      {...props}
    />
  );
};

export default ToastContext;
export { ToastProvider };
