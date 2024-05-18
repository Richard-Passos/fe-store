'use client';

import { forwardRef, useEffect } from 'react';

import { TextRoot } from '@/components/atoms/text';
import { useComboboxItem } from '@/hooks';

const ComboboxItemLabel = ({ children, ...props }, ref) => {
  const { setState, isChecked } = useComboboxItem();

  useEffect(() => {
    setState((state) => ({ ...state, label: children }));

    return () => setState((state) => ({ ...state, label: null }));
  }, [children, setState]);

  return (
    <TextRoot
      data-state={isChecked ? 'checked' : 'unchecked'}
      ref={ref}
      {...props}
    >
      {children}
    </TextRoot>
  );
};

export default forwardRef(ComboboxItemLabel);
