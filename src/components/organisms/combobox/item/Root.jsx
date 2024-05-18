'use client';

import { forwardRef } from 'react';

import { CommandItem } from '@/components/molecules/command';
import { ComboboxItemProvider } from '@/contexts';
import { useCombobox, useComboboxItem } from '@/hooks';

const ComboboxItem = forwardRef(({ children, ...props }, ref) => {
  const { setState } = useCombobox(),
    { state: item, isChecked } = useComboboxItem();

  return (
    <CommandItem
      data-state={isChecked ? 'checked' : 'unchecked'}
      ref={ref}
      {...props}
      onSelect={(value) => {
        setState((state) => ({
          ...state,
          activeValue: value === state.activeValue ? '' : value,
          activeLabel: item.label,
          isOpen: false
        }));

        props.onSelect?.(value);
      }}
    >
      {children}
    </CommandItem>
  );
});
ComboboxItem.displayName = 'ComboboxItem';

const ComboboxItemWithProvider = ({ value, ...props }, ref) => {
  return (
    <ComboboxItemProvider defaultValue={value}>
      <ComboboxItem
        ref={ref}
        value={value}
        {...props}
      />
    </ComboboxItemProvider>
  );
};

export default forwardRef(ComboboxItemWithProvider);
