'use client';

import { createContext, useState } from 'react';

const ToastContext = createContext({
  state: {
    isOpen: false,
    isPaused: false
  },
  setState: () => {},
  duration: 5000
});

const ToastProvider = ({ value, ...props }) => {
  const [state, setState] = useState({ isOpen: false, isPaused: false });

  return (
    <ToastContext.Provider
      value={{ state, setState, ...value }}
      {...props}
    />
  );
};

export default ToastContext;
export { ToastProvider };
