'use client';

import { createContext, useCallback } from 'react';

import { useId, useToggle } from '@/hooks';

const ToggleContext = createContext({
  id: '',
  activeValue: '',
  prevValue: '',
  nextValue: '',
  toggle: () => {}
});

const ToggleProvider = ({ values = [], value, ...props }) => {
  const [activeIdx, toggle] = useToggle([...Array(values.length).keys()]),
    id = useId();

  const activeValue = values.at(activeIdx),
    prevValue = values.at(activeIdx - 1),
    nextValue = values.at(activeIdx >= values.length - 1 ? 0 : activeIdx + 1);

  const handleToggle = useCallback(
    (cb) =>
      toggle((idx) => {
        let res = idx;

        if (typeof cb === 'function') {
          cb(values[idx]);
        } else if (cb) {
          const index = values.indexOf(cb);

          res = index >= 0 ? index : idx;
        }

        return res;
      }),
    [toggle, values]
  );

  return (
    <ToggleContext.Provider
      value={{
        id,
        activeValue,
        prevValue,
        nextValue,
        toggle: handleToggle,
        ...value
      }}
      {...props}
    />
  );
};

export default ToggleContext;
export { ToggleProvider };
