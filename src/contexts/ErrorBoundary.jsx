'use client';

import { createContext, useId } from 'react';

const ErrorBoundaryContext = createContext({
  id: ''
});

const ErrorBoundaryProvider = ({ value, ...props }) => {
  const id = useId();

  return (
    <ErrorBoundaryContext.Provider
      value={{ id, ...value }}
      {...props}
    />
  );
};

export default ErrorBoundaryContext;
export { ErrorBoundaryProvider };
