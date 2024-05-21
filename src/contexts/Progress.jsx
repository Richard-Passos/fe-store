'use client';

import { createContext, useId } from 'react';

const ProgressContext = createContext({ id: '', activeValue: 0, min: 0, max: 100 });

const ProgressProvider = ({ value, ...props }) => {
  const id = useId();

  return (
    <ProgressContext.Provider
      value={{ id, ...value }}
      {...props}
    />
  );
};

export default ProgressContext;
export { ProgressProvider };
