'use client';

import { createContext, useId, useState } from 'react';

import { useCombobox } from '@/hooks';

const ComboboxItemContext = createContext({
  id: '',
  state: { value: '', label: null },
  setState: () => {},
  isChecked: false
});

const ComboboxItemProvider = ({ defaultValue, value, ...props }) => {
  const { state: combobox } = useCombobox(),
    [state, setState] = useState({ value: defaultValue, label: null }),
    id = useId();

  const isChecked = combobox.activeValue === state.value;

  return (
    <ComboboxItemContext.Provider
      value={{ id, state, setState, isChecked, ...value }}
      {...props}
    />
  );
};

export default ComboboxItemContext;
export { ComboboxItemProvider };
